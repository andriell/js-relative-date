# @root.andriell/relative-date

Простая и мощная библиотека для расчета относительных дат в JavaScript и TypeScript.

Этот пакет предназначен для вычисления дат относительно друг друга.

Он написан на TypeScript, не имеет зависимостей. Очень лёгкий, может работать как на фронте, так и на бэкенде.

Основной метод для работы с датами называется **RelativeDateHelper.date()**. Первым аргументом он принимает объект, в котором описано смещение, вторым - различные опции.

**Первый аргумент (RelativeDate)**: Объект, который описывает смещение даты, имеет следующие параметры (они все необязательные и могут быть пропущены):

| Параметр | Тип данных | Описание                                                   |
|----------|------------|------------------------------------------------------------|
| y        | string     | year                                                       |
| m        | string     | month                                                      |
| d        | string     | day                                                        |
| h        | string     | hour                                                       |
| i        | string     | minute                                                     |
| s        | string     | second                                                     |
| w        | string     | week. День недели: 1 - понедельник, 7 или 0 - воскресенье. |

Каждый из этих параметров может указывать как на абсолютную величину, так и на относительное смещение.

**Примеры параметров:**

- -1 — минус одна единица
- +1 — плюс одна единица
- 1 — абсолютное значение
- если пропущено, то текущее значение.

**Второй аргумент (options)**: Дополнительные параметры (они все необязательные и могут быть пропущены):


| Параметр | Тип данных | Описание                                                                                    |
|----------|------------|---------------------------------------------------------------------------------------------|
| date     | Date       | Дата, относительно которой будет вычисляться смещение. По умолчанию - текущая дата и время. |
| withMs   | boolean    | Нужно ли учитывать миллисекунды. По умолчанию нет.                                          |


### Примеры использования:

Добавить один час к текущему времени.

```typescript
RelativeDateHelper.date({ h: '+1' });
```

Добавить один час к текущему времени, а минуты и секунды установить в 0.

```typescript
RelativeDateHelper.date({ h: '+1', i: '0', s: '0' });
```

Полночь начала этой недели.

```typescript
RelativeDateHelper.date({ w: '1', h: '0', i: '0', s: '0' });
```

Менее очевидный пример: Понедельник следующей недели.

```typescript
RelativeDateHelper.date({ d: '+7', w: '1', h: '0', i: '0', s: '0' });
```

### Ещё примеры:


```typescript
//       2020-05
// пн вт ср чт пт сб вс
//              1  2  3
//  4  5  6  7  8  9 10
// 11 12 13 14 15 16 17
// 18 19 20 21 22 23 24
// 25 26 27 28 29 30 31

const date = new Date('2020-05-15 16:32:45.248');

RelativeDateHelper.date(undefined, { date }); // 2020-05-15 16:32:45
RelativeDateHelper.date(undefined, { date, withMs: true }); // 2020-05-15 16:32:45.248
RelativeDateHelper.date({}, { date }); // 2020-05-15 16:32:45

RelativeDateHelper.date({ y: '1900' }, { date }); // 1900-05-15 16:32:45
RelativeDateHelper.date({ y: '+5' }, { date }); // 2025-05-15 16:32:45
RelativeDateHelper.date({ y: '-5' }, { date }); // 2015-05-15 16:32:45

RelativeDateHelper.date({ m: '1' }, { date }); // 2020-01-15 16:32:45
RelativeDateHelper.date({ m: '+5' }, { date }); // 2020-10-15 16:32:45
RelativeDateHelper.date({ m: '-5' }, { date }); // 2019-12-15 16:32:45
RelativeDateHelper.date({ m: '+12' }, { date }); // 2021-05-15 16:32:45
RelativeDateHelper.date({ m: '-12' }, { date }); // 2019-05-15 16:32:45
RelativeDateHelper.date({ m: '+17' }, { date }); // 2021-10-15 16:32:45
RelativeDateHelper.date({ m: '-17' }, { date }); // 2018-12-15 16:32:45

RelativeDateHelper.date({ d: '1' }, { date }); // 2020-05-01 16:32:45
RelativeDateHelper.date({ d: '+5' }, { date }); // 2020-05-20 16:32:45
RelativeDateHelper.date({ d: '-5' }, { date }); // 2020-05-10 16:32:45
RelativeDateHelper.date({ d: '+31' }, { date }); // 2020-06-15 16:32:45
RelativeDateHelper.date({ d: '-30' }, { date }); // 2020-04-15 16:32:45

RelativeDateHelper.date({ h: '3' }, { date }); // 2020-05-15 03:32:45
RelativeDateHelper.date({ h: '+5' }, { date }); // 2020-05-15 21:32:45
RelativeDateHelper.date({ h: '-5' }, { date }); // 2020-05-15 11:32:45
RelativeDateHelper.date({ h: '+25' }, { date }); // 2020-05-16 17:32:45
RelativeDateHelper.date({ h: '-25' }, { date }); // 2020-05-14 15:32:45

RelativeDateHelper.date({ i: '1' }, { date }); // 2020-05-15 16:01:45
RelativeDateHelper.date({ i: '+5' }, { date }); // 2020-05-15 16:37:45
RelativeDateHelper.date({ i: '-5' }, { date }); // 2020-05-15 16:27:45
RelativeDateHelper.date({ i: '+65' }, { date }); // 2020-05-15 17:37:45
RelativeDateHelper.date({ i: '-65' }, { date }); // 2020-05-15 15:27:45

RelativeDateHelper.date({ s: '1' }, { date }); // 2020-05-15 16:32:01
RelativeDateHelper.date({ s: '+5' }, { date }); // 2020-05-15 16:32:50
RelativeDateHelper.date({ s: '-5' }, { date }); // 2020-05-15 16:32:40
RelativeDateHelper.date({ s: '+65' }, { date }); // 2020-05-15 16:33:50
RelativeDateHelper.date({ s: '-65' }, { date }); // 2020-05-15 16:31:40

RelativeDateHelper.date({ w: '0' }, { date }); // 2020-05-17 16:32:45
RelativeDateHelper.date({ w: '1' }, { date }); // 2020-05-11 16:32:45
RelativeDateHelper.date({ w: '2' }, { date }); // 2020-05-12 16:32:45
RelativeDateHelper.date({ w: '3' }, { date }); // 2020-05-13 16:32:45
RelativeDateHelper.date({ w: '4' }, { date }); // 2020-05-14 16:32:45
RelativeDateHelper.date({ w: '5' }, { date }); // 2020-05-15 16:32:45
RelativeDateHelper.date({ w: '6' }, { date }); // 2020-05-16 16:32:45
RelativeDateHelper.date({ w: '7' }, { date }); // 2020-05-17 16:32:45
RelativeDateHelper.date({ w: '8' }, { date }); // 2020-05-11 16:32:45
RelativeDateHelper.date({ w: '14' }, { date }); // 2020-05-17 16:32:45

RelativeDateHelper.date({ w: '+5' }, { date }); // 2020-05-20 16:32:45
RelativeDateHelper.date({ w: '-5' }, { date }); // 2020-05-10 16:32:45
RelativeDateHelper.date({ w: '+31' }, { date }); // 2020-06-15 16:32:45
RelativeDateHelper.date({ w: '-30' }, { date }); // 2020-04-15 16:32:45

RelativeDateHelper.date({ d: '+7', w: '1' }, { date }); // 2020-05-18 16:32:45
RelativeDateHelper.date({ d: '+14', w: '1' }, { date }); // 2020-05-25 16:32:45
RelativeDateHelper.date({ d: '-7', w: '1' }, { date }); // 2020-05-04 16:32:45
```
