import { test } from 'node:test';
import assert from 'node:assert';
import { sum } from './index.js';

test('sum of two positive numbers', () => {
  assert.strictEqual(sum(2, 4), 6, 'Expected to equal 6');
});

test('sum of two negative numbers', () => {
  assert.strictEqual(sum(-2, -4), -6, 'Expected to equal -6');
});

test('sum of two positive and negative numbers', () => {
  assert.strictEqual(sum(-2, 4), 2, 'Expected to equal 2');
  assert.strictEqual(sum(2, -4), -2, 'Expected to equal -2');
});

test('sum of zero and a positive number', () => {
  assert.strictEqual(sum(0, 4), 4, 'Expected to equal 4');
  assert.strictEqual(sum(4, 0), 4, 'Expected to equal 4');
});

test('sum of a negative number and zero', () => {
  assert.strictEqual(sum(-2, 0), -2, 'Expected to equal -2');
  assert.strictEqual(sum(0, -2), -2, 'Expected to equal -2');
});

test('sum of zero and zero', () => {
  assert.strictEqual(sum(0, 0), 0, 'Expected to equal 0');
});

test('sum of number and string number', () => {
  assert.strictEqual(sum(2, '4'), '24', 'Expected to equal "24"');
  assert.strictEqual(sum('2', 4), '24', 'Expected to equal "24"');
});

test('sum with string number', () => {
  assert.strictEqual(sum('2', '4'), '24', 'Expected to equal "24"');
});
