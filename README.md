# Giphy Core SDK for JS

The **Giphy Core SDK** is a wrapper around [Giphy API](https://github.com/Giphy/GiphyAPI).

[![Version][version-svg]][package-url] [![License][license-image]][license-url] [![Downloads][downloads-image]][downloads-url]

[license-image]: https://img.shields.io/badge/license-MIT-green.svg?style=flat-square
[license-url]: LICENSE.md
[downloads-image]: https://img.shields.io/npm/dm/giphycore.svg?style=flat-square
[downloads-url]: http://npm-stat.com/charts.html?package=giphy-web-sdk-core
[version-svg]: https://img.shields.io/npm/v/giphycore.svg?style=flat-square
[package-url]: https://npmjs.org/package/giphy-web-sdk-core

[Giphy](https://www.giphy.com) is the best way to search, share, and discover GIFs on the Internet. Similar to the way other search engines work, the majority of our content comes from indexing based on the best and most popular GIFs and search terms across the web. We organize all those GIFs so you can find the good content easier and share it out through your social channels. We also feature some of our favorite GIF artists and work with brands to create and promote their original GIF content.

[![](https://media.giphy.com/media/5xaOcLOqNmWHaLeB14I/giphy.gif)]()

# Getting Started

### Supported End-points

* Search Gifs/Stickers
* Trending Gifs/Stickers
* Translate Gifs/Stickers
* Random Gifs/Stickers
* GIF by ID(s)
* Categories for Gifs
* Subcategories for Gifs
* GIFs by Category
* Query Suggestions


# Setup

### Require Module

NPM
```
npm install --save giphy-web-sdk-core
```

### Initialize Giphy SDK

```javascript
var GphApiClient = require('giphy-web-sdk-core')
client = GphApiClient("YOUR_API_KEY")
```
