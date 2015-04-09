'use strict';

// NEEDS SIMPLE EXPLANATION HERE.  FOR EXAMPLE, WHAT IS THINKING BEHIND:
//   assets/base/key/baseDir/cdnUrl and how are all these related to each other
//   I assume string is default but that should be explicit and not assumed if it is.  Is it String? string? or something else

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
    analytics: {
      homePageTitle: {
        key: 'homePageTitle'
      },
      homePageTitleGuid: {
        key: 'homePageTitleGuid'
      }
    }
  })
  .parse(CONFIG);
  $provide.constant('config', config); 
}
