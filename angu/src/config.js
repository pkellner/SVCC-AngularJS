'use strict';

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
        key: 'showSchedule',
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
