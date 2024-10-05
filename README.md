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

<a name="new_DateHandler_new"></a>

### new DateHandler(config)
<p>Creates an instance of DateHandler.</p>


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| config | <code>Object</code> |  |  |
| [config.locale] | <code>string</code> | <code>&quot;en&quot;</code> | <p>config.locale</p> |

<a name="DateHandler+format"></a>

### dateHandler.format(date, [format], [options]) ⇒ <code>string</code> \| <code>null</code>
**Kind**: instance method of [<code>DateHandler</code>](#DateHandler)  

| Param | Type | Default |
| --- | --- | --- |
| date | <code>Date</code> |  | 
| [format] | <code>string</code> | <code>&quot;P&quot;</code> | 
| [options] | <code>Object</code> | <code>{}</code> | 

**Example**  
```js
const Dates = new DateHanlder({locale: 'es'})
Dates.format('2024-10-04T21:26:33.801Z') // 10/04/2024
```
