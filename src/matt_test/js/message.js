
// Get a reference to the root of the chat data.
var messagesRef = new Firebase('https://studywithme.firebaseio.com/messages/');
var lat = 0;
var lon = 0;

function post(){
    if (navigator.geolocation){
		navigator.geolocation.getCurrentPosition(showPosition);
    }
 }

function update(){
	var UID = 11; //userID 
	var CID = 1; //classID
	var text = $('#messageInput').val();
	var time = getTime();
  var date = getDate();
	messagesRef.push({userID:UID, classID: CID, lat:lat, lon:lon, text:text, time:time, date:date});
	$('#messageInput').val('');
}

function showPosition(position, cb)
{
	lat = position.coords.latitude;
	lon = position.coords.longitude;
	update();
}

function getTime(){
    var date = new Date();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var half = '';
    var time = '';
    if(hour < 12)
    {
      if(hour == 0)
      {
        hour = 12;
      }
        half = 'AM';
    }
    else
    {
      if(hour != 12)
      {
        hour = hour - 12;  
      }
      half = 'PM';
    }
    if(min < 10)
    {
      time = '' + hour + ':' + '0' + min + half; //+ ':' + sec + half;
    }
    else
    {
      time = '' + hour + ':' + min + half; // + ':' + sec + half;
    }
	return time;
}

function getDate(){
  var date = new Date();
  var year = date.getFullYear();
  var month = date.getMonth();
  var day = date.getDate();
  return ('' + month + '/'+ day + '/' (year % 100));
}

