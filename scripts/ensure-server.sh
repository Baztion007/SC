#!/bin/bash
# Check if dev server is running on port 3000; start it if not.
cd /home/z/my-project

# Check if port 3000 is listening
if ss -tln 2>/dev/null | grep -q ":3000 "; then
  # Port is in use — check if it responds
  code=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/ 2>/dev/null)
  if [ "$code" = "200" ]; then
    echo "[$(date)] Server healthy (HTTP 200)" >> /home/z/my-project/keepalive.log
    exit 0
  fi
fi

# Port not listening or not responding — kill any stale processes and restart
pkill -f "next dev" 2>/dev/null
sleep 1
echo "[$(date)] Starting dev server..." >> /home/z/my-project/keepalive.log
nohup ./node_modules/.bin/next dev -p 3000 >> /home/z/my-project/dev.log 2>&1 &
disown
echo "[$(date)] Dev server started (PID $!)" >> /home/z/my-project/keepalive.log
