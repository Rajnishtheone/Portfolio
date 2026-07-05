# Rajnish Portfolio

This portfolio is built as a content-first Next.js app. Most updates should happen in the `content/` folder, not inside page or layout components.

## How to add a project

1. Open [content/projects.ts](/E:/rajnish-portfolio/content/projects.ts).
2. Add one new object to the `projects` array with its `slug`, title, summary, description, tags, and links.
3. If the project should get its own case-study page, add a `caseStudy` object. That is enough for `/projects/[slug]` and the sitemap to pick it up automatically.

## How to update experience, certifications, or achievements

1. Experience lives in [content/experience.ts](/E:/rajnish-portfolio/content/experience.ts).
2. Open source, certifications, and achievements live in [content/credentials.ts](/E:/rajnish-portfolio/content/credentials.ts).
3. Pages map over those arrays directly, so you only need to edit the data objects.

## How to add a new top-level section later

1. Add the new route folder under `app/`, for example `app/blog/page.tsx`.
2. Add one new item to the `navigation` array in [content/site.ts](/E:/rajnish-portfolio/content/site.ts).
3. Reuse the existing pattern: `PageFade` -> `page-frame` -> `PageIntro` -> content blocks.

## Theme and contact setup

- Theme values live in [app/globals.css](/E:/rajnish-portfolio/app/globals.css).
- Site-wide identity and CTA links live in [content/site.ts](/E:/rajnish-portfolio/content/site.ts).
- Contact now uses direct email and WhatsApp links instead of a form backend.
