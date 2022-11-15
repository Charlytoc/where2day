const chai = require('chai');
const Container = require('../container');

chai.config.truncateThreshold = 0;
const { expect } = chai;

/**
 * This test class includes 10 tests.
 * All have the same score.
 * You are not allowed to modify this file,
 * but feel free to read the source code
 * to better understand the details of all test cases.
 */
describe('Container tests', () => {
  let container;

  beforeEach(() => {
    container = new Container();
  });

  /**
   * Add 1, 2, 5, 7, 9 -> [1, 2, 5, 7, 9]
   * Median of [1, 2, 5, 7, 9] is 5
   * Add 3, 4 -> [1, 2, 3, 4, 5, 7, 9]
   * Median of [1, 2, 3, 4, 5, 7, 9] is 4
   */
  it('Test 01: Simple get odd length', function () {
    this.timeout(100);
    container.add(1);
    container.add(2);
    container.add(5);
    container.add(7);
    container.add(9);
    expect(container.getMedian()).to.be.equal(5);
    container.add(3);
    container.add(4);
    expect(container.getMedian()).to.be.equal(4);
  });

  /**
   * Add 30, 10 -> [10, 30]
   * Median of [10, 30] is 10
   * Add 12, 35 -> [10, 12, 30, 35]
   * Median of [10, 12, 30, 35] is 12
   * Double check of median
   * Add 11, 40, 100, 90 -> [10, 11, 12, 30, 35, 40, 90, 100]
   * Median of [10, 11, 12, 30, 35, 40, 90, 100] is 30
   */
  it('Test 02: Simple get even length', function () {
    this.timeout(100);
    container.add(30);
    container.add(10);
    expect(container.getMedian()).to.be.equal(10);
    container.add(12);
    container.add(35);
    expect(container.getMedian()).to.be.equal(12);
    expect(container.getMedian()).to.be.equal(12);
    container.add(11);
    container.add(40);
    container.add(100);
    container.add(90);
    expect(container.getMedian()).to.be.equal(30);
  });

  /**
   * Median of [] is null
   * Double check of median
   * Add 1 -> [1]
   * Median of [1] is 1
   * Add 3, 4, 2, 10, 30 -> [1, 2, 3, 4, 10, 30]
   * Median of [1, 2, 3, 4, 10, 30] is 3
   * Add 52, 53, 54, 55 -> [1, 2, 3, 4, 10, 30, 52, 53, 54, 55]
   * Median of [1, 2, 3, 4, 10, 30, 52, 53, 54, 55] is 10
   * Add 6, 7, 8, 9 -> [1, 2, 3, 4, 6, 7, 8, 9, 10, 30, 52, 53, 54, 55]
   * Median of [1, 2, 3, 4, 6, 7, 8, 9, 10, 30, 52, 53, 54, 55] is 8
   * Add 11 -> [1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 30, 52, 53, 54, 55]
   * Median of [1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 30, 52, 53, 54, 55] is 9
   */
  it('Test 03: Simple mixed add and get', function () {
    this.timeout(100);
    expect(() => container.getMedian()).to.throw(Error);
    expect(() => container.getMedian()).to.throw(Error);
    container.add(1);
    expect(container.getMedian()).to.be.equal(1);
    container.add(3);
    container.add(4);
    container.add(2);
    container.add(10);
    container.add(30);
    expect(container.getMedian()).to.be.equal(3);
    container.add(52);
    container.add(53);
    container.add(54);
    container.add(55);
    expect(container.getMedian()).to.be.equal(10);
    container.add(6);
    container.add(7);
    container.add(8);
    container.add(9);
    expect(container.getMedian()).to.be.equal(8);
    container.add(11);
    expect(container.getMedian()).to.be.equal(9);
  });

  /**
   * Add 1, 2, 3, 4, 5, 5, 5 -> [1, 2, 3, 4, 5, 5, 5]
   * Median of [1, 2, 3, 4, 5, 5, 5] is 4
   * Add 2 -> [1, 2, 2, 3, 4, 5, 5, 5]
   * Median of [1, 2, 2, 3, 4, 5, 5, 5] is 3
   * Add 3 -> [1, 2, 2, 3, 3, 4, 5, 5, 5]
   * Median of [1, 2, 2, 3, 3, 4, 5, 5, 5] is 3
   * Add 5, 5 -> [1, 2, 2, 3, 3, 4, 5, 5, 5, 5, 5]
   * Median of [1, 2, 2, 3, 3, 4, 5, 5, 5, 5, 5] is 4
   */
  it('Test 04: Repetitions 1', function () {
    this.timeout(100);
    container.add(1);
    container.add(2);
    container.add(3);
    container.add(4);
    container.add(5);
    container.add(5);
    container.add(5);
    expect(container.getMedian()).to.be.equal(4);
    container.add(2);
    expect(container.getMedian()).to.be.equal(3);
    container.add(3);
    expect(container.getMedian()).to.be.equal(3);
    container.add(5);
    container.add(5);
    expect(container.getMedian()).to.be.equal(4);
  });

  /**
   * Add 20 items of 42 -> [42] * 20
   * Median of [42] * 20 is 42
   * Add 0, 1, 2, ..., 29 -> [0, 1, ..., 29] + [42] * 20
   * Median of [0, 1, ..., 29] + [42] * 20 is 24
   * Add 50 items of 130 -> [0, 1, ..., 29] + [42] * 20 + [130] * 50
   * Median of [0, 1, ..., 29] + [42] * 20 + [130] * 50 is 42
   * Add 50 items of 170 -> [0, 1, ..., 29] + [42] * 20 +
   *                        [130] * 50 + [170] * 50
   * Median of [0, 1, ..., 29] + [42] * 20 + [130] * 50 + [170] * 50 is 130
   */
  it('Test 05: Repetitions 2', function () {
    this.timeout(100);
    for (let i = 0; i < 20; ++i) {
      container.add(42);
    }
    expect(container.getMedian()).to.be.equal(42);
    for (let i = 0; i < 30; ++i) {
      container.add(i);
    }
    expect(container.getMedian()).to.be.equal(24);
    for (let i = 0; i < 50; ++i) {
      container.add(130);
    }
    expect(container.getMedian()).to.be.equal(42);
    for (let i = 0; i < 50; ++i) {
      container.add(170);
    }
    expect(container.getMedian()).to.be.equal(130);
  });

  /**
   * Add 10, 20, 30 -> [10, 20, 30]
   * Delete 20 -> [10, 30]
   * Median of [10, 30] is 10
   * Add 5 -> [5, 10, 30]
   * Median of [5, 10, 30] is 10
   * Delete 30 -> [5, 10]
   * Median of [5, 10] is 5
   */
  it('Test 06: Simple deletes 1', function () {
    this.timeout(100);
    container.add(10);
    container.add(20);
    container.add(30);
    expect(container.delete(20)).to.be.true;
    expect(container.getMedian()).to.be.equal(10);
    container.add(5);
    expect(container.getMedian()).to.be.equal(10);
    expect(container.delete(30)).to.be.true;
    expect(container.getMedian()).to.be.equal(5);
  });

  /**
   * Median of [] is null
   * Delete 5 -> []
   * Median of [] is null
   * Delete 5 -> []
   * Add 5 -> [5]
   * Median of [5] is 5
   * Delete 5 -> []
   * Median of [] is null
   * Delete 5 -> []
   * Add 5, 4, 3 -> [3, 4, 5]
   * Median of [3, 4, 5] is 4
   * Delete 5 -> [3, 4]
   * Median of [3, 4] is 3
   * Delete 5 -> [3, 4]
   * Delete 3 -> [4]
   * Median of [4] is 4
   */
  it('Test 07: Simple deletes 2', function () {
    this.timeout(100);
    expect(() => container.getMedian()).to.throw(Error);
    expect(container.delete(5)).to.be.false;
    expect(() => container.getMedian()).to.throw(Error);
    expect(container.delete(5)).to.be.false;
    container.add(5);
    expect(container.getMedian()).to.be.equal(5);
    expect(container.delete(5)).to.be.true;
    expect(() => container.getMedian()).to.throw(Error);
    expect(container.delete(5)).to.be.false;
    container.add(5);
    container.add(4);
    container.add(3);
    expect(container.getMedian()).to.be.equal(4);
    expect(container.delete(5)).to.be.true;
    expect(container.getMedian()).to.be.equal(3);
    expect(container.delete(5)).to.be.false;
    expect(container.delete(3)).to.be.true;
    expect(container.getMedian()).to.be.equal(4);
  });

  /**
   * Add 3, 30, 30, 15 -> [3, 15, 30, 30]
   * Median of [3, 15, 30, 30] is 15
   * Delete 30 -> [3, 15, 30]
   * Median of [3, 15, 30] is 15
   * Delete 30 -> [3, 15]
   * Median of [3, 15] is 3
   * Add 30, 30, 30 -> [3, 15, 30, 30, 30]
   * Median of [3, 15, 30, 30, 30] is 30
   * Add 15 -> [3, 15, 15, 30, 30, 30]
   * Median of [3, 15, 15, 30, 30, 30] is 15
   * Delete 20 -> [3, 15, 15, 30, 30, 30]
   * Delete 3 -> [15, 15, 30, 30, 30]
   * Median of [15, 15, 30, 30, 30] is 30
   */
  it('Test 08: Repetitions and deletes', function () {
    this.timeout(100);
    container.add(3);
    container.add(30);
    container.add(30);
    container.add(15);
    expect(container.getMedian()).to.be.equal(15);
    expect(container.delete(30)).to.be.true;
    expect(container.getMedian()).to.be.equal(15);
    expect(container.delete(30)).to.be.true;
    expect(container.getMedian()).to.be.equal(3);
    container.add(30);
    container.add(30);
    container.add(30);
    expect(container.getMedian()).to.be.equal(30);
    container.add(15);
    expect(container.getMedian()).to.be.equal(15);
    expect(container.delete(20)).to.be.false;
    expect(container.delete(3)).to.be.true;
    expect(container.getMedian()).to.be.equal(30);
  });

  /**
   * Add 5, 3, 5, 7, 8, 9 -> [3, 5, 5, 7, 8, 9]
   * Median of [3, 5, 5, 7, 8, 9] is 5
   * Delete 5, 8 -> [3, 5, 7, 9]
   * Median of [3, 5, 7, 9] is 5
   * Delete 5, 5 -> [3, 7, 9]
   * Median of [3, 7, 9] is 7
   * Add 5 -> [3, 5, 7, 9]
   * Median of [3, 5, 7, 9] is 5
   * Delete 5, 5, 7, 3 -> [9]
   * Median of [9] is 9
   * Delete 9 -> []
   * Median of [] is null
   * Delete 9 -> []
   * Median of [] is null
   */
  it('Test 09: mixed operations 1', function () {
    this.timeout(100);
    container.add(5);
    container.add(3);
    container.add(5);
    container.add(7);
    container.add(8);
    container.add(9);
    expect(container.getMedian()).to.be.equal(5);
    expect(container.delete(5)).to.be.true;
    expect(container.delete(8)).to.be.true;
    expect(container.getMedian()).to.be.equal(5);
    expect(container.delete(5)).to.be.true;
    expect(container.delete(5)).to.be.false;
    expect(container.getMedian()).to.be.equal(7);
    container.add(5);
    expect(container.getMedian()).to.be.equal(5);
    expect(container.delete(5)).to.be.true;
    expect(container.delete(5)).to.be.false;
    expect(container.delete(7)).to.be.true;
    expect(container.delete(3)).to.be.true;
    expect(container.getMedian()).to.be.equal(9);
    expect(container.delete(9)).to.be.true;
    expect(() => container.getMedian()).to.throw(Error);
    expect(container.delete(9)).to.be.false;
    expect(() => container.getMedian()).to.throw(Error);
  });

  /**
   * Add 0, 0, 1, 1, 2, 2, ..., 99, 99 -> [0, 0, 1, 1, ..., 99, 99]
   * Median of [0, 0, 1, 1, ..., 99, 99] is 49
   * Delete 3 items of i, median is 50 + i / 2, i in [0, 1, ..., 49]
   * Container's integers are [50, 50, 51, 51, ..., 99, 99] now
   * Delete 0, 1, 2, ..., 99 -> [50, 51, ..., 99]
   * Median of [50, 51, ..., 99] is 74
   */
  it('Test 10: Mixed operations 2', function () {
    this.timeout(100);
    for (let i = 0; i < 100; ++i) {
      container.add(i);
      container.add(i);
    }
    expect(container.getMedian()).to.be.equal(49);
    const answers = [
      50, 50, 51, 51, 52, 52, 53, 53, 54, 54, 55, 55, 56,
      56, 57, 57, 58, 58, 59, 59, 60, 60, 61, 61, 62, 62,
      63, 63, 64, 64, 65, 65, 66, 66, 67, 67, 68, 68, 69,
      69, 70, 70, 71, 71, 72, 72, 73, 73, 74, 74
    ];
    for (let i = 0; i < 50; ++i) {
      expect(container.delete(i)).to.be.true;
      expect(container.delete(i)).to.be.true;
      expect(container.delete(i)).to.be.false;
      expect(container.getMedian()).to.be.equal(answers[i]);
    }

    for (let i = 0; i < 100; ++i) {
      expect(container.delete(i)).to.be.equal(i >= 50);
    }
    expect(container.getMedian()).to.be.equal(74);
  });
});
