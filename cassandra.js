var cassandra = require('cassandra-driver');
var assert = require('assert');
var async = require('async');
 //Connect to the cluster
var Mensajeria=[];
var cql = require('node-cassandra-cql');
var client = new cql.Client({hosts: ['host1', 'host2'], keyspace: 'mykeyspace'});


Mensajeria.DevuelveNombre = function(req,res){
	var query = 'SELECT nombre FROM Usuarios where username=?';
	var params = [req];
	client.execute(query,params,{prepare: true}, function(err, result) {
	  //assert.equal(result.rows[0].nombre,'Javier');
	  if(err)
		throw err;
	  else{
		res(null,result.rows[0]);
	  	console.log('got username ' + result.rows[0].nombre);
	  }
	});
}

module.exports = Mensajeria;
