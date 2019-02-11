var moment = require('moment');

var currentTimestamp = moment().valueOf();

var generateMessage = (from, text) => {
  return {
    from,
    text,
    createdAt: currentTimestamp
  };
};

var generateLocationMessage = (from, latitude, longitude) => {
  return {
    from,
    url: `https://www.google.com/maps?q=${latitude},${longitude}`,
    createdAt: currentTimestamp
  }
}

module.exports = {generateMessage, generateLocationMessage};
