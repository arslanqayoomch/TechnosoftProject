const Commands = require("../Commands");
const Moments = require("../Moments");

class Homepage2 {
    commands = new Commands();
    moment = new Moments();

    getTheAppBtn = "#submitBtn"
    phoneNumberBox = "#phoneNumber"
    errMsg = "//div[text()='Please enter a valid phone number.']"
    datesBtn = "#date_form_field-btn"
    monthShownStarts = "//h2[contains(text(),'"
    monthShownEnds = "')]"
    backBtn = "//div[@class='uitk-calendar']//div//button"
    disabledBtns = "//button[contains(@aria-label,'date disabled')]"
    
    goingToLocator = "//button[contains(@aria-label,'Going to')]";
    toTypeInGoingToLocator = '#destination_form_field';
    destinationAutoSuggestionLocator = "//div[@class='truncate']//strong";
    
    monthDatesLocatorStarts = '//h2[text()="'
    monthDatesLocatorEnds = '"]/following-sibling::table//button[not(@disabled)]';
    
    monthHeadingLocatorStarts = 'h2='
    nextButtonOnCalendarLocator = "(//button[@data-stid='date-picker-paging'])[2]";

    doneBtn = "//button[@data-stid='apply-date-picker']";
    searchBtn = "#submit_button"

    textMsg = "//span[contains(text(),'Tell us how we')]"
    shareFeedbackBtn = "//a[contains(text(),'Share')]"
    
    englishDropdown = "//div[text()='English']"
    languageSelector = "#language-selector"
    saveBtn = "//button[text()='Save']"
    espanolDropdown = "//div[text()='Español']"
    guardarBtn = "//button[text()='Guardar']"
    listYourProp = "//div[text()='List your property']"

    async clickListYourProp(){
        await this.commands.clickWebElement(this.listYourProp);
    }
    async verifyEnglishDisplayed(){
        return await this.commands.isWebElementDisplayedWithWait(this.englishDropdown);
    }
    async clickGuardar(){
        await this.commands.isWebElementDisplayedWithWait(this.guardarBtn);
        await this.commands.clickWebElement(this.guardarBtn);
    }
    async verifyEspanolDisplayed(){
        return await this.commands.isWebElementDisplayedWithWait(this.espanolDropdown);
    }
    async clickEspanol(){
        await this.commands.isWebElementDisplayedWithWait(this.espanolDropdown);
        await this.commands.clickWebElement(this.espanolDropdown);
    }
    async clickSave(){
        await this.commands.clickWebElement(this.saveBtn);
    }
    async clickEnglish(){
        await this.commands.isWebElementDisplayedWithWait(this.englishDropdown);
        await this.commands.clickWebElement(this.englishDropdown);
    }
    async selectLanguage(value){
        await this.commands.selectFromDropdown(this.languageSelector, value);
    }
    async verifyShareBtnDisplayedAndEnabled(){
        const btnText = await this.commands.getTextFromWebElement(this.shareFeedbackBtn);
        if(btnText.includes('Share feedback')){
            if(await this.commands.isWebElementEnabled(this.shareFeedbackBtn)===true){
                return true;
            }
        }
    }
    async verifyTextMsgDisaplayed(){
        await this.commands.scrollAndFindWebElement(this.textMsg);
        return await this.commands.isWebElementDisplayedWithWait(this.textMsg);
    }
    async clickSearchBtn(){
        await this.commands.clickWebElement(this.searchBtn);
    }
    async clickDone(){
        await this.commands.clickWebElement(this.doneBtn);
    }
    async selectCheckOutDate(monthName, year, checkOutDate) {

        const monthHeadingLocator = this.monthHeadingLocatorStarts + monthName + ' ' + year;
        const monthDatesLocator = this.monthDatesLocatorStarts + monthName + ' ' + year + this.monthDatesLocatorEnds
        await this.commands.selectDateFromCalendar(monthHeadingLocator, this.nextButtonOnCalendarLocator, monthDatesLocator, checkOutDate)
    }
    async selectCheckInDate(monthName, year, checkInDate) {
        await this.commands.clickWebElement(this.datesBtn);
        const monthHeadingLocator = this.monthHeadingLocatorStarts + monthName + ' ' + year;
        const monthDatesLocator = this.monthDatesLocatorStarts + monthName + ' ' + year + this.monthDatesLocatorEnds
        await this.commands.selectDateFromCalendar(monthHeadingLocator, this.nextButtonOnCalendarLocator, monthDatesLocator, checkInDate)
    }
    async enterDestination(destination) {
        await this.commands.isWebElementDisplayedWithWait(this.goingToLocator);
        await this.commands.clickWebElement(this.goingToLocator);
        await this.commands.typeInWebElement(this.toTypeInGoingToLocator, destination)
        await browser.pause(2000);
    }
    async selectDestinationFromAutoSuggestion(selectThis) {
        await this.commands.isWebElementDisplayedWithWait(this.destinationAutoSuggestionLocator);
        await this.commands.selectFromAutoSuggestions(this.destinationAutoSuggestionLocator, selectThis);
    }
    async verifyPastDatesDisabled(){
        const disabledDates = await this.commands.findWebElements(this.disabledBtns);
        const num = disabledDates.length;
        const actualNum = Moments.getCurrentDate()-1;
        if(num===actualNum){
            return true;
        }
    }
    async verifyCuurentMonthBackBtnDisabled(){
        return await this.commands.isWebElementEnabled(this.backBtn);
    }
    async goToCurrentMonth(){
        const currentMonth = this.monthShownStarts + Moments.getCurrentMonth() + this.monthShownEnds;
        for(let i = 0; i<=2; i++){
            if (await this.commands.isWebElementDisplayed(currentMonth)===false){
                await this.commands.clickWebElement(this.backBtn);
                break;
            }
        }
        
    }
    async clickDatesBtn(){
        await this.commands.clickWebElement(this.datesBtn);
    }
    async scrollToGetTheApp(){
        await this.commands.scrollAndFindWebElement(this.getTheAppBtn);
    }
    async enterPhoneNumber(value){
        await this.commands.typeInWebElement(this.phoneNumberBox, value);
    }
    async clickGetTheApp(){
        await this.commands.clickWebElement(this.getTheAppBtn);
    }
    async phoneNumErrMsgIsDisplayed(){
        return await this.commands.isWebElementDisplayedWithWait(this.errMsg);
    }


}
module.exports = Homepage2;