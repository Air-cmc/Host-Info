const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Hosts, Locations, ToKnow } = require('./Database');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use(express.static(path.join(__dirname, 'Public')));

app.get('/static', (req, res) => {
  res.sendFile(path.join(__dirname, 'Public', 'bundle.js'));
});

app.get('/hostInfo/:id', async (req, res) => {
  try {
    const data = await Hosts.findOne({ properties: req.params.id }).exec();
    res.status(200).send(data);
  } catch (err) {
    res.status(404).send(err);
  }
});

app.get('/location/:id', async (req, res) => {
  try {
    const data = await Locations.findOne({ properties: req.params.id }).exec();
    res.status(200).send(data);
  } catch (err) {
    res.status(404).send(err);
  }
});

app.get('/toKnow/:id', async (req, res) => {
  try {
    const data = await ToKnow.findOne({ id: req.params.id }).exec();
    res.status(200).send(data);
  } catch (err) {
    res.status(404).send(err);
  }
});

module.exports = app;
