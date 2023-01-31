.PHONY:

build:
	go build -o dsviz ./cmd/dsviz

run:build
	./dsviz

stop:
	pkill dsviz || true

restart:stop run
