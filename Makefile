.PHONY:

build:
	go build -o dsviz ./cmd/dsviz

run:build
	./dsviz

run_nohup:build
	nohup ./dsviz &
	tail -f nohup.out

stop:
	pkill dsviz || true

restart:stop run
restart_nohup:stop run_nohup
