# Bayan Academy Website

Static website for Bayan Academy language teaching sessions with two paths:

- Group sessions
- VIP specialized sessions

Students can switch the website between English, French, and Arabic. The questionnaire also asks which language they want to learn: English, French, or Arabic.

The page includes a trial-session section, a path chooser that preselects questionnaire options, and a simple how-it-works section to help students decide.

After the questionnaire, the site prepares a WhatsApp message with their contact details, language choice, trial-session preference, preferred session type, learning focus, level, goals, and availability.

## Configure WhatsApp

Open `script.js` and replace:

```js
const WHATSAPP_NUMBER = "REPLACE_WITH_YOUR_WHATSAPP_NUMBER";
```

Use the full international number with digits only. For example:

```js
const WHATSAPP_NUMBER = "15551234567";
```

No prices are displayed on the site.
