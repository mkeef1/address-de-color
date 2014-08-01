'use strict';

module.exports = function(app){
  app.set('views', __dirname + '/../views');
  app.set('view engine', 'jade');

  console.log('express is configured');
};

