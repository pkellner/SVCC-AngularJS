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
    //for (let i = 1; i < this.days.length; i++) {
    for (let i = 1; i < 3; i++) { // just do mon/tue
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

    var timesArray = [
        '8:00 AM', '8:30 AM',
        '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM',
        '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM',
        '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM'
    ];

    //var timesArray = [
    //    '8:00 AM', '9:00 AM'
    //];

    //var timesArray = [
    //    '9:00 AM', '10:30 AM',
    //    '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM'
    //];


    this.generateTrs = function (selDay) {

        function createArray(length) {
            var arr = new Array(length || 0),
                i = length;

            if (arguments.length > 1) {
                var args = Array.prototype.slice.call(arguments, 1);
                while (i--) arr[length - 1 - i] = createArray.apply(this, args);
            }
            return arr;
        }

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

        this.tracksValid.sort();

        let overviewMatrix = createArray(timesArray.length, this.tracksValid.length);
        for (let i = 0; i < timesArray.length; i++) {
            overviewMatrix[i][0] = timesArray[i];
            for (let j = 0; j < this.tracksValid.length; j++) {
                overviewMatrix[i][j] = {
                    id: 0,
                    title: "",
                    description: "",
                    descriptionShort: "",
                    minutes: 30,
                    rowspan: 1,
                    sessionTimeDescription: "",
                    startTimeFriendlyTime: "",
                    colorClass: "",
                    speakersNamesCsv: "",
                    sessionTrackName: "",
                    sessionUrl: ""
                };
            }
        }

        for (let i = 0; i < timesArray.length; i++) {
            let timex = timesArray[i];
            for (let j = 0; j < this.tracksValid.length; j++) {
                let trackx = this.tracksValid[j];
                let sessionFound = null;
                for (let k = 0; k < sessionsDay.length; k++) {
                    let sessionx = sessionsDay[k];
                    if (sessionx.time != null && timex === sessionx.time.startTimeFriendlyTime &&
                        trackx === sessionx.sessionTrackName) {
                        sessionFound = sessionx;
                    }
                }

                if (sessionFound != null) {
                    let colorClass = "cal-entry--blue";
                    if (sessionFound.keyNote === true) {
                        colorClass = "cal-entry--green"
                    }
                    var sRec = {
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
                    };
                    overviewMatrix[i][j] = sRec; // allow for time column
                }
            }
        }


        this.sessionOverviewTrs = [];
        for (let i = 0; i < timesArray.length; i++) {
            let sessionOverviewTds = [];
            sessionOverviewTds.push(timesArray[i]);
            for (let j = 0; j < this.tracksValid.length; j++) {
                sessionOverviewTds.push(overviewMatrix[i][j]);
            }
            this.sessionOverviewTrs.push(sessionOverviewTds);
        }


        //this.sessionOverviewTrs.push(sessionOverviewTds);


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

                if (sessionOverviewTrCol.title.length > 0) {
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
            }
        }
        //
        //
        //// build list of times we have in list
        this.sessionTimesFound = [];
        for (let j = 0; j < this.sessionOverviewMobile.length; j++) {
            let sessionTime = this.sessionOverviewMobile[j].sessionTime;
            if (this.sessionTimesFound.indexOf(sessionTime) === -1) {
                this.sessionTimesFound.push(sessionTime);
            }
        }


    };

    let startDay = "Monday";
    //let startDay = "Thursday";
    this.selectedDay = startDay;  // sets radio button to initial state
    this.generateTrs(startDay); // default to Monday, need to fix to default to current day if June 21-25
}
SessionOverviewController.$inject = ['sessions', 'days', 'tracks', 'Speaker', 'times', '$sce'];

export default SessionOverviewController;
