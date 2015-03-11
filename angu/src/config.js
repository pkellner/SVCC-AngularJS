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
    }
  })
  .parse(CONFIG);
  $provide.constant('config', config); 
}
