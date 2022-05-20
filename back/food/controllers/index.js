const db = require('../config/firestore');

module.exports = {
  index: (req, res, next) => {
    res.status(200)
      .send('Welcome to the Sabana\'s food API')
      .end();
  }
};
