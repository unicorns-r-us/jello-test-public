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
  const numbers = arr.filter((val) => typeof val === "number");
  if (numbers.length === 0) return 0;
  return sum(numbers) / numbers.length;
}

function factorial(n) {
  if (typeof n !== "number" || n < 0 || !Number.isInteger(n)) return undefined;
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

module.exports = { clamp, sum, average, factorial };
