SELECT
	*
FROM
	users
WHERE
	(id > 10
AND
	name >= "m")
AND 
	created_at > '2023-09-15'
;