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
        key: 'cdnUrl'
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
    }
  })
  .parse(CONFIG);
  if (config.assets.cdn) {
    config.assets.cdn = '//' + config.assets.cdn;
  }
  $provide.constant('config', config); 
}
