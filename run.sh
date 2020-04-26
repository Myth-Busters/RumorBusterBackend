#!/bin/bash
rm -rf mongo-volume
docker-compose rm
docker-compose up --force-recreate --build

