
build: components index.js noticon.css
	@component build --dev

components:
	@component install --dev

clean:
	rm -fr build components template.js

test:
	serve .

.PHONY: clean test
