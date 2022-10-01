Feature: Project 2

    @TC-30
    Scenario: Verify invalid phone number error
        Given I am on hotels landing page
        Then I scroll to "Get the app" button
        And I enter “0000000000” in phone number
        When I click on “Get the app“ button
        Then I verify “Please enter a valid phone number.“ error is displayed

    @TC-17
    Scenario: Verify past date and back button on Current month's calendar is disabled
        Given I am on hotels landing page
        When I click on dates
        And I go to current month if date not displayed
        Then I verify for current month past dates, if any, are disabled
        Then I verify back button on current month is disabled
    @TC-19
    Scenario: Verify Share feedback button is displayed at the end of search results
        Given I am on hotels landing page
        When I enter "bora" in destination
        And I select “Bora Bora, Leeward Islands, French Polynesia” from auto suggestion
        And I select Dec 1, 2022 as Check-in
        And I select Dec 10, 2022 as Check-out
        And I click apply
        And I click on search button
        Then I verify at the end of search results, Text: Tell us how we can improve our site is displayed
        Then I verify at the end of search results, Button Share feedback is displayed and enabled

    @TC-31
    Scenario: Verify language can be changed successfully
        Given I am on hotels landing page
        When I click on English language
        And I select Español Estados Unidos in Language dropdown
        And I click save button
        Then I verify Español is displayed
        When I click on Español language
        And I select English United States in Language dropdown
        And I click Guardar button
        Then I verify English is displayed
    
    @TC-23
    Scenario: Verify filter-by and sort-by functionality works as expected
        Given I am on hotels landing page
        When I enter "Manhattan, NY" in destination
        And I select Jan 10, 2023 as Check-in
        And I select Jan 23, 2023 as Check-out
        And I click apply
        And I click on search button
        And I click on 5 star from star-rating
        And I select Price from sort-by dropdown
        Then I verify all hotels in search results are star-rated as selected in above step
        Then I verify all hotels are listed in increasing order price
    @TC-29
    Scenario: Verify "List your Property" flow
        Given I am on hotels landing page
        When I click on List your property
        Then I verify “What would you like to list” is displayed
        And I verify “Lodging“ and “Private residence“ options are displayed
        When I click on “Private residence“
        Then I verify ”Step 1 of 3” is displayed
        And I verify “See how much you could earn!” is displayed
        When I enter “4“ in bedroom
        And I enter “2.5“ in bathroom
        And I click on next button
        Then I verify ”Step 2 of 3” is displayed
        And I verify “Where is your property located” is displayed
        When I enter “121” in address
        And I select “1211 6th Avenue, New York, NY, USA” from auto-suggestion
        Then I verify graph is displayed
        And I verify pin in graph is displayed
        And I verify “Move pin to adjust location“ is displayed below graph
