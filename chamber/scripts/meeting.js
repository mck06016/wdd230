const meeting = document.getElementById("banner-content");

const currentDate = new Date();

const dayOfWeek = currentDate.getDay();

let alertMeeting; 

switch (dayOfWeek){
  case 0:
    alertMeeting = "";
    break;
  case 1: 
    alertMeeting = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";
    break;
  case 2: 
    alertMeeting = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";
    break;
  case 3:
    alertMeeting = "";
    break;
  case 4:
    alertMeeting = "";
    break;
  case 5:
    alertMeeting = "";
    break;
  case 6:
    alertMeeting = "";
    break;
}
meeting.innerHTML = alertMeeting;
console.log(alertMeeting);

//"🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m."