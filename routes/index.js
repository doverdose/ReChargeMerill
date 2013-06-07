
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'ReCharge' }, function(err, html){
  	console.log('Index rendering error.');
  });
};