import { RelativeDateHelper } from './RelativeDateHelper';

test('RelativeDateHelper.tz', () => {
  const x = new Date();
  expect(x.getTimezoneOffset()).toEqual(-180);
})

test('RelativeDateHelper.date', () => {
  //       2020-05
  // пн вт ср чт пт сб вс
  //              1  2  3
  //  4  5  6  7  8  9 10
  // 11 12 13 14 15 16 17
  // 18 19 20 21 22 23 24
  // 25 26 27 28 29 30 31
  const date = new Date('2020-05-15 12:34:56.248');

  expect(RelativeDateHelper.date(undefined, { date })).toStrictEqual(new Date('2020-05-15 12:34:56'));
  expect(RelativeDateHelper.date(undefined, { date, withMs: true })).toStrictEqual(new Date('2020-05-15 12:34:56.248'));
  expect(RelativeDateHelper.date({}, { date })).toStrictEqual(new Date('2020-05-15 12:34:56'));

  expect(RelativeDateHelper.date({ y: '1900' }, { date })).toStrictEqual(new Date('1900-05-15 12:34:56'));
  expect(RelativeDateHelper.date({ y: '+5' }, { date })).toStrictEqual(new Date('2025-05-15 12:34:56'));
  expect(RelativeDateHelper.date({ y: '-5' }, { date })).toStrictEqual(new Date('2015-05-15 12:34:56'));

  expect(RelativeDateHelper.date({ m: '1' }, { date })).toStrictEqual(new Date('2020-01-15 12:34:56'));
  expect(RelativeDateHelper.date({ m: '+5' }, { date })).toStrictEqual(new Date('2020-10-15 12:34:56'));
  expect(RelativeDateHelper.date({ m: '-5' }, { date })).toStrictEqual(new Date('2019-12-15 12:34:56'));
  expect(RelativeDateHelper.date({ m: '+12' }, { date })).toStrictEqual(new Date('2021-05-15 12:34:56'));
  expect(RelativeDateHelper.date({ m: '-12' }, { date })).toStrictEqual(new Date('2019-05-15 12:34:56'));
  expect(RelativeDateHelper.date({ m: '+17' }, { date })).toStrictEqual(new Date('2021-10-15 12:34:56'));
  expect(RelativeDateHelper.date({ m: '-17' }, { date })).toStrictEqual(new Date('2018-12-15 12:34:56'));

  expect(RelativeDateHelper.date({ d: '1' }, { date })).toStrictEqual(new Date('2020-05-01 12:34:56'));
  expect(RelativeDateHelper.date({ d: '+5' }, { date })).toStrictEqual(new Date('2020-05-20 12:34:56'));
  expect(RelativeDateHelper.date({ d: '-5' }, { date })).toStrictEqual(new Date('2020-05-10 12:34:56'));
  expect(RelativeDateHelper.date({ d: '+31' }, { date })).toStrictEqual(new Date('2020-06-15 12:34:56'));
  expect(RelativeDateHelper.date({ d: '-30' }, { date })).toStrictEqual(new Date('2020-04-15 12:34:56'));

  expect(RelativeDateHelper.date({ h: '3' }, { date })).toStrictEqual(new Date('2020-05-15 03:34:56'));
  expect(RelativeDateHelper.date({ h: '+5' }, { date })).toStrictEqual(new Date('2020-05-15 17:34:56'));
  expect(RelativeDateHelper.date({ h: '-5' }, { date })).toStrictEqual(new Date('2020-05-15 07:34:56'));
  expect(RelativeDateHelper.date({ h: '+25' }, { date })).toStrictEqual(new Date('2020-05-16 13:34:56'));
  expect(RelativeDateHelper.date({ h: '-25' }, { date })).toStrictEqual(new Date('2020-05-14 11:34:56'));

  expect(RelativeDateHelper.date({ i: '1' }, { date })).toStrictEqual(new Date('2020-05-15 12:01:56'));
  expect(RelativeDateHelper.date({ i: '+5' }, { date })).toStrictEqual(new Date('2020-05-15 12:39:56'));
  expect(RelativeDateHelper.date({ i: '-5' }, { date })).toStrictEqual(new Date('2020-05-15 12:29:56'));
  expect(RelativeDateHelper.date({ i: '+65' }, { date })).toStrictEqual(new Date('2020-05-15 13:39:56'));
  expect(RelativeDateHelper.date({ i: '-65' }, { date })).toStrictEqual(new Date('2020-05-15 11:29:56'));

  expect(RelativeDateHelper.date({ s: '1' }, { date })).toStrictEqual(new Date('2020-05-15 12:34:01'));
  expect(RelativeDateHelper.date({ s: '+5' }, { date })).toStrictEqual(new Date('2020-05-15 12:35:01'));
  expect(RelativeDateHelper.date({ s: '-5' }, { date })).toStrictEqual(new Date('2020-05-15 12:34:51'));
  expect(RelativeDateHelper.date({ s: '+65' }, { date })).toStrictEqual(new Date('2020-05-15 12:36:01'));
  expect(RelativeDateHelper.date({ s: '-65' }, { date })).toStrictEqual(new Date('2020-05-15 12:33:51'));

  expect(RelativeDateHelper.date({ w: '0' }, { date })).toStrictEqual(new Date('2020-05-17 12:34:56'));
  expect(RelativeDateHelper.date({ w: '1' }, { date })).toStrictEqual(new Date('2020-05-11 12:34:56'));
  expect(RelativeDateHelper.date({ w: '2' }, { date })).toStrictEqual(new Date('2020-05-12 12:34:56'));
  expect(RelativeDateHelper.date({ w: '3' }, { date })).toStrictEqual(new Date('2020-05-13 12:34:56'));
  expect(RelativeDateHelper.date({ w: '4' }, { date })).toStrictEqual(new Date('2020-05-14 12:34:56'));
  expect(RelativeDateHelper.date({ w: '5' }, { date })).toStrictEqual(new Date('2020-05-15 12:34:56'));
  expect(RelativeDateHelper.date({ w: '6' }, { date })).toStrictEqual(new Date('2020-05-16 12:34:56'));
  expect(RelativeDateHelper.date({ w: '7' }, { date })).toStrictEqual(new Date('2020-05-17 12:34:56'));
  expect(RelativeDateHelper.date({ w: '8' }, { date })).toStrictEqual(new Date('2020-05-11 12:34:56'));
  expect(RelativeDateHelper.date({ w: '14' }, { date })).toStrictEqual(new Date('2020-05-17 12:34:56'));

  expect(RelativeDateHelper.date({ w: '+5' }, { date })).toStrictEqual(new Date('2020-05-20 12:34:56'));
  expect(RelativeDateHelper.date({ w: '-5' }, { date })).toStrictEqual(new Date('2020-05-10 12:34:56'));
  expect(RelativeDateHelper.date({ w: '+31' }, { date })).toStrictEqual(new Date('2020-06-15 12:34:56'));
  expect(RelativeDateHelper.date({ w: '-30' }, { date })).toStrictEqual(new Date('2020-04-15 12:34:56'));

  expect(RelativeDateHelper.date({ d: '+7', w: '1' }, { date })).toStrictEqual(new Date('2020-05-18 12:34:56'));
  expect(RelativeDateHelper.date({ d: '+14', w: '1' }, { date })).toStrictEqual(new Date('2020-05-25 12:34:56'));
  expect(RelativeDateHelper.date({ d: '-7', w: '1' }, { date })).toStrictEqual(new Date('2020-05-04 12:34:56'));
});

test('RelativeDateHelper.description', () => {
  expect(RelativeDateHelper.description()).toBe('Текущее время;');
  expect(RelativeDateHelper.description({})).toBe('Текущее время;');
  expect(RelativeDateHelper.description({ w: '0' })).toBe('День недели: Вс;');
  expect(RelativeDateHelper.description({ w: '1' })).toBe('День недели: Пн;');
  expect(RelativeDateHelper.description({ w: '2' })).toBe('День недели: Вт;');
  expect(RelativeDateHelper.description({ w: '3' })).toBe('День недели: Ср;');
  expect(RelativeDateHelper.description({ w: '4' })).toBe('День недели: Чт;');
  expect(RelativeDateHelper.description({ w: '5' })).toBe('День недели: Пт;');
  expect(RelativeDateHelper.description({ w: '6' })).toBe('День недели: Сб;');
  expect(RelativeDateHelper.description({ w: '7' })).toBe('День недели: Вс;');
  expect(RelativeDateHelper.description({ w: '8' })).toBe('День недели: Пн;');
  expect(RelativeDateHelper.description({ w: '14' })).toBe('День недели: Вс;');
  expect(RelativeDateHelper.description({ w: '+1' })).toBe('День недели: +1;');
  expect(RelativeDateHelper.description({ d: '+1', w: '+1' })).toBe('День: +1; День недели: +1;');
  expect(RelativeDateHelper.description({ y: '+1', m: '+2', d: '+3', h: '+4', i: '+5', s: '+6', w: '1' })).toBe('Год: +1; Месяц: +2; День: +3; Час: +4; Минута: +5; Секунда: +6; День недели: Пн;');
  expect(RelativeDateHelper.description({ y: '-1', m: '-2', d: '-3', h: '-4', i: '-5', s: '-6', w: '1' })).toBe('Год: -1; Месяц: -2; День: -3; Час: -4; Минута: -5; Секунда: -6; День недели: Пн;');
});
