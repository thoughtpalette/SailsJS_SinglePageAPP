/**
 * AdminController
 *
 * @module		:: Controller
 * @description	:: Contains logic for handling requests.
 */
var passport = require('passport');
module.exports = {

  /* e.g.
  sayHello: function (req, res) {
    res.send('hello world!');
  }
  */
  
  /**
   * /admin/controller
   */ 
  index: function (req,res) {
      return res.view();
  }

};

module.exports.blueprints = {

  // Expose a route for every method,
  // e.g.
  //  `/user/foo` => `foo: function (req, res) {}`
  actions: true,


  // Expose a RESTful API, e.g.
  //  `post /user` => `create: function (req, res) {}`
  rest: true,


  // Expose simple CRUD shortcuts, e.g.
  //  `/user/create` => `create: function (req, res) {}`
  // (useful for prototyping)
  shortcuts: true 

};
