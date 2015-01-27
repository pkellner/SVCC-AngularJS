(function () {
    'use strict';

    //  this is nasty because it forces the user to download a big js file every time the page is loaded (assuming not cached)
    angular.module('baseApp').service('sessionDataModelUrlService', function speakerDataModelService() {


        // http://www.jeremyzerr.com/angularjs-backend-less-development-using-httpbackend-mock
        // from http://plnkr.co/edit/arsvfe?p=info

        this.getData = function () {
            if (!this.hasData()) {
                return {};
            }
            return this.data;
        };

        this.setData = function (data) {
            this.data = data;
        };


        this.findOne = function (presenterId,urlPostToken) {
            //debugger;
            if (!this.hasData()) {
                return {};
            }
            var found = -1;
            var ii;
            for (ii=0;ii<this.data.length;ii++) {
               if (this.data[ii].urlPostToken === urlPostToken && this.data[ii].id === presenterId) {
                   found = ii;
                   break;
               }
            }
            return found >= 0 ? this.data[found].urlPostToken : {};
        };

        this.findAll = function () {
            return this.getData();
        };

        this.initDummyData = function() {
            this.data =
                [
                    {
                        "id": 708,
                        "sponsorName": "Twilio",
                        "imageUrl": "http://cache.siliconvalley-codecamp.com/sponsorimage/20140929145849-708.jpg",
                        "hoverOverText": "Twilio",
                        "underLogoText": "Twilio",
                        "webSite": "http://www.twilio.com",
                        "sponsorSupportLevel": "Platinum"
                    },
                    {
                        "id": 718,
                        "sponsorName": "Adobe",
                        "imageUrl": "http://cache.siliconvalley-codecamp.com/sponsorimage/20140813204110-718.jpg",
                        "hoverOverText": "Adobe",
                        "underLogoText": "Adobe",
                        "webSite": "https://www.adobe.com/creativecloud.html",
                        "sponsorSupportLevel": "Premiere Kids"
                    },
                    {
                        "id": 727,
                        "sponsorName": "Magenic",
                        "imageUrl": "http://cache.siliconvalley-codecamp.com/sponsorimage/20140909061034-727.jpg",
                        "hoverOverText": "Magenic",
                        "underLogoText": "Magenic",
                        "webSite": "http://magenic.com/",
                        "sponsorSupportLevel": "Gold"
                    },
                    {
                        "id": 728,
                        "sponsorName": "ComponentOne",
                        "imageUrl": "http://cache.siliconvalley-codecamp.com/sponsorimage/20140910114155-728.jpg",
                        "hoverOverText": "ComponentOne",
                        "underLogoText": "ComponentOne",
                        "webSite": "http://www.componentone.com",
                        "sponsorSupportLevel": "Gold"
                    },
                    {
                        "id": 729,
                        "sponsorName": "JetBrains",
                        "imageUrl": "http://cache.siliconvalley-codecamp.com/sponsorimage/20140912085149-729.jpg",
                        "hoverOverText": "JetBrains",
                        "underLogoText": "JetBrains",
                        "webSite": "http://www.jetbrains.com/index.html",
                        "sponsorSupportLevel": "Gold"
                    },
                    {
                        "id": 734,
                        "sponsorName": "redgate",
                        "imageUrl": "http://cache.siliconvalley-codecamp.com/sponsorimage/20140930121021-734.jpg",
                        "hoverOverText": "Red Gate",
                        "underLogoText": "Red Gate",
                        "webSite": "http://www.red-gate.com/",
                        "sponsorSupportLevel": "Gold"
                    },
                    {
                        "id": 735,
                        "sponsorName": "Google",
                        "imageUrl": "http://cache.siliconvalley-codecamp.com/sponsorimage/20130423165430-735.jpg",
                        "hoverOverText": "Google",
                        "underLogoText": "Google",
                        "webSite": "http://www.google.com/",
                        "sponsorSupportLevel": "Gold"
                    },
                    {
                        "id": 747,
                        "sponsorName": "Microsoft",
                        "imageUrl": "http://cache.siliconvalley-codecamp.com/sponsorimage/20130809000158-747.jpg",
                        "hoverOverText": "Microsoft",
                        "underLogoText": "Microsoft",
                        "webSite": "http://www.microsoft.com/",
                        "sponsorSupportLevel": "Platinum"
                    },
                    {
                        "id": 748,
                        "sponsorName": "PayPal",
                        "imageUrl": "http://cache.siliconvalley-codecamp.com/sponsorimage/20130924234224-748.jpg",
                        "hoverOverText": "PayPal",
                        "underLogoText": "PayPal",
                        "webSite": "http://www.paypal.com/",
                        "sponsorSupportLevel": "Gold"
                    },
                    {
                        "id": 749,
                        "sponsorName": "OrcsWeb",
                        "imageUrl": "http://cache.siliconvalley-codecamp.com/sponsorimage/20130423165430-749.jpg",
                        "hoverOverText": "OrcsWeb",
                        "underLogoText": "OrcsWeb",
                        "webSite": "http://www.orcsweb.com/",
                        "sponsorSupportLevel": "Platinum"
                    },
                    {
                        "id": 799,
                        "sponsorName": "AT&T Developer Program",
                        "imageUrl": "http://cache.siliconvalley-codecamp.com/sponsorimage/20130423165430-799.jpg",
                        "hoverOverText": "AT&T",
                        "underLogoText": "AT&T",
                        "webSite": "http://developer.att.com/",
                        "sponsorSupportLevel": "Platinum"
                    },
                    {
                        "id": 821,
                        "sponsorName": "Esri",
                        "imageUrl": "http://cache.siliconvalley-codecamp.com/sponsorimage/20140910232128-821.jpg",
                        "hoverOverText": "Esri",
                        "underLogoText": "Esri",
                        "webSite": "http://www.esri.com/",
                        "sponsorSupportLevel": "Silver"
                    },
                    {
                        "id": 834,
                        "sponsorName": "OpenShift by Red Hat",
                        "imageUrl": "http://cache.siliconvalley-codecamp.com/sponsorimage/20140909192901-834.jpg",
                        "hoverOverText": "redhat",
                        "underLogoText": "redhat",
                        "webSite": " http://www.openshift.com/",
                        "sponsorSupportLevel": "Gold"
                    },
                    {
                        "id": 861,
                        "sponsorName": "Pivotal",
                        "imageUrl": "http://cache.siliconvalley-codecamp.com/sponsorimage/20130717203151-861.jpg",
                        "hoverOverText": "",
                        "underLogoText": "",
                        "webSite": "http://www.gopivotal.com/pivotal-products/pivotal-one",
                        "sponsorSupportLevel": "Platinum"
                    },
                    {
                        "id": 866,
                        "sponsorName": "CODE Magazine",
                        "imageUrl": "http://cache.siliconvalley-codecamp.com/sponsorimage/20140921162627-866.jpg",
                        "hoverOverText": "CODE Magazine",
                        "underLogoText": "CODE Magazine",
                        "webSite": "http://www.codemag.com",
                        "sponsorSupportLevel": "Gold"
                    },
                    {
                        "id": 877,
                        "sponsorName": "AirPair",
                        "imageUrl": "http://cache.siliconvalley-codecamp.com/sponsorimage/20140724233256-877.jpg",
                        "hoverOverText": "AirPair",
                        "underLogoText": "AirPair",
                        "webSite": "http://www.airpair.com/",
                        "sponsorSupportLevel": "Silver"
                    },
                    {
                        "id": 902,
                        "sponsorName": "IBM",
                        "imageUrl": "http://cache.siliconvalley-codecamp.com/sponsorimage/20140929150914-902.jpg",
                        "hoverOverText": "IBM",
                        "underLogoText": "IBM",
                        "webSite": "http://www.ibm.com/cloud",
                        "sponsorSupportLevel": "Platinum"
                    },
                    {
                        "id": 906,
                        "sponsorName": "Startup Product Academy",
                        "imageUrl": "http://cache.siliconvalley-codecamp.com/sponsorimage/20140509205849-906.jpg",
                        "hoverOverText": "Startup Product Academy",
                        "underLogoText": "Startup Product Academy",
                        "webSite": "http://startupproduct.com/",
                        "sponsorSupportLevel": "Silver"
                    },
                    {
                        "id": 910,
                        "sponsorName": "EVERLEAP",
                        "imageUrl": "http://cache.siliconvalley-codecamp.com/sponsorimage/20140527233206-910.jpg",
                        "hoverOverText": "EVERLEAP",
                        "underLogoText": "EVERLEAP",
                        "webSite": "http://www.everleap.com/go/go.aspx?i=21165",
                        "sponsorSupportLevel": "Gold"
                    },
                    {
                        "id": 911,
                        "sponsorName": "Undo Software",
                        "imageUrl": "http://cache.siliconvalley-codecamp.com/sponsorimage/20140910005445-911.jpg",
                        "hoverOverText": "Undo Software",
                        "underLogoText": "Undo Software",
                        "webSite": "http://undo-software.com",
                        "sponsorSupportLevel": "Gold"
                    },
                    {
                        "id": 912,
                        "sponsorName": "Tachyus",
                        "imageUrl": "http://cache.siliconvalley-codecamp.com/sponsorimage/20140610165252-912.jpg",
                        "hoverOverText": "",
                        "underLogoText": "TACHYUS",
                        "webSite": "http://tachyus.com/",
                        "sponsorSupportLevel": "Silver"
                    },
                    {
                        "id": 917,
                        "sponsorName": "Xero",
                        "imageUrl": "http://cache.siliconvalley-codecamp.com/sponsorimage/20140924020349-917.jpg",
                        "hoverOverText": "Xero",
                        "underLogoText": "Xero",
                        "webSite": "http://www.xero.com",
                        "sponsorSupportLevel": "Gold"
                    },
                    {
                        "id": 918,
                        "sponsorName": "Dropbox",
                        "imageUrl": "http://cache.siliconvalley-codecamp.com/sponsorimage/20140925202143-918.jpg",
                        "hoverOverText": "Dropbox",
                        "underLogoText": "Dropbox",
                        "webSite": "http://www.dropbox.com/",
                        "sponsorSupportLevel": "Silver"
                    },
                    {
                        "id": 919,
                        "sponsorName": "SAP",
                        "imageUrl": "http://cache.siliconvalley-codecamp.com/sponsorimage/20140822180458-919.jpg",
                        "hoverOverText": "SAP",
                        "underLogoText": "SAP",
                        "webSite": "http://developers.sap.com",
                        "sponsorSupportLevel": "Premiere Kids"
                    },
                    {
                        "id": 925,
                        "sponsorName": "Society of Woman Engineers",
                        "imageUrl": "http://cache.siliconvalley-codecamp.com/sponsorimage/20140724233920-925.jpg",
                        "hoverOverText": "Society of Woman Engineers",
                        "underLogoText": "Society of Woman Engineers",
                        "webSite": "http://societyofwomenengineers.swe.org/",
                        "sponsorSupportLevel": "Community"
                    },
                    {
                        "id": 927,
                        "sponsorName": "RocketWeave",
                        "imageUrl": "http://cache.siliconvalley-codecamp.com/sponsorimage/20141001115114-927.jpg",
                        "hoverOverText": "RocketWeave",
                        "underLogoText": "RocketWeave",
                        "webSite": "http://www.rocketweave.com",
                        "sponsorSupportLevel": "Silver"
                    },
                    {
                        "id": 935,
                        "sponsorName": "Concur",
                        "imageUrl": "http://cache.siliconvalley-codecamp.com/sponsorimage/20140828142035-935.jpg",
                        "hoverOverText": "Concur",
                        "underLogoText": "Concur",
                        "webSite": "https://developer.concur.com/",
                        "sponsorSupportLevel": "Platinum"
                    },
                    {
                        "id": 938,
                        "sponsorName": "Vaadin",
                        "imageUrl": "http://cache.siliconvalley-codecamp.com/sponsorimage/20140906013749-938.jpg",
                        "hoverOverText": "vaadin",
                        "underLogoText": "vaadin",
                        "webSite": "http://vaadin.com",
                        "sponsorSupportLevel": "Gold"
                    },
                    {
                        "id": 939,
                        "sponsorName": "Neo4j",
                        "imageUrl": "http://cache.siliconvalley-codecamp.com/sponsorimage/20140903205144-939.jpg",
                        "hoverOverText": "Neo4j",
                        "underLogoText": "Neo4j",
                        "webSite": "http://neo4j.com",
                        "sponsorSupportLevel": "Silver"
                    },
                    {
                        "id": 940,
                        "sponsorName": "Delphi",
                        "imageUrl": "http://cache.siliconvalley-codecamp.com/sponsorimage/20140909230834-940.jpg",
                        "hoverOverText": "Delphi",
                        "underLogoText": "Delphi",
                        "webSite": "http://www.delphix.com/careers",
                        "sponsorSupportLevel": "Gold"
                    },
                    {
                        "id": 941,
                        "sponsorName": "Good Audience",
                        "imageUrl": "http://cache.siliconvalley-codecamp.com/sponsorimage/20140910230827-941.jpg",
                        "hoverOverText": "Good Audience",
                        "underLogoText": "Good Audience",
                        "webSite": "http://www.goodaudience.com/",
                        "sponsorSupportLevel": "Community"
                    },
                    {
                        "id": 942,
                        "sponsorName": "CAMPEROO",
                        "imageUrl": "http://cache.siliconvalley-codecamp.com/sponsorimage/20141009142747-942.jpg",
                        "hoverOverText": "CAMPEROO",
                        "underLogoText": "CAMPEROO",
                        "webSite": "http://www.camperoo.com",
                        "sponsorSupportLevel": "Premiere Kids"
                    }
                ];
        };

        this.hasData = function() {
            return this.data && this.data.length > 0;
        };
    });


}());