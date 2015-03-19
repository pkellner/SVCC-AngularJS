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
  $provide.constant('config', config); 
}
