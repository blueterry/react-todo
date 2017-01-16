var moment = require('moment');

console.log(moment().format());
console.log(moment());

var now = moment();

console.log('Current timestamp', now.unix());

var timestamp = 1484575611;
var currentMoment = moment.unix(timestamp);
console.log('Current Moment:', currentMoment.format());
console.log('Current Moment:', currentMoment.format('MMM D, YYYY @ h:mm a'));
console.log('Current Moment:', currentMoment.format('MMMM Do, YYYY @ hh:mm:ss A'));

console.log('Current Moment:', currentMoment.format('D'));

