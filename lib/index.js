/**
*
*	VALIDATE: nonpositive
*
*
*	DESCRIPTION:
*		- Validates if a value is a nonpositive number.
*
*
*	NOTES:
*		[1]
*
*
*	TODO:
*		[1]
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2015. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. kgryte@gmail.com. 2015.
*
*/

'use strict';

// MODULES //

var isNumber = require( 'validate.io-number' );


// IS NONPOSITIVE //

/**
* FUNCTION: isNonPositive( value )
*	Validates if a value is a nonpositive number.
*
* @param {*} value - value to be validated
* @returns {Boolean} boolean indicating if a value is a nonpositive number
*/
function isNonPositive( value ) {
	return isNumber( value ) && value <= 0;
} // end FUNCTION isNonPositive()


// EXPORTS //

module.exports = isNonPositive;
