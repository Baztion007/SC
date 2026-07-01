#!/bin/bash
cd /home/z/my-project
while true; do
  echo "[$(date +%H:%M:%S)] Starting dev server..." >> /home/z/my-project/watchdog.log
  ./node_modules/.bin/next dev -p 3000 >> /home/z/my-project/dev.log 2>&1
  EXIT=$?
  echo "[$(date +%H:%M:%S)] Server exited (code $EXIT), restarting in 1s..." >> /home/z/my-project/watchdog.log
  sleep 1
done
