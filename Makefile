# Right now this is a Docker-level command tool
#
# For instructions on adding new commands:
# https://www.thapaliya.com/en/writings/well-documented-makefiles/

.DEFAULT_GOAL:=help
SHELL:=/bin/bash
API_URL:=http://localhost:8000

-include .env.development.local

##@ Development

start:  ## Running the entire suite of docker services
	$(info Running all services together...)
	docker-compose up -d --no-recreate

stop:  ## Stop running the entire suite of docker services
	$(info Stop all running services...)
	docker-compose stop

build:  ## Build docker containers
	$(info Building docker containers...)
	docker-compose build

rebuild:  ## Stop and rebuild docker containers without cache
	$(info Stop running all services together...)
	docker-compose stop
	$(info Building and running all services together...)
	docker-compose up -d --build --remove-orphans

remove-volumes:
	$(info Removing all Docker volumes...)
	docker-compose down --rmi all --volumes

.PHONY: logs
logs:  ## Shows the logs for any running Docker containers
	docker-compose logs --follow

##@ Databases

.PHONY: db-shell
db-shell:  ## Start a shell in the db container
	docker-compose exec db /bin/bash

# .PHONY: db-migrate
# db-migrate:  ## run db migrations
# 	docker-compose exec api

##@ Helpers

.PHONY: prune
prune:  ## Prune all old docker containers
	docker system prune --all --force

.PHONY: help
help:  ## Display this help
	@awk 'BEGIN {FS = ":.*##"; printf "\nUsage:\n  make \033[36m\033[0m\n"} /^[a-zA-Z_-]+:.*?##/ { printf "  \033[36m%-20s\033[0m %s\n", $$1, $$2 } /^##@/ { printf "\n\033[1m%s\033[0m\n", substr($$0, 5) } ' $(MAKEFILE_LIST)