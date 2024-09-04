import '../src/register';
import {DailyLearning, HDate} from '@hebcal/core';

test('lookup', () => {
  const hd = new HDate(17, 'Sivan', 5783);
  const ev = DailyLearning.lookup('psalms', hd);
  expect(typeof ev).toBe('object');
  expect(ev.getDesc()).toBe('Psalms 83-87');
});

test('dafWeekly', () => {
  const hd = new HDate(17, 'Sivan', 5783);
  const ev = DailyLearning.lookup('dafWeekly', hd);
  expect(typeof ev).toBe('object');
  expect(ev.getDesc()).toBe('Ketubot 39');
  expect(ev.getCategories()).toEqual(['dafWeekly']);
});

test('dafWeeklySunday', () => {
  const ev1 = DailyLearning.lookup('dafWeeklySunday', new HDate(17, 'Sivan', 5783));
  expect(ev1).toBeNull();
  const ev2 = DailyLearning.lookup('dafWeeklySunday', new HDate(2, 'Elul', 5783));
  expect(ev2).toBeNull();
  const ev3 = DailyLearning.lookup('dafWeeklySunday', new HDate(3, 'Elul', 5783));
  expect(ev3.getDesc()).toBe('Ketubot 50');
  expect(ev3.getCategories()).toEqual(['dafWeekly']);
});

test('tanakhYomi', () => {
  const hd = new HDate(17, 'Sivan', 5783);
  const ev = DailyLearning.lookup('tanakhYomi', hd);
  expect(typeof ev).toBe('object');
  expect(ev.getDesc()).toBe('Minor Prophets Seder 10');
  expect(ev.getCategories()).toEqual(['tanakhYomi']);

  const ev2 = DailyLearning.lookup('tanakhYomi', new HDate(2, 'Elul', 5783));
  expect(ev2).toBeNull();
});

test('rambamYomi', () => {
  const hd = new HDate(1, 'Elul', 5784);
  const ev = DailyLearning.lookup('rambam1', hd);
  expect(ev.getDesc()).toBe('Daily Offerings and Additional Offerings 8');

  const ev2 = DailyLearning.lookup('rambam3', hd);
  expect(ev2.render('he')).toBe("הלכות מעשה הקרבנות פרק י׳, הלכות מעשה הקרבנות פרק י״א, הלכות מעשה הקרבנות פרק י״ב");
});
