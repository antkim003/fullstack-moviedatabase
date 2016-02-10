var _db;

module.exports = {
  set: function(db) {
    _db = db;
  },
  getYear: function(cb) {
    // _db.serialize(function() {
    //     _db.each("SELECT movies.year, movies.name FROM movies LIMIT 10", function(err,row) {
    //       output = row;
    //       return output
    //     });
    //     console.log(_)
    // });
    // _db.close();

    _db.all("SELECT movies.year, movies.name FROM movies GROUP BY movies.year ORDER BY movies.year LIMIT 50", function(err,row) {
      if (err) console.log(err);
      cb(row);
    });
  },

  getGenre: function(cb) {
    _db.all("SELECT mg.genre FROM movies_genres mg GROUP BY mg.genre ORDER BY mg.genre LIMIT 50", function(err,row) {
      if (err) console.log(err);
      cb(row);
    });
  }
}
