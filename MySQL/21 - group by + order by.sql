-- Calcula a SOMA das multas por classificação indicativa de filme

SELECT rating, SUM(replacement_cost) 
FROM film 
GROUP BY rating
ORDER BY SUM(replacement_cost) DESC;
