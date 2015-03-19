'use strict';

import header from './header.html';
import footer from './footer.html';

export default provideLayout;

provideLayout.$inject = ['layoutProvider'];
function provideLayout (layoutProvider) {
  layoutProvider.set('header', header).set('footer', footer);
}
