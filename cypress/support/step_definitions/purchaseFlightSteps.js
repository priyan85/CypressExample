/* global cy, Given, When, Then */

import { selectFlight } from "../actions/selectFlightActions";
import {
  purchaseFlight,
  verifyPurchase
} from "../actions/purchaseFlightActions";

When("I purchase the first flight", () => {
  selectFlight();
  purchaseFlight();
});

Then("The purchase is successful", () => {
  verifyPurchase();
});
