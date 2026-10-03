import type {Metadata} from 'next';
import './globals.css';
import Navigation from '@/components/abrm/navigation';
import {Footer} from '@/components/abrm/shared';
export const metadata:Metadata={title:{default:'ABRM | Explore movement. Observe what changes.',template:'%s | ABRM'},description:'Explore Autonomic Bio Recovery Maneuvers with founder Matthew Roberts. Free guide, demonstrations, books, podcast, research hypotheses, and community.',icons:{icon:'/favicon.svg'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><a className="skip-link" href="#main">Skip to content</a><Navigation/>{children}<Footer/></body></html>}
