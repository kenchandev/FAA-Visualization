var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('jade/dashboard', {title: 'Mayday - FAA Accident Visualization', csv_path: '../data/part_91_csv/data_1980_84.csv', years: [1980, 1984]});
});

module.exports = router;
