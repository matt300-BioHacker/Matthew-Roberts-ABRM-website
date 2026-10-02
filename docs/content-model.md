# ABRM Content Model

The content model is the backbone of the platform.

## Maneuver

Fields:
- id
- slug
- title
- short_description
- long_description
- status
- visibility
- body_region
- movement_category
- target_area
- objective
- instructions
- common_mistakes
- cautions
- demonstration_video_ids
- related_maneuver_ids
- related_course_ids
- evidence/source references
- author
- created_at
- updated_at

## Video

- id
- platform
- url
- title
- description
- thumbnail
- visibility
- related maneuvers
- related courses
- published_at

## Course

- id
- slug
- title
- description
- access type: free, premium, or purchase
- price reference
- lessons
- prerequisites
- status
- thumbnail

## Lesson

- id
- course_id
- order
- title
- content
- video references
- downloadable resources
- access rule

## Product

Keep a lightweight catalog that points to commerce rather than duplicating payment logic.

- id
- title
- type: book, merch, or digital
- description
- image
- external_store_url
- price display
- status

## Service

- id
- title
- type: coaching or consultation
- description
- eligibility/notes
- inquiry URL/form
- scheduling URL
- status

## CommunityLink

- id
- platform
- title
- url
- description
- status

## Resource

Resources include free guides, downloads, articles, glossary entries, research references, and FAQs.

## Claim / Evidence

For health-adjacent educational claims:
- claim text
- claim type
- supporting sources
- evidence status
- review date
- approved wording
- prohibited/unsupported wording
- reviewer/editor
