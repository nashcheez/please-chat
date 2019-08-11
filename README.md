[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/nashcheez/please-chat">
    <img src="images/chat-icon.png" alt="chat-logo" width="80" height="80" />
  </a>

  <h3 align="center">Please Chat</h3>

  <p align="center">
    A chat application built on WebSocket
    <br />
    <br />
    <a href="https://nashcheez.github.io/please-chat/" target="_blank">View Demo</a>
    ·
    <a href="https://github.com/nashcheez/please-chat/issues">Report Bug</a>
    ·
    <a href="https://github.com/nashcheez/please-chat/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->

## Table of Contents

-   [About the Project](#about-the-project)
    -   [Key Features](#key-features)
    -   [Built With](#built-with)
-   [Getting Started](#getting-started)
    -   [Installation](#installation)
-   [Roadmap](#roadmap)
-   [Contributing](#contributing)
-   [License](#license)
-   [Contact](#contact)
-   [Acknowledgements](#acknowledgements)

<!-- ABOUT THE PROJECT -->

## About The Project

[![Product Name Screen Shot][product-screenshot]](https://nashcheez.github.io/please-chat/)

Please Chat is an application similar to WhatsApp Web/iMessage featuring a two column layout which has a list of friends and compose box on the left column, and chat history on the right.

### Key Features

-   The application lets you search for a friend and start a chat with him. The user interface is inspired from the iMessage application on the Mac OS.

-   One can send a message and see the replies echoed in a typical message format. Switching between friends lets you instantly see the corresponding chat history.

-   Error handling has been implemented where apt error messages are displayed (connection closure, network failure etc).

-   There is a toggle to switch between the connection status (online/offline).

-   The app has an object oriented architecture implementing encapsulation and all the global variables & functions are attributed to a single `pleaseChat` object.

### Built With

The application has been developed using HTML, SCSS, JavaScript and jQuery.

A [WebSocket echo service](https://www.websocket.org/echo.html) has been used to fetch the chats & acts as the connection layer.

For more information about jQuery, please visit the official docs.

-   [JQuery](https://jquery.com)

<!-- GETTING STARTED -->

## Getting Started

To run the application, just open `index.html` in your browser.

### Installation

1. Clone the repo

```sh
git clone https://github.com/nashcheez/please-chat.git
```

2. Open `index.html`

<!-- ROADMAP -->

## Roadmap

See the [open issues](https://github.com/nashcheez/please-chat/issues) for a list of proposed features (and known issues).

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

[@nashcheez](https://twitter.com/nashcheez) - nashcheez@gmail.com

Project Link: [https://github.com/nashcheez/please-chat](https://github.com/nashcheez/please-chat)

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

-   [iMessage](https://developer.apple.com/imessage/)
-   [FromSuperheroes](https://twitter.com/FromSuperheroes)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/nashcheez/please-chat.svg?style=flat-square
[contributors-url]: https://github.com/nashcheez/please-chat/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/nashcheez/please-chat.svg?style=flat-square
[forks-url]: https://github.com/nashcheez/please-chat/network/members
[stars-shield]: https://img.shields.io/github/stars/nashcheez/please-chat.svg?style=flat-square
[stars-url]: https://github.com/nashcheez/please-chat/stargazers
[issues-shield]: https://img.shields.io/github/issues/nashcheez/please-chat.svg?style=flat-square
[issues-url]: https://github.com/nashcheez/please-chat/issues
[license-shield]: https://img.shields.io/github/license/nashcheez/please-chat.svg?style=flat-square
[license-url]: https://github.com/nashcheez/please-chat/blob/master/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-blue.svg?style=flat-square&logo=linkedin&colorB=0077b5
[linkedin-url]: https://linkedin.com/in/nashcheez
[product-screenshot]: https://user-images.githubusercontent.com/2913308/62838677-411fc800-bc9d-11e9-8f4e-9f280541e2da.png
