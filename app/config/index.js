var config = {
  local: {
    mode: 'local',
    port: 3000,
    mongo: {
      port: 27017
    }
  },
  staging: {
    mode: 'staging',
    port: 4000,
    mongo: {
      port: 27017
    }
  }, 
  production: {
    mode: 'production',
    port: 5000,
    mongo: {
      port: 27017
    }
  }
}
module.exports = function(mode){
  return config[mode || 'local'] || config.local;
}
