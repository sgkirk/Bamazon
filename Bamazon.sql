CREATE database Bamazon;
USE Bamazon;

CREATE TABLE Products (
ItemID INTEGER (30) NOT NULL,
ProductName VARCHAR (30) NOT NULL,
DepartmentName VARCHAR (30) NOT NULL,
Price DECIMAL (5,3) NOT NULL,
StockQuantity INTEGER (30) NOT NULL,
PRIMARY KEY (ItemID)
);

SELECT * FROM Products;

INSERT INTO Products (ItemID, ProductName, DepartmentName, Price, StockQuantity)
VALUES (1, "Milk", "Dairy", 2.57, 96);

INSERT INTO Products (ItemID, ProductName, DepartmentName, Price, StockQuantity)
VALUES (2, "Spinach Tub", "Vegetables", 4.05, 9);

INSERT INTO Products (ItemID, ProductName, DepartmentName, Price, StockQuantity)
VALUES (3, "Rice", "Misc", 2.23, 5);

INSERT INTO Products (ItemID, ProductName, DepartmentName, Price, StockQuantity)
VALUES (4, "Ice Cream", "Frozen", 5.99, 8);

INSERT INTO Products (ItemID, ProductName, DepartmentName, Price, StockQuantity)
VALUES (5, "Chicken", "Meat", 6.42, 15);

INSERT INTO Products (ItemID, ProductName, DepartmentName, Price, StockQuantity)
VALUES (6, "Ground Beef", "Meat", 5.23, 25);

INSERT INTO Products (ItemID, ProductName, DepartmentName, Price, StockQuantity)
VALUES (7, "Bananas", "Fruit", 1.38, 5);

INSERT INTO Products (ItemID, ProductName, DepartmentName, Price, StockQuantity)
VALUES (8, "Strawberries", "Fruit", 1.38, 12);

INSERT INTO Products (ItemID, ProductName, DepartmentName, Price, StockQuantity)
VALUES (9, "Flour", "Misc", 1.19, 10);

INSERT INTO Products (ItemID, ProductName, DepartmentName, Price, StockQuantity)
VALUES (10, "Granola Bars", "Misc", 2.99, 19);

