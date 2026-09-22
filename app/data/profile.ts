export const profile = {
  name: 'Israel Ugbodaga',
  handle: 'i5dr0id',
  role: 'Software engineer',
  remote: 'Works remotely with teams in Germany, the US and Nigeria',
  email: 'israelugbodaga@gmail.com',
  github: 'https://github.com/i5dr0id',
  linkedin: 'https://linkedin.com/in/israelugbodaga',
  resume: 'https://docs.google.com/document/d/e/2PACX-1vTqMOFc_2dBUQ2EZ6LlTGgzBR7i6EnHZSlyQubo2lgU1y1N2tMGz24ffyqo7-2TzCQ9YeJFgiEwAsrJ/pub',
  site: 'https://i5dr0id.github.io',
  headline: 'I move production systems between frameworks and languages, with the users still on them.',
  intro:
    'Ten years of shipping software, most of it for teams I have never sat in a room with. Vue and React up front, Go and Node.js behind, PostgreSQL underneath. Most recently I rebuilt a payments platform’s Angular portals in React and rewrote its stablecoin service in Go, while the customers kept sending money.',
}

/** The hero: a real unified diff of the migrations, one hunk per engagement. */
export const heroDiff = {
  from: 'a/legacy',
  to: 'b/production',
  hunks: [
    {
      header: 'Brails, 2026',
      lines: [
        ['-', 'Angular 6 customer app'],
        ['+', 'React 19, rebuilt in six weeks with feature parity'],
        ['-', 'NestJS stablecoin service'],
        ['+', 'Go (Fiber), complete send and receive flow'],
      ],
    },
    {
      header: 'Papershift, 2021 to 2024',
      lines: [
        ['-', 'untyped Vue 2.6 modules'],
        ['+', 'TypeScript at 78% coverage, 22% fewer crash reports'],
      ],
    },
    {
      header: 'Vue Mastery, 2021',
      lines: [
        ['-', 'storage bucket readable and writable by anyone'],
        ['+', 'authenticated reads, signed URLs, least-privilege IAM'],
      ],
    },
  ],
} as const
