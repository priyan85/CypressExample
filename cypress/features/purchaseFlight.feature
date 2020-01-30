Feature: Purchase flights

@purchase
Scenario: Purchase Flight
    Given I searched for a flight from "Paris" to "London"
    When I purchase the first flight
    Then The purchase is successful