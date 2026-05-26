# VBI Website: Manual Setup & Configuration Guide

Since your VBI website currently runs as a blazing-fast, serverless Next.js static export, all data is configured securely in the frontend. 

Now that I have built out the structural features of your checklist (like the tracking tags, widgets, and lead capture forms), there are a few places where you need to manually log into your 3rd-party accounts (like Google or Mailchimp) to fetch your unique IDs and paste them into the code.

This document serves as your permanent, ongoing checklist for things you need to do yourself. 

---

## 1. Analytics & Tracking Scripts
I have embedded the official script templates into your global layout files so they load instantly on every single page. You just need to swap my placeholder text with your real account IDs.

**Where to edit:** `app/layout.js`

- [ ] **Google Analytics 4 (GA4)**: 
  - Log into Google Analytics and find your Measurement ID (looks like `G-XXXXXXXXXX`).
  - Open `app/layout.js`, format to Line 86, and replace `G-XXXXXXXXXX` with your real ID.
- [ ] **Google Tag Manager (GTM)**:
  - Log into Google Tag Manager and find your Container ID (looks like `GTM-XXXXXXX`).
  - Open `app/layout.js` and replace the two `GTM-XXXXXXX` placeholders (one in the `<head>` block, one in the `<noscript>` body block) with your real ID.
- [ ] **Hotjar (User Behavior & Heatmaps)**:
  - Log into Hotjar and copy your Site ID (typically a 7-digit number).
  - Open `app/layout.js` and replace the `hjid:XXXXXXX` placeholder with your real ID.

---

## 2. Lead Capture & CRM Forms
I built beautiful, interactive forms across your site for Lead Magnets, Newsletter Signups, Webinar Registrations, and Community Hub access. Right now, because there is no backend server, those forms just show a "Success!" message when clicked.

To actually collect those emails, you need to connect the forms to your CRM (like Mailchimp, ActiveCampaign, or HubSpot) using webhooks or standard form actions.

**Where to edit:** `app/components/LeadMagnetForm.js`, `app/components/NewsletterForm.js`, `app/components/WebinarRegistrationForm.js`, `app/community/CommunityJoinForm.js`, `app/components/ContactForm.js`

- [ ] **Get your CRM Webhook/Action URL:** Log into your email software, create a new Audience/Form, and copy the embed `action="..."` URL.
- [ ] **Update the code:** Go to each of the form components listed above. Inside the code, find the `<form onSubmit={handleSubmit}>` tag.
- [ ] **Wire it up:** Depending on your CRM, either replace the React `onSubmit` with your CRM's `action="YOUR_URL" method="POST"` or use a tool like Zapier to catch the submissions. 
- [ ] *Note: If you use Mailchimp or HubSpot, they provide native React integration scripts to make this easier.*

---

## 3. Live Chat / Chatbot Widget
I built a floating Live Chat widget placeholder in the bottom right corner of your site that currently routes users to your email address dynamically.

**Where to edit:** `app/layout.js`

- [ ] **Install Real SaaS Chat:** If you want a *real* chat tool (like Tidio, Intercom, or Drift), simply delete `<ChatWidget />` from `app/layout.js`.
- [ ] **Paste the script:** Paste the tracking script provided by Tidio/Intercom directly into the `<head>` of `app/layout.js`, exactly like we did for Hotjar.

---

## 4. Off-Site Configurations
These are tasks that do not require any coding, but affect how the VBI website performs in the real world.

- [ ] **Google Business Profile (Local SEO):** Claim your GBP listing and ensure your Address `303, Pinetree Way Mississauga` and Phone Number `(833) 523-1845` matches what we put on the website EXACTLY. *See `marketing-assets/Local_SEO_Checklist.md` for full details.*
- [ ] **Nurture Email Sequence:** Copy the 5-part email sequence we wrote in `marketing-assets/Nurture_Email_Sequence.md` and load it into your CRM's automation builder so that people who download Lead Magnets actually receive follow-ups.
- [ ] **Vimeo Panel Updates:** The videos on your `/events` page are currently pulling from a specific Vimeo folder. If you ever upload new event replays, just update the URLs inside `app/lib/site-data.js`.

---

## 5. Uptime Monitoring & Alerts
Because uptime monitoring "pings" your website from the outside world, it cannot be hardcoded into the website itself. It is a free 3rd-party service you run alongside your website. 

- [ ] **Create an UptimeRobot or BetterStack Account:** Go to [UptimeRobot.com](https://uptimerobot.com) and create a free account.
- [ ] **Add a New Monitor:** Set the type to `HTTP(s)` and point it to `https://www.veterinarybusinessinstitute.com`.
- [ ] **Set Interval and Alerts:** Tell the monitor to ping your site every 5 minutes. Add your real email address or phone number to the "Alert Contacts to Notify" list so it texts you the second the server goes down!

---

*(Note: Whenever we build a new feature requiring an external API key or manual setup, I will update this file so you always have a single source of truth).*
