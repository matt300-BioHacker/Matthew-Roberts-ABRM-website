export const links = {
 tiktok:'https://www.tiktok.com/@matthewroberts3336', youtube:'https://www.youtube.com/channel/UCoh0_VT770-nVkv777QpSBQ',
 facebook:'https://www.facebook.com/groups/4353451768250466', instagram:'https://www.instagram.com/autonomicbiohacking',
 profile:'https://www.facebook.com/profile.php?id=100092527640004',
 amazon:'https://www.amazon.com/dp/B0G2SSK5C5', audible:'https://www.audible.com/pd/Chronic-Pain-Help-Guide-Audiobook/B0HKKHPG72',
 walmart:'https://www.walmart.com/ip/Chronic-Pain-Help-Guide-My-Journey-to-an-Alternative-Pain-Method-Paperback-9798992361148/18747874389',
 barnes:'https://www.barnesandnoble.com/w/chronic-pain-cure-matthew-roberts/1148559282?ean=2940182838962',
 spotify:'https://open.spotify.com/show/6OvpiP8W20mdgBLpT6oruj'
};
export const projects=[
 {category:'MUSIC',title:'Music LP',description:'A music project by Matthew Roberts.',href:'https://www.meta.ai/share/a/841443f1-030c-4a5f-a049-bf8f00371fce',cta:'Open music project'},
 {category:'RESEARCH',title:'Pilot study',description:'Explore the developing pilot-study materials.',href:'https://www.meta.ai/share/a/77284877-9689-46c9-8944-7aa647837d78',cta:'Open pilot study'},
 {category:'GUIDE · PREVIEW',title:'Kickstart guide',description:'The guide page is in progress. View the current hosted preview.',href:'https://cdn.fbsbx.com/v/t65.102178-21/842234513_2886146748436853_653685170622230106_n.jpg/restore_kickstart_tripwire.html?_nc_ht=cdn.fbsbx.com&_nc_ohc=RFjg6pYhs4AQ7kNvwFHah4z&sdl=0&ccb=14-4&oh=00_AQOAimNnovk3TyxTL45yq96AbJPaxdS9oykft1QgyX_zUA&oe=6AEF25BC&_nc_sid=4ee932',cta:'Open guide preview'},
 {category:'ACADEMIC BRIEF · DRAFT',title:'Researcher one-pager',description:'A concise academic brief introducing the research.',href:'https://cdn.fbsbx.com/v/t65.102178-21/841753382_903220036061880_5351881264495772101_n.jpg/abrm_researcher_one_pager.html?_nc_ht=cdn.fbsbx.com&_nc_ohc=1QjlWJsn8mwQ7kNvwG-zHY4&sdl=0&ccb=14-4&oh=00_AQMKvIry9BQfT5mhKyJBTwH6tRj-2JoEiIXFo9FS2SRpnA&oe=6AEF5ABC&_nc_sid=4ee932',cta:'Open brief draft'},
 {category:'RESEARCH · DRAFT',title:'Integrated hypothesis',description:'A research white paper outlining an integrated hypothesis.',href:'https://cdn.fbsbx.com/v/t65.102178-21/841902982_2176004976682237_3502116850834338915_n.jpg/abrm_integrated_hypothesis_white.html?_nc_ht=cdn.fbsbx.com&_nc_ohc=EQvka0JKQWQQ7kNvwFXq1FN&sdl=0&ccb=14-4&oh=00_AQPZBp8tY7LAA8N8ASYJPnkbpdPtAlGO5uD8_aQEgfubPA&oe=6AEF6E74&_nc_sid=4ee932',cta:'Open white paper'},
 {category:'GUIDE',title:'Free guide + paid funnel',description:'A guide concept and the accompanying offer pathway.',href:'https://www.meta.ai/share/a/12e613bf-1ee8-4153-b85b-bd96041778c2',cta:'Open guide project'}
] as const;
export const steps=[{title:'Stimulate',text:'Notice sensory input and areas of tension. The full method explores targeted stimulation.'},{title:'Recruit',text:'Bring attention to deliberate muscular activity and the surrounding movement pattern.'},{title:'Move',text:'Explore comfortable movement and how different areas work together.'},{title:'Reassess',text:'Return to the same baseline. Record what changed, including when nothing changed.'}];
export const pages:Record<string,{title:string,eyebrow:string,description:string}>={
 learn:{title:'Learn your body. Start with observation.',eyebrow:'THE METHOD',description:'Explore Matthew Roberts’ nonmedical, nonsurgical approach to pain and whole-body well-being through awareness, deliberate movement, and reassessment.'},
 watch:{title:'See ABRM in motion.',eyebrow:'DEMONSTRATIONS',description:'Explore Matthew’s demonstrations on TikTok and YouTube. Watch the context, observe the movement, and learn the language of ABRM.'},
 podcast:{title:'A conversation worth listening to.',eyebrow:'THE MATTHEW ROBERTS PODCAST',description:'Personal experiences, movement, ideas, and the story behind ABRM. Listen to the published episodes on Spotify.'},
 books:{title:'The story. The ideas. The next chapter.',eyebrow:'BOOKS BY MATTHEW ROBERTS',description:'Explore the Chronic Pain Help Guide, its audiobook, and other works from Matthew’s growing body of writing.'},
 research:{title:'Observation is the beginning. Evidence is the goal.',eyebrow:'RESEARCH & HYPOTHESES',description:'ABRM’s proposed mechanisms are working hypotheses. The research mission is to test reproducibility, measure outcomes, and distinguish effects from ordinary movement and expectation.'},
 academy:{title:'Go deeper, at your own pace.',eyebrow:'ABRM ACADEMY',description:'Start with the free guide. Structured courses, premium education, and member resources are in development.'},
 coaching:{title:'Work with Matthew.',eyebrow:'PRIVATE EDUCATION',description:'Register your interest in private 1-on-1 coaching or an educational consultation. Availability, format, and pricing will be confirmed personally before booking.'},
 community:{title:'Keep exploring. Together.',eyebrow:'ABRM COMMUNITY',description:'Join the conversation, follow new demonstrations, and stay connected with Matthew and the ABRM community.'},
 applications:{title:'One method. New areas to explore.',eyebrow:'ABRM APPLICATIONS',description:'Movement is the core. Fitness, voice, and facial movement are areas of personal exploration and future education.'},
 shop:{title:'Wear the movement.',eyebrow:'ABRM MERCH',description:'The ABRM print-on-demand collection is on its way. Sign up for the store announcement, and explore the books available now.'},
 about:{title:'Meet Matthew Roberts.',eyebrow:'FOUNDER • AUTHOR • CREATOR',description:'The person behind Autonomic Bio Recovery Maneuvers, the Chronic Pain Help Guide, and The Matthew Roberts Podcast.'},
 guide:{title:'Your first step starts here.',eyebrow:'FREE ABRM STARTER GUIDE',description:'A practical introduction to observation, gentle movement, and reassessment, with a seven-day journal to record your own experience.'},
 privacy:{title:'Privacy & your information',eyebrow:'YOUR INFORMATION',description:'A plain-language explanation of information submitted through this website.'},
 terms:{title:'Education, context, and care.',eyebrow:'TERMS & EDUCATIONAL NOTICE',description:'Please read this context before exploring ABRM education or demonstrations.'}
};
export const nav=[['Learn','/learn'],['Watch','/watch'],['Podcast','/podcast'],['Books','/books'],['Research','/research']];
