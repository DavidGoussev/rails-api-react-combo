COMBO
---------------
  A test app integrating stateless Ruby API using the rails-api gem, with a React client side app.

  For stateless, the Rails API does not include action-view, sprockets, or sessions.

  React replaces action-view, Webpack replaces sprockets, and JWT replaces sessions.

---------------

* `package.json` contains all scripts and dependencies needed to run app

* run `npm install` for first-time setup

---------------


* run `rails s` on one terminal tab

* run `npm run devserve` in concurrent terminal tab

* access `localhost:8080` for react clientside app, served by stateless runtime Rails backend API.
