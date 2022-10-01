const { default: BrowserstackService } = require("@wdio/browserstack-service");
const Commands = require("../Commands");

class Searchpage{

    commands = new Commands();

    button = "//button[text()='Search']"
    fiveStarLocator = "//label[@for='star-4']"
    scrollTorating = "//h4[text()='Star rating']"
    fiveStarLocator = "//input[@id='star-4']/following-sibling::label"
    sortDropdown = "#sort"
    starRatingLocator = "//span[contains(text(),'5.0 out of 5')]"
    numOfHotelsLocator = "//span[contains(text(),'More')]"
    priceLocator = "//div[contains(text(),'The price is')]/following-sibling::span//div"

    async verifyPriceLessToMore(){
        // await this.commands.isWebElementDisplayedWithWait(this.numOfHotelsLocator);
        const priceLocatorArr = await this.commands.findWebElements(this.priceLocator);
        const prices = [];
        // const hotelNum = await this.commands.findWebElements(this.numOfHotelsLocator).length;
        for(let i = 0; i<=priceLocatorArr.length; i++){
            const priceText = await this.commands.getTextFromWebElement(this.priceLocator);
            const num = priceText.split('$');
            prices.push(num[1]);
                if(i===priceLocatorArr.length){
                    for(let i = 0; prices[i]<=prices[i+1]; i++){
                        return true;
                    }
                }
        }
    }
    async verifyAllHotelsAreSameRating(){
        const hotelNum = await this.commands.findWebElements(this.numOfHotelsLocator).length;
        const starRatingNum = await this.commands.findWebElements(this.starRatingLocator).length;
        if(hotelNum===starRatingNum){
            return true;
        }
    }
    async clickFiveStarRating(){
        await this.commands.isWebElementDisplayedWithWait(this.button);
        await this.commands.scrollAndClickWebElement(this.fiveStarLocator);
     
    }
    async selectFromSortByDropdown(value){
        await this.commands.scrollAndFindWebElement(this.sortDropdown);
        await this.commands.selectFromDropdown(this.sortDropdown, value);
    }
}
module.exports = Searchpage;