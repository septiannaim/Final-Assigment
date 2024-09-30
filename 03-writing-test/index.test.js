import { test } from 'node:test';
import assert from 'node:assert';
import { sum } from './index.js';

// Menulis pengujian untuk fungsi `sum`
test('sum() should return the correct result', () => {
  // Test case 1: 1 + 2 = 3
  assert.strictEqual(sum(1, 2), 3, 'sum(1, 2) should return 3');

  // Test case 2: 5 + 10 = 15
  assert.strictEqual(sum(5, 10), 15, 'sum(5, 10) should return 15');

  // Test case 3: -1 + -1 = -2
  assert.strictEqual(sum(-1, -1), -2, 'sum(-1, -1) should return -2');

  // Test case 4: 0 + 0 = 0
  assert.strictEqual(sum(0, 0), 0, 'sum(0, 0) should return 0');
});
