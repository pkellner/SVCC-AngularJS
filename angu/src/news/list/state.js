'use strict';

import template from './news.html';

state.$inject = ['$stateProvider'];
function state ($stateProvider) {
  $stateProvider.state('news', {
    url: '/news',
    parent: 'base',
    resolve: {
      news: getNews
    },
    views: {
      '@layout': {
        controller: 'NewsListController',
        controllerAs: 'list',
        template
      }
    }
  });
}
export default state;

getNews.$inject = ['News']; // this is the factory from the base directory (where data is made hence caps)
function getNews (News) {
  return News.fetchAll().then(function(news){
    return news.map(function(newsItem){
      console.log(newsItem.title);
      return newsItem;
    });
  });
}
