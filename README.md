# Giphy Core SDK for JS

The **Giphy Core SDK** is a wrapper around [Giphy API](https://github.com/Giphy/GiphyAPI).

[![Carthage compatible](https://img.shields.io/badge/Carthage-compatible-4BC51D.svg?style=flat)](https://github.com/Carthage/Carthage)
[![CocoaPods](https://img.shields.io/cocoapods/v/Giphy.svg)]()
[![](https://img.shields.io/badge/OS%20X-10.9%2B-lightgrey.svg)]()
[![](https://img.shields.io/badge/iOS-7.0%2B-lightgrey.svg)]()
[![Swift Version](https://img.shields.io/badge/Swift-3.0.x-orange.svg)]()

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

### React / CDN ...

Add the JS to your project..

```
blah
```

### Initialize Giphy SDK

```javascript
let client = GPHClient(apiKey: "YOUR_API_KEY")
```

### Search Gifs / Stickers

```javascript
/// Simple Gif Search
let _ = client.search("ryan gosling") { (response, error) in

    if let error = error as NSError? {
        // Do what you want to do with the error
    }

    if let response = response, let data = response.data, let pagination = response.pagination {
        print(response.meta)
        print(pagination)
        for result in data {
            print(result)
        }
    } else {
        print("No Result Found")
    }
}
```
