/* global cy, Given, When, Then */

import {
  navigateToSearchPage,
  searchFlight,
  verifySearchResultsDisplayed
} from "../actions/searchFlightActions";

import { selectFlight } from "../actions/selectFlightActions";

Given("I am on the search page", () => {
  navigateToSearchPage();
});

When("I search for a flight from {string} to {string}", (from, to) => {
  searchFlight(from, to);
});

Then("I see search results", () => {
  verifySearchResultsDisplayed();
});

Given("I searched for a flight from {string} to {string}", (from, to) => {
  navigateToSearchPage();
  searchFlight(from, to);
  verifySearchResultsDisplayed();
});

When("I select the first flight in the results", () => {
  selectFlight();
});

Then("I see purchase flight page", () => {});
