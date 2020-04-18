#!/usr/bin/env bash

export REDIS_PASSWORD=${REDIS_PASSWORD:-app}

COMMAND="docker-compose -f docker-compose.base.yml $@"

echo "${COMMAND}";

${COMMAND}