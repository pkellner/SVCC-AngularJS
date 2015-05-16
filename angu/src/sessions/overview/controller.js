'use strict';

function SessionOverviewController(sessions, days, tracks, Speaker, times) {

    const scheduled = sessions.filter(s => s.time);
    const unscheduled = sessions.filter(s => !s.time);

    this.sessions = scheduled.concat(unscheduled);
    this.days = days;
    this.day = days[0];
    this.tracks = tracks;
    this.track = undefined;

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
        if (this.track && this.track.id !== session.sessionTrackId) {
            return;
        }
        return true;
    };


    var timesArray = [
        '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM',
        '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM',
        '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM'
    ];

    //var timesArray = [
    //     '1:30 PM'
    //];

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

                if (sessionx.time != null && timex === sessionx.time.startTimeFriendlyTime && trackx.named === sessionx.sessionTrackName) {
                    //console.log('      FOUND ' + sessionx.time.startTimeFriendlyDay);
                    sessionFound = sessionx;
                }
            }


            if (sessionFound === null) {
                sessionOverviewTds.push("");
            } else {
                if (sessionFound.time.startTimeFriendlyDay == "Tuesday") {
                    console.log("     startTimeFriendlyDay:" + sessionFound.time.startTimeFriendlyDay + ":" + sessionFound.time.sessionMinutes );

                    sessionOverviewTds.push({
                        title: sessionFound.title,
                        description: sessionFound.descriptionShort,
                        minutes: sessionFound.time.sessionMinutes,
                        rowspan: sessionFound.time.sessionMinutes/30,
                        colorClass: sessionFound.title == "Angular 2 Forms" ? "cal-entry--blue" : "def",
                        speakerCsv: sessionFound.speakersNamesCsv
                    });
                }
                else {
                    sessionOverviewTds.push("");
                }
            }

        }
        this.sessionOverviewTrs.push(sessionOverviewTds);

    }
    //debugger;


}
SessionOverviewController.$inject = ['sessions', 'days', 'tracks', 'Speaker', 'times'];

export default SessionOverviewController;
