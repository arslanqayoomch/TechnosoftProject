const Commands = require("../Commands");

class TermsConditionspage{
    commands = new Commands();

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
}
module.exports = TermsConditionspage;