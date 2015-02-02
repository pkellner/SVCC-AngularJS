(function () {
    'use strict';

    //  this is nasty because it forces the user to download a big js file every time the page is loaded (assuming not cached)
    angular.module('baseApp').service('speakerDataModelService', function speakerDataModelService() {


        // http://www.jeremyzerr.com/angularjs-backend-less-development-using-httpbackend-mock
        // from http://plnkr.co/edit/arsvfe?p=info

        this.getData = function () {
            return this.data;
        };

        this.setData = function (data) {
            this.data = data;
        };


        this.findOne = function (presenterId, urlPostToken) {
            if (!this.hasData()) {
                return {};
            }
            var found = -1;
            var ii;
            for (ii = 0; ii < this.data.length; ii++) {
                //console.log(this.data[ii].urlPostToken + '+' + urlPostToken + ':' +
                //    this.data[ii].id + ":" + presenterId);

                if (this.data[ii].urlPostToken === urlPostToken && this.data[ii].id === presenterId) {
                    found = ii;
                    break;
                }
            }
            return found >= 0 ? this.data[found] : {};
        };

        this.findAll = function () {
            return this.getData();
        };

        this.initDummyData = function () {
            this.data = [];        };

        this.hasData = function () {
            return this.data && this.data.length > 0;
        };


    });


}());
