let index = (req, res, next) => {
  let masterData = require('../masterdata');
  res.render('index', { title: 'Viet Tran Yen', data: masterData, isLandingPage: true });
};

module.exports = index;