VERSION=v4
DOCKERUSER=maashaik

build:
	docker build -t frontend-app . --platform linux/amd64

push:
	docker tag frontend-app $(DOCKERUSER)/frontend-app:latest
	docker push $(DOCKERUSER)/frontend-app:latest