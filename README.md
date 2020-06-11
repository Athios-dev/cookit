# cookit
A jQuery plugin to add a cookies consent banner on a website. It is only weighs 4Ko ! 

## 📥 Getting started
Download [cookit.js](https://github.com/ThibaudArros/cookit/blob/master/cookit.js) (3Ko) and [cookit.css](https://github.com/ThibaudArros/cookit/blob/master/cookit.css) (1Ko)

## 📑 Usage
### Include jQuery
Get the last version of jQuery on [jquery.com](https://code.jquery.com).

### Include cookit.css and cookit.js
```html
<link rel="stylesheet" href="cookit.css">
<script src="cookit.js" async defer></script>
```

### Call the plugin
```javascript
$(document).ready(function() {
  $.cookit();
});
```

## ⚙️ Options
You can also pass some information to the plugin.
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

| Option              | Description                                                    | Type                                           |
|---------------------|----------------------------------------------------------------|------------------------------------------------|
| **backgroundColor** | This is the background color of the cookie banner              | **String** representing a color (hexa, rgb...) |
| **messageColor**    | This is the color of the consent text                          | **String** representing a color (hexa, rgb...) |
| **linkColor**       | This is the color of the link which explain more about cookies | **String** representing a color (hexa, rgb...) |
| **buttonColor**     | This is the background color of the consent button             | **String** representing a color (hexa, rgb...) |

*👉 For a beautiful banner, it is better when linkColor is same as the buttonColor...*


## Change the content
```javascript
var options = {
  messageText: "Your new cookie text 🍪",
  linkText: "More about cookies",
  linkUrl: "A link to explain more about cookies",
  buttonText: "Text of cookies consent button"
}
```

| Option          | Description                                                    | Type                                         |
|-----------------|----------------------------------------------------------------|----------------------------------------------|
| **messageText** | This is the background color of the cookie banner              | **String**                                   |
| **linkText**    | This is the color of the consent text                          | **String**                                   |
| **linkUrl**     | This is the color of the link which explain more about cookies | **String** representing a URL (https://...)  |
| **buttonText**  | This is the background color of the consent button             | **String**                                   |


## 👀 Demo
You can see Get the last version of jQuery on [here](https://code.jquery.com) a demo of this plugin.
