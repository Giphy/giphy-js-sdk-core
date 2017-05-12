var expect = require('chai').expect;
var GphApiClient = require('./src/GphApiClient')
var _ = require('lodash');

// describe('SEARCH - gifs', function() {
//   var apiKey = "4OMJYpPoYwVpe";
//   var client = GphApiClient(apiKey);


//   it('PROMISE - returns search results', function(done) {
//     // Increase the default timeout for this test
//     // If the test takes longer than this, it will fail
//     this.timeout(3000);
   
//     client.search("gifs", {
//       "q": "fun"
//     }).then((response) => {
//       expect(Array.isArray(response.data)).to.equal(true);
//       expect(response.data.length).to.be.above(0);

//       done();
//     }).catch((err) => {
//       done(err);
//     })
//   });

//   it('passed in arguments returns search results (OFFSET) validated', function(done) {
//     // Increase the default timeout for this test
//     // If the test takes longer than this, it will fail
//     this.timeout(3000);
   
//     client.search("gifs", {
//       "q": "fun",
//       "limit": 10,
//       "offset": 25
//     }).then((response) => {
//       expect(Array.isArray(response.data)).to.equal(true);
//       expect(response.data.length).to.be.above(0);
//       expect(response.pagination.offset).to.equal(25)
//       done();
//     }).catch((err) => {
//       done(err);
//     })
//   });

  // it('CALLBACK - returns search results', function(done) {
  //   // Increase the default timeout for this test
  //   // If the test takes longer than this, it will fail
  //   this.timeout(3000);

  //   client.search("gifs", {
  //     "q": "fun"
  //   }, function(response, err) {
  //     if (err) {
  //       done(err)
  //     }
  //     expect(Array.isArray(response.data)).to.equal(true);
  //     expect(response.data.length).to.be.above(0);
  //     done();
  //   });
  // });

  // // it('PROMISE - returns an array of objects (gifs)', function(done) {
  // //   // Increase the default timeout for this test
  // //   // If the test takes longer than this, it will fail
  // //   this.timeout(3000);
  // //   client.search("gifs", {
  // //     "q": "fun"
  // //   }).then((response) => {

  // //     response.data.forEach(function(gif) {
  // //       expect(gif.type).to.equal('gif');
  // //     });
  // //     done();
  // //   }).catch((err) => {
  // //     throw done(err)
  // //   })
  // // })



  // // it('CALLBACK - returns an array of objects (gifs)', function(done) {
  // //   // Increase the default timeout for this test
  // //   // If the test takes longer than this, it will fail
  // //   this.timeout(3000);
  // //   client.search("gifs", {
  // //     "q": "fun"
  // //   }, function(response, err) {
  // //     if (err) done(err);

  // //     response.data.forEach(function(gif) {
  // //       expect(gif.type).to.equal('gif');
  // //     });
  // //     done();
  // //   });
  // // });
// });


describe('SEARCH - stickers', function() {
  var apiKey = "4OMJYpPoYwVpe";
  var client = GphApiClient(apiKey);



  // it('PROMISE - returns search results', function(done) {
  //   // Increase the default timeout for this test
  //   // If the test takes longer than this, it will fail
  //   this.timeout(3000);

  //   client.search("stickers", {
  //     "q": "fun"
  //   }).then((response) => {
  //     expect(Array.isArray(response.data)).to.equal(true);
  //     expect(response.data.length).to.be.above(0);

  //     done();
  //   }).catch((err) => {
  //     done(err);
  //   })
  // });


  it('passed in arguments returns search results (OFFSET) validated', function(done) {
    // Increase the default timeout for this test
    // If the test takes longer than this, it will fail
    this.timeout(3000);
   
    client.search("stickers", {
      "q": "fun",
      "limit": 10,
      "offset": 25
    }).then((response) => {
      expect(Array.isArray(response.data)).to.equal(true);
      expect(response.data.length).to.be.above(0);
      expect(response.pagination.offset).to.equal(25)
      done();
    }).catch((err) => {
      done(err);
    })
  });


  // it('CALLBACK - returns search results', function(done) {
  //   // Increase the default timeout for this test
  //   // If the test takes longer than this, it will fail
  //   this.timeout(3000);

  //   client.search("stickers", {
  //     "q": "fun"
  //   }, function(response, err) {
  //     if (err) {
  //       done(err)
  //     }
  //     expect(Array.isArray(response.data)).to.equal(true);
  //     expect(response.data.length).to.be.above(0);
  //     done();
  //   });
  // });

  // it('PROMISE - returns an array of objects (gifs)', function(done) {
  //   // Increase the default timeout for this test
  //   // If the test takes longer than this, it will fail
  //   this.timeout(3000);
  //   client.search("stickers", {
  //     "q": "fun"
  //   }).then((response) => {

  //     response.data.forEach(function(gif) {
  //       expect(gif.type).to.equal('gif');

  //     });
  //     done();
  //   }).catch((err) => {
  //     throw done(err)
  //   })
  // })

  // it('CALLBACK - returns an array of objects (gifs)', function(done) {
  //   // Increase the default timeout for this test
  //   // If the test takes longer than this, it will fail
  //   this.timeout(3000);
  //   client.search("stickers", {
  //     "q": "fun"
  //   }, function(response, err) {
  //     if (err) done(err);

  //     response.data.forEach(function(gif) {
  //       expect(gif.type).to.equal('gif');

  //     });
  //     done();
  //   });
  // });
});

// describe('TRENDING - gifs', function() {
//     var apiKey = "4OMJYpPoYwVpe";
//   var client = GphApiClient(apiKey);



//   it('PROMISE - trending results', function(done) {
//     // Increase the default timeout for this test
//     // If the test takes longer than this, it will fail
//     this.timeout(3000);

//     client.trending("gifs", {}).then((response) => {
//       expect(Array.isArray(response.data)).to.equal(true);
//       expect(response.data.length).to.be.above(0);

//       done();
//     }).catch((err) => {
//       done(err);
//     })
//   });

//   it('CALLBACK - returns trending results', function(done) {
//     // Increase the default timeout for this test
//     // If the test takes longer than this, it will fail
//     this.timeout(3000);

//     client.trending("gifs", {}, function(response, err) {
//       if (err) {
//         done(err)
//       }
//       expect(Array.isArray(response.data)).to.equal(true);
//       expect(response.data.length).to.be.above(0);
//       done();
//     });
//   });

//   it('PROMISE - returns an array of objects (gifs)', function(done) {
//     // Increase the default timeout for this test
//     // If the test takes longer than this, it will fail
//     this.timeout(3000);
//     client.trending("gifs", {}).then((response) => {

//       response.data.forEach(function(gif) {
//         expect(gif.type).to.equal('gif');
//       });
//       done();
//     }).catch((err) => {
//       throw done(err)
//     })
//   })

//   it('CALLBACK - returns an array of objects (gifs)', function(done) {
//     // Increase the default timeout for this test
//     // If the test takes longer than this, it will fail
//     this.timeout(2000);
//     client.trending("gifs", {}, function(response, err) {
//       if (err) done(err);

//       response.data.forEach(function(gif) {
//         expect(gif.type).to.equal('gif');
//       });
//       done();
//     });
//   });

// });

// describe('TRENDING - stickers', function() {
//   var apiKey = "4OMJYpPoYwVpe";
//   var client = GphApiClient(apiKey);


//   it('PROMISE - trending results', function(done) {
//     // Increase the default timeout for this test
//     // If the test takes longer than this, it will fail
//     this.timeout(3000);

//     client.trending("stickers", {}).then((response) => {
//       expect(Array.isArray(response.data)).to.equal(true);
//       expect(response.data.length).to.be.above(0);

//       done();
//     }).catch((err) => {
//       done(err);
//     })
//   });

//   it('CALLBACK - returns trending results', function(done) {
//     // Increase the default timeout for this test
//     // If the test takes longer than this, it will fail
//     this.timeout(3000);

//     client.trending("stickers", {}, function(response, err) {
//       if (err) {
//         done(err)
//       }
//       expect(Array.isArray(response.data)).to.equal(true);
//       expect(response.data.length).to.be.above(0);
//       done();
//     });
//   });

//   it('PROMISE - returns an array of objects (gifs)', function(done) {
//     // Increase the default timeout for this test
//     // If the test takes longer than this, it will fail
//     this.timeout(3000);
//     client.trending("stickers", {}).then((response) => {

//       response.data.forEach(function(gif) {
//         expect(gif.type).to.equal('gif');

//       });
//       done();
//     }).catch((err) => {
//       throw done(err)
//     })
//   })

//   it('CALLBACK - returns an array of objects (gifs)', function(done) {
//     // Increase the default timeout for this test
//     // If the test takes longer than this, it will fail
//     this.timeout(2000);
//     client.trending("stickers", {}, function(response, err) {
//       if (err) done(err);

//       response.data.forEach(function(gif) {
//         expect(gif.type).to.equal('gif');
//       });
//       done();
//     });
//   });

// });

// describe('TRANSLATE - gifs', function() {
//     var apiKey = "4OMJYpPoYwVpe";
//   var client = GphApiClient(apiKey);



//   it('PROMISE - returns a single object that is a gif', function(done) {
//     this.timeout(2000);
//     client.translate("gifs", {
//       "s": "cool"
//     }).then((response) => {
//       expect(Array.isArray(response.data)).to.equal(false);
//       expect(response.data.type).to.equal('gif');
//       done();

//     }).catch((err) => {
//       done(err)
//     })
//   });
// });

// describe('TRANSLATE - stickers', function(done) {
//    var apiKey = "4OMJYpPoYwVpe";
//   var client = GphApiClient(apiKey);



//   it('PROMISE - returns one sticker from the sticker shop', function(done) {
//     this.timeout(2000);
//     client.translate("stickers", {
//       "s": "cool"
//     }, (response, err) => {
//       if (err) done(err);

//       expect(Array.isArray(response.data)).to.equal(false);
//       expect(response.data.type).to.equal('gif');

//       done();
//     });
//   });

// });

// describe('RANDOM - gifs', function() {
//     var apiKey = "4OMJYpPoYwVpe";
//   var client = GphApiClient(apiKey);



//   it('PROMISE - returns a random single gif', function(done) {
//     this.timeout(2000);
//     client.random("gifs", {}).then((response) => {
//       expect(Array.isArray(response.data)).to.equal(false);
//       expect(response.data.type).to.equal('gif');
//       done();

//     }).catch((err) => {
//       done(err)
//     })
//   });

//   it('CALLBACK - returns a random single gif', function(done) {
//     this.timeout(2000);
//     client.random("gifs", {}, (response, err) => {
//       expect(Array.isArray(response.data)).to.equal(false);
//       expect(response.data.type).to.equal('gif');
//       done();
//     });
//   });

// });

// describe('RANDOM - stickers', function() {
//    var apiKey = "4OMJYpPoYwVpe";
//   var client = GphApiClient(apiKey);



//   it('PROMISE - returns a random single gif', function(done) {
//     this.timeout(2000);
//     client.random("stickers", {}).then((response) => {
//       expect(Array.isArray(response.data)).to.equal(false);
//       expect(response.data.type).to.equal('gif');
//       done();

//     }).catch((err) => {
//       done(err)
//     })
//   });


//   it('CALLBACK - returns a random single gif', function(done) {
//     this.timeout(2000);
//     client.random("stickers", {}, (response, err) => {
//       expect(Array.isArray(response.data)).to.equal(false);
//       expect(response.data.type).to.equal('gif');
//       done();
//     });
//   });

// });

// describe('GIF BY ID', function() {
//   var apiKey = "4OMJYpPoYwVpe";
//   var client = GphApiClient(apiKey);



//   it('PROMISE - returns a single gif given an ID', function(done) {
//     this.timeout(2000);
//     client.gifByID("3og0IvOsj15uYsxYZi").then((response) => {
//       expect(Array.isArray(response.data)).to.equal(false);
//       expect(response.data.type).to.equal('gif');

//       done()
//     }).catch((err) => {
//       done(err)
//     })
//   });

//   it('CALLBACK - returns a single gif given an ID', function(done) {
//     this.timeout(2000);
//     client.gifByID("3og0IvOsj15uYsxYZi", function(response, err) {
//       if (err) done(err);

//       expect(Array.isArray(response.data)).to.equal(false);
//       expect(response.data.type).to.equal('gif');
//       done()
//     })
//   });

// });

// describe('GIFS BY IDS', function() {
//   var apiKey = "4OMJYpPoYwVpe";
//   var client = GphApiClient(apiKey);


//   it('PROMISE - returns gifs based on the ids sent', function(done) {
//     this.timeout(2000);
//     client.gifsByIDs({
//       "ids": ["3og0IvOsj15uYsxYZi", "l41lS0IgRIFkAuA5G", "3o6oziEt5VUgsuunxS"]
//     }).then((response) => {
//       expect(Array.isArray(response.data)).to.equal(true);
//       expect(response.data.length).to.equal(3);

//       response.data.forEach(function(gif) {
//         expect(gif.type).to.equal('gif');
//       });

//       done();
//     }).catch((err) => {
//       done(err);
//     })
//   });

//   it('CALLBACK - returns gifs based on the ids sent', function(done) {
//     this.timeout(2000);
//     client.gifsByIDs({
//       "ids": ["3og0IvOsj15uYsxYZi", "l41lS0IgRIFkAuA5G", "3o6oziEt5VUgsuunxS"]
//     }, function(response, err) {
//       if (err) done(err);

//       expect(Array.isArray(response.data)).to.equal(true);
//       expect(response.data.length).to.equal(3);

//       response.data.forEach(function(gif) {
//         expect(gif.type).to.equal('gif');
//       });

//       done();
//     });
//   });
// });

// describe('CATEGORIES', function() {
//   var apiKey = "4OMJYpPoYwVpe";
//   var client = GphApiClient(apiKey);



//   it('PROMISE - returns an array of categories', function(done) {
//     this.timeout(2000);
//     client.categoriesForGifs({}).then((response) => {
//       expect(Array.isArray(response.data)).to.equal(true);
//       response.data.forEach(function(category) {
//         expect(category).to.have.keys('name', 'name_encoded', 'subcategories', 'gif')
//       });
//       done();
//     }).catch((err) => {
//       done(err);
//     })
//   });

//   it('CALLBACK - returnss an array of categories', function(done) {
//     this.timeout(2000);
//     client.categoriesForGifs({}, function(response, err) {
//       if (err) done(err);
//       expect(Array.isArray(response.data)).to.equal(true);
//       response.data.forEach(function(category) {
//         expect(category).to.have.keys('name', 'name_encoded', 'subcategories', 'gif')
//       });
//       done();
//     });
//   });
// });

// describe('SUBCATEGORIES', function() {
//   var apiKey = "4OMJYpPoYwVpe";
//   var client = GphApiClient(apiKey);


//   it('PROMISE - returns an array of categories', function(done) {
//     this.timeout(2000);
//     client.subCategoriesForGifs("tv", {}).then((response) => {
//       expect(Array.isArray(response.data)).to.equal(true);
//       response.data.forEach(function(category) {
//         expect(category).to.have.keys('name_encoded', 'subcategories', 'name', 'gif')
//       });
//       done();
//     }).catch((err) => {
//       done(err);
//     })
//   });

//   it('CALLBACK - returns an array of categories', function(done) {
//     this.timeout(2000);
//     client.subCategoriesForGifs("tv", {}, function(response, err) {
//       if (err) done(err);
//       expect(Array.isArray(response.data)).to.equal(true);
//       response.data.forEach(function(category) {
//         expect(category).to.have.keys('name_encoded', 'subcategories', 'name', 'gif')
//       });
//       done();
//     });
//   });
// });


// describe('SUBCATEGORIES', function() {
//   var apiKey = "4OMJYpPoYwVpe";
//   var client = GphApiClient(apiKey);

//   it('PROMISE - returns an array of gifs', function(done) {
//     this.timeout(2000);
//     client.gifsByCategories("tv", "'the office'", {}).then((response) => {
//       expect(Array.isArray(response.data)).to.equal(true);
//       expect(response.data.length).to.be.above(0);

//       response.data.forEach(function(category) {
//         expect(category.type).to.equal('gif')
//       });
//       done();
//     }).catch((err) => {
//       done(err);
//     })
//   });

//   it('CALLBACK - returns an array of gifs', function(done) {
//     this.timeout(2000);
//     client.gifsByCategories("tv", "'the office'", {}, function(response, err) {
//       if (err) done(err);
//       expect(Array.isArray(response.data)).to.equal(true);
//       expect(response.data.length).to.be.above(0);
//       done();
//     });
//   });
// });


// describe('TERM SUGGESTIONS', function() {
//   var apiKey = "4OMJYpPoYwVpe";
//   var client = GphApiClient(apiKey);

//   it('PROMISE - returns an array of terms', function(done) {
//     this.timeout(2000);
//     client.termSuggestions("fake").then((response) => {
//       expect(Array.isArray(response.data)).to.equal(true);
//       expect(response.data.length).to.be.above(0);
//       done();
//     }).catch((err) => {
//       done(err);
//     })
//   });

//   it('CALLBACK - returns an array of terms', function(done) {
//     this.timeout(2000);
//     client.termSuggestions("fake", function(response, err) {
//       if (err) done(err);
//       expect(Array.isArray(response.data)).to.equal(true);
//       expect(response.data.length).to.be.above(0);
//       done();
//     });
//   });
// });


///


// describe('EMPTY RESPONSES', function() {
//   var apiKey = "4OMJYpPoYwVpe";
//   var client = GphApiClient(apiKey);

//   it('Search term with no responses returns empty array', function(done) {
//     // Increase the default timeout for this test
//     // If the test takes longer than this, it will fail
//     this.timeout(3000);
   
//     client.search("gifs", {
//       "q": "funfunfunfunnofun"
//     }).then((response) => {
//       expect(Array.isArray(response.data)).to.equal(true);
//       expect(response.data.length).to.equal(0);

//       done();
//     }).catch((err) => {
//       done(err);
//     })
//   });
// });


// describe('ERROR RESPONSES', function() {
//   var apiKey = "4OMJYpPoYwVpe";
//   var client = GphApiClient(apiKey);

//   it('SEARCH Missing type variable throws appropriate error (gif instead of gifs)', function(done) {
//     // Increase the default timeout for this test
//     // If the test takes longer than this, it will fail
//     this.timeout(3000);
   
//     client.search("gif", {
//       "q": "funfunfunfunnofun"
//     }).then((response) => {

//     }).catch((err) => {
//         expect(err).to.have.keys('status', 'error', 'statusText');
//       done();
//     })
//   });

//   it('GifById - pass in a wrong ID', function(done) {
//     // Increase the default timeout for this test
//     // If the test takes longer than this, it will fail
//     this.timeout(3000);
   
//     client.gifByID("8SDNJAJS2WRONG").then((response) => {

//     }).catch((err) => {
//         expect(err).to.have.keys('status', 'error', 'statusText');
//       done();
//     })
//   });
// });

// describe('INVALID API KEY ATTEMPTS', function() {
//   var apiKey = "4OMJYpPoYwVpe888888";
//   var client = GphApiClient(apiKey);

//   it('INVALID API KEY', function(done) {
//     // Increase the default timeout for this test
//     // If the test takes longer than this, it will fail
//     var apiKeyTemp = "4OMsssssJYpPoYwVpe";
//     var clientTemp = GphApiClient(apiKey);

//     this.timeout(3000);
   
//     client.gifByID("8SDNJAJS2WRONG").then((response) => {

//     }).catch((err) => {
//         expect(err).to.have.keys('status', 'error', 'statusText');
//       done();
//     })
//   });
// });

//CANCEL OF REQUESTS 

// describe('CANCEL REQUESTS', function() {
//   var apiKey = "4OMJYpPoYwVpe";
//   var client = GphApiClient(apiKey);

//   it('cancel outgoing request', function(done) {
//     // Increase the default timeout for this test
//     // If the test takes longer than this, it will fail
//     var apiKeyTemp = "4OMsssssJYpPoYwVpe";
//     var clientTemp = GphApiClient(apiKey);

//     this.timeout(3000);
   
//     var testCase = client.gifByID("8SDNJAJS2WRONG")

//     testCase.then((response) => {
//       done()
//     })

//     testCase.cancel();

//     testCase.catch((err) => {
//       expect(err).to.have.keys('status', 'error', 'statusText');
//       done();
//     })
//   });
// });

//PASSING IN ARGUMENTS 



