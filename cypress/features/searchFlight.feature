Feature: Search and select Flights

@search
Scenario: Search Flight
    Given I am on the search page
    When I search for a flight from "Paris" to "London"
    Then I see search results

@select
Scenario: Select Flight
    Given I searched for a flight from "Paris" to "London"
    When I select the first flight in the results
    Then I see purchase flight page