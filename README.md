# Anmol Agrawal — Portfolio

A content-driven React + TypeScript portfolio for Anmol Agrawal, built with Vite.

## Run locally

```bash
npm install
npm run dev
```

Create a production build with `npm run build` and preview it with `npm run preview`.

## Content

Portfolio content is centralized in `src/data.ts`. Update `profile` for contact, GitHub, LinkedIn, coding profile, and resume URLs. Set `status` and `featured` on each project to control ordering and presentation. Optional case-study fields appear only when populated. Replace `ADD_URL_SHORTENER_GITHUB_URL` with the repository URL when available; unconfigured project links are not shown.

The current resume is served from `public/resume/Anmol_Agrawal_Resume_Updated.docx`; update `profile.resume` when replacing it.

## Deployment

The generated `dist` directory can be deployed to Vercel, Netlify, or any static host. For Vercel, import the repository and use the default Vite build settings.
