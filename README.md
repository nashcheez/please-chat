# pleaseChat
A realtime chat application, similar to WhatsApp Web featuring a simple two column layout which has a list of friends on the left column, and chat history and compose box on the right.

**Attaching screenshot:**

![pleaseChat screenshot](https://cloud.githubusercontent.com/assets/2913308/20969022/27b73d00-bcad-11e6-97a4-f0e9337b1cc4.png)


**Few features/implementations in the code:**

* The pleaseChat application lets you search for a friend and start a chat with him/her. You can send messages to this friend and see the echoed replies in a typical messaging format. (The friends list is currently harcoded)

* Switching between friends lets you instantly see the appropriate chat history.

* The entire application is built using HTML, SCSS, JS & jQuery. It has been built on a Mac (macOS Sierra) using Sublime Text 3 and tested on Chrome, Firefox & Safari. The ST plugin ‘Sass Build’ has been used to convert the scss into css in minified form.

*  I have tried to maintain a modular and OOP architecture while implementing encapsulation, where all the variables, functions & events are attributed to a single object in the script.js file.

* I have used an existing WebSocket echo service (https://www.websocket.org/echo.html) to fetch the chats here. Apart from building the regular features of the Web socket connection, the friend list search, transfer and echo of messages, I have also implemented error handling where the appropriate error messages are displayed on the closure of a connection etc. There is also a toggle switch provided to toggle between the connection status (online/offline).

* The UI is inspired from the iMessage application on the mac. The theme of the chat has been a comical conversation between superheroes. The conversations have been picked up from the Twitter handle (@FromSuperheroes) & IMDb.

* I have used the best practices as much as possible for JavaScript & SCSS. I have tried to minimize DOM access wherever I could. And the selective nesting of the css classes has been done appropriately.

* I have provided comments wherever possible for a better understanding of the code.

