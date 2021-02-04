-- Since we might run the import many times we'll drop if exists
DROP DATABASE IF EXISTS hostinfo;

CREATE DATABASE hostinfo;

\c hostinfo;




CREATE TABLE IF NOT EXISTS hosts (
  hostid SERIAL PRIMARY KEY,
  hostname VARCHAR,
  verified BOOLEAN,
  photo VARCHAR,
  joindate VARCHAR,
  hostbio VARCHAR,
  reviews INTEGER,
  contact JSON,
  response JSON,
  property INTEGER

);


CREATE TABLE IF NOT EXISTS locations (
  locationsid SERIAL PRIMARY KEY,
  city VARCHAR,
  citystate VARCHAR,
  country VARCHAR,
  locdesc VARCHAR,
  property INTEGER
);

CREATE TABLE IF NOT EXISTS toknow (
  toknowid SERIAL PRIMARY KEY,
  knowname VARCHAR,
  rules JSON,
  health JSON,
  cancelpolicy TEXT[],
  property INTEGER
);




