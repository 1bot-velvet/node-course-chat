//jan 1st 1970 00:00:00
var moment = require('moment');

//new Date().getTime();
var someTimestamp = moment().valueOf();
console.log(someTimestamp);


var createdAt = 1234567;
var date = moment(createdAt);
console.log(date.format('h:mm a'));
