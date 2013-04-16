jquery-retainvalue
==================

This is a very simple library that you can use to have input fields of a form remember their values between requests.


Installation
------------

1.  Download the latest version.
2.  Include `jquery.retainvalue.js` after jQuery: `<script src="path/to/jquery.retainvalue.js"></script>`
3.  There is no third step.


Usage
-----

You can use *retainvalue* either on single fields or on a whole form or fieldset.

Let's take this simple form:

```html
<form>
    <label>Name: <input type="text" name="name" id="myField"></label></div>
    <div><label>Age: <input type="number" name="age"></label></div>
    <div><label><input type="radio" name="gender" value="male">male</label></div>
    <div><label><input type="radio" name="gender" value="female">female</label></div>
    <div><label>Country: <select name="country">
        <option value=""></option>
        <option value="IT">Italy</option>
        <option value="UK">United Kingdom</option>
        <option value="DE">Germany</option>
    </select></div>
    <input type="submit">
</form>
```

And here is the JavaScript:

```js
$('form').retainvalue(); // remember the values of all input or select fields in the form
```

*or*

```js
$('#myField').retainvalue(); // remember the value of only this one field
```


Compatibility
-------------

jquery-retainvalue relies on *localStorage*. On browsers that don't support it, it fails silently.


License
-------

[MIT](http://philippbosch.mit-license.org/)
