/**
* @license compare-numbers https://github.com/cosmosio/compare-numbers
*
* The MIT License (MIT)
*
* Copyright (c) 2014 Olivier Scherrer <pode.fr@gmail.com>
*/
var sut = require("../index"),
	chai = require("chai"),
	expect = chai.expect;

describe("compareNumbers.asc", function () {

	it("should return 1 if first number is greater than the second", function () {
		expect(sut.asc(100, 10)).to.equal(1);
		expect(sut.asc(2.3, 2.2)).to.equal(1);
		expect(sut.asc(1, -1)).to.equal(1);
	});

	it("should return -1 if first number is lower than the second", function () {
		expect(sut.asc(0, 1)).to.equal(-1);
		expect(sut.asc(2.3,2.35)).to.equal(-1);
		expect(sut.asc(-1, -0.9)).to.equal(-1);
	});

	it("should return 0 if they're the same", function () {
		expect(sut.asc(0,0)).to.equal(0);
		expect(sut.asc(-1, -1)).to.equal(0);
		expect(sut.asc(2.3, 2.3)).to.equal(0);
	});
});

describe("compareNumbers.desc", function () {

	it("should return 1 if first number is greater than the second", function () {
		expect(sut.desc(100, 10)).to.equal(-1);
		expect(sut.desc(2.3, 2.2)).to.equal(-1);
		expect(sut.desc(1, -1)).to.equal(-1);
	});

	it("should return -1 if first number is lower than the second", function () {
		expect(sut.desc(0, 1)).to.equal(1);
		expect(sut.desc(2.3,2.35)).to.equal(1);
		expect(sut.desc(-1, -0.9)).to.equal(1);
	});

	it("should return 0 if they're the same", function () {
		expect(sut.desc(0,0)).to.equal(0);
		expect(sut.desc(-1, -1)).to.equal(0);
		expect(sut.desc(2.3, 2.3)).to.equal(0);
	});
});
