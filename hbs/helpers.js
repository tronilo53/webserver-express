const hbs = require( 'hbs' );

//Helpers;
hbs.registerHelper( 'getAnio', () => new Date().getFullYear() );