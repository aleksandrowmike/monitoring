docker run --rm --name mysqld --env-file .env_db -v crv_mysql:/var/lib/``mysql -p 3306:3306 -d mysql:lates 
