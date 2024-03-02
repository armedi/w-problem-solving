import { test } from "node:test";
import assert from "node:assert";

import { miniMaxSum } from "./1.miniMaxSum.js";

test("Finding the minimum and maximum values that can be calculated by summing exactly four of the five integers", () => {
  assert.deepEqual(miniMaxSum([1, 3, 5, 7, 9]), [16, 24]);
});
