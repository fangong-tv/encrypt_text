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

---

# 文本加密器 (encrypt_text)

这是一款针对不可信在线聊天环境而开发的文本加密软件。基于 web 技术，同时支持服务器端运行与客户端运行。

## 缘起

本软件旨在解决一个基本问题：如何在不可靠的网络环境下分享信息。

## 原理

本软件可以将任意字符串转换成随机字符。这些随机字符可以安全的在不可靠的聊天工具内传播。

接收方可以用一个事先分享的已知密码解码这些信息。

总结：

1. 接收方需要：
 - 本软件
 - 一个事先分享的已知密码
2. 发送方将信息加密，并设定一个共享密码
3. 接收方用同样的密码解密该信息

**本软件采用 Advanced Encryption Standard (AES) 算法保护您的隐私**

## 软件环境

* NodeJS
* NPM
* Git

## 安装

```
git clone https://github.com/fangong-tv/encrypt_text.git
npm install
npm start
```

另外，网站管理员可以将本软件编译成适于部署的版本（`npm run build`），并且上传到服务器。任何支持静态网站的服务器都足以运行本软件。

## 感谢

* simple-crypto-js <https://github.com/danang-id/simple-crypto-js>

## 作者

* WQBC (于 2019.08.27 首次发布)

## 协议

AGPL-3.0
