var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var expect = chai.expect;

chai.use(chaiAsPromised);

var login = require('../pages/LoginPage.js');

var headers = require('../pages/Headers.js');

var LoginSteps = function() {

  this.Given(/^I go to Home page$/, function(callback) {
    browser
      .get(browser.params.env.hostname)
      .then(callback);
  });
  
  this.When(/^I enter valid username$/, function (callback) {
    login
    	.enterUserName()
	    .then(callback);
  });

  this.And(/^I enter valid password$/, function (callback) {
    login
    	.enterPassword()
	    .then(callback);
  });

  this.And(/^I click the login button$/, function (callback) {
    login
    	.clickLoginButton()
	    .then(callback);
  });

  this.Then(/^I should be in employee page$/, function (callback) {
    expect(headers.getGreetingText()).equal("Hello Luke");
  });

};


module.exports = LoginSteps;