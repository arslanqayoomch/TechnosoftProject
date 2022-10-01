const Commands = require("../Commands");


class SignInpage{

    commands = new Commands();

    emailField = "#loginFormEmailInput"
    passwordField = "#loginFormPasswordInput"
    signinBtn = "#loginFormSubmitButton"
    errMsg = "//h3[contains(text(),'Email and password')]"
    body = "#app"

    signUpLink = "//a[contains(text(),'Create')]"
    feedbackLink = "//a[text()='Feedback']"
    signInDropdown = "//button[text()='Sign in']"

    

    async enterLoginEmail(value){
        await this.commands.clickWebElement(this.emailField);
        await this.commands.typeInWebElement(this.emailField, value);
    }
    async enterPassword(value){
        await this.commands.clickWebElement(this.passwordField);
        await this.commands.typeInWebElement(this.passwordField, value);
    }
    async clickSignInBtn(){
        await this.commands.clickWebElement(this.signinBtn);
    }
    async errMsgisDisplayed(){
        return await this.commands.isWebElementDisplayed(this.errMsg);
    }
    async clickSignUpLink(){
        await this.commands.clickWebElement(this.signUpLink);
    }
    async clickFeedbackLink(){
        await this.commands.clickWebElement(this.feedbackLink);
    }
    async clickSignInDropdown(){
        await this.commands.clickWebElement(this.signInDropdown);
    }


}
module.exports = SignInpage;