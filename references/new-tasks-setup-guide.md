# New Scheduled Tasks — Setup Guide

Two new recurring tasks are ready to be created in the Morrison Insurance Manus project. Each needs to be its own separate task with its own schedule. The full prompt for each task is saved in the `references/` folder.

---

## Task 1 — Weekly Local Intelligence Scan

**Purpose:** Every Monday morning, scan local news and government sources for burn ban status, weather alerts, and community events. Deliver ready-to-use Canva template fill-ins and social media captions for the Weather Watch, Burn Update, Happening In Shelby County, and What's Happening This Weekend templates.

**Schedule:** Every Monday at 7:00 AM CDT

**Prompt file:** `references/weekly-local-intelligence-prompt.txt`

**Sources scanned:**
- scttx.com — Shelby County Today
- lightandchampion.com — Light & Champion
- co.shelby.tx.us — Shelby County official site
- weather.gov / NWS Shreveport — weather alerts
- tceq.texas.gov — burn ban map

**Output delivered each Monday:**
- Burn ban status + Burn Update template fill-in
- Weather Watch template fill-in (if alerts are active)
- Up to 3 community events with Happening In and This Weekend template fill-ins
- Ready-to-copy Facebook and Instagram captions for each post
- Scheduling recommendations for Metricool

---

## Task 2 — Weekly Toledo Bend Fishing Report

**Purpose:** Every Thursday morning, gather current lake conditions, fishing activity, moon phase, and solunar data for Toledo Bend Reservoir. Deliver a complete fill-in for the Fishing Report Canva template and a ready-to-post social media caption.

**Schedule:** Every Thursday at 7:00 AM CDT (so anglers see it before the weekend)

**Prompt file:** `references/weekly-fishing-report-prompt.txt`

**Sources scanned:**
- toledobend.com — lake level, weather, Dock Talk fishing reports
- tpwd.texas.gov — Texas Parks & Wildlife weekly fishing report
- omniafishing.com — community fishing reports
- captainexperiences.com — guide reports
- fishingreminder.com — solunar tables for South Toledo Bend
- farmersalmanac.com — fishing calendar ratings
- solunarforecast.com — solunar forecast

**Output delivered each Thursday:**
- Lake level, water temp, weather outlook
- What's biting: species, techniques, depth, areas
- Moon phase, best fishing days, solunar bite windows
- Overall Fishing Outlook star rating (1–5 stars)
- Complete Canva template fill-in (copy-paste ready)
- Facebook and Instagram captions (copy-paste ready)

---

## How to Create These Tasks

1. In the Manus project "Morrison Insurance," start a new task
2. Paste the full prompt from the corresponding `.txt` file as the task prompt
3. Once the task is created, use `manus-config schedule create` with `--run-as-new-task` and `--repeated` to set the weekly schedule
4. The task will fire automatically each week and deliver results to you

**Cron expressions:**
- Monday 7:00 AM CDT: `0 0 7 * * 1`
- Thursday 7:00 AM CDT: `0 0 7 * * 4`
