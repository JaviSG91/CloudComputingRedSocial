var cassandra = require('cassandra-driver');
var assert = require('assert');
var async = require('async');

var app = express(); 
app.use(express.static(__dirname));

app.set('ip', process.env.IP|| '0.0.0.0');
app.set('port', (process.env.PORT || 5000));
 //Connect to the cluster
var Mensajeria=[];
var client = new cassandra.Client({contactPoints: ['127.0.0.1','127.0.0.2'], keyspace: 'mykeyspace'});


Mensajeria.DevuelveNombre = function(req,res){
	var query = 'SELECT nombre FROM Usuarios where username=?';
	var params = [req];
	client.execute(query,params,{prepare: true}, function(err, result) {
	 
	  if(err)
		throw err;
	  else{
		res(null,result.rows[0]);
	  	console.log('got username ' + result.rows[0].nombre);
	  }
	});
}

module.exports = Mensajeria;
