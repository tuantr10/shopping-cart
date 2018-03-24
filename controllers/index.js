let index = (req, res, next) => {
  let masterData = require('../masterdata');
  console.log(masterData);
  res.render('index', { title: 'Viet Tran Yen', data: masterData });
};

module.exports = index;