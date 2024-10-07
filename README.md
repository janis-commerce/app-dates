# @janiscommerce app-dates

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

* [DateHandler](#DateHandler)
    * [new DateHandler(config)](#new_DateHandler_new)
    * [.format(date, [format], [options])](#DateHandler+format) ⇒ <code>string</code> \| <code>null</code>
    * [.isValid(date)](#DateHandler+isValid) ⇒ <code>boolean</code>

<a name="new_DateHandler_new"></a>

### new DateHandler(config)
<p>Creates an instance of DateHandler.</p>


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| config | <code>Object</code> |  |  |
| [config.locale] | <code>&quot;en&quot;</code> \| <code>&quot;es&quot;</code> \| <code>&quot;pt-BR&quot;</code> \| <code>&quot;pt&quot;</code> | <code>en</code> | <p>config.locale</p> |

**Example**  
```js
const Dates = new DateHandler({locale: 'es'})
```
<a name="DateHandler+format"></a>

### dateHandler.format(date, [format], [options]) ⇒ <code>string</code> \| <code>null</code>
<p>Formate Date</p>

**Kind**: instance method of [<code>DateHandler</code>](#DateHandler)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| date | <code>Date</code> |  |  |
| [format] | <code>string</code> | <code>&quot;P&quot;</code> | <p>For more information, see <a href="https://date-fns.org/v4.1.0/docs/format">formats</a></p> |
| [options] | <code>Object</code> | <code>{}</code> | <p>For more information, see <a href="https://date-fns.org/v4.1.0/docs/format#types/FormatOptions/630">options</a></p> |

**Example**  
```js
const Dates = new DateHandler({locale: 'es'})
Dates.format('2024-10-04T21:26:33.801Z') // 10/04/2024
```
<a name="DateHandler+isValid"></a>

### dateHandler.isValid(date) ⇒ <code>boolean</code>
<p>return true or false if date is Valid</p>

**Kind**: instance method of [<code>DateHandler</code>](#DateHandler)  

| Param | Type |
| --- | --- |
| date | <code>Date</code> | 

**Example**  
```js
const Dates = new DateHandler({locale: 'es'})
Dates.isValid('2024-10-04T21:26:33.801Z') // true
Dates.isValid('Janis commerce') // false
```
