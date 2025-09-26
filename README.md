# @root.andriell/relative-date

A simple and powerful library for calculating relative dates in JavaScript and TypeScript.

This package is designed for calculating dates relative to each other.

It's written in TypeScript and has no dependencies. It's very lightweight and can run on both the frontend and backend.

The main method for working with dates is called **RelativeDateHelper.date()**. Its first argument is an object describing the offset, and the second argument is various options.

**First Argument (RelativeDate)**: An object describing the date offset. It has the following parameters (all optional and can be omitted):

| Parameter | Data Type | Description                                         |
|-----------|-----------|-----------------------------------------------------|
| y         | string    | year                                                |
| m         | string    | month                                               |
| d         | string    | day                                                 |
| h         | string    | hour                                                |
| i         | string    | minute                                              |
| s         | string    | second                                              |
| w         | string    | week. Day of the week: 1 - Monday, 7 or 0 - Sunday. |

Each of these parameters can specify either an absolute value or a relative offset.

**Examples of parameters:**

- -1 — minus one unit
- +1 — plus one unit
- 1 — absolute value
- if omitted, the current value.

**Second argument (options)**: Additional parameters (all optional and can be omitted):

| Parameter | Data type | Description                                                                                      |
|-----------|-----------|--------------------------------------------------------------------------------------------------|
| date      | Date      | The date relative to which the offset will be calculated. Defaults to the current date and time. |
| withMs    | boolean   | Whether to include milliseconds. Defaults to none.                                               |

### Usage examples:

Add one hour to the current time.

```typescript
RelativeDateHelper.date({ h: '+1' });
```

Add one hour to the current time, setting the minutes and seconds to 0.

```typescript
RelativeDateHelper.date({ h: '+1', i: '0', s: '0' });
```

Midnight at the start of this week.

```typescript
RelativeDateHelper.date({ w: '1', h: '0', i: '0', s: '0' });
```

A less obvious example: Monday of next week.

```typescript
RelativeDateHelper.date({ d: '+7', w: '1', h: '0', i: '0', s: '0' });
```

### More examples:

```typescript
//       2020-05
// Mo Tu We Th Fr Sa Sn
//              1  2  3
//  4  5  6  7  8  9 10
// 11 12 13 14 15 16 17
// 18 19 20 21 22 23 24
// 25 26 27 28 29 30 31

const date = new Date('2020-05-15 16:32:45.789');

RelativeDateHelper.date(undefined, { date }); // 2020-05-15 12:34:56
RelativeDateHelper.date(undefined, { date, withMs: true }); // 2020-05-15 12:34:56.789
RelativeDateHelper.date({}, { date }); // 2020-05-15 12:34:56

RelativeDateHelper.date({ y: '1900' }, { date }); // 1900-05-15 12:34:56
RelativeDateHelper.date({ y: '+5' }, { date }); // 2025-05-15 12:34:56
RelativeDateHelper.date({ y: '-5' }, { date }); // 2015-05-15 12:34:56

RelativeDateHelper.date({ m: '1' }, { date }); // 2020-01-15 12:34:56
RelativeDateHelper.date({ m: '+5' }, { date }); // 2020-10-15 12:34:56
RelativeDateHelper.date({ m: '-5' }, { date }); // 2019-12-15 12:34:56
RelativeDateHelper.date({ m: '+12' }, { date }); // 2021-05-15 12:34:56
RelativeDateHelper.date({ m: '-12' }, { date }); // 2019-05-15 12:34:56
RelativeDateHelper.date({ m: '+17' }, { date }); // 2021-10-15 12:34:56
RelativeDateHelper.date({ m: '-17' }, { date }); // 2018-12-15 12:34:56

RelativeDateHelper.date({ d: '1' }, { date }); // 2020-05-01 12:34:56
RelativeDateHelper.date({ d: '+5' }, { date }); // 2020-05-20 12:34:56
RelativeDateHelper.date({ d: '-5' }, { date }); // 2020-05-10 12:34:56
RelativeDateHelper.date({ d: '+31' }, { date }); // 2020-06-15 12:34:56
RelativeDateHelper.date({ d: '-30' }, { date }); // 2020-04-15 12:34:56

RelativeDateHelper.date({ h: '3' }, { date }); // 2020-05-15 03:34:56
RelativeDateHelper.date({ h: '+5' }, { date }); // 2020-05-15 17:34:56
RelativeDateHelper.date({ h: '-5' }, { date }); // 2020-05-15 07:34:56
RelativeDateHelper.date({ h: '+25' }, { date }); // 2020-05-16 13:34:56
RelativeDateHelper.date({ h: '-25' }, { date }); // 2020-05-14 11:34:56

RelativeDateHelper.date({ i: '1' }, { date }); // 2020-05-15 12:01:56
RelativeDateHelper.date({ i: '+5' }, { date }); // 2020-05-15 12:39:56
RelativeDateHelper.date({ i: '-5' }, { date }); // 2020-05-15 12:29:56
RelativeDateHelper.date({ i: '+65' }, { date }); // 2020-05-15 13:39:56
RelativeDateHelper.date({ i: '-65' }, { date }); // 2020-05-15 11:29:56

RelativeDateHelper.date({ s: '1' }, { date }); // 2020-05-15 12:34:01
RelativeDateHelper.date({ s: '+5' }, { date }); // 2020-05-15 12:35:01
RelativeDateHelper.date({ s: '-5' }, { date }); // 2020-05-15 12:34:51
RelativeDateHelper.date({ s: '+65' }, { date }); // 2020-05-15 12:36:01
RelativeDateHelper.date({ s: '-65' }, { date }); // 2020-05-15 12:33:51

RelativeDateHelper.date({ w: '0' }, { date }); // 2020-05-17 12:34:56
RelativeDateHelper.date({ w: '1' }, { date }); // 2020-05-11 12:34:56
RelativeDateHelper.date({ w: '2' }, { date }); // 2020-05-12 12:34:56
RelativeDateHelper.date({ w: '3' }, { date }); // 2020-05-13 12:34:56
RelativeDateHelper.date({ w: '4' }, { date }); // 2020-05-14 12:34:56
RelativeDateHelper.date({ w: '5' }, { date }); // 2020-05-15 12:34:56
RelativeDateHelper.date({ w: '6' }, { date }); // 2020-05-16 12:34:56
RelativeDateHelper.date({ w: '7' }, { date }); // 2020-05-17 12:34:56
RelativeDateHelper.date({ w: '8' }, { date }); // 2020-05-11 12:34:56
RelativeDateHelper.date({ w: '14' }, { date }); // 2020-05-17 12:34:56

RelativeDateHelper.date({ w: '+5' }, { date }); // 2020-05-20 12:34:56
RelativeDateHelper.date({ w: '-5' }, { date }); // 2020-05-10 12:34:56
RelativeDateHelper.date({ w: '+31' }, { date }); // 2020-06-15 12:34:56
RelativeDateHelper.date({ w: '-30' }, { date }); // 2020-04-15 12:34:56

RelativeDateHelper.date({ d: '+7', w: '1' }, { date }); // 2020-05-18 12:34:56
RelativeDateHelper.date({ d: '+14', w: '1' }, { date }); // 2020-05-25 12:34:56
RelativeDateHelper.date({ d: '-7', w: '1' }, { date }); // 2020-05-04 12:34:56
```
