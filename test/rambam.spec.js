import {dailyRambam1,dailyRambam3} from '../src/rambam';
import {greg} from '@hebcal/core';
import fullCycle from '../src/rambam1cycle.json';

// eslint-disable-next-line require-jsdoc
function abs2iso(abs) {
  return greg.abs2greg(abs).toISOString().substring(0, 10);
}

test('rambam1-single', () => {
  const dt = new Date(2020, 6, 9);
  const reading = dailyRambam1(dt);
  expect(reading)
    .toEqual({name: 'Kings and Wars', perek: 12});
});

test('rambam1-single2', () => {
  expect(dailyRambam1(new Date(1986, 0, 1)))
    .toEqual({name: 'Red Heifer', perek: 8});
  expect(dailyRambam1(new Date(1987, 0, 1)))
    .toEqual({name: 'Testimony', perek: 16});
  expect(dailyRambam1(new Date(1987, 1, 1)))
    .toEqual({name: 'Kings and Wars', perek: 4});
  expect(dailyRambam1(new Date(1987, 1, 8)))
    .toEqual({name: 'Kings and Wars', perek: 11});
  expect(dailyRambam1(new Date(1987, 1, 9)))
    .toEqual({name: 'Kings and Wars', perek: 12});
  expect(dailyRambam1(new Date(1987, 1, 10)))
    .toEqual({name: 'Transmission of the Oral Law', perek: '1-21'});
  expect(dailyRambam1(new Date(1987, 5, 1)))
    .toEqual({name: 'Sabbath', perek: 4});
  expect(dailyRambam1(new Date(1988, 0, 1)))
    .toEqual({name: 'Vows', perek: 2});
  expect(dailyRambam1(new Date(1989, 0, 1)))
    .toEqual({name: 'Vessels', perek: 7});
  expect(dailyRambam1(new Date(1990, 0, 1)))
    .toEqual({name: 'Foreign Worship and Customs of the Nations', perek: 4});
  expect(dailyRambam1(new Date(1991, 0, 1)))
    .toEqual({name: 'Second Tithes and Fourth Year\'s Fruit', perek: 1});
});

test('rambam1-1984', () => {
  const start = greg.greg2abs(new Date(1984, 3, 29));
  const endAbs = greg.greg2abs(new Date(1984, 4, 16));
  const actual = {};
  for (let abs = start; abs <= endAbs; abs++) {
    const reading = dailyRambam1(abs);
    actual[abs2iso(abs)] = `${reading.name} ${reading.perek}`;
  }
  const expected = {
    '1984-04-29': 'Transmission of the Oral Law 1-21',
    '1984-04-30': 'Transmission of the Oral Law 22-33',
    '1984-05-01': 'Transmission of the Oral Law 34-45',
    '1984-05-02': 'Positive Mitzvot 1-83',
    '1984-05-03': 'Positive Mitzvot 84-166',
    '1984-05-04': 'Positive Mitzvot 167-248',
    '1984-05-05': 'Negative Mitzvot 1-122',
    '1984-05-06': 'Negative Mitzvot 123-245',
    '1984-05-07': 'Negative Mitzvot 246-365',
    '1984-05-08': 'Overview of Mishneh Torah Contents 1:1-4:8',
    '1984-05-09': 'Overview of Mishneh Torah Contents 5:1-9:9',
    '1984-05-10': 'Overview of Mishneh Torah Contents 10:1-14:10',
    '1984-05-11': 'Foundations of the Torah 1',
    '1984-05-12': 'Foundations of the Torah 2',
    '1984-05-13': 'Foundations of the Torah 3',
    '1984-05-14': 'Foundations of the Torah 4',
    '1984-05-15': 'Foundations of the Torah 5',
    '1984-05-16': 'Foundations of the Torah 6',
  };
  expect(actual).toEqual(expected);
});

test('rambam1-fullCycle', () => {
  const start = greg.greg2abs(new Date(2023, 3, 23));
  const endAbs = greg.greg2abs(new Date(2026, 1, 2));
  const actual = {};
  for (let abs = start; abs <= endAbs; abs++) {
    const reading = dailyRambam1(abs);
    actual[abs2iso(abs)] = `${reading.name} ${reading.perek}`;
  }
  expect(actual).toEqual(fullCycle);
});

test('rambam3-2024-septemper-4', () => {
  const date = new Date(2024, 8, 4);
  const reading = dailyRambam3(date);

  expect(reading.length).toBe(3);
  expect(reading)
    .toEqual([
      { "name": "Sacrificial Procedure", "perek": 10 },
      { "name": "Sacrificial Procedure", "perek": 11 },
      { "name": "Sacrificial Procedure", "perek": 12 }]);
});
test('rambam3-2023-april-22', () => {
  const date = new Date(2023, 3, 22);
  const reading = dailyRambam3(date);

  expect(reading.length).toBe(3);

  expect(reading)
    .toEqual([
      { "name": "Kings and Wars", "perek": 10 },
      { "name": "Kings and Wars", "perek": 11 },
      { "name": "Kings and Wars", "perek": 12 }]);
});

test('rambam3-2023-april-23', () => {
  const date = new Date(2023, 3, 23);
  const reading = dailyRambam3(date);

  expect(reading.length).toBe(3);

  expect(reading)
    .toEqual([
      { "name": "Transmission of the Oral Law", "perek": "1-21" },
      { "name": "Transmission of the Oral Law", "perek": "22-33" },
      { "name": "Transmission of the Oral Law", "perek": "34-45" }]);
});

test('rambam3-2023-april-24', () => {
  const date = new Date(2023, 3, 24);
  const reading = dailyRambam3(date);

  expect(reading.length).toBe(3);

  expect(reading)
    .toEqual([
      { "name": "Positive Mitzvot", "perek": "1-83" },
      { "name": "Positive Mitzvot", "perek": "84-166" },
      { "name": "Positive Mitzvot", "perek": "167-248" }]);
});

test('rambam3-2023-april-25', () => {
  const date = new Date(2023, 3, 25);
  const reading = dailyRambam3(date);

  expect(reading.length).toBe(3);

  expect(reading)
    .toEqual([
      { "name": "Negative Mitzvot", "perek": "1-122" },
      { "name": "Negative Mitzvot", "perek": "123-245" },
      { "name": "Negative Mitzvot", "perek": "246-365" }]);
});

test('rambam3-2023-april-26', () => {
  const date = new Date(2023, 3, 26);
  const reading = dailyRambam3(date);

  expect(reading.length).toBe(3);

  expect(reading)
    .toEqual([
      { "name": "Overview of Mishneh Torah Contents", "perek": "1:1-4:8" },
      { "name": "Overview of Mishneh Torah Contents", "perek": "5:1-9:9" },
      { "name": "Overview of Mishneh Torah Contents", "perek": "10:1-14:10" }]);
});
