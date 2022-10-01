const { ANDROID_CONFIG } = require("@wdio/cli/build/constants");
const { Given, When, Then } = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const Homepage2 = require("../../Pages/Hotels/Homepage2");
const Listyourproperty = require("../../Pages/Hotels/Listyourproperty");
const Searchpage = require("../../Pages/Hotels/Searchpage");

const hpage2 = new Homepage2();
const srchpage = new Searchpage();
const lyppage = new Listyourproperty();
// TC-30
When(/^I scroll to "Get the app" button$/, async function(){
    await hpage2.scrollToGetTheApp();
})
When(/^I enter “0000000000” in phone number$/, async function(){
    await hpage2.enterPhoneNumber('0000000000');
})
When(/^I click on “Get the app“ button$/, async function(){
    await hpage2.clickGetTheApp();
})
Then(/^I verify “Please enter a valid phone number.“ error is displayed$/, async function(){
    expect(await hpage2.phoneNumErrMsgIsDisplayed(), 'Error message not displayed').to.be.true;
})
//TC-17
When(/^I click on dates$/, async function(){
    await hpage2.clickDatesBtn();
})
When(/^I go to current month if date not displayed$/, async function(){
    await hpage2.goToCurrentMonth();
}) 
Then(/^I verify for current month past dates, if any, are disabled$/, async function(){
    expect(await hpage2.verifyPastDatesDisabled(), 'Dates not disabled').to.be.true;
})
Then(/^I verify back button on current month is disabled$/, async function(){
    expect(await hpage2.verifyCuurentMonthBackBtnDisabled(), 'Button not disabled').to.be.false;
})
//TC-19
When(/^I enter "(bora|Manhattan, NY)" in destination$/, async function(fieldname){
    switch(fieldname) {
        case("bora"):
            await hpage2.enterDestination('bora');
            break;
        case("Manhattan, NY"):
            await hpage2.enterDestination('Manhattan, NY');
            await hpage2.selectDestinationFromAutoSuggestion('manhattan');
            break;
    }
})
When(/^I select “Bora Bora, Leeward Islands, French Polynesia” from auto suggestion$/, async function(){
    await hpage2.selectDestinationFromAutoSuggestion('bora bora');
})
When(/^I select Dec 1, 2022 as Check-in$/, async function(){
    await hpage2.selectCheckInDate('December', '2022', '1');
})
When(/^I select Dec 10, 2022 as Check-out$/, async function(){
    await hpage2.selectCheckOutDate('December', '2022', '10');
})
When(/^I click apply$/, async function(){
    await hpage2.clickDone();
})
When(/^I click on search button$/, async function(){
    await hpage2.clickSearchBtn();
})
When(/^I verify at the end of search results, Text: Tell us how we can improve our site is displayed$/, async function(){
    expect(await hpage2.verifyTextMsgDisaplayed(), 'Message not displayed').to.be.true;
})
When(/^I verify at the end of search results, Button Share feedback is displayed and enabled$/, async function(){
    expect(await hpage2.verifyShareBtnDisplayedAndEnabled(), 'Button not displayed and enabled').to.be.true;
})
// TC-31
When(/^I click on (English|Español) language$/, async function(fieldname){
    switch(fieldname) {
        case('English'):
            await hpage2.clickEnglish();
            break;
        case('Español'):
            await hpage2.clickEspanol();
            break;
    }   
})
When(/^I select (Español Estados Unidos|English United States) in Language dropdown$/, async function(fieldname){
    switch(fieldname) {
        case('Español Estados Unidos'):
            await hpage2.selectLanguage('Español (Estados Unidos)');
            break;
        case('English United States'):
            await hpage2.selectLanguage('English (United States)');
            break;
    }
})
When(/^I click (save|Guardar) button$/, async function(fieldname){
    switch(fieldname) {
        case('save'):
            await hpage2.clickSave();
            break;
        case('Guardar'):
            await hpage2.clickGuardar();
            break;
    }
})
When(/^I verify (Español|English) is displayed$/, async function(fieldname){
    switch(fieldname) {
        case('Español'):
            expect(await hpage2.verifyEspanolDisplayed(), 'Espanol not displayed').to.be.true;
            break;
        case('English'):
            expect(await hpage2.verifyEnglishDisplayed(), 'English not displayed').to.be.true;
    }
})
// TC-23
When(/^I select Jan 10, 2023 as Check-in$/, async function(){
    await hpage2.selectCheckInDate('January', '2023', '10');
})
When(/^I select Jan 23, 2023 as Check-out$/, async function(){
    await hpage2.selectCheckOutDate('January', '2023', '23');
})
When(/^I click on 5 star from star-rating$/, async function(){
    await srchpage.clickFiveStarRating();
})
When(/^I select Price from sort-by dropdown$/, async function(){
    await srchpage.selectFromSortByDropdown('Price');
})
Then(/^I verify all hotels in search results are star-rated as selected in above step$/, async function(){
    expect(await srchpage.verifyAllHotelsAreSameRating(), 'All hotels are not same rating').to.be.true;
})
Then(/^I verify all hotels are listed in increasing order price$/, async function(){
    expect(await srchpage.verifyPriceLessToMore(), 'Price is not in order').to.be.true;
})
//TC-29
When(/^I click on List your property$/, async function(){
    await hpage2.clickListYourProp();
})
Then(/^I verify “What would you like to list” is displayed$/, async function(){
    expect(await lyppage.verifyWhatWouldYouLikeisDisplayed(), 'Title not displayed').to.be.true;
})
Then(/^I verify “Lodging“ and “Private residence“ options are displayed$/, async function(){
    expect(await lyppage.verifyLodgingAndPrivateAreDisplayed(), '“Lodging“ and “Private residence“ options are not displayed').to.be.true;
})
When(/^I click on “Private residence“$/, async function(){
    await lyppage.clickPrivate();
})
Then(/^I verify ”Step 1 of 3” is displayed$/, async function(){
    expect(await lyppage.verifyStepOneofThreeDisplayed(), '”Step 1 of 3” is not displayed').to.be.true;
})
Then(/^I verify “See how much you could earn!” is displayed$/, async function(){
    expect(await lyppage.verifyHowMuchEarnDisaplayed(),'“See how much you could earn!” is not displayed').to.be.true;
})
When(/^I enter “4“ in bedroom$/, async function(){
    await lyppage.addBedroom(4);
})
When(/^I enter “2.5“ in bathroom$/, async function(){
    await lyppage.clickAddBathroom(3);
})
When(/^I click on next button$/, async function(){
    await lyppage.clickNext();
})
Then(/^I verify ”Step 2 of 3” is displayed$/, async function(){
    expect(await lyppage.verifyStepTwoofThreeDisplayed(), '”Step 2 of 3” is not displayed').to.be.true;
})
Then(/^I verify “Where is your property located” is displayed$/, async function(){
    expect(await lyppage.verifyWhereIsPropertyDisaplyed(), '“Where is your property located” is not displayed').to.be.true;
})
When(/^I enter “121” in address$/, async function(){
    await lyppage.typeAddress('121');
})
When(/^I select “1211 6th Avenue, New York, NY, USA” from auto-suggestion$/, async function(){
    await lyppage.selectAddress('1211 6th Avenue, New York, NY, USA');
})
Then(/^I verify graph is displayed$/, async function(){
    expect(await lyppage.graphisDisplayed(), 'Graph is not displayed').to.be.true;
})
Then(/^I verify pin in graph is displayed$/, async function(){
    expect(await lyppage.verifyPinisDisplayed(), 'Pin not displayed').to.be.true;
})
Then(/^I verify “Move pin to adjust location“ is displayed below graph$/, async function(){
    expect(await lyppage.verifyMsgBelowGraphisDisplayed() , 'Message not displayed').to.be.true;
})