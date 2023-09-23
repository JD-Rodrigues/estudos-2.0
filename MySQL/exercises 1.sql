select * from film;


show tables;
show databases;

select 
	title as título, 
	description as descrição 
from film 
WHERE 
	rating = "R" 
and 
	replacement_cost >= 10
order by
	rental_rate desc;
    
select
	film_id
from
	film
where
	last_update = '2006-02-15 05:03:42';
    
select
	title, length
from
	film
where
	length between 90 and 150;

select
	title as título, description as descrição
from
	film
where
	title like "%love%" or description like '%love%'
;

select
	title as título, 
	description as descrição,rating, rental_duration
FROM film
where
	rating  in ('G', 'PG', 'R')
and 
	rental_duration in (6,7,5);

select
	title as título, 
	description as descrição, rental_rate, special_features, replacement_cost
from
	film
where 	
	rental_rate = '0.99'
and
	special_features like '%commentaries'
and
	replacement_cost between 10 and 15 
order by
	replacement_cost desc
;
