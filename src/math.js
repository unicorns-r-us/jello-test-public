/**
 * Math utility functions.
 */

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function sum(arr) {
  if (!Array.isArray(arr)) return 0;
  return arr.reduce((acc, val) => acc + (typeof val === "number" ? val : 0), 0);
}

function average(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return 0;
  return sum(arr) / arr.length;
}

function factorial(n) {
  if (typeof n !== "number" || n < 0 || !Number.isInteger(n)) return undefined;
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

module.exports = { clamp, sum, average, factorial };
