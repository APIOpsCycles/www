---
Name: API Platform Architecture
Slug: api-platform-architecture
Collection ID: 6101c6ebcdae6854ee4b444b
Item ID: 6101c6ebcdae6833f74b4516
Archived: 'false'
Draft: 'false'
Created On: 'Mon Jul 26 2021 11:26:30 GMT+0000 (Coordinated Universal Time)'
Updated On: 'Wed Jan 15 2025 12:28:45 GMT+0000 (Coordinated Universal Time)'
Published On: 'Wed Jan 15 2025 12:37:56 GMT+0000 (Coordinated Universal Time)'
Old name: Minimum Viable API Architecture
Method phase number: '3'
Image: >-
  https://cdn.prod.website-files.com/60b12ba7f99f5f63ddf349aa/63498af2c19d641d2b0db431_6.svg
Summary: >-
  Ensure APIs integrate seamlessly with the infrastructure and platform,
  adhering to architecture guidelines and API product-specific requirements.
Step 1: >-
  <ol id=""><li>The API meets a clear business need and is reusable for multiple
  API-consumers.</li><li>API consumer onboarding is planned and
  smooth.</li><li>Insights into developer needs exist.</li><li>Feedback is
  gathered from the identified API consumer segments.</li><li>Features are
  updated and ready to be addressed with documentation, architecture, and
  design.</li></ol>
Step 2: >-
  <ul><li>Establish scalable, secure, and compliant infrastructure for API
  operations. Provide guidelines on architecture best practices.</li></ul>
Step 3: >-
  <ol id=""><li>The API uses architecture patterns promoting reusability for
  multiple API-consumers.</li><li>The architecture ensures the APIs will
  integrate seamlessly with the infrastructure and
  platforms.</li><li>Architecture requirements and decisions have been
  documented and validated with stakeholders.</li><li>API is designed to meet
  API consumer needs hiding backend data models and discrepancies.</li><li>The
  API and its endpoints have a description that explains its business value and
  features.</li><li>API has a consistent design with our other API
  products.</li></ol><p>‍</p>
Section 1 image: >-
  https://cdn.prod.website-files.com/60b12ba7f99f5f63ddf349aa/674d4e03b2ba589a613ed9dd_7.png
Section 1 summary: ''
Section 1 button text: ''
Section 1 Button link: ''
Section 1 See details button (link to selected resource page): locations-canvas
Section 1 longer text: ''
Section 2 image: >-
  https://cdn.prod.website-files.com/60b12ba7f99f5f63ddf349aa/674d4e091d4d5d0049ecca7a_8.png
Section 2 summary: >-
  <h3>What is the Minimum Viable Architecture?<br></h3><p><em>Why is the MVA
  architecture chosen for this method</em></p><p><br></p>
Section 2 button text: ''
Section 2 button link: ''
Section 2 See details button (link to selected resource page): capacity-canvas
Section 2 longer text: >-
  <p>The MVA (Minimum Viable Architecture) approach is usable for any
  architecture design process.</p><p><br>Each Phase of MVAA goes through the
  entire APIOps Cycle. Development from here on goes in cycles and is
  iterative.</p><p> </p><p>One of the key elements in Agile methodologies is
  Minimum Viable Product. MVP is a product with "just enough" features to
  satisfy early customers.</p><p> </p><p>When they see and can try the MVP, they
  can give feedback for future development. Minimum Viable Architecture has a
  similar idea.</p><p> </p><p>Designing architecture so they can be prototyped
  and built fast. The sooner the consumers get to use the API the faster you
  discover the real requirements.</p>
Section 3 image: >-
  https://cdn.prod.website-files.com/60b12ba7f99f5f63ddf349aa/674d4df8153a5a0fab77963d_6.png
Section 3 summary: <p><br></p><h3>Scaling -phase in more detail<br></h3>
Section 3 button text: ''
Section 3 button link: ''
Section 3 See details button (link to selected resource page): business-impact-canvas
Section 3 longer text: >-
  <ol><li>Any peak times coming in near future?</li><li>Are the non-functional
  requirements changing, for example, allowed downtime? Response times? New
  users from far away?</li><li>Growing concurrency brings new bottlenecks to the
  architecture, load test first and monitor existing production, design
  improvements after that.</li><li>Growing number of APIs need more teams and
  team members.</li><li>API management needs to have more fine-grained user
  roles and separation.</li><li>APIs and micro-services need more decoupled
  modules that can be scaled and developed independently.</li><li>API design and
  information architecture need to be designed from the scalability point of
  view. For example, different customer segments or customers from different
  countries require different API features.</li><li>Think about separation, not
  centralization all through, even in databases and Identity management,
  authorization and access management.</li><li>Start with a load balancer and 1
  run-time node, this way more nodes can be added easily.</li><li>Consider when
  and how to do caching, fail-saves etc. but don’t implement them before they
  are actually needed, just know you can.</li></ol><h2>‍</h2>
Hero background image: >-
  https://cdn.prod.website-files.com/60b12ba7f99f5f63ddf349aa/674d4e17bbad13d62b63cc99_API%20Platform%20Architecture.png
Previous phase: api-consumer-experience
Next phase: api-design
Hide steps for this method: 'false'
material-icon: code_blocks
slug: api-platform-architecture
---

