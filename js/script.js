(function() {
    var pleaseChat = {
        websocket: new WebSocket("ws://echo.websocket.org/"),
        that: this,
        init: function() {
            var that = this;
            this.scrollToBottom();
            this.bindEvents();
            this.webSocketHandlers();
        },
        bindEvents: function() {
            this.toggleChat();
            this.filterPeople();
            this.compose();
            this.toggleStatus();
            this.sendMsg();
            this.sendMsgEnterHandler();
        },
        elements: {
            indicator: $(".indicator"),
            statusText: $(".status-text"),
            chatHeadNames: $(".people li .name"),
            filterInput: $("#filter-input"),
            statusToggleSwitch: $(".bottom"),
            msgInput: $("#msg-input"),
            sendBtn: $(".send")
        },
        scrollToBottom: function() {
            var activeChatWindow = $('.active-chat');
            activeChatWindow.scrollTop(activeChatWindow[0].scrollHeight + 70);
        },
        animatescrollToBottom: function() {
            var activeChatWindow = $('.active-chat');
            activeChatWindow.animate({ scrollTop: activeChatWindow.prop("scrollHeight") }, 1000);
        },
        toggleChat: function() {
            var that = this;
            $('.left .person').click(function() {
                if ($(this).hasClass('.active')) {
                    return false;
                } else {
                    var thisObj = $(this);
                    var findChat = thisObj.attr('data-chat'),
                        personName = thisObj.find('.name').text();
                    $('.right .top .name').html(personName);
                    $('.chat').removeClass('active-chat');
                    $('.left .person').removeClass('active');
                    thisObj.addClass('active');
                    $('.chat[data-chat = ' + findChat + ']').addClass('active-chat');
                    that.scrollToBottom();
                }
            });
        },
        filterPeople: function() {
            var that = this;
            this.elements.chatHeadNames.each(function() {
                $(this).attr('data-search-term', $(this).text().toLowerCase());
            });
            this.elements.filterInput.on('keyup', function() {
                var searchTerm = $(this).val().toLowerCase();
                that.elements.chatHeadNames.each(function() {
                    var that = $(this);
                    if (that.filter('[data-search-term *= ' + searchTerm + ']').length > 0 || searchTerm.length < 1) {
                        that.parent().show();
                    } else {
                        that.parent().hide();
                    }
                });
            });
        },
        compose: function() {
            var that = this;
            $(".compose").click(function() {
                that.elements.filterInput.focus();
            });
        },
        toggleStatus: function() {
            var that = this;
            this.elements.statusToggleSwitch.click(function(event) {
                var thisObj = $(this);
                if (thisObj.children().first().hasClass("offline")) {
                    that.websocket.close();
                    thisObj.children().first().removeClass("offline").addClass('online');
                    thisObj.children(".go-status").html("Go Online");
                } else {
                    that.websocket = new WebSocket("ws://echo.websocket.org/");
                    that.webSocketHandlers();
                    thisObj.children().first().removeClass("online").addClass('offline');
                    thisObj.children(".go-status").html("Go Offline");
                }
            });
        },
        sendMsg: function() {
            var that = this;
            this.elements.sendBtn.click(function() {
                if (that.elements.msgInput.val() !== '') {
                    if (that.websocket.readyState == 1) {
                        that.websocket.send(that.elements.msgInput.val());
                        $(".active-chat").append("<div class='bubble me'>" + that.elements.msgInput.val() + "</div>");
                    } else {
                        $(".active-chat").append("<div class='bubble me error'>" + that.elements.msgInput.val() + "</div><div class='error-msg'>Message could not be sent due to network error</div>");
                    }
                    that.elements.msgInput.val("");
                    that.animatescrollToBottom();
                }
            });
        },
        sendMsgEnterHandler: function() {
            var that = this;
            this.elements.msgInput.keydown(function(event) {
                var keyCode = (event.keyCode ? event.keyCode : event.which);
                if (keyCode == 13 && that.elements.msgInput.val() !== '') {
                    that.elements.sendBtn.trigger('click');
                }
            });
        },
        webSocketHandlers: function() {
            var that = this;
            this.websocket.onopen = function(evt) {
                that.elements.statusText.html("Online");
                that.elements.indicator.removeClass('offline').addClass('online');
            };
            this.websocket.onclose = function(evt) {
                that.elements.statusText.html("Offline");
                that.elements.indicator.removeClass('online').addClass('offline');
            };
            this.websocket.onmessage = function(evt) {
                $(".active-chat").append("<div class='bubble you'>" + evt.data + "</div>");
                that.animatescrollToBottom();
            };
            this.websocket.onerror = function(evt) {
                $(".active-chat").append("<div class='error-msg'>Network connection error</div>");
                that.animatescrollToBottom();
            };
        }
    };

    pleaseChat.init();

})();
