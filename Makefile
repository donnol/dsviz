.PHONY:

build:
	go build -o dsviz ./cmd/dsviz

run:build
	./dsviz
