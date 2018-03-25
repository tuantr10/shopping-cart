let express = require('express');
let router = express.Router();
let productsController = require('../controllers/products');

/* GET products listing. */
router.get('/', productsController);

module.exports = router;
