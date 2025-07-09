---
Name: API Identity and access management
Slug: identity-and-access-management
Collection ID: 6101c6ebcdae68a8724b444c
Item ID: 6101c6ebcdae686c6d4b44e5
Archived: 'false'
Draft: 'true'
Created On: 'Wed Jul 28 2021 07:33:11 GMT+0000 (Coordinated Universal Time)'
Updated On: 'Sat Oct 22 2022 13:26:26 GMT+0000 (Coordinated Universal Time)'
Published On: ''
Recource phase number: '8'
Icon: ''
Purpose: How to plan security for your APIs?
Navigation: ''
Collaboration: ''
Quality: ''
Speed: ''
Tips for use: ''
Steps: >-
  <h3>Identity</h3><p>Is there a need to identify users? What are the common
  identifiers between the API Consumer and the API (email, customer number,
  social security number)? How are the API consumer’s end-users
  authenticated?</p><h3>Identity, authorization and access management + securing
  data in all of it's stages</h3><p>Identity management, authorization, and
  access management are important for securing APIs, but also related to the
  applications consuming or providing the APIs. Sensitive information should
  always use token and session-based access, as the API-keys are in general
  never changed and are handled in plain language without any encryption, so
  someone can get access to them.</p><h3>Headers, tokens or URLs for
  authentication data</h3><ul><li>The best approach for securing APIs containing
  sensitive information and requiring user-level access management is to use
  OpenID Connect –capable authentication with JWT-tokens and
  claims.</li><li>This requires agreeing on how the applications get the token,
  how is the identity of end-users managed etc.</li><li>Sometimes API consuming
  clients have limitations on what types of authentication methods they can
  use.</li><li>Most consumers can use API-keys in headers, but some can only
  input URI-parameters. These types of consumers should not be allowed access to
  sensitive information at all, as the URI-parameters are logged during all
  points and are easily “sniffed”.</li></ul><p><br></p><p>‍</p>
Section 1 image: ''
Button link 1: ''
Button link 2: ''
Button link 3: ''
Sorting order: '7'
Previous phase: locations-canvas
Next phase: rest-api-design-guide
Related resources: ''
Method phase: api-consumer-experience
slug: identity-and-access-management
---

