/**
 * String utility functions.
 */

function capitalize(str) {
  if (typeof str !== "string") return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function reverse(str) {
  if (typeof str !== "string") return "";
  return str.split("").reverse().join("");
}

function isPalindrome(str) {
  if (typeof str !== "string") return false;
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  return cleaned === cleaned.split("").reverse().join("");
}

function truncate(str, maxLength) {
  if (typeof str !== "string") return "";
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength) + "...";
}

module.exports = { capitalize, reverse, isPalindrome, truncate };
