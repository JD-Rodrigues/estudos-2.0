SELECT
	*
FROM
	users
WHERE
	deleted_at
IS NOT NULL
;