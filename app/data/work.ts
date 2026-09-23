export type DiffLine = readonly [sign: '+' | '-' | ' ', text: string]

export interface CaseStudy {
  slug: string
  title: string
  client: string
  year: string
  role: string
  deck: string // one line for the list
  stack: string[]
  link?: { label: string; href: string }
  diff: { header: string; lines: DiffLine[] }
  sections: { heading: string; paragraphs: string[]; bullets?: string[] }[]
  featured: boolean
}

export const work: CaseStudy[] = [
  {
    slug: 'brails',
    title: 'Rebuilding a payments platform while it ran',
    client: 'Brails',
    year: '2026',
    role: 'Full-stack software engineer, contract',
    deck: 'Two Angular portals rebuilt in React 19 and a stablecoin service rewritten from NestJS to Go, on a live cross-border payments product.',
    stack: ['React 19', 'TypeScript', 'Vite', 'Tailwind v4', 'TanStack Query', 'Go', 'GoFiber', 'Uber FX', 'Bun ORM', 'PostgreSQL', 'Redis'],
    diff: {
      header: 'customer app, admin dashboard, stablecoin service',
      lines: [
        ['-', 'Angular 6 customer app'],
        ['+', 'React 19, six weeks, feature parity'],
        ['-', 'Angular 6 admin dashboard, 18 modules'],
        ['+', 'React 19, five weeks'],
        ['-', 'NestJS stablecoin service'],
        ['+', 'Go (Fiber) with the complete send and receive flow'],
      ],
    },
    sections: [
      {
        heading: 'Context',
        paragraphs: [
          'Brails gives African businesses cross-border payments, multi-currency wallets and virtual cards through an API. When I joined, the platform was mid-migration: the original TypeScript and NestJS services were being rewritten in Go, and the Angular customer portal was due to be rebuilt in React. Customers were sending money through all of it the whole time.',
        ],
      },
      {
        heading: 'What I built',
        paragraphs: [
          'Three migrations in six months, each on a product with paying users and a compliance team watching.',
        ],
        bullets: [
          'The customer-facing application, from Angular 6 to React 19 in six weeks with feature parity: authentication, KYC and compliance, wallets, transactions, virtual cards and accounts, beneficiaries, bulk payments, stablecoin, developer keys and webhooks.',
          'The internal operations dashboard, 18 modules for the ops, compliance and finance teams, from Angular 6 to React in five weeks.',
          'The stablecoin payment service, from NestJS to Go, delivering the complete send and receive flow from deposit-address generation through provider callbacks, plus its React integration.',
          'USD virtual-account creation, and the KYC and compliance onboarding defects that were blocking customers.',
          'Production incident investigation across fiat and stablecoin rails, traced from the UI through the Go services to provider webhooks.',
        ],
      },
      {
        heading: 'How',
        paragraphs: [
          'The React rewrite started with a baseline other engineers could inherit: TypeScript, Vite, Tailwind v4 with shadcn and Radix, TanStack Query for server state, React Hook Form with Zod for forms, code-split routes, and lint, format and commit hooks wired in on day one. The Go side sat inside a platform built on GoFiber, Uber FX for dependency injection, Bun ORM, PostgreSQL and Redis, with goose migrations.',
          'Sequencing mattered more than any single component. Work was ordered so each new Go endpoint shipped alongside the screen that consumed it, and the legacy calls were shimmed through a rewrite layer rather than cut over all at once.',
        ],
      },
      {
        heading: 'Outcome',
        paragraphs: [
          'Both applications reached parity and replaced their Angular predecessors in eleven weeks combined. The stablecoin flow moved onto the Go service. I also wrote the stablecoin API documentation and the end-to-end sequence diagrams, client to API to payments service to custody provider, that the frontend and integration partners worked from.',
        ],
      },
    ],
    featured: true,
  },
  {
    slug: 'papershift',
    title: 'Absence and shift planning for 10,000 people a day',
    client: 'Papershift GmbH',
    year: '2021 to 2024',
    role: 'Frontend engineer, freelance',
    deck: 'A component library, a TypeScript migration and two product modules built end to end on a German workforce-management platform.',
    stack: ['Vue 2.6', 'TypeScript', 'Composition API', 'Vuex', 'Vue I18n', 'Buefy', 'Tailwind', 'Mobiscroll', 'Jest', 'Storybook', 'Chromatic', 'Sentry', 'Rails API'],
    link: { label: 'papershift.com', href: 'https://www.papershift.com/en' },
    diff: {
      header: 'a Vue 2.6 product with 10,000+ daily active users',
      lines: [
        ['-', 'untyped modules, ad-hoc UI'],
        ['+', 'TypeScript, 78% coverage, 15% faster'],
        ['+', 'shared component library, 12% fewer regression bugs'],
        ['+', 'legacy modules refactored, 22% fewer crash reports'],
      ],
    },
    sections: [
      {
        heading: 'Context',
        paragraphs: [
          'Papershift is a cloud HR platform used for legally compliant time tracking, shift rostering, absence management and payroll preparation across hospitality, retail, healthcare and manufacturing. The frontend was a Vue 2.6 application backed by a Rails API, with a Mobiscroll scheduler at its centre. I worked on it as a freelance frontend engineer for four years, remote from Lagos, embedded with the team in Karlsruhe.',
        ],
      },
      {
        heading: 'What I built',
        paragraphs: ['Two kinds of work: the foundations, and the product modules that sat on them.'],
        bullets: [
          'A library of reusable Vue components, which cut regression bugs by 12% and sped up feature delivery, measured in the fortnightly retrospectives.',
          'The TypeScript migration, bringing the Composition API into the Vue 2.6 codebase and reaching 78% code coverage with a 15% performance improvement.',
          'The absence-management module: the calendar timeline integration, overlap detection and notification, date-range filters, attachment validation, employee search, timezone-correct absence creation and the mobile layouts.',
          'The shift-plan module from an empty directory: module types, store, routes and components, then area sections, shift cards, shift templates and staffing-state colouring on the scheduler.',
          'Automated testing in the workflow with Jest, Storybook and Chromatic, plus Hotjar, numbered web releases and a Jira board cleanup.',
        ],
      },
      {
        heading: 'Outcome',
        paragraphs: [
          'Crash reports fell 22% after the legacy refactor. The absence and shift-plan modules shipped to production and are part of the product today. Papershift’s managing director issued an employment certificate describing the work as designing scalable, maintainable user-facing applications, crafting modular and reusable components, and introducing automated testing into the development workflow.',
        ],
      },
    ],
    featured: true,
  },
  {
    slug: 'vue-mastery',
    title: 'Keeping the Vue ecosystem’s classroom running',
    client: 'Vue Mastery',
    year: '2021 to present',
    role: 'Full-stack engineer, contract',
    deck: 'Cloud Functions, storage hardening, content migrations and campaign launches for the platform that teaches Vue.js.',
    stack: ['Nuxt 2', 'Firebase Auth', 'Firestore', 'Cloud Functions', 'Cloud Storage', 'Flamelink CMS', 'Chargebee', 'MailerLite', 'Algolia', 'CircleCI', 'Sentry', 'GTM'],
    link: { label: 'vuemastery.com', href: 'https://www.vuemastery.com' },
    diff: {
      header: 'storage, downloads and deployments',
      lines: [
        ['-', 'storage bucket readable and writable by anyone'],
        ['+', 'authenticated, read-only, CORS scoped to production, staging and local'],
        ['-', 'lesson videos served only from Vimeo'],
        ['+', '207 lessons in Cloud Storage behind subscription-gated signed URLs'],
        ['-', '4,724 profile images uploaded at any size'],
        ['+', 'optimised in place, 2 MB limit on new uploads'],
      ],
    },
    sections: [
      {
        heading: 'Context',
        paragraphs: [
          'Vue Mastery is the video-course platform run by Vue.js core team members and instructors. It is a Nuxt 2 application on Firebase, with Flamelink as the CMS and Chargebee for subscriptions, maintained by a very small team. I joined in September 2021 as the engineer for the platform and its campaigns, full-time through the end of that year and on a part-time retainer since.',
        ],
      },
      {
        heading: 'What I built',
        paragraphs: ['The first month was infrastructure; after that, whatever the platform needed.'],
        bullets: [
          'A signed-URL download service as a Firebase Cloud Function, gated by subscription state and allowing free-tagged courses through, with the IAM roles and CORS scoped to exactly what it needed.',
          'Storage hardening: the bucket went from public read and write to authenticated read-only.',
          'The migration of 207 lesson videos from Vimeo into Cloud Storage, with Flamelink schema changes to track upload state, and a production run that optimised 4,724 user profile images.',
          'An IP-to-location function so visitors in countries where Vimeo is blocked see a banner explaining why a video will not play.',
          'The Chargebee cancel-subscription function, GA4 and Google Ads conversion tracking through Google Tag Manager, MailerLite reconciliation cron jobs, and GDPR compliance.',
          'Every Black Friday, Holiday and Free Weekend campaign since 2021: landing pages, banners, coupon flows, countdowns and pricing changes, reviewed on staging with the founders and shipped on the day.',
          'CircleCI deployments for staging and production, including recovering from a maxed-out deployment limit and a service-key incident.',
        ],
      },
      {
        heading: 'Outcome',
        paragraphs: [
          'Downloads, storage and billing stopped generating support tickets. The retainer has run for five years. Along the way I contributed documentation and pull requests to the Vue.js and Pinia ecosystems.',
        ],
      },
    ],
    featured: true,
  },
  {
    slug: 'spendive',
    title: 'Three products onto one modern Nuxt stack',
    client: 'Spendive',
    year: '2025',
    role: 'Full-stack engineer, contract',
    deck: 'The customer app, vendor portal and admin dashboard of a spend-management SaaS modernised onto TypeScript, Vue 3 and Nuxt 4.',
    stack: ['Nuxt 4', 'Vue 3', 'TypeScript', 'Nuxt UI', 'Reka UI', 'Tailwind v4', 'Pinia', 'Pinia Colada', 'TanStack Table', 'Vue Flow', 'TipTap', 'Paystack', 'Laravel Echo', 'Playwright', 'Vitest', 'Contentful', 'Vercel', 'Go'],
    link: { label: 'spendive.com', href: 'https://www.spendive.com' },
    diff: {
      header: 'customer app, vendor portal, admin dashboard, marketing site',
      lines: [
        ['-', 'three separately ageing Vue applications'],
        ['+', 'TypeScript, Vue 3 and Nuxt 4, shared conventions across all three'],
        ['-', 'marketing site invisible to search'],
        ['+', 'sitemap, robots and schema.org structured data'],
      ],
    },
    sections: [
      {
        heading: 'Context',
        paragraphs: [
          'Spendive is a spend and procurement platform built for businesses in Nigeria: expenses, procurement and approvals, budgets, vendor onboarding, corporate cards and accounting integrations. It has three applications with three audiences, plus a public marketing site on Contentful.',
        ],
      },
      {
        heading: 'What I built',
        paragraphs: ['I led the modernisation of all three applications and kept releases stable while it landed.'],
        bullets: [
          'The customer application: onboarding, expenses, procurement, invoicing, wallet, requests, approvals, vendors, marketplace, insights and settings, with approval workflows drawn as diagrams using Vue Flow and Dagre.',
          'The vendor portal, the supplier side of the procurement flow: catalogues, RFQs, orders, invoices, messages and wallet.',
          'The admin dashboard on shadcn-nuxt and Reka UI with TanStack Vue Table and VeeValidate with Zod.',
          'Realtime updates over Laravel Echo, rich text with TipTap, inline Paystack payments, and Playwright and Vitest coverage.',
          'SEO on the public site with the Nuxt SEO suite, and backend features and fixes in Go where the frontends needed them.',
        ],
      },
      {
        heading: 'Outcome',
        paragraphs: [
          'Deployments set up for four applications with releases kept stable throughout the engagement, and improved search visibility for the public site.',
        ],
      },
    ],
    featured: true,
  },
  {
    slug: 'ehcc',
    title: 'A reporting platform for a church network, from zero',
    client: 'EHCC',
    year: '2025',
    role: 'Sole engineer, frontend and backend',
    deck: 'Locations, directorates and departments file periodic reports up a hierarchy. This replaced the spreadsheets with templates, workflows and analytics.',
    stack: ['Vue 3', 'TypeScript', 'Vite', 'Pinia', 'Pinia Colada', 'Reka UI', 'Tailwind', 'TipTap', 'ApexCharts', 'NestJS 11', 'TypeORM', 'PostgreSQL', 'Redis', 'AWS S3', 'AWS Lambda'],
    link: { label: 'Live app', href: 'https://main.d39df4f843f0jh.amplifyapp.com/login' },
    diff: {
      header: 'how reports move through the organisation',
      lines: [
        ['-', 'reports compiled by hand at every level of the hierarchy'],
        ['+', 'templated reports filed once, aggregated by directorate and location'],
        ['+', 'role-based access down to the department'],
        ['+', 'analytics dashboards and Excel export for the people who still want a spreadsheet'],
      ],
    },
    sections: [
      {
        heading: 'Context',
        paragraphs: [
          'The Evangelical Holiness Church of Christ is a church body whose locations, directorates and departments file periodic reports upward. I designed and built both halves of the platform that digitises it.',
        ],
      },
      {
        heading: 'What I built',
        paragraphs: [],
        bullets: [
          'The API on NestJS 11 with TypeORM and PostgreSQL: locations, directorates, departments, members and users; template-driven directorate and department reports; document uploads to S3 and Cloudinary; analytics; JWT authentication with role-based permissions; Excel and CSV import and export; email. Deployable as an AWS Lambda.',
          'The application on Vue 3 with Vite and TypeScript: dashboard, members, reports, report templates, configuration, user management, analytics and settings, with TanStack tables, TipTap editing, ApexCharts dashboards and an embedded AI chat panel.',
        ],
      },
      {
        heading: 'Outcome',
        paragraphs: ['In production, with granular role-based administration and dynamic report templates the organisation maintains itself.'],
      },
    ],
    featured: true,
  },
  {
    slug: 'security-hub',
    title: 'A security hub that reads the whole request path',
    client: 'Independent, for financial services',
    year: '2026',
    role: 'Engineer, detection engine and dashboard',
    deck: 'A Go service that ingests logs from the edge to the host, runs MITRE ATT&CK-mapped detection rules and streams alerts to a triage dashboard.',
    stack: ['Go', 'GoFiber', 'pgx', 'PostgreSQL', 'goose', 'zerolog', 'Server-Sent Events', 'React 19', 'Vite', 'Tailwind v4', 'TanStack Query', 'Recharts'],
    link: { label: 'github.com/i5dr0id/sentinel-api', href: 'https://github.com/i5dr0id/sentinel-api' },
    diff: {
      header: 'where the security signal lived',
      lines: [
        ['-', 'Cloudflare WAF logs in one place, nginx in another, app and auth logs in a third'],
        ['+', 'one HTTP ingestion path, one normalised event shape'],
        ['+', 'geo and ASN enrichment, MITRE ATT&CK-mapped rules'],
        ['+', 'a triage queue and a live request stream on the dashboard'],
      ],
    },
    sections: [
      {
        heading: 'Context',
        paragraphs: [
          'Financial services platforms see a lot of hostile traffic, and the evidence for any one incident is usually spread across the WAF, the API gateway, the application servers and the hosts. I built the security hub as an independent project to put that in one place, with the ingestion and detection core kept separate so it can sit in front of any product.',
        ],
      },
      {
        heading: 'What I built',
        paragraphs: [],
        bullets: [
          'The detection engine in Go: HTTP ingestion for Cloudflare WAF and CDN, gateway and nginx, application and host or auth logs; normalisation into one event shape; enrichment with geo and ASN data; a rule engine mapped to MITRE ATT&CK techniques; an alert triage queue; and a live request stream over Server-Sent Events. PostgreSQL through pgx with goose migrations, structured logging with zerolog, and a traffic simulator for development.',
          'The dashboard in React 19: five screens, Hub for live traffic and posture, Alerts for the triage queue, Investigate, Respond and Settings.',
        ],
      },
      {
        heading: 'Outcome',
        paragraphs: ['A standalone service with its own data model, a dashboard that shows the request stream as it happens, and a core that is not tied to the product it was built for.'],
      },
    ],
    featured: true,
  },
  {
    slug: 'cutnjoin',
    title: 'A post-production studio’s site, store and footage library',
    client: 'CUT&JOIN Studios',
    year: '2025 to 2026',
    role: 'Engineer, design to deployment',
    deck: 'Marketing site, CMS, a free 4K drone-footage library, a merch store with Paystack checkout and a protected quote form, on Next.js and Sanity.',
    stack: ['Next.js', 'App Router', 'TypeScript', 'Tailwind v4', 'Motion', 'Sanity', 'React Hook Form', 'Zod', 'Resend', 'Paystack', 'Cloudflare R2', 'Cloudflare Turnstile', 'GA4', 'Lenis', 'Vercel'],
    link: { label: 'cutnjoin.vercel.app', href: 'https://cutnjoin.vercel.app' },
    diff: {
      header: 'what a studio website has to do',
      lines: [
        [' ', 'services, portfolio and a showreel'],
        ['+', 'a free 4K aerial footage library served from Cloudflare R2'],
        ['+', 'a merch store with Paystack checkout and an order-confirmation webhook'],
        ['+', 'a quote form behind Turnstile, and a Sanity studio at /studio'],
      ],
    },
    sections: [
      {
        heading: 'Context',
        paragraphs: [
          'CUT&JOIN is a digital post-production house in Lagos, eight years and two hundred projects in: editing, colour grading, video production, sound design, rentals and training. They needed a site that did more than describe the services.',
        ],
      },
      {
        heading: 'What I built',
        paragraphs: [],
        bullets: [
          'The site on the Next.js App Router with Sanity as the content layer, the Studio mounted at /studio so the team edits in place.',
          'A footage library of free 4K drone clips of Lagos and Abuja under a free-footage licence, served from Cloudflare R2.',
          'A merch store with Paystack checkout and a webhook that confirms orders, a quote form protected by Cloudflare Turnstile, newsletter signup, and transactional email through Resend.',
        ],
      },
      {
        heading: 'Outcome',
        paragraphs: ['Live on Vercel with Cloudflare Web Analytics and GA4, and a content workflow the studio runs without an engineer.'],
      },
    ],
    featured: true,
  },
]

/** Smaller pieces that get a line, not a page. */
export const moreWork: { name: string; text: string; href?: string }[] = [
  { name: 'Outfit.ng', text: 'Nigerian fashion marketplace: a Nuxt 2 PWA storefront with Paystack, a Vuetify admin, an Express and MongoDB API, and a Sharp-based media service.', href: 'https://outfit.ng' },
  { name: 'Halogen Group', text: 'Corporate site for West Africa’s largest integrated security provider, with an interactive coverage map. Next.js.' },
  { name: 'Toviri admin', text: 'Admin dashboard for a travel-tech platform: users, trips, live SOS alerts, subscriptions. Next.js, TanStack, Zustand.' },
  { name: 'ComicPad', text: 'AI comic creation and reading: text-to-comic generation, a storyboard editor, sharing and paid tiers. Next.js, Prisma, Stripe.' },
  { name: 'Blazesoft Studio', text: 'Figma-driven company site with a contact-form mail API. Next.js 15.', href: 'https://blazesoftstudio.com' },
  { name: 'Enthronement Assembly', text: 'Church website with ministries, messages, giving and a member portal.', href: 'https://enthronementassembly.org' },
  { name: 'Kafene', text: 'Customer, merchant and admin dashboards for a New York lease-to-own financing platform, in partnership through Enyata. Nuxt, Vuetify, Aurelia.' },
]
