const Commands = require("../Commands")

class Feedbackpage{
    commands = new Commands()

    scrolllocator = "//a[contains(text(),'Hotels.com')]"
    submitBtn = "#submit-button"
    errMsg = "//p[contains(text(),'Please fill in the required')]"
    dottedBox = "//fieldset[@id='required_box_page_rating']"
    ratingsStart = "//label[@class='radio-label']/span[text()='"
    ratingsEnd = "']"
    commentsSection = "#verbatim"
    howLikelyToReturnDropdown = "#will-you-return"
    bookedherebeforeStarts = "//label[@for='booked-here-before-"
    bookedherebeforeEnds = "']"
    didYouAccomplishStarts = "//label[@for='were-you-successful-"
    didYouAccomplishEnds = "']"
    emailId = "#email_address"
    thankyouMsg = "//h5[contains(text(),'THANK YOU')]"



    privacyStLinks = "//a[contains(text(),'Privacy Statement')]"

    async verifyTermsAndConditionsNewTab(){
        const allHandles = await this.commands.getAllWindowHandles();
        for(let handle of allHandles) {
            await this.commands.switchToWindowHandle(handle);
            const currentTitle = await this.commands.getWindowTitle();
            if(currentTitle.includes('Terms of Service')){
                return true;
                break;
            }
        }
    }
    async clickPrivacyStatement(){
        const links = await this.commands.findWebElements(this.privacyStLinks);
        await this.commands.clickWebElement(links[0]);
    }
    
    async verifyPrivacyStNewTab(){
        const allHandles = await this.commands.getAllWindowHandles();
        for(let handle of allHandles) {
            await this.commands.switchToWindowHandle(handle);
            const currentTitle = await this.commands.getWindowTitle();
            if(currentTitle.includes('Deals & Discount')){
                return true;
                break;
            }
        }
    }


    
    async verifyThankYouMsgDisplayed(){
        return await this.commands.isWebElementDisplayed(this.thankyouMsg);
      
    }
    async didYouAccomplishYesOrNo(value){
        await this.commands.scrollAndFindWebElement(this.emailId);
        const locator = this.didYouAccomplishStarts + value.toLowerCase() + this.didYouAccomplishEnds;
        await this.commands.clickWebElement(locator);
    }
    async bookedHereBeforeYesOrNo(value){
        const locator = this.bookedherebeforeStarts + value.toLowerCase() + this.bookedherebeforeEnds;
        await this.commands.clickWebElement(locator);
    }
    async selectValueforLikelyToReturn(text){
        
        return await this.commands.selectFromDropdown(this.howLikelyToReturnDropdown, text);
    }
    async typeInComments(value){
        await this.commands.typeInWebElement(this.commentsSection, value);
    }
    async selectRating(num){
        const rating = this.ratingsStart + num + this.ratingsEnd;
        const allHandles = await this.commands.getAllWindowHandles();
        for(let handle of allHandles) {
            await this.commands.switchToWindowHandle(handle);
            const currentTitle = await this.commands.getWindowTitle();
            if(currentTitle.includes('DirectWord')){
                await this.commands.switchToWindowHandle(handle);
                await this.commands.clickWebElement(rating);
                break;
            }
        }
        
    }
    async clickSubmitBtn(){
        const allHandles = await this.commands.getAllWindowHandles();
        for(let handle of allHandles) {
            await this.commands.switchToWindowHandle(handle);
            const currentTitle = await this.commands.getWindowTitle();
            if(currentTitle.includes('DirectWord')){
                await this.commands.switchToWindowHandle(handle);
                await this.commands.scrollAndClickWebElement(this.submitBtn);
                break;
            }
        }
    }
    async verifyErrMsgDisplayed(){
        return await this.commands.isWebElementDisplayed(this.errMsg);
    }
    async dottedBoxDisplayed(){
        return await this.commands.isWebElementDisplayed(this.dottedBox);
    }
}

module.exports = Feedbackpage