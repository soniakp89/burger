// Set up database 
var mysql = require('mysql');
var connection;

	connection = mysql.createConnection({
		host: 'localhost',
		port:3306,
		user: 'root',
		password: '',
		database: 'burgers_db'
	});


// Connect database
connection.connect(function(err) {
	if (err) {
		console.error('There was an error connecting: ' + err.stack + '\n');
		return;
	}
	console.log('You are connected as id ' + connection.threadId + '\n');
});

// export the connection back to orm
module.exports = connection;