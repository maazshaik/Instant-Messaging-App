VERSION=v4
DOCKERUSER=maashaik

build:
	docker build -t analyzer . --platform linux/amd64

push:
	docker tag analyzer $(DOCKERUSER)/analyzer:latest
	docker push $(DOCKERUSER)/analyzer:latest