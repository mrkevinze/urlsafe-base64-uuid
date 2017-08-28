# urlsafe-base64-uuid

A urlsafe base64 random uuid generator for Node.js.

## About

A universally unique identifier (uuid) is a number. Its is typically represented as a 36-character hex string which takes the form xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx.

However, by saving the uuid in base64 and by eliminating the padding character `=`, you can reduce the number of characters from 36 to 22. The result is case sensitive.

This will be useful if you need to create unique urls such as example.com/xxxxxxxxxxxxxxxxxxxxxx.

To make the result url-safe, `+` and `/` characters will be converted to `-` and `.` respectively. For more information, please see [this article](https://en.wikipedia.org/wiki/Base64#URL_applications).

## Installation
1. Download the code.
2. `cd` to the repository.
3. `npm install`.

## Usage Example
See [example.js](example.js).
