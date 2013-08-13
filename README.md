
# Responsive Single Page App
### NodeJS, SailsJS, AngularJS with Admin Panel

![alt text](https://github.com/thoughtpalette/SailsJS_SinglePageAPP/tree/master/assets/images/home.png "Home")

### How to Instal

Navigate to Fork/download folder

`npm install`

This will grab the dependencies for the project. 


### Set UP Database
Using the sails-mongo adapter https://github.com/balderdashy/sails-mongo

Create DB in mongo. You can view the mongo docs [here](http://docs.mongodb.org/manual/)

Navigate to your mongo bin folder.

In one terminal run `mongod` to spin up the db.
In another terminal run `mongo` to connect to the shell
Check the [docs](http://docs.mongodb.org/manual/) on how to create a DB


Once you have mongo up and running, time to connect your DB from your app. 
Navigate to `\config\adapters.js` and set up your config
Ex:
```javascript
    module   : 'sails-mongo',
    host     : 'localhost',
    user     : 'thoughtpalette',
    password : 'password',
    database : 'localHostTestDB'
```

### Start Project

Navigate to your project root and start sails `sails lift`

### Pages

Comment out the authentication in `\config\policies.js` under UserController.
Create your admin login straight from the URL as such:
`localhost:1337/user/create?username=name&password=password`

You can then add the authentication back on the UserController so only you can now create admins ;}

### Login

Once your main admin user is created, navigate to `/login` and login with your credentials. 
This will redirect you to the admin interface.

![alt text](https://github.com/thoughtpalette/SailsJS_SinglePageAPP/tree/master/assets/images/login.png "Login")

### Admin

In this panel you have control to add/delete employees and portfolio items to the front-end and logout as as admin.

![alt text](https://github.com/thoughtpalette/SailsJS_SinglePageAPP/tree/master/assets/images/admin.png "Login")

### How to debug
Install node-inspector globally
`npm install -g node-inspector`
Follow instructions to get that running

Switch to project/nodeapp folder in terminal
Debug with `node --debug app.js`

#### Thank you /u/MikeDevita for https://github.com/RelativeMedia/sails-PassportLocalMongoExample/


