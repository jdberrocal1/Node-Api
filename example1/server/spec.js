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
				chai(resp.body).to.be.an('array');
				done();
			})
	});
	it('should create a lion',function (done) {
		var lion = {
			name:'Mufasa',
			age:'10',
			pride:'Evil Lions',
			gender: 'male'
		};
		request(app)
			.post('/lions')
			.send(lion)
			.set('Accept', 'applicaton/json')
			.expect('Content-Type',/json/)
			.expect(200)
			.end(function(err, resp){
				chai(resp.body).to.be.an('object');
				done();
			})
	})
});
