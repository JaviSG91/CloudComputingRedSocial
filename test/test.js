var mensajes = require("../cassandra");
var assert = require("assert");

describe('Mensajeria', function(){

	it('Nombre', function(hecho){
			mensajes.DevuelveNombre(
				"javisg",function(err,data){
				assert.equal(data.nombre,"Javier");
				hecho();
	

			});
		 	
	});








});
