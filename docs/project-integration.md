# ABRM project integration

Pulled the six project integration files from the existing foundation/abrm-platform
branch at commit 834117b8cc12ff452f63602fd2cc642c2448c360 into the Site source.
Preserved the published daylight theme and existing services.

Native /projects pages cover music, the guide companion, pilot proposal,
academic brief, integrated hypothesis, and guide/community concept. Each links
to the original user-supplied artifact. Research, guide, and author pages now
link to their relevant projects; the homepage and footer expose the collection.

All six original links and three underlying Meta artifact documents were retrieved
successfully at integration time. Source prototypes include simulated commerce,
email delivery, member statistics, testimonials, unfinished references, and other
placeholders. Those are not activated or represented as established site offers.
The native pages preserve research-draft and concept status. Shared CDN links may
expire; the native summaries remain part of the Site.

Domain diagnostics: the apex domain returned the actual homepage HTML, stylesheet,
and supplied author image with HTTP 200. Public access, SSL, and domain routing
are active. User-local browser or DNS behavior was not observed directly.
