# TWDY Agency Website

A modern, responsive landing page for TWDY Agency - Creator & Athlete Management.

## Overview

TWDY Agency connects emerging athletes, influencers, and digital talent with brands that align with their values, audience, and lifestyle.

## Features

- Full-screen video hero with auto-scroll after playback
- Sticky navigation header with blur effect
- Responsive design for mobile, tablet, and desktop
- Creator showcase with rotating images
- Talent profiles with social stats
- Email signup form (ready for Netlify Forms integration)
- Clean contact section

## Project Structure

```
twdy-site/
├── index.html          # Main website file
├── README.md           # This file
├── logo-white.png      # White logo (favicon, watermarks)
├── logo-grey.png       # Grey logo variant
├── images/             # Creator/talent photos
│   ├── maximo-1.jpg
│   ├── maximo-2.png
│   ├── aris-1.png
│   ├── aris-2.png
│   ├── jordan-1.jpeg
│   ├── jordan-2.png
│   └── miles.png
└── videos/             # Video assets
    ├── twdy_intro.mp4  # Hero intro video
    ├── logo_words.mp4  # Logo animation
    └── orange_Logo.mp4 # Orange logo animation
```

## Local Development

To run locally, use any static file server:

```bash
# Python 3
python3 -m http.server 8000

# Then open http://localhost:8000
```

## Deployment

This site is designed to be deployed on **Netlify**:

1. Connect your GitHub repository to Netlify
2. Deploy settings: No build command needed (static HTML)
3. Enable HTTPS in Domain settings
4. Optionally enable Netlify Forms for email collection

## Tech Stack

- HTML5 / CSS3
- Vanilla JavaScript
- Google Fonts (Inter, Oswald)
- No build tools required

## Contact

For inquiries: miles@twdyagency.com

---

© 2025 TWDY Agency. All rights reserved.
