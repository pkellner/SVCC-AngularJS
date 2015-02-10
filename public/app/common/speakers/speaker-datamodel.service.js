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
            this.data = [
                {
                    "id": 5443,
                    "firstName": "Mark",
                    "lastName": "Abramson",
                    "email": "",
                    "phoneNumber": "",
                    "bio": "Mark Abramson is Founder & CEO of PrintForm Corporation; co-founder of Medicine of Cycling and on the Board of USA Cycling. He is veteran of both early-stage startups and enterprise software projects, he has particular technical expertise in digital workflow, industrial printing and complex global supply chains for high-growth companies.  He's also a dad, runs the Microsoft SF.NET & BizSparkSF groups for Bay Area startups, collects antique woodworking machines and mentors on Lean Startup methods.",
                    "webSite": "twitter.com/mark__a",
                    "imageUrl": "http://cache.siliconvalley-codecamp.com/attendeeimage/20130102000000-5443.jpg",
                    "allowAttendeeToEmailMe": true,
                    "company": "PrintForm Corporation",
                    "presentationLimit": 0,
                    "sessions": [
                        {
                            "id": 1435,
                            "title": "Intro to Relational Database Design & Entity-Relationship Diagrams",
                            "description": "Mark will cover the basics of designing and setting up a database schema. He'll define some common business scenarios, build out some tables, create relationships, and then demo usage, pitfalls, problems and design tradeoffs. With so many database-driven projects for consumer desktop software applications, websites and enterprise software systems, the database design plays a crucial role in the success of your project. You'll see real-life examples and issues such as: Creating a new table; Choosing data types; Normalization (and when to denormalize); Types of relationships; Referential integrity; Join/relationship tables; 1-to-many, many-to-many; How to actually use these structures in your application; While the examples will focus on SQL Server, the techniques and SQL code will work for virtually any SQL database. There will be discussion of various commercial and open source tools to streamline your work. ",
                            "room": "8402",
                            "logDate": "0001-01-01T00:00:00",
                            "startTime": "5:00 PM Saturday",
                            "startTimeDateTime": "0001-01-01T00:00:00",
                            "interestedCount": 0,
                            "planToAttendCount": 0,
                            "interested": false,
                            "willAttend": false,
                            "presenters": [
                                {
                                    "id": 5443,
                                    "firstName": "Mark",
                                    "lastName": "Abramson",
                                    "email": "",
                                    "phoneNumber": "",
                                    "bio": "Mark Abramson is Founder & CEO of PrintForm Corporation; co-founder of Medicine of Cycling and on the Board of USA Cycling. He is veteran of both early-stage startups and enterprise software projects, he has particular technical expertise in digital workflow, industrial printing and complex global supply chains for high-growth companies.  He's also a dad, runs the Microsoft SF.NET & BizSparkSF groups for Bay Area startups, collects antique woodworking machines and mentors on Lean Startup methods.",
                                    "webSite": "twitter.com/mark__a",
                                    "imageUrl": "http://cache.siliconvalley-codecamp.com/attendeeimage/20130102000000-5443.jpg",
                                    "allowAttendeeToEmailMe": true,
                                    "company": "PrintForm Corporation",
                                    "presentationLimit": 0,
                                    "sessions": [],
                                    "allowHtml": false,
                                    "facebookUrl": "",
                                    "googlePlusUrl": "",
                                    "linkedInUrl": "http://www.linkedin.com/in/abramsonmark",
                                    "twitterUrl": "http://twitter.com/mark__a",
                                    "urlPostToken": "2014"
                                }
                            ],
                            "tags": [
                                {
                                    "id": 9,
                                    "tagName": "Database",
                                    "sessions": []
                                },
                                {
                                    "id": 333,
                                    "tagName": "Data Services",
                                    "sessions": []
                                },
                                {
                                    "id": 599,
                                    "tagName": "SQL",
                                    "sessions": []
                                },
                                {
                                    "id": 905,
                                    "tagName": "SQL Server 2012",
                                    "sessions": []
                                },
                                {
                                    "id": 24,
                                    "tagName": "SQL Server",
                                    "sessions": []
                                },
                                {
                                    "id": 374,
                                    "tagName": "SQL Azure",
                                    "sessions": []
                                },
                                {
                                    "id": 909,
                                    "tagName": "SSIS",
                                    "sessions": []
                                }
                            ],
                            "allowHtml": false,
                            "kidOrProfessionalSession": "ProfessionalSession",
                            "kidSession": false,
                            "tagsResultCsv": "Database,Data Services,SQL,SQL Server 2012,SQL Server,SQL Azure,SSIS",
                            "sessionLevelId": 1,
                            "sessionTimeDateTime": "2014-10-11T17:00:00",
                            "sessionUrl": "2014/intro-to-relational-database-design-entity-relationship-diagrams"
                        },
                        {
                            "id": 1436,
                            "title": "Advanced Data Modeling with ER Diagrams",
                            "description": "In this session we will dive in deeper and work on specific challenges that crop up with database designs. This session will be interactive and will benefit from your specific database-related issues. Please hit me on Twitter (@mark__a) or use the \"email the speaker\" button with your challenges and we'll do our best to cover some approaches for you in the class. Need the basics? Check out my other session on \"Intro to DB Design.\"",
                            "room": "Not Assigned",
                            "logDate": "0001-01-01T00:00:00",
                            "startTime": "Agenda Not Set Yet",
                            "startTimeDateTime": "0001-01-01T00:00:00",
                            "interestedCount": 0,
                            "planToAttendCount": 0,
                            "interested": false,
                            "willAttend": false,
                            "presenters": [
                                {
                                    "id": 5443,
                                    "firstName": "Mark",
                                    "lastName": "Abramson",
                                    "email": "",
                                    "phoneNumber": "",
                                    "bio": "Mark Abramson is Founder & CEO of PrintForm Corporation; co-founder of Medicine of Cycling and on the Board of USA Cycling. He is veteran of both early-stage startups and enterprise software projects, he has particular technical expertise in digital workflow, industrial printing and complex global supply chains for high-growth companies.  He's also a dad, runs the Microsoft SF.NET & BizSparkSF groups for Bay Area startups, collects antique woodworking machines and mentors on Lean Startup methods.",
                                    "webSite": "twitter.com/mark__a",
                                    "imageUrl": "http://cache.siliconvalley-codecamp.com/attendeeimage/20130102000000-5443.jpg",
                                    "allowAttendeeToEmailMe": true,
                                    "company": "PrintForm Corporation",
                                    "presentationLimit": 0,
                                    "sessions": [],
                                    "allowHtml": false,
                                    "facebookUrl": "",
                                    "googlePlusUrl": "",
                                    "linkedInUrl": "http://www.linkedin.com/in/abramsonmark",
                                    "twitterUrl": "http://twitter.com/mark__a",
                                    "urlPostToken": "2014"
                                }
                            ],
                            "tags": [
                                {
                                    "id": 9,
                                    "tagName": "Database",
                                    "sessions": []
                                },
                                {
                                    "id": 599,
                                    "tagName": "SQL",
                                    "sessions": []
                                },
                                {
                                    "id": 374,
                                    "tagName": "SQL Azure",
                                    "sessions": []
                                },
                                {
                                    "id": 24,
                                    "tagName": "SQL Server",
                                    "sessions": []
                                },
                                {
                                    "id": 905,
                                    "tagName": "SQL Server 2012",
                                    "sessions": []
                                },
                                {
                                    "id": 909,
                                    "tagName": "SSIS",
                                    "sessions": []
                                }
                            ],
                            "allowHtml": false,
                            "kidOrProfessionalSession": "ProfessionalSession",
                            "kidSession": false,
                            "tagsResultCsv": "Database,SQL,SQL Azure,SQL Server,SQL Server 2012,SSIS",
                            "sessionLevelId": 3,
                            "sessionTimeDateTime": "2007-10-26T00:00:00",
                            "sessionUrl": "2014/advanced-data-modeling-with-er-diagrams"
                        },
                        {
                            "id": 2577,
                            "title": "Lean Startup for Engineers",
                            "description": "\nGet Idea! Build a Product! Sell it!\n\nWe've all spent too many hours and too much damn money with this approach only to fail in the end.\n\nMark will teach you had to turn this \"Conventional Engineer's Wisdom\" on its head and build products that people will buy on day one. Many times, we engineers build features without ever talking to the customers and users who they benefit.\n\nWe'll start with the absolute basics: how to define your customer and discover what their true problem is. \"But I don't have any customers or users!\" you will say. You will learn how and where to find them and then how to engage them in meaningful conversation about their problems. Our goal? Build the right solution for the right customer and make them ultimately beg you for your solution.\n\nTeaching with examples, Mark will share his specific experiences finding customers and how to talk to them. We'll run through several tools, tips and tricks Mark used to find success (after years of failing).\n\nThis is a unique opportunity to learn nuggets of Lean Startup wisdom from one of the Bay Area's most enthusiastic trainers and mentors.",
                            "room": "8402",
                            "logDate": "0001-01-01T00:00:00",
                            "startTime": "3:30 PM Saturday",
                            "startTimeDateTime": "0001-01-01T00:00:00",
                            "interestedCount": 0,
                            "planToAttendCount": 0,
                            "interested": false,
                            "willAttend": false,
                            "presenters": [
                                {
                                    "id": 5443,
                                    "firstName": "Mark",
                                    "lastName": "Abramson",
                                    "email": "",
                                    "phoneNumber": "",
                                    "bio": "Mark Abramson is Founder & CEO of PrintForm Corporation; co-founder of Medicine of Cycling and on the Board of USA Cycling. He is veteran of both early-stage startups and enterprise software projects, he has particular technical expertise in digital workflow, industrial printing and complex global supply chains for high-growth companies.  He's also a dad, runs the Microsoft SF.NET & BizSparkSF groups for Bay Area startups, collects antique woodworking machines and mentors on Lean Startup methods.",
                                    "webSite": "twitter.com/mark__a",
                                    "imageUrl": "http://cache.siliconvalley-codecamp.com/attendeeimage/20130102000000-5443.jpg",
                                    "allowAttendeeToEmailMe": true,
                                    "company": "PrintForm Corporation",
                                    "presentationLimit": 0,
                                    "sessions": [],
                                    "allowHtml": false,
                                    "facebookUrl": "",
                                    "googlePlusUrl": "",
                                    "linkedInUrl": "http://www.linkedin.com/in/abramsonmark",
                                    "twitterUrl": "http://twitter.com/mark__a",
                                    "urlPostToken": "2014"
                                }
                            ],
                            "tags": [
                                {
                                    "id": 143,
                                    "tagName": "Agile",
                                    "sessions": []
                                },
                                {
                                    "id": 758,
                                    "tagName": "Angel Investment",
                                    "sessions": []
                                },
                                {
                                    "id": 849,
                                    "tagName": "Business",
                                    "sessions": []
                                },
                                {
                                    "id": 418,
                                    "tagName": "lean",
                                    "sessions": []
                                },
                                {
                                    "id": 371,
                                    "tagName": "Lean Startup",
                                    "sessions": []
                                },
                                {
                                    "id": 838,
                                    "tagName": "Marketing",
                                    "sessions": []
                                }
                            ],
                            "allowHtml": false,
                            "kidOrProfessionalSession": "ProfessionalSession",
                            "kidSession": false,
                            "tagsResultCsv": "Agile,Angel Investment,Business,lean,Lean Startup,Marketing",
                            "sessionLevelId": 1,
                            "sessionTimeDateTime": "2014-10-11T15:30:00",
                            "sessionUrl": "2014/lean-startup-for-engineers"
                        }
                    ],
                    "allowHtml": false,
                    "facebookUrl": "",
                    "googlePlusUrl": "",
                    "linkedInUrl": "http://www.linkedin.com/in/abramsonmark",
                    "twitterUrl": "http://twitter.com/mark__a",
                    "presenterUrl": "2014/mark-abramson-5443",
                    "urlPostToken": "2014"
                },
                {
                    "id": 3073,
                    "firstName": "Rahul",
                    "lastName": "Agarwal",
                    "email": "",
                    "phoneNumber": "",
                    "bio": "Developer with experience in Java, OSGi, Spring, Hibernate, highly scalable and highly transactional systems, RESTful APIs, E-Commerce and Micro-transaction systems. Part-time instructor at UCSC Silicon Valley and Foothill College. Expertise in backend systems but I have also played with Android and Glass. ",
                    "webSite": "irahul.com",
                    "imageUrl": "http://cache.siliconvalley-codecamp.com/attendeeimage/20140415035045-3073.jpg",
                    "allowAttendeeToEmailMe": true,
                    "company": "",
                    "presentationLimit": 0,
                    "sessions": [
                        {
                            "id": 1424,
                            "title": "Creating REST services with JAX-RS",
                            "description": "<p>If you are creating REST APIs in Java then JAX-RS is the standard. We will briefly talk about the HTTP protocol and what REST is and then create some APIs. We will use Spring/Maven to put it together and deploy in Tomcat. This is a small part of a class I teach at UCSC Silicon Valley.</p>\n\n<p>Some code we will review is at <a href=\"https://github.com/rahulaga/code-camp\">https://github.com/rahulaga/code-camp</a></p>",
                            "room": "4221",
                            "logDate": "0001-01-01T00:00:00",
                            "startTime": "11:15 AM Saturday",
                            "startTimeDateTime": "0001-01-01T00:00:00",
                            "interestedCount": 0,
                            "planToAttendCount": 0,
                            "interested": false,
                            "willAttend": false,
                            "presenters": [
                                {
                                    "id": 3073,
                                    "firstName": "Rahul",
                                    "lastName": "Agarwal",
                                    "email": "",
                                    "phoneNumber": "",
                                    "bio": "Developer with experience in Java, OSGi, Spring, Hibernate, highly scalable and highly transactional systems, RESTful APIs, E-Commerce and Micro-transaction systems. Part-time instructor at UCSC Silicon Valley and Foothill College. Expertise in backend systems but I have also played with Android and Glass. ",
                                    "webSite": "irahul.com",
                                    "imageUrl": "http://cache.siliconvalley-codecamp.com/attendeeimage/20140415035045-3073.jpg",
                                    "allowAttendeeToEmailMe": true,
                                    "company": "",
                                    "presentationLimit": 0,
                                    "sessions": [],
                                    "allowHtml": false,
                                    "facebookUrl": "",
                                    "googlePlusUrl": "",
                                    "linkedInUrl": "http://www.linkedin.com/in/rahulaga",
                                    "twitterUrl": "http://twitter.com/whatsrahulhatin",
                                    "urlPostToken": "2014"
                                }
                            ],
                            "tags": [
                                {
                                    "id": 837,
                                    "tagName": "Java",
                                    "sessions": []
                                },
                                {
                                    "id": 927,
                                    "tagName": "JAX-RS",
                                    "sessions": []
                                },
                                {
                                    "id": 253,
                                    "tagName": "Spring",
                                    "sessions": []
                                }
                            ],
                            "allowHtml": false,
                            "kidOrProfessionalSession": "ProfessionalSession",
                            "kidSession": false,
                            "tagsResultCsv": "Java,JAX-RS,Spring",
                            "sessionLevelId": 2,
                            "sessionTimeDateTime": "2014-10-11T11:15:00",
                            "sessionUrl": "2014/creating-rest-services-with-jax-rs"
                        }
                    ],
                    "allowHtml": false,
                    "facebookUrl": "",
                    "googlePlusUrl": "",
                    "linkedInUrl": "http://www.linkedin.com/in/rahulaga",
                    "twitterUrl": "http://twitter.com/whatsrahulhatin",
                    "presenterUrl": "2014/rahul-agarwal-3073",
                    "urlPostToken": "2014"
                },
                {
                    "id": 21283,
                    "firstName": "Jeff",
                    "lastName": "Anderson",
                    "email": "",
                    "phoneNumber": "",
                    "bio": "Jeff Anderson is an Assistant Professor of Mathematics at Foothill College. He earned his PhD in Numerical Linear Algebra from UC Davis studying algorithms to decrease the dimensions of large-scale computational problems without sacrificing accuracy. Jeff works primarily with MATLAB to implement his mathematical algorithms. ",
                    "webSite": "http://www.foothill.edu/psme/directory.php?s=1&rec_id=1910",
                    "imageUrl": "http://cache.siliconvalley-codecamp.com/attendeeimage/20140910182201-21283.jpg",
                    "allowAttendeeToEmailMe": true,
                    "company": "Foothill College",
                    "presentationLimit": 0,
                    "sessions": [
                        {
                            "id": 3655,
                            "title": "Introduction to Google's PageRank Algorithm",
                            "description": "Each time we use Google, we ask Google's search engine to produce a list of websites closely matching information relevant to our search. This talk is an introduction to Google's search methods with a focus on the mathematical background of the PageRank algorithm. It is recommended that audience members have finished courses in Calculus, Linear Algebra and Numerical Analysis.",
                            "room": "5501",
                            "logDate": "0001-01-01T00:00:00",
                            "startTime": "11:15 AM Saturday",
                            "startTimeDateTime": "0001-01-01T00:00:00",
                            "interestedCount": 0,
                            "planToAttendCount": 0,
                            "interested": false,
                            "willAttend": false,
                            "presenters": [
                                {
                                    "id": 21283,
                                    "firstName": "Jeff",
                                    "lastName": "Anderson",
                                    "email": "",
                                    "phoneNumber": "",
                                    "bio": "Jeff Anderson is an Assistant Professor of Mathematics at Foothill College. He earned his PhD in Numerical Linear Algebra from UC Davis studying algorithms to decrease the dimensions of large-scale computational problems without sacrificing accuracy. Jeff works primarily with MATLAB to implement his mathematical algorithms. ",
                                    "webSite": "http://www.foothill.edu/psme/directory.php?s=1&rec_id=1910",
                                    "imageUrl": "http://cache.siliconvalley-codecamp.com/attendeeimage/20140910182201-21283.jpg",
                                    "allowAttendeeToEmailMe": true,
                                    "company": "Foothill College",
                                    "presentationLimit": 0,
                                    "sessions": [],
                                    "allowHtml": false,
                                    "facebookUrl": "",
                                    "googlePlusUrl": "",
                                    "linkedInUrl": "",
                                    "twitterUrl": "",
                                    "urlPostToken": "2014"
                                }
                            ],
                            "tags": [
                                {
                                    "id": 339,
                                    "tagName": "Google",
                                    "sessions": []
                                },
                                {
                                    "id": 835,
                                    "tagName": "HTML",
                                    "sessions": []
                                },
                                {
                                    "id": 480,
                                    "tagName": "math",
                                    "sessions": []
                                },
                                {
                                    "id": 363,
                                    "tagName": "SEO",
                                    "sessions": []
                                },
                                {
                                    "id": 852,
                                    "tagName": "Web",
                                    "sessions": []
                                }
                            ],
                            "allowHtml": false,
                            "kidOrProfessionalSession": "ProfessionalSession",
                            "kidSession": false,
                            "tagsResultCsv": "Google,HTML,math,SEO,Web",
                            "sessionLevelId": 1,
                            "sessionTimeDateTime": "2014-10-11T11:15:00",
                            "sessionUrl": "2014/introduction-to-googles-pagerank-algorithm"
                        }
                    ],
                    "allowHtml": false,
                    "facebookUrl": "",
                    "googlePlusUrl": "",
                    "linkedInUrl": "",
                    "twitterUrl": "",
                    "presenterUrl": "2014/jeff-anderson-21283",
                    "urlPostToken": "2014"
                },
                {
                    "id": 8480,
                    "firstName": "Kevin",
                    "lastName": "Ashley",
                    "email": "",
                    "phoneNumber": "",
                    "bio": "Kevin Ashley is a Microsoft Architect Evangelist, an author of Professional Windows 8 Programming book and a developer of top apps and games for Windows 8 with millions of users. Kevin often presents about technology at various events, industry shows and webcasts. In his role he works with startups and partners, advising on software design, business and technology strategy, architecture and development. Prior to Microsoft, he was a founder of an early-stage cloud and business intelligence software startup. In his role as a senior software developer and architect, Kevin developed grid, data warehousing and real-time trading solutions for Fortune 500 companies and hedge funds worldwide: US, Europe and Asia. Kevin has degrees in Mathematics, Computer Science and MBA from the University of Connecticut.  \nKevin’s blog: http://kevinashley.com and Twitter: @kashleytwit  \n",
                    "webSite": "http://kevinashley.com",
                    "imageUrl": "http://cache.siliconvalley-codecamp.com/attendeeimage/20140509232758-8480.jpg",
                    "allowAttendeeToEmailMe": true,
                    "company": "Microsoft",
                    "presentationLimit": 0,
                    "sessions": [
                        {
                            "id": 1486,
                            "title": "Deep dive into Windows Phone apps: Sensors, Bluetooth, Cortana",
                            "description": "\"Cortana, do you love me?\" CORTANA: \"Y'know, I'm really not ready for love. I'm still working my way through serenity and apprehension\". Deep dive into rapidly expanding Microsoft platform that brings a new set of amazing features: from AI to sensors support, new features in Bluetooth API and background tasks, maps and more! ",
                            "room": "3106",
                            "logDate": "0001-01-01T00:00:00",
                            "startTime": "5:00 PM Saturday",
                            "startTimeDateTime": "0001-01-01T00:00:00",
                            "interestedCount": 0,
                            "planToAttendCount": 0,
                            "interested": false,
                            "willAttend": false,
                            "presenters": [
                                {
                                    "id": 8480,
                                    "firstName": "Kevin",
                                    "lastName": "Ashley",
                                    "email": "",
                                    "phoneNumber": "",
                                    "bio": "Kevin Ashley is a Microsoft Architect Evangelist, an author of Professional Windows 8 Programming book and a developer of top apps and games for Windows 8 with millions of users. Kevin often presents about technology at various events, industry shows and webcasts. In his role he works with startups and partners, advising on software design, business and technology strategy, architecture and development. Prior to Microsoft, he was a founder of an early-stage cloud and business intelligence software startup. In his role as a senior software developer and architect, Kevin developed grid, data warehousing and real-time trading solutions for Fortune 500 companies and hedge funds worldwide: US, Europe and Asia. Kevin has degrees in Mathematics, Computer Science and MBA from the University of Connecticut.  \nKevin’s blog: http://kevinashley.com and Twitter: @kashleytwit  \n",
                                    "webSite": "http://kevinashley.com",
                                    "imageUrl": "http://cache.siliconvalley-codecamp.com/attendeeimage/20140509232758-8480.jpg",
                                    "allowAttendeeToEmailMe": true,
                                    "company": "Microsoft",
                                    "presentationLimit": 0,
                                    "sessions": [],
                                    "allowHtml": false,
                                    "facebookUrl": "",
                                    "googlePlusUrl": "",
                                    "linkedInUrl": "",
                                    "twitterUrl": "http://twitter.com/kashleytwit",
                                    "urlPostToken": "2014"
                                }
                            ],
                            "tags": [
                                {
                                    "id": 347,
                                    "tagName": "Windows",
                                    "sessions": []
                                },
                                {
                                    "id": 570,
                                    "tagName": "Windows 8",
                                    "sessions": []
                                },
                                {
                                    "id": 360,
                                    "tagName": "Windows Phone",
                                    "sessions": []
                                },
                                {
                                    "id": 940,
                                    "tagName": "Windows Phone 8.1",
                                    "sessions": []
                                },
                                {
                                    "id": 571,
                                    "tagName": "WinRT",
                                    "sessions": []
                                },
                                {
                                    "id": 538,
                                    "tagName": "XAML",
                                    "sessions": []
                                }
                            ],
                            "allowHtml": false,
                            "kidOrProfessionalSession": "ProfessionalSession",
                            "kidSession": false,
                            "tagsResultCsv": "Windows,Windows 8,Windows Phone,Windows Phone 8.1,WinRT,XAML",
                            "sessionLevelId": 3,
                            "sessionTimeDateTime": "2014-10-11T17:00:00",
                            "sessionUrl": "2014/deep-dive-into-windows-phone-apps-sensors-bluetooth-cortana"
                        }
                    ],
                    "allowHtml": false,
                    "facebookUrl": "",
                    "googlePlusUrl": "",
                    "linkedInUrl": "",
                    "twitterUrl": "http://twitter.com/kashleytwit",
                    "presenterUrl": "2014/kevin-ashley-8480",
                    "urlPostToken": "2014"
                },
                {
                    "id": 410,
                    "firstName": "Siamak",
                    "lastName": "Ashrafi",
                    "email": "",
                    "phoneNumber": "",
                    "bio": "is a Bio-Computational Specialist at a biotech working on finding new cancer bio-markers, drug targets and contributing to publications in scientific journals. He has produced elegant solutions to complex problems which resulted in several issued patents. He is a frequent winner in coding competitions using social, mobile, cloud and web technologies. He is a recognized leader in wearable/mobile development and a sought after speaker helping to promote the ecosystem. In his spare time he attends UCSF medical and Stanford surgical seminars. He is very happy with all this, but what he would really like is to get a major sponsor in all three phases of water. Snowboarding [solid H2O], Surfing [liquid H2O] & Kiteboarding [vapor H2O].\n\nGoogle+ \nGoogle+: https://plus.google.com/+SiamakAshrafi/posts",
                    "webSite": "www.ylabz.com/ash",
                    "imageUrl": "http://cache.siliconvalley-codecamp.com/attendeeimage/20140613181411-410.jpg",
                    "allowAttendeeToEmailMe": false,
                    "company": "Zoewear",
                    "presentationLimit": 0,
                    "sessions": [
                        {
                            "id": 1433,
                            "title": "Technology and fashion awaken the soul of the shoe.",
                            "description": "This talk will cover wearables in regards to the integration of fashion and technology.  First we will explore the fashion industry, as a system for producing and distributing clothing and accessories.  Then the speaker will cover aspects of modernization & globalization including eco-innovation, crowdsourcing and pre-tailing. This section will end by offering “insider hints” highlighting how to collaborate with a fashion company.\n\nSecond we will cover advanced technologies used to build wearable fashion with an overview of MEMS (motion, position, environmental and capture) sensors and wireless (NFC, Bluetooth 4.0) connectivity used to build wearable fashion with code samples (iOS & Android) capturing physiological data. We will review of the current wearable market (eg. Nike Fuelband, Shine, Lark, Fitbit, Bodybug & Google - Glass / Moto / Ara).  This section will provide a real world example of placing Bluetooth 4.0 connected MEMS devices into a shoe which will lead to some surprising capabilities (telling us how to exercise properly).  This section will conclude by exploring this final thought.   “If it looks amazing and does not work well people will forgive but if it works great and it is ugly, no one will wear it.”\n\nThe talk will culminate by showing how these two industries will co-evolve and the different forms these collaborations can take. Their growth will now come from radically new products that combine the best that these two industries can offer. \n",
                            "room": "4221",
                            "logDate": "0001-01-01T00:00:00",
                            "startTime": "9:45 AM Saturday",
                            "startTimeDateTime": "0001-01-01T00:00:00",
                            "interestedCount": 0,
                            "planToAttendCount": 0,
                            "interested": false,
                            "willAttend": false,
                            "presenters": [
                                {
                                    "id": 410,
                                    "firstName": "Siamak",
                                    "lastName": "Ashrafi",
                                    "email": "",
                                    "phoneNumber": "",
                                    "bio": "is a Bio-Computational Specialist at a biotech working on finding new cancer bio-markers, drug targets and contributing to publications in scientific journals. He has produced elegant solutions to complex problems which resulted in several issued patents. He is a frequent winner in coding competitions using social, mobile, cloud and web technologies. He is a recognized leader in wearable/mobile development and a sought after speaker helping to promote the ecosystem. In his spare time he attends UCSF medical and Stanford surgical seminars. He is very happy with all this, but what he would really like is to get a major sponsor in all three phases of water. Snowboarding [solid H2O], Surfing [liquid H2O] & Kiteboarding [vapor H2O].\n\nGoogle+ \nGoogle+: https://plus.google.com/+SiamakAshrafi/posts",
                                    "webSite": "www.ylabz.com/ash",
                                    "imageUrl": "http://cache.siliconvalley-codecamp.com/attendeeimage/20140613181411-410.jpg",
                                    "allowAttendeeToEmailMe": false,
                                    "company": "Zoewear",
                                    "presentationLimit": 0,
                                    "sessions": [],
                                    "allowHtml": false,
                                    "facebookUrl": "",
                                    "googlePlusUrl": "https://plus.google.com/+SiamakAshrafi/about",
                                    "linkedInUrl": "",
                                    "twitterUrl": "http://twitter.com/biocodes",
                                    "urlPostToken": "2014"
                                },
                                {
                                    "id": 15080,
                                    "firstName": "Elena",
                                    "lastName": "Philipova",
                                    "email": "",
                                    "phoneNumber": "",
                                    "bio": "is a Consultant on International Business Development in fashion and design, connecting fashion professionals and promoting creative designers. Her international career combined working as press attaché for a fashion house in Russia and as an editor in renowned Parisian B2B fashion guide Modem and web-platform Modemonline.com. Currently living between Paris and San Francisco, she manages international relations and expansion on US and Russian market for the German tradeshow Premium Berlin. She attended numerous fashion weeks and tradeshows over the past 15 years, organized fashion shows and events, and contributed as a free-lance journalist for fashion and culture medias in Russia and France. ",
                                    "webSite": "http://www.premiumexhibitions.de/",
                                    "imageUrl": "http://cache.siliconvalley-codecamp.com/attendeeimage/20140416202105-15080.jpg",
                                    "allowAttendeeToEmailMe": false,
                                    "company": "Premium Exhibitions GmbH",
                                    "presentationLimit": 0,
                                    "sessions": [],
                                    "allowHtml": false,
                                    "facebookUrl": "http://www.facebook.com/elena.philipova.7",
                                    "googlePlusUrl": "https://plus.google.com/+ElenaPhilipova/about",
                                    "linkedInUrl": "",
                                    "twitterUrl": "http://twitter.com/elena_philipova",
                                    "urlPostToken": "2014"
                                }
                            ],
                            "tags": [
                                {
                                    "id": 272,
                                    "tagName": "Android",
                                    "sessions": []
                                },
                                {
                                    "id": 790,
                                    "tagName": "Arduino",
                                    "sessions": []
                                },
                                {
                                    "id": 380,
                                    "tagName": "iOS",
                                    "sessions": []
                                },
                                {
                                    "id": 278,
                                    "tagName": "iPhone",
                                    "sessions": []
                                },
                                {
                                    "id": 907,
                                    "tagName": "Wearable",
                                    "sessions": []
                                }
                            ],
                            "allowHtml": false,
                            "kidOrProfessionalSession": "ProfessionalSession",
                            "kidSession": false,
                            "tagsResultCsv": "Android,Arduino,iOS,iPhone,Wearable",
                            "sessionLevelId": 2,
                            "sessionTimeDateTime": "2014-10-11T09:45:00",
                            "sessionUrl": "2014/technology-and-fashion-awaken-the-soul-of-the-shoe"
                        },
                        {
                            "id": 2513,
                            "title": "Swift language and using Playgrounds",
                            "description": "A detailed tutorial of the Swift programming language (history / comparison) and in depth tour of the new Swift Playgrounds.\nThis talk will cover basic language features:\nOptionals -\nClosures -\nGenerics -\nInferred types -\nBasic functional programming patterns -\nAutomated memory management [Strong, Weak and Unowned Reference] - \nSafety (variables are always initialized before use, arrays and integers are checked for overflow).\n\nAnd using the Swift Playgrounds for - Algorithm development, Drawing code development, and Processing code(value transformation, image filters etc ...).\n\nThis makes it very easy to learn and experiment with Swift code / APIs.\n[No project needed - run code from a document].\n\n\" Swift is an innovative new programming language for Cocoa and Cocoa Touch. Writing code is interactive and fun, the syntax is concise yet expressive, and apps run lightning-fast. \"  - Apple\n",
                            "room": "5001",
                            "logDate": "0001-01-01T00:00:00",
                            "startTime": "3:30 PM Saturday",
                            "startTimeDateTime": "0001-01-01T00:00:00",
                            "interestedCount": 0,
                            "planToAttendCount": 0,
                            "interested": false,
                            "willAttend": false,
                            "presenters": [
                                {
                                    "id": 410,
                                    "firstName": "Siamak",
                                    "lastName": "Ashrafi",
                                    "email": "",
                                    "phoneNumber": "",
                                    "bio": "is a Bio-Computational Specialist at a biotech working on finding new cancer bio-markers, drug targets and contributing to publications in scientific journals. He has produced elegant solutions to complex problems which resulted in several issued patents. He is a frequent winner in coding competitions using social, mobile, cloud and web technologies. He is a recognized leader in wearable/mobile development and a sought after speaker helping to promote the ecosystem. In his spare time he attends UCSF medical and Stanford surgical seminars. He is very happy with all this, but what he would really like is to get a major sponsor in all three phases of water. Snowboarding [solid H2O], Surfing [liquid H2O] & Kiteboarding [vapor H2O].\n\nGoogle+ \nGoogle+: https://plus.google.com/+SiamakAshrafi/posts",
                                    "webSite": "www.ylabz.com/ash",
                                    "imageUrl": "http://cache.siliconvalley-codecamp.com/attendeeimage/20140613181411-410.jpg",
                                    "allowAttendeeToEmailMe": false,
                                    "company": "Zoewear",
                                    "presentationLimit": 0,
                                    "sessions": [],
                                    "allowHtml": false,
                                    "facebookUrl": "",
                                    "googlePlusUrl": "https://plus.google.com/+SiamakAshrafi/about",
                                    "linkedInUrl": "",
                                    "twitterUrl": "http://twitter.com/biocodes",
                                    "urlPostToken": "2014"
                                }
                            ],
                            "tags": [
                                {
                                    "id": 584,
                                    "tagName": "Apple",
                                    "sessions": []
                                },
                                {
                                    "id": 380,
                                    "tagName": "iOS",
                                    "sessions": []
                                },
                                {
                                    "id": 958,
                                    "tagName": "Swift",
                                    "sessions": []
                                }
                            ],
                            "allowHtml": false,
                            "kidOrProfessionalSession": "ProfessionalSession",
                            "kidSession": false,
                            "tagsResultCsv": "Apple,iOS,Swift",
                            "sessionLevelId": 1,
                            "sessionTimeDateTime": "2014-10-11T15:30:00",
                            "sessionUrl": "2014/swift-language-and-using-playgrounds"
                        }
                    ],
                    "allowHtml": false,
                    "facebookUrl": "",
                    "googlePlusUrl": "https://plus.google.com/+SiamakAshrafi/about",
                    "linkedInUrl": "",
                    "twitterUrl": "http://twitter.com/biocodes",
                    "presenterUrl": "2014/siamak-ashrafi-410",
                    "urlPostToken": "2014"
                },
                {
                    "id": 28103,
                    "firstName": "Om",
                    "lastName": "Bachu",
                    "email": "",
                    "phoneNumber": "",
                    "bio": "Om Bachu has a Masters in Computer Engineering from CEDTI and has worked for over a 15 years as Sr. Enterprise SW Architect, specializing in business integration middleware on n-tier based systems. Most of the experience has been in providing high value solutions, finding/fulfilling business opportunities, in enterprise wide IaaS, PaaS, SaaS of various enterprise patterns, workload architectures for CAMSS & Middleware. Also, Om has provided solutions in Software Defined Environments (storage, networks, compute, etc), virtualization on the System-x and p, endpoint management, and data center HA/DR preparedness.  He has been a speaker at various conferences: viz., RSA, IMPACT, WSTC, WTC, Meetups,etc. and over the last couple of years has been working as Sr.Technical Sales Specialist at IBM SWG Sales & Distribution in \"Mobile | Cloud | Middleware\"",
                    "webSite": "ibm.com",
                    "imageUrl": "http://cache.siliconvalley-codecamp.com/attendeeimage/20140930230925-28103.jpg",
                    "allowAttendeeToEmailMe": false,
                    "company": "IBM",
                    "presentationLimit": 0,
                    "sessions": [
                        {
                            "id": 3663,
                            "title": "Enterprise ready Mobile app consuming DBaaS offered by Bluemix",
                            "description": "Want the power of IBM's database and mobile platform but don't want to install, configure and manage it? Then you need to learn about managed data services in Bluemix. We will show how IBM Bluemix, an open-standards, cloud-based developer platform for building, deploying and managing apps can be leveraged for rapid application development on the cloud built on top of enterprise-level data services, Mobile Platform and Java Runtime. We will discuss and demo Bluemix services, Database and Mobile App. Database is DBaaS and powered by Cloudant, it provides a managed database service to handle demanding web and database workloads. Join us to get hands on and learn how to use DBaaS as noSQL in the cloud. You will also learn to pump-in NOSQL document datasets into Mobile App. ",
                            "room": "8401",
                            "logDate": "0001-01-01T00:00:00",
                            "startTime": "5:00 PM Saturday",
                            "startTimeDateTime": "0001-01-01T00:00:00",
                            "interestedCount": 0,
                            "planToAttendCount": 0,
                            "interested": false,
                            "willAttend": false,
                            "presenters": [
                                {
                                    "id": 28103,
                                    "firstName": "Om",
                                    "lastName": "Bachu",
                                    "email": "",
                                    "phoneNumber": "",
                                    "bio": "Om Bachu has a Masters in Computer Engineering from CEDTI and has worked for over a 15 years as Sr. Enterprise SW Architect, specializing in business integration middleware on n-tier based systems. Most of the experience has been in providing high value solutions, finding/fulfilling business opportunities, in enterprise wide IaaS, PaaS, SaaS of various enterprise patterns, workload architectures for CAMSS & Middleware. Also, Om has provided solutions in Software Defined Environments (storage, networks, compute, etc), virtualization on the System-x and p, endpoint management, and data center HA/DR preparedness.  He has been a speaker at various conferences: viz., RSA, IMPACT, WSTC, WTC, Meetups,etc. and over the last couple of years has been working as Sr.Technical Sales Specialist at IBM SWG Sales & Distribution in \"Mobile | Cloud | Middleware\"",
                                    "webSite": "ibm.com",
                                    "imageUrl": "http://cache.siliconvalley-codecamp.com/attendeeimage/20140930230925-28103.jpg",
                                    "allowAttendeeToEmailMe": false,
                                    "company": "IBM",
                                    "presentationLimit": 0,
                                    "sessions": [],
                                    "allowHtml": false,
                                    "facebookUrl": "",
                                    "googlePlusUrl": "",
                                    "linkedInUrl": "",
                                    "twitterUrl": "http://twitter.com/ombachu",
                                    "urlPostToken": "2014"
                                }
                            ],
                            "tags": [
                                {
                                    "id": 982,
                                    "tagName": "Bluemix",
                                    "sessions": []
                                },
                                {
                                    "id": 9,
                                    "tagName": "Database",
                                    "sessions": []
                                }
                            ],
                            "allowHtml": false,
                            "kidOrProfessionalSession": "ProfessionalSession",
                            "kidSession": false,
                            "tagsResultCsv": "Bluemix,Database",
                            "sessionLevelId": 1,
                            "sessionTimeDateTime": "2014-10-11T17:00:00",
                            "sessionUrl": "2014/enterprise-ready-mobile-app-consuming-dbaas-offered-by-bluemix"
                        }
                    ],
                    "allowHtml": false,
                    "facebookUrl": "",
                    "googlePlusUrl": "",
                    "linkedInUrl": "",
                    "twitterUrl": "http://twitter.com/ombachu",
                    "presenterUrl": "2014/om-bachu-28103",
                    "urlPostToken": "2014"
                },
                {
                    "id": 15072,
                    "firstName": "Maarten",
                    "lastName": "Balliauw",
                    "email": "",
                    "phoneNumber": "",
                    "bio": "Maarten Balliauw is a Technical Evangelist at JetBrains. His interests are in web technologies like ASP.NET (MVC, Web API), PHP and Windows Azure. He's a Microsoft Most Valuable Professional (MVP) for Windows Azure and has published many articles in both PHP and .NET literature such as MSDN magazine Belgium and PHP architect. Maarten is a frequent speaker at various national and international events. His blog can be found at http://blog.maartenballiauw.be.",
                    "webSite": "http://blog.maartenballiauw.be",
                    "imageUrl": "http://cache.siliconvalley-codecamp.com/attendeeimage/20140409174104-15072.jpg",
                    "allowAttendeeToEmailMe": false,
                    "company": "JetBrains",
                    "presentationLimit": 0,
                    "sessions": [
                        {
                            "id": 1422,
                            "title": "Using NuGet the way you should",
                            "description": "A nice and blunt title! Consuming NuGet packages, that’s what everyone does. Open source projects create NuGet packages and post them on NuGet.org. Meanwhile, all of us are still working with shared projects and fighting relative paths, versioning and so on. In this talk, we’ll use Visual Studio, NuGet and TeamCity to work with NuGet the way you should. Project references must die! Add Package Reference is everything you will ever need. ",
                            "room": "8403",
                            "logDate": "0001-01-01T00:00:00",
                            "startTime": "2:45 PM Sunday",
                            "startTimeDateTime": "0001-01-01T00:00:00",
                            "interestedCount": 0,
                            "planToAttendCount": 0,
                            "interested": false,
                            "willAttend": false,
                            "presenters": [
                                {
                                    "id": 15072,
                                    "firstName": "Maarten",
                                    "lastName": "Balliauw",
                                    "email": "",
                                    "phoneNumber": "",
                                    "bio": "Maarten Balliauw is a Technical Evangelist at JetBrains. His interests are in web technologies like ASP.NET (MVC, Web API), PHP and Windows Azure. He's a Microsoft Most Valuable Professional (MVP) for Windows Azure and has published many articles in both PHP and .NET literature such as MSDN magazine Belgium and PHP architect. Maarten is a frequent speaker at various national and international events. His blog can be found at http://blog.maartenballiauw.be.",
                                    "webSite": "http://blog.maartenballiauw.be",
                                    "imageUrl": "http://cache.siliconvalley-codecamp.com/attendeeimage/20140409174104-15072.jpg",
                                    "allowAttendeeToEmailMe": false,
                                    "company": "JetBrains",
                                    "presentationLimit": 0,
                                    "sessions": [],
                                    "allowHtml": false,
                                    "facebookUrl": "",
                                    "googlePlusUrl": "",
                                    "linkedInUrl": "",
                                    "twitterUrl": "http://twitter.com/maartenballiauw",
                                    "urlPostToken": "2014"
                                }
                            ],
                            "tags": [
                                {
                                    "id": 44,
                                    "tagName": "Architecture",
                                    "sessions": []
                                },
                                {
                                    "id": 826,
                                    "tagName": "ASP.NET",
                                    "sessions": []
                                },
                                {
                                    "id": 326,
                                    "tagName": "Automation",
                                    "sessions": []
                                },
                                {
                                    "id": 827,
                                    "tagName": "Best Practices",
                                    "sessions": []
                                },
                                {
                                    "id": 463,
                                    "tagName": "nuget",
                                    "sessions": []
                                },
                                {
                                    "id": 926,
                                    "tagName": "teamcity",
                                    "sessions": []
                                }
                            ],
                            "allowHtml": false,
                            "kidOrProfessionalSession": "ProfessionalSession",
                            "kidSession": false,
                            "tagsResultCsv": "Architecture,ASP.NET,Automation,Best Practices,nuget,teamcity",
                            "sessionLevelId": 2,
                            "sessionTimeDateTime": "2014-10-12T14:45:00",
                            "sessionUrl": "2014/using-nuget-the-way-you-should"
                        }
                    ],
                    "allowHtml": false,
                    "facebookUrl": "",
                    "googlePlusUrl": "",
                    "linkedInUrl": "",
                    "twitterUrl": "http://twitter.com/maartenballiauw",
                    "presenterUrl": "2014/maarten-balliauw-15072",
                    "urlPostToken": "2014"
                },
                {
                    "id": 8211,
                    "firstName": "Kenny",
                    "lastName": "Bastani",
                    "email": "",
                    "phoneNumber": "",
                    "bio": "Kenny Bastani is an accomplished software development consultant and entrepreneur with 10+ years of industry experience as a front-end and back-end engineer. Kenny has demonstrated leadership in designing and developing enterprise-grade web applications for high-volume, high-availability environments, with innovative focuses on solving unsupervised machine learning problems that enable businesses to better manage their institutional memory. As both an entrepreneur and software designer based in the SF Bay Area, Kenny has gained valuable experience leading teams in both product design and software architecture.",
                    "webSite": "www.neotechnology.com",
                    "imageUrl": "http://cache.siliconvalley-codecamp.com/attendeeimage/20140829182057-8211.jpg",
                    "allowAttendeeToEmailMe": false,
                    "company": "Neo Technology",
                    "presentationLimit": 0,
                    "sessions": [
                        {
                            "id": 3626,
                            "title": "Building Killer Apps with Neo4j",
                            "description": "As companies like Facebook and Google have introduced us to Graph Search and the Knowledge Graph, developers are learning the benefits of graph database architectures. Graph databases, like Neo4j, have increased in popularity by nearly 250% from last year - the highest among all other DBMS categories, according to db-engines.com. Join Kenny Bastani as we look at the benefits of using a graph database, explore various use cases and walkthrough creating a movie recommendation app on Neo4j 2.0.",
                            "room": "8402",
                            "logDate": "0001-01-01T00:00:00",
                            "startTime": "10:45 AM Sunday",
                            "startTimeDateTime": "0001-01-01T00:00:00",
                            "interestedCount": 0,
                            "planToAttendCount": 0,
                            "interested": false,
                            "willAttend": false,
                            "presenters": [
                                {
                                    "id": 8211,
                                    "firstName": "Kenny",
                                    "lastName": "Bastani",
                                    "email": "",
                                    "phoneNumber": "",
                                    "bio": "Kenny Bastani is an accomplished software development consultant and entrepreneur with 10+ years of industry experience as a front-end and back-end engineer. Kenny has demonstrated leadership in designing and developing enterprise-grade web applications for high-volume, high-availability environments, with innovative focuses on solving unsupervised machine learning problems that enable businesses to better manage their institutional memory. As both an entrepreneur and software designer based in the SF Bay Area, Kenny has gained valuable experience leading teams in both product design and software architecture.",
                                    "webSite": "www.neotechnology.com",
                                    "imageUrl": "http://cache.siliconvalley-codecamp.com/attendeeimage/20140829182057-8211.jpg",
                                    "allowAttendeeToEmailMe": false,
                                    "company": "Neo Technology",
                                    "presentationLimit": 0,
                                    "sessions": [],
                                    "allowHtml": false,
                                    "facebookUrl": "",
                                    "googlePlusUrl": "",
                                    "linkedInUrl": "",
                                    "twitterUrl": "http://twitter.com/kennybastani",
                                    "urlPostToken": "2014"
                                }
                            ],
                            "tags": [
                                {
                                    "id": 657,
                                    "tagName": "Apps",
                                    "sessions": []
                                },
                                {
                                    "id": 659,
                                    "tagName": "Graph Databases",
                                    "sessions": []
                                },
                                {
                                    "id": 655,
                                    "tagName": "Neo4j",
                                    "sessions": []
                                },
                                {
                                    "id": 386,
                                    "tagName": "NoSQL",
                                    "sessions": []
                                },
                                {
                                    "id": 952,
                                    "tagName": "Open Source",
                                    "sessions": []
                                }
                            ],
                            "allowHtml": false,
                            "kidOrProfessionalSession": "ProfessionalSession",
                            "kidSession": false,
                            "tagsResultCsv": "Apps,Graph Databases,Neo4j,NoSQL,Open Source",
                            "sessionLevelId": 1,
                            "sessionTimeDateTime": "2014-10-12T10:45:00",
                            "sessionUrl": "2014/building-killer-apps-with-neo4j"
                        }
                    ],
                    "allowHtml": false,
                    "facebookUrl": "",
                    "googlePlusUrl": "",
                    "linkedInUrl": "",
                    "twitterUrl": "http://twitter.com/kennybastani",
                    "presenterUrl": "2014/kenny-bastani-8211",
                    "urlPostToken": "2014"
                },
                {
                    "id": 2000,
                    "firstName": "Ward",
                    "lastName": "Bell",
                    "email": "",
                    "phoneNumber": "",
                    "bio": "Ward is VP of Technology at IdeaBlade, a consulting and product company, makers of BreezeJS and Breeze#. He's a Microsoft MVP, client app aficionado, AngularJS junkie, and snappy dresser.",
                    "webSite": "www.neverindoubtnet.blogspot.com/",
                    "imageUrl": "http://cache.siliconvalley-codecamp.com/attendeeimage/20140914165251-2000.jpg",
                    "allowAttendeeToEmailMe": true,
                    "company": "IdeaBlade",
                    "presentationLimit": 0,
                    "sessions": [
                        {
                            "id": 3657,
                            "title": "AngularJS app testing for real",
                            "description": "Let Ward show you how he writes automated tests for Angular apps. He’ll opine on what to test … so you build confidence that the application works without driving yourself nuts. He’ll demonstrate testing techniques to overcome certain well-known hurdles (including async) and explains how ngMocks work.  \n\nWe’ll be going beyond the basics. This isn’t an introduction to testing or Jasmine or Angular or JavaScript. But you should be fine if you’re ready for adventure and willing to ask questions.",
                            "room": "1501",
                            "logDate": "0001-01-01T00:00:00",
                            "startTime": "9:15 AM Sunday",
                            "startTimeDateTime": "0001-01-01T00:00:00",
                            "interestedCount": 0,
                            "planToAttendCount": 0,
                            "interested": false,
                            "willAttend": false,
                            "presenters": [
                                {
                                    "id": 2000,
                                    "firstName": "Ward",
                                    "lastName": "Bell",
                                    "email": "",
                                    "phoneNumber": "",
                                    "bio": "Ward is VP of Technology at IdeaBlade, a consulting and product company, makers of BreezeJS and Breeze#. He's a Microsoft MVP, client app aficionado, AngularJS junkie, and snappy dresser.",
                                    "webSite": "www.neverindoubtnet.blogspot.com/",
                                    "imageUrl": "http://cache.siliconvalley-codecamp.com/attendeeimage/20140914165251-2000.jpg",
                                    "allowAttendeeToEmailMe": true,
                                    "company": "IdeaBlade",
                                    "presentationLimit": 0,
                                    "sessions": [],
                                    "allowHtml": false,
                                    "facebookUrl": "",
                                    "googlePlusUrl": "",
                                    "linkedInUrl": "",
                                    "twitterUrl": "http://twitter.com/wardbell",
                                    "urlPostToken": "2014"
                                }
                            ],
                            "tags": [
                                {
                                    "id": 773,
                                    "tagName": "AngularJS",
                                    "sessions": []
                                },
                                {
                                    "id": 925,
                                    "tagName": "JavaScript",
                                    "sessions": []
                                },
                                {
                                    "id": 206,
                                    "tagName": "Testing",
                                    "sessions": []
                                }
                            ],
                            "allowHtml": false,
                            "kidOrProfessionalSession": "ProfessionalSession",
                            "kidSession": false,
                            "tagsResultCsv": "AngularJS,JavaScript,Testing",
                            "sessionLevelId": 2,
                            "sessionTimeDateTime": "2014-10-12T09:15:00",
                            "sessionUrl": "2014/angularjs-app-testing-for-real"
                        },
                        {
                            "id": 3658,
                            "title": "Get MEAN! MongoDb + express + angular + node",
                            "description": "Discover these four technologies and how they combine in a web app written entirely in JavaScript. This is an orientation, made tangible through exploration of “Zza”, an online pizza parlor app.<p>“Zza” is available on github for later study at your leisure.</p>\n",
                            "room": "5001",
                            "logDate": "0001-01-01T00:00:00",
                            "startTime": "1:45 PM Saturday",
                            "startTimeDateTime": "0001-01-01T00:00:00",
                            "interestedCount": 0,
                            "planToAttendCount": 0,
                            "interested": false,
                            "willAttend": false,
                            "presenters": [
                                {
                                    "id": 2000,
                                    "firstName": "Ward",
                                    "lastName": "Bell",
                                    "email": "",
                                    "phoneNumber": "",
                                    "bio": "Ward is VP of Technology at IdeaBlade, a consulting and product company, makers of BreezeJS and Breeze#. He's a Microsoft MVP, client app aficionado, AngularJS junkie, and snappy dresser.",
                                    "webSite": "www.neverindoubtnet.blogspot.com/",
                                    "imageUrl": "http://cache.siliconvalley-codecamp.com/attendeeimage/20140914165251-2000.jpg",
                                    "allowAttendeeToEmailMe": true,
                                    "company": "IdeaBlade",
                                    "presentationLimit": 0,
                                    "sessions": [],
                                    "allowHtml": false,
                                    "facebookUrl": "",
                                    "googlePlusUrl": "",
                                    "linkedInUrl": "",
                                    "twitterUrl": "http://twitter.com/wardbell",
                                    "urlPostToken": "2014"
                                }
                            ],
                            "tags": [
                                {
                                    "id": 773,
                                    "tagName": "AngularJS",
                                    "sessions": []
                                },
                                {
                                    "id": 850,
                                    "tagName": "JavaScript",
                                    "sessions": []
                                },
                                {
                                    "id": 428,
                                    "tagName": "MongoDB",
                                    "sessions": []
                                },
                                {
                                    "id": 446,
                                    "tagName": "NodeJS",
                                    "sessions": []
                                },
                                {
                                    "id": 386,
                                    "tagName": "NoSQL",
                                    "sessions": []
                                }
                            ],
                            "allowHtml": false,
                            "kidOrProfessionalSession": "ProfessionalSession",
                            "kidSession": false,
                            "tagsResultCsv": "AngularJS,JavaScript,MongoDB,NodeJS,NoSQL",
                            "sessionLevelId": 1,
                            "sessionTimeDateTime": "2014-10-11T13:45:00",
                            "sessionUrl": "2014/get-mean-mongodb-express-angular-node"
                        }
                    ],
                    "allowHtml": false,
                    "facebookUrl": "",
                    "googlePlusUrl": "",
                    "linkedInUrl": "",
                    "twitterUrl": "http://twitter.com/wardbell",
                    "presenterUrl": "2014/ward-bell-2000",
                    "urlPostToken": "2014"
                },
                {
                    "id": 5996,
                    "firstName": "Craig",
                    "lastName": "Berntson",
                    "email": "",
                    "phoneNumber": "",
                    "bio": "Craig is the Chief Software Gardener at Mojo Software Worx in Salt Lake City. He has a passion for community and helping other developers improve their skills and has spoken at developer events across the US, Canada, and Europe. He writes the column \"Software Gardening\" in DotNet Curry Magazine and is the co-author of \"Continuous Integration in .NET\" available from Manning. Craig has been named a Microsoft MVP every year since 1996. He is an INETA Community Speaker and a ComponentOne Community Influencer.",
                    "webSite": "www.craigberntson.com",
                    "imageUrl": "http://cache.siliconvalley-codecamp.com/attendeeimage/20140717004052-5996.jpg",
                    "allowAttendeeToEmailMe": false,
                    "company": "Mojo Software Worx",
                    "presentationLimit": 0,
                    "sessions": [
                        {
                            "id": 2552,
                            "title": "ASP.Net MVC Tips and Tricks",
                            "description": "We'll look at several tips and techniques to make it easier to create ASP.Net MVC web sites. Some of what you'll learn about includes project layout, unit testing, Entity Framework tricks, bundling, minification, validation, and more. After this session, your MVC sites will be easier to maintain and be more performant.",
                            "room": "4301",
                            "logDate": "0001-01-01T00:00:00",
                            "startTime": "11:15 AM Saturday",
                            "startTimeDateTime": "0001-01-01T00:00:00",
                            "interestedCount": 0,
                            "planToAttendCount": 0,
                            "interested": false,
                            "willAttend": false,
                            "presenters": [
                                {
                                    "id": 5996,
                                    "firstName": "Craig",
                                    "lastName": "Berntson",
                                    "email": "",
                                    "phoneNumber": "",
                                    "bio": "Craig is the Chief Software Gardener at Mojo Software Worx in Salt Lake City. He has a passion for community and helping other developers improve their skills and has spoken at developer events across the US, Canada, and Europe. He writes the column \"Software Gardening\" in DotNet Curry Magazine and is the co-author of \"Continuous Integration in .NET\" available from Manning. Craig has been named a Microsoft MVP every year since 1996. He is an INETA Community Speaker and a ComponentOne Community Influencer.",
                                    "webSite": "www.craigberntson.com",
                                    "imageUrl": "http://cache.siliconvalley-codecamp.com/attendeeimage/20140717004052-5996.jpg",
                                    "allowAttendeeToEmailMe": false,
                                    "company": "Mojo Software Worx",
                                    "presentationLimit": 0,
                                    "sessions": [],
                                    "allowHtml": false,
                                    "facebookUrl": "http://www.facebook.com/craigber",
                                    "googlePlusUrl": "",
                                    "linkedInUrl": "http://www.linkedin.com/in/craigber",
                                    "twitterUrl": "http://twitter.com/craigber",
                                    "urlPostToken": "2014"
                                }
                            ],
                            "tags": [
                                {
                                    "id": 879,
                                    "tagName": "ASPNET",
                                    "sessions": []
                                },
                                {
                                    "id": 396,
                                    "tagName": "MVC",
                                    "sessions": []
                                }
                            ],
                            "allowHtml": false,
                            "kidOrProfessionalSession": "ProfessionalSession",
                            "kidSession": false,
                            "tagsResultCsv": "ASPNET,MVC",
                            "sessionLevelId": 2,
                            "sessionTimeDateTime": "2014-10-11T11:15:00",
                            "sessionUrl": "2014/aspnet-mvc-tips-and-tricks"
                        }
                    ],
                    "allowHtml": false,
                    "facebookUrl": "http://www.facebook.com/craigber",
                    "googlePlusUrl": "",
                    "linkedInUrl": "http://www.linkedin.com/in/craigber",
                    "twitterUrl": "http://twitter.com/craigber",
                    "presenterUrl": "2014/craig-berntson-5996",
                    "urlPostToken": "2014"
                }];
        };

        this.hasData = function () {
            return this.data && this.data.length > 0;
        };


    });


}());
