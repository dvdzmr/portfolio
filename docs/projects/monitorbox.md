
# Monitor Box

`Monitor Box` is an edge monitoring platform for live production visibility and image-driven quality insights.

---

## Overview

My main ownership in this project is the embedded image and agent platform:

- `mbox-image`: a preconfigured Linux image for `Raspberry Pi 3, 4, and 5` devices
- Zero-touch startup flow so the device can run without operator setup
- Bootstrap process that fetches project containers from `Azure`
- Local services and APIs that sync with the remote Monitor Box server

---

## My Contributions

- Built and maintained the embedded Linux image (`mbox-image`) used on predominantly`Pi 3B` units, preconfigured for production deployment.
- Implemented `systemd` services to orchestrate startup, health checks, and automatic recovery of core processes.
- Designed the device bootstrap flow to pull required Docker containers from `Azure` with minimal user input.
- Rewrote the agent codebase to improve reliability, sync behavior, and maintainability in edge environments.
- Added local `API` and `database` components so each device can operate as a self-contained ecosystem.
- Implemented local processing logic, including productivity calculations, before syncing results to the remote server.

---

## What I Delivered

- A reproducible image build and deployment baseline for `Pi 3B`
- `systemd`-managed service lifecycle for agent/container startup and restart handling
- Local data pipeline (`agent` + `API` + `database`) for resilient edge operation
- Device-to-cloud sync path for telemetry and computed productivity metrics
- Reduced setup friction by shipping a plug-and-run device image for the team solution

---

## Sample Product Photos

![Monitor Box CNC](img/monitorbox-cnc.jpg)
![Monitor Box Moulding](img/monitorbox-moulding.jpg)
![Monitor Box Staff Tracker](img/monitorbox-staff-tracker.jpg)
![Monitor Box Production Counter](img/monitorbox-production-counter.png)

Source: [Monitor Box Models & Components](https://www.monitor-box.com/mbox-models-components/)
