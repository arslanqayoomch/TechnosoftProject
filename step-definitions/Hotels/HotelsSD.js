const { Given, When, Then } = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const Feedbackpage = require("../../Pages/Hotels/Feedbackpage");
const Homepage = require("../../Pages/Hotels/Homepage");
const SignInpage = require("../../Pages/Hotels/SignInpage");
const SignUppage = require("../../Pages/Hotels/SignUppage");
const TermsConditionspage = require("../../Pages/Hotels/TermsConditionspage");

const hpage = new Homepage();
const spage = new SignInpage();
const supage = new SignUppage();
const tcpage = new TermsConditionspage();
const fpage = new Feedbackpage();
// T-18 -->
Given(/^I am on hotels landing page$/, async function(){
    await browser.url('/');
    // await browser.pause(2000);
    await hpage.waitForPagetoLoad('hotels');
});
When(/^I click on Travelers$/, async function(){
    await hpage.clickOnTravelers();
});
Then(/^I select adults as "6"$/, async function(){
    await hpage.setNumOfAdults(6);
})
Then(/^I select children as "3"$/, async function(){
    await hpage.setNumOfChildren(3);
})
Then(/^I select first child age as 4$/, async function(){
    await hpage.selectChildOneAge(4);
})
Then(/^I select second child age under 1$/, async function(){
    await hpage.selectChildTwoAge('Under 1');
})
Then(/^I select third child age 7$/, async function(){
    await hpage.selectChildThreeAge(7);
})
When(/^I click Done$/, async function(){
    await hpage.clickDone();
})

Then(/^I verify total number of guests in sum of adults and children same as selected on step 3 and 4$/, async function(){
    expect(await hpage.verifyTravelersNumEqualInputof(9), 'Numbers are different').to.be.true;
    
})

// TC --> 21
When(/^I click on "Sign in" link$/, async function(){
    await hpage.clickSignInBtn();
})
Then(/^I enter "(.+)" as (email|password)$/, async function(value, fieldname){
    switch(fieldname) {
        case 'email':
            await spage.enterLoginEmail(value);
            break;
        case 'password':
            await spage.enterPassword(value);
            break;            
    }
})
When(/^I click on Sign In button$/, async function(){
    await spage.clickSignInBtn();
})
Then(/^I verify verification message is displayed$/, async function(){
    expect(await spage.errMsgisDisplayed(), 'Error message not displayed').to.be.true;
})
// TC-->22
Then(/^I click on SignUp link$/, async function(){
    await spage.clickSignUpLink();
})
When(/^I enter "(.+)" as invalid (email|firstname|lastname|password)$/, async function(value, fieldname){
    switch(fieldname) {
        case 'email':
            await supage.enterSignUpEmail(value);
            break;
        case 'firstname':
            await supage.enterFirstName(value);
            break;
        case 'lastname':
            await supage.enterLastName(value);
            break;
        case 'password':
            await supage.enterSignUpPassword(value);
            break;            
    }
    await browser.pause(2000);
})
Then(/^I verify "Enter a valid email address" error is displayed$/, async function(){
    await supage.verifySignUpEmailErrMsg();
})
Then(/^I verify "First name cannot contain special characters" error is displayed$/, async function(){
    await supage.verifyFirstnameErrMsg();
})
Then(/^I verify "Last name cannot contain special characters" error is displayed$/, async function(){
    await supage.verifyLastnameErrMsg();
})
Then(/^I verify "Keep me signed in" checkbox is displayed and enabled$/, async function(){
    expect(await supage.checkboxDisplayed(), 'Checkbox not displayed').to.be.true;
    expect(await supage.checkboxEnabled(), 'Checkbox not enabled').to.be.true;
})
Then(/^I verify "Continue" button is displayed but NOT enabled$/, async function(){
    expect(await supage.continueBtnDisplayed(), 'Continue button not displayed').to.be.true;
    expect(await supage.continueBtnEnabled(), 'Continue button enabled').to.be.false;
})
//TC-20
When(/^I click on “Terms and Conditions” link$/, async function(){
    await supage.clickTermsAndConditons();
})
Then(/^I verify “Terms and Conditions” page opens in new tab$/, async function(){
    expect( await tcpage.verifyTermsAndConditionsNewTab(), 'Terms and conditions does not open in new page').to.be.true;
})
When(/^I click “Privacy Statement” link$/, async function(){
    await tcpage.clickPrivacyStatement();
})
Then(/^I verify “Privacy Statement” page opens in new tab$/, async function(){
    expect(await tcpage.verifyPrivacyStNewTab(), 'Privacy Statement does not open in new tab').to.be.true;
})
// TC-24
When(/^I click on "Sign in"$/, async function(){
    await spage.clickSignInDropdown();
})
When(/^I click on "Feedback"$/, async function(){
    await spage.clickFeedbackLink();
})
When(/^I click on Submit button$/, async function(){
    await fpage.clickSubmitBtn();
})
Then(/^I verify error message is displayed "Please fill in the required information highlighted below."$/, async function(){
    expect(await fpage.verifyErrMsgDisplayed(), 'Error message not displayed').to.be.true;
})
Then(/^I verify star boxes section is in a red dotted box$/, async function(){
    expect(await fpage.dottedBoxDisplayed(), 'Box not displayed').to.be.true;
})
//TC-25
When(/^I select a star-rating$/, async function(){
    await fpage.selectRating(1);
})
When(/^I enter any comments$/, async function(){
    await fpage.typeInComments('hello world');
})
When(/^I select any option for “How likely are you to return to Hotels.com”$/, async function(){
    await fpage.selectValueforLikelyToReturn('Unsure');
})
When(/^I select any answer for “Prior to this visit, have you ever booked on Hotels.com”$/, async function(){
    await fpage.bookedHereBeforeYesOrNo('yEs');
})
When(/^I select any answer for ”Did you accomplish what you wanted to do on this page”$/, async function(){
    await fpage.didYouAccomplishYesOrNo('nO');
})
Then(/^I verify “THANK YOU FOR YOUR FEEDBACK.“ is displayed$/, async function(){
    expect(await fpage.verifyThankYouMsgDisplayed(), 'Thank You message not displayed').to.be.true;
})
//TC-28
When(/^I select "children" as (2|6|5|0)$/, async function(fieldname){
    switch(fieldname) {
        case '2':
            await hpage.setNumOfChildren(2);
            await browser.pause(2000);
            break;
        case '6':
            await hpage.setNumOfChildren(4);
            await browser.pause(2000);
            break;
        case '5':
            await hpage.clickMinusButton(1);
            break;
        case '0':
            await hpage.clickMinusButton(5);
            break;
        
    }   
})
Then(/^I verify Children-age dropdown are (2|6|5)$/, async function(fieldname){
    switch(fieldname) {
        case '2':
            expect(await hpage.verify2Dropdown(), 'Does not display 2 dropdown').to.be.true;
            break;
        case '6':
            expect(await hpage.verify6Dropdown(), 'Does not display 6 dropdown').to.be.true;
            break;
        case '5':
            expect(await hpage.verify5Dropdown(), 'Does not display 5 dropdown').to.be.true;
            break;
    }
})
Then(/^I verify Plus-button is enabled$/, async function(){
    expect(await hpage.addChildrenBtnisEnabled(), 'Add button not enabled').to.be.true;
})
Then(/^I verify minus-button is enabled$/, async function(){
    expect(await hpage.removeChildrenBtnisEnabled(), 'Minus button not enabled').to.be.true;
})
Then(/^I verify Plus-button is disabled$/, async function(){
    expect(await hpage.addChildrenBtnisEnabled(), 'Add button not enabled').to.be.false;
})
Then(/^I verify minus-button is disabled$/, async function(){
    expect(await hpage.removeChildrenBtnisEnabled(), 'Minus button not enabled').to.be.false;
})
Then(/^I verify Children-age dropdown is NOT Displayed$/, async function(){
    expect(await hpage.childrenAgeDropdownisDisplayed(), 'Dropdowns displayed').to.be.false;
})
