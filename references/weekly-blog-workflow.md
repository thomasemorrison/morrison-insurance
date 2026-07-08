# Morrison Insurance — Weekly Blog Workflow

**Rhythm:** One new article published per week, every Wednesday at 9:54 AM CDT.
**Owner:** Morrison Insurance team (content review) + Manus AI (research, drafting, publishing prep).
**Goal:** Build a library of locally-relevant, search-optimized articles that serve East Texas families and businesses — and consistently feed the social media calendar in Metricool.

---

## Overview

Each week follows a four-stage cycle. The first three stages happen Monday; publishing happens Tuesday morning.

| Day | Stage | Who |
|---|---|---|
| Monday | 1. Topic selection & research | Manus AI |
| Monday | 2. Article draft | Manus AI |
| Monday | 3. Hero image + meta prep | Manus AI |
| Tuesday | 4. Review & publish | Morrison team |
| Wednesday 9:54 AM | 5. *(Automated)* Blog post via Metricool RSS | Metricool |

---

## Stage 1 — Topic Selection & Research (Monday)

### Topic Sources

Each week, Manus AI reviews the following sources for locally relevant hooks:

| Source | What to look for |
|---|---|
| [Shelby County Today](https://www.scttx.com) | Local news, weather events, community announcements |
| [Light & Champion](https://www.lightandchampion.com) | Business openings, county developments, seasonal stories |
| [Shelby County official site](https://www.co.shelby.tx.us) | Burn ban status, county notices, emergency declarations |
| Local school websites | Sports seasons, back-to-school, graduation |
| Texas insurance news | Rate changes, new state requirements, carrier updates |

### Topic Selection Criteria

A good weekly topic satisfies at least two of the following:

1. **Locally relevant** — connects to something happening in Shelby County or East Texas right now (season, event, news hook).
2. **Search-worthy** — a question East Texans are likely to type into Google (e.g., "does homeowners insurance cover flooding in Texas").
3. **Service-focused** — highlights the experience of working with an independent agent, not just product features.
4. **Timely** — tied to a season (hurricane season, hunting season, back-to-school) or a recent event.

### Topic Bank (Evergreen Backlog)

When no strong local hook exists, draw from this standing backlog:

- Life insurance basics for East Texas families
- What to do after a car accident in Texas (step-by-step)
- How to review your homeowners policy before hurricane season
- ATV and UTV insurance in Texas
- Commercial auto insurance for contractors
- What is an insurance deductible and how do I choose mine?
- Insuring a vacation rental or Airbnb in Texas
- Teen driver insurance in Texas: what parents need to know
- Why your credit score affects your insurance rate in Texas
- How to bundle home and auto insurance the right way

---

## Stage 2 — Article Draft (Monday)

### Structure Template

Every article follows this structure:

```
Title: [Keyword-rich, plain-language, ~60 characters]
Slug: /resources/[kebab-case-title]
Meta description: [150–160 characters, includes "East Texas" or "Center, TX"]

H1: [Same as title or slight variation]
Intro paragraph: 2–3 sentences. Hook + local relevance + what the reader will learn.

H2: [First main point]
Body: 2–3 paragraphs. Plain language. No jargon. Service-focused framing.

H2: [Second main point]
Body: 2–3 paragraphs.

H2: [Third main point or FAQ]
Body: 2–3 paragraphs.

CTA section:
"Questions about [topic]? Our team in Center, TX has been helping East Texans
navigate [topic area] since 1923. Give us a call at (936) 598-2791 or
[get a quote started today](/contact)."
```

### Writing Guidelines

- **Tone:** Conversational, knowledgeable, local. Write like a trusted neighbor who happens to know insurance — not like a corporate brochure.
- **Length:** 600–900 words. Long enough to be useful; short enough to read on a phone.
- **Messaging focus:** Emphasize the experience of working with Morrison Insurance — the guidance, the advocacy, the local knowledge — not the specific products or carriers.
- **No fabricated testimonials or reviews.** Never invent customer quotes.
- **Local specificity:** Mention Center, TX, Shelby County, Deep East Texas, or specific local landmarks/events where natural.
- **Internal links:** Link to at least one other article in `/resources/` and to `/contact` in the CTA.

---

## Stage 3 — Hero Image & Meta Prep (Monday)

### Hero Image

1. Source a high-quality, royalty-free image from [Unsplash](https://unsplash.com) that matches the article topic.
2. Download at 1200px wide, 70% quality (JPEG).
3. Upload to Manus hosted storage: `manus-upload-file --webdev path/to/image.jpg`
4. Save the returned `/manus-storage/filename_hash.jpg` path.

### articleMeta.ts Entry

Add one entry to `server/_core/articleMeta.ts` under `ARTICLE_META`:

```ts
"/resources/[slug]": {
  title: "[Article title] | Morrison Insurance",
  description: "[150-char meta description]",
  image: "/manus-storage/[filename_hash].jpg",
  slug: "[slug]",
},
```

### Article Component

Create `client/src/pages/articles/[SlugPascalCase].tsx` using the `ArticleLayout` component pattern from existing articles. Register the route in `client/src/App.tsx`.

### RSS Feed

After adding the article, update the RSS feed (`/rss.xml` endpoint or static file) to include the new article entry with title, link, description, and `pubDate`.

---

## Stage 4 — Review & Publish (Tuesday)

### Review Checklist

Before publishing, the Morrison team confirms:

- [ ] Tone is on-brand (helpful, local, service-focused)
- [ ] No factual errors about coverage, Texas law, or local facts
- [ ] CTA phone number and contact link are correct
- [ ] Hero image is appropriate and professional
- [ ] No fabricated quotes or testimonials

### Publishing Steps

1. Merge the article code to the main branch (or confirm the Manus task has committed it).
2. Click **Publish** in the Manus Management UI to deploy to `morrison-ins.net`.
3. Verify the live URL returns the correct `og:image` using the [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/).

### Social Media — Blog Post (Automated)

The Wednesday 9:54 AM blog post to Facebook and Instagram is **fully automated** via Metricool RSS. No manual scheduling is required after publishing.

Metricool reads the RSS feed at `https://morrison-ins.net/rss.xml`, picks up the new article, and posts it automatically with the article hero image and title.

**Hashtag set for automated blog posts (configured in Metricool):**
`#MorrisonInsurance #EastTexas #ShelbyCounty #CenterTX #TexasInsurance #IndependentAgent #LocalInsurance`

### Social Media — Manual Brand Posts

All other social content (community updates, seasonal tips, local history, team posts) is managed separately. See **`references/social-media-calendar.md`** for the full schedule, content pillars, caption templates, hashtag sets, and 12-week rotation.

The manual posting rhythm is:
- **Monday** — Community Update post (Facebook + Instagram)
- **Friday** — Brand/Seasonal/Local Pride post (Facebook + Instagram)

---

## Adding a New Article: Quick Reference

When Manus AI delivers a new article, the Morrison team needs to do three things:

1. **Review** the draft using the checklist above.
2. **Publish** by clicking the Publish button in the Management UI.
3. **Schedule social posts** in Metricool using the article link and hero image.

Everything else — the code, the meta tags, the og:image, the RSS entry — is handled automatically.

---

## Article Naming Conventions

| Element | Convention | Example |
|---|---|---|
| URL slug | Lowercase kebab-case, keyword-first | `/resources/flood-insurance-east-texas` |
| File name | PascalCase matching slug | `FloodInsuranceEastTexas.tsx` |
| Meta title | Article title + pipe + brand | `Flood Insurance in East Texas \| Morrison Insurance` |
| Hero image file | Kebab-case topic + hash | `flood-insurance_a1b2c3d4.jpg` |
| Image alt text | Descriptive, no keyword stuffing | `Flooded road in East Texas` |

---

## Workflow Trigger

This workflow is triggered every **Monday at 9:00 AM CDT** via a recurring Manus scheduled task. The task:

1. Reviews the topic sources listed in Stage 1.
2. Selects the best topic for the week.
3. Drafts the full article.
4. Sources and uploads the hero image.
5. Adds the `articleMeta.ts` entry.
6. Creates the article component and registers the route.
7. Updates the RSS feed.
8. Delivers a summary to the Morrison team for review before Tuesday publishing.

---

## Blog Topic Queue

Topics queued for upcoming Monday research cycles, in priority order:

| Priority | Topic | Notes |
|---|---|---|
| 1 | Construction liability & premises liability for property owners | Personal angle: cabin build in progress, neighbors/curious visitors on active construction site, trespass liability, additional liability rider on homeowner policy. East Texas rural homeowner audience. |
| 2 | (Next topic TBD by Monday research) | — |

