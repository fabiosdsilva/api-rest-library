project=api_library

up:
	docker-compose -f ./docker-compose.yml -p $(project) up -d

build:
	docker-compose -f ./docker-compose.yml -p $(project) build

down:
	docker-compose -f ./docker-compose.yml -p $(project) down --remove-orphans

logs:
	docker-compose -f ./docker-compose.yml -p $(project) logs -t -f