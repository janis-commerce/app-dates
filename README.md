# @janiscommerce app-dates

![janis-logo](brand-logo.png)

![Build Status](https://github.com/janis-commerce/apps-dates/workflows/Build%20Status/badge.svg)
[![Coverage Status](https://coveralls.io/repos/github/janis-commerce/apps-dates/badge.svg?branch=master)](https://coveralls.io/github/janis-commerce/apps-dates?branch=master)
[![npm version](https://badge.fury.io/js/%40janiscommerce%2Fapps-dates.svg)](https://www.npmjs.com/package/@janiscommerce/apps-dates)

This package provides dates module for use in Janis apps.

## 📦 Installation

```sh
npm install @janiscommerce/apps-dates
```

## Module

<a name="DateHandler"></a>

## DateHandler

**Kind**: global class

- [DateHandler](#DateHandler)
  - [new DateHandler(config)](#new_DateHandler_new)
  - [.isValid(date)](#DateHandler+isValid) ⇒ <code>boolean</code>
  - [.setLanguage(lang)](#DateHandler+setLanguage) ⇒ <code>void</code>
  - [.format(date, format)](#DateHandler+format) ⇒ <code>string</code> \| <code>null</code>

<a name="new_DateHandler_new"></a>

### new DateHandler(config)

<p>Creates an instance of DateHandler.</p>

| Param           | Type                                                                                                                        | Default         | Description          |
| --------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------- | -------------------- |
| config          | <code>Object</code>                                                                                                         |                 |                      |
| [config.locale] | <code>&quot;en&quot;</code> \| <code>&quot;es&quot;</code> \| <code>&quot;pt-BR&quot;</code> \| <code>&quot;pt&quot;</code> | <code>en</code> | <p>config.locale</p> |

**Example**

```js
const Dates = new DateHandler({ locale: 'es' });
const Dates = new DateHandler(); // default locale 'en'
```

<a name="DateHandler+isValid"></a>

### dateHandler.isValid(date) ⇒ <code>boolean</code>

<p>Return true or false if date is Valid</p>

**Kind**: instance method of [<code>DateHandler</code>](#DateHandler)

| Param | Type              |
| ----- | ----------------- |
| date  | <code>Date</code> |

**Example**

```js
const Dates = new DateHandler({ locale: 'es' });
Dates.isValid('2024-10-04T21:26:33.801Z'); // true
Dates.isValid('Janis commerce'); // false
```

<a name="DateHandler+setLanguage"></a>

### dateHandler.setLanguage(lang) ⇒ <code>void</code>

<p>Set language if need to be change</p>

**Kind**: instance method of [<code>DateHandler</code>](#DateHandler)

| Param | Type                |
| ----- | ------------------- |
| lang  | <code>string</code> |

**Example**

```js
const Dates = new DateHandler({ locale: 'es' });
Dates.setLanguage('en');
```

<a name="DateHandler+format"></a>

### dateHandler.format(date, format) ⇒ <code>string</code> \| <code>null</code>

<p>Formate Date</p>

**Kind**: instance method of [<code>DateHandler</code>](#DateHandler)

| Param  | Type                                                 | Description                                                                                                   |
| ------ | ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| date   | <code>Date</code> \| <code>Array.&lt;Date&gt;</code> |                                                                                                               |
| format | <code>string</code>                                  | <p>format of Date For more information, see <a href="https://date-fns.org/v4.1.0/docs/format">formats</a></p> |

**Example**

```js
const Dates = new DateHandler({locale: 'es'})
Dates.format('2024-10-04T21:26:33.801Z') // 10/04/2024
Dates.format(['2024-10-20T22:50:03.553Z', '2024-10-21T22:50:03.553Z']), // 10/20 19:50 - 10/21 19:50
```
