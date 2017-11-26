var LoginPage = function () {


    this.userNameField = element(by.model("user.name"));
    this.passwordField = element(by.model("user.password"));
    this.loginButton = element(by.xpath(".//*[@id='login-form']/fieldset/button"));

    this.enterUserName = (username) => this.userNameField.sendKeys(username);

    this.enterPassword = (password) => this.passwordField.sendKeys(password);

    this.clickLoginButton = () => this.loginButton.click();

    this.login = (username, password) => {
        this.enterUserName(username);
        this.enterPassword(password);
        this.clickLoginButton();
    }

}

module.exports = new LoginPage();