var app = require("../cassandra");
var request = require("supertest"); 
var assert = require("assert");

describe('Mensajeria', function(){


	it("Index", function(done) { 
		request(app) 
			.get("/") 
			.expect("Content-Type", /text\/html/) 
			.expect(200, done); 
	}); 

	it("key", function(done) { 
 		request(app) 
 			.post("/keyspace") 
			.expect("Content-Type", /text\/html/) 
			.expect(200, done); 
	}); 
	it("tablas", function(done) { 
 		request(app) 
 			.post("/tables") 
			.expect("Content-Type", /text\/html/) 
			.expect(200, done); 
	}); 
	it("Prueba", function(done) { 
		var user = { username : 'javisg', nombre:"Javier", apellido : 'Salido'};
 		request(app) 
			.post("/user") 
			.send(user)
			.expect("Content-Type", /text\/html/) 
			.expect("javisg is stored", done); 
	}); 

	


	/*it('Nombre', function(done){
			mensajes.DevuelveNombre(
				"javisg",function(err,data){
				assert.equal(data.nombre,"Javier");
				done();
	

			});
		 	
	});*/








});
