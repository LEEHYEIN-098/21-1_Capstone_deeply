#!/bin/sh

uv4l -k --sched-rr --mem-lock --config-file=/etc/uv4l/uv4l-uvc.conf --driver uvc --driver-config-file=/etc/uv4l/uv4l-uvc.conf --server-option=--editable-config-file=/etc/uv4l/uv4l-uvc.conf --device-id 046d:0825
python2 /home/pi/Desktop/robot/control_robot.py

