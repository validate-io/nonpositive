'use strict';

var isNonPositive = require( './../lib' );

console.log( isNonPositive( -Math.PI ) );
// returns true

console.log( isNonPositive( 0 ) );
// returns true

console.log( isNonPositive( 1 ) );
// returns false
