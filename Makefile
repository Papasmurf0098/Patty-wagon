.PHONY: help check format

help:
	@echo "Available targets:"
	@echo "  make help   - Show available commands"
	@echo "  make check  - Run basic repository checks"
	@echo "  make format - Placeholder for future formatting commands"

check:
	@test -f README.md
	@test -f CONTRIBUTING.md
	@test -f docs/ARCHITECTURE.md
	@echo "Repository scaffold checks passed."

format:
	@echo "No formatter configured yet."
