from os import system

"""
  Start script python
  On your terminal type: python3 setup.py
"""

# Docker build
image_name="api_library"
image_tag="0.0.1"
source_path="../"

# Image waypoint
waypoint_version="0.9.0"
image_waypoint="hashicorp/waypoint-odr:{waypoint_version}"

## Build docker image
def docker_login ():
  system("docker login")

def docker_build ():
  system(f"docker build -t {image_name} -f Dockerfile {source_path}")
  go_back_interactive()

def docker_tag ():
  system(f"docker tag {image_name} {image_name}:{image_tag}")
  go_back_interactive()

def docker_push ():
  docker_login()
  system(f"docker push {image_name}")
  system(f"docker push {image_name}:{image_tag}")
  go_back_interactive()

def go_back_interactive ():
  system("python3 setup.py")

## Interactive
user = int(input(
  "What do you want to do?\n"
  "1 - To build imagem docker\n"
  "2 - Tag imagem docker\n"
  "3 - To push your imagem dokcer\n"
  "4 - Exit\n"
  ))

def switch():
  if user == 1: docker_build()
  elif user == 2: docker_tag()
  elif user == 3: docker_push()
  else: pass

switch()
