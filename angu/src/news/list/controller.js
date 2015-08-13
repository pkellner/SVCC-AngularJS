'use strict';

// News (with a cap N comes from base diretory)
function NewsListController (news, config) {

    this.news = news;
    //this.myItem = 'this is my item';

}
NewsListController.$inject = ['news','config'];

export default NewsListController;
