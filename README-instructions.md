# How to edit your portfolio

Your site is three files: `index.html` (content/structure), `style.css` (design), `script.js` (behavior). You only need to touch `index.html` for almost everything below.

## 1. Profile photo
- Add your photo to an `assets` folder next to `index.html`, named exactly `profile.jpg` (e.g. `assets/profile.jpg`).
- Until you add one, a placeholder silhouette displays automatically — nothing will break.
- To use a different filename or a `.png`, edit this line in `index.html`:
  `<img src="assets/profile.jpg" ...>`

## 2. Personal info (name, tagline, intro)
Found in the `<section class="hero">` block near the top of `index.html`. Edit the text inside `.hero__name`, `.hero__tagline`, and `.hero__intro` directly.

## 3. About Me
In `<section id="about">`, each card's text is inside `<p class="card__text">`.

## 4. Education
In `<section id="education">`. Each `.timeline__item` is one entry — edit the year in `.timeline__year`, the heading in `.timeline__title`, and the description in `.timeline__text`. Add a new entry by copying an existing `.timeline__item` block and pasting it before `</div>` that closes `.timeline`.

## 5. Skills
- **Academic/Professional Strengths**: edit the `<li>` items inside `.strengths__list`.
- **Technical skill bars**: each bar is a `.skillbar` block. Change the `data-level="70"` number (0–100) to set the bar's fill percentage, and update the matching `.skillbar__value` text (e.g. `70%`) to match.

## 6. Projects & Achievements
In `<section id="projects">`. Each `.project` card has a tag, title, description, a list of skills/technologies (`.project__stack`), and a link (`.project__link href="#"`) — replace `#` with your actual project URL. Copy a whole `.project` block to add more cards. The achievement text is inside `.achievements__text`.

## 7. Contact details
In `<section id="contact">`, inside `.contact__list`: edit the email, phone, and location values directly. The email and phone links use `mailto:` and `tel:` — update those too if you change the values.

### Making the contact form actually send email
Right now the form only shows a confirmation message in the browser — it does not send anywhere yet (a plain HTML/JS site can't send email on its own without a backend). To make it functional, pick one:
- **Formspree** (easiest): create a free form at formspree.io, then change the `<form id="contactForm">` tag to `<form id="contactForm" action="https://formspree.io/f/yourFormID" method="POST">` and remove the `e.preventDefault()` line in `script.js`'s submit handler (or follow Formspree's JS docs).
- **EmailJS**: sends email straight from JavaScript using their SDK — good if you want to keep the custom "Thanks!" message.
- Any backend endpoint you control that accepts POST requests.

## 8. Social links (footer)
In `<footer class="footer">`, each icon is an `<a href="#" class="footer__icon">`. Replace `#` with your real LinkedIn/GitHub/Facebook URLs.

## 9. Colors & fonts (optional)
All colors and fonts are defined once at the top of `style.css` under `:root`, e.g. `--accent: #2E7D6B;`. Change a value there and it updates everywhere that color/font is used.

## 10. Opening the site
Just double-click `index.html` to preview it in your browser — no build step or server required. When you're ready to publish, any static host works (GitHub Pages, Netlify, Vercel).
