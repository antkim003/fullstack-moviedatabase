var router = require('express').Router();
var swig = require('swig');
var _db = require('../database');

module.exports = function() {
  router.use(function(err, req, res, next) {
    if (err) return err;

  });

  router.get('/', function(req,res,next) {
    res.render('layout');
  });

  router.get('/year', function(req,res,next) {
    var dataObj;
    _db.getYear(function(data) {
      console.log(data);
      dataObj = data;
      res.render('byYear', {movies: dataObj});
    });
    
    // document.getElementById('movieContainer').innerHTML('year');
  });

  router.get('/genre', function(req,res,next) {
    _db.getGenre(function(data) {
      console.log(data);
      dataObj = data;
      res.render('byGenre', {movies: dataObj});
    });
    // document.getElementById('movieContainer').innerHTML('genre');
  });


  return router;
};
