-- Calcula a SOMA das multas por classificação indicativa de filme

SELECT rating, SUM(replacement_cost) 
FROM film 
GROUP BY rating;
