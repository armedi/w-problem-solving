import { test } from "node:test";
import assert from "node:assert";

import { plusMinus } from "./2.plusMinus.js";

test("Calculate the ratios of array elements that are positive, negative, and zero", () => {
  assert.deepEqual(plusMinus([-4, 3, -9, 0, 4, 1]), [3 / 6, 2 / 6, 1 / 6]);
});
