
INSERT INTO Product (Product_id, product_name, Category, Price) 
VALUES 
('P01', 'Samsung Galaxy 520', 'Smartphone', 3299),
('P02', 'ASUS Notebook', NULL, 4599);

INSERT INTO Customer (Customer_id, customer_Name, customer_Tel) 
VALUES
('C01', 'OR', '71321009'),
('C02', 'ASTHMA', '77345823');


INSERT INTO Orders (Customer_id, Product_id, OrderDate, Quantity, Total_amount) 
VALUES
('C01', 'P02', '2020-05-28', 2, 9198),
('C02', 'P01', '2020-05-28', 1, 3299);
