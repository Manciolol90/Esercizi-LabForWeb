-- Stop&Code2 Daniele Mancini

CREATE SCHEMA IF NOT EXISTS stop_and_code_2;
USE stop_and_code_2;

DROP TABLE IF EXISTS payments;
DROP TABLE IF EXISTS order_items;
DROP TABLE IF EXISTS orders;
DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS categories;
DROP TABLE IF EXISTS clients;


CREATE TABLE clients (
client_id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(100),
email VARCHAR(100) UNIQUE,
data_registrazione DATE
);

CREATE TABLE categories(
category_id INT PRIMARY KEY AUTO_INCREMENT,
nome_categoria VARCHAR(50) UNIQUE NOT NULL
);

CREATE TABLE products(
product_id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(100),
prezzo DECIMAL(10,2),
category_id INT NOT NULL,
FOREIGN KEY (category_id) REFERENCES categories(category_id)
);

CREATE TABLE orders(
order_id INT PRIMARY KEY AUTO_INCREMENT,
client_id INT NOT NULL,
data_ordine DATE,
stato VARCHAR(20),
FOREIGN KEY (client_id) REFERENCES clients(client_id)
);

CREATE TABLE order_items(
order_item_id INT PRIMARY KEY AUTO_INCREMENT,
order_id INT NOT NULL,
product_id INT,
quantità INT UNSIGNED,
prezzo_unitario DECIMAL(10,2),
FOREIGN KEY (order_id) REFERENCES orders(order_id),
FOREIGN KEY (product_id) REFERENCES products(product_id)
);

CREATE TABLE payments(
payment_id INT PRIMARY KEY AUTO_INCREMENT,
order_id INT,
data_pagamento DATE,
metodo VARCHAR(20),
importo_pagato DECIMAL(10,2),
FOREIGN KEY (order_id) REFERENCES orders(order_id)
);

-- inserimenti fittizi fatti da chatgpt

INSERT INTO clients (nome, email, data_registrazione) VALUES
('Mario Rossi', 'mario.rossi@example.com', '2024-01-12'),
('Luisa Bianchi', 'luisa.bianchi@example.com', '2024-02-05'),
('Giorgio Verdi', 'giorgio.verdi@example.com', '2024-03-18'),
('Elena Blu', 'elena.blu@example.com', '2024-04-02'),
('Paolo Neri', 'paolo.neri@example.com', '2024-05-10');

INSERT INTO categories (nome_categoria) VALUES
('Elettronica'),
('Libri'),
('Casa'),
('Giochi'),
('Sport');

INSERT INTO products (nome, prezzo, category_id) VALUES
('Smartphone X100', 599.99, 1),
('Cuffie Wireless Pro', 129.90, 1),
('Romanzo "Il Viaggiatore"', 14.50, 2),
('Lampada da Tavolo LED', 29.99, 3),
('Set LEGO Space', 89.99, 4),
('Pallone da Calcio Pro', 34.90, 5),
('Monitor 27" UltraHD', 249.99, 1),
('Aspirapolvere Cyclone', 139.00, 3);

INSERT INTO orders (client_id, data_ordine, stato) VALUES
(1, '2024-06-01', 'in elaborazione'),
(2, '2024-06-03', 'spedito'),
(1, '2024-06-10', 'consegnato'),
(3, '2024-06-15', 'in elaborazione'),
(4, '2024-06-20', 'cancellato');

INSERT INTO order_items (order_id, product_id, quantità, prezzo_unitario) VALUES
(1, 1, 1, 599.99),
(1, 2, 1, 129.90),

(2, 3, 2, 14.50),
(2, 5, 1, 89.99),

(3, 7, 1, 249.99),

(4, 4, 1, 29.99),
(4, 6, 1, 34.90),

(5, 3, 1, 14.50);

INSERT INTO payments (order_id, data_pagamento, metodo, importo_pagato) VALUES
(1, '2024-06-02', 'Carta', 729.89),
(2, '2024-06-04', 'PayPal', 118.99),
(3, '2024-06-11', 'Carta', 249.99),
(4, '2024-06-16', 'Carta', 64.89);

-- 1) Elenca tutti i clienti.
SELECT * FROM clients;
-- 2) Elenca tutti i prodotti con prezzo superiore a 50.
SELECT * FROM products WHERE prezzo > 50;
-- 3) Elenca tutte le categorie di prodotti.
SELECT * FROM categories;
-- 4) Elenca tutti gli ordini con stato 'spedito'.
SELECT * FROM orders WHERE stato = 'spedito';
-- 5) Elenca tutti i prodotti della categoria 'Elettronica'.
SELECT nome, prezzo
	FROM products WHERE category_id =
		(SELECT category_id FROM categories WHERE nome_categoria = 'Elettronica');
-- 6) Conta il totale dei clienti registrati.
SELECT COUNT(*) FROM clients;
-- 7) Elenca tutti gli ordini di un cliente (specifica client_id).
SELECT
	(SELECT nome FROM clients WHERE nome = 'Mario Rossi') AS Cliente,
    data_ordine,
    stato
FROM orders
WHERE client_id = (SELECT client_id FROM clients WHERE nome = 'Mario Rossi');
-- 8) Calcola il totale pagato per ogni ordine.
SELECT order_id, SUM(importo_pagato) AS totale
FROM payments
GROUP BY order_id;
-- 9) Elenca i nomi dei prodotti ordinati nell'ordine con ID specifico.
SELECT nome
FROM products
WHERE product_id IN -- questo serve a selezionare il nome del prodotto associato al suo id
    (SELECT product_id FROM order_items WHERE order_id IN -- questo seleziona gli id dei prodotti nell'ordine
		(SELECT order_id FROM orders WHERE order_id = 1) -- questo seleziona l' id dell'ordine che stiamo verificando
    );
-- 10) Elenca quantità e prezzi unitari degli articoli di un ordine (specifica ID).

SELECT quantità, prezzo_unitario
FROM order_items
WHERE order_id IN -- seleziono gli articoli relativi all'ordine selezionato
		(SELECT order_id FROM orders WHERE order_id = 2); -- come prima, seleziono l'ordine
-- 11) Elenca i clienti che hanno pagato con 'Carta di credito'.
SELECT nome
FROM clients
WHERE client_id IN
	(SELECT client_id FROM orders WHERE order_id IN -- seleziono gli id dei clienti degli ordini pagati con carta
		(SELECT order_id FROM payments WHERE metodo = 'Carta') -- seleziono gli ordini pagati con carta
	);
-- 12) Calcola quanti prodotti ha venduto ogni categoria.
SELECT
	nome_categoria,
	(
		SELECT COUNT(*)
		FROM order_items
		WHERE product_id IN (
			SELECT product_id
			FROM products
			WHERE category_id = categories.category_id
		)
	) AS prodotti_totali
FROM categories;

-- avevo provato questa
-- SELECT nome_categoria, ( SELECT SUM(quantità) FROM order_items WHERE product_id IN ( SELECT product_id FROM products WHERE category_id IN ( SELECT category_id FROM categories ) ) ) AS totale_venduto FROM categories;
-- ma come totale venduto mi da sempre 9, non capisco perchè!


-- da qui in poi uso i JOIN perchè prima non avevo visto la lezione dedicata :DD
-- stava diventando tutto troppo complicato

-- 13) Trova l’ordine con il valore totale più alto.
SELECT o.order_id,
       SUM(oi.quantità * oi.prezzo_unitario) AS valore_totale
FROM orders o
JOIN order_items oi ON o.order_id = oi.order_id
GROUP BY o.order_id
ORDER BY valore_totale DESC
LIMIT 1;

-- 14) Elenca i prodotti mai ordinati.
SELECT p.product_id, p.nome
FROM products p
LEFT JOIN order_items oi ON p.product_id = oi.product_id
WHERE oi.product_id IS NULL;

-- 15) Elenca i clienti che non hanno mai fatto ordini.

SELECT cl.*
FROM clients cl
LEFT JOIN orders o ON o.client_id = cl.client_id
WHERE o.client_id IS NULL;

-- 16) Calcola il numero medio di prodotti per ordine.
SELECT AVG(totale_per_ordine) AS media_prodotti
FROM (
    SELECT order_id, SUM(quantità) AS totale_per_ordine
    FROM order_items
    GROUP BY order_id
) AS sottoquery; -- vuole per forza un alias

-- la sotto query mi elenca l'id dell'ordine e la somma dei prodotti ordinati, dopodichè calcolo il valore medio

-- 17) Elenca ordini e il numero di articoli diversi per ciascuno.

-- questo non lo so fare

-- 18) Elenca i prodotti più venduti (per quantità totale ordinata).
SELECT p.nome,
       SUM(oi.quantità) AS totale_venduto
FROM products p
JOIN order_items oi ON oi.product_id = p.product_id
GROUP BY p.product_id
ORDER BY totale_venduto DESC;

-- 19) Elenca i clienti col totale speso negli ordini.

SELECT cl.nome,
       SUM(oi.quantità * oi.prezzo_unitario) AS totale_speso
FROM clients cl
JOIN orders o ON o.client_id = cl.client_id -- prendo in considerazione solo i clienti che hanno effettivamente ordinato qualcosa
JOIN order_items oi ON oi.order_id = o.order_id -- al join creato precedentemente, joiniamo order_items
GROUP BY cl.client_id;

-- 20) Elenca i clienti che hanno fatto ordini ma non ancora pagamenti.

SELECT cl.nome
FROM clients cl
JOIN orders o ON o.client_id = cl.client_id
LEFT JOIN payments p ON p.order_id = o.order_id -- come prima ma con left join, cioè solo la parte che non matcha
WHERE p.order_id IS NULL;
