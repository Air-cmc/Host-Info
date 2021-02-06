/* eslint-disable no-plusplus */
const fs = require('fs');
const faker = require('faker');
const { argv } = require('yargs');

const lines = argv.lines || 1000000;
const filename = argv.output || 'toknow.csv';
const stream = fs.createWriteStream(filename);

const startWriting = (writeStream, encoding, done) => {
  let i = lines;
  let id = 0;
  function writing() {
    const canWrite = true;
    do {
      id++;
      i--;
      const toknowsid = id;
      const knowname = faker.lorem.sentence();
      const rules = 'Not suitable for children and infants%No pets and No smoking';
      const health = 'Committed to Airbnb enhanced cleaning process%Must climb stairs';
      const cancelpolicy = 'Free cancellation for 48hrs';
      const toknow = `${toknowsid},${knowname},${rules},${health},${cancelpolicy}\n`;
      // check if i === 0 so we would write and call `done`
      if (i === 0) {
        // we are done so fire callback
        writeStream.write(toknow, encoding, done);
      } else {
        // we are not done so don't fire callback
        writeStream.write(toknow, encoding);
      }
      // else call write and continue looping
    } while (i > 0 && canWrite);
    if (i > 0 && !canWrite) {
      // our buffer for stream filled and need to wait for drain
      // Write some more once it drains.
      writeStream.once('drain', writing);
    }
  }
  writing();
};

// write our `header` line before we invoke the loop
stream.write('toknowsid,knowname,rules,health,cancelpolicy\n', 'utf-8');
// invoke startWriting and pass callback
startWriting(stream, 'utf-8', () => {
  stream.end();
});
