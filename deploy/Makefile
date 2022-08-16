## Image waypoint
WAYPOINT_VERSION=0.9.0
DOCKER_IMAGE=hashicorp/waypoint-odr:${WAYPOINT_VERSION}

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