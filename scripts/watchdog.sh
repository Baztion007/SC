#!/bin/bash
# Self-healing watchdog for the Next.js dev server.
# Runs forever: starts the dev server, waits for it to exit, restarts after 1s.
# Launched via setsid so it survives parent shell termination.
cd /home/z/my-project

while true; do
  echo "[$(date +%H:%M:%S)] Starting dev server..." >> /home/z/my-project/watchdog.log
  ./node_modules/.bin/next dev -p 3000 >> /home/z/my-project/dev.log 2>&1
  EXIT_CODE=$?
  echo "[$(date +%H:%M:%S)] Server exited with code $EXIT_CODE, restarting in 1s..." >> /home/z/my-project/watchdog.log
  sleep 1
done
