-- Calcula a média da multa por classificação indicativa de filme

SELECT rating, AVG(replacement_cost) 
FROM film 
GROUP BY rating;
