-- Since we might run the import many times we'll drop if exists
DROP DATABASE IF EXISTS hostinfo;

CREATE DATABASE hostinfo;

\c hostinfo;




CREATE TABLE IF NOT EXISTS hosts (
  hostsid INTEGER PRIMARY KEY,
  hostname VARCHAR,
  verified BOOLEAN,
  photo VARCHAR,
  joindate VARCHAR,
  hostbio VARCHAR,
  reviews INTEGER,
  contact VARCHAR,
  response VARCHAR

);


CREATE TABLE IF NOT EXISTS locations (
  locationsid INTEGER PRIMARY KEY,
  city VARCHAR,
  citystate VARCHAR,
  country VARCHAR,
  locdesc VARCHAR
);

CREATE TABLE IF NOT EXISTS toknow (
  toknowsid INTEGER PRIMARY KEY,
  knowname VARCHAR,
  rules VARCHAR,
  health VARCHAR,
  cancelpolicy VARCHAR
);

-- CREATE TABLE IF NOT EXISTS properties (
--   propertyid INTEGER PRIMARY KEY,
--   locationid INTEGER,
--   hostid INTEGER,
--   toknowid INTEGER,
--   FOREIGN KEY (locationid) REFERENCES locations(locationsid),
--    FOREIGN KEY (hostid) REFERENCES hosts(hostsid),
--    FOREIGN KEY (toknowid) REFERENCES toknow(toknowsid)

-- );






