/**
 * 5-Tab Smart Aptitude — content keyed by role (reference: adaptive assessment mocks).
 * Primary copy matches Cloud Engineer; other roles use parallel, role-aware prompts.
 */

export const aptitudeRoles = [
  { id: 'cloud-engineer', label: 'Cloud Engineer' },
  { id: 'software-developer', label: 'Software Developer' },
  { id: 'hr-manager', label: 'HR Manager' },
  { id: 'data-analyst', label: 'Data Analyst' },
]

/** @typedef {{ text: string, image?: { caption: string, tag: string, variant: 'sky' | 'emerald' } }} AptitudeQuestion */

/**
 * @type {Record<string, Record<string, { questions: AptitudeQuestion[] }>>}
 */
export const aptitudePanelsByRole = {
  'cloud-engineer': {
    esds: {
      questions: [
        { text: 'Explain ESDS eNlight Cloud multi-tenancy architecture' },
        { text: 'How does ESDS ensure 99.995% SLA uptime?' },
        { text: 'Describe ESDS sovereign data center Tier-4 compliance' },
      ],
    },
    reasoning: {
      questions: [
        {
          text: 'If a server has 16 vCPUs and runs at 75% utilization, how many effective CPUs are free?',
        },
        {
          text: 'A network has 3 switches, each with 24 ports. How many devices can connect?',
        },
      ],
    },
    english: {
      questions: [
        { text: "Explain 'latency' to a non-technical stakeholder in 2 sentences" },
        {
          text: "Choose the correct technical term: The server 'went down' / 'experienced downtime'",
        },
      ],
    },
    quantitative: {
      questions: [
        { text: 'A 100Mbps link transfers a 2GB file. How many seconds does it take?' },
        {
          text: 'If storage grows 20% monthly from 100TB, what is the size after 3 months?',
        },
      ],
    },
    'image-perception': {
      questions: [
        {
          text: 'What infrastructure challenge does this network diagram represent?',
          image: {
            caption: 'A mountain peak with a lone climber at the summit, sunrise behind.',
            tag: 'Leadership Assessment',
            variant: 'sky',
          },
        },
        {
          text: 'Describe the cloud architecture pattern shown in this image',
          image: {
            caption: 'Diverse team around a table collaborating on a project.',
            tag: 'Teamwork Assessment',
            variant: 'emerald',
          },
        },
      ],
    },
  },
  'software-developer': {
    esds: {
      questions: [
        { text: 'How does ESDS support CI/CD and secure release pipelines for product teams?' },
        { text: 'Outline observability expectations for production services on the ESDS stack.' },
      ],
    },
    reasoning: {
      questions: [
        { text: 'If API latency doubles while throughput stays flat, what might you inspect first?' },
        { text: 'Given a queue depth of 8 and 4 workers, when does work start to backlog?' },
      ],
    },
    english: {
      questions: [
        { text: 'Summarize a race condition to a product manager in two sentences.' },
        { text: 'Pick the clearer wording: “we shipped a fix” vs “we deployed a patch.”' },
      ],
    },
    quantitative: {
      questions: [
        { text: 'A service handles 450 RPS with p95 120ms. What concurrency is implied (approx.)?' },
        { text: 'If build time drops 15% each sprint for 3 sprints, what is cumulative improvement?' },
      ],
    },
    'image-perception': {
      questions: [
        {
          text: 'What scaling risk does this system diagram highlight?',
          image: {
            caption: 'Layered services with a single shared database instance.',
            tag: 'Architecture Review',
            variant: 'sky',
          },
        },
        {
          text: 'Which ownership gap does this team diagram suggest?',
          image: {
            caption: 'Overlapping responsibilities between Platform and SRE.',
            tag: 'Org Design',
            variant: 'emerald',
          },
        },
      ],
    },
  },
  'hr-manager': {
    esds: {
      questions: [
        { text: 'How would you explain ESDS hiring SLAs to hiring managers?' },
        { text: 'Describe structured feedback loops between HR and panelists on ETIP.' },
      ],
    },
    reasoning: {
      questions: [
        { text: 'If 40% of offers decline, which two funnel stages do you validate first?' },
        { text: 'How do you detect bias when interview scores cluster by panel team?' },
      ],
    },
    english: {
      questions: [
        { text: 'Rewrite “role is put on hold” as a neutral, candidate-friendly update.' },
        { text: 'Give one inclusive alternative to “culture fit” in written feedback.' },
      ],
    },
    quantitative: {
      questions: [
        { text: 'With 220 applicants and 18% pass-through, how many reach the panel stage?' },
        { text: 'If time-to-hire improves 3 days per month for 4 months, total days saved?' },
      ],
    },
    'image-perception': {
      questions: [
        {
          text: 'What candidate experience issue does this journey sketch suggest?',
          image: {
            caption: 'Multiple handoffs between scheduling tools and inbox threads.',
            tag: 'Experience Audit',
            variant: 'sky',
          },
        },
        {
          text: 'Which policy signal is visible in this org chart snapshot?',
          image: {
            caption: 'HRBP coverage ratios across regional hubs.',
            tag: 'Coverage Review',
            variant: 'emerald',
          },
        },
      ],
    },
  },
  'data-analyst': {
    esds: {
      questions: [
        { text: 'How does ESDS define residency and lineage for analytics datasets?' },
        { text: 'What KPIs would you track for adaptive assessment quality over time?' },
      ],
    },
    reasoning: {
      questions: [
        { text: 'If conversion drops only on mobile, what dimensions do you slice first?' },
        { text: 'How would you rule out a broken event versus true demand change?' },
      ],
    },
    english: {
      questions: [
        { text: 'Explain “confidence interval” to a stakeholder who dislikes statistics.' },
        { text: 'Choose clearer wording: “the metric moved” vs “we observed a shift.”' },
      ],
    },
    quantitative: {
      questions: [
        { text: 'A dashboard refreshes every 5 minutes; how many refreshes in an 8-hour shift?' },
        { text: 'If MAU grows 8% weekly for 3 weeks from 50k, what is the approximate MAU?' },
      ],
    },
    'image-perception': {
      questions: [
        {
          text: 'What anomaly stands out in this funnel visualization?',
          image: {
            caption: 'Sharp drop between two adjacent funnel stages for one source only.',
            tag: 'Source Diagnosis',
            variant: 'sky',
          },
        },
        {
          text: 'Which comparison in this chart is potentially misleading?',
          image: {
            caption: 'Dual-axis plot mixing counts and percentages without labels.',
            tag: 'Visualization Hygiene',
            variant: 'emerald',
          },
        },
      ],
    },
  },
}
