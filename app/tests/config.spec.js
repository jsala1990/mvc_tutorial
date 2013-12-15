describe("Configuration setup", function(){
  it("should load local configurations", function(next){
    var config = require('../config')();
    expect(config.mode).toBe('local');
    expect(config.port).toBe(3000);
    next();
  });
  it("should load staging configurations", function(next){
    var config = require('../config')('staging');
    expect(config.mode).toBe('staging');
    expect(config.port).toBe(4000);
    next();
  });
  it("should load production configurations", function(next){
    var config = require('../config')('production');
    expect(config.mode).toBe('production');
    expect(config.port).toBe(5000);
    next();
  });
  it("should load mongodb configurations", function(next){
    var config = require('../config')('');
    expect(config.mongo.port).toBe(27017);
    expect(config.mongo.host).toBe('127.0.0.1');
    next();
  });
});
