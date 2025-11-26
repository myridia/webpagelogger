# Webpagelogger

NPM module for your websites what logs the visit of webpages to your API logger.
It sends per POST all possible info what can be gathered from JavaScript including the unique JavaScript fingerprint to your API.
The content data is sent asynchronous via POST in a JSON format.



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


