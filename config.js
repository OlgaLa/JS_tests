exports.config = {

  seleniumAddress: 'http://localhost:4444/wd/hub',

  //baseUrl: 'http://cafetownsend-angular-rails.herokuapp.com',

  capabilities: {
      browserName:'chrome'
  },

  framework: 'custom',  // set to "custom" instead of cucumber.

  frameworkPath: require.resolve('protractor-cucumber-framework'),  // path relative to the current config file

  specs: [
    'features/*.feature'     // Specs here are the cucumber feature files
  ],

  // cucumber command line options
  cucumberOpts: {
    require: ['features/features_steps/*.js'],  
    format: ["progress"]
  },

 onPrepare: function () {
    browser.manage().window().maximize(); // maximize the browser before executing the feature files
  }, 

  params: {
    env: {
      hostname: 'http://cafetownsend-angular-rails.herokuapp.com' 
    }
  }
};