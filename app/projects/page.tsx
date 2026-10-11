import type {Metadata} from 'next';
import Link from 'next/link';
import {projects} from '@/lib/projects';

export const metadata:Metadata={title:'Projects & Works',description:'Explore Matthew Roberts’ creative work, research drafts, and ABRM education projects.'};

export default function Projects(){return <main id="main" className="wrap"><section className="page-hero"><span className="eyebrow">PROJECTS & WORKS</span><h1>Ideas taking shape.</h1><p>Explore the creative work, educational concepts, and research drafts connected to Matthew Roberts and ABRM.</p></section><div className="project-grid">{projects.map((project)=><article className="project-card" key={project.slug}><span className="eyebrow">{project.eyebrow}</span><span className="tag">{project.status}</span><h2><Link href={`/projects/${project.slug}`}>{project.title}</Link></h2><p>{project.summary}</p><Link className="text-link" href={`/projects/${project.slug}`}>Explore this project</Link></article>)}</div><div className="notice"><p>Research and education drafts are presented for context. ABRM’s proposed mechanisms and benefits have not been established by controlled studies. Paid programs, automated email delivery, and memberships shown in source concepts are not available through this site.</p></div></main>}

