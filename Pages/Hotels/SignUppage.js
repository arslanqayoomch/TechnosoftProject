const Commands = require("../Commands")

class SignUppage{
    commands = new Commands();
    
    signUpemail = '#signupFormEmailInput'
    firstname = '#signupFormFirstNameInput'
    lastname = '#signupFormLastNameInput'
    signUppassword = '#signupFormPasswordInput'
    
    errMsgValidEmail = "//div[contains(text(),'Enter a valid')]"
    errMsgFirstname = "//div[contains(text(),'First name cannot')]"
    errMsgLastname = "//div[contains(text(),'Last name cannot')]"
    signUpFormCheckbox = "//input[@type='checkbox']";
    continueBtn = "#signupFormSubmitButton"
    checkbox = "//label[contains(text(),'Keep me signed ')]"
    termsAndConditionsLink = "//a[contains(text(),'Terms and')]"

    async enterSignUpEmail(value){
        await this.commands.clickWebElement(this.signUpemail);
        await this.commands.typeInWebElement(this.signUpemail, value);
    }
    async enterFirstName(value){
        await this.commands.clickWebElement(this.firstname);
        await this.commands.typeInWebElement(this.firstname, value);
    }
    async enterLastName(value){
        await this.commands.clickWebElement(this.lastname);
        await this.commands.typeInWebElement(this.lastname, value);
    }
    async enterSignUpPassword(value){
        await this.commands.clickWebElement(this.signUppassword);
        await this.commands.typeInWebElement(this.signUppassword, value);
    }
    async verifySignUpEmailErrMsg(){
        await this.commands.isWebElementDisplayed(this.errMsgValidEmail);
    }
    async verifyFirstnameErrMsg(){
        await this.commands.isWebElementDisplayed(this.errMsgFirstname);
    }
    async verifyLastnameErrMsg(){
        await this.commands.isWebElementDisplayed(this.errMsgLastname);
    }
    async checkboxDisplayed(){
        await this.commands.scrollAndFindWebElement(this.checkbox);
        // const text = await this.commands.getTextFromWebElement(this.checkbox);
        return await this.commands.isWebElementDisplayed(this.checkbox);
    }
    async checkboxEnabled(){
        return await this.commands.isWebElementEnabled(this.signUpFormCheckbox);
    }
    async continueBtnDisplayed(){
        await this.commands.scrollAndFindWebElement(this.continueBtn);
        return await this.commands.isWebElementDisplayed(this.continueBtn);
    }
    async continueBtnEnabled(){
        return await this.commands.isWebElementEnabled(this.continueBtn);
    }
    async clickTermsAndConditons(){
        await this.commands.clickWebElement(this.termsAndConditionsLink);
    }

}
module.exports = SignUppage;