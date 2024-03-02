import { test } from "node:test";
import assert from "node:assert";

import { timeConversion } from "./3.timeConversion.js";

test("Convert time in 12-hour format to 24-hour format", () => {
  assert.equal(timeConversion('12:01:00PM'), '12:01:00');
  assert.equal(timeConversion('12:01:00AM'), '00:01:00');
  assert.equal(timeConversion('02:01:00PM'), '14:01:00');
  assert.equal(timeConversion('08:01:00AM'), '08:01:00');
});
