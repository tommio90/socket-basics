var moment = require('moment');
var now = moment();




// console.log(now.format('X'));

// console.log(now.format('x'));


// console.log(now.valueOf(''));

var timestamp= 1477651386261;

var timestanpMoment = moment.utc(timestamp);

console.log(timestanpMoment.local().format(' h:mm:ss a'));



// console.log(now.format('MMMM Do YYYY, h:mm:ss a'));