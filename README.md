# Webpagelogger

An NPM module for your websites that logs webpage visits to your API logger. It asynchronously sends a JSON payload via POST, containing all discernible JavaScript data, including a unique JavaScript fingerprint, to your API upon each visit.



Demo:
https://webpagelogger.myridia.com

#Usage:

Add a script import tag to your project:

```html
<script src="node_modules/webpagelogger/dist/webpagelogger.js"></script>
```

Add the below to your code declaration:

example without your page:

```js

window.onload = async function () {
 let wpl = new Webpagelogger({
     "log_api": "http://couchdb.foo.com/logger", // required  
	 "log_data": "json",  // json(default) or  x-www-form-urlencoded 
	 "log_method": "POST" // POST(default) or PUT(not supported yet)
	 });
 await wpl.logit();
};


```


example with your page filter:

```js

window.onload = async function () {
 let wpl = new Webpagelogger({
     "log_api": "http://couchdb.foo.com/logger", // required  
	 "log_data": "json",  // json(default) or  x-www-form-urlencoded 
	 "log_method": "POST" // POST(default) or PUT(not supported yet)
	 "page": "example.com/category/page/
	 });
 await wpl.logit();
};

```


<a name="module_Webpagelogger"></a>

## Webpagelogger
GPL licenses
A module for Webpagelogger


* [Webpagelogger](#module_Webpagelogger)
    * [module.exports#post_json(url, _data)](#exp_module_Webpagelogger--module.exports+post_json) ⏏
    * [module.exports#post_x_www_form_urlencoded(url, doc)](#exp_module_Webpagelogger--module.exports+post_x_www_form_urlencoded) ⏏
    * [module.exports#pad(number)](#exp_module_Webpagelogger--module.exports+pad) ⇒ <code>str</code> ⏏
    * [module.exports#help()](#exp_module_Webpagelogger--module.exports+help) ⏏
    * [module.exports#logit()](#exp_module_Webpagelogger--module.exports+logit) ⏏

<a name="exp_module_Webpagelogger--module.exports+post_json"></a>

### module.exports#post\_json(url, _data) ⏏
**Kind**: Exported function  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>str</code> | url |
| _data | <code>object</code> | data |

<a name="exp_module_Webpagelogger--module.exports+post_x_www_form_urlencoded"></a>

### module.exports#post\_x\_www\_form\_urlencoded(url, doc) ⏏
**Kind**: Exported function  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>str</code> | url |
| doc | <code>object</code> | doc |

<a name="exp_module_Webpagelogger--module.exports+pad"></a>

### module.exports#pad(number) ⇒ <code>str</code> ⏏
**Kind**: Exported function  
**Returns**: <code>str</code> - - number  

| Param | Type | Description |
| --- | --- | --- |
| number | <code>str</code> | number |

<a name="exp_module_Webpagelogger--module.exports+help"></a>

### module.exports#help() ⏏
**Kind**: Exported function  
<a name="exp_module_Webpagelogger--module.exports+logit"></a>

### module.exports#logit() ⏏
**Kind**: Exported function  
