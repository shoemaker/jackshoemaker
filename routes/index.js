
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { year: new Date().getFullYear() });
};

exports.foo = function(req, res){
  res.render('foo', { });
};