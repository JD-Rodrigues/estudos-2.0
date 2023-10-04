-- Calcula a SOMA das multas por classificação indicativa de filme
USE sakila;
select * FROM film;
SELECT rating, SUM(replacement_cost) 
FROM film 
where rental_duration = 3
GROUP BY rating
ORDER BY SUM(replacement_cost) DESC;
