class Cache {

  constructor(config) {
    this.config = config;
  }

  deal(key, callback) {
    var {limit, overdueBy, prefix} = this.config;

  }

  remove(key) {

  }

}

if(typeof module === 'object') module.exports = Cache;
