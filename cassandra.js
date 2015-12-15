var upsertSong = 'INSERT INTO simplex.usuarios (id, nombre, apellidos)  '
    + 'VALUES(?, ?, ?, ?, ?, ?);';
var getSongById = 'SELECT * FROM keysp.usuarios WHERE username = ?;';
var contador = 'SELECT COUNT(*) FROM keysp.usuarios;';


var cassandra = require('cassandra-driver');
var assert = require('assert');
var async = require('async');
var express=require('express'); 
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());

var client = new cassandra.Client( {contactPoints: ['127.0.0.1'] } );
client.set
client.connect(function(err, result) {
    console.log('Connected.');
});

app.set('ip', process.env.IP|| '0.0.0.0');
app.set('port', (process.env.PORT || 5000));

app.get('/', function(req, res) {
    res.send('Bienvenido');
     
});


app.post('/keyspace', function(req, res) {
    var result="";
    client.execute("CREATE KEYSPACE IF NOT EXISTS keysp WITH replication " + 
                   "= {'class' : 'SimpleStrategy', 'replication_factor' : 3};",
                   afterExecution('Error: ', 'Keyspace created.', res));
    res.send("keyspace creado");
});

app.post('/tables', function(req, res) {
    async.parallel([
        function(next) {
            client.execute('CREATE TABLE IF NOT EXISTS keysp.usuarios (' +
                'username uuid PRIMARY KEY,' +
                'nombre text,' +
                'apellido text,' +
                ');',
                next);
        }   
    ], afterExecution('Error: ', 'Tables created.' , res));
	res.send("tablas creadas");
});

app.post('/user', function(req, res) {
    var id = null;
    if ( ! req.body.hasOwnProperty('username')) {
        id = cassandra.types.uuid();
    } else {
        id = req.body.username;
    }
    client.execute(upsertSong,
        [id, req.body.nombre, req.body.apellido],
        afterExecution('Error: ', 'Usuario ' + req.body.nombre + ' upserted.', res));
    res.send(id + " is stored");
});

/*app.get('/userb', function(req, res) {
    var d;
    creaKey(d);
    client.execute("SELECT COUNT(*) FROM keysp.usuarios", function(err, result) {
        if (err) {
	    res.status(404).send({ msg : err });
           // res.status(404).send({ msg : 'User not found.' });
        } else {
            res.json(result);        }
    });

});*/

function afterExecution(errorMsessage, successMessage) {
    return function(err, result) {
        if (err) {
            return "error";
        } else {
            return "bien";
        }
    }
}


var server = app.listen(app.get('port'), function() {
    console.log('Listening on port %d', server.address().port);
});

module.exports = app;


/*var cassandra = require('cassandra-driver');
var assert = require('assert');
var async = require('async');
var express=require('express'); 
var app = express(); 

app.set('ip', process.env.IP|| '0.0.0.0');
app.set('port', (process.env.PORT || 5000));


app.get('/', function (req, res) { 
	var client = new cassandra.Client({contactPoints: ['127.0.0.1','127.0.0.2'], keyspace: 'mykeyspace'});
	
	 client.execute("SELECT nombre FROM Usuarios where username='javisg'", function (err, result) {
           if (!err){
               if ( result.rows.length > 0 ) {
                   var user = result.rows[0];
                   res.send(user.nombre);
               } else {
                   res.send("nada");
               }
           }
	   else
		res.send("error");
 
       });
	
	
	//res.send('Bienvenido');

}); 
 



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

app.listen(app.get('port'), function() {
  console.log('Puerto:', app.get('port'));
});
module.exports = app;*/
