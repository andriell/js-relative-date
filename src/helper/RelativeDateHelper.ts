/**
 * Объект для работы с относительной датой.
 * Правила написания смещений
 * -1 - минус 1
 * +1 - плюс 1
 * 1 - абсолютное значение
 * если пропущено, то текущее значение
 * Пример:
 * { i: "15", i: "0", s: "0" } - 15:00 текущего дня
 * { d: "-1", h: "15", i: "0", s: "0" } - 15:00 вчера
 * { d: "+1", h: "15", i: "10", s: "0" } - 15:10 завтра
 * { d: "+1", h: "15", i: "+10", s: "0" } - завтра 15 часов +10 минут
 * { d: "-14", w: "1" } - Два понедельника назад
 */
export interface RelativeDate {
  y?: string; // year
  m?: string; // month
  d?: string; // day
  h?: string; // hour
  i?: string; // minute
  s?: string; // second
  w?: string; // week день недели, 1 - понедельник, 7 или 0 - воскресенье
}

export class RelativeDateHelper {
  public static i18n = {
    y: 'Год',
    m: 'Месяц',
    d: 'День',
    h: 'Час',
    i: 'Минута',
    s: 'Секунда',
    dofA: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
    dof: 'День недели',
    ct: 'Текущее время',
  };

  public static date(v?: RelativeDate, options?: { date?: Date, withMs?: boolean }): Date {
    const r = options?.date ? new Date(options.date) : new Date();
    if (!options?.withMs) {
      const time = r.getTime();
      r.setTime(time - time % 1000);
    }
    const v2: RelativeDate = {
      y: v?.y ? `${v.y}` : undefined,
      m: v?.m ? `${v.m}` : undefined,
      d: v?.d ? `${v.d}` : undefined,
      h: v?.h ? `${v.h}` : undefined,
      i: v?.i ? `${v.i}` : undefined,
      s: v?.s ? `${v.s}` : undefined,
      w: v?.w ? `${v.w}` : undefined,
    };
    if (v2.y) {
      const n = parseInt(v2.y, 10);
      if (v2.y.startsWith('+') || v2.y.startsWith('-')) {
        r.setFullYear(r.getFullYear() + n);
      } else {
        r.setFullYear(n);
      }
    }
    if (v2.m) {
      const n = parseInt(v2.m, 10);
      if (v2.m.startsWith('+') || v2.m.startsWith('-')) {
        if (n >= 12) r.setFullYear(r.getFullYear() + Math.floor(n / 12));
        if (n <= -12) r.setFullYear(r.getFullYear() - Math.floor((-1 * n) / 12));
        r.setMonth(r.getMonth() + n % 12);
      } else {
        r.setMonth(n - 1);
      }
    }
    if (v2.d) {
      const n = parseInt(v2.d, 10);
      if (v2.d.startsWith('+') || v2.d.startsWith('-')) {
        r.setTime(r.getTime() + n * 864e5);
      } else {
        r.setDate(n);
      }
    }
    if (v2.h) {
      const n = parseInt(v2.h, 10);
      if (v2.h.startsWith('+') || v2.h.startsWith('-')) {
        r.setTime(r.getTime() + n * 36e5);
      } else {
        r.setHours(n);
      }
    }
    if (v2.i) {
      const n = parseInt(v2.i, 10);
      if (v2.i.startsWith('+') || v2.i.startsWith('-')) {
        r.setTime(r.getTime() + n * 6e4);
      } else {
        r.setMinutes(n);
      }
    }
    if (v2.s) {
      const n = parseInt(v2.s, 10);
      if (v2.s.startsWith('+') || v2.s.startsWith('-')) {
        r.setTime(r.getTime() + n * 1e3);
      } else {
        r.setSeconds(n);
      }
    }
    if (v2.w) {
      let n = parseInt(v2.w, 10);
      if (v2.w.startsWith('+') || v2.w.startsWith('-')) {
        r.setTime(r.getTime() + n * 864e5);
      } else {
        n = n % 7;
        if (n === 0) n = 7; // воскресение должно быть 7, а не 0
        const w = (n - r.getDay());
        r.setTime(r.getTime() + w * 864e5);
      }
    }
    return r;
  }

  public static description(v?: RelativeDate) {
    const r: string[] = [];
    if (v?.y) r.push(`${RelativeDateHelper.i18n.y}: ${v.y}`);
    if (v?.m) r.push(`${RelativeDateHelper.i18n.m}: ${v.m}`);
    if (v?.d) r.push(`${RelativeDateHelper.i18n.d}: ${v.d}`);
    if (v?.h) r.push(`${RelativeDateHelper.i18n.h}: ${v.h}`);
    if (v?.i) r.push(`${RelativeDateHelper.i18n.i}: ${v.i}`);
    if (v?.s) r.push(`${RelativeDateHelper.i18n.s}: ${v.s}`);
    if (v?.w) {
      let n = parseInt(v.w, 10);
      if (v.w.startsWith('+') || v.w.startsWith('-')) {
        r.push(`${RelativeDateHelper.i18n.dof}: ${v.w}`);
      } else {
        n = n % 7;
        if (n === 0) n = 7; // воскресение должно быть 7, а не 0
        r.push(`${RelativeDateHelper.i18n.dof}: ${RelativeDateHelper.i18n.dofA[n - 1]}`);
      }
    }
    if (r.length === 0) return `${RelativeDateHelper.i18n.ct};`;
    return `${r.join('; ')};`;
  }
}
