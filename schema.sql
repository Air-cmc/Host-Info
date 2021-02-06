-- Since we might run the import many times we'll drop if exists
DROP DATABASE IF EXISTS hostinfo;

CREATE DATABASE hostinfo;

\c hostinfo;




CREATE TABLE IF NOT EXISTS hosts (
  hostsid BIGINT PRIMARY KEY,
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
  locationsid BIGINT PRIMARY KEY,
  city VARCHAR,
  citystate VARCHAR,
  country VARCHAR,
  locdesc VARCHAR
);

CREATE TABLE IF NOT EXISTS toknow (
  toknowsid BIGINT PRIMARY KEY,
  knowname VARCHAR,
  rules VARCHAR,
  health VARCHAR,
  cancelpolicy VARCHAR
);

CREATE TABLE IF NOT EXISTS properties (
  propertyid BIGINT PRIMARY KEY,
  locationid BIGINT,
  hostid BIGINT,
  toknowid BIGINT,
  FOREIGN KEY (locationid) REFERENCES locations(locationsid),
   FOREIGN KEY (hostid) REFERENCES hosts(hostsid),
   FOREIGN KEY (toknowid) REFERENCES toknow(toknowsid)

);






