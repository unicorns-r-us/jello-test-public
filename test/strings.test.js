const { describe, it } = require("node:test");
const assert = require("node:assert/strict");
const { capitalize, reverse, isPalindrome, truncate } = require("../src/strings");

describe("capitalize", () => {
  it("capitalizes the first letter of a string", () => {
    assert.equal(capitalize("hello"), "Hello");
  });

  it("handles single character strings", () => {
    assert.equal(capitalize("a"), "A");
  });

  it("does not change already capitalized strings", () => {
    assert.equal(capitalize("Hello"), "Hello");
  });

  it("returns empty string for non-string input", () => {
    assert.equal(capitalize(123), "");
    assert.equal(capitalize(null), "");
    assert.equal(capitalize(undefined), "");
  });

  it("handles empty string", () => {
    assert.equal(capitalize(""), "");
  });
});

describe("reverse", () => {
  it("reverses a string", () => {
    assert.equal(reverse("hello"), "olleh");
  });

  it("handles single character strings", () => {
    assert.equal(reverse("a"), "a");
  });

  it("handles empty string", () => {
    assert.equal(reverse(""), "");
  });

  it("returns empty string for non-string input", () => {
    assert.equal(reverse(123), "");
  });

  it("reverses strings with spaces", () => {
    assert.equal(reverse("hello world"), "dlrow olleh");
  });
});

describe("isPalindrome", () => {
  it("returns true for palindromes", () => {
    assert.equal(isPalindrome("racecar"), true);
    assert.equal(isPalindrome("level"), true);
  });

  it("is case insensitive", () => {
    assert.equal(isPalindrome("Racecar"), true);
  });

  it("ignores non-alphanumeric characters", () => {
    assert.equal(isPalindrome("A man, a plan, a canal: Panama"), true);
  });

  it("returns false for non-palindromes", () => {
    assert.equal(isPalindrome("hello"), false);
  });

  it("returns false for non-string input", () => {
    assert.equal(isPalindrome(123), false);
  });

  it("handles empty string as palindrome", () => {
    assert.equal(isPalindrome(""), true);
  });
});

describe("truncate", () => {
  it("truncates strings longer than maxLength", () => {
    assert.equal(truncate("hello world", 5), "hello...");
  });

  it("does not truncate strings shorter than maxLength", () => {
    assert.equal(truncate("hello", 10), "hello");
  });

  it("does not truncate strings equal to maxLength", () => {
    assert.equal(truncate("hello", 5), "hello");
  });

  it("returns empty string for non-string input", () => {
    assert.equal(truncate(123, 5), "");
  });
});
