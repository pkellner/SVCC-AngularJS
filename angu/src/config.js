'use strict';

/*

Parses the config supplied in index.html into a hierarchy based on the object
supplied below. Where no type/transform is provided, values are passed through
as-is. The config parser looks for "key" properties and loads from the flat
index config when it finds them.

Given:

new Schema({
  foo: {
    bar: {
      key: 'FOO_BAR'
    }
  }
})
.parse({
  FOO_BAR: 'BAZ'
});

You GET:

{
  foo: {
    bar: 'BAZ'
  }
}

*/

import {Schema} from 'confidential';

export default parse;

parse.$inject = ['$provide', 'CONFIG'];
function parse ($provide, CONFIG) {
  const config = new Schema({
    user: {
      active: {
        key: 'loggedInUsername'
      }
    },
    assets: {
      base: {
        key: 'baseDir'
      },
      cdn: {
        key: 'cdnUrl',
        transform: function (host) {
          return host ? '//' + host : host;
        }
      }
    },
    speakers: {
      show: {
        key: 'showPresenters',
        type: Boolean
      }
    },
    sessions: {
      show: {
        key: 'showSessions',
        type: Boolean
      }
    },
    hotel: {
      bookingUrl: {
        key: 'hotelBookingUrl'
      }
    },
    schedule: {
      show: {
        key: 'showAgendaOnSchedule',
        type: Boolean
      }
    },
    pricing: {
      show: {
        key: 'showPricing',
        type: Boolean
      }
    },
    fun: {
      show: {
        key: 'showFun',
        type: Boolean
      }
    },
    ng: {
      from: {
        key: 'fromNg',
        type: Boolean
      }
    },
    home: {
      title2: {
        content: {
          key: 'homePageSecondTitle'
        },
        guid: {
          key: 'homePageSecondTitleGuid'
        }
      }
    }
  })
  .parse(CONFIG);
  $provide.constant('config', config); 
}
