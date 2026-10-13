'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import {nav} from '@/lib/content';
export default function Navigation(){const [open,setOpen]=useState(false);const path=usePathname();return <header className="site-header"><div className="header-inner"><Link href="/" className="brand" aria-label="ABRM home">ABRM<span>BY MATTHEW ROBERTS</span></Link><nav className={open?'navigation is-open':'navigation'} aria-label="Main navigation">{nav.map(([name,href])=><Link key={href} href={href} aria-current={path===href?'page':undefined} onClick={()=>setOpen(false)}>{name}</Link>)}<Link className="nav-community" href="/community" onClick={()=>setOpen(false)}>Community</Link><Link href="/guide" className="button small" onClick={()=>setOpen(false)}>Free starter guide</Link></nav><button className="menu-button" onClick={()=>setOpen(!open)} aria-expanded={open} aria-label={open?'Close menu':'Open menu'}>{open?<X/>:<Menu/>}</button></div></header>}
