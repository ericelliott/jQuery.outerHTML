jQuery.outerHTML
================
Just like .html(), except that it lets you get the HTML of the target element, including the element itself.

Like .html(), you can replace the whole element by passing a value in.

Get
---

`var markup = $('#myElement').outerHTML();`

Set
---
`$('#myElement').outerHTML('<div><p>New Stuff!</p></div>');
