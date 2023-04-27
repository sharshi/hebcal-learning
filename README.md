# hebcal-learning
Javascript Daily Learning Schedules

[![Build Status](https://github.com/hebcal/hebcal-learning/actions/workflows/node.js.yml/badge.svg)](https://github.com/hebcal/hebcal-learning/actions/workflows/node.js.yml)

Supports several learning schedules

* Daf Yomi (Babylonian Talmud / Bavli) - `dafYomi`
* Mishna Yomi - `mishnaYomi`
* Nach Yomi - `nachYomi`
* Yerushalmi Yomi (Jerusalem Talmud)
  * Vilna edition - `yerushalmi-vilna`
  * Schottenstein edition - `yerushalmi-schottenstei`

## Installation
```bash
$ npm install @hebcal/learning
```

## Classes

<dl>
<dt><a href="#DafYomi">DafYomi</a></dt>
<dd><p>Returns the Daf Yomi for given date</p>
</dd>
<dt><a href="#DafYomiEvent">DafYomiEvent</a></dt>
<dd><p>Event wrapper around a DafYomi instance</p>
</dd>
<dt><a href="#MishnaYomiEvent">MishnaYomiEvent</a></dt>
<dd><p>Event wrapper around a Mishna Yomi instance</p>
</dd>
<dt><a href="#MishnaYomiIndex">MishnaYomiIndex</a></dt>
<dd><p>A program of daily learning in which participants study two Mishnahs
each day in order to finish the entire Mishnah in ~6 years.</p>
</dd>
<dt><a href="#NachYomiEvent">NachYomiEvent</a></dt>
<dd><p>Event wrapper around a Nach Yomi instance</p>
</dd>
<dt><a href="#NachYomiIndex">NachYomiIndex</a></dt>
<dd><p>A daily regimen of learning the books of Nevi&#39;im (Prophets)
and Ketuvim (Writings).</p>
</dd>
<dt><a href="#YerushalmiYomiEvent">YerushalmiYomiEvent</a></dt>
<dd><p>Event wrapper around a Yerushalmi Yomi result</p>
</dd>
</dl>

## Constants

<dl>
<dt><a href="#vilna">vilna</a></dt>
<dd><p>Yerushalmi Yomi configuration for Vilna Edition</p>
</dd>
<dt><a href="#schottenstein">schottenstein</a></dt>
<dd><p>Yerushalmi Yomi configuration for Schottenstein Edition</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#yerushalmiYomi">yerushalmiYomi(date, config)</a> ⇒ <code>any</code></dt>
<dd><p>Using the Vilna edition, the Yerushalmi Daf Yomi program takes
~4.25 years or 51 months.
Unlike the Daf Yomi Bavli cycle, this Yerushalmi cycle skips both
Yom Kippur and Tisha B&#39;Av (returning <code>null</code>).
The page numbers are according to the Vilna
Edition which is used since 1900.</p>
<p>The Schottenstein edition uses different page numbers and takes
~6 years to complete.</p>
<p>Throws an exception if the date is before Daf Yomi Yerushalmi
cycle began (2 February 1980 for Vilna,
14 November 2022 for Schottenstein).</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#MishnaYomi">MishnaYomi</a> : <code>Object</code></dt>
<dd><p>Describes a mishna to be read</p>
</dd>
<dt><a href="#NachYomi">NachYomi</a> : <code>Object</code></dt>
<dd><p>Describes a chapter to be read</p>
</dd>
</dl>

<a name="DafYomi"></a>

## DafYomi
Returns the Daf Yomi for given date

**Kind**: global class  

* [DafYomi](#DafYomi)
    * [new DafYomi(date)](#new_DafYomi_new)
    * [.getBlatt()](#DafYomi+getBlatt) ⇒ <code>number</code>
    * [.getName()](#DafYomi+getName) ⇒ <code>string</code>
    * [.render([locale])](#DafYomi+render) ⇒ <code>string</code>

<a name="new_DafYomi_new"></a>

### new DafYomi(date)
Initializes a daf yomi instance


| Param | Type | Description |
| --- | --- | --- |
| date | <code>Date</code> \| <code>HDate</code> \| <code>number</code> | Gregorian or Hebrew date |

<a name="DafYomi+getBlatt"></a>

### dafYomi.getBlatt() ⇒ <code>number</code>
**Kind**: instance method of [<code>DafYomi</code>](#DafYomi)  
<a name="DafYomi+getName"></a>

### dafYomi.getName() ⇒ <code>string</code>
**Kind**: instance method of [<code>DafYomi</code>](#DafYomi)  
<a name="DafYomi+render"></a>

### dafYomi.render([locale]) ⇒ <code>string</code>
Formats (with translation) the dafyomi result as a string like "Pesachim 34"

**Kind**: instance method of [<code>DafYomi</code>](#DafYomi)  

| Param | Type | Description |
| --- | --- | --- |
| [locale] | <code>string</code> | Optional locale name (defaults to active locale). |

<a name="DafYomiEvent"></a>

## DafYomiEvent
Event wrapper around a DafYomi instance

**Kind**: global class  

* [DafYomiEvent](#DafYomiEvent)
    * [new DafYomiEvent(date)](#new_DafYomiEvent_new)
    * [.render([locale])](#DafYomiEvent+render) ⇒ <code>string</code>
    * [.renderBrief([locale])](#DafYomiEvent+renderBrief) ⇒ <code>string</code>
    * [.url()](#DafYomiEvent+url) ⇒ <code>string</code>

<a name="new_DafYomiEvent_new"></a>

### new DafYomiEvent(date)

| Param | Type |
| --- | --- |
| date | <code>HDate</code> | 

<a name="DafYomiEvent+render"></a>

### dafYomiEvent.render([locale]) ⇒ <code>string</code>
Returns Daf Yomi name including the 'Daf Yomi: ' prefix (e.g. "Daf Yomi: Pesachim 107").

**Kind**: instance method of [<code>DafYomiEvent</code>](#DafYomiEvent)  

| Param | Type | Description |
| --- | --- | --- |
| [locale] | <code>string</code> | Optional locale name (defaults to active locale). |

<a name="DafYomiEvent+renderBrief"></a>

### dafYomiEvent.renderBrief([locale]) ⇒ <code>string</code>
Returns Daf Yomi name without the 'Daf Yomi: ' prefix (e.g. "Pesachim 107").

**Kind**: instance method of [<code>DafYomiEvent</code>](#DafYomiEvent)  

| Param | Type | Description |
| --- | --- | --- |
| [locale] | <code>string</code> | Optional locale name (defaults to active locale). |

<a name="DafYomiEvent+url"></a>

### dafYomiEvent.url() ⇒ <code>string</code>
Returns a link to sefaria.org or dafyomi.org

**Kind**: instance method of [<code>DafYomiEvent</code>](#DafYomiEvent)  
<a name="MishnaYomiEvent"></a>

## MishnaYomiEvent
Event wrapper around a Mishna Yomi instance

**Kind**: global class  

* [MishnaYomiEvent](#MishnaYomiEvent)
    * [new MishnaYomiEvent(date, mishnaYomi)](#new_MishnaYomiEvent_new)
    * [.render([locale])](#MishnaYomiEvent+render) ⇒ <code>string</code>
    * [.url()](#MishnaYomiEvent+url) ⇒ <code>string</code>

<a name="new_MishnaYomiEvent_new"></a>

### new MishnaYomiEvent(date, mishnaYomi)

| Param | Type |
| --- | --- |
| date | <code>HDate</code> | 
| mishnaYomi | [<code>Array.&lt;MishnaYomi&gt;</code>](#MishnaYomi) | 

<a name="MishnaYomiEvent+render"></a>

### mishnaYomiEvent.render([locale]) ⇒ <code>string</code>
Returns Mishna Yomi name (e.g. "Bava Metzia 10:5-6" or "Berakhot 9:5-Peah 1:1").

**Kind**: instance method of [<code>MishnaYomiEvent</code>](#MishnaYomiEvent)  

| Param | Type | Description |
| --- | --- | --- |
| [locale] | <code>string</code> | Optional locale name (defaults to active locale). |

<a name="MishnaYomiEvent+url"></a>

### mishnaYomiEvent.url() ⇒ <code>string</code>
Returns a link to sefaria.org

**Kind**: instance method of [<code>MishnaYomiEvent</code>](#MishnaYomiEvent)  
<a name="MishnaYomiIndex"></a>

## MishnaYomiIndex
A program of daily learning in which participants study two Mishnahs
each day in order to finish the entire Mishnah in ~6 years.

**Kind**: global class  

* [MishnaYomiIndex](#MishnaYomiIndex)
    * [new MishnaYomiIndex()](#new_MishnaYomiIndex_new)
    * [.days](#MishnaYomiIndex+days) : [<code>Array.&lt;MishnaYomi&gt;</code>](#MishnaYomi)
    * [.lookup(date)](#MishnaYomiIndex+lookup) ⇒ [<code>Array.&lt;MishnaYomi&gt;</code>](#MishnaYomi)

<a name="new_MishnaYomiIndex_new"></a>

### new MishnaYomiIndex()
Initializes a Mishna Yomi instance

<a name="MishnaYomiIndex+days"></a>

### mishnaYomiIndex.days : [<code>Array.&lt;MishnaYomi&gt;</code>](#MishnaYomi)
**Kind**: instance property of [<code>MishnaYomiIndex</code>](#MishnaYomiIndex)  
<a name="MishnaYomiIndex+lookup"></a>

### mishnaYomiIndex.lookup(date) ⇒ [<code>Array.&lt;MishnaYomi&gt;</code>](#MishnaYomi)
Looks up a Mishna Yomi

**Kind**: instance method of [<code>MishnaYomiIndex</code>](#MishnaYomiIndex)  

| Param | Type | Description |
| --- | --- | --- |
| date | <code>Date</code> \| <code>HDate</code> \| <code>number</code> | Gregorian date |

<a name="NachYomiEvent"></a>

## NachYomiEvent
Event wrapper around a Nach Yomi instance

**Kind**: global class  

* [NachYomiEvent](#NachYomiEvent)
    * [new NachYomiEvent(date, nachYomi)](#new_NachYomiEvent_new)
    * [.render([locale])](#NachYomiEvent+render) ⇒ <code>string</code>
    * [.url()](#NachYomiEvent+url) ⇒ <code>string</code>

<a name="new_NachYomiEvent_new"></a>

### new NachYomiEvent(date, nachYomi)

| Param | Type |
| --- | --- |
| date | <code>HDate</code> | 
| nachYomi | [<code>NachYomi</code>](#NachYomi) | 

<a name="NachYomiEvent+render"></a>

### nachYomiEvent.render([locale]) ⇒ <code>string</code>
Returns name of tractate and page (e.g. "Beitzah 21").

**Kind**: instance method of [<code>NachYomiEvent</code>](#NachYomiEvent)  

| Param | Type | Description |
| --- | --- | --- |
| [locale] | <code>string</code> | Optional locale name (defaults to active locale). |

<a name="NachYomiEvent+url"></a>

### nachYomiEvent.url() ⇒ <code>string</code>
Returns a link to sefaria.org

**Kind**: instance method of [<code>NachYomiEvent</code>](#NachYomiEvent)  
<a name="NachYomiIndex"></a>

## NachYomiIndex
A daily regimen of learning the books of Nevi'im (Prophets)
and Ketuvim (Writings).

**Kind**: global class  

* [NachYomiIndex](#NachYomiIndex)
    * [new NachYomiIndex()](#new_NachYomiIndex_new)
    * [.lookup(date)](#NachYomiIndex+lookup) ⇒ [<code>NachYomi</code>](#NachYomi)

<a name="new_NachYomiIndex_new"></a>

### new NachYomiIndex()
Initializes a Nach Yomi instance

<a name="NachYomiIndex+lookup"></a>

### nachYomiIndex.lookup(date) ⇒ [<code>NachYomi</code>](#NachYomi)
Looks up a Mishna Yomi

**Kind**: instance method of [<code>NachYomiIndex</code>](#NachYomiIndex)  

| Param | Type | Description |
| --- | --- | --- |
| date | <code>Date</code> \| <code>HDate</code> \| <code>number</code> | Gregorian date |

<a name="YerushalmiYomiEvent"></a>

## YerushalmiYomiEvent
Event wrapper around a Yerushalmi Yomi result

**Kind**: global class  

* [YerushalmiYomiEvent](#YerushalmiYomiEvent)
    * [new YerushalmiYomiEvent(date, daf)](#new_YerushalmiYomiEvent_new)
    * [.render([locale])](#YerushalmiYomiEvent+render) ⇒ <code>string</code>
    * [.renderBrief([locale])](#YerushalmiYomiEvent+renderBrief) ⇒ <code>string</code>
    * [.url()](#YerushalmiYomiEvent+url) ⇒ <code>string</code>

<a name="new_YerushalmiYomiEvent_new"></a>

### new YerushalmiYomiEvent(date, daf)

| Param | Type |
| --- | --- |
| date | <code>HDate</code> | 
| daf | <code>any</code> | 

<a name="YerushalmiYomiEvent+render"></a>

### yerushalmiYomiEvent.render([locale]) ⇒ <code>string</code>
Returns name of tractate and page (e.g. "Yerushalmi Beitzah 21").

**Kind**: instance method of [<code>YerushalmiYomiEvent</code>](#YerushalmiYomiEvent)  

| Param | Type | Description |
| --- | --- | --- |
| [locale] | <code>string</code> | Optional locale name (defaults to active locale). |

<a name="YerushalmiYomiEvent+renderBrief"></a>

### yerushalmiYomiEvent.renderBrief([locale]) ⇒ <code>string</code>
Returns name of tractate and page (e.g. "Beitzah 21").

**Kind**: instance method of [<code>YerushalmiYomiEvent</code>](#YerushalmiYomiEvent)  

| Param | Type | Description |
| --- | --- | --- |
| [locale] | <code>string</code> | Optional locale name (defaults to active locale). |

<a name="YerushalmiYomiEvent+url"></a>

### yerushalmiYomiEvent.url() ⇒ <code>string</code>
Returns a link to sefaria.org

**Kind**: instance method of [<code>YerushalmiYomiEvent</code>](#YerushalmiYomiEvent)  
<a name="vilna"></a>

## vilna
Yerushalmi Yomi configuration for Vilna Edition

**Kind**: global constant  
**Read only**: true  
<a name="schottenstein"></a>

## schottenstein
Yerushalmi Yomi configuration for Schottenstein Edition

**Kind**: global constant  
**Read only**: true  
<a name="yerushalmiYomi"></a>

## yerushalmiYomi(date, config) ⇒ <code>any</code>
Using the Vilna edition, the Yerushalmi Daf Yomi program takes
~4.25 years or 51 months.
Unlike the Daf Yomi Bavli cycle, this Yerushalmi cycle skips both
Yom Kippur and Tisha B'Av (returning `null`).
The page numbers are according to the Vilna
Edition which is used since 1900.

The Schottenstein edition uses different page numbers and takes
~6 years to complete.

Throws an exception if the date is before Daf Yomi Yerushalmi
cycle began (2 February 1980 for Vilna,
14 November 2022 for Schottenstein).

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| date | <code>HDate</code> \| <code>Date</code> \| <code>number</code> | Hebrew or Gregorian date |
| config | <code>any</code> | either vilna or schottenstein |

<a name="MishnaYomi"></a>

## MishnaYomi : <code>Object</code>
Describes a mishna to be read

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| k | <code>string</code> | tractate name in Sephardic transliteration (e.g. "Berakhot", "Moed Katan") |
| v | <code>string</code> | verse (e.g. "2:1") |

<a name="NachYomi"></a>

## NachYomi : <code>Object</code>
Describes a chapter to be read

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| k | <code>string</code> | book name in Sephardic transliteration (e.g. "Berakhot", "Moed Katan") |
| v | <code>number</code> | chapter (e.g. "2:1") |

