var mensajes = require("../cassandra");
var assert = require("assert");

describe('Mensajeria', function(){

	it('Nombre', function(done){
			mensajes.DevuelveNombre(
				"javisg",function(err,data){
				assert.equal(data.nombre,"Javier");
				done();
	

			});
		 	
	});








});
