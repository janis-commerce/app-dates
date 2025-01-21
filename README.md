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
    * [.isValid(date)](#DateHandler+isValid) ⇒ <code>boolean</code>
    * [.setLanguage(lang)](#DateHandler+setLanguage) ⇒ <code>void</code>
    * [.formatDelivery(date)](#DateHandler+formatDelivery) ⇒ <code>string</code> \| <code>null</code>
    * [.format(date, format, options)](#DateHandler+format) ⇒

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
const Dates = new DateHandler() // default locale 'en'
```
<a name="DateHandler+isValid"></a>

### dateHandler.isValid(date) ⇒ <code>boolean</code>
<p>Return true or false if date is Valid</p>

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
<a name="DateHandler+setLanguage"></a>

### dateHandler.setLanguage(lang) ⇒ <code>void</code>
<p>Set language if need to be change</p>

**Kind**: instance method of [<code>DateHandler</code>](#DateHandler)  

| Param | Type |
| --- | --- |
| lang | <code>string</code> | 

**Example**  
```js
const Dates = new DateHandler({locale: 'es'})
Dates.setLanguage('en')
```
<a name="DateHandler+formatDelivery"></a>

### dateHandler.formatDelivery(date) ⇒ <code>string</code> \| <code>null</code>
<p>Formate delivery date</p>

**Kind**: instance method of [<code>DateHandler</code>](#DateHandler)  

| Param | Type | Description |
| --- | --- | --- |
| date | <code>Date</code> \| <code>Array.&lt;Date&gt;</code> | <p>For more information, see <a href="https://date-fns.org/v4.1.0/docs/format">formats</a></p> |

**Example**  
```js
const Dates = new DateHandler({locale: 'es'})
Dates.formatDeliveryDate('2024-10-04T21:26:33.801Z') // 10/04/2024
Dates.formatDeliveryDate(['2024-10-20T22:50:03.553Z', '2024-10-21T22:50:03.553Z']), // 10/20 19:50 - 10/21 19:50
```
<a name="DateHandler+format"></a>

### dateHandler.format(date, format, options) ⇒
<p>The <code>format</code> function takes a date, format string, and options, validates the date, and then formats
the date using the specified format and options, logging any errors and returning null if the date
is invalid.</p>

**Kind**: instance method of [<code>DateHandler</code>](#DateHandler)  
**Returns**: <p>The <code>format</code> function will return the result of the <code>formatSingleDate</code> function called with
the provided <code>date</code>, <code>format</code>, and <code>options</code>. If the <code>date</code> argument is not a valid Date, an error
message will be logged using <code>logError</code> and <code>null</code> will be returned.</p>  

| Param | Type | Description |
| --- | --- | --- |
| date | <code>Date</code> | <p>The <code>date</code> parameter is the date that you want to format. It should be a valid Date object.</p> |
| format | <code>string</code> | <p>The <code>format</code> parameter in the <code>format</code> function is used to specify the format in which the date should be displayed. It could be a string containing a combination of date and time format tokens, such as 'YYYY-MM-DD HH:mm:ss'. This format string defines how the date should be formatted</p> <ul> <li>For more information, see <a href="https://date-fns.org/v4.1.0/docs/format">formats</a></li> </ul> |
| options |  | <p>Options is an object that can contain additional configuration settings for formatting the date. These settings can include things like specifying the time zone, customizing the output format, or providing any other specific requirements for formatting the date.</p> <ul> <li>locale inherits it from the instance of class</li> <li>For more information, see <a href="https://date-fns.org/v4.1.0/docs/format#types/FormatOptions/630">options</a></li> </ul> |

