 function homePageDate (thiskeyword) {
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var newformat = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  thiskeyword.time = hours + ":" + minutes + " " + newformat;
  thiskeyword.date =
    new Date().getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear();
};

function lockScreenDate(){
  let currentDate = new Date();
  let time = currentDate.getHours() + ":" + currentDate.getMinutes() ;
return time
  }

export {homePageDate, lockScreenDate};