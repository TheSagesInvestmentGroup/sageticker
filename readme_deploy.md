# SageTicker Web App — Deploy Guide (10 minutes)

The **WebApp** folder is a complete, ready-to-host web app: installable on phones (Add to Home Screen), works offline after first load, opens on the animated Spotlight screen, live Stripe checkout wired in, and social-share preview image included.

## Deploy — easiest path (Netlify, free)
1. Go to **app.netlify.com/drop** (create a free account if asked).
2. Drag the entire **WebApp folder** onto the page. Done — you get a live URL like `https://something.netlify.app` in ~20 seconds.
3. Test it on your phone: open the URL, watch Spotlight animate, tap through the tabs, and confirm the install banner appears (Android shows an Install button; iPhone shows Share → Add to Home Screen instructions).

*(Alternatives: Vercel or Cloudflare Pages — same drag-and-drop idea.)*

## Connect your domain
4. In Netlify: Site settings → Domain management → Add custom domain → `sageticker.com` → follow the DNS instructions at your domain registrar. HTTPS is automatic.

## IMPORTANT — one edit if your domain differs
The social-preview tags in `index.html` point to `https://sageticker.com/og-image.png`. If you deploy to a different domain, open `index.html` and replace both `https://sageticker.com/` URLs (og:url, og:image, twitter:image) with your actual domain. Social sites require the full absolute URL or the preview image won't show.

## Verify the social preview
5. Paste your URL into these free checkers to confirm the image card renders:
   - Facebook: developers.facebook.com/tools/debug
   - LinkedIn: linkedin.com/post-inspector
   - X/Twitter: just paste the link in a draft post
   Every share of your link on Facebook, X, LinkedIn, WhatsApp, iMessage, Slack, etc. will automatically display the "Your Portfolio, Always On Screen" card.
   Note: link cards are static by design (no platform animates them). For moving previews in feeds, post the promo videos/cards from the Marketing folder as native uploads with the link in the caption — that combo outperforms bare links anyway.

## What's in the folder
| File | Purpose |
|---|---|
| index.html | The app (Spotlight animated landing, PWA + install prompt, live Stripe link) |
| manifest.webmanifest | Home-screen install config (name, icon, standalone mode) |
| sw.js | Service worker — offline caching |
| icon-512/192/180.png, favicon-32.png | App + home-screen icons (Icon A — Breakout Candles) |
| og-image.png | 1200×630 social share card |

## Payments status
LIVE — Subscribe button opens: https://buy.stripe.com/7sY8wJ2rW7XAazF0f767S01
