/* eslint-disable no-unused-vars */
const newrelic = require('newrelic');
const compression = require('compression');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const queries = require('./database2');

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());
app.use(compression());

app.use(express.static(path.join(__dirname, 'Public')));

app.get('/static', (req, res) => {
  res.sendFile(path.join(__dirname, 'Public', 'bundle.js'));
});

app.get('/hostInfo/:id', async (req, res) => {
  await queries.getHostInfo(req.params.id)
    .then((host) => { res.status(200).json(host); })
    .catch((err) => {
      res.status(400).json(err);
    });
});

app.get('/location/:id', (req, res) => {
  queries.getLocationInfo(req.params.id, (err, data) => {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).json(data);
    }
  });
});

app.get('/toKnow/:id', async (req, res) => {
  queries.getKnowInfo(req.params.id, (err, data) => {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).json(data);
    }
  });
});

module.exports = app;
