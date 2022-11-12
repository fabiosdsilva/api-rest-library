## Docker build
IMAGE_NAME=api_library
SOURCE_PATH=../

## Image waypoint
WAYPOINT_VERSION=0.9.0
DOCKER_IMAGE=hashicorp/waypoint-odr:${WAYPOINT_VERSION}

docker-build:
  docker build -t ${IMAGE_NAME} -f ./Dockerfile ${SOURCE_PATH}

waypoint-up:
  docker run ${DOCKER_IMAGE} -d

waypoint:
	waypoint install -platform=docker -accept-tos

waypoint-ui:
	waypoint ui -authenticate
	waypoint user token \
	Run Web UI Address: https://localhost:9702

waypoint-destroy:
	waypoint destroy
