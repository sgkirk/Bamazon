var mysql = require('mysql');
var connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: process.argv[2],
	database: 'Bamazon'
});

connection.connect(function(err){
	if (err) throw err;
	console.log('Welcome to Bamazon! ' + 'Connected as id'+ connection.threadId);
});

connection.query('SELECT ItemID, ProductName, Price FROM Products', function(err, data) {
	if (err) throw err;
	console.log('------------' + '\n' + 'Here is a list of the Items For Sale!' + '\n' + '------------');
	console.log(data[0]);
	console.log(data[1]);
	console.log(data[2]);
	console.log(data[3]);
	console.log(data[4]);
	console.log(data[5]);
	console.log(data[6]);
	console.log(data[7]);
	console.log(data[8]);
	console.log(data[9]);
	console.log(data[10]);
});

//connection.end();