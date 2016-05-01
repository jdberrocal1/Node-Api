var app = require('./server');
var request = require('supertest');
var chai = require('chai').expect;

describe('[LIONS]',function () {
	it('should get all lions', function(done){
		request(app)
			.get('/lions')
			.set('Accept', 'applicaton/json')
			.expect('Content-Type',/json/)
			.expect(200)
			.end(function(err, resp){
				chaicls(resp.body).to.be.an('array');
				done();
			})
	});
});