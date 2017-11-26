var Headers = function () {

    this.greetingText = element(by.css("#greetings"));
    
    this.getGreetingText = () => { return greetingText.getText() }

}

module.exports = new Headers();