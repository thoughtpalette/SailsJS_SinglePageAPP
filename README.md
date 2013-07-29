
# Responsive Single Page App
### NodeJS, SailsJS, AngularJS

### How to debug
Install node-inspector globally
`npm install -g node-inspector`
Follow instructions to get that running

Switch to project/nodeapp folder in terminal
Debug with `node --debug app.js`

### Setup
Grab the sails-mongo adapter https://github.com/balderdashy/sails-mongo
Add your database
Ex:
```javascript
    module   : 'sails-mongo',
    host     : 'localhost',
    user     : 'thoughtpalette',
    password : 'password',
    database : 'localHostTestDB'
  }
```
Run `npm install` on root to grab dependencies

Spin up mongo, navigate to your project root and start sails `sails lift`

### Pages

`/login` based on a user you create through api `/create?username=Chris&password=password`

This will redirect you to `/admin` which is a CMS page for the front-end using angular bindings.

#### Thank you /u/MikeDevita for https://github.com/RelativeMedia/sails-PassportLocalMongoExample/


