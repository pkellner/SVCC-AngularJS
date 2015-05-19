'use strict';

function SessionOverviewController(sessions, days, tracks, Speaker, times,$sce) {

    const scheduled = sessions.filter(s => s.time);
    const unscheduled = sessions.filter(s => !s.time);



    this.sessions = scheduled.concat(unscheduled);
    this.days = days;
    this.day = days[0];
    this.tracks = tracks;
    this.track = undefined;

    this.justDays = [];
    for (let i = 1; i < this.days.length; i++) {
        this.justDays.push(this.days[i]);
    }

    this.sessions.reduce(function (speakers, session) {
        speakers.push.apply(speakers, session.speakersList);
        return speakers;
    }, [])
        .forEach(function (speaker) {
            speaker.$stateParams = function () {
                const url = this.speakerLocalUrl.replace('/Presenter/', '').toLowerCase();
                return Speaker.parseUrl(url);
            };
        });

    this.filter = (session) => {
        if (this.day.dayOfWeek !== 'Show All') {
            const dayIndex = new Date(session.sessionTimeDateTime).getDay();
            if (!this.day.is(dayIndex)) return;
        }
        return true;
    };


    var timesArray = [
        '8:00 AM', '8:30 AM',
        '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM',
        '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM',
        '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM'
    ];

    //var timesArray = [
    //    '9:00 AM', '10:30 AM',
    //    '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM'
    //];

    //var timesArray = [
    //    '8:00 AM', '8:30 AM',
    //    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM',
    //    '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM',
    //    '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM'
    //];


    this.generateTrs = function (selDay) {

        this.sessionOverviewTrs = [];
        for (let i = 0; i < timesArray.length; i++) {
            var timex = timesArray[i];
            var sessionOverviewTds = [];
            sessionOverviewTds.push(timex);
            for (let j = 0; j < this.tracks.length; j++) {
                let trackx = this.tracks[j];
                let sessionFound = null;


                for (let k = 0; k < this.sessions.length; k++) {
                    let sessionx = this.sessions[k];
                    if (sessionx.time != null) {
                        //console.log(timex + ":" + sessionx.time.startTimeFriendlyTime + "::" + trackx.named + ":" + sessionx.sessionTrackName);
                    }

                    if (sessionx.time != null && timex === sessionx.time.startTimeFriendlyTime &&
                        trackx.named === sessionx.sessionTrackName &&
                        sessionx.time.startTimeFriendlyDay === selDay) {
                        //console.log('      FOUND day:' + sessionx.time.startTimeFriendlyDay + " track:" + trackx.named);
                        sessionFound = sessionx;
                    }
                }

                if (sessionFound === null) {
                    sessionOverviewTds.push("");
                } else {
                    if (sessionFound.time.startTimeFriendlyDay == selDay) {
                        //console.log("        pushing startTimeFriendlyDay:" + sessionFound.time.startTimeFriendlyDay + ":" + sessionFound.sessionTrackName + ":" + sessionFound.time.sessionMinutes);
                        let colorClass = "cal-entry--blue";
                        if (sessionFound.keyNote === true) {
                            colorClass = "cal-entry--green"
                        }

                        //console.log('      Pushing: day:' + sessionFound.time.startTimeFriendlyTime + " track:" + sessionFound.sessionTrackName);
                        sessionOverviewTds.push({
                            title: sessionFound.title,
                            description: sessionFound.description,
                            descriptionShort: sessionFound.descriptionShort,
                            minutes: sessionFound.time.sessionMinutes,
                            rowspan: sessionFound.time.sessionMinutes / 30,
                            sessionTimeDescription: sessionFound.time.description,
                            startTimeFriendlyTime: sessionFound.time.startTimeFriendlyTime,
                            colorClass: colorClass,
                            speakersNamesCsv: sessionFound.speakersNamesCsv,
                            sessionTrackName: sessionFound.sessionTrackName,
                            sessionUrl: sessionFound.sessionUrl
                        });
                    }
                    else {
                        sessionOverviewTds.push("");
                    }
                }
            }
            this.sessionOverviewTrs.push(sessionOverviewTds);
        }




        // chop sessionOverviewTds to get rid of empty rows
        if (this.sessionOverviewTrs && this.sessionOverviewTrs.length > 0) {
            // build list of tracks that actually have sessions
            this.tracksValid = [];
            for (let i = 0; i < this.sessionOverviewTrs.length; i++) {
                var tds = this.sessionOverviewTrs[i];
                if (tds && tds.length > 0) {
                    for (let j = 0; j < tds.length; j++) {
                        if (tds[j].length == undefined) {
                            if (this.tracksValid.indexOf(tds[j].sessionTrackName) === -1) {
                                this.tracksValid.push(tds[j].sessionTrackName)
                            }
                        }
                    }
                }
            }

            // now we have track names, let's figure out what columns those are.
            this.trackColumnsValid = [0]; // time is always a valid column
            for (let i = 0; i < this.tracksValid.length; i++) {
                for (let j=0;j<this.tracks.length;j++){
                    if (this.tracks[j].named === this.tracksValid[i]){
                        this.trackColumnsValid.push(j+1); // shift 1 for time column
                        break;
                    }
                }
            }
            // just include the columns that have values
            this.sessionOverviewTrsNew = [];
            for (let i = 0; i < this.sessionOverviewTrs.length; i++) {
                let trs = this.sessionOverviewTrs[i];
                let trsNew = [];
                trsNew.push(trs[0]); // always push time column
                for (let k = 0; k < this.trackColumnsValid.length; k++) {
                    var colToInclude = this.trackColumnsValid[k] + 1; // always shift over 1 because time is first column
                    trsNew.push(trs[colToInclude]);
                }
                this.sessionOverviewTrsNew.push(trsNew);
            }
            //console.log('sessionOverviewTrs.length: ' + this.sessionOverviewTrs.length);
            for (let k=0;k<this.sessionOverviewTrs.length;k++) {
                //console.log('sessionOverviewTrs[' + k + '].length: ' + this.sessionOverviewTrs[k].length + ' time: ' + this.sessionOverviewTrs[k][0]);
            }
            this.sessionOverviewTrs = this.sessionOverviewTrsNew;

            for (let i=0;i<this.sessionOverviewTrs.length;i++) {
                $sce.trustAsHtml(this.sessionOverviewTrs[i].description);
            }

            // now make a mobile version of the list that is just one long column versus 2d
            // that is, for each day:
            //   trackname1
            //      9:00 xxx
            //     10:00 yyy
            //   trackname2
            //     9:00 xxxx
            //     10:00 yyyy
            //     ...

            this.sessionOverviewMobile = [];
            for (let i=0;i<this.sessionOverviewTrs.length;i++) {
                let sessionOverviewTr = this.sessionOverviewTrs[i];
                let sessionTime = sessionOverviewTr[0]; // each row is for one specific time


                for (let j = 1; j < sessionOverviewTr.length; j++) {
                    var sessionOverviewTrCol = sessionOverviewTr[j];
                    //console.log(sessionOverviewTrCol);

                    if (sessionOverviewTrCol && typeof(sessionOverviewTrCol) !== "string") {
                        if (sessionOverviewTrCol.length == undefined) { // must be a session
                            this.sessionOverviewMobile.push({
                                sessionTime: sessionTime,
                                title: sessionOverviewTrCol.title,
                                description: sessionOverviewTrCol.description,
                                descriptionShort: sessionOverviewTrCol.descriptionShort,
                                minutes: sessionOverviewTrCol.minutes,
                                speakersNamesCsv: sessionOverviewTrCol.speakersNamesCsv,
                                sessionTrackName: sessionOverviewTrCol.sessionTrackName,
                                sessionUrl: sessionOverviewTrCol.sessionUrl
                            })
                        }
                    } else {
                        //debugger;
                    }
                }
            }

            // DEBUGGING OUT ONLY
            //for (let i=0;i<this.tracksValid.length;i++) {
            //    console.log("TRACK: " +  this.tracksValid[i]);
            //    for (let j = 0; j < this.sessionOverviewMobile.length; j++) {
            //        console.log(j + " SESSIONTRACK: " + this.sessionOverviewMobile[j].sessionTrackName);
            //        if (this.tracksValid[i] === this.sessionOverviewMobile[j].sessionTrackName){
            //            console.log(i + ":" + j + j + " track: " + this.sessionOverviewMobile[j].sessionTrackName + ":" + this.tracksValid[i]);
            //        }
            //    }
            //}
        }


    };

    let startDay = "Monday";
    this.selectedDay = startDay;  // sets radio button to initial state
    this.generateTrs(startDay); // default to Monday, need to fix to default to current day if June 21-25
}
SessionOverviewController.$inject = ['sessions', 'days', 'tracks', 'Speaker', 'times','$sce'];

export default SessionOverviewController;
