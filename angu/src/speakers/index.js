// 'use strict';

// import angular from 'angular';
// import details from './details';
// import social from './social-icons';

// export default angular.module('angu.speakers', [
//     details
//   ])
//   .directive('speakerSocialIcons', social)
//   .name;

'use strict';

import angular from 'angular';
import controller from './controller';
import state from './state';

export default angular.module('angu.speakers', [])
  .controller('SpeakersController', controller)
  .config(state)
  .name;
