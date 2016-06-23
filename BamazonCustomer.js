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
	for (var i = 0; i < data.length; i++) {
		console.log(data[i].ItemID + " | " + data[i].ProductName + " | " + data[i].Price);
	}
});

connection.end();