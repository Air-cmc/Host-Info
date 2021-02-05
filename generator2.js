/* eslint-disable no-plusplus */
const fs = require('fs');
const faker = require('faker');
const { argv } = require('yargs');

const lines = argv.lines || 1000000;
const filename = argv.output || 'locations.csv';
const stream = fs.createWriteStream(filename);

const startWriting = (writeStream, encoding, done) => {
  let i = lines;
  let id = 0;
  function writing() {
    const canWrite = true;
    do {
      id++;
      i--;
      const locationsid = id;
      const city = faker.address.city();
      const citystate = faker.address.state();
      const country = faker.address.county();
      const locdesc = faker.lorem.paragraph();
      const location = `${locationsid},${city},${citystate},${country},${locdesc}\n`;
      // check if i === 0 so we would write and call `done`
      if (i === 0) {
        // we are done so fire callback
        writeStream.write(location, encoding, done);
      } else {
        // we are not done so don't fire callback
        writeStream.write(location, encoding);
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
stream.write('locationsid,city,citystate,country,locdesc\n', 'utf-8');
// invoke startWriting and pass callback
startWriting(stream, 'utf-8', () => {
  stream.end();
});
