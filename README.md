# cache
browser cache processed API

## DEMO
view `example`

## usage

It is base on localStorage, please running in browser.

      $ npm install browser-cache

Include js in `/dist` by tag , you can also `require('browser-cache')`

Than

      Cache.init(config); // run init function

#### config

      // default config
      {
        limit: 3600, // time limit (second)
        overdue: 1, // you can also set overdue at the end of days number (prior to limit)
        prefix: 'cache' // prefix in localstorage
      }

#### methods

      Cache.deal(name, callback); // deal with old data
      Cache.save(name, value); // save new data
      Cache.remove(name); // remove that keyvalue from localStorage, or not incoming variable to remove all prefix localStorage data

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
