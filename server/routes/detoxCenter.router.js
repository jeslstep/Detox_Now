const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


/**
 * GET route for detoxinfo by id
 */
router.get('/detoxinfo', (req, res) => {
    console.log('GET request for all detox info');
    let sqlText = `SELECT * FROM "detox" ORDER BY detox_id DESC;
     `;
    pool.query(sqlText)
        .then((result) => {
            res.send(result.rows);
            console.log(result.rows);
        })
        .catch((error) => {
            console.log('error', error);
            res.sendStatus(500);
        })
});


/**
 * GET route for detoxinfo by id
 */
router.get('/detoxinfo/:id', (req, res) => {
    let detox_id = req.params.id;
    console.log('GET request for id', detox_id);
    let sqlText = `SELECT * FROM "detox" WHERE detox_id = $1;;
     `;
    pool.query(sqlText, [detox_id])
        .then((result) => {
            res.send(result.rows);
            console.log(result.rows);
        })
        .catch((error) => {
            console.log('error', error);
            res.sendStatus(500);
        })
});

/**
 * GET route for detoxinfo by id
 */
router.get('/mincurrentbeds', (req, res) => {
    let sqlText = `SELECT "detox_center_name", "address", "lat", "lng","current_bed_count" FROM detox
ORDER BY current_bed_count LIMIT 1;`
    pool.query(sqlText)
        .then((result) => {
            console.log(result.rows[0]);
            res.send(result.rows[0]);
           
        })
        .catch((error) => {
            console.log('error', error);
            res.sendStatus(500);
        })
});

/**
 * PUT route for for increasing current_bed_count
 */
router.put('/increase/:id', (req, res) => {
    let reqId = req.params.id;
    console.log('PUT increase request for id', reqId);
    let sqlText = 'UPDATE "detox" SET current_bed_count= current_bed_count + 1 WHERE detox_id=($1) RETURNING current_bed_count;'
    pool.query(sqlText, [reqId])
    .then((result) => {
            console.log('result:', result.rows);
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(error);
            res.sendStatus(500);
        })

});


/**
 * PUT route for for decreasing current_bed_count
 */
router.put('/decrease/:id', (req, res) => {
    let reqId = req.params.id;
    console.log('PUT decrease request for id', reqId);
    let sqlText = 'UPDATE "detox" SET current_bed_count= current_bed_count - 1 WHERE detox_id=($1) RETURNING current_bed_count;'
    pool.query(sqlText, [reqId])
    .then((result) => {
            console.log('result:', result.rows);
             res.send(result.rows);
        })
        .catch((error) => {
            console.log(error);
            res.sendStatus(500);
        })

});

module.exports = router;