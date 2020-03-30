#!/usr/bin/env bash

set -e

SERVER_PORT=8000 #How do we get yarn dev to change from 8000?

onExit() {
    if [[ -n "${SERVER_PID}" ]]; then
        echo Stopping server
        kill "${SERVER_PID}"
    fi
}
trap onExit INT TERM HUP EXIT

checkServer() {
    local res
    local exitCurl
    local exitGrep
    res=$(curl -s http://localhost:${SERVER_PORT})
    exitCurl=$?
    if [ $exitCurl -ne 0 ]; then
        return exitCurl
    fi
    echo $res | grep -q "This page will reload when the server is ready"
    exitGrep=$?
    if [ "$exitGrep" -eq "0" ]; then
        return 1
    fi
    return 0
}

runServer() {
    local i
    echo "Starting server"

    # Wait for about 90 sec
    i=90

    yarn dev &
    SERVER_PID=$!

    echo "Waiting for server"
    while ! checkServer ; do
        if [[ i -le 0 ]]; then
            echo ERROR: Server did not become ready
            exit 1
        fi
        ((i=i-1))
        echo Waiting on server...
        sleep 1
    done
    echo "Server is up"
}

checkLinks() {
    echo "Checking links"

    broken-link-checker -r --filter-level 3 \
        http://localhost:${SERVER_PORT}
}

if [[ -z "${DOTENV}" ]]; then
    echo "Please set DOTENV to point to a file with the secrets"
    exit 1
fi

runServer
checkLinks
sleep 6



