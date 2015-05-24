'use strict';


function SessionOverviewController(sessions, days, tracks, Speaker, times, $sce) {

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


    //var timesArray = [
    //    '9:00 AM'
    //];

    //var timesArray = [
    //    '8:00 AM', '8:30 AM',
    //    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM',
    //    '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM',
    //    '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM'
    //];

    var timesArray = [
        '8:00 AM','9:00 AM'
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

        // first create a list of sessions that are just for this day
        let sessionsDay = [];

        // create a list of tracks (times) for this day
        this.tracksValid = [];

        for (let i = 0; i < this.sessions.length; i++) {
            if (this.sessions[i].time.startTimeFriendlyDay === selDay) {
                sessionsDay.push(sessions[i]);
                if (this.tracksValid.indexOf(this.sessions[i].sessionTrackName) === -1) {
                    this.tracksValid.push(this.sessions[i].sessionTrackName);
                }
            }
        }

        // potentially later sort the tracks by name


        var getTrack = function (sessionTrackName, tracks) {
            for (let i = 0; i < tracks.length; i++) {
                if (sessionTrackName === tracks[i].named) {
                    return tracks[i];
                }
            }
        }


        this.sessionOverviewTrs = [];

        debugger;
        for (let i = 0; i < timesArray.length; i++) {
            let timex = timesArray[i];
            let sessionOverviewTds = [];
            sessionOverviewTds.push(timex);

            for (let i = 0; i < this.tracksValid.length; i++) {

                var trackx = this.tracksValid[i];
                var sessionFound = null;
                for (let k = 0; k < sessionsDay.length; k++) {
                    let sessionx = sessionsDay[k];
                    if (sessionx.time != null && timex === sessionx.time.startTimeFriendlyTime &&
                        trackx === sessionx.sessionTrackName) {
                        //console.log('      FOUND day:' + sessionx.time.startTimeFriendlyDay + " track:" + trackx.named);
                        sessionFound = sessionx;
                    }

                }

                if (sessionFound === null) {
                    //sessionOverviewTds.push("");
                } else {


                    let colorClass = "cal-entry--blue";
                    if (sessionFound.keyNote === true) {
                        colorClass = "cal-entry--green"
                    }

                    //console.log('      Pushing: day:' + sessionFound.time.startTimeFriendlyTime + " track:" + sessionFound.sessionTrackName + " sessionId:"+ sessionFound.id);
                    sessionOverviewTds.push({
                        id: sessionFound.id,
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


            }

            this.sessionOverviewTrs.push(sessionOverviewTds);


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
            for (let i = 0; i < this.sessionOverviewTrs.length; i++) {
                let sessionOverviewTr = this.sessionOverviewTrs[i];
                let sessionTime = sessionOverviewTr[0]; // each row is for one specific time


                for (let j = 1; j < sessionOverviewTr.length; j++) {
                    var sessionOverviewTrCol = sessionOverviewTr[j];
                    //console.log(sessionOverviewTrCol);

                    if (sessionOverviewTrCol && typeof(sessionOverviewTrCol) !== "string") {
                        if (sessionOverviewTrCol.length == undefined) { // must be a session

                            //if (sessionOverviewTrCol.id === 4751) {
                            //    debugger;
                            //}

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


            // build list of times we have in list
            this.sessionTimesFound = [];

            for (let j = 0; j < this.sessionOverviewMobile.length; j++) {
                let sessionTime = this.sessionOverviewMobile[j].sessionTime;
                if (this.sessionTimesFound.indexOf(sessionTime) === -1) {
                    this.sessionTimesFound.push(sessionTime);
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

    //let startDay = "Monday";
    let startDay = "Thursday";
    this.selectedDay = startDay;  // sets radio button to initial state
    this.generateTrs(startDay); // default to Monday, need to fix to default to current day if June 21-25
}
SessionOverviewController.$inject = ['sessions', 'days', 'tracks', 'Speaker', 'times', '$sce'];

export default SessionOverviewController;
