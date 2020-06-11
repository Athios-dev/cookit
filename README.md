# cookit
A jQuery plugin to add a cookies consent banner on a website. It only weighs 4Ko! 

## 📥 Getting started
Download [cookit.js](https://github.com/ThibaudArros/cookit/blob/master/cookit.js) (3Ko) and [cookit.css](https://github.com/ThibaudArros/cookit/blob/master/cookit.css) (1Ko).

## 📑 Usage
### Include jQuery
Get the latest version of jQuery on [jquery.com](https://code.jquery.com).

### Include cookit.css and cookit.js
```html
<link rel="stylesheet" href="cookit.css">
<script src="cookit.js"></script>
```

### Call the plugin
```javascript
$(document).ready(function() {
  $.cookit();
});
```

## ⚙️ Options
You can also pass some informations to the plugin.
```javascript
$(document).ready(function() {
  var options = {
    // some options...
  };
  $.cookit(options);
});
```

## Change the style
```javascript
var options = {
  backgroundColor: '#000',
  messageColor: '#fff',
  linkColor: '#ffda10',
  buttonColor: '#ffda10'
}
```

| Option              | Description                                                 | Type                              |
|---------------------|-------------------------------------------------------------|-----------------------------------|
| **backgroundColor** | This is the background color of the cookie banner           | **String** - color (hexa, rgb...) |
| **messageColor**    | This is the color of the consent text                       | **String** - color (hexa, rgb...) |
| **linkColor**       | This is the color of the link explaining more about cookies | **String** - color (hexa, rgb...) |
| **buttonColor**     | This is the background color of the consent button          | **String** - color (hexa, rgb...) |

*👉 For a beautiful banner, it is better when linkColor is identical to buttonColor...*


## Change the content
```javascript
var options = {
  messageText: "You have to accept cookies... 🍪",
  linkText: "More about cookies",
  linkUrl: "https://...",
  buttonText: "I accept !"
}
```

| Option          | Description                                                 | Type                           |
|-----------------|-------------------------------------------------------------|--------------------------------|
| **messageText** | This is the text of the consent banner                      | **String**                     |
| **linkText**    | This is the text of the link explaining more about cookies  | **String**                     |
| **linkUrl**     | This is the URL of the source explaining more about cookies | **String** - URL (https://...) |
| **buttonText**  | This is the text of the consent button                      | **String**                     |


## 👀 Demo
You can see [here](https://github.com/ThibaudArros/cookit/blob/master/demo.html) a demo of this plugin.
