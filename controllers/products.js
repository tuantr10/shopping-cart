let products = (req, res, next) => {
  let masterData = require('../masterdata');
  res.render('products', { title: 'Viet Tran Yen', data: masterData });
};

module.exports = products;