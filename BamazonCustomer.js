var mysql = require('mysql');
var inquirer = require('inquirer');
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


var customerBuy = function(){
	inquirer.prompt({
		name: "ItemID",
		type: "input",
		message: "Which item number would you like to purchase?"
	}).then(function(answer) {
		//console.log(answer.ItemID)
			connection.query('SELECT * FROM Bamazon WHERE ?', {name: answer.name}, function(err, res) {
        		console.log(answer);
			})
		})
};

customerBuy();

connection.end();