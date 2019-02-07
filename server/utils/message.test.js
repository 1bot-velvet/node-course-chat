var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');


describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var from = 'bob101';
    var text = 'What is everyone doing?';
    var message = generateMessage(from, text);

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from, text})
  });
});


describe('generateLocationMessage', () => {
  it('Should generate correct location object', () => {
    var from = 'bob101';
    var latitude = '51.1111';
    var longitude = '-1.56665';
    var url = 'https://www.google.com/maps?q=51.1111,-1.56665';
    var message = generateLocationMessage(from, latitude, longitude);

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from, url});
  });
});


// from lat & longitude
