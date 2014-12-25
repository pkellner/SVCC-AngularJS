(function () {
    "use strict";

    //debugger;

    var app = angular
        .module("speakerResourceServiceMock",
        ["ngMockE2E"]);

    app.run(function ($httpBackend) {

        debugger;

        var speakers = [
            {
                "id": 5443,
                "firstName": "Mark",
                "lastName": "Abramson",
                "email": "",
                "phoneNumber": "",
                "bio": "Mark Abramson is Founder & CEO of PrintForm Corporation; co-founder of Medicine of Cycling and on the Board of USA Cycling. He is veteran of both early-stage startups and enterprise software projects, he has particular technical expertise in digital workflow, industrial printing and complex global supply chains for high-growth companies.  He's also a dad, runs the Microsoft SF.NET & BizSparkSF groups for Bay Area startups, collects antique woodworking machines and mentors on Lean Startup methods.",
                "webSite": "twitter.com/mark__a",
                "imageUrl": "/attendeeimage/20130102000000-5443.jpg",
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
                                "imageUrl": "/attendeeimage/20130102000000-5443.jpg",
                                "allowAttendeeToEmailMe": true,
                                "company": "PrintForm Corporation",
                                "presentationLimit": 0,
                                "sessions": [],
                                "allowHtml": false,
                                "facebookUrl": "",
                                "googlePlusUrl": "",
                                "linkedInUrl": "http://www.linkedin.com/in/abramsonmark",
                                "twitterUrl": "http://twitter.com/mark__a"
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
                        "sessionTimeDateTime": "2014-10-11T17:00:00"
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
                                "imageUrl": "/attendeeimage/20130102000000-5443.jpg",
                                "allowAttendeeToEmailMe": true,
                                "company": "PrintForm Corporation",
                                "presentationLimit": 0,
                                "sessions": [],
                                "allowHtml": false,
                                "facebookUrl": "",
                                "googlePlusUrl": "",
                                "linkedInUrl": "http://www.linkedin.com/in/abramsonmark",
                                "twitterUrl": "http://twitter.com/mark__a"
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
                        "sessionTimeDateTime": "2007-10-26T00:00:00"
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
                                "imageUrl": "/attendeeimage/20130102000000-5443.jpg",
                                "allowAttendeeToEmailMe": true,
                                "company": "PrintForm Corporation",
                                "presentationLimit": 0,
                                "sessions": [],
                                "allowHtml": false,
                                "facebookUrl": "",
                                "googlePlusUrl": "",
                                "linkedInUrl": "http://www.linkedin.com/in/abramsonmark",
                                "twitterUrl": "http://twitter.com/mark__a"
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
                        "sessionTimeDateTime": "2014-10-11T15:30:00"
                    }
                ],
                "allowHtml": false,
                "facebookUrl": "",
                "googlePlusUrl": "",
                "linkedInUrl": "http://www.linkedin.com/in/abramsonmark",
                "twitterUrl": "http://twitter.com/mark__a"
            },
            {
                "id": 3073,
                "firstName": "Rahul",
                "lastName": "Agarwal",
                "email": "",
                "phoneNumber": "",
                "bio": "Developer with experience in Java, OSGi, Spring, Hibernate, highly scalable and highly transactional systems, RESTful APIs, E-Commerce and Micro-transaction systems. Part-time instructor at UCSC Silicon Valley and Foothill College. Expertise in backend systems but I have also played with Android and Glass. ",
                "webSite": "irahul.com",
                "imageUrl": "/attendeeimage/20140415035045-3073.jpg",
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
                                "imageUrl": "/attendeeimage/20140415035045-3073.jpg",
                                "allowAttendeeToEmailMe": true,
                                "company": "",
                                "presentationLimit": 0,
                                "sessions": [],
                                "allowHtml": false,
                                "facebookUrl": "",
                                "googlePlusUrl": "",
                                "linkedInUrl": "http://www.linkedin.com/in/rahulaga",
                                "twitterUrl": "http://twitter.com/whatsrahulhatin"
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
                        "sessionTimeDateTime": "2014-10-11T11:15:00"
                    }
                ],
                "allowHtml": false,
                "facebookUrl": "",
                "googlePlusUrl": "",
                "linkedInUrl": "http://www.linkedin.com/in/rahulaga",
                "twitterUrl": "http://twitter.com/whatsrahulhatin"
            },
            {
                "id": 21283,
                "firstName": "Jeff",
                "lastName": "Anderson",
                "email": "",
                "phoneNumber": "",
                "bio": "Jeff Anderson is an Assistant Professor of Mathematics at Foothill College. He earned his PhD in Numerical Linear Algebra from UC Davis studying algorithms to decrease the dimensions of large-scale computational problems without sacrificing accuracy. Jeff works primarily with MATLAB to implement his mathematical algorithms. ",
                "webSite": "http://www.foothill.edu/psme/directory.php?s=1&rec_id=1910",
                "imageUrl": "/attendeeimage/20140910182201-21283.jpg",
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
                                "imageUrl": "/attendeeimage/20140910182201-21283.jpg",
                                "allowAttendeeToEmailMe": true,
                                "company": "Foothill College",
                                "presentationLimit": 0,
                                "sessions": [],
                                "allowHtml": false,
                                "facebookUrl": "",
                                "googlePlusUrl": "",
                                "linkedInUrl": "",
                                "twitterUrl": ""
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
                        "sessionTimeDateTime": "2014-10-11T11:15:00"
                    }
                ],
                "allowHtml": false,
                "facebookUrl": "",
                "googlePlusUrl": "",
                "linkedInUrl": "",
                "twitterUrl": ""
            }];

        var speakerUrl = "/rest/presenter/arrayonly";

        $httpBackend.whenGET(speakerUrl).respond(speakers);

        //var editingRegex = new RegExp(productUrl + "/[0-9][0-9]*", '');
        //$httpBackend.whenGET(editingRegex).respond(function (method, url, data) {
        //    var product = {"productId": 0};
        //    var parameters = url.split('/');
        //    var length = parameters.length;
        //    var id = parameters[length - 1];
        //
        //    if (id > 0) {
        //        for (var i = 0; i < products.length; i++) {
        //            if (products[i].productId == id) {
        //                product = products[i];
        //                break;
        //            }
        //        }
        //        ;
        //    }
        //    return [200, product, {}];
        //});

        //$httpBackend.whenPOST(productUrl).respond(function (method, url, data) {
        //    var product = angular.fromJson(data);
        //
        //    if (!product.productId) {
        //        // new product Id
        //        product.productId = products[products.length - 1].productId + 1;
        //        products.push(product);
        //    }
        //    else {
        //        // Updated product
        //        for (var i = 0; i < products.length; i++) {
        //            if (products[i].productId == product.productId) {
        //                products[i] = product;
        //                break;
        //            }
        //        }
        //        ;
        //    }
        //    return [200, product, {}];
        //});

        // Pass through any requests for application files
        $httpBackend.whenGET(/app/).passThrough();



    })
}());
