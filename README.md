# Giphy Core SDK for JS

The **Giphy Core SDK** is a wrapper around [Giphy API](https://github.com/Giphy/GiphyAPI).

![Build Status](https://travis-ci.com/Giphy/giphy-js-sdk-core.svg?token=ytpQbMSuy8sydsqZwbwp&branch=master&style=flat-square)   [![npm version](https://badge.fury.io/js/giphy-js-sdk-core.svg)](https://badge.fury.io/js/giphy-js-sdk-core) [![Downloads][downloads-image]][downloads-url]


[license-url]: LICENSE.md
[downloads-image]: https://img.shields.io/npm/dm/giphy-js-sdk-core.svg?style=flat-square
[downloads-url]: http://npm-stat.com/charts.html?package=giphy-js-sdk-core
[version-svg]: https://img.shields.io/npm/v/giphy-js-sdk-core.svg?style=flat-square
[package-url]: https://npmjs.org/package/giphy-js-sdk-core

[Giphy](https://www.giphy.com) is the best way to search, share, and discover GIFs on the Internet. Similar to the way other search engines work, the majority of our content comes from indexing based on the best and most popular GIFs and search terms across the web. We organize all those GIFs so you can find the good content easier and share it out through your social channels. We also feature some of our favorite GIF artists and work with brands to create and promote their original GIF content.

[![](https://media.giphy.com/media/5xaOcLOqNmWHaLeB14I/giphy.gif)]()

# Getting Started

### Supported End-points

* [Search GIFs/Stickers](#search-endpoint)
* [Trending GIFs/Stickers](#trending-endpoint)
* [Translate GIFs/Stickers](#translate-endpoint)
* [Random GIFs/Stickers](#random-endpoint)
* [GIF by ID](#get-gif-by-id-endpoint)
* [GIFs by IDs](#get-gifs-by-ids-endpoint)
* [Categories for GIFs](#categories-endpoint)
* [Subcategories for GIFs](#subcategories-endpoint)
* [GIFs for a Subcategory](#subcategory-content-endpoint)
* [Term Suggestions](#term-suggestions-endpoint)


# Setup

### Require Module


npm
```shell
npm install --save giphy-js-sdk-core
```

### Initialize Giphy SDK

```javascript
var GphApiClient = require('giphy-js-sdk-core')
client = GphApiClient("YOUR_API_KEY")
```

### Search Endpoint
Search all Giphy GIFs for a word or phrase. Punctuation will be stripped and ignored.
<br>
<br>

*Required Params*
* "q" - string - search query term or phrase

*Optional Params*
* "limit" - integer - number of results to return, maximum 100. Default 25.
* "offset" - integer - results offset, defaults to 0.
* "rating" - string - limit results to those rated (y,g, pg, pg-13 or r).
* "lang" - string - specify default country for regional content; format is 2-letter ISO 639-1 country code. See list of supported languages [here](https://github.com/Giphy/GiphyAPI/blob/master/README.md#language-support)
* "fmt" - string - return results in html or json format (useful for viewing responses as GIFs to debug/test)
* "sort" - string - the sort order of the results returned (recent | relevant)

```javascript
/// Gif Search
client.search('gifs', {"q": "cats"})
  .then((response) => {
    response.data.forEach((gifObject) => {
      console.log(gifObject)
    })
  })
  .catch((err) => {

  })

/// Sticker Search
client.search('stickers', {"q": "cats"})
  .then((response) => {

  })
  .catch((err) => {

  })
```
### Trending Endpoint
Fetch GIFs currently trending online. Hand curated by the Giphy editorial team. The data returned mirrors the GIFs showcased on the [Giphy](https://www.giphy.com) homepage.
<br>
<br>
*Required Params*
* none

*Optional Params*
* "limit" - integer - number of results to return, maximum 100. Default 25.
* "offset" - integer - results offset, defaults to 0
* "rating" - string - limit results to those rated (y,g, pg, pg-13 or r).
* "fmt" - string - return results in html or json format (useful for viewing responses as GIFs to debug/test)


```javascript
/// Trending Gifs
client.trending("gifs", {})
  .then((response) => {

  })
  .catch((err) => {

  })

/// Trending Stickers
client.trending("stickers", {})
  .then((response) => {

  })
  .catch((err) => {

  })
```

### Translate Endpoint
The translate API draws on search, but uses the Giphy "special sauce" to handle translating from one vocabulary to another. In this case, words and phrases to GIFs. Example implementations of translate can be found in the Giphy Slack, Hipchat, Wire, or Dasher integrations. Use a plus or url encode for phrases.
<br>
<br>
*Required Params*
* "s" - string - term or phrase to translate into a GIF

*Optional Params*
* "rating" - (optional) limit results to those rated (y,g, pg, pg-13 or r).
* "lang" - (optional) specify default country for regional content; format is 2-letter ISO 639-1 country code. See list of supported langauges [here](https://github.com/Giphy/GiphyAPI/blob/master/README.md#language-support)
* "fmt" - (optional) return results in html or json format (useful for viewing responses as GIFs to debug/test)

```javascript
/// Translate to a Gif
client.translate('gifs', {"s": 'cool'})
  .then((response) => {

  })
  .catch((err) => {

  })

/// Translate to a Sticker
client.translate('stickers', {"s": 'cool'})
  .then((response) => {

  })
  .catch((err) => {

  })
```

### Random Endpoint
Returns a random GIF, limited by tag. Excluding the tag parameter will return a random GIF from the Giphy catalog.
<br>
<br>
*Required Params*
* none

*Optional Params*
* "tag" - string - the GIF tag to limit randomness by
* "rating" - string - limit results to those rated (y,g, pg, pg-13 or r).
* "fmt" - (optional) return results in html or json format (useful for viewing responses as GIFs to debug/test)

```javascript
/// Random Gif
client.random('gifs', {})
  .then((response) => {

  })
  .catch((err) => {

  })
  
/// Random Sticker
client.random('stickers', {})
  .then((response) => {

  })
  .catch((err) => {

  })
```

### Get GIF by ID Endpoint
Returns meta data about a GIF, by GIF id. In the below example, the GIF ID is "feqkVgjJpYtjy"
<br>
<br>
*Required Params*
* none

*Optional Params*
* none

```javascript
/// Gif by Id
client.gifByID("feqkVgjJpYtjy")
  .then((response) => {

  })
  .catch((err) => {

  })
```

### Get GIFs by IDs Endpoint
A multiget version of the get GIF by ID endpoint. In this case the IDs are feqkVgjJpYtjy and 7rzbxdu0ZEXLy.
*Required Params*
* "ids" - a comma separated list of IDs to fetch GIF size data.

*Optional Params*
* none
```javascript
/// Gifs by Ids

client.gifsByIDs({"ids": ["feqkVgjJpYtjy", "7rzbxdu0ZEXLy"]})
  .then((response) => {

  })
  .catch((err) => {

  })
```

### Categories Endpoint
Fetch Giphy categories
<br>
<br>
*Required Params*
* none

*Optional Params*
* "limit" - integer - number of results to return, maximum 100. Default 25.
* "offset" - integer - results offset, defaults to 0.


```javascript
/// Gifs by Ids

client.categoriesForGifs({})
  .then((response) => {

  })
  .catch((err) => {

  })
```

### Subcategories Endpoint
Get Subcategories for GIFs given a category. You will need this subcategory object to pull GIFs for this category.
<br>
<br>
*Required Params*
* none

*Optional Params*
* "limit" - integer - number of results to return, maximum 100. Default 25.
* "offset" - integer - results offset, defaults to 0.


```javascript
/// Gifs by Ids

client.subCategoriesForGifs("tv", {})
  .then((response) => {

  })
  .catch((err) => {

  })
```

### Subcategory Content Endpoint
Get GIFs for a given Sub-Category.
<br>
<br>
*Required Params*
* none

*Optional Params*
* "limit" - integer - number of results to return, maximum 100. Default 25.
* "offset" - integer - results offset, defaults to 0.

```javascript
/// Gifs by Ids

client.gifsByCategories("tv", "'the office'", {})
  .then((response) => {

  })
  .catch((err) => {

  })
```

### Term Suggestions Endpoint
Get term suggestions given a search term, or a substring.
<br>
<br>
*Required Params*
* none

*Optional Params*
* none


```javascript
/// Gifs by Ids

client.termSuggestions("cool")
  .then((response) => {
 
  })
  .catch((err) => {
 
  })
```


