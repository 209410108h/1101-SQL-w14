var express = require('express');
var router = express.Router();
const crown2Controller_xx = require('../controllers/crown_xx/crown2Controller_xx');

/*CREATE*/
router.post('/create',crown2Controller_xx.createProducts);

/* GET home page. */
router.get('/', crown2Controller_xx.getCategories);
router.get('/shop_xx', crown2Controller_xx.getShop);
router.get('/shop_xx/:category', crown2Controller_xx.getProductsByCategory);

/*UPDATE*/
router.post('/update',crown2Controller_xx.updateProducts);

/*DELETE*/
router.get('/delete/:id', crown2Controller_xx.deleteProduct);

module.exports = router;
