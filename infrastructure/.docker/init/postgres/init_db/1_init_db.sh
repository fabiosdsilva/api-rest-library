#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
	CREATE USER library;
	CREATE DATABASE library;
	GRANT ALL PRIVILEGES ON DATABASE library TO library;
EOSQL