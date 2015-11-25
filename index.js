const getDate = (stamp) => {
  return new Date(stamp).getDate();
}

const Cache = {

  init(config) {
    this.limit = config.overdue ? null : (config.limit || 3600);
    this.overdue = config.overdue || 1;
    this.prefix = (config.prefix || 'cache') + '_';
  },

  deal(key, callback, isSession) {
    var storage = isSession ? sessionStorage : localStorage;
    var {limit, overdue, prefix} = this;
    var obj = storage.getItem(prefix + key);
    var now = Date.now();
    if(obj) {
      obj = JSON.parse(obj);
      if(limit) {
        if(now - obj.createAt > limit * 1000)
          callback(true, obj.data);
        else
          callback(false, obj.data);
      } else if(overdue) {
        if(getDate(Date.now()) - getDate(obj.createAt) > overdue - 1)
          callback(true, obj.data);
        else
          callback(false, obj.data);
      }
    } else {
      callback(true, null);
    }
  },

  save(key, value, isSession) {
    var storage = isSession ? sessionStorage : localStorage;
    var {prefix} = this;
    var obj = {
      createAt: Date.now(),
      data: value
    };

    storage.setItem(prefix + key, JSON.stringify(obj));
  },

  remove(key, isSession) {
    var storage = isSession ? sessionStorage : localStorage;
    var {prefix} = this;
    if(!key) {
      for(let name in storage) {
        if(name.indexOf(prefix) === 0) storage.removeItem(name);
      }
      return;
    }
    storage.removeItem(prefix + key);
  }
}

if(typeof module === 'object') module.exports = Cache;
