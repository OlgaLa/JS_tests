const { Given, When, Then } = require('cucumber')
const { chai } = require('chai');
//const { chaiAsPromised } = require('chai-as-promised');
//var expect = chai.expect;

//chai.use(chaiAsPromised);

var login = require('../../pages/LoginPage.js');

var headers = require('../../pages/Headers.js');


//module.exports = function() {

  Given('I go to Home page', function(callback) {
    browser
      .get(browser.params.env.hostname)
      .then(callback);
  });
  
  When('I enter valid username and password and click login button', function () {
    login
    	.login("Luke", "Skywalker");
  });

  Then('I should be in employee page', function (callback) {
   expect(headers.getGreetingText()).equal("Hello Luke");
  });