# cache
browser cache processed API

## DEMO
view `example`

## usage

It is base on localStorage and sessionStorage, please running in browser.

      $ npm install browser-cache

Include js in `/dist` by tag , you can also `require('browser-cache')`

Than

      Cache.init(config); // run init function

#### config

      // default config
      {
        limit: 3600, // time limit (second)
        overdue: 1, // you can also set overdue at the end of days number (prior to limit)
        prefix: 'cache' // prefix in storage
      }

#### methods

      Cache.deal(name, callback, isSession); // deal with old data
      Cache.save(name, value, isSession); // save new data
      Cache.remove(name, isSession); // remove that keyvalue from localStorage, or not incoming false to remove all prefix data

callback will return two arguments, you can use them like that

      Cache.deal('order', (overdue, data) => {
        if(data) {
          // deal with old data first
        }

        if(overdue || !data) {
          // make new data
          Cache.save(order, newdata);
        }
      });

#### develop
      $ make dev
