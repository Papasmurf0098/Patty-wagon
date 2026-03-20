.PHONY: help check serve format

help:
	@echo "Available targets:"
	@echo "  make help   - Show available commands"
	@echo "  make check  - Verify files, scan for conflict markers, and validate JS syntax"
	@echo "  make serve  - Start a local static file server on port 8000"
	@echo "  make format - No formatter configured"

check:
	@test -f index.html
	@test -f style.css
	@test -f app.js
	@! rg -n '^(<<<<<<<|=======|>>>>>>>)' --glob '!*.svg' .
	@node --check app.js
	@echo "Game files are present, conflict markers are absent, and JavaScript syntax is valid."

serve:
	@python3 -m http.server 8000

format:
	@echo "No formatter configured yet."
