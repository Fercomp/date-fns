"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parsers = void 0;
const EraParser_js_1 = require("./EraParser.js");
const YearParser_js_1 = require("./YearParser.js");
const LocalWeekYearParser_js_1 = require("./LocalWeekYearParser.js");
const ISOWeekYearParser_js_1 = require("./ISOWeekYearParser.js");
const ExtendedYearParser_js_1 = require("./ExtendedYearParser.js");
const QuarterParser_js_1 = require("./QuarterParser.js");
const StandAloneQuarterParser_js_1 = require("./StandAloneQuarterParser.js");
const MonthParser_js_1 = require("./MonthParser.js");
const StandAloneMonthParser_js_1 = require("./StandAloneMonthParser.js");
const LocalWeekParser_js_1 = require("./LocalWeekParser.js");
const ISOWeekParser_js_1 = require("./ISOWeekParser.js");
const DateParser_js_1 = require("./DateParser.js");
const DayOfYearParser_js_1 = require("./DayOfYearParser.js");
const DayParser_js_1 = require("./DayParser.js");
const LocalDayParser_js_1 = require("./LocalDayParser.js");
const StandAloneLocalDayParser_js_1 = require("./StandAloneLocalDayParser.js");
const ISODayParser_js_1 = require("./ISODayParser.js");
const AMPMParser_js_1 = require("./AMPMParser.js");
const AMPMMidnightParser_js_1 = require("./AMPMMidnightParser.js");
const DayPeriodParser_js_1 = require("./DayPeriodParser.js");
const Hour1to12Parser_js_1 = require("./Hour1to12Parser.js");
const Hour0to23Parser_js_1 = require("./Hour0to23Parser.js");
const Hour0To11Parser_js_1 = require("./Hour0To11Parser.js");
const Hour1To24Parser_js_1 = require("./Hour1To24Parser.js");
const MinuteParser_js_1 = require("./MinuteParser.js");
const SecondParser_js_1 = require("./SecondParser.js");
const FractionOfSecondParser_js_1 = require("./FractionOfSecondParser.js");
const ISOTimezoneWithZParser_js_1 = require("./ISOTimezoneWithZParser.js");
const ISOTimezoneParser_js_1 = require("./ISOTimezoneParser.js");
const TimestampSecondsParser_js_1 = require("./TimestampSecondsParser.js");
const TimestampMillisecondsParser_js_1 = require("./TimestampMillisecondsParser.js");
/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O* | Timezone (GMT)                 |
 * |  p  |                                |  P  |                                |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z* | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `parse` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any -- It's ok, we want any here
exports.parsers = {
    G: new EraParser_js_1.EraParser(),
    y: new YearParser_js_1.YearParser(),
    Y: new LocalWeekYearParser_js_1.LocalWeekYearParser(),
    R: new ISOWeekYearParser_js_1.ISOWeekYearParser(),
    u: new ExtendedYearParser_js_1.ExtendedYearParser(),
    Q: new QuarterParser_js_1.QuarterParser(),
    q: new StandAloneQuarterParser_js_1.StandAloneQuarterParser(),
    M: new MonthParser_js_1.MonthParser(),
    L: new StandAloneMonthParser_js_1.StandAloneMonthParser(),
    w: new LocalWeekParser_js_1.LocalWeekParser(),
    I: new ISOWeekParser_js_1.ISOWeekParser(),
    d: new DateParser_js_1.DateParser(),
    D: new DayOfYearParser_js_1.DayOfYearParser(),
    E: new DayParser_js_1.DayParser(),
    e: new LocalDayParser_js_1.LocalDayParser(),
    c: new StandAloneLocalDayParser_js_1.StandAloneLocalDayParser(),
    i: new ISODayParser_js_1.ISODayParser(),
    a: new AMPMParser_js_1.AMPMParser(),
    b: new AMPMMidnightParser_js_1.AMPMMidnightParser(),
    B: new DayPeriodParser_js_1.DayPeriodParser(),
    h: new Hour1to12Parser_js_1.Hour1to12Parser(),
    H: new Hour0to23Parser_js_1.Hour0to23Parser(),
    K: new Hour0To11Parser_js_1.Hour0To11Parser(),
    k: new Hour1To24Parser_js_1.Hour1To24Parser(),
    m: new MinuteParser_js_1.MinuteParser(),
    s: new SecondParser_js_1.SecondParser(),
    S: new FractionOfSecondParser_js_1.FractionOfSecondParser(),
    X: new ISOTimezoneWithZParser_js_1.ISOTimezoneWithZParser(),
    x: new ISOTimezoneParser_js_1.ISOTimezoneParser(),
    t: new TimestampSecondsParser_js_1.TimestampSecondsParser(),
    T: new TimestampMillisecondsParser_js_1.TimestampMillisecondsParser(),
};
