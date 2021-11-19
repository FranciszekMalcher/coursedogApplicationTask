
Provided Cypress tests covers all functionalities mentioned in User Stories for coursedog events app which I recive. I create more generic tests that can use more test data than provided.

There are two test files:

    1.eventsAPi.spec.js - tests meetings recived from API for given dates. It covers 'Today's Event' and 'Featured Events' pages functionalities which I can't check using UI.
    2.events.spec.js - covers rest of functionalities reachable from UI

User Stories comments:

    1. User Story by definition should take in consideration only one feature/functionality from perspective of end user or system user, delivered US touch a lot o functionalities, please have that in mind writing them.
    2. US have specific data that should be tested. That makes them combination of Use Case and User story which can be confusing.
    3. I suggest using simple template for creating user stories: 'As a <type of user>, I can <some goal> so that <some reason>' and provide Acceptance Criteria, for in more complex, if needed, add also Use Cases.

User Stories issues/misguidances:

    1. There are no 'Contacts' section on Event Card
    2. For week 2021-09-02 to 2021-09-09 API gives 2 meetings not 3.

Improvements for application:

    1. Landing page and 'Featured Events' page have same purpose, I suggest merge them in one page.
    2. Remove Vue docs link from header
    3. Remove obsolete 'New External Link' which directs to Today's Events
    4. Add unique ids, classes or 'data-cy' attributes to web elements to make them easier to select from page.