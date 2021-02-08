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
  // select hostname, verified, photo, joindate, hostbio, reviews, contact, response from properties inner join hosts on hostsid = hostid where propertyid = $1
  /*    return new Promise ((resolve, reject) => {
      var queryString = 'select * from messages';

      db.query(queryString, (err, messages) => {
        if (err) {
          reject(err);
        } else {
          console.log(messages[0]);
          resolve(messages);
        } */

  getHostInfo(id) {
    return new Promise((resolve, reject) => {
      const query = {
        text: 'select * from hosts where hostsid = $1',
        values: [id],
      };
      client
        .query(query)
        .then((data) => {
          const splitResponse = data.rows[0].response.split('%');
          const restructuredResponse = data.rows[0];
          restructuredResponse.response = splitResponse;
          resolve(restructuredResponse);
          console.log('data retrieved successfully');
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  getLocationInfo(id, cb) {
    // select city, citystate, country, locdesc  from properties inner join locations on locationsid = locationid where propertyid = $1
    const query = {
      text: 'select * from locations where locationsid = $1',
      values: [id],
    };
    client
      .query(query)
      .then((data) => {
        cb(null, data.rows[0]);
        console.log('data retrieved successfully');
      })
      .catch((err) => {
        console.error(err);
      });
  },
  getKnowInfo(id, cb) {
    // select knowname, rules, health, cancelpolicy  from properties inner join toknow on toknowsid = toknowid where propertyid = $1
    const query = {
      text: 'select * from toknow where toknowsid = $1',
      values: [id],
    };
    client
      .query(query)
      .then((data) => {
        const splitRules = data.rows[0].rules.split('%');
        const stringRules = `${splitRules[0]}, ${splitRules[1]}`;
        const splitHealth = data.rows[0].health.split('%');
        const stringHealth = `${splitHealth[0]}, ${splitHealth[1]}`;
        const restructuredResponse = data.rows[0];
        restructuredResponse.rules = stringRules;
        restructuredResponse.health = stringHealth;
        cb(null, restructuredResponse);
        console.log('data retrieved successfully');
        cb(null, data.rows[0]);
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

//   const data = `INSERT INTO toknow("knowname", "rules", "health", "cancelpolicy") VALUES('the best place', '{"house": "[no rules]", "additional": "[still no rules]"}', '{"safety": "[poodle]", "acknowledge": "[noodle]"}', array['you can not cancel'])`;
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

//   const data = `INSERT INTO properties("locationid", "hostid", "toknowid") VALUES(1, 1, 1)`;
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
