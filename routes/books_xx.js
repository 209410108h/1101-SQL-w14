var express = require('express');
var router = express.Router();

const db = require('../utils/database');

/* GET home page. */
router.get('/', async function (req, res, next) {
    let data;
    try {
        const results = await db.query('SELECT * FROM book_xx')
        data = results.rows;
        console.log('data', JSON.stringify(data));
        res.render('books', {data});
    }   catch (err) {
        console.log('Errors on getting books!');
        res.render('books', {data: ''});
    }
});

/*DELETE */
router.get('/delete/:id', async (req, res) => {
    try {
        console.log('id', req.params.id);
        const id = req.params.id;
        const query = {
            text: `DELETE FROM book_xx WHERE id = $1;`,
            values: [req.params.id]
        }
        const results = await db.query(query);
        res.redirect('/books');
    }   catch (err) {
        console.log (err)
    }
})

module.exports = router;
