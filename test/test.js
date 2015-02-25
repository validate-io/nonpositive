/* global require, describe, it */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	isNonPositive = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'validate.io-nonpositive', function tests() {

	it( 'should export a function', function test() {
		expect( isNonPositive ).to.be.a( 'function' );
	});

	it( 'should positively validate', function test() {
		var bool;

		bool = isNonPositive( -Math.PI );
		assert.ok( bool );

		bool = isNonPositive( 0 );
		assert.ok( bool );

		bool = isNonPositive( Number.NEGATIVE_INFINITY );
		assert.ok( bool );
	});

	it( 'should negatively validate', function test() {
		var values = [
			'5',
			1,
			null,
			undefined,
			true,
			NaN,
			function(){},
			[],
			{}
		];

		for ( var i = 0; i < values.length; i++ ) {
			assert.notOk( badValue( values[i] ) );
		}
		function badValue( value ) {
			return isNonPositive( value );
		}
	});

});
