(function () {
    'use strict';

    //  this is nasty because it forces the user to download a big js file every time the page is loaded (assuming not cached)
    angular.module('svccApp').service('speakerDataModelUrlService', function speakerDataModelService() {


        // http://www.jeremyzerr.com/angularjs-backend-less-development-using-httpbackend-mock
        // from http://plnkr.co/edit/arsvfe?p=info

        this.getData = function () {
            return this.data;
        };

        this.setData = function (data) {
            this.data = data;
        };

        this.findOne = function (id) {
            // find the game that matches that id
            var list = $.grep(this.getData(), function (element, index) {
                return (element.presenterId == id);
            });
            if (list.length === 0) {
                return {};
            }
            // even if list contains multiple items, just return first one
            return list[0];
        };

        this.findAll = function () {
            return this.getData();
        };


        this.data =
            [
                {
                    "presenterId": 823,
                    "presenterUrl": "2008/kevin-nilson-823"
                },
                {
                    "presenterId": 1221,
                    "presenterUrl": "2008/andres-almiray-1221"
                },
                {
                    "presenterId": 1221,
                    "presenterUrl": "2008/andres-almiray-1221"
                },
                {
                    "presenterId": 1221,
                    "presenterUrl": "2008/andres-almiray-1221"
                },
                {
                    "presenterId": 1252,
                    "presenterUrl": "2008/lynn-langit-1252"
                },
                {
                    "presenterId": 1124,
                    "presenterUrl": "2008/douglas-crockford-1124"
                },
                {
                    "presenterId": 1343,
                    "presenterUrl": "2008/dave-britton-1343"
                },
                {
                    "presenterId": 451,
                    "presenterUrl": "2008/robert-biggs-451"
                },
                {
                    "presenterId": 451,
                    "presenterUrl": "2008/robert-biggs-451"
                },
                {
                    "presenterId": 385,
                    "presenterUrl": "2008/steve-evans-385"
                },
                {
                    "presenterId": 385,
                    "presenterUrl": "2008/steve-evans-385"
                },
                {
                    "presenterId": 918,
                    "presenterUrl": "2008/karthik-gurumurthy-918"
                },
                {
                    "presenterId": 411,
                    "presenterUrl": "2008/uday-gajendar-411"
                },
                {
                    "presenterId": 1995,
                    "presenterUrl": "2008/beth-massi-1995"
                },
                {
                    "presenterId": 1995,
                    "presenterUrl": "2008/beth-massi-1995"
                },
                {
                    "presenterId": 1995,
                    "presenterUrl": "2008/beth-massi-1995"
                },
                {
                    "presenterId": 1357,
                    "presenterUrl": "2008/james-williams-1357"
                },
                {
                    "presenterId": 592,
                    "presenterUrl": "2008/van-riper-592"
                },
                {
                    "presenterId": 592,
                    "presenterUrl": "2008/van-riper-592"
                },
                {
                    "presenterId": 928,
                    "presenterUrl": "2008/emil-ong-928"
                },
                {
                    "presenterId": 928,
                    "presenterUrl": "2008/emil-ong-928"
                },
                {
                    "presenterId": 473,
                    "presenterUrl": "2008/liam-molloy-473"
                },
                {
                    "presenterId": 1269,
                    "presenterUrl": "2008/arun-gupta-1269"
                },
                {
                    "presenterId": 583,
                    "presenterUrl": "2008/mathias-brandewinder-583"
                },
                {
                    "presenterId": 583,
                    "presenterUrl": "2008/mathias-brandewinder-583"
                },
                {
                    "presenterId": 714,
                    "presenterUrl": "2008/scott-mauvais-714"
                },
                {
                    "presenterId": 1211,
                    "presenterUrl": "2008/ted-young-1211"
                },
                {
                    "presenterId": 1211,
                    "presenterUrl": "2008/ted-young-1211"
                },
                {
                    "presenterId": 604,
                    "presenterUrl": "2008/orion-letizi-604"
                },
                {
                    "presenterId": 571,
                    "presenterUrl": "2008/bess-ho-571"
                },
                {
                    "presenterId": 765,
                    "presenterUrl": "2008/petar-vucetin-765"
                },
                {
                    "presenterId": 302,
                    "presenterUrl": "2008/scott-stanfield-302"
                },
                {
                    "presenterId": 155,
                    "presenterUrl": "2008/alex-ruiz-155"
                },
                {
                    "presenterId": 746,
                    "presenterUrl": "2008/yeepin-yheng-746"
                },
                {
                    "presenterId": 1225,
                    "presenterUrl": "2008/nikita-ivanov-1225"
                },
                {
                    "presenterId": 177,
                    "presenterUrl": "2008/shay-shmeltzer-177"
                },
                {
                    "presenterId": 1078,
                    "presenterUrl": "2008/dave-briccetti-1078"
                },
                {
                    "presenterId": 967,
                    "presenterUrl": "2008/jeff-mcwherter-967"
                },
                {
                    "presenterId": 718,
                    "presenterUrl": "2008/bill-venners-718"
                },
                {
                    "presenterId": 718,
                    "presenterUrl": "2008/bill-venners-718"
                },
                {
                    "presenterId": 1402,
                    "presenterUrl": "2008/scott-stark-1402"
                },
                {
                    "presenterId": 170,
                    "presenterUrl": "2008/johnny-chan-170"
                },
                {
                    "presenterId": 297,
                    "presenterUrl": "2008/david-pollak-297"
                },
                {
                    "presenterId": 297,
                    "presenterUrl": "2008/david-pollak-297"
                },
                {
                    "presenterId": 613,
                    "presenterUrl": "2008/abdelmonaim-remani-613"
                },
                {
                    "presenterId": 1269,
                    "presenterUrl": "2008/arun-gupta-1269"
                },
                {
                    "presenterId": 613,
                    "presenterUrl": "2008/abdelmonaim-remani-613"
                },
                {
                    "presenterId": 1269,
                    "presenterUrl": "2008/arun-gupta-1269"
                },
                {
                    "presenterId": 169,
                    "presenterUrl": "2008/slava-imeshev-169"
                },
                {
                    "presenterId": 1072,
                    "presenterUrl": "2008/nikolaus-baer-1072"
                },
                {
                    "presenterId": 251,
                    "presenterUrl": "2008/wesley-chun-251"
                },
                {
                    "presenterId": 251,
                    "presenterUrl": "2008/wesley-chun-251"
                },
                {
                    "presenterId": 653,
                    "presenterUrl": "2008/deborah-kurata-653"
                },
                {
                    "presenterId": 653,
                    "presenterUrl": "2008/deborah-kurata-653"
                },
                {
                    "presenterId": 65,
                    "presenterUrl": "2008/doris-chen-65"
                },
                {
                    "presenterId": 966,
                    "presenterUrl": "2008/jeff-brown-966"
                },
                {
                    "presenterId": 960,
                    "presenterUrl": "2008/marina-fisher-960"
                },
                {
                    "presenterId": 435,
                    "presenterUrl": "2008/todd-davies-435"
                },
                {
                    "presenterId": 187,
                    "presenterUrl": "2008/dave-nielsen-187"
                },
                {
                    "presenterId": 502,
                    "presenterUrl": "2008/sridhar-reddy-502"
                },
                {
                    "presenterId": 181,
                    "presenterUrl": "2008/sriram-krishnan-181"
                },
                {
                    "presenterId": 907,
                    "presenterUrl": "2008/paul-king-907"
                },
                {
                    "presenterId": 907,
                    "presenterUrl": "2008/paul-king-907"
                },
                {
                    "presenterId": 907,
                    "presenterUrl": "2008/paul-king-907"
                },
                {
                    "presenterId": 907,
                    "presenterUrl": "2008/paul-king-907"
                },
                {
                    "presenterId": 172,
                    "presenterUrl": "2008/dominik-grolimund-172"
                },
                {
                    "presenterId": 753,
                    "presenterUrl": "2008/joseph-ackerman-753"
                },
                {
                    "presenterId": 893,
                    "presenterUrl": "2008/mats-bryntse-893"
                },
                {
                    "presenterId": 620,
                    "presenterUrl": "2008/ron-kleinman-620"
                },
                {
                    "presenterId": 509,
                    "presenterUrl": "2008/kim-greenlee-509"
                },
                {
                    "presenterId": 509,
                    "presenterUrl": "2008/kim-greenlee-509"
                },
                {
                    "presenterId": 22,
                    "presenterUrl": "2008/jim-downey-22"
                },
                {
                    "presenterId": 179,
                    "presenterUrl": "2008/timothy-ng-179"
                },
                {
                    "presenterId": 1083,
                    "presenterUrl": "2008/karl-shifflett-1083"
                },
                {
                    "presenterId": 1083,
                    "presenterUrl": "2008/karl-shifflett-1083"
                },
                {
                    "presenterId": 482,
                    "presenterUrl": "2008/symon-chang-482"
                },
                {
                    "presenterId": 179,
                    "presenterUrl": "2008/timothy-ng-179"
                },
                {
                    "presenterId": 506,
                    "presenterUrl": "2008/kishore-subramanian-506"
                },
                {
                    "presenterId": 1222,
                    "presenterUrl": "2008/jason-mauer-1222"
                },
                {
                    "presenterId": 1222,
                    "presenterUrl": "2008/jason-mauer-1222"
                },
                {
                    "presenterId": 482,
                    "presenterUrl": "2008/symon-chang-482"
                },
                {
                    "presenterId": 408,
                    "presenterUrl": "2008/stan-knutson-408"
                },
                {
                    "presenterId": 337,
                    "presenterUrl": "2008/christopher-vigna-337"
                },
                {
                    "presenterId": 565,
                    "presenterUrl": "2008/bruno-terkaly-565"
                },
                {
                    "presenterId": 32,
                    "presenterUrl": "2008/roman-zhovtulya-32"
                },
                {
                    "presenterId": 961,
                    "presenterUrl": "2008/poornima-vijayashanker-961"
                },
                {
                    "presenterId": 550,
                    "presenterUrl": "2008/nilesh-junnarkar-550"
                },
                {
                    "presenterId": 1164,
                    "presenterUrl": "2008/nima-dilmaghani-1164"
                },
                {
                    "presenterId": 686,
                    "presenterUrl": "2008/pyounguk-cho-686"
                },
                {
                    "presenterId": 686,
                    "presenterUrl": "2008/pyounguk-cho-686"
                },
                {
                    "presenterId": 194,
                    "presenterUrl": "2008/pieter-humphrey-194"
                },
                {
                    "presenterId": 193,
                    "presenterUrl": "2008/daniel-francisco-193"
                },
                {
                    "presenterId": 32,
                    "presenterUrl": "2008/roman-zhovtulya-32"
                },
                {
                    "presenterId": 819,
                    "presenterUrl": "2008/alok-sonthalia-819"
                },
                {
                    "presenterId": 579,
                    "presenterUrl": "2008/alan-cobb-579"
                },
                {
                    "presenterId": 130,
                    "presenterUrl": "2008/charles-johnson-130"
                },
                {
                    "presenterId": 1299,
                    "presenterUrl": "2008/vic-cekvenich-1299"
                },
                {
                    "presenterId": 890,
                    "presenterUrl": "2008/ryan-olshan-890"
                },
                {
                    "presenterId": 1124,
                    "presenterUrl": "2008/douglas-crockford-1124"
                },
                {
                    "presenterId": 1278,
                    "presenterUrl": "2008/nik-kalyani-1278"
                },
                {
                    "presenterId": 160,
                    "presenterUrl": "2008/michael-carter-160"
                },
                {
                    "presenterId": 571,
                    "presenterUrl": "2008/bess-ho-571"
                },
                {
                    "presenterId": 187,
                    "presenterUrl": "2008/dave-nielsen-187"
                },
                {
                    "presenterId": 159,
                    "presenterUrl": "2008/don-robins-159"
                },
                {
                    "presenterId": 80,
                    "presenterUrl": "2008/sudha-jamthe-80"
                },
                {
                    "presenterId": 1276,
                    "presenterUrl": "2008/bala-paranj-1276"
                },
                {
                    "presenterId": 529,
                    "presenterUrl": "2008/lino-tadros-529"
                },
                {
                    "presenterId": 529,
                    "presenterUrl": "2008/lino-tadros-529"
                },
                {
                    "presenterId": 858,
                    "presenterUrl": "2008/mark-wilcox-858"
                },
                {
                    "presenterId": 1081,
                    "presenterUrl": "2008/cal-schrotenboer-1081"
                },
                {
                    "presenterId": 1081,
                    "presenterUrl": "2008/cal-schrotenboer-1081"
                },
                {
                    "presenterId": 1211,
                    "presenterUrl": "2008/ted-young-1211"
                },
                {
                    "presenterId": 903,
                    "presenterUrl": "2009/peter-kellner-903"
                },
                {
                    "presenterId": 385,
                    "presenterUrl": "2009/steve-evans-385"
                },
                {
                    "presenterId": 385,
                    "presenterUrl": "2009/steve-evans-385"
                },
                {
                    "presenterId": 823,
                    "presenterUrl": "2009/kevin-nilson-823"
                },
                {
                    "presenterId": 1415,
                    "presenterUrl": "2009/juval-lowy-1415"
                },
                {
                    "presenterId": 1415,
                    "presenterUrl": "2009/juval-lowy-1415"
                },
                {
                    "presenterId": 187,
                    "presenterUrl": "2009/dave-nielsen-187"
                },
                {
                    "presenterId": 14,
                    "presenterUrl": "2009/eishay-smith-14"
                },
                {
                    "presenterId": 592,
                    "presenterUrl": "2009/van-riper-592"
                },
                {
                    "presenterId": 1419,
                    "presenterUrl": "2009/stephen-chin-1419"
                },
                {
                    "presenterId": 583,
                    "presenterUrl": "2009/mathias-brandewinder-583"
                },
                {
                    "presenterId": 1426,
                    "presenterUrl": "2009/ramnivas-laddad-1426"
                },
                {
                    "presenterId": 297,
                    "presenterUrl": "2009/david-pollak-297"
                },
                {
                    "presenterId": 753,
                    "presenterUrl": "2009/joseph-ackerman-753"
                },
                {
                    "presenterId": 753,
                    "presenterUrl": "2009/joseph-ackerman-753"
                },
                {
                    "presenterId": 22,
                    "presenterUrl": "2009/jim-downey-22"
                },
                {
                    "presenterId": 1276,
                    "presenterUrl": "2009/bala-paranj-1276"
                },
                {
                    "presenterId": 1427,
                    "presenterUrl": "2009/kent-brewster-1427"
                },
                {
                    "presenterId": 1078,
                    "presenterUrl": "2009/dave-briccetti-1078"
                },
                {
                    "presenterId": 1428,
                    "presenterUrl": "2009/edward-cherlin-1428"
                },
                {
                    "presenterId": 1078,
                    "presenterUrl": "2009/dave-briccetti-1078"
                },
                {
                    "presenterId": 1124,
                    "presenterUrl": "2009/douglas-crockford-1124"
                },
                {
                    "presenterId": 1124,
                    "presenterUrl": "2009/douglas-crockford-1124"
                },
                {
                    "presenterId": 1430,
                    "presenterUrl": "2009/manish-pandit-1430"
                },
                {
                    "presenterId": 1078,
                    "presenterUrl": "2009/dave-briccetti-1078"
                },
                {
                    "presenterId": 672,
                    "presenterUrl": "2009/manoj-kumar-672"
                },
                {
                    "presenterId": 571,
                    "presenterUrl": "2009/bess-ho-571"
                },
                {
                    "presenterId": 1438,
                    "presenterUrl": "2009/bob-smith-1438"
                },
                {
                    "presenterId": 653,
                    "presenterUrl": "2009/deborah-kurata-653"
                },
                {
                    "presenterId": 1252,
                    "presenterUrl": "2009/lynn-langit-1252"
                },
                {
                    "presenterId": 1453,
                    "presenterUrl": "2009/athol-foden-1453"
                },
                {
                    "presenterId": 1995,
                    "presenterUrl": "2009/beth-massi-1995"
                },
                {
                    "presenterId": 1995,
                    "presenterUrl": "2009/beth-massi-1995"
                },
                {
                    "presenterId": 529,
                    "presenterUrl": "2009/lino-tadros-529"
                },
                {
                    "presenterId": 529,
                    "presenterUrl": "2009/lino-tadros-529"
                },
                {
                    "presenterId": 697,
                    "presenterUrl": "2009/paul-cassidy-697"
                },
                {
                    "presenterId": 1497,
                    "presenterUrl": "2009/joe-mayo-1497"
                },
                {
                    "presenterId": 1499,
                    "presenterUrl": "2009/sean-murphy-1499"
                },
                {
                    "presenterId": 251,
                    "presenterUrl": "2009/wesley-chun-251"
                },
                {
                    "presenterId": 251,
                    "presenterUrl": "2009/wesley-chun-251"
                },
                {
                    "presenterId": 385,
                    "presenterUrl": "2009/steve-evans-385"
                },
                {
                    "presenterId": 1278,
                    "presenterUrl": "2009/nik-kalyani-1278"
                },
                {
                    "presenterId": 1357,
                    "presenterUrl": "2009/james-williams-1357"
                },
                {
                    "presenterId": 1426,
                    "presenterUrl": "2009/ramnivas-laddad-1426"
                },
                {
                    "presenterId": 1426,
                    "presenterUrl": "2009/ramnivas-laddad-1426"
                },
                {
                    "presenterId": 14,
                    "presenterUrl": "2009/eishay-smith-14"
                },
                {
                    "presenterId": 470,
                    "presenterUrl": "2009/joe-gershgorin-470"
                },
                {
                    "presenterId": 177,
                    "presenterUrl": "2009/shay-shmeltzer-177"
                },
                {
                    "presenterId": 177,
                    "presenterUrl": "2009/shay-shmeltzer-177"
                },
                {
                    "presenterId": 1169,
                    "presenterUrl": "2009/shiraz-kanga-1169"
                },
                {
                    "presenterId": 1661,
                    "presenterUrl": "2009/chris-sims-1661"
                },
                {
                    "presenterId": 1661,
                    "presenterUrl": "2009/chris-sims-1661"
                },
                {
                    "presenterId": 1661,
                    "presenterUrl": "2009/chris-sims-1661"
                },
                {
                    "presenterId": 100,
                    "presenterUrl": "2009/michael-galpin-100"
                },
                {
                    "presenterId": 100,
                    "presenterUrl": "2009/michael-galpin-100"
                },
                {
                    "presenterId": 613,
                    "presenterUrl": "2009/abdelmonaim-remani-613"
                },
                {
                    "presenterId": 2845,
                    "presenterUrl": "2009/keith-sutton-2845"
                },
                {
                    "presenterId": 2845,
                    "presenterUrl": "2009/keith-sutton-2845"
                },
                {
                    "presenterId": 2852,
                    "presenterUrl": "2009/john-waters-2852"
                },
                {
                    "presenterId": 718,
                    "presenterUrl": "2009/bill-venners-718"
                },
                {
                    "presenterId": 251,
                    "presenterUrl": "2009/wesley-chun-251"
                },
                {
                    "presenterId": 2875,
                    "presenterUrl": "2009/bill-scott-2875"
                },
                {
                    "presenterId": 545,
                    "presenterUrl": "2009/ronn-black-545"
                },
                {
                    "presenterId": 1164,
                    "presenterUrl": "2009/nima-dilmaghani-1164"
                },
                {
                    "presenterId": 2877,
                    "presenterUrl": "2009/bill-braasch-2877"
                },
                {
                    "presenterId": 1442,
                    "presenterUrl": "2009/jack-ha-1442"
                },
                {
                    "presenterId": 1347,
                    "presenterUrl": "2009/steve-trefethen-1347"
                },
                {
                    "presenterId": 550,
                    "presenterUrl": "2009/nilesh-junnarkar-550"
                },
                {
                    "presenterId": 159,
                    "presenterUrl": "2009/don-robins-159"
                },
                {
                    "presenterId": 613,
                    "presenterUrl": "2009/abdelmonaim-remani-613"
                },
                {
                    "presenterId": 451,
                    "presenterUrl": "2009/robert-biggs-451"
                },
                {
                    "presenterId": 451,
                    "presenterUrl": "2009/robert-biggs-451"
                },
                {
                    "presenterId": 451,
                    "presenterUrl": "2009/robert-biggs-451"
                },
                {
                    "presenterId": 451,
                    "presenterUrl": "2009/robert-biggs-451"
                },
                {
                    "presenterId": 1338,
                    "presenterUrl": "2009/eneko-alonso-1338"
                },
                {
                    "presenterId": 888,
                    "presenterUrl": "2009/shamod-lacoul-888"
                },
                {
                    "presenterId": 1128,
                    "presenterUrl": "2009/newton-chan-1128"
                },
                {
                    "presenterId": 2976,
                    "presenterUrl": "2009/stephen-dempsey-2976"
                },
                {
                    "presenterId": 2974,
                    "presenterUrl": "2009/rinat-shagisultanov-2974"
                },
                {
                    "presenterId": 2974,
                    "presenterUrl": "2009/rinat-shagisultanov-2974"
                },
                {
                    "presenterId": 2991,
                    "presenterUrl": "2009/hien-luu-2991"
                },
                {
                    "presenterId": 187,
                    "presenterUrl": "2009/dave-nielsen-187"
                },
                {
                    "presenterId": 3013,
                    "presenterUrl": "2009/charles-jolley-3013"
                },
                {
                    "presenterId": 3019,
                    "presenterUrl": "2009/steve-bockman-3019"
                },
                {
                    "presenterId": 903,
                    "presenterUrl": "2009/peter-kellner-903"
                },
                {
                    "presenterId": 3319,
                    "presenterUrl": "2009/brian-kennish-3319"
                },
                {
                    "presenterId": 3,
                    "presenterUrl": "2009/harvey-pham-3"
                },
                {
                    "presenterId": 8,
                    "presenterUrl": "2009/sam-nasr-8"
                },
                {
                    "presenterId": 3019,
                    "presenterUrl": "2009/steve-bockman-3019"
                },
                {
                    "presenterId": 3019,
                    "presenterUrl": "2009/steve-bockman-3019"
                },
                {
                    "presenterId": 3019,
                    "presenterUrl": "2009/steve-bockman-3019"
                },
                {
                    "presenterId": 2852,
                    "presenterUrl": "2009/john-waters-2852"
                },
                {
                    "presenterId": 3033,
                    "presenterUrl": "2009/nolan-wright-3033"
                },
                {
                    "presenterId": 551,
                    "presenterUrl": "2009/nelz-carpentier-551"
                },
                {
                    "presenterId": 1269,
                    "presenterUrl": "2009/arun-gupta-1269"
                },
                {
                    "presenterId": 1269,
                    "presenterUrl": "2009/arun-gupta-1269"
                },
                {
                    "presenterId": 1269,
                    "presenterUrl": "2009/arun-gupta-1269"
                },
                {
                    "presenterId": 1032,
                    "presenterUrl": "2009/ken-yagen-1032"
                },
                {
                    "presenterId": 2867,
                    "presenterUrl": "2009/massimo-paolini-2867"
                },
                {
                    "presenterId": 961,
                    "presenterUrl": "2009/poornima-vijayashanker-961"
                },
                {
                    "presenterId": 3080,
                    "presenterUrl": "2009/vlad-kuznetsov-3080"
                },
                {
                    "presenterId": 1299,
                    "presenterUrl": "2009/vic-cekvenich-1299"
                },
                {
                    "presenterId": 1347,
                    "presenterUrl": "2009/steve-trefethen-1347"
                },
                {
                    "presenterId": 3073,
                    "presenterUrl": "2009/rahul-agarwal-3073"
                },
                {
                    "presenterId": 2000,
                    "presenterUrl": "2009/ward-bell-2000"
                },
                {
                    "presenterId": 509,
                    "presenterUrl": "2009/kim-greenlee-509"
                },
                {
                    "presenterId": 352,
                    "presenterUrl": "2009/clive-boulton-352"
                },
                {
                    "presenterId": 1533,
                    "presenterUrl": "2009/robin-shahan-1533"
                },
                {
                    "presenterId": 3132,
                    "presenterUrl": "2009/woody-zuill-3132"
                },
                {
                    "presenterId": 3133,
                    "presenterUrl": "2009/llewellyn-falco-3133"
                },
                {
                    "presenterId": 3133,
                    "presenterUrl": "2009/llewellyn-falco-3133"
                },
                {
                    "presenterId": 3152,
                    "presenterUrl": "2009/khurram-khan-3152"
                },
                {
                    "presenterId": 3153,
                    "presenterUrl": "2009/giovanni-gallucci-3153"
                },
                {
                    "presenterId": 3153,
                    "presenterUrl": "2009/giovanni-gallucci-3153"
                },
                {
                    "presenterId": 3153,
                    "presenterUrl": "2009/giovanni-gallucci-3153"
                },
                {
                    "presenterId": 3153,
                    "presenterUrl": "2009/giovanni-gallucci-3153"
                },
                {
                    "presenterId": 3153,
                    "presenterUrl": "2009/giovanni-gallucci-3153"
                },
                {
                    "presenterId": 3153,
                    "presenterUrl": "2009/giovanni-gallucci-3153"
                },
                {
                    "presenterId": 3153,
                    "presenterUrl": "2009/giovanni-gallucci-3153"
                },
                {
                    "presenterId": 3153,
                    "presenterUrl": "2009/giovanni-gallucci-3153"
                },
                {
                    "presenterId": 539,
                    "presenterUrl": "2009/jim-driscoll-539"
                },
                {
                    "presenterId": 32,
                    "presenterUrl": "2009/roman-zhovtulya-32"
                },
                {
                    "presenterId": 32,
                    "presenterUrl": "2009/roman-zhovtulya-32"
                },
                {
                    "presenterId": 1211,
                    "presenterUrl": "2009/ted-young-1211"
                },
                {
                    "presenterId": 1211,
                    "presenterUrl": "2009/ted-young-1211"
                },
                {
                    "presenterId": 1211,
                    "presenterUrl": "2009/ted-young-1211"
                },
                {
                    "presenterId": 565,
                    "presenterUrl": "2009/bruno-terkaly-565"
                },
                {
                    "presenterId": 565,
                    "presenterUrl": "2009/bruno-terkaly-565"
                },
                {
                    "presenterId": 3209,
                    "presenterUrl": "2009/zach-maier-3209"
                },
                {
                    "presenterId": 3211,
                    "presenterUrl": "2009/steve-yen-3211"
                },
                {
                    "presenterId": 65,
                    "presenterUrl": "2009/doris-chen-65"
                },
                {
                    "presenterId": 3220,
                    "presenterUrl": "2009/marc-chanliau-3220"
                },
                {
                    "presenterId": 529,
                    "presenterUrl": "2009/lino-tadros-529"
                },
                {
                    "presenterId": 3295,
                    "presenterUrl": "2009/taylor-gautier-3295"
                },
                {
                    "presenterId": 2921,
                    "presenterUrl": "2009/greg-stachnick-2921"
                },
                {
                    "presenterId": 3346,
                    "presenterUrl": "2009/mike-coastdevelopment-3346"
                },
                {
                    "presenterId": 194,
                    "presenterUrl": "2009/pieter-humphrey-194"
                },
                {
                    "presenterId": 194,
                    "presenterUrl": "2009/pieter-humphrey-194"
                },
                {
                    "presenterId": 3319,
                    "presenterUrl": "2009/brian-kennish-3319"
                },
                {
                    "presenterId": 3345,
                    "presenterUrl": "2009/jason-cooper-3345"
                },
                {
                    "presenterId": 837,
                    "presenterUrl": "2009/mark-erdmann-837"
                },
                {
                    "presenterId": 3347,
                    "presenterUrl": "2009/chris-schalk-3347"
                },
                {
                    "presenterId": 187,
                    "presenterUrl": "2009/dave-nielsen-187"
                },
                {
                    "presenterId": 187,
                    "presenterUrl": "2009/dave-nielsen-187"
                },
                {
                    "presenterId": 187,
                    "presenterUrl": "2009/dave-nielsen-187"
                },
                {
                    "presenterId": 187,
                    "presenterUrl": "2009/dave-nielsen-187"
                },
                {
                    "presenterId": 3153,
                    "presenterUrl": "2009/giovanni-gallucci-3153"
                },
                {
                    "presenterId": 3153,
                    "presenterUrl": "2009/giovanni-gallucci-3153"
                },
                {
                    "presenterId": 3224,
                    "presenterUrl": "2009/fred-sauer-3224"
                },
                {
                    "presenterId": 583,
                    "presenterUrl": "2009/mathias-brandewinder-583"
                },
                {
                    "presenterId": 426,
                    "presenterUrl": "2010/fletcher-johnson-426"
                },
                {
                    "presenterId": 583,
                    "presenterUrl": "2010/mathias-brandewinder-583"
                },
                {
                    "presenterId": 583,
                    "presenterUrl": "2010/mathias-brandewinder-583"
                },
                {
                    "presenterId": 697,
                    "presenterUrl": "2010/paul-cassidy-697"
                },
                {
                    "presenterId": 753,
                    "presenterUrl": "2010/joseph-ackerman-753"
                },
                {
                    "presenterId": 707,
                    "presenterUrl": "2010/shane-powser-707"
                },
                {
                    "presenterId": 385,
                    "presenterUrl": "2010/steve-evans-385"
                },
                {
                    "presenterId": 672,
                    "presenterUrl": "2010/manoj-kumar-672"
                },
                {
                    "presenterId": 672,
                    "presenterUrl": "2010/manoj-kumar-672"
                },
                {
                    "presenterId": 251,
                    "presenterUrl": "2010/wesley-chun-251"
                },
                {
                    "presenterId": 3968,
                    "presenterUrl": "2010/nikita-ivanov-3968"
                },
                {
                    "presenterId": 385,
                    "presenterUrl": "2010/steve-evans-385"
                },
                {
                    "presenterId": 385,
                    "presenterUrl": "2010/steve-evans-385"
                },
                {
                    "presenterId": 571,
                    "presenterUrl": "2010/bess-ho-571"
                },
                {
                    "presenterId": 2867,
                    "presenterUrl": "2010/massimo-paolini-2867"
                },
                {
                    "presenterId": 2867,
                    "presenterUrl": "2010/massimo-paolini-2867"
                },
                {
                    "presenterId": 2867,
                    "presenterUrl": "2010/massimo-paolini-2867"
                },
                {
                    "presenterId": 3972,
                    "presenterUrl": "2010/daniel-cer-3972"
                },
                {
                    "presenterId": 1124,
                    "presenterUrl": "2010/douglas-crockford-1124"
                },
                {
                    "presenterId": 529,
                    "presenterUrl": "2010/lino-tadros-529"
                },
                {
                    "presenterId": 529,
                    "presenterUrl": "2010/lino-tadros-529"
                },
                {
                    "presenterId": 529,
                    "presenterUrl": "2010/lino-tadros-529"
                },
                {
                    "presenterId": 529,
                    "presenterUrl": "2010/lino-tadros-529"
                },
                {
                    "presenterId": 3983,
                    "presenterUrl": "2010/bary-nusz-3983"
                },
                {
                    "presenterId": 3984,
                    "presenterUrl": "2010/lance-bullock-3984"
                },
                {
                    "presenterId": 3984,
                    "presenterUrl": "2010/lance-bullock-3984"
                },
                {
                    "presenterId": 2852,
                    "presenterUrl": "2010/john-waters-2852"
                },
                {
                    "presenterId": 3983,
                    "presenterUrl": "2010/bary-nusz-3983"
                },
                {
                    "presenterId": 3983,
                    "presenterUrl": "2010/bary-nusz-3983"
                },
                {
                    "presenterId": 3986,
                    "presenterUrl": "2010/will-strohl-3986"
                },
                {
                    "presenterId": 3986,
                    "presenterUrl": "2010/will-strohl-3986"
                },
                {
                    "presenterId": 3986,
                    "presenterUrl": "2010/will-strohl-3986"
                },
                {
                    "presenterId": 3987,
                    "presenterUrl": "2010/mark-miller-3987"
                },
                {
                    "presenterId": 1453,
                    "presenterUrl": "2010/athol-foden-1453"
                },
                {
                    "presenterId": 3299,
                    "presenterUrl": "2010/ben-foden-3299"
                },
                {
                    "presenterId": 697,
                    "presenterUrl": "2010/paul-cassidy-697"
                },
                {
                    "presenterId": 1078,
                    "presenterUrl": "2010/dave-briccetti-1078"
                },
                {
                    "presenterId": 1078,
                    "presenterUrl": "2010/dave-briccetti-1078"
                },
                {
                    "presenterId": 1078,
                    "presenterUrl": "2010/dave-briccetti-1078"
                },
                {
                    "presenterId": 411,
                    "presenterUrl": "2010/uday-gajendar-411"
                },
                {
                    "presenterId": 4004,
                    "presenterUrl": "2010/pascallouis-perez-4004"
                },
                {
                    "presenterId": 100,
                    "presenterUrl": "2010/michael-galpin-100"
                },
                {
                    "presenterId": 100,
                    "presenterUrl": "2010/michael-galpin-100"
                },
                {
                    "presenterId": 1419,
                    "presenterUrl": "2010/stephen-chin-1419"
                },
                {
                    "presenterId": 3611,
                    "presenterUrl": "2010/shawn-parker-3611"
                },
                {
                    "presenterId": 411,
                    "presenterUrl": "2010/uday-gajendar-411"
                },
                {
                    "presenterId": 1426,
                    "presenterUrl": "2010/ramnivas-laddad-1426"
                },
                {
                    "presenterId": 4004,
                    "presenterUrl": "2010/pascallouis-perez-4004"
                },
                {
                    "presenterId": 1763,
                    "presenterUrl": "2010/julien-wetterwald-1763"
                },
                {
                    "presenterId": 1763,
                    "presenterUrl": "2010/julien-wetterwald-1763"
                },
                {
                    "presenterId": 1206,
                    "presenterUrl": "2010/nolan-wright-1206"
                },
                {
                    "presenterId": 653,
                    "presenterUrl": "2010/deborah-kurata-653"
                },
                {
                    "presenterId": 4038,
                    "presenterUrl": "2010/kevin-peterson-4038"
                },
                {
                    "presenterId": 653,
                    "presenterUrl": "2010/deborah-kurata-653"
                },
                {
                    "presenterId": 1995,
                    "presenterUrl": "2010/beth-massi-1995"
                },
                {
                    "presenterId": 565,
                    "presenterUrl": "2010/bruno-terkaly-565"
                },
                {
                    "presenterId": 251,
                    "presenterUrl": "2010/wesley-chun-251"
                },
                {
                    "presenterId": 565,
                    "presenterUrl": "2010/bruno-terkaly-565"
                },
                {
                    "presenterId": 1508,
                    "presenterUrl": "2010/sara-ford-1508"
                },
                {
                    "presenterId": 1508,
                    "presenterUrl": "2010/sara-ford-1508"
                },
                {
                    "presenterId": 3073,
                    "presenterUrl": "2010/rahul-agarwal-3073"
                },
                {
                    "presenterId": 4079,
                    "presenterUrl": "2010/bret-stateham-4079"
                },
                {
                    "presenterId": 410,
                    "presenterUrl": "2010/siamak-ashrafi-410"
                },
                {
                    "presenterId": 4080,
                    "presenterUrl": "2010/richard-haven-4080"
                },
                {
                    "presenterId": 4080,
                    "presenterUrl": "2010/richard-haven-4080"
                },
                {
                    "presenterId": 3415,
                    "presenterUrl": "2010/amit-sarkar-3415"
                },
                {
                    "presenterId": 1032,
                    "presenterUrl": "2010/ken-yagen-1032"
                },
                {
                    "presenterId": 4092,
                    "presenterUrl": "2010/paul-litwin-4092"
                },
                {
                    "presenterId": 4092,
                    "presenterUrl": "2010/paul-litwin-4092"
                },
                {
                    "presenterId": 72,
                    "presenterUrl": "2010/suzanna-litwin-72"
                },
                {
                    "presenterId": 1269,
                    "presenterUrl": "2010/arun-gupta-1269"
                },
                {
                    "presenterId": 1269,
                    "presenterUrl": "2010/arun-gupta-1269"
                },
                {
                    "presenterId": 4100,
                    "presenterUrl": "2010/ludovic-champenois-4100"
                },
                {
                    "presenterId": 4101,
                    "presenterUrl": "2010/rajiv-mordani-4101"
                },
                {
                    "presenterId": 1269,
                    "presenterUrl": "2010/arun-gupta-1269"
                },
                {
                    "presenterId": 4110,
                    "presenterUrl": "2010/adam-rosien-4110"
                },
                {
                    "presenterId": 14,
                    "presenterUrl": "2010/eishay-smith-14"
                },
                {
                    "presenterId": 4108,
                    "presenterUrl": "2010/shaun-obrien-4108"
                },
                {
                    "presenterId": 4108,
                    "presenterUrl": "2010/shaun-obrien-4108"
                },
                {
                    "presenterId": 1533,
                    "presenterUrl": "2010/robin-shahan-1533"
                },
                {
                    "presenterId": 1533,
                    "presenterUrl": "2010/robin-shahan-1533"
                },
                {
                    "presenterId": 1533,
                    "presenterUrl": "2010/robin-shahan-1533"
                },
                {
                    "presenterId": 4121,
                    "presenterUrl": "2010/vlad-patryshev-4121"
                },
                {
                    "presenterId": 4122,
                    "presenterUrl": "2010/jitendra-kotamraju-4122"
                },
                {
                    "presenterId": 3790,
                    "presenterUrl": "2010/peter-harrington-3790"
                },
                {
                    "presenterId": 4129,
                    "presenterUrl": "2010/praveen-alavilli-4129"
                },
                {
                    "presenterId": 1430,
                    "presenterUrl": "2010/manish-pandit-1430"
                },
                {
                    "presenterId": 4135,
                    "presenterUrl": "2010/doug-holland-4135"
                },
                {
                    "presenterId": 4138,
                    "presenterUrl": "2010/peter-tweed-4138"
                },
                {
                    "presenterId": 1978,
                    "presenterUrl": "2010/james-downey-1978"
                },
                {
                    "presenterId": 155,
                    "presenterUrl": "2010/alex-ruiz-155"
                },
                {
                    "presenterId": 1211,
                    "presenterUrl": "2010/ted-young-1211"
                },
                {
                    "presenterId": 155,
                    "presenterUrl": "2010/alex-ruiz-155"
                },
                {
                    "presenterId": 203,
                    "presenterUrl": "2010/kenny-spade-203"
                },
                {
                    "presenterId": 203,
                    "presenterUrl": "2010/kenny-spade-203"
                },
                {
                    "presenterId": 2059,
                    "presenterUrl": "2010/ratnakar-malla-2059"
                },
                {
                    "presenterId": 1405,
                    "presenterUrl": "2010/theo-jungeblut-1405"
                },
                {
                    "presenterId": 1405,
                    "presenterUrl": "2010/theo-jungeblut-1405"
                },
                {
                    "presenterId": 4128,
                    "presenterUrl": "2010/karl-shifflett-4128"
                },
                {
                    "presenterId": 1661,
                    "presenterUrl": "2010/chris-sims-1661"
                },
                {
                    "presenterId": 1661,
                    "presenterUrl": "2010/chris-sims-1661"
                },
                {
                    "presenterId": 3768,
                    "presenterUrl": "2010/bernie-maloney-3768"
                },
                {
                    "presenterId": 888,
                    "presenterUrl": "2010/shamod-lacoul-888"
                },
                {
                    "presenterId": 2884,
                    "presenterUrl": "2010/mike-hewett-2884"
                },
                {
                    "presenterId": 1499,
                    "presenterUrl": "2010/sean-murphy-1499"
                },
                {
                    "presenterId": 2991,
                    "presenterUrl": "2010/hien-luu-2991"
                },
                {
                    "presenterId": 4208,
                    "presenterUrl": "2010/matt-ingenthron-4208"
                },
                {
                    "presenterId": 4219,
                    "presenterUrl": "2010/manu-mukerji-4219"
                },
                {
                    "presenterId": 1995,
                    "presenterUrl": "2010/beth-massi-1995"
                },
                {
                    "presenterId": 1995,
                    "presenterUrl": "2010/beth-massi-1995"
                },
                {
                    "presenterId": 4129,
                    "presenterUrl": "2010/praveen-alavilli-4129"
                },
                {
                    "presenterId": 439,
                    "presenterUrl": "2010/tom-hughescroucher-439"
                },
                {
                    "presenterId": 5269,
                    "presenterUrl": "2010/tim-caswell-5269"
                },
                {
                    "presenterId": 1725,
                    "presenterUrl": "2010/brad-irby-1725"
                },
                {
                    "presenterId": 4235,
                    "presenterUrl": "2010/thomas-millar-4235"
                },
                {
                    "presenterId": 4236,
                    "presenterUrl": "2010/chris-bedford-4236"
                },
                {
                    "presenterId": 4238,
                    "presenterUrl": "2010/leonardo-brown-4238"
                },
                {
                    "presenterId": 4231,
                    "presenterUrl": "2010/pragati-rai-4231"
                },
                {
                    "presenterId": 4241,
                    "presenterUrl": "2010/doug-goldie-4241"
                },
                {
                    "presenterId": 4267,
                    "presenterUrl": "2010/kevin-rohling-4267"
                },
                {
                    "presenterId": 1164,
                    "presenterUrl": "2010/nima-dilmaghani-1164"
                },
                {
                    "presenterId": 4276,
                    "presenterUrl": "2010/gene-snider-4276"
                },
                {
                    "presenterId": 4276,
                    "presenterUrl": "2010/gene-snider-4276"
                },
                {
                    "presenterId": 4281,
                    "presenterUrl": "2010/sinclair-schuller-4281"
                },
                {
                    "presenterId": 4291,
                    "presenterUrl": "2010/jerry-cellilo-4291"
                },
                {
                    "presenterId": 4301,
                    "presenterUrl": "2010/jason-goecke-4301"
                },
                {
                    "presenterId": 4291,
                    "presenterUrl": "2010/jerry-cellilo-4291"
                },
                {
                    "presenterId": 1128,
                    "presenterUrl": "2010/newton-chan-1128"
                },
                {
                    "presenterId": 4508,
                    "presenterUrl": "2010/tab-atkinsjr-4508"
                },
                {
                    "presenterId": 4363,
                    "presenterUrl": "2010/matthew-burnett-4363"
                },
                {
                    "presenterId": 4363,
                    "presenterUrl": "2010/matthew-burnett-4363"
                },
                {
                    "presenterId": 4370,
                    "presenterUrl": "2010/donovan-follette-4370"
                },
                {
                    "presenterId": 2967,
                    "presenterUrl": "2010/curtiss-pope-2967"
                },
                {
                    "presenterId": 4087,
                    "presenterUrl": "2010/doris-chen-4087"
                },
                {
                    "presenterId": 4364,
                    "presenterUrl": "2010/una-daly-4364"
                },
                {
                    "presenterId": 251,
                    "presenterUrl": "2010/wesley-chun-251"
                },
                {
                    "presenterId": 3347,
                    "presenterUrl": "2010/chris-schalk-3347"
                },
                {
                    "presenterId": 4395,
                    "presenterUrl": "2010/martin-omander-4395"
                },
                {
                    "presenterId": 251,
                    "presenterUrl": "2010/wesley-chun-251"
                },
                {
                    "presenterId": 4401,
                    "presenterUrl": "2010/eric-bidelman-4401"
                },
                {
                    "presenterId": 4464,
                    "presenterUrl": "2010/ernest-delgado-4464"
                },
                {
                    "presenterId": 545,
                    "presenterUrl": "2010/ronn-black-545"
                },
                {
                    "presenterId": 4410,
                    "presenterUrl": "2010/ryan-wick-4410"
                },
                {
                    "presenterId": 4410,
                    "presenterUrl": "2010/ryan-wick-4410"
                },
                {
                    "presenterId": 4413,
                    "presenterUrl": "2010/jarek-wilkiewicz-4413"
                },
                {
                    "presenterId": 4304,
                    "presenterUrl": "2010/albert-chen-4304"
                },
                {
                    "presenterId": 4421,
                    "presenterUrl": "2010/james-johnson-4421"
                },
                {
                    "presenterId": 482,
                    "presenterUrl": "2010/symon-chang-482"
                },
                {
                    "presenterId": 4361,
                    "presenterUrl": "2010/paul-stubbs-4361"
                },
                {
                    "presenterId": 4361,
                    "presenterUrl": "2010/paul-stubbs-4361"
                },
                {
                    "presenterId": 4429,
                    "presenterUrl": "2010/mano-marks-4429"
                },
                {
                    "presenterId": 4431,
                    "presenterUrl": "2010/kathryn-hurley-4431"
                },
                {
                    "presenterId": 4426,
                    "presenterUrl": "2010/bob-aman-4426"
                },
                {
                    "presenterId": 4432,
                    "presenterUrl": "2010/will-norris-4432"
                },
                {
                    "presenterId": 4429,
                    "presenterUrl": "2010/mano-marks-4429"
                },
                {
                    "presenterId": 3252,
                    "presenterUrl": "2010/masak-maeda-3252"
                },
                {
                    "presenterId": 3252,
                    "presenterUrl": "2010/masak-maeda-3252"
                },
                {
                    "presenterId": 4456,
                    "presenterUrl": "2010/jeff-mckenna-4456"
                },
                {
                    "presenterId": 1124,
                    "presenterUrl": "2010/douglas-crockford-1124"
                },
                {
                    "presenterId": 2852,
                    "presenterUrl": "2010/john-waters-2852"
                },
                {
                    "presenterId": 4427,
                    "presenterUrl": "2010/steve-andrews-4427"
                },
                {
                    "presenterId": 4427,
                    "presenterUrl": "2010/steve-andrews-4427"
                },
                {
                    "presenterId": 4465,
                    "presenterUrl": "2010/orion-letizi-4465"
                },
                {
                    "presenterId": 32,
                    "presenterUrl": "2010/roman-zhovtulya-32"
                },
                {
                    "presenterId": 32,
                    "presenterUrl": "2010/roman-zhovtulya-32"
                },
                {
                    "presenterId": 1761,
                    "presenterUrl": "2010/bill-venners-1761"
                },
                {
                    "presenterId": 4478,
                    "presenterUrl": "2010/randy-shen-4478"
                },
                {
                    "presenterId": 4479,
                    "presenterUrl": "2010/chi-chang-4479"
                },
                {
                    "presenterId": 823,
                    "presenterUrl": "2010/kevin-nilson-823"
                },
                {
                    "presenterId": 160,
                    "presenterUrl": "2010/michael-carter-160"
                },
                {
                    "presenterId": 823,
                    "presenterUrl": "2010/kevin-nilson-823"
                },
                {
                    "presenterId": 4409,
                    "presenterUrl": "2010/drew-johnson-4409"
                },
                {
                    "presenterId": 4475,
                    "presenterUrl": "2010/mark-terranova-4475"
                },
                {
                    "presenterId": 4518,
                    "presenterUrl": "2010/jack-deslippe-4518"
                },
                {
                    "presenterId": 4519,
                    "presenterUrl": "2010/earl-malmrose-4519"
                },
                {
                    "presenterId": 2888,
                    "presenterUrl": "2010/aaditya-bhatia-2888"
                },
                {
                    "presenterId": 5272,
                    "presenterUrl": "2010/ryan-singer-5272"
                },
                {
                    "presenterId": 194,
                    "presenterUrl": "2010/pieter-humphrey-194"
                },
                {
                    "presenterId": 2921,
                    "presenterUrl": "2010/greg-stachnick-2921"
                },
                {
                    "presenterId": 4492,
                    "presenterUrl": "2010/darrell-meyer-4492"
                },
                {
                    "presenterId": 4493,
                    "presenterUrl": "2010/david-kaneda-4493"
                },
                {
                    "presenterId": 545,
                    "presenterUrl": "2010/ronn-black-545"
                },
                {
                    "presenterId": 187,
                    "presenterUrl": "2010/dave-nielsen-187"
                },
                {
                    "presenterId": 2000,
                    "presenterUrl": "2010/ward-bell-2000"
                },
                {
                    "presenterId": 2000,
                    "presenterUrl": "2010/ward-bell-2000"
                },
                {
                    "presenterId": 4503,
                    "presenterUrl": "2010/joel-champagne-4503"
                },
                {
                    "presenterId": 4508,
                    "presenterUrl": "2010/tab-atkinsjr-4508"
                },
                {
                    "presenterId": 187,
                    "presenterUrl": "2010/dave-nielsen-187"
                },
                {
                    "presenterId": 187,
                    "presenterUrl": "2010/dave-nielsen-187"
                },
                {
                    "presenterId": 5786,
                    "presenterUrl": "2010/danielle-morrill-5786"
                },
                {
                    "presenterId": 4514,
                    "presenterUrl": "2010/brandon-brown-4514"
                },
                {
                    "presenterId": 187,
                    "presenterUrl": "2010/dave-nielsen-187"
                },
                {
                    "presenterId": 5159,
                    "presenterUrl": "2010/joe-arnold-5159"
                },
                {
                    "presenterId": 187,
                    "presenterUrl": "2010/dave-nielsen-187"
                },
                {
                    "presenterId": 4512,
                    "presenterUrl": "2010/adam-kalsey-4512"
                },
                {
                    "presenterId": 5786,
                    "presenterUrl": "2010/danielle-morrill-5786"
                },
                {
                    "presenterId": 187,
                    "presenterUrl": "2010/dave-nielsen-187"
                },
                {
                    "presenterId": 187,
                    "presenterUrl": "2010/dave-nielsen-187"
                },
                {
                    "presenterId": 5310,
                    "presenterUrl": "2010/issac-roth-5310"
                },
                {
                    "presenterId": 187,
                    "presenterUrl": "2010/dave-nielsen-187"
                },
                {
                    "presenterId": 4524,
                    "presenterUrl": "2010/sebastian-stadil-4524"
                },
                {
                    "presenterId": 1654,
                    "presenterUrl": "2010/jeff-atwood-1654"
                },
                {
                    "presenterId": 302,
                    "presenterUrl": "2010/scott-stanfield-302"
                },
                {
                    "presenterId": 903,
                    "presenterUrl": "2010/peter-kellner-903"
                },
                {
                    "presenterId": 4540,
                    "presenterUrl": "2010/duane-nickull-4540"
                },
                {
                    "presenterId": 4540,
                    "presenterUrl": "2010/duane-nickull-4540"
                },
                {
                    "presenterId": 2951,
                    "presenterUrl": "2010/gustavo-cavalcanti-2951"
                },
                {
                    "presenterId": 4720,
                    "presenterUrl": "2010/woody-pewitt-4720"
                },
                {
                    "presenterId": 4732,
                    "presenterUrl": "2010/aaron-sahagun-4732"
                },
                {
                    "presenterId": 4733,
                    "presenterUrl": "2010/allan-sahagun-4733"
                },
                {
                    "presenterId": 4734,
                    "presenterUrl": "2010/geoffrey-lee-4734"
                },
                {
                    "presenterId": 4759,
                    "presenterUrl": "2010/daniel-egan-4759"
                },
                {
                    "presenterId": 4759,
                    "presenterUrl": "2010/daniel-egan-4759"
                },
                {
                    "presenterId": 4759,
                    "presenterUrl": "2010/daniel-egan-4759"
                },
                {
                    "presenterId": 4759,
                    "presenterUrl": "2010/daniel-egan-4759"
                },
                {
                    "presenterId": 4759,
                    "presenterUrl": "2010/daniel-egan-4759"
                },
                {
                    "presenterId": 4759,
                    "presenterUrl": "2010/daniel-egan-4759"
                },
                {
                    "presenterId": 4759,
                    "presenterUrl": "2010/daniel-egan-4759"
                },
                {
                    "presenterId": 4759,
                    "presenterUrl": "2010/daniel-egan-4759"
                },
                {
                    "presenterId": 4795,
                    "presenterUrl": "2010/alan-cobb-4795"
                },
                {
                    "presenterId": 4667,
                    "presenterUrl": "2010/kevin-hague-4667"
                },
                {
                    "presenterId": 1124,
                    "presenterUrl": "2011/douglas-crockford-1124"
                },
                {
                    "presenterId": 1124,
                    "presenterUrl": "2011/douglas-crockford-1124"
                },
                {
                    "presenterId": 2852,
                    "presenterUrl": "2011/john-waters-2852"
                },
                {
                    "presenterId": 5594,
                    "presenterUrl": "2011/gary-campbell-5594"
                },
                {
                    "presenterId": 529,
                    "presenterUrl": "2011/lino-tadros-529"
                },
                {
                    "presenterId": 529,
                    "presenterUrl": "2011/lino-tadros-529"
                },
                {
                    "presenterId": 572,
                    "presenterUrl": "2011/noel-rice-572"
                },
                {
                    "presenterId": 3984,
                    "presenterUrl": "2011/lance-bullock-3984"
                },
                {
                    "presenterId": 3984,
                    "presenterUrl": "2011/lance-bullock-3984"
                },
                {
                    "presenterId": 5988,
                    "presenterUrl": "2011/j-tower-5988"
                },
                {
                    "presenterId": 5989,
                    "presenterUrl": "2011/sidney-maestre-5989"
                },
                {
                    "presenterId": 653,
                    "presenterUrl": "2011/deborah-kurata-653"
                },
                {
                    "presenterId": 1995,
                    "presenterUrl": "2011/beth-massi-1995"
                },
                {
                    "presenterId": 1995,
                    "presenterUrl": "2011/beth-massi-1995"
                },
                {
                    "presenterId": 4276,
                    "presenterUrl": "2011/gene-snider-4276"
                },
                {
                    "presenterId": 5995,
                    "presenterUrl": "2011/david-mccarter-5995"
                },
                {
                    "presenterId": 5995,
                    "presenterUrl": "2011/david-mccarter-5995"
                },
                {
                    "presenterId": 697,
                    "presenterUrl": "2011/paul-cassidy-697"
                },
                {
                    "presenterId": 1430,
                    "presenterUrl": "2011/manish-pandit-1430"
                },
                {
                    "presenterId": 1430,
                    "presenterUrl": "2011/manish-pandit-1430"
                },
                {
                    "presenterId": 4540,
                    "presenterUrl": "2011/duane-nickull-4540"
                },
                {
                    "presenterId": 410,
                    "presenterUrl": "2011/siamak-ashrafi-410"
                },
                {
                    "presenterId": 4540,
                    "presenterUrl": "2011/duane-nickull-4540"
                },
                {
                    "presenterId": 3768,
                    "presenterUrl": "2011/bernie-maloney-3768"
                },
                {
                    "presenterId": 2867,
                    "presenterUrl": "2011/massimo-paolini-2867"
                },
                {
                    "presenterId": 2867,
                    "presenterUrl": "2011/massimo-paolini-2867"
                },
                {
                    "presenterId": 411,
                    "presenterUrl": "2011/uday-gajendar-411"
                },
                {
                    "presenterId": 411,
                    "presenterUrl": "2011/uday-gajendar-411"
                },
                {
                    "presenterId": 3968,
                    "presenterUrl": "2011/nikita-ivanov-3968"
                },
                {
                    "presenterId": 4231,
                    "presenterUrl": "2011/pragati-rai-4231"
                },
                {
                    "presenterId": 5996,
                    "presenterUrl": "2011/craig-berntson-5996"
                },
                {
                    "presenterId": 6005,
                    "presenterUrl": "2011/ed-sweeney-6005"
                },
                {
                    "presenterId": 4276,
                    "presenterUrl": "2011/gene-snider-4276"
                },
                {
                    "presenterId": 7159,
                    "presenterUrl": "2011/keithen-hayenga-7159"
                },
                {
                    "presenterId": 1405,
                    "presenterUrl": "2011/theo-jungeblut-1405"
                },
                {
                    "presenterId": 1405,
                    "presenterUrl": "2011/theo-jungeblut-1405"
                },
                {
                    "presenterId": 6011,
                    "presenterUrl": "2011/john-sheehan-6011"
                },
                {
                    "presenterId": 1221,
                    "presenterUrl": "2011/andres-almiray-1221"
                },
                {
                    "presenterId": 1221,
                    "presenterUrl": "2011/andres-almiray-1221"
                },
                {
                    "presenterId": 1419,
                    "presenterUrl": "2011/stephen-chin-1419"
                },
                {
                    "presenterId": 1419,
                    "presenterUrl": "2011/stephen-chin-1419"
                },
                {
                    "presenterId": 953,
                    "presenterUrl": "2011/oswald-campesato-953"
                },
                {
                    "presenterId": 1419,
                    "presenterUrl": "2011/stephen-chin-1419"
                },
                {
                    "presenterId": 731,
                    "presenterUrl": "2011/tim-child-731"
                },
                {
                    "presenterId": 462,
                    "presenterUrl": "2011/paul-sheriff-462"
                },
                {
                    "presenterId": 462,
                    "presenterUrl": "2011/paul-sheriff-462"
                },
                {
                    "presenterId": 1620,
                    "presenterUrl": "2011/bruce-schechter-1620"
                },
                {
                    "presenterId": 953,
                    "presenterUrl": "2011/oswald-campesato-953"
                },
                {
                    "presenterId": 1212,
                    "presenterUrl": "2011/dhananjay-ragade-1212"
                },
                {
                    "presenterId": 5351,
                    "presenterUrl": "2011/james-tatum-5351"
                },
                {
                    "presenterId": 3483,
                    "presenterUrl": "2011/michael-litchard-3483"
                },
                {
                    "presenterId": 4674,
                    "presenterUrl": "2011/pankaj-mehra-4674"
                },
                {
                    "presenterId": 1214,
                    "presenterUrl": "2011/abbas-raza-1214"
                },
                {
                    "presenterId": 4524,
                    "presenterUrl": "2011/sebastian-stadil-4524"
                },
                {
                    "presenterId": 6061,
                    "presenterUrl": "2011/nagappan-alagappan-6061"
                },
                {
                    "presenterId": 6072,
                    "presenterUrl": "2011/chris-sutton-6072"
                },
                {
                    "presenterId": 3927,
                    "presenterUrl": "2011/peter-garst-3927"
                },
                {
                    "presenterId": 4532,
                    "presenterUrl": "2011/theresa-shafer-4532"
                },
                {
                    "presenterId": 1453,
                    "presenterUrl": "2011/athol-foden-1453"
                },
                {
                    "presenterId": 1453,
                    "presenterUrl": "2011/athol-foden-1453"
                },
                {
                    "presenterId": 953,
                    "presenterUrl": "2011/oswald-campesato-953"
                },
                {
                    "presenterId": 187,
                    "presenterUrl": "2011/dave-nielsen-187"
                },
                {
                    "presenterId": 32,
                    "presenterUrl": "2011/roman-zhovtulya-32"
                },
                {
                    "presenterId": 32,
                    "presenterUrl": "2011/roman-zhovtulya-32"
                },
                {
                    "presenterId": 6089,
                    "presenterUrl": "2011/randy-knight-6089"
                },
                {
                    "presenterId": 4014,
                    "presenterUrl": "2011/edward-gibbs-4014"
                },
                {
                    "presenterId": 583,
                    "presenterUrl": "2011/mathias-brandewinder-583"
                },
                {
                    "presenterId": 583,
                    "presenterUrl": "2011/mathias-brandewinder-583"
                },
                {
                    "presenterId": 4661,
                    "presenterUrl": "2011/chad-austin-4661"
                },
                {
                    "presenterId": 3980,
                    "presenterUrl": "2011/daniel-marashlian-3980"
                },
                {
                    "presenterId": 3019,
                    "presenterUrl": "2011/steve-bockman-3019"
                },
                {
                    "presenterId": 565,
                    "presenterUrl": "2011/bruno-terkaly-565"
                },
                {
                    "presenterId": 1434,
                    "presenterUrl": "2011/paras-wadehra-1434"
                },
                {
                    "presenterId": 6119,
                    "presenterUrl": "2011/sara-ford-6119"
                },
                {
                    "presenterId": 6125,
                    "presenterUrl": "2011/kevin-mcneish-6125"
                },
                {
                    "presenterId": 1533,
                    "presenterUrl": "2011/robin-shahan-1533"
                },
                {
                    "presenterId": 1533,
                    "presenterUrl": "2011/robin-shahan-1533"
                },
                {
                    "presenterId": 1078,
                    "presenterUrl": "2011/dave-briccetti-1078"
                },
                {
                    "presenterId": 1078,
                    "presenterUrl": "2011/dave-briccetti-1078"
                },
                {
                    "presenterId": 5443,
                    "presenterUrl": "2011/mark-abramson-5443"
                },
                {
                    "presenterId": 5443,
                    "presenterUrl": "2011/mark-abramson-5443"
                },
                {
                    "presenterId": 6155,
                    "presenterUrl": "2011/saurabh-gupta-6155"
                },
                {
                    "presenterId": 6159,
                    "presenterUrl": "2011/thomas-mueller-6159"
                },
                {
                    "presenterId": 203,
                    "presenterUrl": "2011/kenny-spade-203"
                },
                {
                    "presenterId": 4431,
                    "presenterUrl": "2011/kathryn-hurley-4431"
                },
                {
                    "presenterId": 6176,
                    "presenterUrl": "2011/justin-early-6176"
                },
                {
                    "presenterId": 1252,
                    "presenterUrl": "2011/lynn-langit-1252"
                },
                {
                    "presenterId": 1252,
                    "presenterUrl": "2011/lynn-langit-1252"
                },
                {
                    "presenterId": 1357,
                    "presenterUrl": "2011/james-williams-1357"
                },
                {
                    "presenterId": 5373,
                    "presenterUrl": "2011/kimber-lockhart-5373"
                },
                {
                    "presenterId": 529,
                    "presenterUrl": "2011/lino-tadros-529"
                },
                {
                    "presenterId": 572,
                    "presenterUrl": "2011/noel-rice-572"
                },
                {
                    "presenterId": 1048,
                    "presenterUrl": "2011/peter-white-1048"
                },
                {
                    "presenterId": 6182,
                    "presenterUrl": "2011/dave-duke-6182"
                },
                {
                    "presenterId": 6056,
                    "presenterUrl": "2011/lars-thorup-6056"
                },
                {
                    "presenterId": 1252,
                    "presenterUrl": "2011/lynn-langit-1252"
                },
                {
                    "presenterId": 4413,
                    "presenterUrl": "2011/jarek-wilkiewicz-4413"
                },
                {
                    "presenterId": 6159,
                    "presenterUrl": "2011/thomas-mueller-6159"
                },
                {
                    "presenterId": 4144,
                    "presenterUrl": "2011/ben-trombley-4144"
                },
                {
                    "presenterId": 6211,
                    "presenterUrl": "2011/randall-schulz-6211"
                },
                {
                    "presenterId": 6201,
                    "presenterUrl": "2011/jordan-sterling-6201"
                },
                {
                    "presenterId": 6212,
                    "presenterUrl": "2011/david-wake-6212"
                },
                {
                    "presenterId": 6214,
                    "presenterUrl": "2011/majd-taby-6214"
                },
                {
                    "presenterId": 6056,
                    "presenterUrl": "2011/lars-thorup-6056"
                },
                {
                    "presenterId": 6119,
                    "presenterUrl": "2011/sara-ford-6119"
                },
                {
                    "presenterId": 3019,
                    "presenterUrl": "2011/steve-bockman-3019"
                },
                {
                    "presenterId": 6236,
                    "presenterUrl": "2011/karl-beutner-6236"
                },
                {
                    "presenterId": 6236,
                    "presenterUrl": "2011/karl-beutner-6236"
                },
                {
                    "presenterId": 3608,
                    "presenterUrl": "2011/neil-mackenzie-3608"
                },
                {
                    "presenterId": 6180,
                    "presenterUrl": "2011/antoine-boulanger-6180"
                },
                {
                    "presenterId": 624,
                    "presenterUrl": "2011/suresh-koya-624"
                },
                {
                    "presenterId": 378,
                    "presenterUrl": "2011/alison-chaiken-378"
                },
                {
                    "presenterId": 6258,
                    "presenterUrl": "2011/roni-simonian-6258"
                },
                {
                    "presenterId": 6264,
                    "presenterUrl": "2011/roland-krause-6264"
                },
                {
                    "presenterId": 913,
                    "presenterUrl": "2011/matt-harrington-913"
                },
                {
                    "presenterId": 6278,
                    "presenterUrl": "2011/chris-bannon-6278"
                },
                {
                    "presenterId": 4720,
                    "presenterUrl": "2011/woody-pewitt-4720"
                },
                {
                    "presenterId": 4720,
                    "presenterUrl": "2011/woody-pewitt-4720"
                },
                {
                    "presenterId": 946,
                    "presenterUrl": "2011/dan-bikle-946"
                },
                {
                    "presenterId": 391,
                    "presenterUrl": "2011/steve-mylroie-391"
                },
                {
                    "presenterId": 6300,
                    "presenterUrl": "2011/scott-haines-6300"
                },
                {
                    "presenterId": 391,
                    "presenterUrl": "2011/steve-mylroie-391"
                },
                {
                    "presenterId": 4761,
                    "presenterUrl": "2011/estelle-weyl-4761"
                },
                {
                    "presenterId": 4761,
                    "presenterUrl": "2011/estelle-weyl-4761"
                },
                {
                    "presenterId": 6326,
                    "presenterUrl": "2011/peter-pilgrim-6326"
                },
                {
                    "presenterId": 5003,
                    "presenterUrl": "2011/mineshb-amin-5003"
                },
                {
                    "presenterId": 4219,
                    "presenterUrl": "2011/manu-mukerji-4219"
                },
                {
                    "presenterId": 6353,
                    "presenterUrl": "2011/russell-fustino-6353"
                },
                {
                    "presenterId": 6353,
                    "presenterUrl": "2011/russell-fustino-6353"
                },
                {
                    "presenterId": 4442,
                    "presenterUrl": "2011/alice-pang-4442"
                },
                {
                    "presenterId": 1278,
                    "presenterUrl": "2011/nik-kalyani-1278"
                },
                {
                    "presenterId": 5922,
                    "presenterUrl": "2011/neeraj-gupta-5922"
                },
                {
                    "presenterId": 6379,
                    "presenterUrl": "2011/tony-constantinides-6379"
                },
                {
                    "presenterId": 100,
                    "presenterUrl": "2011/michael-galpin-100"
                },
                {
                    "presenterId": 80,
                    "presenterUrl": "2011/sudha-jamthe-80"
                },
                {
                    "presenterId": 1263,
                    "presenterUrl": "2011/robert-evans-1263"
                },
                {
                    "presenterId": 6402,
                    "presenterUrl": "2011/stacey-broadwell-6402"
                },
                {
                    "presenterId": 6414,
                    "presenterUrl": "2011/daniel-egan-6414"
                },
                {
                    "presenterId": 6414,
                    "presenterUrl": "2011/daniel-egan-6414"
                },
                {
                    "presenterId": 6417,
                    "presenterUrl": "2011/john-brinnand-6417"
                },
                {
                    "presenterId": 5996,
                    "presenterUrl": "2011/craig-berntson-5996"
                },
                {
                    "presenterId": 4091,
                    "presenterUrl": "2011/gustavo-cavalcanti-4091"
                },
                {
                    "presenterId": 169,
                    "presenterUrl": "2011/slava-imeshev-169"
                },
                {
                    "presenterId": 4055,
                    "presenterUrl": "2011/jeff-green-4055"
                },
                {
                    "presenterId": 4087,
                    "presenterUrl": "2011/doris-chen-4087"
                },
                {
                    "presenterId": 4087,
                    "presenterUrl": "2011/doris-chen-4087"
                },
                {
                    "presenterId": 4054,
                    "presenterUrl": "2011/vasu-durgavarjhula-4054"
                },
                {
                    "presenterId": 4553,
                    "presenterUrl": "2011/jennifer-wong-4553"
                },
                {
                    "presenterId": 7475,
                    "presenterUrl": "2011/norman-boccone-7475"
                },
                {
                    "presenterId": 4509,
                    "presenterUrl": "2011/david-spark-4509"
                },
                {
                    "presenterId": 6447,
                    "presenterUrl": "2011/patrick-curran-6447"
                },
                {
                    "presenterId": 6449,
                    "presenterUrl": "2011/mary-mills-6449"
                },
                {
                    "presenterId": 251,
                    "presenterUrl": "2011/wesley-chun-251"
                },
                {
                    "presenterId": 251,
                    "presenterUrl": "2011/wesley-chun-251"
                },
                {
                    "presenterId": 251,
                    "presenterUrl": "2011/wesley-chun-251"
                },
                {
                    "presenterId": 6464,
                    "presenterUrl": "2011/kirsten-hunter-6464"
                },
                {
                    "presenterId": 6466,
                    "presenterUrl": "2011/joshua-granick-6466"
                },
                {
                    "presenterId": 6474,
                    "presenterUrl": "2011/peng-ying-6474"
                },
                {
                    "presenterId": 6484,
                    "presenterUrl": "2011/elaine-wherry-6484"
                },
                {
                    "presenterId": 3133,
                    "presenterUrl": "2011/llewellyn-falco-3133"
                },
                {
                    "presenterId": 6482,
                    "presenterUrl": "2011/sondra-card-6482"
                },
                {
                    "presenterId": 6437,
                    "presenterUrl": "2011/katherine-alberts-6437"
                },
                {
                    "presenterId": 6489,
                    "presenterUrl": "2011/alex-keh-6489"
                },
                {
                    "presenterId": 6489,
                    "presenterUrl": "2011/alex-keh-6489"
                },
                {
                    "presenterId": 6490,
                    "presenterUrl": "2011/christian-shay-6490"
                },
                {
                    "presenterId": 539,
                    "presenterUrl": "2011/jim-driscoll-539"
                },
                {
                    "presenterId": 6492,
                    "presenterUrl": "2011/bill-odom-6492"
                },
                {
                    "presenterId": 1269,
                    "presenterUrl": "2011/arun-gupta-1269"
                },
                {
                    "presenterId": 6494,
                    "presenterUrl": "2011/arivoli-tirouvingadame-6494"
                },
                {
                    "presenterId": 6591,
                    "presenterUrl": "2011/keshava-rangarajan-6591"
                },
                {
                    "presenterId": 6495,
                    "presenterUrl": "2011/juancamilo-ruiz-6495"
                },
                {
                    "presenterId": 6498,
                    "presenterUrl": "2011/mark-nelson-6498"
                },
                {
                    "presenterId": 1269,
                    "presenterUrl": "2011/arun-gupta-1269"
                },
                {
                    "presenterId": 1426,
                    "presenterUrl": "2011/ramnivas-laddad-1426"
                },
                {
                    "presenterId": 6459,
                    "presenterUrl": "2011/shawn-vanittersum-6459"
                },
                {
                    "presenterId": 6478,
                    "presenterUrl": "2011/steve-zehngut-6478"
                },
                {
                    "presenterId": 6518,
                    "presenterUrl": "2011/leslie-stevenshuffman-6518"
                },
                {
                    "presenterId": 6518,
                    "presenterUrl": "2011/leslie-stevenshuffman-6518"
                },
                {
                    "presenterId": 5995,
                    "presenterUrl": "2011/david-mccarter-5995"
                },
                {
                    "presenterId": 1211,
                    "presenterUrl": "2011/ted-young-1211"
                },
                {
                    "presenterId": 5364,
                    "presenterUrl": "2011/peter-thoeny-5364"
                },
                {
                    "presenterId": 6516,
                    "presenterUrl": "2011/oliver-marks-6516"
                },
                {
                    "presenterId": 5364,
                    "presenterUrl": "2011/peter-thoeny-5364"
                },
                {
                    "presenterId": 6528,
                    "presenterUrl": "2011/shashank-tiwari-6528"
                },
                {
                    "presenterId": 194,
                    "presenterUrl": "2011/pieter-humphrey-194"
                },
                {
                    "presenterId": 194,
                    "presenterUrl": "2011/pieter-humphrey-194"
                },
                {
                    "presenterId": 6534,
                    "presenterUrl": "2011/ashish-kelkar-6534"
                },
                {
                    "presenterId": 110,
                    "presenterUrl": "2011/gabi-zuniga-110"
                },
                {
                    "presenterId": 6778,
                    "presenterUrl": "2011/shani-zuniga-6778"
                },
                {
                    "presenterId": 110,
                    "presenterUrl": "2011/gabi-zuniga-110"
                },
                {
                    "presenterId": 6539,
                    "presenterUrl": "2011/steve-fox-6539"
                },
                {
                    "presenterId": 4370,
                    "presenterUrl": "2011/donovan-follette-4370"
                },
                {
                    "presenterId": 6542,
                    "presenterUrl": "2011/paul-stubbs-6542"
                },
                {
                    "presenterId": 4478,
                    "presenterUrl": "2011/randy-shen-4478"
                },
                {
                    "presenterId": 6396,
                    "presenterUrl": "2011/jonathan-feuchtwang-6396"
                },
                {
                    "presenterId": 4395,
                    "presenterUrl": "2011/martin-omander-4395"
                },
                {
                    "presenterId": 6547,
                    "presenterUrl": "2011/james-pearce-6547"
                },
                {
                    "presenterId": 6548,
                    "presenterUrl": "2011/steve-souders-6548"
                },
                {
                    "presenterId": 6547,
                    "presenterUrl": "2011/james-pearce-6547"
                },
                {
                    "presenterId": 6584,
                    "presenterUrl": "2011/luke-wroblewski-6584"
                },
                {
                    "presenterId": 4364,
                    "presenterUrl": "2011/una-daly-4364"
                },
                {
                    "presenterId": 6558,
                    "presenterUrl": "2011/johndavid-duncan-6558"
                },
                {
                    "presenterId": 6560,
                    "presenterUrl": "2011/craig-russell-6560"
                },
                {
                    "presenterId": 1164,
                    "presenterUrl": "2011/nima-dilmaghani-1164"
                },
                {
                    "presenterId": 6559,
                    "presenterUrl": "2011/todd-farmer-6559"
                },
                {
                    "presenterId": 6575,
                    "presenterUrl": "2011/mike-baily-6575"
                },
                {
                    "presenterId": 6363,
                    "presenterUrl": "2011/keith-sutton-6363"
                },
                {
                    "presenterId": 6363,
                    "presenterUrl": "2011/keith-sutton-6363"
                },
                {
                    "presenterId": 1419,
                    "presenterUrl": "2011/stephen-chin-1419"
                },
                {
                    "presenterId": 6619,
                    "presenterUrl": "2011/simon-law-6619"
                },
                {
                    "presenterId": 2000,
                    "presenterUrl": "2011/ward-bell-2000"
                },
                {
                    "presenterId": 302,
                    "presenterUrl": "2011/scott-stanfield-302"
                },
                {
                    "presenterId": 6621,
                    "presenterUrl": "2011/michael-lucaccini-6621"
                },
                {
                    "presenterId": 7381,
                    "presenterUrl": "2011/guido-rosso-7381"
                },
                {
                    "presenterId": 7570,
                    "presenterUrl": "2011/danny-riddell-7570"
                },
                {
                    "presenterId": 6621,
                    "presenterUrl": "2011/michael-lucaccini-6621"
                },
                {
                    "presenterId": 7381,
                    "presenterUrl": "2011/guido-rosso-7381"
                },
                {
                    "presenterId": 7051,
                    "presenterUrl": "2011/eric-anderson-7051"
                },
                {
                    "presenterId": 7570,
                    "presenterUrl": "2011/danny-riddell-7570"
                },
                {
                    "presenterId": 341,
                    "presenterUrl": "2011/pj-gupta-341"
                },
                {
                    "presenterId": 3983,
                    "presenterUrl": "2011/bary-nusz-3983"
                },
                {
                    "presenterId": 6753,
                    "presenterUrl": "2011/yakov-werde-6753"
                },
                {
                    "presenterId": 6788,
                    "presenterUrl": "2011/damian-edwards-6788"
                },
                {
                    "presenterId": 583,
                    "presenterUrl": "2011/mathias-brandewinder-583"
                },
                {
                    "presenterId": 2012,
                    "presenterUrl": "2011/bill-crow-2012"
                },
                {
                    "presenterId": 4037,
                    "presenterUrl": "2011/joe-sondow-4037"
                },
                {
                    "presenterId": 7164,
                    "presenterUrl": "2011/jon-kalb-7164"
                },
                {
                    "presenterId": 7014,
                    "presenterUrl": "2011/todd-davies-7014"
                },
                {
                    "presenterId": 1232,
                    "presenterUrl": "2011/mike-mintz-1232"
                },
                {
                    "presenterId": 7284,
                    "presenterUrl": "2011/jimmy-tobin-7284"
                },
                {
                    "presenterId": 529,
                    "presenterUrl": "2011/lino-tadros-529"
                },
                {
                    "presenterId": 1124,
                    "presenterUrl": "2012/douglas-crockford-1124"
                },
                {
                    "presenterId": 3768,
                    "presenterUrl": "2012/bernie-maloney-3768"
                },
                {
                    "presenterId": 385,
                    "presenterUrl": "2012/steve-evans-385"
                },
                {
                    "presenterId": 385,
                    "presenterUrl": "2012/steve-evans-385"
                },
                {
                    "presenterId": 572,
                    "presenterUrl": "2012/noel-rice-572"
                },
                {
                    "presenterId": 5995,
                    "presenterUrl": "2012/david-mccarter-5995"
                },
                {
                    "presenterId": 5995,
                    "presenterUrl": "2012/david-mccarter-5995"
                },
                {
                    "presenterId": 5995,
                    "presenterUrl": "2012/david-mccarter-5995"
                },
                {
                    "presenterId": 1725,
                    "presenterUrl": "2012/brad-irby-1725"
                },
                {
                    "presenterId": 1725,
                    "presenterUrl": "2012/brad-irby-1725"
                },
                {
                    "presenterId": 653,
                    "presenterUrl": "2012/deborah-kurata-653"
                },
                {
                    "presenterId": 6575,
                    "presenterUrl": "2012/mike-baily-6575"
                },
                {
                    "presenterId": 4442,
                    "presenterUrl": "2012/alice-pang-4442"
                },
                {
                    "presenterId": 4553,
                    "presenterUrl": "2012/jennifer-wong-4553"
                },
                {
                    "presenterId": 4054,
                    "presenterUrl": "2012/vasu-durgavarjhula-4054"
                },
                {
                    "presenterId": 7983,
                    "presenterUrl": "2012/lynn-langit-7983"
                },
                {
                    "presenterId": 411,
                    "presenterUrl": "2012/uday-gajendar-411"
                },
                {
                    "presenterId": 411,
                    "presenterUrl": "2012/uday-gajendar-411"
                },
                {
                    "presenterId": 4080,
                    "presenterUrl": "2012/richard-haven-4080"
                },
                {
                    "presenterId": 410,
                    "presenterUrl": "2012/siamak-ashrafi-410"
                },
                {
                    "presenterId": 2852,
                    "presenterUrl": "2012/john-waters-2852"
                },
                {
                    "presenterId": 5443,
                    "presenterUrl": "2012/mark-abramson-5443"
                },
                {
                    "presenterId": 4508,
                    "presenterUrl": "2012/tab-atkinsjr-4508"
                },
                {
                    "presenterId": 5443,
                    "presenterUrl": "2012/mark-abramson-5443"
                },
                {
                    "presenterId": 7989,
                    "presenterUrl": "2012/samantha-langit-7989"
                },
                {
                    "presenterId": 7983,
                    "presenterUrl": "2012/lynn-langit-7983"
                },
                {
                    "presenterId": 6005,
                    "presenterUrl": "2012/ed-sweeney-6005"
                },
                {
                    "presenterId": 1269,
                    "presenterUrl": "2012/arun-gupta-1269"
                },
                {
                    "presenterId": 4276,
                    "presenterUrl": "2012/gene-snider-4276"
                },
                {
                    "presenterId": 4276,
                    "presenterUrl": "2012/gene-snider-4276"
                },
                {
                    "presenterId": 5989,
                    "presenterUrl": "2012/sidney-maestre-5989"
                },
                {
                    "presenterId": 8228,
                    "presenterUrl": "2012/jonathan-leblanc-8228"
                },
                {
                    "presenterId": 2867,
                    "presenterUrl": "2012/massimo-paolini-2867"
                },
                {
                    "presenterId": 2867,
                    "presenterUrl": "2012/massimo-paolini-2867"
                },
                {
                    "presenterId": 7997,
                    "presenterUrl": "2012/alyson-harrold-7997"
                },
                {
                    "presenterId": 1164,
                    "presenterUrl": "2012/nima-dilmaghani-1164"
                },
                {
                    "presenterId": 1430,
                    "presenterUrl": "2012/manish-pandit-1430"
                },
                {
                    "presenterId": 1078,
                    "presenterUrl": "2012/dave-briccetti-1078"
                },
                {
                    "presenterId": 6508,
                    "presenterUrl": "2012/inayosun-chang-6508"
                },
                {
                    "presenterId": 8006,
                    "presenterUrl": "2012/devin-rader-8006"
                },
                {
                    "presenterId": 370,
                    "presenterUrl": "2012/adwait-ullal-370"
                },
                {
                    "presenterId": 1453,
                    "presenterUrl": "2012/athol-foden-1453"
                },
                {
                    "presenterId": 6619,
                    "presenterUrl": "2012/simon-law-6619"
                },
                {
                    "presenterId": 3133,
                    "presenterUrl": "2012/llewellyn-falco-3133"
                },
                {
                    "presenterId": 1453,
                    "presenterUrl": "2012/athol-foden-1453"
                },
                {
                    "presenterId": 8760,
                    "presenterUrl": "2012/jimmy-guerrero-8760"
                },
                {
                    "presenterId": 4761,
                    "presenterUrl": "2012/estelle-weyl-4761"
                },
                {
                    "presenterId": 8427,
                    "presenterUrl": "2012/matt-vaznaian-8427"
                },
                {
                    "presenterId": 7600,
                    "presenterUrl": "2012/norbert-lindenberg-7600"
                },
                {
                    "presenterId": 8087,
                    "presenterUrl": "2012/erick-tai-8087"
                },
                {
                    "presenterId": 6145,
                    "presenterUrl": "2012/mich-cook-6145"
                },
                {
                    "presenterId": 1214,
                    "presenterUrl": "2012/abbas-raza-1214"
                },
                {
                    "presenterId": 8673,
                    "presenterUrl": "2012/jeanbaptiste-volta-8673"
                },
                {
                    "presenterId": 14,
                    "presenterUrl": "2012/eishay-smith-14"
                },
                {
                    "presenterId": 8068,
                    "presenterUrl": "2012/matthew-neeley-8068"
                },
                {
                    "presenterId": 8068,
                    "presenterUrl": "2012/matthew-neeley-8068"
                },
                {
                    "presenterId": 14,
                    "presenterUrl": "2012/eishay-smith-14"
                },
                {
                    "presenterId": 8127,
                    "presenterUrl": "2012/michael-slinn-8127"
                },
                {
                    "presenterId": 583,
                    "presenterUrl": "2012/mathias-brandewinder-583"
                },
                {
                    "presenterId": 251,
                    "presenterUrl": "2012/wesley-chun-251"
                },
                {
                    "presenterId": 8135,
                    "presenterUrl": "2012/seth-ladd-8135"
                },
                {
                    "presenterId": 5101,
                    "presenterUrl": "2012/sanjeev-mishra-5101"
                },
                {
                    "presenterId": 5750,
                    "presenterUrl": "2012/jamini-samantaray-5750"
                },
                {
                    "presenterId": 1419,
                    "presenterUrl": "2012/stephen-chin-1419"
                },
                {
                    "presenterId": 32,
                    "presenterUrl": "2012/roman-zhovtulya-32"
                },
                {
                    "presenterId": 32,
                    "presenterUrl": "2012/roman-zhovtulya-32"
                },
                {
                    "presenterId": 6189,
                    "presenterUrl": "2012/mike-borozdin-6189"
                },
                {
                    "presenterId": 3009,
                    "presenterUrl": "2012/lee-lukehart-3009"
                },
                {
                    "presenterId": 4327,
                    "presenterUrl": "2012/gabriel-gramajo-4327"
                },
                {
                    "presenterId": 1177,
                    "presenterUrl": "2012/brian-miner-1177"
                },
                {
                    "presenterId": 3305,
                    "presenterUrl": "2012/suyash-joshi-3305"
                },
                {
                    "presenterId": 7996,
                    "presenterUrl": "2012/ryan-cuprak-7996"
                },
                {
                    "presenterId": 5062,
                    "presenterUrl": "2012/cindyf-solomon-5062"
                },
                {
                    "presenterId": 8684,
                    "presenterUrl": "2012/greg-geracie-8684"
                },
                {
                    "presenterId": 5205,
                    "presenterUrl": "2012/bryce-verdier-5205"
                },
                {
                    "presenterId": 8205,
                    "presenterUrl": "2012/ken-rutsky-8205"
                },
                {
                    "presenterId": 1405,
                    "presenterUrl": "2012/theo-jungeblut-1405"
                },
                {
                    "presenterId": 1405,
                    "presenterUrl": "2012/theo-jungeblut-1405"
                },
                {
                    "presenterId": 583,
                    "presenterUrl": "2012/mathias-brandewinder-583"
                },
                {
                    "presenterId": 8223,
                    "presenterUrl": "2012/marina-vatkina-8223"
                },
                {
                    "presenterId": 5989,
                    "presenterUrl": "2012/sidney-maestre-5989"
                },
                {
                    "presenterId": 1221,
                    "presenterUrl": "2012/andres-almiray-1221"
                },
                {
                    "presenterId": 8235,
                    "presenterUrl": "2012/ash-dcosta-8235"
                },
                {
                    "presenterId": 8235,
                    "presenterUrl": "2012/ash-dcosta-8235"
                },
                {
                    "presenterId": 1995,
                    "presenterUrl": "2012/beth-massi-1995"
                },
                {
                    "presenterId": 4442,
                    "presenterUrl": "2012/alice-pang-4442"
                },
                {
                    "presenterId": 1006,
                    "presenterUrl": "2012/william-leong-1006"
                },
                {
                    "presenterId": 8239,
                    "presenterUrl": "2012/pritish-jacob-8239"
                },
                {
                    "presenterId": 1995,
                    "presenterUrl": "2012/beth-massi-1995"
                },
                {
                    "presenterId": 1620,
                    "presenterUrl": "2012/bruce-schechter-1620"
                },
                {
                    "presenterId": 8286,
                    "presenterUrl": "2012/rick-morelan-8286"
                },
                {
                    "presenterId": 8285,
                    "presenterUrl": "2012/derrick-burke-8285"
                },
                {
                    "presenterId": 8287,
                    "presenterUrl": "2012/jorge-garifuna-8287"
                },
                {
                    "presenterId": 8299,
                    "presenterUrl": "2012/ariya-hidayat-8299"
                },
                {
                    "presenterId": 8301,
                    "presenterUrl": "2012/mario-hewardt-8301"
                },
                {
                    "presenterId": 8294,
                    "presenterUrl": "2012/marshall-clow-8294"
                },
                {
                    "presenterId": 8645,
                    "presenterUrl": "2012/juris-vecvanags-8645"
                },
                {
                    "presenterId": 7981,
                    "presenterUrl": "2012/bruno-tavares-7981"
                },
                {
                    "presenterId": 8794,
                    "presenterUrl": "2012/edmund-leung-8794"
                },
                {
                    "presenterId": 8287,
                    "presenterUrl": "2012/jorge-garifuna-8287"
                },
                {
                    "presenterId": 8331,
                    "presenterUrl": "2012/john-ceccarelli-8331"
                },
                {
                    "presenterId": 4121,
                    "presenterUrl": "2012/vlad-patryshev-4121"
                },
                {
                    "presenterId": 3019,
                    "presenterUrl": "2012/steve-bockman-3019"
                },
                {
                    "presenterId": 7164,
                    "presenterUrl": "2012/jon-kalb-7164"
                },
                {
                    "presenterId": 5988,
                    "presenterUrl": "2012/j-tower-5988"
                },
                {
                    "presenterId": 8340,
                    "presenterUrl": "2012/rachel-hagerman-8340"
                },
                {
                    "presenterId": 1499,
                    "presenterUrl": "2012/sean-murphy-1499"
                },
                {
                    "presenterId": 6582,
                    "presenterUrl": "2012/masashi-katsumata-6582"
                },
                {
                    "presenterId": 8367,
                    "presenterUrl": "2012/gaylelaakmann-mcdowell-8367"
                },
                {
                    "presenterId": 8412,
                    "presenterUrl": "2012/joe-enos-8412"
                },
                {
                    "presenterId": 731,
                    "presenterUrl": "2012/tim-child-731"
                },
                {
                    "presenterId": 953,
                    "presenterUrl": "2012/oswald-campesato-953"
                },
                {
                    "presenterId": 3608,
                    "presenterUrl": "2012/neil-mackenzie-3608"
                },
                {
                    "presenterId": 8428,
                    "presenterUrl": "2012/roshan-naik-8428"
                },
                {
                    "presenterId": 2875,
                    "presenterUrl": "2012/bill-scott-2875"
                },
                {
                    "presenterId": 2933,
                    "presenterUrl": "2012/taylor-leese-2933"
                },
                {
                    "presenterId": 7164,
                    "presenterUrl": "2012/jon-kalb-7164"
                },
                {
                    "presenterId": 8431,
                    "presenterUrl": "2012/scott-guthrie-8431"
                },
                {
                    "presenterId": 8431,
                    "presenterUrl": "2012/scott-guthrie-8431"
                },
                {
                    "presenterId": 1415,
                    "presenterUrl": "2012/juval-lowy-1415"
                },
                {
                    "presenterId": 1415,
                    "presenterUrl": "2012/juval-lowy-1415"
                },
                {
                    "presenterId": 6326,
                    "presenterUrl": "2012/peter-pilgrim-6326"
                },
                {
                    "presenterId": 5939,
                    "presenterUrl": "2012/nicholas-silva-5939"
                },
                {
                    "presenterId": 1426,
                    "presenterUrl": "2012/ramnivas-laddad-1426"
                },
                {
                    "presenterId": 8445,
                    "presenterUrl": "2012/jennifer-hickey-8445"
                },
                {
                    "presenterId": 6061,
                    "presenterUrl": "2012/nagappan-alagappan-6061"
                },
                {
                    "presenterId": 5351,
                    "presenterUrl": "2012/james-tatum-5351"
                },
                {
                    "presenterId": 7164,
                    "presenterUrl": "2012/jon-kalb-7164"
                },
                {
                    "presenterId": 953,
                    "presenterUrl": "2012/oswald-campesato-953"
                },
                {
                    "presenterId": 953,
                    "presenterUrl": "2012/oswald-campesato-953"
                },
                {
                    "presenterId": 8362,
                    "presenterUrl": "2012/vishnu-nath-8362"
                },
                {
                    "presenterId": 8468,
                    "presenterUrl": "2012/raja-raodv-8468"
                },
                {
                    "presenterId": 731,
                    "presenterUrl": "2012/tim-child-731"
                },
                {
                    "presenterId": 8477,
                    "presenterUrl": "2012/mark-prichard-8477"
                },
                {
                    "presenterId": 3160,
                    "presenterUrl": "2012/elizabeth-mezias-3160"
                },
                {
                    "presenterId": 3983,
                    "presenterUrl": "2012/bary-nusz-3983"
                },
                {
                    "presenterId": 8480,
                    "presenterUrl": "2012/kevin-ashley-8480"
                },
                {
                    "presenterId": 8473,
                    "presenterUrl": "2012/bhakti-mehta-8473"
                },
                {
                    "presenterId": 8498,
                    "presenterUrl": "2012/chris-kasso-8498"
                },
                {
                    "presenterId": 8482,
                    "presenterUrl": "2012/jeremy-walker-8482"
                },
                {
                    "presenterId": 8502,
                    "presenterUrl": "2012/jeremy-clark-8502"
                },
                {
                    "presenterId": 8502,
                    "presenterUrl": "2012/jeremy-clark-8502"
                },
                {
                    "presenterId": 4509,
                    "presenterUrl": "2012/david-spark-4509"
                },
                {
                    "presenterId": 8503,
                    "presenterUrl": "2012/sumant-tambe-8503"
                },
                {
                    "presenterId": 2920,
                    "presenterUrl": "2012/ron-lichty-2920"
                },
                {
                    "presenterId": 8509,
                    "presenterUrl": "2012/alex-peake-8509"
                },
                {
                    "presenterId": 8533,
                    "presenterUrl": "2012/andreas-kollegger-8533"
                },
                {
                    "presenterId": 6236,
                    "presenterUrl": "2012/karl-beutner-6236"
                },
                {
                    "presenterId": 8479,
                    "presenterUrl": "2012/dario-laverde-8479"
                },
                {
                    "presenterId": 1533,
                    "presenterUrl": "2012/robin-shahan-1533"
                },
                {
                    "presenterId": 1533,
                    "presenterUrl": "2012/robin-shahan-1533"
                },
                {
                    "presenterId": 8545,
                    "presenterUrl": "2012/hans-boehm-8545"
                },
                {
                    "presenterId": 8345,
                    "presenterUrl": "2012/jeremy-foster-8345"
                },
                {
                    "presenterId": 8345,
                    "presenterUrl": "2012/jeremy-foster-8345"
                },
                {
                    "presenterId": 8345,
                    "presenterUrl": "2012/jeremy-foster-8345"
                },
                {
                    "presenterId": 8553,
                    "presenterUrl": "2012/matt-doar-8553"
                },
                {
                    "presenterId": 8428,
                    "presenterUrl": "2012/roshan-naik-8428"
                },
                {
                    "presenterId": 8575,
                    "presenterUrl": "2012/tom-becker-8575"
                },
                {
                    "presenterId": 8573,
                    "presenterUrl": "2012/bill-enright-8573"
                },
                {
                    "presenterId": 8576,
                    "presenterUrl": "2012/andrey-nikiforov-8576"
                },
                {
                    "presenterId": 4500,
                    "presenterUrl": "2012/amit-chachra-4500"
                },
                {
                    "presenterId": 913,
                    "presenterUrl": "2012/matt-harrington-913"
                },
                {
                    "presenterId": 8504,
                    "presenterUrl": "2012/jim-bears-8504"
                },
                {
                    "presenterId": 565,
                    "presenterUrl": "2012/bruno-terkaly-565"
                },
                {
                    "presenterId": 8583,
                    "presenterUrl": "2012/dave-stokes-8583"
                },
                {
                    "presenterId": 8518,
                    "presenterUrl": "2012/johnray-thomas-8518"
                },
                {
                    "presenterId": 6353,
                    "presenterUrl": "2012/russell-fustino-6353"
                },
                {
                    "presenterId": 8586,
                    "presenterUrl": "2012/ted-drake-8586"
                },
                {
                    "presenterId": 8587,
                    "presenterUrl": "2012/edward-dejong-8587"
                },
                {
                    "presenterId": 8590,
                    "presenterUrl": "2012/chris-richardson-8590"
                },
                {
                    "presenterId": 391,
                    "presenterUrl": "2012/steve-mylroie-391"
                },
                {
                    "presenterId": 8593,
                    "presenterUrl": "2012/david-montag-8593"
                },
                {
                    "presenterId": 8608,
                    "presenterUrl": "2012/kris-lahiri-8608"
                },
                {
                    "presenterId": 8609,
                    "presenterUrl": "2012/amrit-jassal-8609"
                },
                {
                    "presenterId": 8611,
                    "presenterUrl": "2012/steve-chen-8611"
                },
                {
                    "presenterId": 8617,
                    "presenterUrl": "2012/peter-niederwieser-8617"
                },
                {
                    "presenterId": 8504,
                    "presenterUrl": "2012/jim-bears-8504"
                },
                {
                    "presenterId": 8504,
                    "presenterUrl": "2012/jim-bears-8504"
                },
                {
                    "presenterId": 8503,
                    "presenterUrl": "2012/sumant-tambe-8503"
                },
                {
                    "presenterId": 8617,
                    "presenterUrl": "2012/peter-niederwieser-8617"
                },
                {
                    "presenterId": 4087,
                    "presenterUrl": "2012/doris-chen-4087"
                },
                {
                    "presenterId": 8620,
                    "presenterUrl": "2012/philip-japikse-8620"
                },
                {
                    "presenterId": 8620,
                    "presenterUrl": "2012/philip-japikse-8620"
                },
                {
                    "presenterId": 6517,
                    "presenterUrl": "2012/adam-anderson-6517"
                },
                {
                    "presenterId": 8629,
                    "presenterUrl": "2012/ben-hoelting-8629"
                },
                {
                    "presenterId": 8637,
                    "presenterUrl": "2012/sastry-vedantam-8637"
                },
                {
                    "presenterId": 8639,
                    "presenterUrl": "2012/dale-western-8639"
                },
                {
                    "presenterId": 4087,
                    "presenterUrl": "2012/doris-chen-4087"
                },
                {
                    "presenterId": 8629,
                    "presenterUrl": "2012/ben-hoelting-8629"
                },
                {
                    "presenterId": 6449,
                    "presenterUrl": "2012/mary-mills-6449"
                },
                {
                    "presenterId": 7248,
                    "presenterUrl": "2012/vince-mansel-7248"
                },
                {
                    "presenterId": 8654,
                    "presenterUrl": "2012/dan-arkind-8654"
                },
                {
                    "presenterId": 8662,
                    "presenterUrl": "2012/jeff-winner-8662"
                },
                {
                    "presenterId": 8659,
                    "presenterUrl": "2012/peter-soderling-8659"
                },
                {
                    "presenterId": 8655,
                    "presenterUrl": "2012/aki-taha-8655"
                },
                {
                    "presenterId": 8664,
                    "presenterUrl": "2012/anthony-bishopric-8664"
                },
                {
                    "presenterId": 8667,
                    "presenterUrl": "2012/eric-vandenberg-8667"
                },
                {
                    "presenterId": 8658,
                    "presenterUrl": "2012/chandler-carruth-8658"
                },
                {
                    "presenterId": 8661,
                    "presenterUrl": "2012/vignesh-sukumar-8661"
                },
                {
                    "presenterId": 8663,
                    "presenterUrl": "2012/murali-sangubhatla-8663"
                },
                {
                    "presenterId": 8583,
                    "presenterUrl": "2012/dave-stokes-8583"
                },
                {
                    "presenterId": 4478,
                    "presenterUrl": "2012/randy-shen-4478"
                },
                {
                    "presenterId": 8940,
                    "presenterUrl": "2012/venk-krishnamoorthyphd-8940"
                },
                {
                    "presenterId": 8679,
                    "presenterUrl": "2012/dan-holevoet-8679"
                },
                {
                    "presenterId": 8696,
                    "presenterUrl": "2012/alex-fabijanic-8696"
                },
                {
                    "presenterId": 8688,
                    "presenterUrl": "2012/ali-afshar-8688"
                },
                {
                    "presenterId": 8704,
                    "presenterUrl": "2012/elaine-wherry-8704"
                },
                {
                    "presenterId": 8701,
                    "presenterUrl": "2012/kristan-uccello-8701"
                },
                {
                    "presenterId": 8701,
                    "presenterUrl": "2012/kristan-uccello-8701"
                },
                {
                    "presenterId": 8633,
                    "presenterUrl": "2012/baochau-nguyen-8633"
                },
                {
                    "presenterId": 8724,
                    "presenterUrl": "2012/emily-wu-8724"
                },
                {
                    "presenterId": 169,
                    "presenterUrl": "2012/slava-imeshev-169"
                },
                {
                    "presenterId": 169,
                    "presenterUrl": "2012/slava-imeshev-169"
                },
                {
                    "presenterId": 1124,
                    "presenterUrl": "2012/douglas-crockford-1124"
                },
                {
                    "presenterId": 8641,
                    "presenterUrl": "2012/jeff-geisler-8641"
                },
                {
                    "presenterId": 8705,
                    "presenterUrl": "2012/naga-addagadde-8705"
                },
                {
                    "presenterId": 8722,
                    "presenterUrl": "2012/ajoy-chattopadhyay-8722"
                },
                {
                    "presenterId": 9952,
                    "presenterUrl": "2012/thirugnanam-subbiah-9952"
                },
                {
                    "presenterId": 251,
                    "presenterUrl": "2012/wesley-chun-251"
                },
                {
                    "presenterId": 2000,
                    "presenterUrl": "2012/ward-bell-2000"
                },
                {
                    "presenterId": 187,
                    "presenterUrl": "2012/dave-nielsen-187"
                },
                {
                    "presenterId": 203,
                    "presenterUrl": "2012/kenny-spade-203"
                },
                {
                    "presenterId": 16,
                    "presenterUrl": "2012/michel-gerin-16"
                },
                {
                    "presenterId": 16,
                    "presenterUrl": "2012/michel-gerin-16"
                },
                {
                    "presenterId": 8926,
                    "presenterUrl": "2012/kevin-schmidt-8926"
                },
                {
                    "presenterId": 8689,
                    "presenterUrl": "2012/jack-fox-8689"
                },
                {
                    "presenterId": 8984,
                    "presenterUrl": "2012/anand-raja-8984"
                },
                {
                    "presenterId": 8930,
                    "presenterUrl": "2012/barry-boudreau-8930"
                },
                {
                    "presenterId": 8983,
                    "presenterUrl": "2012/kui-jia-8983"
                },
                {
                    "presenterId": 8473,
                    "presenterUrl": "2012/bhakti-mehta-8473"
                },
                {
                    "presenterId": 9727,
                    "presenterUrl": "2012/matt-kelly-9727"
                },
                {
                    "presenterId": 8573,
                    "presenterUrl": "2013/bill-enright-8573"
                },
                {
                    "presenterId": 8299,
                    "presenterUrl": "2013/ariya-hidayat-8299"
                },
                {
                    "presenterId": 3768,
                    "presenterUrl": "2013/bernie-maloney-3768"
                },
                {
                    "presenterId": 2867,
                    "presenterUrl": "2013/massimo-paolini-2867"
                },
                {
                    "presenterId": 5272,
                    "presenterUrl": "2013/ryan-singer-5272"
                },
                {
                    "presenterId": 8367,
                    "presenterUrl": "2013/gaylelaakmann-mcdowell-8367"
                },
                {
                    "presenterId": 953,
                    "presenterUrl": "2013/oswald-campesato-953"
                },
                {
                    "presenterId": 5101,
                    "presenterUrl": "2013/sanjeev-mishra-5101"
                },
                {
                    "presenterId": 8503,
                    "presenterUrl": "2013/sumant-tambe-8503"
                },
                {
                    "presenterId": 6494,
                    "presenterUrl": "2013/arivoli-tirouvingadame-6494"
                },
                {
                    "presenterId": 1426,
                    "presenterUrl": "2013/ramnivas-laddad-1426"
                },
                {
                    "presenterId": 583,
                    "presenterUrl": "2013/mathias-brandewinder-583"
                },
                {
                    "presenterId": 1514,
                    "presenterUrl": "2013/john-brinnand-1514"
                },
                {
                    "presenterId": 953,
                    "presenterUrl": "2013/oswald-campesato-953"
                },
                {
                    "presenterId": 1211,
                    "presenterUrl": "2013/ted-young-1211"
                },
                {
                    "presenterId": 6189,
                    "presenterUrl": "2013/mike-borozdin-6189"
                },
                {
                    "presenterId": 10249,
                    "presenterUrl": "2013/stephen-mccurry-10249"
                },
                {
                    "presenterId": 3019,
                    "presenterUrl": "2013/steve-bockman-3019"
                },
                {
                    "presenterId": 3019,
                    "presenterUrl": "2013/steve-bockman-3019"
                },
                {
                    "presenterId": 4509,
                    "presenterUrl": "2013/david-spark-4509"
                },
                {
                    "presenterId": 10254,
                    "presenterUrl": "2013/victor-karkar-10254"
                },
                {
                    "presenterId": 10257,
                    "presenterUrl": "2013/seemant-kulleen-10257"
                },
                {
                    "presenterId": 10258,
                    "presenterUrl": "2013/frank-stratton-10258"
                },
                {
                    "presenterId": 653,
                    "presenterUrl": "2013/deborah-kurata-653"
                },
                {
                    "presenterId": 4503,
                    "presenterUrl": "2013/joel-champagne-4503"
                },
                {
                    "presenterId": 1499,
                    "presenterUrl": "2013/sean-murphy-1499"
                },
                {
                    "presenterId": 7248,
                    "presenterUrl": "2013/vince-mansel-7248"
                },
                {
                    "presenterId": 10376,
                    "presenterUrl": "2013/ioannis-verdelis-10376"
                },
                {
                    "presenterId": 3483,
                    "presenterUrl": "2013/michael-litchard-3483"
                },
                {
                    "presenterId": 8294,
                    "presenterUrl": "2013/marshall-clow-8294"
                },
                {
                    "presenterId": 7164,
                    "presenterUrl": "2013/jon-kalb-7164"
                },
                {
                    "presenterId": 8620,
                    "presenterUrl": "2013/philip-japikse-8620"
                },
                {
                    "presenterId": 8684,
                    "presenterUrl": "2013/greg-geracie-8684"
                },
                {
                    "presenterId": 2920,
                    "presenterUrl": "2013/ron-lichty-2920"
                },
                {
                    "presenterId": 5443,
                    "presenterUrl": "2013/mark-abramson-5443"
                },
                {
                    "presenterId": 10267,
                    "presenterUrl": "2013/aaron-schlesinger-10267"
                },
                {
                    "presenterId": 3483,
                    "presenterUrl": "2013/michael-litchard-3483"
                },
                {
                    "presenterId": 5989,
                    "presenterUrl": "2013/sidney-maestre-5989"
                },
                {
                    "presenterId": 488,
                    "presenterUrl": "2013/steven-pousty-488"
                },
                {
                    "presenterId": 5443,
                    "presenterUrl": "2013/mark-abramson-5443"
                },
                {
                    "presenterId": 10271,
                    "presenterUrl": "2013/lyle-troxell-10271"
                },
                {
                    "presenterId": 8502,
                    "presenterUrl": "2013/jeremy-clark-8502"
                },
                {
                    "presenterId": 8502,
                    "presenterUrl": "2013/jeremy-clark-8502"
                },
                {
                    "presenterId": 1269,
                    "presenterUrl": "2013/arun-gupta-1269"
                },
                {
                    "presenterId": 8590,
                    "presenterUrl": "2013/chris-richardson-8590"
                },
                {
                    "presenterId": 8006,
                    "presenterUrl": "2013/devin-rader-8006"
                },
                {
                    "presenterId": 8590,
                    "presenterUrl": "2013/chris-richardson-8590"
                },
                {
                    "presenterId": 5083,
                    "presenterUrl": "2013/roy-yu-5083"
                },
                {
                    "presenterId": 32,
                    "presenterUrl": "2013/roman-zhovtulya-32"
                },
                {
                    "presenterId": 410,
                    "presenterUrl": "2013/siamak-ashrafi-410"
                },
                {
                    "presenterId": 32,
                    "presenterUrl": "2013/roman-zhovtulya-32"
                },
                {
                    "presenterId": 5750,
                    "presenterUrl": "2013/jamini-samantaray-5750"
                },
                {
                    "presenterId": 7997,
                    "presenterUrl": "2013/alyson-harrold-7997"
                },
                {
                    "presenterId": 10286,
                    "presenterUrl": "2013/ryan-jarvinen-10286"
                },
                {
                    "presenterId": 10273,
                    "presenterUrl": "2013/ryan-riddle-10273"
                },
                {
                    "presenterId": 1434,
                    "presenterUrl": "2013/paras-wadehra-1434"
                },
                {
                    "presenterId": 821,
                    "presenterUrl": "2013/bill-glosser-821"
                },
                {
                    "presenterId": 385,
                    "presenterUrl": "2013/steve-evans-385"
                },
                {
                    "presenterId": 2920,
                    "presenterUrl": "2013/ron-lichty-2920"
                },
                {
                    "presenterId": 4121,
                    "presenterUrl": "2013/vlad-patryshev-4121"
                },
                {
                    "presenterId": 4121,
                    "presenterUrl": "2013/vlad-patryshev-4121"
                },
                {
                    "presenterId": 385,
                    "presenterUrl": "2013/steve-evans-385"
                },
                {
                    "presenterId": 3768,
                    "presenterUrl": "2013/bernie-maloney-3768"
                },
                {
                    "presenterId": 1620,
                    "presenterUrl": "2013/bruce-schechter-1620"
                },
                {
                    "presenterId": 8637,
                    "presenterUrl": "2013/sastry-vedantam-8637"
                },
                {
                    "presenterId": 552,
                    "presenterUrl": "2013/beth-massi-552"
                },
                {
                    "presenterId": 1453,
                    "presenterUrl": "2013/athol-foden-1453"
                },
                {
                    "presenterId": 697,
                    "presenterUrl": "2013/paul-cassidy-697"
                },
                {
                    "presenterId": 3264,
                    "presenterUrl": "2013/michael-cohen-3264"
                },
                {
                    "presenterId": 3608,
                    "presenterUrl": "2013/neil-mackenzie-3608"
                },
                {
                    "presenterId": 1453,
                    "presenterUrl": "2013/athol-foden-1453"
                },
                {
                    "presenterId": 6765,
                    "presenterUrl": "2013/steven-hoffman-6765"
                },
                {
                    "presenterId": 4774,
                    "presenterUrl": "2013/rupa-dachere-4774"
                },
                {
                    "presenterId": 8473,
                    "presenterUrl": "2013/bhakti-mehta-8473"
                },
                {
                    "presenterId": 10357,
                    "presenterUrl": "2013/ben-gremillion-10357"
                },
                {
                    "presenterId": 8177,
                    "presenterUrl": "2013/darius-dunlap-8177"
                },
                {
                    "presenterId": 2867,
                    "presenterUrl": "2013/massimo-paolini-2867"
                },
                {
                    "presenterId": 5996,
                    "presenterUrl": "2013/craig-berntson-5996"
                },
                {
                    "presenterId": 6565,
                    "presenterUrl": "2013/joshua-woodward-6565"
                },
                {
                    "presenterId": 10392,
                    "presenterUrl": "2013/jordan-humphreys-10392"
                },
                {
                    "presenterId": 10394,
                    "presenterUrl": "2013/ghaida-zahran-10394"
                },
                {
                    "presenterId": 552,
                    "presenterUrl": "2013/beth-massi-552"
                },
                {
                    "presenterId": 10398,
                    "presenterUrl": "2013/joseph-reynolds-10398"
                },
                {
                    "presenterId": 106,
                    "presenterUrl": "2013/bob-zeidman-106"
                },
                {
                    "presenterId": 7983,
                    "presenterUrl": "2013/lynn-langit-7983"
                },
                {
                    "presenterId": 8797,
                    "presenterUrl": "2013/jeff-harrell-8797"
                },
                {
                    "presenterId": 11661,
                    "presenterUrl": "2013/lenny-markus-11661"
                },
                {
                    "presenterId": 8228,
                    "presenterUrl": "2013/jonathan-leblanc-8228"
                },
                {
                    "presenterId": 3133,
                    "presenterUrl": "2013/llewellyn-falco-3133"
                },
                {
                    "presenterId": 1419,
                    "presenterUrl": "2013/stephen-chin-1419"
                },
                {
                    "presenterId": 1078,
                    "presenterUrl": "2013/dave-briccetti-1078"
                },
                {
                    "presenterId": 1078,
                    "presenterUrl": "2013/dave-briccetti-1078"
                },
                {
                    "presenterId": 1405,
                    "presenterUrl": "2013/theo-jungeblut-1405"
                },
                {
                    "presenterId": 1405,
                    "presenterUrl": "2013/theo-jungeblut-1405"
                },
                {
                    "presenterId": 8006,
                    "presenterUrl": "2013/devin-rader-8006"
                },
                {
                    "presenterId": 6229,
                    "presenterUrl": "2013/david-albrecht-6229"
                },
                {
                    "presenterId": 3605,
                    "presenterUrl": "2013/akshaya-mahapatra-3605"
                },
                {
                    "presenterId": 187,
                    "presenterUrl": "2013/dave-nielsen-187"
                },
                {
                    "presenterId": 4387,
                    "presenterUrl": "2013/gorav-taneza-4387"
                },
                {
                    "presenterId": 1124,
                    "presenterUrl": "2013/douglas-crockford-1124"
                },
                {
                    "presenterId": 1124,
                    "presenterUrl": "2013/douglas-crockford-1124"
                },
                {
                    "presenterId": 1164,
                    "presenterUrl": "2013/nima-dilmaghani-1164"
                },
                {
                    "presenterId": 5995,
                    "presenterUrl": "2013/david-mccarter-5995"
                },
                {
                    "presenterId": 5995,
                    "presenterUrl": "2013/david-mccarter-5995"
                },
                {
                    "presenterId": 1661,
                    "presenterUrl": "2013/chris-sims-1661"
                },
                {
                    "presenterId": 1661,
                    "presenterUrl": "2013/chris-sims-1661"
                },
                {
                    "presenterId": 10494,
                    "presenterUrl": "2013/chris-patterson-10494"
                },
                {
                    "presenterId": 5062,
                    "presenterUrl": "2013/cindyf-solomon-5062"
                },
                {
                    "presenterId": 5996,
                    "presenterUrl": "2013/craig-berntson-5996"
                },
                {
                    "presenterId": 8482,
                    "presenterUrl": "2013/jeremy-walker-8482"
                },
                {
                    "presenterId": 672,
                    "presenterUrl": "2013/manoj-kumar-672"
                },
                {
                    "presenterId": 913,
                    "presenterUrl": "2013/matt-harrington-913"
                },
                {
                    "presenterId": 4124,
                    "presenterUrl": "2013/gareth-bowles-4124"
                },
                {
                    "presenterId": 1533,
                    "presenterUrl": "2013/robin-shahan-1533"
                },
                {
                    "presenterId": 1533,
                    "presenterUrl": "2013/robin-shahan-1533"
                },
                {
                    "presenterId": 123,
                    "presenterUrl": "2013/paul-keister-123"
                },
                {
                    "presenterId": 10569,
                    "presenterUrl": "2013/sherman-lee-10569"
                },
                {
                    "presenterId": 4442,
                    "presenterUrl": "2013/alice-pang-4442"
                },
                {
                    "presenterId": 8345,
                    "presenterUrl": "2013/jeremy-foster-8345"
                },
                {
                    "presenterId": 913,
                    "presenterUrl": "2013/matt-harrington-913"
                },
                {
                    "presenterId": 8285,
                    "presenterUrl": "2013/derrick-burke-8285"
                },
                {
                    "presenterId": 10607,
                    "presenterUrl": "2013/ike-ellis-10607"
                },
                {
                    "presenterId": 10614,
                    "presenterUrl": "2013/jeff-handley-10614"
                },
                {
                    "presenterId": 8345,
                    "presenterUrl": "2013/jeremy-foster-8345"
                },
                {
                    "presenterId": 13354,
                    "presenterUrl": "2013/helen-zeng-13354"
                },
                {
                    "presenterId": 10622,
                    "presenterUrl": "2013/jim-weaver-10622"
                },
                {
                    "presenterId": 10622,
                    "presenterUrl": "2013/jim-weaver-10622"
                },
                {
                    "presenterId": 10645,
                    "presenterUrl": "2013/les-hazlewood-10645"
                },
                {
                    "presenterId": 8479,
                    "presenterUrl": "2013/dario-laverde-8479"
                },
                {
                    "presenterId": 10716,
                    "presenterUrl": "2013/hinkmond-wong-10716"
                },
                {
                    "presenterId": 10721,
                    "presenterUrl": "2013/aidan-ryan-10721"
                },
                {
                    "presenterId": 10738,
                    "presenterUrl": "2013/warren-edwards-10738"
                },
                {
                    "presenterId": 374,
                    "presenterUrl": "2013/branka-kranjac-374"
                },
                {
                    "presenterId": 10607,
                    "presenterUrl": "2013/ike-ellis-10607"
                },
                {
                    "presenterId": 1278,
                    "presenterUrl": "2013/nik-kalyani-1278"
                },
                {
                    "presenterId": 391,
                    "presenterUrl": "2013/steve-mylroie-391"
                },
                {
                    "presenterId": 3809,
                    "presenterUrl": "2013/pradeep-pujari-3809"
                },
                {
                    "presenterId": 6353,
                    "presenterUrl": "2013/russell-fustino-6353"
                },
                {
                    "presenterId": 2925,
                    "presenterUrl": "2013/sunil-sabat-2925"
                },
                {
                    "presenterId": 391,
                    "presenterUrl": "2013/steve-mylroie-391"
                },
                {
                    "presenterId": 7164,
                    "presenterUrl": "2013/jon-kalb-7164"
                },
                {
                    "presenterId": 7164,
                    "presenterUrl": "2013/jon-kalb-7164"
                },
                {
                    "presenterId": 9970,
                    "presenterUrl": "2013/robert-felten-9970"
                },
                {
                    "presenterId": 10800,
                    "presenterUrl": "2013/james-bender-10800"
                },
                {
                    "presenterId": 10801,
                    "presenterUrl": "2013/troy-miles-10801"
                },
                {
                    "presenterId": 10803,
                    "presenterUrl": "2013/eugene-chuvyrov-10803"
                },
                {
                    "presenterId": 6041,
                    "presenterUrl": "2013/fabien-lavocat-6041"
                },
                {
                    "presenterId": 10810,
                    "presenterUrl": "2013/samantha-ready-10810"
                },
                {
                    "presenterId": 10812,
                    "presenterUrl": "2013/sam-bowne-10812"
                },
                {
                    "presenterId": 6558,
                    "presenterUrl": "2013/johndavid-duncan-6558"
                },
                {
                    "presenterId": 6560,
                    "presenterUrl": "2013/craig-russell-6560"
                },
                {
                    "presenterId": 8473,
                    "presenterUrl": "2013/bhakti-mehta-8473"
                },
                {
                    "presenterId": 921,
                    "presenterUrl": "2013/ron-vergis-921"
                },
                {
                    "presenterId": 7856,
                    "presenterUrl": "2013/tom-tofigh-7856"
                },
                {
                    "presenterId": 6395,
                    "presenterUrl": "2013/guy-vider-6395"
                },
                {
                    "presenterId": 1269,
                    "presenterUrl": "2013/arun-gupta-1269"
                },
                {
                    "presenterId": 565,
                    "presenterUrl": "2013/bruno-terkaly-565"
                },
                {
                    "presenterId": 10871,
                    "presenterUrl": "2013/muhammad-siddiqi-10871"
                },
                {
                    "presenterId": 4087,
                    "presenterUrl": "2013/doris-chen-4087"
                },
                {
                    "presenterId": 10904,
                    "presenterUrl": "2013/john-knapp-10904"
                },
                {
                    "presenterId": 10913,
                    "presenterUrl": "2013/chander-dhall-10913"
                },
                {
                    "presenterId": 1357,
                    "presenterUrl": "2013/james-williams-1357"
                },
                {
                    "presenterId": 8228,
                    "presenterUrl": "2013/jonathan-leblanc-8228"
                },
                {
                    "presenterId": 4087,
                    "presenterUrl": "2013/doris-chen-4087"
                },
                {
                    "presenterId": 8629,
                    "presenterUrl": "2013/ben-hoelting-8629"
                },
                {
                    "presenterId": 10983,
                    "presenterUrl": "2013/steve-marx-10983"
                },
                {
                    "presenterId": 8704,
                    "presenterUrl": "2013/elaine-wherry-8704"
                },
                {
                    "presenterId": 1430,
                    "presenterUrl": "2013/manish-pandit-1430"
                },
                {
                    "presenterId": 11064,
                    "presenterUrl": "2013/raj-lal-11064"
                },
                {
                    "presenterId": 11106,
                    "presenterUrl": "2013/michael-caisse-11106"
                },
                {
                    "presenterId": 11090,
                    "presenterUrl": "2013/ahmed-charles-11090"
                },
                {
                    "presenterId": 10121,
                    "presenterUrl": "2013/matt-hargett-10121"
                },
                {
                    "presenterId": 11140,
                    "presenterUrl": "2013/adam-tuliper-11140"
                },
                {
                    "presenterId": 11140,
                    "presenterUrl": "2013/adam-tuliper-11140"
                },
                {
                    "presenterId": 8586,
                    "presenterUrl": "2013/ted-drake-8586"
                },
                {
                    "presenterId": 6414,
                    "presenterUrl": "2013/daniel-egan-6414"
                },
                {
                    "presenterId": 6414,
                    "presenterUrl": "2013/daniel-egan-6414"
                },
                {
                    "presenterId": 3987,
                    "presenterUrl": "2013/mark-miller-3987"
                },
                {
                    "presenterId": 4442,
                    "presenterUrl": "2013/alice-pang-4442"
                },
                {
                    "presenterId": 3987,
                    "presenterUrl": "2013/mark-miller-3987"
                },
                {
                    "presenterId": 2000,
                    "presenterUrl": "2013/ward-bell-2000"
                },
                {
                    "presenterId": 7989,
                    "presenterUrl": "2013/samantha-langit-7989"
                },
                {
                    "presenterId": 7983,
                    "presenterUrl": "2013/lynn-langit-7983"
                },
                {
                    "presenterId": 823,
                    "presenterUrl": "2013/kevin-nilson-823"
                },
                {
                    "presenterId": 1415,
                    "presenterUrl": "2013/juval-lowy-1415"
                },
                {
                    "presenterId": 1415,
                    "presenterUrl": "2013/juval-lowy-1415"
                },
                {
                    "presenterId": 1419,
                    "presenterUrl": "2013/stephen-chin-1419"
                },
                {
                    "presenterId": 1419,
                    "presenterUrl": "2013/stephen-chin-1419"
                },
                {
                    "presenterId": 7983,
                    "presenterUrl": "2013/lynn-langit-7983"
                },
                {
                    "presenterId": 11102,
                    "presenterUrl": "2013/christian-wade-11102"
                },
                {
                    "presenterId": 11326,
                    "presenterUrl": "2013/stacia-misner-11326"
                },
                {
                    "presenterId": 10941,
                    "presenterUrl": "2013/eugene-krivopaltsev-10941"
                },
                {
                    "presenterId": 11306,
                    "presenterUrl": "2013/tim-hobson-11306"
                },
                {
                    "presenterId": 8679,
                    "presenterUrl": "2013/dan-holevoet-8679"
                },
                {
                    "presenterId": 11333,
                    "presenterUrl": "2013/paul-rashidi-11333"
                },
                {
                    "presenterId": 11113,
                    "presenterUrl": "2013/mark-tabladillo-11113"
                },
                {
                    "presenterId": 11113,
                    "presenterUrl": "2013/mark-tabladillo-11113"
                },
                {
                    "presenterId": 11314,
                    "presenterUrl": "2013/johan-euphrosine-11314"
                },
                {
                    "presenterId": 11243,
                    "presenterUrl": "2013/ami-levin-11243"
                },
                {
                    "presenterId": 11243,
                    "presenterUrl": "2013/ami-levin-11243"
                },
                {
                    "presenterId": 11334,
                    "presenterUrl": "2013/christopher-rhodes-11334"
                },
                {
                    "presenterId": 11346,
                    "presenterUrl": "2013/hugo-kornelis-11346"
                },
                {
                    "presenterId": 11337,
                    "presenterUrl": "2013/patrick-mundy-11337"
                },
                {
                    "presenterId": 11351,
                    "presenterUrl": "2013/joe-chang-11351"
                },
                {
                    "presenterId": 8135,
                    "presenterUrl": "2013/seth-ladd-8135"
                },
                {
                    "presenterId": 8645,
                    "presenterUrl": "2013/juris-vecvanags-8645"
                },
                {
                    "presenterId": 11346,
                    "presenterUrl": "2013/hugo-kornelis-11346"
                },
                {
                    "presenterId": 583,
                    "presenterUrl": "2013/mathias-brandewinder-583"
                },
                {
                    "presenterId": 11366,
                    "presenterUrl": "2013/paul-bertucci-11366"
                },
                {
                    "presenterId": 8705,
                    "presenterUrl": "2013/naga-addagadde-8705"
                },
                {
                    "presenterId": 8740,
                    "presenterUrl": "2013/sangeeta-narang-8740"
                },
                {
                    "presenterId": 11370,
                    "presenterUrl": "2013/jerry-nixon-11370"
                },
                {
                    "presenterId": 11370,
                    "presenterUrl": "2013/jerry-nixon-11370"
                },
                {
                    "presenterId": 6444,
                    "presenterUrl": "2013/luca-candela-6444"
                },
                {
                    "presenterId": 11401,
                    "presenterUrl": "2013/joe-wells-11401"
                },
                {
                    "presenterId": 11374,
                    "presenterUrl": "2013/ramakrishna-kollipara-11374"
                },
                {
                    "presenterId": 1269,
                    "presenterUrl": "2013/arun-gupta-1269"
                },
                {
                    "presenterId": 10984,
                    "presenterUrl": "2013/angel-abundez-10984"
                },
                {
                    "presenterId": 11477,
                    "presenterUrl": "2013/rushabh-mehta-11477"
                },
                {
                    "presenterId": 11405,
                    "presenterUrl": "2013/kirill-gavrylyuk-11405"
                },
                {
                    "presenterId": 12077,
                    "presenterUrl": "2013/yavor-georgiev-12077"
                },
                {
                    "presenterId": 5995,
                    "presenterUrl": "2013/david-mccarter-5995"
                },
                {
                    "presenterId": 11212,
                    "presenterUrl": "2013/josh-long-11212"
                },
                {
                    "presenterId": 1078,
                    "presenterUrl": "2013/dave-briccetti-1078"
                },
                {
                    "presenterId": 1078,
                    "presenterUrl": "2013/dave-briccetti-1078"
                },
                {
                    "presenterId": 11514,
                    "presenterUrl": "2013/neil-brown-11514"
                },
                {
                    "presenterId": 11514,
                    "presenterUrl": "2013/neil-brown-11514"
                },
                {
                    "presenterId": 11514,
                    "presenterUrl": "2013/neil-brown-11514"
                },
                {
                    "presenterId": 11514,
                    "presenterUrl": "2013/neil-brown-11514"
                },
                {
                    "presenterId": 11098,
                    "presenterUrl": "2013/shadaj-laddad-11098"
                },
                {
                    "presenterId": 5890,
                    "presenterUrl": "2013/mehul-harry-5890"
                },
                {
                    "presenterId": 5890,
                    "presenterUrl": "2013/mehul-harry-5890"
                },
                {
                    "presenterId": 11040,
                    "presenterUrl": "2013/brent-schooley-11040"
                },
                {
                    "presenterId": 4037,
                    "presenterUrl": "2013/joe-sondow-4037"
                },
                {
                    "presenterId": 11212,
                    "presenterUrl": "2013/josh-long-11212"
                },
                {
                    "presenterId": 6291,
                    "presenterUrl": "2013/yosun-chang-6291"
                },
                {
                    "presenterId": 11501,
                    "presenterUrl": "2013/felix-rieseberg-11501"
                },
                {
                    "presenterId": 11831,
                    "presenterUrl": "2013/scott-deeg-11831"
                },
                {
                    "presenterId": 7159,
                    "presenterUrl": "2013/keithen-hayenga-7159"
                },
                {
                    "presenterId": 187,
                    "presenterUrl": "2013/dave-nielsen-187"
                },
                {
                    "presenterId": 12811,
                    "presenterUrl": "2013/balachander-keelapudi-12811"
                },
                {
                    "presenterId": 13070,
                    "presenterUrl": "2013/elisabeth-hendrickson-13070"
                },
                {
                    "presenterId": 953,
                    "presenterUrl": "2014/oswald-campesato-953"
                },
                {
                    "presenterId": 953,
                    "presenterUrl": "2014/oswald-campesato-953"
                },
                {
                    "presenterId": 3768,
                    "presenterUrl": "2014/bernie-maloney-3768"
                },
                {
                    "presenterId": 3768,
                    "presenterUrl": "2014/bernie-maloney-3768"
                },
                {
                    "presenterId": 8367,
                    "presenterUrl": "2014/gaylelaakmann-mcdowell-8367"
                },
                {
                    "presenterId": 8367,
                    "presenterUrl": "2014/gaylelaakmann-mcdowell-8367"
                },
                {
                    "presenterId": 5083,
                    "presenterUrl": "2014/roy-yu-5083"
                },
                {
                    "presenterId": 1124,
                    "presenterUrl": "2014/douglas-crockford-1124"
                },
                {
                    "presenterId": 8573,
                    "presenterUrl": "2014/bill-enright-8573"
                },
                {
                    "presenterId": 10398,
                    "presenterUrl": "2014/joseph-reynolds-10398"
                },
                {
                    "presenterId": 15072,
                    "presenterUrl": "2014/maarten-balliauw-15072"
                },
                {
                    "presenterId": 3073,
                    "presenterUrl": "2014/rahul-agarwal-3073"
                },
                {
                    "presenterId": 15075,
                    "presenterUrl": "2014/breandan-considine-15075"
                },
                {
                    "presenterId": 653,
                    "presenterUrl": "2014/deborah-kurata-653"
                },
                {
                    "presenterId": 672,
                    "presenterUrl": "2014/manoj-kumar-672"
                },
                {
                    "presenterId": 6582,
                    "presenterUrl": "2014/masashi-katsumata-6582"
                },
                {
                    "presenterId": 502,
                    "presenterUrl": "2014/sridhar-reddy-502"
                },
                {
                    "presenterId": 1430,
                    "presenterUrl": "2014/manish-pandit-1430"
                },
                {
                    "presenterId": 410,
                    "presenterUrl": "2014/siamak-ashrafi-410"
                },
                {
                    "presenterId": 15080,
                    "presenterUrl": "2014/elena-philipova-15080"
                },
                {
                    "presenterId": 5443,
                    "presenterUrl": "2014/mark-abramson-5443"
                },
                {
                    "presenterId": 1419,
                    "presenterUrl": "2014/stephen-chin-1419"
                },
                {
                    "presenterId": 1419,
                    "presenterUrl": "2014/stephen-chin-1419"
                },
                {
                    "presenterId": 1269,
                    "presenterUrl": "2014/arun-gupta-1269"
                },
                {
                    "presenterId": 1269,
                    "presenterUrl": "2014/arun-gupta-1269"
                },
                {
                    "presenterId": 251,
                    "presenterUrl": "2014/wesley-chun-251"
                },
                {
                    "presenterId": 10801,
                    "presenterUrl": "2014/troy-miles-10801"
                },
                {
                    "presenterId": 10801,
                    "presenterUrl": "2014/troy-miles-10801"
                },
                {
                    "presenterId": 5995,
                    "presenterUrl": "2014/david-mccarter-5995"
                },
                {
                    "presenterId": 5995,
                    "presenterUrl": "2014/david-mccarter-5995"
                },
                {
                    "presenterId": 823,
                    "presenterUrl": "2014/kevin-nilson-823"
                },
                {
                    "presenterId": 2920,
                    "presenterUrl": "2014/ron-lichty-2920"
                },
                {
                    "presenterId": 583,
                    "presenterUrl": "2014/mathias-brandewinder-583"
                },
                {
                    "presenterId": 8590,
                    "presenterUrl": "2014/chris-richardson-8590"
                },
                {
                    "presenterId": 8590,
                    "presenterUrl": "2014/chris-richardson-8590"
                },
                {
                    "presenterId": 8637,
                    "presenterUrl": "2014/sastry-vedantam-8637"
                },
                {
                    "presenterId": 10812,
                    "presenterUrl": "2014/sam-bowne-10812"
                },
                {
                    "presenterId": 15105,
                    "presenterUrl": "2014/steve-jones-15105"
                },
                {
                    "presenterId": 697,
                    "presenterUrl": "2014/paul-cassidy-697"
                },
                {
                    "presenterId": 8503,
                    "presenterUrl": "2014/sumant-tambe-8503"
                },
                {
                    "presenterId": 8684,
                    "presenterUrl": "2014/greg-geracie-8684"
                },
                {
                    "presenterId": 2920,
                    "presenterUrl": "2014/ron-lichty-2920"
                },
                {
                    "presenterId": 913,
                    "presenterUrl": "2014/matt-harrington-913"
                },
                {
                    "presenterId": 110,
                    "presenterUrl": "2014/gabi-zuniga-110"
                },
                {
                    "presenterId": 7164,
                    "presenterUrl": "2014/jon-kalb-7164"
                },
                {
                    "presenterId": 12415,
                    "presenterUrl": "2014/les-hazlewood-12415"
                },
                {
                    "presenterId": 7164,
                    "presenterUrl": "2014/jon-kalb-7164"
                },
                {
                    "presenterId": 11370,
                    "presenterUrl": "2014/jerry-nixon-11370"
                },
                {
                    "presenterId": 4231,
                    "presenterUrl": "2014/pragati-rai-4231"
                },
                {
                    "presenterId": 1434,
                    "presenterUrl": "2014/paras-wadehra-1434"
                },
                {
                    "presenterId": 5062,
                    "presenterUrl": "2014/cindyf-solomon-5062"
                },
                {
                    "presenterId": 8228,
                    "presenterUrl": "2014/jonathan-leblanc-8228"
                },
                {
                    "presenterId": 8228,
                    "presenterUrl": "2014/jonathan-leblanc-8228"
                },
                {
                    "presenterId": 385,
                    "presenterUrl": "2014/steve-evans-385"
                },
                {
                    "presenterId": 6765,
                    "presenterUrl": "2014/steven-hoffman-6765"
                },
                {
                    "presenterId": 539,
                    "presenterUrl": "2014/jim-driscoll-539"
                },
                {
                    "presenterId": 11306,
                    "presenterUrl": "2014/tim-hobson-11306"
                },
                {
                    "presenterId": 11334,
                    "presenterUrl": "2014/christopher-rhodes-11334"
                },
                {
                    "presenterId": 4578,
                    "presenterUrl": "2014/jorg-janke-4578"
                },
                {
                    "presenterId": 32,
                    "presenterUrl": "2014/roman-zhovtulya-32"
                },
                {
                    "presenterId": 8480,
                    "presenterUrl": "2014/kevin-ashley-8480"
                },
                {
                    "presenterId": 32,
                    "presenterUrl": "2014/roman-zhovtulya-32"
                },
                {
                    "presenterId": 488,
                    "presenterUrl": "2014/steven-pousty-488"
                },
                {
                    "presenterId": 8473,
                    "presenterUrl": "2014/bhakti-mehta-8473"
                },
                {
                    "presenterId": 1211,
                    "presenterUrl": "2014/ted-young-1211"
                },
                {
                    "presenterId": 5995,
                    "presenterUrl": "2014/david-mccarter-5995"
                },
                {
                    "presenterId": 225,
                    "presenterUrl": "2014/jerry-kurata-225"
                },
                {
                    "presenterId": 2925,
                    "presenterUrl": "2014/sunil-sabat-2925"
                },
                {
                    "presenterId": 1419,
                    "presenterUrl": "2014/stephen-chin-1419"
                },
                {
                    "presenterId": 8294,
                    "presenterUrl": "2014/marshall-clow-8294"
                },
                {
                    "presenterId": 2505,
                    "presenterUrl": "2014/ansel-halliburton-2505"
                },
                {
                    "presenterId": 16209,
                    "presenterUrl": "2014/steven-edouard-16209"
                },
                {
                    "presenterId": 4503,
                    "presenterUrl": "2014/joel-champagne-4503"
                },
                {
                    "presenterId": 12591,
                    "presenterUrl": "2014/tobiah-marks-12591"
                },
                {
                    "presenterId": 106,
                    "presenterUrl": "2014/bob-zeidman-106"
                },
                {
                    "presenterId": 16223,
                    "presenterUrl": "2014/vm-brasseur-16223"
                },
                {
                    "presenterId": 8502,
                    "presenterUrl": "2014/jeremy-clark-8502"
                },
                {
                    "presenterId": 8502,
                    "presenterUrl": "2014/jeremy-clark-8502"
                },
                {
                    "presenterId": 1273,
                    "presenterUrl": "2014/alok-govil-1273"
                },
                {
                    "presenterId": 16239,
                    "presenterUrl": "2014/tim-pettersen-16239"
                },
                {
                    "presenterId": 16252,
                    "presenterUrl": "2014/nick-breen-16252"
                },
                {
                    "presenterId": 16283,
                    "presenterUrl": "2014/jeff-brewer-16283"
                },
                {
                    "presenterId": 11098,
                    "presenterUrl": "2014/shadaj-laddad-11098"
                },
                {
                    "presenterId": 11589,
                    "presenterUrl": "2014/michael-ossou-11589"
                },
                {
                    "presenterId": 410,
                    "presenterUrl": "2014/siamak-ashrafi-410"
                },
                {
                    "presenterId": 16296,
                    "presenterUrl": "2014/gayathri-murali-16296"
                },
                {
                    "presenterId": 16333,
                    "presenterUrl": "2014/venkat-gajulapalli-16333"
                },
                {
                    "presenterId": 16339,
                    "presenterUrl": "2014/mike-wood-16339"
                },
                {
                    "presenterId": 17347,
                    "presenterUrl": "2014/nik-molnar-17347"
                },
                {
                    "presenterId": 16189,
                    "presenterUrl": "2014/paul-fryer-16189"
                },
                {
                    "presenterId": 17360,
                    "presenterUrl": "2014/mike-yeager-17360"
                },
                {
                    "presenterId": 17385,
                    "presenterUrl": "2014/anthony-vanderhoorn-17385"
                },
                {
                    "presenterId": 17401,
                    "presenterUrl": "2014/marc-grabanski-17401"
                },
                {
                    "presenterId": 490,
                    "presenterUrl": "2014/sasha-ovsankin-490"
                },
                {
                    "presenterId": 17414,
                    "presenterUrl": "2014/markus-egger-17414"
                },
                {
                    "presenterId": 4087,
                    "presenterUrl": "2014/doris-chen-4087"
                },
                {
                    "presenterId": 12015,
                    "presenterUrl": "2014/sujee-maniyam-12015"
                },
                {
                    "presenterId": 11541,
                    "presenterUrl": "2014/aditya-gupta-11541"
                },
                {
                    "presenterId": 1269,
                    "presenterUrl": "2014/arun-gupta-1269"
                },
                {
                    "presenterId": 11401,
                    "presenterUrl": "2014/joe-wells-11401"
                },
                {
                    "presenterId": 4442,
                    "presenterUrl": "2014/alice-pang-4442"
                },
                {
                    "presenterId": 4276,
                    "presenterUrl": "2014/gene-snider-4276"
                },
                {
                    "presenterId": 17454,
                    "presenterUrl": "2014/paolo-bettoni-17454"
                },
                {
                    "presenterId": 12015,
                    "presenterUrl": "2014/sujee-maniyam-12015"
                },
                {
                    "presenterId": 17453,
                    "presenterUrl": "2014/pradeep-bhatter-17453"
                },
                {
                    "presenterId": 4276,
                    "presenterUrl": "2014/gene-snider-4276"
                },
                {
                    "presenterId": 17453,
                    "presenterUrl": "2014/pradeep-bhatter-17453"
                },
                {
                    "presenterId": 17461,
                    "presenterUrl": "2014/pavi-bhatter-17461"
                },
                {
                    "presenterId": 3701,
                    "presenterUrl": "2014/tam-nguyen-3701"
                },
                {
                    "presenterId": 6163,
                    "presenterUrl": "2014/steve-putz-6163"
                },
                {
                    "presenterId": 17473,
                    "presenterUrl": "2014/mark-simms-17473"
                },
                {
                    "presenterId": 6163,
                    "presenterUrl": "2014/steve-putz-6163"
                },
                {
                    "presenterId": 1419,
                    "presenterUrl": "2014/stephen-chin-1419"
                },
                {
                    "presenterId": 17478,
                    "presenterUrl": "2014/anoop-trivedi-17478"
                },
                {
                    "presenterId": 17478,
                    "presenterUrl": "2014/anoop-trivedi-17478"
                },
                {
                    "presenterId": 11573,
                    "presenterUrl": "2014/menka-gupta-11573"
                },
                {
                    "presenterId": 10295,
                    "presenterUrl": "2014/scott-smith-10295"
                },
                {
                    "presenterId": 1078,
                    "presenterUrl": "2014/dave-briccetti-1078"
                },
                {
                    "presenterId": 1078,
                    "presenterUrl": "2014/dave-briccetti-1078"
                },
                {
                    "presenterId": 18562,
                    "presenterUrl": "2014/jason-kanaris-18562"
                },
                {
                    "presenterId": 3608,
                    "presenterUrl": "2014/neil-mackenzie-3608"
                },
                {
                    "presenterId": 2872,
                    "presenterUrl": "2014/stephen-boesch-2872"
                },
                {
                    "presenterId": 5996,
                    "presenterUrl": "2014/craig-berntson-5996"
                },
                {
                    "presenterId": 11757,
                    "presenterUrl": "2014/yorick-phoenix-11757"
                },
                {
                    "presenterId": 921,
                    "presenterUrl": "2014/ron-vergis-921"
                },
                {
                    "presenterId": 9576,
                    "presenterUrl": "2014/megan-williams-9576"
                },
                {
                    "presenterId": 18590,
                    "presenterUrl": "2014/john-hann-18590"
                },
                {
                    "presenterId": 11541,
                    "presenterUrl": "2014/aditya-gupta-11541"
                },
                {
                    "presenterId": 1269,
                    "presenterUrl": "2014/arun-gupta-1269"
                },
                {
                    "presenterId": 6053,
                    "presenterUrl": "2014/martin-vigo-6053"
                },
                {
                    "presenterId": 19831,
                    "presenterUrl": "2014/sergey-gorbaty-19831"
                },
                {
                    "presenterId": 2059,
                    "presenterUrl": "2014/ratnakar-malla-2059"
                },
                {
                    "presenterId": 391,
                    "presenterUrl": "2014/steve-mylroie-391"
                },
                {
                    "presenterId": 18621,
                    "presenterUrl": "2014/ilayaperumal-gopinathan-18621"
                },
                {
                    "presenterId": 18624,
                    "presenterUrl": "2014/dylan-smith-18624"
                },
                {
                    "presenterId": 10983,
                    "presenterUrl": "2014/steve-marx-10983"
                },
                {
                    "presenterId": 10569,
                    "presenterUrl": "2014/sherman-lee-10569"
                },
                {
                    "presenterId": 8764,
                    "presenterUrl": "2014/arthur-odwyer-8764"
                },
                {
                    "presenterId": 18642,
                    "presenterUrl": "2014/nicolas-grenie-18642"
                },
                {
                    "presenterId": 11711,
                    "presenterUrl": "2014/somik-raha-11711"
                },
                {
                    "presenterId": 18656,
                    "presenterUrl": "2014/kai-wu-18656"
                },
                {
                    "presenterId": 11711,
                    "presenterUrl": "2014/somik-raha-11711"
                },
                {
                    "presenterId": 18656,
                    "presenterUrl": "2014/kai-wu-18656"
                },
                {
                    "presenterId": 8689,
                    "presenterUrl": "2014/jack-fox-8689"
                },
                {
                    "presenterId": 18653,
                    "presenterUrl": "2014/claudia-galvan-18653"
                },
                {
                    "presenterId": 11337,
                    "presenterUrl": "2014/patrick-mundy-11337"
                },
                {
                    "presenterId": 18686,
                    "presenterUrl": "2014/joonas-lehtinen-18686"
                },
                {
                    "presenterId": 2978,
                    "presenterUrl": "2014/daniel-coupal-2978"
                },
                {
                    "presenterId": 4190,
                    "presenterUrl": "2014/david-burrowes-4190"
                },
                {
                    "presenterId": 5443,
                    "presenterUrl": "2014/mark-abramson-5443"
                },
                {
                    "presenterId": 4121,
                    "presenterUrl": "2014/vlad-patryshev-4121"
                },
                {
                    "presenterId": 4816,
                    "presenterUrl": "2014/ramona-maxwell-4816"
                },
                {
                    "presenterId": 18613,
                    "presenterUrl": "2014/vishal-saxena-18613"
                },
                {
                    "presenterId": 2867,
                    "presenterUrl": "2014/massimo-paolini-2867"
                },
                {
                    "presenterId": 11337,
                    "presenterUrl": "2014/patrick-mundy-11337"
                },
                {
                    "presenterId": 11337,
                    "presenterUrl": "2014/patrick-mundy-11337"
                },
                {
                    "presenterId": 565,
                    "presenterUrl": "2014/bruno-terkaly-565"
                },
                {
                    "presenterId": 16209,
                    "presenterUrl": "2014/steven-edouard-16209"
                },
                {
                    "presenterId": 10286,
                    "presenterUrl": "2014/ryan-jarvinen-10286"
                },
                {
                    "presenterId": 18752,
                    "presenterUrl": "2014/riccardo-terrell-18752"
                },
                {
                    "presenterId": 18713,
                    "presenterUrl": "2014/andrew-eichenbaum-18713"
                },
                {
                    "presenterId": 18763,
                    "presenterUrl": "2014/jim-mckeeth-18763"
                },
                {
                    "presenterId": 17364,
                    "presenterUrl": "2014/ryan-riley-17364"
                },
                {
                    "presenterId": 18773,
                    "presenterUrl": "2014/yann-yu-18773"
                },
                {
                    "presenterId": 17424,
                    "presenterUrl": "2014/eric-courville-17424"
                },
                {
                    "presenterId": 18792,
                    "presenterUrl": "2014/tenaya-hurst-18792"
                },
                {
                    "presenterId": 1995,
                    "presenterUrl": "2014/beth-massi-1995"
                },
                {
                    "presenterId": 1995,
                    "presenterUrl": "2014/beth-massi-1995"
                },
                {
                    "presenterId": 18820,
                    "presenterUrl": "2014/jeanne-bradford-18820"
                },
                {
                    "presenterId": 17473,
                    "presenterUrl": "2014/mark-simms-17473"
                },
                {
                    "presenterId": 19830,
                    "presenterUrl": "2014/nuri-halperin-19830"
                },
                {
                    "presenterId": 913,
                    "presenterUrl": "2014/matt-harrington-913"
                },
                {
                    "presenterId": 7997,
                    "presenterUrl": "2014/alyson-harrold-7997"
                },
                {
                    "presenterId": 19859,
                    "presenterUrl": "2014/will-smith-19859"
                },
                {
                    "presenterId": 18802,
                    "presenterUrl": "2014/gordon-zhu-18802"
                },
                {
                    "presenterId": 19855,
                    "presenterUrl": "2014/omar-venado-19855"
                },
                {
                    "presenterId": 1405,
                    "presenterUrl": "2014/theo-jungeblut-1405"
                },
                {
                    "presenterId": 1405,
                    "presenterUrl": "2014/theo-jungeblut-1405"
                },
                {
                    "presenterId": 1405,
                    "presenterUrl": "2014/theo-jungeblut-1405"
                },
                {
                    "presenterId": 6414,
                    "presenterUrl": "2014/daniel-egan-6414"
                },
                {
                    "presenterId": 6414,
                    "presenterUrl": "2014/daniel-egan-6414"
                },
                {
                    "presenterId": 6414,
                    "presenterUrl": "2014/daniel-egan-6414"
                },
                {
                    "presenterId": 1533,
                    "presenterUrl": "2014/robin-shahan-1533"
                },
                {
                    "presenterId": 20951,
                    "presenterUrl": "2014/bakh-inamov-20951"
                },
                {
                    "presenterId": 8503,
                    "presenterUrl": "2014/sumant-tambe-8503"
                },
                {
                    "presenterId": 17416,
                    "presenterUrl": "2014/jason-singh-17416"
                },
                {
                    "presenterId": 12591,
                    "presenterUrl": "2014/tobiah-marks-12591"
                },
                {
                    "presenterId": 20976,
                    "presenterUrl": "2014/pete-hodgson-20976"
                },
                {
                    "presenterId": 11370,
                    "presenterUrl": "2014/jerry-nixon-11370"
                },
                {
                    "presenterId": 20985,
                    "presenterUrl": "2014/randall-degges-20985"
                },
                {
                    "presenterId": 10803,
                    "presenterUrl": "2014/eugene-chuvyrov-10803"
                },
                {
                    "presenterId": 8211,
                    "presenterUrl": "2014/kenny-bastani-8211"
                },
                {
                    "presenterId": 21033,
                    "presenterUrl": "2014/ryan-desmond-21033"
                },
                {
                    "presenterId": 21045,
                    "presenterUrl": "2014/nicole-white-21045"
                },
                {
                    "presenterId": 6464,
                    "presenterUrl": "2014/kirsten-hunter-6464"
                },
                {
                    "presenterId": 4087,
                    "presenterUrl": "2014/doris-chen-4087"
                },
                {
                    "presenterId": 21118,
                    "presenterUrl": "2014/ryan-salva-21118"
                },
                {
                    "presenterId": 821,
                    "presenterUrl": "2014/bill-glosser-821"
                },
                {
                    "presenterId": 8006,
                    "presenterUrl": "2014/devin-rader-8006"
                },
                {
                    "presenterId": 8006,
                    "presenterUrl": "2014/devin-rader-8006"
                },
                {
                    "presenterId": 6417,
                    "presenterUrl": "2014/john-brinnand-6417"
                },
                {
                    "presenterId": 11106,
                    "presenterUrl": "2014/michael-caisse-11106"
                },
                {
                    "presenterId": 21098,
                    "presenterUrl": "2014/nathan-yospe-21098"
                },
                {
                    "presenterId": 187,
                    "presenterUrl": "2014/dave-nielsen-187"
                },
                {
                    "presenterId": 187,
                    "presenterUrl": "2014/dave-nielsen-187"
                },
                {
                    "presenterId": 21030,
                    "presenterUrl": "2014/greg-law-21030"
                },
                {
                    "presenterId": 187,
                    "presenterUrl": "2014/dave-nielsen-187"
                },
                {
                    "presenterId": 16243,
                    "presenterUrl": "2014/mithun-dhar-16243"
                },
                {
                    "presenterId": 21117,
                    "presenterUrl": "2014/ken-kruszka-21117"
                },
                {
                    "presenterId": 1124,
                    "presenterUrl": "2014/douglas-crockford-1124"
                },
                {
                    "presenterId": 21124,
                    "presenterUrl": "2014/simon-tien-21124"
                },
                {
                    "presenterId": 9715,
                    "presenterUrl": "2014/jae-yang-9715"
                },
                {
                    "presenterId": 21132,
                    "presenterUrl": "2014/esther-lee-21132"
                },
                {
                    "presenterId": 21146,
                    "presenterUrl": "2014/kari-finn-21146"
                },
                {
                    "presenterId": 903,
                    "presenterUrl": "2014/peter-kellner-903"
                },
                {
                    "presenterId": 5995,
                    "presenterUrl": "2014/david-mccarter-5995"
                },
                {
                    "presenterId": 653,
                    "presenterUrl": "2014/deborah-kurata-653"
                },
                {
                    "presenterId": 8502,
                    "presenterUrl": "2014/jeremy-clark-8502"
                },
                {
                    "presenterId": 17364,
                    "presenterUrl": "2014/ryan-riley-17364"
                },
                {
                    "presenterId": 583,
                    "presenterUrl": "2014/mathias-brandewinder-583"
                },
                {
                    "presenterId": 2039,
                    "presenterUrl": "2014/joseph-kleinschmidt-2039"
                },
                {
                    "presenterId": 21151,
                    "presenterUrl": "2014/cornelia-davis-21151"
                },
                {
                    "presenterId": 18583,
                    "presenterUrl": "2014/pete-ryan-18583"
                },
                {
                    "presenterId": 21151,
                    "presenterUrl": "2014/cornelia-davis-21151"
                },
                {
                    "presenterId": 21162,
                    "presenterUrl": "2014/alex-donn-21162"
                },
                {
                    "presenterId": 21283,
                    "presenterUrl": "2014/jeff-anderson-21283"
                },
                {
                    "presenterId": 13162,
                    "presenterUrl": "2014/ryan-michela-13162"
                },
                {
                    "presenterId": 2000,
                    "presenterUrl": "2014/ward-bell-2000"
                },
                {
                    "presenterId": 2000,
                    "presenterUrl": "2014/ward-bell-2000"
                },
                {
                    "presenterId": 19824,
                    "presenterUrl": "2014/steve-drucker-19824"
                },
                {
                    "presenterId": 21404,
                    "presenterUrl": "2014/nicolas-morales-21404"
                },
                {
                    "presenterId": 21405,
                    "presenterUrl": "2014/rakesh-ranjan-21405"
                },
                {
                    "presenterId": 21406,
                    "presenterUrl": "2014/steven-chamberlin-21406"
                },
                {
                    "presenterId": 21408,
                    "presenterUrl": "2014/lak-sri-21408"
                },
                {
                    "presenterId": 28103,
                    "presenterUrl": "2014/om-bachu-28103"
                },
                {
                    "presenterId": 5111,
                    "presenterUrl": "2014/jeff-trull-5111"
                },
                {
                    "presenterId": 11212,
                    "presenterUrl": "2014/josh-long-11212"
                },
                {
                    "presenterId": 21436,
                    "presenterUrl": "2014/andrew-siemer-21436"
                },
                {
                    "presenterId": 16174,
                    "presenterUrl": "2014/john-mummert-16174"
                },
                {
                    "presenterId": 18792,
                    "presenterUrl": "2014/tenaya-hurst-18792"
                },
                {
                    "presenterId": 17453,
                    "presenterUrl": "2014/pradeep-bhatter-17453"
                },
                {
                    "presenterId": 9274,
                    "presenterUrl": "2014/paran-sonthalia-9274"
                },
                {
                    "presenterId": 19920,
                    "presenterUrl": "2014/alexander-graebe-19920"
                },
                {
                    "presenterId": 11573,
                    "presenterUrl": "2014/menka-gupta-11573"
                }
            ];
    });


}());