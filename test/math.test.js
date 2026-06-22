const { describe, it } = require("node:test");
const assert = require("node:assert/strict");
const { clamp, sum, average, factorial } = require("../src/math");

describe("clamp", () => {
  it("returns the value when within range", () => {
    assert.equal(clamp(5, 0, 10), 5);
  });

  it("returns min when value is below range", () => {
    assert.equal(clamp(-5, 0, 10), 0);
  });

  it("returns max when value is above range", () => {
    assert.equal(clamp(15, 0, 10), 10);
  });

  it("handles equal min and max", () => {
    assert.equal(clamp(5, 3, 3), 3);
  });

  it("handles value equal to min", () => {
    assert.equal(clamp(0, 0, 10), 0);
  });

  it("handles value equal to max", () => {
    assert.equal(clamp(10, 0, 10), 10);
  });
});

describe("sum", () => {
  it("sums an array of numbers", () => {
    assert.equal(sum([1, 2, 3, 4, 5]), 15);
  });

  it("returns 0 for empty array", () => {
    assert.equal(sum([]), 0);
  });

  it("returns 0 for non-array input", () => {
    assert.equal(sum("hello"), 0);
    assert.equal(sum(null), 0);
  });

  it("ignores non-number values in array", () => {
    assert.equal(sum([1, "two", 3, null, 5]), 9);
  });

  it("handles negative numbers", () => {
    assert.equal(sum([-1, -2, -3]), -6);
  });

  it("handles single element array", () => {
    assert.equal(sum([42]), 42);
  });
});

describe("average", () => {
  it("calculates the average of an array of numbers", () => {
    assert.equal(average([1, 2, 3, 4, 5]), 3);
  });

  it("returns 0 for empty array", () => {
    assert.equal(average([]), 0);
  });

  it("returns 0 for non-array input", () => {
    assert.equal(average("hello"), 0);
  });

  it("handles single element array", () => {
    assert.equal(average([10]), 10);
  });

  it("handles decimal results", () => {
    assert.equal(average([1, 2]), 1.5);
  });

  it("averages only numeric values in mixed arrays", () => {
    assert.equal(average([1, "two", 3]), 2);
  });

  it("returns 0 for array with no numeric values", () => {
    assert.equal(average(["a", "b", "c"]), 0);
  });
});

describe("factorial", () => {
  it("calculates factorial of positive integers", () => {
    assert.equal(factorial(5), 120);
    assert.equal(factorial(3), 6);
  });

  it("returns 1 for factorial of 0", () => {
    assert.equal(factorial(0), 1);
  });

  it("returns 1 for factorial of 1", () => {
    assert.equal(factorial(1), 1);
  });

  it("returns undefined for negative numbers", () => {
    assert.equal(factorial(-1), undefined);
  });

  it("returns undefined for non-integers", () => {
    assert.equal(factorial(1.5), undefined);
  });

  it("returns undefined for non-number input", () => {
    assert.equal(factorial("5"), undefined);
  });
});
