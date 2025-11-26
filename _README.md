# Webpagelogger

An NPM module for your websites that logs webpage visits to your API logger. It asynchronously sends a JSON payload via POST, containing all discernible JavaScript data, including a unique JavaScript fingerprint, to your API upon each visit.



Demo:
https://webpagelogger.myridia.com

## Usage:

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


