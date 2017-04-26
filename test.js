var expect = require('chai').expect;
var GphApiClient = require('./src/GphApiClient')

describe('SEARCH', function() {
  beforeEach(function() {
    var api_key = "dc6zaTOxFJmzC";
    this.sdk = new GphApiClient(api_key);
  });

  it('returns search results', function(done) {
    // Increase the default timeout for this test
    // If the test takes longer than this, it will fail
    this.timeout(3000);

    this.sdk.search("gif", {"q": "fun"}).then((data) => {
      expect(Array.isArray(data)).to.equal(true);
      expect(data.length).to.be.above(0);

      done();
    }).catch((err) => {
      throw err
      done();
    })
  });

  it('returns an array of objects (gifs)', function(done){
     // Increase the default timeout for this test
    // If the test takes longer than this, it will fail
    this.timeout(3000);
    this.sdk.search("gif", {"q": "fun"}).then((data) => {
      
      data.forEach(function(gif) {
        expect(gif).to.be.a('object');
      });

      done();
    }).catch((err) => {
      throw err
      done();
    })
  })
});

describe('TRENDING', function(){

});

describe('RANDOM', function(){

});

describe('TRANSLATE', function(){

});
