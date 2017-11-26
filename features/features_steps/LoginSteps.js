const { Given, When, Then } = require('cucumber');
var chai = require('chai'), 
    expect = chai.expect;
//const { chai } = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);

var login = require('../../pages/LoginPage.js');

var headers = require('../../pages/Headers.js');


Given('I go to Home page', function(callback) {
  browser
    .get(browser.params.env.hostname)
    .then(callback);
});

When('I enter valid username and password and click login button', function () {
  login
  	.login("Luke", "Skywalker");
});

Then('I should be in employee page', function () {
  expect(headers.greetingText.getText()).to.equal("Hello Luke");
});