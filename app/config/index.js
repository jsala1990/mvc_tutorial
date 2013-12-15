var config = {
  local: {
    mode: 'local',
    port: 3000,
    mongo: {
      port: 27017,
      host: '127.0.0.1'
    }
  },
  staging: {
    mode: 'staging',
    port: 4000,
    mongo: {
      port: 27017,
      host: '127.0.0.1'
    }
  }, 
  production: {
    mode: 'production',
    port: 5000,
    mongo: {
      port: 27017,
      host: '127.0.0.1'
    }
  }
}
module.exports = function(mode){
  return config[mode || 'local'] || config.local;
}
