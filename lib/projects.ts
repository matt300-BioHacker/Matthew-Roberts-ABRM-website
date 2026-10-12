export type Project = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  status: string;
  sourceUrl: string;
  sections: { heading: string; body: string; bullets?: string[] }[];
};

export const projects: Project[] = [
  {
    slug: 'music', title: 'GOAT VAULT · Music LP', eyebrow: 'CREATIVE WORK',
    summary: 'A working music vault and album concept tracing a path from DeKalb and the 404 to Boulder and beyond.',
    status: 'Work in progress · 16 tracks · 5 themes',
    sourceUrl: 'https://www.meta.ai/share/a/841443f1-030c-4a5f-a049-bf8f00371fce',
    sections: [
      { heading: 'A studio notebook in motion', body: 'GOAT VAULT is a developing collection of song drafts, hooks, and bar-bank fragments. The shared build is a local-session prototype: it describes the work as unfinished and does not cloud-save sessions.', bullets: ['Sixteen track cards, from finished drafts to hook-only ideas', 'Five themes: DeKalb roots, money, travel, legacy, and homecoming', 'A working sequence that moves from origin to ambition and legacy'] },
      { heading: 'The album arc', body: 'The project’s center of gravity is a story of place, movement, pressure, and what it means to build a legacy. “A Star Is Born,” “Blue Flame,” and “Homecoming – The Redline Graduation” are among the featured working titles.' }
    ]
  },
  {
    slug: 'guide-workshop', title: 'Restore Kickstart · Guide companion', eyebrow: 'FREE GUIDE JOURNEY',
    summary: 'A post-guide concept for people who want a more guided way to explore the material.',
    status: 'Concept page · checkout and delivery are not connected',
    sourceUrl: 'https://cdn.fbsbx.com/v/t65.102178-21/842234513_2886146748436853_653685170622230106_n.jpg/restore_kickstart_tripwire.html?_nc_ht=cdn.fbsbx.com&_nc_ohc=RFjg6pYhs4AQ7kNvwFHah4z&sdl=0&ccb=14-4&oh=00_AQOAimNnovk3TyxTL45yq96AbJPaxdS9oykft1QgyX_zUA&oe=6AEF25BC&_nc_sid=4ee932',
    sections: [
      { heading: 'A possible next step', body: 'The prototype places an optional workshop after the free guide. It sketches a 90-minute recording, three short guided practices, a printable routine builder, and a Q&A replay. This website currently offers the free guide only; the workshop is not available to buy or receive here.' },
      { heading: 'Keep the free guide simple', body: 'The free starter guide remains available on this site without a purchase. Any future companion would need finished materials, verified delivery, clear terms, and a working checkout before it could be offered.' }
    ]
  },
  {
    slug: 'pilot-study', title: 'ABRM pilot study protocol', eyebrow: 'RESEARCH IN DEVELOPMENT',
    summary: 'A draft proposal for a small, assessor-blinded crossover study comparing a standardized ABRM sequence with a time-matched comparison condition.',
    status: 'Draft for expert critique · not approved or recruiting',
    sourceUrl: 'https://www.meta.ai/share/a/77284877-9689-46c9-8944-7aa647837d78',
    sections: [
      { heading: 'What the draft asks', body: 'Could a reported sequence of pain-location changes be observed consistently after a standardized sequence, and would it differ from a comparison condition? The pilot is framed as feasibility and signal detection, not a test that can establish treatment efficacy.' },
      { heading: 'Proposed design', body: 'The draft outlines a randomized within-person crossover with an assessor-blinded outcome review, a washout between conditions, and a small planned sample. It proposes recording pain maps and exploratory measures such as range of motion, force, surface EMG, and heart-rate variability.' },
      { heading: 'Safety and readiness', body: 'The draft itself calls for qualified clinical review, a defined protocol, ethics review, informed consent, and safety oversight before any participant research. It is not an invitation to perform the sequence or enroll in a study.' }
    ]
  },
  {
    slug: 'academic-brief', title: 'One-page academic brief', eyebrow: 'RESEARCH COLLABORATION',
    summary: 'A concise request for research partners to critique the ABRM question, measurement plan, and safety requirements.',
    status: 'Working brief · documentation in progress',
    sourceUrl: '/research-documents/academic-brief.html',
    sections: [
      { heading: 'Central question', body: 'Can a self-directed sequence of sensory input and movement produce measurable acute changes in reported pain location, movement, or recruitment that can be distinguished from a comparison condition?' },
      { heading: 'What collaboration would help', body: 'The brief seeks methodological critique and support defining a safe, reproducible protocol. It is not seeking endorsement of efficacy or research participants.', bullets: ['Review the protocol and outcome measures', 'Help define blinding and a suitable comparison condition', 'Advise on safety review and the path toward ethics approval'] },
      { heading: 'Knowledge status', body: 'The page separates background concepts, Matthew’s personal observations, and proposed mechanisms. Personal observations are not clinical evidence; the mechanisms remain hypotheses to test.' }
    ]
  },
  {
    slug: 'research-white-paper', title: 'Integrated research guide', eyebrow: 'PREPRINT · NOT PEER REVIEWED',
    summary: 'Matthew’s complete conceptual research guide, presented for scientists and peers to examine the proposed sequence, mechanisms, measurements, and study pathway.',
    status: 'Research draft · v1.0 · for expert critique',
    sourceUrl: '/research-documents/integrated-research-guide.html',
    sections: [
      { heading: 'A testable sequence', body: 'The draft organizes the idea as target, compress, signal, upper-cervical sensory input, move or observe redistribution, recruit, reinforce, and adapt. Each link is a proposed part of the model; the chain is not an established mechanism.' },
      { heading: 'How it could be tested', body: 'The document proposes measurable outcomes and comparison conditions, including pain maps, range of motion, force, EMG, autonomic markers, and follow-up. A useful result could be evidence against the hypothesis as well as evidence that supports further study.' },
      { heading: 'Limits are part of the claim', body: 'The draft states that ABRM is not an established treatment and that its mechanisms and outcomes require controlled research. It calls for specialist review of any upper-cervical component before human-subject research.' }
    ]
  },
  {
    slug: 'free-guide-funnel', title: 'Free guide & Restore community', eyebrow: 'COMMUNITY CONCEPT',
    summary: 'A draft journey from the free starter guide toward optional practice resources and community support.',
    status: 'Concept only · membership, email sequence, and checkout are not connected',
    sourceUrl: 'https://www.meta.ai/share/a/12e613bf-1ee8-4153-b85b-bd96041778c2',
    sections: [
      { heading: 'Start with the free guide', body: 'The concept pairs the ABRM starter guide with an optional seven-day email walkthrough. Its draft resource set includes a short state-shift check-in, three gentle practice ideas, and a routine-builder worksheet. On the live site, the guide is available now; automated email delivery is not connected.' },
      { heading: 'Community and paid programs', body: 'The prototype also sketches a Restore community and several support levels. Those memberships, coaching sessions, course library, testimonials, member counts, and listed prices are draft content only and are not represented as active offers on this site.' },
      { heading: 'A careful public promise', body: 'Any future program should explain its scope, availability, costs, privacy, and cancellation terms clearly. Educational resources do not diagnose or treat health conditions, and individual outcomes are not guaranteed.' }
    ]
  }
];

export const projectBySlug = Object.fromEntries(projects.map((project) => [project.slug, project])) as Record<string, Project>;
