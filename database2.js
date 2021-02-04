/* eslint-disable max-len */
const { Client } = require('pg');

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'hostinfo',
  password: 'Turkey1!',
  port: 5432,
});

client.connect();

module.exports = {
  getHostInfo(id, cb) {
    const query = {
      text: 'select * from hosts where property = $1',
      values: [id],
    };
    client
      .query(query)
      .then((data) => {
        cb(data.rows[0]);
        console.log('data retrieved successfully');
      })
      .catch((err) => {
        console.error(err);
      });
  },
  getLocationInfo(id, cb) {
    const query = {
      text: 'select * from locations where property = $1',
      values: [id],
    };
    client
      .query(query)
      .then((data) => {
        cb(data.rows[0]);
        console.log('data retrieved successfully');
      })
      .catch((err) => {
        console.error(err);
      });
  },
  getKnowInfo(id, cb) {
    const query = {
      text: 'select * from toknow where property = $1',
      values: [id],
    };
    client
      .query(query)
      .then((data) => {
        cb(data.rows[0]);
        console.log('data retrieved successfully');
      })
      .catch((err) => {
        console.error(err);
      });
  },

};
// queries are queued and executed one after another once the connection becomes available

// const data = `INSERT INTO locations("city", "citystate", "country", "locdesc", "property") VALUES('boulder', 'colorado', 'us', 'good', 2)`;
// client
//   .query(data)
//   .then(() => {
//     console.log('item inserted successfully');
//   })
//   .catch((err) => {
//     console.error(err);
//   })
//   .finally(() => {
//     client.end();
//   });

// const data = `INSERT INTO hosts("hostname", "verified", "photo", "joindate", "hostbio", "reviews", "contact", "response", "property") VALUES('Bob Marley', true, 'jamaica', 'today', 'nice', 2, '{"email": "bob@hi.com", "phone": "3364"}', '{"rate": "100", "time": "quick"}', 2)`;
// client
//   .query(data)
//   .then(() => {
//     console.log('item inserted successfully');
//   })
//   .catch((err) => {
//     console.error(err);
//   })
//   .finally(() => {
//     client.end();
//   });

//   const data = `INSERT INTO toknow("knowname", "rules", "health", "cancelpolicy", "property") VALUES('the best place', '{"house": "[no rules]", "additional": "[still no rules]"}', '{"safety": "[poodle]", "acknowledge": "[noodle]"}', array['you can not cancel'], 2)`;
// client
//   .query(data)
//   .then(() => {
//     console.log('item inserted successfully');
//   })
//   .catch((err) => {
//     console.error(err);
//   })
//   .finally(() => {
//     client.end();
//   });

// const query = client.query('SELECT * FROM locations');
// fired after last row is emitted
