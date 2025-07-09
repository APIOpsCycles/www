---
Name: REST API Design Guide
Slug: rest-api-design-guide
Collection ID: 6101c6ebcdae68a8724b444c
Item ID: 6101c6ebcdae68c0994b44f6
Archived: 'false'
Draft: 'false'
Created On: 'Wed Jul 28 2021 07:33:25 GMT+0000 (Coordinated Universal Time)'
Updated On: 'Wed Jan 08 2025 22:54:34 GMT+0000 (Coordinated Universal Time)'
Published On: 'Thu Jan 09 2025 00:54:44 GMT+0000 (Coordinated Universal Time)'
Recource phase number: '9'
Icon: ''
Purpose: >-
  How should endpoints i.e. the resources that our API allows the API consumers
  to use, be named? What features and thus endpoints should be included in the
  same API? To version or not and how?
Navigation: ''
Collaboration: ''
Quality: ''
Speed: ''
Tips for use: >-
  <p id="">There are no actual standards for how endpoints etc. should be named.
  There are some conventions and best practices that help the APIs to be
  RESTful. These conventions make the API easy to understand by humans as well
  as programming and integration tools. Design with the next phase, <strong
  id="">API Audit</strong> criteria in mind. When designing REST APIs, use the
  <strong id="">REST API style guide </strong>as your guideline.</p><p id="">At
  first, add only the endpoints and data attributes that you know are necessary.
  &nbsp;This reduces the need for versioning, support and maintenance. When an
  API is versioned the API consumers are at risk of having to make changes.
  There are many APIs that have succeeded in avoiding breaking changes.</p>
Steps: >-
  <h2>Overview</h2><p>Our goal is consistency, maintainability, and best
  practices across applications. APIOps aim to balance a truly RESTful API
  interface with a positive developer experience (DX).</p><h3>In a
  nutshell:</h3><ul><li>Keep APIs’ functionalities as simple as possible. The
  endpoints do only one thing, but they do it well.</li><li>Avoid overlapping
  functionalities between different APIs.</li><li>In case of an error include
  the API response verbose description. Include also a description of the
  erroneous parameter value, if it is feasible.</li><li>Implement in each API
  (or bundle of APIs) ability to generate its own machine-readable document
  about its functionality.</li><li>API must have support for the OPTIONS
  endpoint, which is needed for example in a preflight request in
  SwaggerUI</li></ul><h3>Minimum developer experience</h3><ul><li>Each API must
  have a descriptive title</li><li>The description of API has to be
  sufficient.</li><li>Each API must have documentation, either an OpenAPI file
  or other standard specification that is supported by the API management
  solution used.</li><li>Each API should have a getting started section to
  provide a low learning curve and fast 1st positive experience for the
  consumer</li><li> </li></ul><h3>The format of API specification</h3><p>Use the
  most recent <a target="_blank" href="https://www.openapis.org/">OpenAPI</a>
  version supported by the API management platform to describe your API, unless
  you are developing your API using GraphQL, AsyncAPI, gRPC or some other
  standard. <a target="_blank"
  href="https://en.wikipedia.org/wiki/OpenAPI_Specification">OpenAPI
  Specification (Wikipedia)</a> originally known as the Swagger Specification,
  is a specification for machine-readable interface files for describing,
  producing, consuming, and visualizing RESTful Web
  services.</p><p><strong>Information about supported
  versions:</strong></p><ul><li><a
  href="https://www.ibm.com/support/knowledgecenter/SSFS6T/com.ibm.apic.apionprem.doc/create_api_swagger.html"
  target="_blank">IBM API Connect</a></li><li><a target="_blank"
  href="https://docs.microsoft.com/en-us/azure/api-management/api-management-get-started#a-namecreate-api-aimport-an-api">Azure
  API management</a> - see also <a target="_blank"
  href="https://docs.microsoft.com/en-us/azure/api-management/api-management-api-import-restrictions">restrictions
  and known issues</a></li><li><a target="_blank"
  href="http://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-export-api.html">AWS
  API Gateway</a></li></ul><p>Use examples-attribute with JSON schemas
  (validated) to provide automatically generated documentation and smart mock
  data to help use the API.</p><p>‍</p><h3>Naming standards</h3><ul><li>All URI
  parts including resource names are written in small letters.</li><li>Use only
  camelCase in all attribute (field) names.</li><li>Do not use special
  characters in URI or in attribute names.</li><li>Use English only in OpenAPI
  specification.</li><li>Use common legally used or industry-specific (not
  company-specific) words about resources and attributes. Refer to ISO standards
  as a primary source, then use WTO, EU or other trade area-specific
  vocabularies, <a target="_blank"
  href="http://schema.org/">http://schema.org/</a> or industry-specific
  vocabularies for naming. As a last resort, refer to company-specific
  vocabularies before inventing your own.</li><li>Avoid using generic names like
  “type”, “status” etc. without specifying what type, what status or better yet,
  avoiding those words altogether.</li><li>Use ISO standard or other generally
  used (see above) values for attribute values such as languages, country names
  etc. Avoid using magic numbers as values or provide also the human language
  alternative, preferably according to the Accept-Language header in the
  request.​​</li></ul><p>‍</p><h3>Localization</h3><p>The Accept-header should
  be used to support localized strings and possible localized logic. All
  timestamps should be in ISO format which contains timezone information. All
  dates and clock times with no specific timezone information associated should
  be informed in UTC +0.</p><p>All money values should be informed in specific
  currency and currency information should be contained in a custom
  x-companyname-currency header (in both request and response). Currency values
  should default to some provider or consumer based base currency if no specific
  currency has been requested.</p><p>‍</p><h3>Privacy and
  security</h3><p>Private or confidential data should not be passed in URI,
  Query or header parameters as they are logged and cached. Security constraints
  are defined in API Product level, but privacy and security should be
  considered when splitting requirements to APIS and endpoints, as security
  schemes are easier to implement on API level than endpoint level or by
  reflecting authorization in the allowed operations or response
  payloads.</p><p>‍</p><h3>Versioning</h3><p>Private or confidential data should
  not be passed in URI, Query or header parameters as they are logged and
  cached. Security constraints are defined in API Product l</p><p>Each API
  consumer needs to know which version of the API they are using and to be able
  to subscribe and use the version they need. There are mixed opinions about the
  way the versioning is indicated: whether API version should be included in the
  URL or in the header.</p><p>The common convention is to have the version in
  the URL of APIs. The reason is to ensure that the browser is able to explore
  the resources across versions.</p><p>In some API management systems, the
  version does not need to be in the URI nor in the header because each API
  product has its own version and each API consuming client application is only
  able to use 1 version of the API at a time. If the same client used multiple
  versions of the same API at a time, they would need different subscriptions.
  This versioning strategy works with all clients and is suited for caching and
  HATEOAS.</p><p>Versioning in - <a target="_blank"
  href="https://docs.microsoft.com/en-us/azure/api-management/api-management-faq#how-do-i-use-api-versioning-in-api-management">Azure
  API Management</a></p><p>When the version number is used it should always be
  in the URI since not all clients (for example marketing tools) can set headers
  and using version number as a query parameter might cause slowness as query
  parameters are not cached. Also, most API management platforms require that
  the URIs are unique if multiple versions of the same API are deployed at the
  same time.</p><p>The URI should include /vN with the major version (N) as a
  prefix. Having the letter v in front of the number is important to separate
  the version number from a resource identifier.</p><p>When APIs are upgraded
  with a breaking change, it may lead to breaking existing products or services
  using upgraded APIs.</p><p>Privacy and security should be considered when
  splitting requirements to APIs and endpoints, as security schemes are easier
  to implement on API level than endpoint level or by reflecting authorization
  in the allowed operations or response payloads.</p><h6> Examples of breaking
  changes:</h6><ul><li>renaming fields or resource paths or
  endpoints</li><li>changing field type (e.g. from string to a list of
  strings)</li><li>changing the structure of payload (removing/renaming/retyping
  fields)</li><li>altering HTTP verbs</li><li>changing response HTTP
  codes</li></ul><p>In case of breaking changes making a new version of the
  updated API is mandatory.</p><p>URI
  Template</p><p>/v{version}/</p><p>Example<a href="https://domain.com/v1/apis"
  target="_blank"> </a></p><p>https://domain.com/v1/apis</p><p>If there is any
  major breaking update, the new set of APIs is named as v (version number as
  integer).</p><p>‍</p><h3>Namespaces</h3><p>In any URI, the first noun (which
  may be singular or plural, depending on the situation) should be considered a
  “namespace”. Namespaces should reflect the customer’s perspective on how the
  product works, not necessarily hierarchy in the company.</p><p>Namespace
  separates different logical APIs from each other, which is useful if you have
  lots of APIs with different purposes and they may end up using same resource
  or operation names.</p><h6>Namespaces in different API management
  solutions:</h6><ul><li>IBM API Connect uses organizations, catalogs and spaces
  to organize publishing of APIs. These are useful when there are multiple teams
  in charge of different APIs. Organization and catalog form the namespace of
  the API and those are always added automatically before version number or
  anything defined in the OpenAPI document basepath value or path-variable of
  each operation.</li><li>Azure API management requires you to define a URI
  template when adding a new operation or by setting it for all operations in
  the OpenAPI document basepath value (required).</li></ul><p>URI
  Template</p><p>/{namespace}/{version}</p><p>Example
  /hardware/v1/</p><p>‍</p><h3>Resources and HTTP methods</h3><p>Try to use only
  one resource level, absolutely avoid using more than two levels to keep the
  URLs short to allow room for using variables.</p><p>URI
  Template</p><p>/{namespace}/{version}/{resource}/{resource-id}/{sub-resource}/{sub-resource-id}</p><p>‍</p><h3>Endpoints</h3><p>Resource
  endpoints should follow at least View and <a target="_blank"
  href="https://en.wikipedia.org/wiki/Create,_read,_update_and_delete">CRUD</a>
  (Create, Read, Update, Delete) operations. These should be handled by using
  the same URI but using different HTTP verbs (POST/GET/PUT/PATCH/DELETE, more
  details about each verb in ( <a target="_blank"
  href="https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html">https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html</a>
  ) ).</p><p>Use nouns in the plural as resource names e.g. /products.</p><p>All
  used methods and their parameters have to be described in generated
  documentation endpoint by endpoint.</p><p>‍</p><h3>GET (read)</h3><p>The GET
  method requests data from the resource and should not produce any side effect.
  The possible parameters are sent as part of the URL or as query
  parameters.</p><h6>E.g GET /users</h6><ul><li>return a list of all
  users</li></ul><h6>E.g GET /users?limit=10&amp;skip=30</h6><ul><li>returns a
  list containing 10 users after skipping 30 users</li></ul><p>‍</p><h3>POST
  (create, do partial updates)</h3><p>The POST method requests the server to
  create a resource in the database. The payload is sent in the request message
  body. </p><p>POST is a non-idempotent operation which means that multiple
  requests targeted to the same endpoint with the same payload will have a
  different outcome.</p><h6>E.g POST /organizations/:id/managers</h6><ul><li>The
  first attempt creates a new Manager of Organization identified with :id. (If
  it did not exist already).</li></ul><h6>E.g POST
  /organizations/:id/managers</h6><ul><li>The second attempt with the same
  payload fails (because manager already existed) and an error response (4xx,
  manager already exists) is returned.</li></ul><p>‍</p><h3>PUT (create and
  update complete resources)</h3><p>The PUT method requests the server to update
  a resource, but it can also create it. The payload is sent in the request
  message body.Normally it is not possible to create a resource with PUT method,
  because resources are referenced with :id. In case resource with :id does not
  exist, a response with 404 Resource not found is sent unless you give a
  resource name (like file name) in the PUT request. Use POST to create a new
  resource and POST or PATCH to do partial updates.</p><p> </p><p>PUT is an
  idempotent operation which means multiple requests with the same payload
  targeted to the same endpoint will have the same effect and outcome, either
  successful update or resource not found.</p><h6>E.g. PUT
  /organizations/:id</h6><ul><li><strong>The </strong>first attempt will request
  the server to update the resource (identified with :id) in Organizations
  collection.</li><li> A successful response with 2xx is returned, if a resource
  is found.</li><li> In case the resource is not found, an error response with
  4xx is returned.</li></ul><h6>E.g. PUT
  /organizations/:id</h6><ul><li><strong>Second </strong>attempt (with the same
  payload) will request the server to update the resource (identified with :id)
  in Organizations collection.</li><li> A successful response to 2xx is
  returned, if the resource is found.</li><li> In case the resource is not
  found, an error response with 4xx is returned.</li></ul><h4>DELETE
  (delete)</h4><p>DELETE method requests that the resource, or its instance,
  should be removed from the database. The operation is irreversible.</p><h6>E.g
  DELETE /apis/:id</h6><ul><li>Will request the server to delete the API
  identified with :id from Apis collection.</li><li> In a successful case a
  response with 204 is returned (no payload included).</li><li> In an
  unsuccessful case, a response with 4xx is returned.</li></ul><p>‍</p><h3>Error
  handling</h3><p>Just like an HTML error page shows a useful error message to a
  visitor, an API should provide a useful error message in a known consumable
  format. The representation of an error should be no different from the
  representation of any resource, just with its own set of fields.</p><p>The API
  should always return sensible HTTP status codes. API errors typically break
  down into 2 types: 400 series status codes for client issues &amp; 500 series
  status codes for server issues. At a minimum, the API should standardize that
  all 400 series errors come with consumable JSON error representation. If
  possible (i.e. if load balancers &amp; reverse proxies can create custom error
  bodies), this should extend to 500 series status codes.</p><p>A JSON error
  body should provide a few things for the developer - a useful error message, a
  unique error code (that can be looked up for more details in the docs) and
  possibly a detailed description.</p><p> JSON output representation for
  something like this would look like:</p><p>{ "code" : 1234, "title" :
  "Organization is not found", "detail" : "Organization with specified ID is not
  found" }</p><p>Validation errors for PUT, PATCH and POST requests will need a
  field breakdown. This is best modeled by using a fixed top-level error code
  for validation failures and providing the detailed errors in an additional
  errors field, like so:</p><p>{ "code" : 1024, "title" : "Validation Failed",
  "detail" : [ { "code" : 5432, "title" : "first_name", "detail" : "First name
  cannot have fancy characters" }, { "code" : 5622, "title" : "password",
  "detail" : "Password cannot be blank"} ]
  }</p><p>‍</p><h3>Filtering</h3><p><strong>Paging</strong></p><p>Pages of
  results should be referred to consistently by the query parameters page and
  pageSize, where pageSize refers to the number of results per request, and page
  refers to the requested page.</p><p>Fields like totalItems and totalPages help
  provide context to paged results. Use the same fields with all resources to be
  consistent.</p><p>‍</p><p><strong>Hypermedia links</strong></p><p>Hypermedia
  links are high value in navigating paged resource collections, as
  page/pageSize query parameters can be maintained while navigating pages of
  results.</p><p>Links should be provided with reels of next, previous, first,
  last wherever appropriate. </p><p>‍</p><p><strong>Time
  selection</strong></p><p>startTime or {propertyName}After, endTime or
  {propertyName}Before query parameters should be provided if time selection is
  needed. All time values in the parameters and in the data have to be in the
  ISO format including
  timezone.</p><p>‍</p><p><strong>Sorting</strong></p><p>sortBy and sortOrder
  can be provided to allow for collection results to be sorted. sortBy should be
  a field in the individual resources, and sortOrder should be asc or
  desc.</p><p> </p><p><strong>URI Template</strong></p><p>GET
  /{namespace}/{version}/{resource}</p><p>‍</p><p><strong>Example
  Request</strong></p><p>GET /hardware/v1/products</p><p>‍</p><h3>Resource
  collection</h3><p>A list of all of the given resources, including any related
  metadata. The array of resources should be in the items field to help handle
  other fields than the actual resources being returned in the
  response.</p><p>Plan for security and provide a list of only those resources
  the requesting party is allowed to see.</p><p>If the resource response is
  really big, provide a possibility to include only those fields the client
  requires. Also add only those fields in the response, that you consider
  absolutely necessary. It’s easier to add more later when needed instead of
  removing that would be a breaking change.</p><p>‍</p><h3>Single
  resource</h3><p>A single resource, typically derived from the parent
  collection of resources (often more detailed than the collection resource
  items). </p><p>All identifiers for sensitive data should be non-sequential,
  and preferably non-numeric. In scenarios where this data might be used as a
  subordinate to other data, immutable string identifiers should be utilized for
  easier readability and debugging (i.e. “nameOfValue” vs 1421321).</p><h6>URI
  Template</h6><p>GET
  /{namespace}/{version}/{resource}/{resource-id}</p><h6>Example
  Request</h6><p>GET
  /hardware/v1/products/6438313255314</p><p>‍</p><p>‍</p><h4><br></h4><p><br></p>
Section 1 image: ''
Button link 1: ''
Button link 2: ''
Button link 3: ''
Sorting order: '7'
Previous phase: interaction-canvas
Next phase: api-audit-checklist-main
Related resources: ''
Method phase: api-delivery
slug: rest-api-design-guide
---

