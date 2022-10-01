const Commands = require("../Commands");

class Listyourproperty{
    commands = new Commands();

    whatWouldLocator = "//p[contains(text(),'What would')]"
    lodging = "//p[contains(text(),'Lodging')]"
    privateResidence = "//p[contains(text(),'Private residence')]"
    stepOneOfThree = "//div[text()='Step 1 of 3']"
    howMuch = "//h1[contains(text(),'See how much you')]"
    addBedroomBtn = "//button[contains(@aria-label,'Increase bedrooms')]"
    addBathrromBtn = "//button[contains(@aria-label,'Increase bathrooms')]"
    nextBtn = "#propertyInfoNextBtn"
    stepTwoOfThree = "//div[contains(text(),'Step 2 of 3')]"
    whereProperty ="//h1[text()='Where is your property located?']"
    enterAddress = "//input[contains(@aria-label,'Enter')]"
    autoSugg = "<li>"
    graph = "//div[@data-wdio='google-map-component']"
    pin = "//span[contains(text(),'To navigate')]/following-sibling::div"
    msg = "//span[contains(text(),'Move the pin')]"
    msg2 = "//div[contains(text(),'Pin location')]"


    async verifyMsgBelowGraphisDisplayed(){
        await this.commands.maximizeScreen()
        if(await this.commands.isWebElementDisplayed(this.msg)===true){
            return true;
        }
        else if(await this.commands.isWebElementDisplayed(this.msg2)===true){
            return true;
        }
    }
    async verifyPinisDisplayed(){
        return await this.commands.isWebElementDisplayedWithWait(this.pin);
    }
    async graphisDisplayed(){
        return await this.commands.isWebElementDisplayedWithWait(this.graph);
    }
    async selectAddress(selectThis){
        await this.commands.selectFromAutoSuggestions(this.autoSugg, selectThis);
    }
    async typeAddress(value){
        await this.commands.typeInWebElement(this.enterAddress, value);
    }
    async verifyWhereIsPropertyDisaplyed(){
        return await this.commands.isWebElementDisplayedWithWait(this.whereProperty);
    }
    async verifyStepTwoofThreeDisplayed(){
        return await this.commands.isWebElementDisplayedWithWait(this.stepTwoOfThree);
    }
    async clickAddBathroom(num){
        for(let i=0; i<num;i++){
            await this.commands.clickWebElement(this.addBathrromBtn);
        }
    }
    async clickNext(){
        await this.commands.clickWebElement(this.nextBtn);
    }
    async addBedroom(num){
        for(let i=0; i<num;i++){
            await this.commands.clickWebElement(this.addBedroomBtn);
        }
    }
    async verifyHowMuchEarnDisaplayed(){
        return await this.commands.isWebElementDisplayed(this.howMuch);
    }
    async verifyStepOneofThreeDisplayed(){
        return await this.commands.isWebElementDisplayedWithWait(this.stepOneOfThree);
    }
    async verifyWhatWouldYouLikeisDisplayed(){
        const allHandles = await this.commands.getAllWindowHandles();
        for(let handle of allHandles) {
            await this.commands.switchToWindowHandle(handle);
            const currentTitle = await this.commands.getWindowTitle();
            if(currentTitle.includes('Property')){
                await this.commands.switchToWindowHandle(handle);
                break;
            }
        }
        return await this.commands.isWebElementDisplayedWithWait(this.whatWouldLocator);
    }
    async verifyLodgingAndPrivateAreDisplayed(){
        if(await this.commands.isWebElementDisplayed(this.lodging)===true){
            if(await this.commands.isWebElementDisplayed(this.privateResidence)){
                return true;
            }
        }
    }
    async clickPrivate(){
        await this.commands.clickWebElement(this.privateResidence);
    }

}
module.exports = Listyourproperty;