import { strict as assert } from 'node:assert';
import { test } from 'node:test';
import sum from './index.js';

// Skenario 1: Menguji dengan input angka positif
test('sum() with positive numbers should return their sum', () => {
  assert.equal(sum(3, 7), 10);  // 3 + 7 = 10
  assert.equal(sum(0, 0), 0);   // 0 + 0 = 0
  assert.equal(sum(5, 5), 10);  // 5 + 5 = 10
});

// Skenario 2: Menguji dengan input bukan angka (string)
test('sum() with non-number inputs should return 0', () => {
  assert.equal(sum('a', 5), 0);       // 'a' is not a number
  assert.equal(sum(5, 'b'), 0);       // 'b' is not a number
  assert.equal(sum('hello', 'world'), 0); // both inputs are not numbers
});

// Skenario 3: Menguji dengan input negatif
test('sum() with negative numbers should return 0', () => {
  assert.equal(sum(-1, 5), 0);    // Negative input
  assert.equal(sum(5, -1), 0);    // Negative input
  assert.equal(sum(-5, -5), 0);   // Both inputs are negative
});

// Skenario 4: Menguji dengan input angka positif dan nol
test('sum() with a positive number and zero should return the positive number', () => {
  assert.equal(sum(0, 5), 5);  // 0 + 5 = 5
  assert.equal(sum(7, 0), 7);  // 7 + 0 = 7
});

// Skenario 5: Menguji dengan input nol dan nol
test('sum() with two zeros should return zero', () => {
  assert.equal(sum(0, 0), 0);  // 0 + 0 = 0
});
