SELECT
	*
FROM
	users
WHERE
	id > 10
AND NOT 
	email >= "m"
;

SELECT
	*
FROM
	users
WHERE 
	id > 10
OR NOT 
	name >= "m"
;

SELECT
	*
FROM
	users
WHERE NOT
	id > 10
AND NOT 
	name >= "m"
;