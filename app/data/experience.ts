export interface Role {
  company: string
  title: string
  period: string
  start: number
  where: string
  summary: string
  work?: string // slug of the case study, if there is one
}

export const experience: Role[] = [
  {
    company: 'Brails',
    title: 'Full-stack software engineer, contract',
    period: 'Jan to Jun 2026',
    start: 2026,
    where: 'Cross-border payments, remote',
    summary:
      'Led the stablecoin service migration from NestJS to Go and rebuilt the customer and admin applications from Angular 6 to React 19. Owned production incidents across fiat and stablecoin rails.',
    work: 'brails',
  },
  {
    company: 'Spendive',
    title: 'Full-stack engineer, contract',
    period: 'Jul to Dec 2025',
    start: 2025,
    where: 'Spend and procurement SaaS, remote',
    summary:
      'Modernised the customer app, vendor portal and admin dashboard onto TypeScript, Vue 3 and Nuxt 4. Improved SEO on the public site, ran deployments on Vercel, fixed things in Go when needed.',
    work: 'spendive',
  },
  {
    company: 'Papershift GmbH',
    title: 'Frontend engineer, freelance',
    period: 'Dec 2021 to 2025',
    start: 2021,
    where: 'Workforce management, Karlsruhe, remote',
    summary:
      'Built the component library and led the TypeScript migration for a scheduling product with 10,000+ daily users. Shipped the absence and shift-planning modules end to end.',
    work: 'papershift',
  },
  {
    company: 'Vue Mastery',
    title: 'Full-stack engineer, contract',
    period: 'Sep 2021 to present',
    start: 2021,
    where: 'Vue.js education, Orlando, remote',
    summary:
      'Full-time through 2021, part-time since. Cloud Functions, storage hardening, video and image migrations, CircleCI deployments, and every Black Friday, Holiday and Free Weekend campaign.',
    work: 'vue-mastery',
  },
  {
    company: 'Enyata',
    title: 'Software engineer, then technical team lead',
    period: 'Jul 2019 to Nov 2021',
    start: 2019,
    where: 'Software consultancy, Lagos',
    summary:
      'Managed a team of product and software engineers, reviewed their code, and trained interns and Enyata Academy students in frontend development. Ran the remote partnership with Kafene in New York.',
  },
  {
    company: 'AlgoStacks',
    title: 'Full-stack engineer, then technical lead',
    period: 'Nov 2017 to May 2019',
    start: 2017,
    where: 'Retail technology and data analytics, Lagos',
    summary:
      'Ran Linode infrastructure for a Flask recommendation system at 99.9% uptime, built a PWA store with a 90% Lighthouse score, and integrated a PCI-DSS-compliant point of sale in a month.',
  },
  {
    company: 'One Percent Lab',
    title: 'Software engineer',
    period: 'Jun 2016 to Oct 2017',
    start: 2016,
    where: 'Lagos, remote',
    summary:
      'A fundraising web application that lifted engagement 35% and cut bounce rate 20%, and a payment UI that reduced cart abandonment 12% in its first month.',
  },
]
