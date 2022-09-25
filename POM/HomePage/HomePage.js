const Commands = require("../Commands")


class Homepage{
   commands = new Commands()    
    

    emailField = "#loginFormEmailInput"
    passwordField = "#loginFormPasswordInput"
    signinBtn = "#loginFormSubmitButton"
    errMsg = "//h3[contains(text(),'Email and password')]"
    body = "#app"

    signUpLink = "//a[contains(text(),'Create')]"
    feedbackLink = "//a[text()='Feedback']"
    signInDropdown = "//button[text()='Sign in']"

    

    travelersBtn = "//label[text()='Travelers']/following-sibling::input/following-sibling::button"
    addAdultsBtn = "//input[@aria-label='Adults ']/following-sibling::button/span"
    numOfAdults = "//input[@aria-label='Adults ']/following-sibling::button"
    
    addChildrenBtn = "//input[contains(@aria-label,'Children')]/following-sibling::button"
    removeChildrenBtn = "//input[contains(@aria-label,'Children')]/preceding-sibling::button";
    numOfChildren = "//input[contains(@aria-label,'Children')]"

    child1Dropdown = "//label[contains(text(),'Child 1')]/following-sibling::select"
    child2Dropdown = "//label[contains(text(),'Child 2')]/following-sibling::select"
    child3Dropdown = "//label[contains(text(),'Child 3')]/following-sibling::select"
    doneBtn = "#traveler_selector_done_button"
    numOfTravelers = "//button[contains(text(),'travelers')]"
        
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
    signInBtn = "//button[text()='Sign in']";
    signInLink = "//a[text()='Sign in']";
    numOfDropdownsForChildren = "//select[contains(@name,'child-traveler_selector')]"
    
    async childrenAgeDropdownisDisplayed(){
        return await this.commands.isWebElementDisplayed(this.numOfDropdownsForChildren);
    }
    async addChildrenBtnisEnabled(){
        return await this.commands.isWebElementEnabled(this.addChildrenBtn);
    }
    async removeChildrenBtnisEnabled(){
        return await this.commands.isWebElementEnabled(this.removeChildrenBtn);
    }
    async verify2Dropdown(){
        const locators = await this.commands.findWebElements(this.numOfDropdownsForChildren);
        if(locators.length===2){
            return true;    
        }
    }
    async verify6Dropdown(){
        const locators = await this.commands.findWebElements(this.numOfDropdownsForChildren);
        if(locators.length===6){
            return true;    
        }
    }
    async verify5Dropdown(){
        const locators = await this.commands.findWebElements(this.numOfDropdownsForChildren);
        if(locators.length===5){
            return true;    
        }
    }
    async verify0Dropdown(){
        const locators = await this.commands.findWebElements(this.numOfDropdownsForChildren);
        if(locators.length===0){
            return true;    
        }
    }
    async clickOnTravelers(){
        await this.commands.clickWebElement(this.travelersBtn);
    }
    async setNumOfAdults(num){ 
        for(let i=2; i<num ; i++){
            await this.commands.clickWebElement(this.addAdultsBtn);
            const numOfAdults = await this.commands.getTextFromWebElement(this.numOfAdults);
            if(numOfAdults.localeCompare(num)===0){
                break;
            }
        }
    }
    async setNumOfChildren(num){
        for(let i=0; i<num ; i++){
            await this.commands.clickWebElement(this.addChildrenBtn);
            const numOfChildren = await this.commands.getTextFromWebElement(this.numOfChildren);
            if(numOfChildren.localeCompare(num)===0){
                break;
            }
        }
    }
    async clickMinusButton(num){
        for(let i=0; i<num;i++){
            await this.commands.clickWebElement(this.removeChildrenBtn);
        }
    }
    async selectChildOneAge(num){
        await this.commands.selectFromDropdown(this.child1Dropdown, num);
    }
    async selectChildTwoAge(num){
        await this.commands.selectFromDropdown(this.child2Dropdown, num);
    }
    async selectChildThreeAge(num){
        await this.commands.selectFromDropdown(this.child3Dropdown, num);
    }
    async clickDone(){
        await this.commands.clickWebElement(this.doneBtn);
    }
    async verifyTravelersNumEqualInputof(num){
        const text = await this.commands.getTextFromWebElement(this.numOfTravelers);
        if (text.includes(num)){
            return true;
        }
    }
    async clickSignInBtn(){
        await this.commands.clickWebElement(this.signInBtn);
        await this.commands.clickWebElement(this.signInLink);
    }
 

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

module.exports = Homepage