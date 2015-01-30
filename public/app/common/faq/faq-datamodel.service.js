(function () {
    'use strict';

    //  this is nasty because it forces the user to download a big js file every time the page is loaded (assuming not cached)
    angular.module('baseApp').service('faqDataModelService', function faqDataModelService() {


        // http://www.jeremyzerr.com/angularjs-backend-less-development-using-httpbackend-mock
        // from http://plnkr.co/edit/arsvfe?p=info

        this.getData = function () {
            return this.data;
        };

        this.setData = function (data) {
            this.data = data;
        };


        //this.findOne = function (presenterId, urlPostToken) {
        //    if (!this.hasData()) {
        //        return {};
        //    }
        //    var found = -1;
        //    var ii;
        //    for (ii = 0; ii < this.data.length; ii++) {
        //        //console.log(this.data[ii].urlPostToken + '+' + urlPostToken + ':' +
        //        //    this.data[ii].id + ":" + presenterId);
        //
        //        if (this.data[ii].urlPostToken === urlPostToken && this.data[ii].id === presenterId) {
        //            found = ii;
        //            break;
        //        }
        //    }
        //    return found >= 0 ? this.data[found] : {};
        //};

        this.findAll = function () {
            return this.getData();
        };

        this.initDummyData = function () {
            this.data = [
                {
                    "codeCampTypeId": 2,
                    "question": "How are workshop presenters selected",
                    "answer": "All our workshop speakers are of the highest quality and reputation. Many are from code camp directly and the ones that are not likely have spoken at other similar events and could have spoken at code camp",
                    "sequence": "x",
                    "id": 4
                },
                {
                    "codeCampTypeId": 2,
                    "question": "How many days is Code Stars Summit",
                    "answer": "Typically, Code Stars Summit events are between 2 and 4 days.  You do not need to attend all the days, just the days you have workshops scheduled.",
                    "sequence": "x",
                    "id": 5
                },
                {
                    "codeCampTypeId": 2,
                    "question": "Can I just attend one workshop",
                    "answer": "Yes. You can attend as many workshops that do not overlap as you like",
                    "sequence": "x",
                    "id": 6
                },
                {
                    "codeCampTypeId": 2,
                    "question": "I would like to take just one day of a 2 day workshop.  Can I do that/",
                    "answer": "No, sorry you can not.  If you sign up for a 2 day workshop, you must pay for both days.",
                    "sequence": "x",
                    "id": 7
                },
                {
                    "codeCampTypeId": 2,
                    "question": "Are meals and snacks served at Code Stars Summit/",
                    "answer": "We will be providing lunches and snacks during the day.  More details will be provided later.",
                    "sequence": "x",
                    "id": 8
                },
                {
                    "codeCampTypeId": 2,
                    "question": "Where is Code Stars Summit Being Held?",
                    "answer": "The next Code Stars Summit (10/9/2014 - 10/10/2014) is being held in Palo Alto on Middlefield Road at the Foothill College Middlefield Campus",
                    "sequence": "x",
                    "id": 9
                },
                {
                    "codeCampTypeId": 2,
                    "question": "What are the workshop hours?",
                    "answer": "Typically, our workshop ours are 9 to 5 with a break for lunch.  Expect a welcome email before the event with more details.",
                    "sequence": "x",
                    "id": 10
                }
            ];
        };

        this.hasData = function () {
            return this.data && this.data.length > 0;
        };


    });


}());