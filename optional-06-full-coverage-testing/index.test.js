import { test } from 'node:test';
import assert from 'node:assert';
import sum from './index.js';

test('sum of two positive numbers', () => {
  assert.strictEqual(sum(2, 4), 6, 'Expected to equal 6');
});

test('sum of two negative numbers', () => {
  assert.strictEqual(sum(-2, -4), 0, 'Expected to equal 0');
});

test('sum of a positive and a negative number', () => {
  assert.strictEqual(sum(-2, 4), 0, 'Expected to equal 0');
  assert.strictEqual(sum(2, -4), 0, 'Expected to equal 0');
});

test('sum of zero and a positive number', () => {
  assert.strictEqual(sum(0, 4), 4, 'Expected to equal 4');
  assert.strictEqual(sum(4, 0), 4, 'Expected to equal 4');
});

test('sum of zero and a negative number', () => {
  assert.strictEqual(sum(-2, 0), 0, 'Expected to equal 0');
  assert.strictEqual(sum(0, -2), 0, 'Expected to equal 0');
});

test('sum of zero and zero', () => {
  assert.strictEqual(sum(0, 0), 0, 'Expected to equal 0');
});

test('sum with a number and a non-number (string)', () => {
  assert.strictEqual(sum(2, '4'), 0, 'Expected to equal 0');
  assert.strictEqual(sum('2', 4), 0, 'Expected to equal 0');
});

test('sum with non-number arguments', () => {
  assert.strictEqual(sum('2', '4'), 0, 'Expected to equal 0');
  assert.strictEqual(sum(true, false), 0, 'Expected to equal 0');
  assert.strictEqual(sum(null, undefined), 0, 'Expected to equal 0');
});
