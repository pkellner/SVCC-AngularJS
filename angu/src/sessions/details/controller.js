'use strict';

import angular from 'angular';
import list from 'listify';

function convertDateToGCalString(date){
  var d = date;
  var s="";
  s += d.getUTCFullYear();
  s += ("0" + (d.getUTCMonth() +　1)).slice(-2);
  s += ("0" + (d.getUTCDate())).slice(-2);
  s += 'T';
  s += ("00" + (d.getUTCHours())).slice(-2);
  s += ("00" + (d.getUTCMinutes())).slice(-2);
  s += ("00" + (d.getUTCSeconds())).slice(-2);
  s += 'Z';
  return s;
}

function SessionDetailsController (session, Speaker, config) {
  this.session = session;

  var sessionStartDate = new Date(session.time.startTime.replace("T"," ").replace(/Z+$/, " PDT"));
  var sessionStartDateGCalString=convertDateToGCalString(sessionStartDate);
  
  var sessionEndDate = new Date(sessionStartDate.getTime() + session.time.sessionMinutes*60000);  
  var sessionEndDateGCalString=convertDateToGCalString(sessionEndDate);

    
  var gCalLink = 'http://www.google.com/calendar/event?action=TEMPLATE';
  gCalLink += '&dates='+sessionStartDateGCalString; 
  gCalLink += '%2f'+sessionEndDateGCalString;
  gCalLink += '&sprop=website%3ahttps%3a%2f%2fangularu.com&sprop=name:Angular+U';
  gCalLink += '&text=Angular+U+-+'+encodeURIComponent(session.title)+'+by+'+encodeURIComponent(session.speakersShort.replace(/,+$/, ""));
  gCalLink += '&location='+encodeURIComponent('Hyatt Regency San Francisco Airport 1333 Old Bayshore Hwy Burlingame, CA 94010');
  gCalLink += '&details='+encodeURIComponent('For full details see:\nhttps://angularu.com/ng/' + session.sessionUrlPre);
  gCalLink += '%0A%0ARoom%3A%0A'+encodeURIComponent(session.track.named);
  this.session.gCalLink = gCalLink;	

  this.speakers = session.speakersList.map((speaker) => {
    return angular.extend(speaker, {
      name: `${speaker.userFirstName} ${speaker.userLastName}`,
      bio: speaker.userBio,
      bioShort: speaker.userBioShort,
      $stateParams () {
        const url = this.speakerLocalUrl.replace('/Presenter/', '').toLowerCase();
        return Speaker.parseUrl(url);
      }
    });
  });
  this.byline = list(this.speakers.map(s => s.name));
  this.showSchedule = config.schedule.show;
  
}
SessionDetailsController.$inject = ['session', 'Speaker', 'config'];

export default SessionDetailsController;
