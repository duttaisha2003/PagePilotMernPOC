PagePilot MERN POC

A MERN proof of concept integrating FAB PagePilot with React + Express using dynamic URL slugs. PagePilot is the source of truth for page content. fileciteturn2file0L3-L5

Core Flow

Browser
  ↓
React / Vite
  ↓
Express API
  ↓
PagePilot API
  ↓
Page JSON
  ↓
React Renderer

Example:

/fashion-shopping-app
        ↓
GET /api/pages/fashion-shopping-app
        ↓
PagePilot
        ↓
Rendered in React

The PagePilot endpoint used by the POC is:

GET https://pagepilot.fabbuilder.com/api/tenant/{tenantId}/pagebypath/{slug}

fileciteturn2file0L11-L33

PagePilot Modules

Module

Purpose

Pages

Manage target pages/content

Tooltips

Explain specific UI elements

Tours

Guide users through multiple steps/pages

Webinars

Host video sessions with timed engagement

fileciteturn2file0L35-L63

Pages + Tooltips

A Page represents a target URL. Multiple Tooltips can be linked to elements on that page.

/fashion-shopping-app
   ├── Tooltip → Product button
   ├── Tooltip → Search field
   └── Tooltip → Cart button

fileciteturn2file0L65-L85
fileciteturn2file0L213-L232

Dynamic Routing

React extracts the URL slug and sends it to Express.

/fashion-shopping-app
        ↓
React extracts slug
        ↓
GET /api/pages/fashion-shopping-app
        ↓
Express → PagePilot
        ↓
React renders response

This avoids creating a separate React component for every PagePilot page. fileciteturn2file0L128-L157

Invalid slugs return a friendly 404/fallback instead of breaking the app. fileciteturn2file0L193-L211

AHDjs

Install:

npm install ahdjs

Import:

import AHDjs from "ahdjs";
import "ahdjs/build/css/index.css";

Initialize:

const ahdJS = new AHDjs(undefined, {
  applicationId: "6336128a251dcbda38bd8fe1",
  apiHost: "https://pagepilot.fabbuilder.com",
  visitorId: "visitor-id",
  language: "en",
  showProgressbar: false,
});

ahdJS.initializeSiteMap();
ahdJS.showHighlights("TARGET_PAGE", true);

Replace TARGET_PAGE with the actual PagePilot Target Page. fileciteturn2file0L335-L366

Webinars

PagePilot Webinars support pre-recorded video sessions with timed events and engagement.

Basic flow:

Create Webinar
   ↓
Add Video
   ↓
Add Timeline Events
   ↓
Schedule / Registration
   ↓
Preview
   ↓
Publish

Webinars can be configured through the dashboard or integrated through REST APIs. In this POC, Webinars were explored rather than being the core implementation. fileciteturn2file0L390-L463

Project Structure

pagepilot-mern-poc/
├── client/
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── App.jsx
│       ├── main.jsx
│       └── index.css
├── server/
│   └── src/
│       ├── controllers/
│       ├── models/
│       ├── routes/
│       ├── services/
│       ├── app.js
│       └── server.js
├── .env.example
├── .gitignore
├── package.json
└── README.md

Tech Stack

React + Vite

Node.js + Express

MongoDB (optional request logging)

PagePilot API

AHDjs

DOMPurify

Setup

Environment

Create server/.env:

PORT=5000
CLIENT_ORIGIN=http://localhost:5173
PAGEPILOT_TENANT_ID=6336128a251dcbda38bd8fe1
MONGODB_URI=

Do not store PagePilot passwords in source code. fileciteturn2file0L568-L597

Install

npm install
npm --prefix server install
npm --prefix client install

Or:

npm run install:all

Run

npm run dev

Frontend:

http://localhost:5173

Backend:

http://localhost:5000

Testing

Use a published PagePilot page.

Example:

Name: Show Your Product
Slug: show-your-product

Open:

http://localhost:5173/show-your-product

Also test an invalid slug:

http://localhost:5173/invalid-slug

Tested Slugs

Update with the actual slugs tested before submission:

- fashion-shopping-app
- show-your-product

fileciteturn2file0L629-L681

Security

Keep PagePilot credentials out of source code.

Use environment variables.

Validate slugs on the backend.

Restrict CORS.

Do not expose stack traces.

Exclude .env from Git.

Sanitize PagePilot HTML with DOMPurify.

Exclude node_modules, dist, and build from the submission ZIP.

The POC sanitizes sections[].content before rendering to reduce XSS risk. fileciteturn2file0L683-L756

AI-Assisted Development

AI was used as an engineering assistant for:

MERN architecture

Dynamic routing

PagePilot API integration

AHDjs

Pages / Tours / Tooltips / Webinars

Security review

Debugging

UI and documentation

Workflow:

PagePilot Docs
      ↓
Understand
      ↓
Implement
      ↓
AI Assistance
      ↓
Review Against Docs
      ↓
Test
      ↓
Document

AI output was reviewed against the PagePilot documentation rather than accepted blindly. fileciteturn2file0L778-L828

Example Prompts

Explain the PagePilot assignment and break it into MERN tasks.

Design a React → Express → PagePilot dynamic slug flow.

Review this integration for XSS, CORS and credential security.

Explain the difference between Pages, Tours and Tooltips.

How should ahdjs be initialized in a React application?

Limitations

PagePilot remains the source of truth.

The renderer supports the response structure used by this POC.

The PagePilot editor is not recreated.

Webinars were explored but are not the core implementation.

Tours/Tooltips should only be called fully integrated after actual workspace testing.

MongoDB is optional.

Future Improvements

PagePilot response caching

Automated tests

Authentication/authorization

Complete Tours and Tooltips

Webinar REST API integration

Analytics

Rate limiting and monitoring

More PagePilot content types

Submission Checklist

PagePilot page published

Two real slugs tested

Dynamic routing works

Express → PagePilot API works

Invalid slug handled

AHDjs configured

No credentials committed

.env excluded

node_modules excluded

dist/build excluded

README updated with actual slugs

Key Takeaway

This POC demonstrates:

Dynamic Page Rendering + User Guidance + Tooltips + Video Engagement

with:

React     → UI / Routing
Express   → Integration Layer
PagePilot → Content / Engagement
MongoDB   → Optional Logging
AHDjs     → PagePilot Client Features