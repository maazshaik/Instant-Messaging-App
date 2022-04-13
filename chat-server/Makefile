VERSION=v4
DOCKERUSER=maashaik

build:
	docker build -t mserver . --platform linux/amd64

push:
	docker tag mserver $(DOCKERUSER)/mserver:latest
	docker push $(DOCKERUSER)/mserver:latest