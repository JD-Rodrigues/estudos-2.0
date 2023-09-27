select * from film;

select * from rental;

SELECT COUNT(rental_id) FROM rental;

SELECT AVG(length) FROM film WHERE  title LIKE "%documentary%" OR  description LIKE "%documentary%";

SELECT MAX(length) FROM film;
SELECT title, length FROM film WHERE length = 185;

SELECT MIN(length) FROM film;
SELECT title, length FROM film WHERE length = 46;

SELECT COUNT(*) FROM film WHERE rating = "PG";
SELECT COUNT(*) FROM film WHERE rating = "G";

SELECT MIN(rental_date) from rental;
SELECT inventory_id from rental WHERE rental_date = '2005-05-24 22:53:30';
SELECT title AS 'Empréstimo mais antigo', description AS descrição FROM film WHERE film_id = 367;

SELECT MAX(rental_date) from rental;
SELECT inventory_id from rental WHERE rental_date = '2006-02-14 15:16:03';
SELECT title AS 'Empréstimos mais recentes', description AS descrição FROM film WHERE film_id IN(9, 21, 25);

SELECT inventory_id from rental ORDER BY rental_date LIMIT 1;

SELECT COUNT(DISTINCT length) as 'Número de durações', COUNT(DISTINCT rating) as 'Número diferente de notas'  FROM film;









