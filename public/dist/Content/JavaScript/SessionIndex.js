$(document).ready(function () {

    //By default sort the Sessions by Time.
    var timeValue = '@Model.ShowAgendaOnSchedule';
    var roomValue = '@Model.ShowRoomOnSchedule';
    //var trackValue = '@Model.ShowTrackOnSession';
    var currentTrack = '@Model.TrackNameCurrent';

    var showHideFlag;

    var floatingElement,
        targetSelectBtn,
        timeoutVal;

    function monitorFloatingElement(el) {
        floatingElement = el;
    }

    function hideFloatingElement(el) {
        $(el).hide();
        if (timeoutVal) {
            clearTimeout(timeoutVal);
        }
    }

    // Filter Tags - Finish Button Click Event -  Added by Shivanand
    var tagArray = [];
    $("#tagfinishbtn").click(function () {
        $('#finalSelectedTagul li').each(function () {
            if ($('#finalSelectedTagul li').length != 0) {
                $('#finalSelectedTagul li').remove();
                tagArray.splice(0, tagArray.length);
            }
        });

        $("#ultag li.selected").each(function () {
            tagArray.push($(this).text());
            $('#finalSelectedTagul').append('<li class="selected"><span class="checkbox"></span><span class="label">' + $(this).text() + '</span></li>');
        });


        hideFloatingElement(floatingElement);
        $("#disableBg").remove();

        if (tagArray.length == 1) {
            for (i = 0; i < tagArray.length; i++) {
                $('#sessionsTable > tbody  > tr').each(function () {
                    var item = $(this);
                    if (item.find(".currentSessionDetails").text().search(new RegExp(tagArray[i], "g")) > 0) {
                        item.css('display', 'table-row');
                    }
                    else {
                        item.css('display', 'none');
                    }
                });
            }
        }
        else {

            $('#sessionsTable > tbody  > tr').each(function () {
                var item = $(this);
                for (i = 0; i < tagArray.length; i++) {
                    if (item.find(".currentSessionDetails").text().search(new RegExp(tagArray[i], "g")) > 0) {
                        item.css('background-color', 'white');
                    }
                }
            });

            $('#sessionsTable > tbody > tr').each(function () {
                var item = $(this);
                if ($(this).css('background-color') == "rgb(255, 255, 255)") {
                    item.css('display', 'table-row');
                }
                else {
                    item.css('display', 'none');
                }
            });
        }
    });

    // Close button for details floating panel
    $('#tagsFilterLightbox .closePanelButton').click(function (e) {
        if (floatingElement) {
            $("#disableBg").remove();
            hideFloatingElement(floatingElement);
        }
    });
    // End -  Tags filter button and floating panel
    //        $("#tagFiltersButton").colorbox({
    //            inline:true,
    //            transition: 'fade',
    //            href:"#tagsFilterLightbox",
    //            className: 'tagsFilterLightboxColorBox',
    //            opacity: 0.5,
    //            onOpen: function () {
    //                $('#tagsFilterLightbox .closePanelButton').click(function () {
    //                    $.colorbox.close();
    //                });
    //            }
    //        });


    // Accordion
    $('.collapsibleBox')
        .on('click', '.boxHeader', function () {
            var box = $(this).closest('.collapsibleBox');
            box.find('.boxContent').slideToggle(400, function () {
                box.toggleClass('active');
            });
        })
        .filter('.active').find('.boxContent').css('display', 'block');
    // End - Accordion

    // Tags checkbox list
    $('.tagsCheckboxWrap ul li, .timeFilterWrap ul li, .tagsFilterWrap ul li').click(function () {
        $(this).toggleClass('selected');
    });

    // Session days filter checkbox
    // // Makes all Days selected
    $('#sessionDaysCheckboxList li').addClass('selected');

    // Makes all times selected
    $('.timeFilterWrap .optionsWrap li').addClass('selected');

    $('#sessionDaysCheckboxList li').click(function () {

        var targetEl = $(this),
            saturdayTimes = $('.timeFilterWrap .Saturday li'),
            sundayTimes = $('.timeFilterWrap .Sunday li'),
            showDay = 'all';

        // Show All handler
        if (targetEl.hasClass('showAll')) {
            if (targetEl.hasClass('selected')) {
                showDay = 'none';
            } else {
                showDay = 'all';
            }
        } else if (targetEl.hasClass('saturday')) {
            // SATURDAY
            // Deselect if selected
            if (targetEl.hasClass('selected')) {
                // If sunday is has been selected
                if (targetEl.parent().find('li.sunday').hasClass('selected')) {
                    // Show only Sunday
                    showDay = 'sunday';
                } else {
                    // Hide all
                    showDay = 'none';
                }
            } else {
                // If sunday is has been selected
                if (targetEl.parent().find('li.sunday').hasClass('selected')) {
                    // Show all
                    showDay = 'all';
                } else {
                    // Show only Saturday
                    showDay = 'saturday';
                }
            }
        } else {
            // SATURDAY
            // Deselect if selected
            if (targetEl.hasClass('selected')) {
                // If sunday is has been selected
                if (targetEl.parent().find('li.saturday').hasClass('selected')) {
                    // Show only Saturday
                    showDay = 'saturday';
                } else {
                    // Hide all
                    showDay = 'none';
                }
            } else {
                // If sunday is has been selected
                if (targetEl.parent().find('li.saturday').hasClass('selected')) {
                    // Show all
                    showDay = 'all';
                } else {
                    // Show only Sunday
                    showDay = 'sunday';
                }
            }
        }

        // Reset selection
        targetEl.parent().find('li').removeClass('selected');
        var input;
        switch (showDay) {
            case 'saturday':
                targetEl.parent().find('li.saturday').addClass('selected');
                saturdayTimes.addClass('selected');
                sundayTimes.removeClass('selected');
                input = targetEl.parent().find('li.saturday').text();
                FilterSession(input, ".currentSessionDetails", showHideFlag);
                break;
            case 'sunday':
                targetEl.parent().find('li.sunday').addClass('selected');
                saturdayTimes.removeClass('selected');
                sundayTimes.addClass('selected');
                input = targetEl.parent().find('li.sunday').text();
                FilterSession(input, ".currentSessionDetails", showHideFlag);
                break;
            case 'all':
                targetEl.parent().find('li').addClass('selected');
                saturdayTimes.addClass('selected');
                sundayTimes.addClass('selected');
                var allDay = targetEl.parent().find('li.saturday').text() + "&" + targetEl.parent().find('li.sunday').text();
                FilterSession(allDay, ".currentSessionDetails", showHideFlag);
                break;
            default:
                saturdayTimes.removeClass('selected');
                sundayTimes.removeClass('selected');
                FilterSession("None", ".currentSessionDetails", showHideFlag);
        }

    });

    var lastSelectedTime;
    // Click event for the time show in the FILTER Section - SATURDAY.
    $('.timeFilterWrap .optionsWrap .Saturday li').click(function () {
        lastSelectedTime = $(this).text();
        if ($(this).attr('class') == 'selected') {
            FilterSessionByTimings('', lastSelectedTime);
        } else {
            FilterSessionByTimings('Hide', lastSelectedTime);
        }
    });

    // Click event for the time show in the FILTER Section - SUNDAY.
    $('.timeFilterWrap .optionsWrap .Sunday li').click(function () {
        lastSelectedTime = $(this).text();
        if ($(this).attr('class') == 'selected') {
            FilterSessionByTimings('', lastSelectedTime);
        }
        else {
            FilterSessionByTimings('Hide', lastSelectedTime);
        }
    });

    // Listens for check events on session times
    $('.timeFilterWrap .optionsWrap li').click(function () {

        var sessionDay = $(this).parent().parent().parent(),
            saturdayTimesSelectedCheckboxes = $('.timeFilterWrap .optionsWrap .Saturday li.selected'),
            sundayTimesSelectedCheckboxes = $('.timeFilterWrap .optionsWrap .Sunday li.selected'),
            timeCheckboxes = $('.timeFilterWrap .optionsWrap li'),
            timeCheckboxesSelected = $('.timeFilterWrap .optionsWrap li.selected'),
            timeCheckboxesCount = timeCheckboxes.length,
            timeCheckboxesSelectedCount = timeCheckboxesSelected.length;

        // Check the associated session day if session time is checked
        if ($(this).hasClass('selected')) {
            if (sessionDay.hasClass('Saturday')) {
                $('.daysFilterWrap li.saturday').addClass('selected');
            } else {
                $('.daysFilterWrap li.sunday').addClass('selected');
            }
        } else {
            // Check if there's no selected time for a day
            // then uncheck the associated day checkbox
            if (saturdayTimesSelectedCheckboxes.length == 0) {
                $('.daysFilterWrap li.saturday').removeClass('selected');
            }
            if (sundayTimesSelectedCheckboxes.length == 0) {
                $('.daysFilterWrap li.sunday').removeClass('selected');
            }
        }

        // Check if every checkbox time is selected
        // then select show all
        if (timeCheckboxesCount == timeCheckboxesSelectedCount) {
            $('.daysFilterWrap li.showAll').addClass('selected');
        } else {
            $('.daysFilterWrap li.showAll').removeClass('selected');
        }
    });

    // End - Session days filter checkbox

    // Session Select
    $('.interestSelectBtn .select').click(function (e) {
        // Show drop down
        var ScheduleAllowCheckAttend = '@Model.ScheduleAllowCheckAttend.ToString()';
        var currenttext = $(this);

        var currentdatetime = $(this, currenttext).find('.label').attr('data-sessiontime');
        var currentsessionid = $(this, currenttext).find('.label').attr('data-sessionid');

        if ($(e.target).hasClass('select')) {
            selected = true;
            // Add to monitor the current floating element
            if (floatingElement) {
                hideFloatingElement(floatingElement);
            }
            monitorFloatingElement('#selectOptionsWrap');

            targetSelectBtn = e.currentTarget.parentElement;

            $('#selectOptionsWrap').appendTo(targetSelectBtn);
            $('#selectOptionsWrap').fadeIn('fast', 'linear');

            // Stop event bubbling so body listener for hiding floating
            // panel won't be triggered
            e.stopPropagation();

            $('.interestSelectBtn .option').click(function (e) {
                $('#selectOptionsWrap').css('display', 'none');
                if (selected == true) {
                    //change interest by option selection
                    interestSelectHandler(targetSelectBtn, $(this), currenttext, ScheduleAllowCheckAttend);
                    selected = false;
                }
            });
        } else {
            targetSelectBtn = e.currentTarget.parentElement;
            //instant change interested or not or attending (or swap interest option)
            interestSelectSwap(targetSelectBtn, $(this), ScheduleAllowCheckAttend, currentdatetime, currentsessionid);
        }
    });

    function interestSelectSwap(select, label, AttendingStatus, currentdatetime, currentsessionid) {
        var text = $.trim(label.text()),
            selectEl = $('#' + select.id),
            targetLabel = '#' + select.id + ' .select .label';

        var choiceno, buttonname, addclass, removeclass, textchange;
        $(targetLabel).text('Saving');
        switch (text) {
            case 'Not Interested':
                $(targetLabel).text('Saving');
                choiceno = 1;
                buttonname = 'Interested';
                addclass = 'Interested';
                removeclass = '';
                textchange = 'Interested';
                break;
            case 'Interested':
                $(targetLabel).text('Saving');
                removeclass = 'Interested';
                if (AttendingStatus == 'True') {
                    choiceno = 2;
                    buttonname = 'Attending';
                    addclass = 'Attending';
                    textchange = 'Attending';
                    // now need to iterate through all rows and change all others with same time that are Attending to Interested (like server does)


                    // need to set all to interested that are already attending that are not currentsessionid
                    // currentdatetime
                    // currentsessionid
                    //console.log('currentsessionid and time  ' + currentsessionid + " " + currentdatetime);
                    $('.action > .interestSelectBtn > .select > .label').each(function (index, obj) {
                        //debugger;
                        var sessionTime = $(obj).find('.label').attr('data-sessiontime');
                        var sessionId = $(obj).find('.label').attr('data-sessionid');
                        var attendingOrInterested = $(obj).find('.text').html();

                        // make sure we do not mess with current session we are on and make sure we only look at current timeslot
                        var fndInTimeSlot = 0;
                        if (sessionId !== currentsessionid && sessionTime === currentdatetime) {
                            fndInTimeSlot++;
                            if (attendingOrInterested === "Attending") {
                                //console.log('need to set sessionId from attending to interested  ' + sessionTime + " " + sessionId);
                                var selectButtonClass = "#interestSelectBtn_" + sessionId;
                                var buttonToSet = $(selectButtonClass);
                                buttonToSet.removeClass('Attending');
                                buttonToSet.addClass('Interested');
                                $(obj).find('.text').html("Interested");
                            }
                        }
                    });
                }
                else {
                    choiceno = 0;
                    buttonname = 'Not Interested';
                    addclass = '';
                    textchange = 'Not Interested';
                }
                break;
            case 'Attending':
                $(targetLabel).text('Saving');
                choiceno = 0;
                buttonname = 'Not Interested';
                addclass = '';
                removeclass = 'Attending';
                textchange = 'Not Interested';
                break;
            default:
                // why is there a default? shouldn't this be an errorcondition?
                removeclass = 'Interested';
                if (AttendingStatus == 'True') {
                    removeclass = 'Attending';
                }
                choiceno = 0;
                buttonname = 'Not Interested';
                addclass = '';
                textchange = 'Not Interested';
        }

        PostUpdateSessionInterest(select, choiceno, buttonname, targetLabel, selectEl, addclass, removeclass, textchange, text);
    }

    function interestSelectHandler(select, option, currenttext, AttendingStatus) {
        var ChangeText = $.trim(option.text()),
            selectEl = $('#' + select.id),
            targetLabel = '#' + select.id + ' .select .label';

        var choiceno, buttonname, addclass, removeclass;
        $(targetLabel).text('Saving');
        switch (ChangeText) {
            case 'Attending':
                addclass = 'Attending';
                removeclass = 'Interested';
                choiceno = 2;
                buttonname = 'Attending';
                break;
            case 'Interested':
                addclass = 'Interested';
                removeclass = 'Attending';
                choiceno = 1;
                buttonname = 'Interested';
                break;
            default:
                addclass = '';
                removeclass = '';
                selectEl.removeClass('Attending');
                selectEl.removeClass('Interested');
                choiceno = 0;
                buttonname = 'Not Interested';
        }
        PostUpdateSessionInterest(select, choiceno, buttonname, targetLabel, selectEl, addclass, removeclass, ChangeText, currenttext);
    }

    function PostUpdateSessionInterest(select, choiceno, buttonname, targetLabel, selectEl, addclass, removeclass, textchange, text) {

        var selectid = String(select.id);
        var sessionid = selectid.substr(18);
        var username = '@Model.LoggedInUsername';
        $.ajax({
            type: "POST",
            url: "/rpc/Account/UpdateSessionInterest",
            data: "{SessionId:'" + sessionid + "',ButtonName:'" + buttonname + "',UserName:'" + username + "',ChoiceNumber:'" + choiceno + "'}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            //statusCode: {
            //    404: function () {
            //        //Could not contact server.
            //        $(targetLabel).text('error404');
            //        //change to current text after 2 second
            //        setTimeout(function () {
            //            $(targetLabel).text(text);
            //        }, 3000); // <-- time in milliseconds
            //    },
            //    500: function () {
            //        //A server-side error has occurred.
            //        $(targetLabel).text('error500');
            //        //change to current text after 2 second
            //        setTimeout(function () {
            //            $(targetLabel).text(text);
            //        }, 3000); // <-- time in milliseconds
            //    }
            //},
            error: function (a, b, c) {
                $.prompt(a.responseJSON.message, {
                    close: function () {
                        $(targetLabel).text(text);
                    }
                });
            },
            success: function (response) {
                //done
                $(targetLabel).text(textchange);
                if (addclass != '') {
                    selectEl.addClass(addclass);
                }
                if (removeclass != '') {
                    selectEl.removeClass(removeclass);
                }
            }
        });
    }

    // End - Session Select

    // Sponsor floating panel
    $('.sponsorsListWrap .sponsor').hover(function (e) {
        if (timeoutVal) {
            clearTimeout(timeoutVal);
        }
        switch (e.type) {
            case 'mouseenter':
                // Add to monitor the current floating element
                if (floatingElement) {
                    hideFloatingElement(floatingElement);
                }
                monitorFloatingElement('.sponsorPanel');

                $('.sponsorPanel').fadeIn('fast', 'linear').css({ 'top': e.pageY - 322, 'left': e.pageX - 520 });

                break;
            case 'mouseleave':

                monitorFloatingElement('.sponsorPanel');

                timeoutVal = setTimeout(function () {
                    hideFloatingElement(floatingElement);
                    timeoutVal = null;
                }, 2000);

                break;
        }

    });

    $('.sponsorPanel').hover(function () {
        if (timeoutVal) {
            clearTimeout(timeoutVal);
        }
    }, function () {
        timeoutVal = setTimeout(function () {
            hideFloatingElement(floatingElement);
            timeoutVal = null;
        }, 1300);
    });
    // End - Speaker panel


    //$('#sessionsWrap').hide();

    //$('#ContainerForFlip').show();

    //$('#sessionsNonExtjs').show();


    $(".toggle").click(function () {

        if ($('#iframe').is(":visible")) {
            $('#iframe').hide(300, function () {
                $('#sessionsNonExtjs').show(0);
            });
        } else {
            $('#sessionsNonExtjs').hide(0, function () {
                $('#iframe').show(300);
            });
        }

        //$('sessionsWrap current side').

        //debugger;

        //$('#sessionsNonExtjs').hide('slow', function() {
        //    $('#iframe').show('slow');
        //});

        //$('#sessionsWrap').hide('slow', function () {
        //    $('#sessionsWrapExtJS').show('slow');
        //});


        //var currentSide = $(".current"),
        //otherSide = $(".side:not(.current)");

        //currentSide.removeClass("current");
        //otherSide.addClass("current");

        //kendo.fx("#ContainerForFlip").slideInLeft(currentSide, otherSide).play();
    });
});

// Search Textbox - KeyUp Event Fired From Here...
var searchFired;
$(function () {
    $("#txtSearch").keyup(function () {
        // These 2 lines removes the Time and Day filter. 
        // Helps resolves conflict between Filter and keyword search
        $('.daysFilterWrap li').addClass('selected');
        $('.timeFilterWrap .optionsWrap li').addClass('selected');

        var input = $("#txtSearch").val();

        var sessionTable = $('#sessionsTable > tbody  > tr');
        sessionTable.each(function () {
            var sessionData = $(this);


            //if (sessionData.find('.currentSession').text().toLowerCase().search(new RegExp(input.toLowerCase(), "g")) < 0) {
            if (sessionData.find('.currentSession').text().toLowerCase().search(new RegExp(input.toLowerCase(), "g")) < 0 &&
                sessionData.find('.currentSessionDetails').text().toLowerCase().search(new RegExp(input.toLowerCase(), "g")) < 0) {
                sessionData.removeAttr('style');
                sessionData.hide();
            } else {
                sessionData.show();
            }

            // This specifies to the Time Filters that the sessions were first being sorted by Search Keyword.
            // This keyword is used below in the "FilterSessionsByTime()" function.
            searchFired = "Done";
            sessionData.css('background-color', 'white');
        });


    });
});

//This function is a Utility function for filtering the Sessions Search.
//This function is used with Filter Module (Days Only)
function FilterSession(input, divTag, showHideFlag) {
    $("#txtSearch").val(''); // Sets the Search Text to empty, when the day filter is selected
    var pattern = /&/;
    var patternexist = pattern.test(input);
    var saturday = input.substring(0, input.indexOf('&'));
    var sunday = input.substring(input.indexOf('&') + 1);
    var sessionTable = $('#sessionsTable > tbody  > tr');

    if (patternexist) {
        sessionTable.each(function () {
            var sessionData = $(this);
            // This chunk of code is executed when the user selects "Show All" in the Filter Section.
            if (sessionData.find(divTag).text().search(new RegExp(saturday, "g")) < 0 && sessionData.find(divTag).text().search(new RegExp(sunday, "g")) < 0) {
                sessionData.removeAttr('style');
                sessionData.css('display', 'none');
            }
            else {
                sessionData.show();
                sessionData.css('background-color', 'white');
            }
        });

        if (showHideFlag == "#time") {
            $('#sessionsTable > tbody').find('#time').css('display', 'table-row');
            $('#sessionsTable > tbody').find('#time').css('background-color', 'white');
        }

        else if (showHideFlag == "#tag") {
            $('#sessionsTable > tbody').find('#tag').css('display', 'table-row');
            $('#sessionsTable > tbody').find('#tag').css('background-color', 'white');
        }

        else if (showHideFlag == "#room") {
            $('#sessionsTable > tbody').find('#room').css('display', 'table-row');
            $('#sessionsTable > tbody').find('#room').css('background-color', 'white');
        }
    }
    else {
        sessionTable.each(function () {
            var sessionData = $(this);
            // This chunk of code is executed when the user selects any specific day from the Filter Section, or tries to search from the SEARCH textbox.
            if (sessionData.find(divTag).text().toLowerCase().search(new RegExp(input.toLowerCase(), "g")) < 0) {
                sessionData.removeAttr('style');
                sessionData.hide();
            } else {
                sessionData.show();
                sessionData.css('background-color', 'white');
            }

            //if (showHideFlag == "#time") {
            //    $('#sessionsTable > tbody').find('#time').css('display', 'table-row');
            //    $('#sessionsTable > tbody').find('#time').css('background-color', 'white');
            //}

            //else if (showHideFlag == "#tag") {
            //    $('#sessionsTable > tbody').find('#tag').css('display', 'table-row');
            //    $('#sessionsTable > tbody').find('#tag').css('background-color', 'white');
            //}

            //else if (showHideFlag == "#room") {
            //    $('#sessionsTable > tbody').find('#room').css('display', 'table-row');
            //    $('#sessionsTable > tbody').find('#room').css('background-color', 'white');
            //}
        });
    }
}

// This is the function to filter the sessions by Time.
var myArray = [];
function FilterSessionByTimings(hiddenValue, timing) {
    $("#txtSearch").val(''); // Sets the Search Text to empty, when the time filter is selected
    var val, hour, minutes, finaltime, item, time, meridian;

    time = timing.substr(0, 2);
    meridian = timing.substr(timing.indexOf(" ") + 1);
    if (time > "00" && time < "10") {
        val = time.substr(1, 1);
        hour = val;
        minutes = timing.substr(2, 4);
        finaltime = hour.concat(minutes + "" + meridian);
    } else {
        finaltime = timing;
    }
    myArray.push(finaltime);

    $('#sessionsTable > tbody  > tr').each(function () {
        item = $(this);
        for (var i = 0; i < myArray.length; i++) {
            if (item.find(".currentSessionDetails").text().search(new RegExp(finaltime, "g")) > 0) {
                item.css('background-color', 'white');
            }
        }
    });

    if (hiddenValue != 'Hide') {
        $('#sessionsTable > tbody > tr').each(function () {
            item = $(this);
            if (item.css('background-color') == "rgb(255, 255, 255)") {
                item.css('display', 'table-row');
            } else {
                item.css('display', 'none');
            }
        });
    }
    else {
        $('#sessionsTable > tbody > tr').each(function () {
            item = $(this);
            if (item.css('background-color') == "rgb(255, 255, 255)" && item.find(".currentSessionDetails").text().search(new RegExp(finaltime, "g")) > 0) {
                item.removeAttr('style');
                item.css('display', 'none');
            }
        });
    }

    // This piece of Code is fired when user first filter the sessions through keyword search
    // and then tries to filter it with the Time.
    // This below code shows all other sessions whose time filters are selected by default.
    if (searchFired == "Done") {
        $('#sessionsTable > tbody > tr').each(function () {
            item = $(this);
            if (item.css('background-color') == "rgb(255, 255, 255)") {
                item.css('display', 'table-row');
            }
        });
    }
}


$(document).ready(function () {

    $('.videoContentWrap').hide();

    //Hide sponsor side bar
    $("#sponsorSideBar1").hide();

    var loadLocal = $('a.loadLocal');

    if (loadLocal.length > 0) {
        loadLocal.cluetip({
            sticky: true,
            closePosition: 'title',
            closeText: 'Hide',
            onActivate: function (event) {
                $(document).trigger('hideCluetip');
                return true;
            },
            onShow: function (ct, ci) {
                var sessionId = $(ci.find('span')[0]).text();
                $.post('/rpc/Account/UpdateSessionInterestFast',
                    {
                        username: '@Model.LoggedInUsername',
                        sessionId: sessionId,
                        location: 'SessionHover'
                    });
            },
            fx: {
                open: 'fadeIn',
                openSpeed: '500'
            }
        });
    }
});
