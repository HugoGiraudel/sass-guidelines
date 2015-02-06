UGLIFY = node_modules/uglify-js/bin/uglifyjs

all: min

min: assets/js/main.min.js

assets/js/main.min.js: \
	assets/js/main.js
	cat $^ | $(UGLIFY) > $@

clean:
	$(RM) -r assets/js/main.min.js
