install:
	install-deps
run:
	npm start

install-deps:
	npm install

build:
	rm -rf dist
	npm run build

test:
	npm test

test-coverage:
	npm test -- --coverage

lint:
	npx eslint .

deploy:
	npm run deploy

.PHONY:
	test
