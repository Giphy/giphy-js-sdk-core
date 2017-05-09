var expect = require('chai').expect;
var GphApiClient = require('./src/GphApiClient')

describe('SEARCH - gifs', function() {
  beforeEach(function() {
    var apiKey = "dc6zaTOxFJmzC";
    GphApiClient.setCredentials(apiKey)
    //  new GphApiClient(apiKey);
  });

  it('PROMISE - returns search results', function(done) {
    // Increase the default timeout for this test
    // If the test takes longer than this, it will fail
    this.timeout(3000);

    GphApiClient.search("gifs", {
      "q": "fun"
    }).then((response) => {
      expect(Array.isArray(response.data)).to.equal(true);
      expect(response.data.length).to.be.above(0);

      done();
    }).catch((err) => {
      done(err);
    })
  });

  it('CALLBACK - returns search results', function(done) {
    // Increase the default timeout for this test
    // If the test takes longer than this, it will fail
    this.timeout(3000);

    GphApiClient.search("gifs", {
      "q": "fun"
    }, function(response, err) {
      if (err) {
        done(err)
      }
      expect(Array.isArray(response.data)).to.equal(true);
      expect(response.data.length).to.be.above(0);
      done();
    });
  });

  it('PROMISE - returns an array of objects (gifs)', function(done) {
    // Increase the default timeout for this test
    // If the test takes longer than this, it will fail
    this.timeout(3000);
    GphApiClient.search("gifs", {
      "q": "fun"
    }).then((response) => {

      response.data.forEach(function(gif) {
        expect(gif.type).to.equal('gif');
      });
      done();
    }).catch((err) => {
      throw done(err)
    })
  })

  it('CALLBACK - returns an array of objects (gifs)', function(done) {
    // Increase the default timeout for this test
    // If the test takes longer than this, it will fail
    this.timeout(3000);
    GphApiClient.search("gifs", {
      "q": "fun"
    }, function(response, err) {
      if (err) done(err);

      response.data.forEach(function(gif) {
        expect(gif.type).to.equal('gif');
      });
      done();
    });
  });
});


describe('SEARCH - stickers', function() {
  beforeEach(function() {
    var apiKey = "dc6zaTOxFJmzC";
    GphApiClient.setCredentials(apiKey)
  });

  it('PROMISE - returns search results', function(done) {
    // Increase the default timeout for this test
    // If the test takes longer than this, it will fail
    this.timeout(3000);

    GphApiClient.search("stickers", {
      "q": "fun"
    }).then((response) => {
      expect(Array.isArray(response.data)).to.equal(true);
      expect(response.data.length).to.be.above(0);

      done();
    }).catch((err) => {
      done(err);
    })
  });

  it('CALLBACK - returns search results', function(done) {
    // Increase the default timeout for this test
    // If the test takes longer than this, it will fail
    this.timeout(3000);

    GphApiClient.search("stickers", {
      "q": "fun"
    }, function(response, err) {
      if (err) {
        done(err)
      }
      expect(Array.isArray(response.data)).to.equal(true);
      expect(response.data.length).to.be.above(0);
      done();
    });
  });

  it('PROMISE - returns an array of objects (gifs)', function(done) {
    // Increase the default timeout for this test
    // If the test takes longer than this, it will fail
    this.timeout(3000);
    GphApiClient.search("stickers", {
      "q": "fun"
    }).then((response) => {

      response.data.forEach(function(gif) {
        expect(gif.type).to.equal('gif');

      });
      done();
    }).catch((err) => {
      throw done(err)
    })
  })

  it('CALLBACK - returns an array of objects (gifs)', function(done) {
    // Increase the default timeout for this test
    // If the test takes longer than this, it will fail
    this.timeout(3000);
    GphApiClient.search("stickers", {
      "q": "fun"
    }, function(response, err) {
      if (err) done(err);

      response.data.forEach(function(gif) {
        expect(gif.type).to.equal('gif');

      });
      done();
    });
  });
});

describe('TRENDING - gifs', function() {
  beforeEach(function() {
    var apiKey = "dc6zaTOxFJmzC";
    GphApiClient.setCredentials(apiKey)
  });

  it('PROMISE - trending results', function(done) {
    // Increase the default timeout for this test
    // If the test takes longer than this, it will fail
    this.timeout(3000);

    GphApiClient.trending("gifs", {}).then((response) => {
      expect(Array.isArray(response.data)).to.equal(true);
      expect(response.data.length).to.be.above(0);

      done();
    }).catch((err) => {
      done(err);
    })
  });

  it('CALLBACK - returns trending results', function(done) {
    // Increase the default timeout for this test
    // If the test takes longer than this, it will fail
    this.timeout(3000);

    GphApiClient.trending("gifs", {}, function(response, err) {
      if (err) {
        done(err)
      }
      expect(Array.isArray(response.data)).to.equal(true);
      expect(response.data.length).to.be.above(0);
      done();
    });
  });

  it('PROMISE - returns an array of objects (gifs)', function(done) {
    // Increase the default timeout for this test
    // If the test takes longer than this, it will fail
    this.timeout(3000);
    GphApiClient.trending("gifs", {}).then((response) => {

      response.data.forEach(function(gif) {
        expect(gif.type).to.equal('gif');
      });
      done();
    }).catch((err) => {
      throw done(err)
    })
  })

  it('CALLBACK - returns an array of objects (gifs)', function(done) {
    // Increase the default timeout for this test
    // If the test takes longer than this, it will fail
    this.timeout(2000);
    GphApiClient.trending("gifs", {}, function(response, err) {
      if (err) done(err);

      response.data.forEach(function(gif) {
        expect(gif.type).to.equal('gif');
      });
      done();
    });
  });

});

describe('TRENDING - stickers', function() {
  beforeEach(function() {
    var apiKey = "dc6zaTOxFJmzC";
    GphApiClient.setCredentials(apiKey)
  });

  it('PROMISE - trending results', function(done) {
    // Increase the default timeout for this test
    // If the test takes longer than this, it will fail
    this.timeout(3000);

    GphApiClient.trending("stickers", {}).then((response) => {
      expect(Array.isArray(response.data)).to.equal(true);
      expect(response.data.length).to.be.above(0);

      done();
    }).catch((err) => {
      done(err);
    })
  });

  it('CALLBACK - returns trending results', function(done) {
    // Increase the default timeout for this test
    // If the test takes longer than this, it will fail
    this.timeout(3000);

    GphApiClient.trending("stickers", {}, function(response, err) {
      if (err) {
        done(err)
      }
      expect(Array.isArray(response.data)).to.equal(true);
      expect(response.data.length).to.be.above(0);
      done();
    });
  });

  it('PROMISE - returns an array of objects (gifs)', function(done) {
    // Increase the default timeout for this test
    // If the test takes longer than this, it will fail
    this.timeout(3000);
    GphApiClient.trending("stickers", {}).then((response) => {

      response.data.forEach(function(gif) {
        expect(gif.type).to.equal('gif');

      });
      done();
    }).catch((err) => {
      throw done(err)
    })
  })

  it('CALLBACK - returns an array of objects (gifs)', function(done) {
    // Increase the default timeout for this test
    // If the test takes longer than this, it will fail
    this.timeout(2000);
    GphApiClient.trending("stickers", {}, function(response, err) {
      if (err) done(err);

      response.data.forEach(function(gif) {
        expect(gif.type).to.equal('gif');
      });
      done();
    });
  });

});

describe('TRANSLATE - gifs', function() {
  beforeEach(function() {
    var apiKey = "dc6zaTOxFJmzC";
    GphApiClient.setCredentials(apiKey)
  });

  it('PROMISE - returns a single object that is a gif', function(done) {
    this.timeout(2000);
    GphApiClient.translate("gifs", {
      "s": "cool"
    }).then((response) => {
      expect(Array.isArray(response.data)).to.equal(false);
      expect(response.data.type).to.equal('gif');
      done();

    }).catch((err) => {
      done(err)
    })
  });
});

describe('TRANSLATE - stickers', function(done) {
  beforeEach(function() {
    var apiKey = "dc6zaTOxFJmzC";
     GphApiClient.setCredentials(apiKey)
  });

  it('PROMISE - returns one sticker from the sticker shop', function(done) {
    this.timeout(2000);
    GphApiClient.translate("stickers", {
      "s": "cool"
    }, (response, err) => {
      if (err) done(err);

      expect(Array.isArray(response.data)).to.equal(false);
      expect(response.data.type).to.equal('gif');

      done();
    });
  });

});

describe('RANDOM - gifs', function() {
  beforeEach(function() {
    var apiKey = "dc6zaTOxFJmzC";
    GphApiClient.setCredentials(apiKey)
  });

  it('PROMISE - returns a random single gif', function(done) {
    this.timeout(2000);
    GphApiClient.random("gifs", {}).then((response) => {
      expect(Array.isArray(response.data)).to.equal(false);
      expect(response.data.type).to.equal('gif');
      done();

    }).catch((err) => {
      done(err)
    })
  });

  it('CALLBACK - returns a random single gif', function(done) {
    this.timeout(2000);
    GphApiClient.random("gifs", {}, (response, err) => {
      expect(Array.isArray(response.data)).to.equal(false);
      expect(response.data.type).to.equal('gif');
      done();
    });
  });

});

describe('RANDOM - stickers', function() {
  beforeEach(function() {
    var apiKey = "dc6zaTOxFJmzC";
    GphApiClient.setCredentials(apiKey)
  });

  it('PROMISE - returns a random single gif', function(done) {
    this.timeout(2000);
    GphApiClient.random("stickers", {}).then((response) => {
      expect(Array.isArray(response.data)).to.equal(false);
      expect(response.data.type).to.equal('gif');
      done();

    }).catch((err) => {
      done(err)
    })
  });


  it('CALLBACK - returns a random single gif', function(done) {
    this.timeout(2000);
    GphApiClient.random("stickers", {}, (response, err) => {
      expect(Array.isArray(response.data)).to.equal(false);
      expect(response.data.type).to.equal('gif');
      done();
    });
  });

});

describe('GIF BY ID', function() {
  beforeEach(function() {
    var apiKey = "dc6zaTOxFJmzC";
    GphApiClient.setCredentials(apiKey)
  });

  it('PROMISE - returns a single gif given an ID', function(done) {
    this.timeout(2000);
    GphApiClient.gifById("3og0IvOsj15uYsxYZi").then((response) => {
      expect(Array.isArray(response.data)).to.equal(false);
      expect(response.data.type).to.equal('gif');

      done()
    }).catch((err) => {
      done(err)
    })
  });

  it('CALLBACK - returns a single gif given an ID', function(done) {
    this.timeout(2000);
    GphApiClient.gifById("3og0IvOsj15uYsxYZi", function(response, err) {
      if (err) done(err);

      expect(Array.isArray(response.data)).to.equal(false);
      expect(response.data.type).to.equal('gif');
      done()
    })
  });

});

describe('GIFS BY IDS', function() {
  beforeEach(function() {
    var apiKey = "dc6zaTOxFJmzC";
    GphApiClient.setCredentials(apiKey)
  });

  it('PROMISE - returns gifs based on the ids sent', function(done) {
    this.timeout(2000);
    GphApiClient.gifByIds({
      "ids": ["3og0IvOsj15uYsxYZi", "l41lS0IgRIFkAuA5G", "3o6oziEt5VUgsuunxS"]
    }).then((response) => {
      expect(Array.isArray(response.data)).to.equal(true);
      expect(response.data.length).to.equal(3);

      response.data.forEach(function(gif) {
        expect(gif.type).to.equal('gif');
      });

      done();
    }).catch((err) => {
      done(err);
    })
  });

  it('CALLBACK - returns gifs based on the ids sent', function(done) {
    this.timeout(2000);
    GphApiClient.gifByIds({
      "ids": ["3og0IvOsj15uYsxYZi", "l41lS0IgRIFkAuA5G", "3o6oziEt5VUgsuunxS"]
    }, function(response, err) {
      if (err) done(err);

      expect(Array.isArray(response.data)).to.equal(true);
      expect(response.data.length).to.equal(3);

      response.data.forEach(function(gif) {
        expect(gif.type).to.equal('gif');
      });

      done();
    });
  });
});

describe('CATEGORIES', function() {
  beforeEach(function() {
    var apiKey = "dc6zaTOxFJmzC";
     GphApiClient.setCredentials(apiKey)
  });

  it('PROMISE - returns an array of categories', function(done) {
    this.timeout(2000);
    GphApiClient.categories({}).then((response) => {
      expect(Array.isArray(response.data)).to.equal(true);
      response.data.forEach(function(category) {
        expect(category).to.have.keys('name', 'name_encoded', 'subcategories', 'gif')
      });
      done();
    }).catch((err) => {
      done(err);
    })
  });

  it('CALLBACK - returnss an array of categories', function(done) {
    this.timeout(2000);
    GphApiClient.categories({}, function(response, err) {
      if (err) done(err);
      expect(Array.isArray(response.data)).to.equal(true);
      response.data.forEach(function(category) {
        expect(category).to.have.keys('name', 'name_encoded', 'subcategories', 'gif')
      });
      done();
    });
  });
});

describe('SUBCATEGORIES', function() {
  beforeEach(function() {
    var apiKey = "dc6zaTOxFJmzC";
     GphApiClient.setCredentials(apiKey)
  });

  it('PROMISE - returns an array of categories', function(done) {
    this.timeout(2000);
    GphApiClient.subCategories("tv", {}).then((response) => {
      expect(Array.isArray(response.data)).to.equal(true);
      response.data.forEach(function(category) {
        expect(category).to.have.keys('name_encoded', 'name', 'gif')
      });
      done();
    }).catch((err) => {
      done(err);
    })
  });

  it('CALLBACK - returns an array of categories', function(done) {
    this.timeout(2000);
    GphApiClient.subCategories("tv", {}, function(response, err) {
      if (err) done(err);
      expect(Array.isArray(response.data)).to.equal(true);
      response.data.forEach(function(category) {
        expect(category).to.have.keys('name_encoded', 'name', 'gif')
      });
      done();
    });
  });
});


describe('SUBCATEGORIES', function() {
  beforeEach(function() {
    var apiKey = "dc6zaTOxFJmzC";
     GphApiClient.setCredentials(apiKey)
  });

  it('PROMISE - returns an array of gifs', function(done) {
    this.timeout(2000);
    GphApiClient.gifsByCategories("tv", "'the office'", {}).then((response) => {
      expect(Array.isArray(response.data)).to.equal(true);
      expect(response.data.length).to.be.above(0);

      response.data.forEach(function(category) {
        expect(category.type).to.equal('gif')
      });
      done();
    }).catch((err) => {
      done(err);
    })
  });

  it('CALLBACK - returns an array of gifs', function(done) {
    this.timeout(2000);
    GphApiClient.gifsByCategories("tv", "'the office'", {}, function(response, err) {
      if (err) done(err);
      expect(Array.isArray(response.data)).to.equal(true);
      expect(response.data.length).to.be.above(0);

      response.data.forEach(function(category) {
        expect(category.type).to.equal('gif')
      });
      done();
    });
  });
});