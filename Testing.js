const queries = require('./database2');

queries.getLocationInfo(2, (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});
queries.getHostInfo(2, (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});
queries.getKnowInfo(2, (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});
