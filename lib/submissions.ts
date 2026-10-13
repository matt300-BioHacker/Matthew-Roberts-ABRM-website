import {env} from 'cloudflare:workers';
export function submissionDb(){if(!env.DB)throw new Error('Submission storage unavailable');return env.DB;}
export function originAllowed(request:Request){const origin=request.headers.get('origin');return !origin || origin===new URL(request.url).origin;}
export function validEmail(value:unknown):value is string{return typeof value==='string'&&value.length<=254&&/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);}
export async function readPayload(request:Request){if(!request.headers.get('content-type')?.includes('application/json'))throw new Error('invalid');const body=await request.text();if(body.length>6000)throw new Error('invalid');const parsed=JSON.parse(body);if(!parsed||typeof parsed!=='object'||Array.isArray(parsed))throw new Error('invalid');return parsed;}
