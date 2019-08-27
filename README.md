# Text Encryptor (encrypt_text)

An web-based text encryption tool for untrustworthy instant-messaging (IM) environment, which could be used at both online and offline.

## Motivation

This software is trying to solve one simple question: How to spread messages via unsafe channels.

## How it Works

This tool can convert any text into a string of randomly generated characters. So these random strings could be safely passed via any unsafe IM software.

Any receiver could decode these messages by a pre-shared password.

Summary:

1. The sender and the receiver should have:
  - This software
  - A pre-shared password
2. The sender encrypts messages by the password
3. The receiver decrypts the messages by the same password

**This software uses Advanced Encryption Standard (AES) algorithm to protect your privacy.**

## Software Dependency

* NodeJS
* NPM
* Git

## Installation

```
git clone https://github.com/fangong-tv/encrypt_text.git
npm install
npm start
```

Optionally, for webmaster who owns a server, you may `npm run build` to compile a production version, which could be hosted by any static web server.

## Credit

* simple-crypto-js <https://github.com/danang-id/simple-crypto-js>

## Author

* WQBC (Initial at Aug 27, 2019)

## License

AGPL-3.0
