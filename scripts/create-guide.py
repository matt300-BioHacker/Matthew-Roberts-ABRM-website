from reportlab.pdfgen import canvas
from reportlab.lib.colors import HexColor
from reportlab.platypus import Paragraph,Table,TableStyle
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_LEFT
from pathlib import Path
W,H=612,792
out=Path('public/abrm-starter-guide.pdf')
c=canvas.Canvas(str(out),pagesize=(W,H));c.setTitle('ABRM Free Starter Guide');c.setAuthor('Matthew Roberts')
navy=HexColor('#101a29');gold=HexColor('#cfb47a');ink=HexColor('#26354a');gray=HexColor('#566375')
body=ParagraphStyle('body',fontName='Helvetica',fontSize=11,leading=17,textColor=ink)
small=ParagraphStyle('small',fontName='Helvetica',fontSize=9,leading=14,textColor=gray)
head=ParagraphStyle('head',fontName='Times-Roman',fontSize=28,leading=32,textColor=navy)
y=0
def page(n,label,title):
 global y
 c.setFillColor(HexColor('#f9fafb'));c.rect(0,0,W,H,fill=1,stroke=0)
 c.setFillColor(navy);c.rect(0,H-105,W,105,fill=1,stroke=0)
 c.setFillColor(gold);c.setFont('Helvetica-Bold',10);c.drawString(48,H-40,'ABRM  /  FREE STARTER GUIDE')
 c.setFillColor(HexColor('#ffffff'));c.setFont('Helvetica',10);c.drawString(48,H-64,label.upper())
 c.setFillColor(gray);c.setFont('Helvetica',8);c.drawString(48,30,'© 2026 Matthew Roberts | Education and personal observation');c.drawRightString(W-48,30,str(n))
 y=H-145;text(title,head,after=24)
def text(s,style=body,after=16):
 global y
 p=Paragraph(s,style);_,h=p.wrap(W-96,H);p.drawOn(c,48,y-h);y-=h+after
 assert y>60,('overflow',s)
def sub(title,s):
 text(title,ParagraphStyle('sub',parent=body,fontName='Helvetica-Bold',fontSize=13,leading=18),after=7);text(s)
page(1,'An introduction by Matthew Roberts','Explore movement.<br/>Observe what changes.')
text('Autonomic Bio Recovery Maneuvers',ParagraphStyle('gold',parent=body,textColor=HexColor('#8c692a'),fontName='Helvetica-Bold',fontSize=13))
text('This guide introduces body awareness, comfortable movement, and a simple reassessment loop. It is a starting point for learning about ABRM, not the full proprietary maneuver sequence.')
sub('What is ABRM?','Matthew Roberts developed ABRM through his personal exploration of discomfort, sensory input, muscular recruitment, and movement. The approach combines deliberate sensory and mechanical input, voluntary muscle activity, movement, and reassessment.')
sub('A working hypothesis','Changing sensory input while changing movement and recruitment may influence movement organization, tension, and pain perception. These proposed mechanisms and benefits have not been established through controlled ABRM research. Personal observations are not proof of efficacy.')
sub('Before you begin','This is education, not a diagnosis or medical treatment. Choose comfortable movements. Do not force joints to pop, use forceful neck pressure or rotation, or continue through sharp pain. Consult a qualified professional about movements that may be unsuitable for you.')
c.showPage()
page(2,'The core model','Notice. Explore.<br/>Then notice again.')
sub('01  STIMULATE','Notice sensations and areas of unusual tension. ABRM explores sensory input, but this introductory practice does not teach targeted pressure or advanced stimulation.')
sub('02  RECRUIT','Bring attention to gentle voluntary muscular activity and the surrounding movement pattern. Notice which areas feel active and how neighboring areas participate.')
sub('03  MOVE','Explore a comfortable, pain-free movement. Pay attention to coordination and positioning without pushing for a particular sensation or sound.')
sub('04  REASSESS','Return to your original movement. Use the same conditions. Record what changed, including when nothing changed. Do not decide beforehand that the practice worked.')
text('Observe. Intervene. Measure. Repeat.',ParagraphStyle('quote',parent=head,fontSize=23,leading=28),after=22)
text('This observation loop can help organize your notes. It does not by itself demonstrate a cause, establish a mechanism, or diagnose a condition.',small)
c.showPage()
page(3,'Your five-minute introduction','Start with a comfortable baseline.')
sub('Minute 1  |  Establish your baseline','Stand or sit comfortably. Choose one easy, comfortable movement, such as gently raising your arms. Notice tension and rate your experience from 0 to 10. Write it down. Keep your position and movement consistent for reassessment.')
sub('Minute 2  |  Notice normal breathing','Breathe normally without forcing a breathing pattern or holding your breath. Observe how your torso moves as you inhale and exhale.')
sub('Minute 3  |  Map your experience','Notice the selected area and its surroundings. What feels active or tense? Does your comfortable position change the sensation? You are gathering observations, not diagnosing yourself.')
sub('Minute 4  |  Explore gentle movement','Move within a comfortable, pain-free range. Notice how different areas cooperate. Do not add pressure, force a joint sound, or push through discomfort.')
sub('Minute 5  |  Reassess','Repeat the exact baseline movement. Record a second rating from 0 to 10. Did movement feel different? Did tension change? Did nothing change? All of those observations belong in the journal.')
text('Before: ____ /10     After: ____ /10<br/>Movement or other notes: ___________________________________',small)
c.showPage()
page(4,'A seven-day observation journal','Record your own experience.')
text('If the introductory practice remains comfortable, use this journal for seven days. Keep the baseline movement and conditions as similar as possible. Stop if the practice causes discomfort.')
data=[['Day','Before /10','After /10','Mobility*','Notes']]+[[str(i),'________','________','________','________________'] for i in range(1,8)]
t=Table(data,colWidths=[35,75,75,85,246],rowHeights=[32]+[43]*7)
t.setStyle(TableStyle([('BACKGROUND',(0,0),(-1,0),navy),('TEXTCOLOR',(0,0),(-1,0),HexColor('#ffffff')),('FONTNAME',(0,0),(-1,0),'Helvetica-Bold'),('FONTSIZE',(0,0),(-1,-1),9),('VALIGN',(0,0),(-1,-1),'MIDDLE'),('GRID',(0,1),(-1,-1),.5,HexColor('#c8d0db')),('ROWBACKGROUNDS',(0,1),(-1,-1),[HexColor('#ffffff'),HexColor('#f0f3f7')]),('LEFTPADDING',(0,0),(-1,-1),7)]))
tw,th=t.wrap(W-96,H);t.drawOn(c,48,y-th);y-=th+20
text('*Mobility: easier, the same, or more difficult. Use words that describe your experience.',small)
sub('Review without assuming an outcome','Look for patterns, but remember that ordinary variation, expectations, rest, and other factors may contribute. These notes are personal observations, not a controlled experiment.')
c.showPage()
page(5,'Continue the journey','Read. Watch. Listen. Learn.')
sub('Read the book','Chronic Pain Help Guide: My Journey to an Alternative Pain Method. Matthew shares his personal story and the development of ABRM. Check retailer listings for edition details.')
text('<link href="https://www.amazon.com/dp/B0G2SSK5C5" color="#8c692a">Read on Amazon</link>  |  <link href="https://www.audible.com/pd/Chronic-Pain-Help-Guide-Audiobook/B0HKKHPG72" color="#8c692a">Listen on Audible</link>')
sub('Watch demonstrations','Explore the original context of Matthew’s movement demonstrations. A personal demonstration does not establish suitability or outcomes for others.')
text('<link href="https://www.tiktok.com/@matthewroberts3336" color="#8c692a">TikTok: @matthewroberts3336</link><br/><link href="https://www.youtube.com/channel/UCoh0_VT770-nVkv777QpSBQ" color="#8c692a">ABRM on YouTube</link>')
sub('Listen and connect','Find The Matthew Roberts Podcast on Spotify and connect with the community on Facebook.')
text('<link href="https://open.spotify.com/show/6OvpiP8W20mdgBLpT6oruj" color="#8c692a">Listen on Spotify</link><br/><link href="https://www.facebook.com/groups/4353451768250466" color="#8c692a">Visit the Facebook community</link>')
sub('The next question','Can ABRM produce changes that other people can reproduce, instruments can measure, and appropriate controls can distinguish from ordinary movement and expectation? This is a research goal, not an established result.')
c.save()
print(out.resolve())
