import type {Metadata} from 'next';
import './globals.css';
import Navigation from '@/components/abrm/navigation';
import {Footer} from '@/components/abrm/shared';
export const metadata:Metadata={title:{default:'ABRM | A hopeful approach to whole-body well-being.',template:'%s | ABRM'},description:'Explore Matthew Roberts’ nonmedical, nonsurgical ABRM approach to pain and whole-body well-being. Discover movement education, a free guide, demonstrations, books, podcast, and community.',icons:{icon:'/favicon.svg'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><a className="skip-link" href="#main">Skip to content</a><Navigation/>{children}<Footer/></body></html>}
