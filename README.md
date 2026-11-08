# Haira M.A.K — Portfolio Site

Static site, no build step required: plain HTML, CSS and JavaScript. Open `index.html`
in a browser to preview locally, or use a simple local server (e.g. the VS Code
"Live Server" extension) so relative links behave exactly like they will in production.

## File structure

```
portfolio/
├── index.html          Home
├── about.html
├── experience.html      Timeline of experience and training
├── certificates.html    Filterable certificate/achievement gallery
├── projects.html        Shipped projects + 6-project roadmap
├── skills.html
├── contact.html          Validated contact form
├── css/style.css
├── js/script.js         Typing animation, skill bars, filters, form validation, scroll reveal
└── assets/
    └── resume.html      Printable résumé (use the "Print / Save as PDF" button)
```

## Things to fill in before you publish

Review the details below before publishing:

- **Certificates page** — real workshop names, departmental competition names, whether
  you won or participated, organizers, and years.
- **Experience page** — exact start/end dates for each internship, and 1–2 concrete
  tasks or outcomes per role.
- **Contact page** — your professional email and (optionally) phone number.
- **Home page hero** — swap the initials avatar for a real photo:
  replace the `<div class="avatar-mono">HM</div>` block in `index.html` with
  `<img src="assets/photo.jpg" alt="Haira M.A.K">` once you have a headshot.
- **Résumé** — `assets/resume.html` is a print-to-PDF starting point with the same
  placeholders. Once it's accurate, click "Print / Save as PDF" and save the PDF into
  `assets/resume.pdf`; then you can link that file directly instead of the HTML page
  if you prefer a static download.
- **Certificate images** — each certificate card currently uses an emoji icon
  (`.cert-icon`). Swap in `<img src="assets/certs/your-cert.jpg" alt="...">` once you
  have scans/exports of the actual certificates.

## Hosting & domain options

You don't need a server for this — it's static HTML/CSS/JS. Pick whichever is easiest:

1. **GitHub Pages (free, simplest since your code is already on GitHub)**
   - Push this folder to a repo (e.g. `haira-portfolio`).
   - In the repo: Settings → Pages → Source → deploy from the `main` branch, root folder.
   - Your site goes live at `https://hxgalaxy-offical.github.io/haira-portfolio/`.
   - For a repo named exactly `hxgalaxy-offical.github.io`, it becomes your root GitHub Pages URL.

2. **Netlify or Vercel (free tier, a bit more polish)**
   - Drag-and-drop the `portfolio` folder into Netlify's dashboard, or connect the GitHub repo
     for auto-deploys on every push.
   - Both give you a free subdomain (e.g. `haira-dev.netlify.app`) instantly, and both make it
     easy to wire up the contact form later (Netlify Forms, or a Vercel serverless function).

3. **Custom domain (optional, ~$10–15/year)**
   - Buy something short and memorable from a registrar (Namecheap, Google Domains successor
     Squarespace Domains, etc.) — e.g. `hairamak.dev` or `hairamak.com`.
   - Point its DNS at GitHub Pages / Netlify / Vercel (each has a short "custom domain" guide);
     propagation usually takes under an hour.
   - A `.dev` domain enforces HTTPS by default, which is a nice touch for a dev portfolio.

Start with GitHub Pages or Netlify to get a live link fast — you can add a custom domain
any time later without rebuilding anything.

## Growing the site later

- **New project**: duplicate a `.project-card` block in `projects.html`.
- **New certificate**: duplicate a `.cert-card` block in `certificates.html` and set its
  `data-category` to `course`, `workshop`, `winner`, or `participation` so the filter picks it up.
- **New internship/job**: duplicate a `.timeline-item` block in `experience.html`; add
  `class="timeline-item current"` to whichever one is your active role, and remove that class
  from the previous one.
- **Skills**: add a new `.skill-item` block in `skills.html`, or a new `.skill-category` section
  entirely (e.g. once you have real project experience with a database or cloud platform).
