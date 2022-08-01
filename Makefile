start: copy-env run-docker setup-node

start-dev: start run-dev

copy-env:
	cp .env.example .env

run-docker:
	docker-compose up -d

setup-node:
	asdf plugin add nodejs
	asdf install
	npm i

run-dev:
	npm run dev
