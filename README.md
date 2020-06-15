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
        // Some options...
    };
    $.cookit(options);
});
```

## Change the style
```javascript
var options = {
    backgroundColor: '#fff',
    messageColor: '#000',
    linkColor: '#ffda10',
    buttonColor: '#ffda10'
}
```

| Option              | Description                                                 | Type                                                                   | Default     |
|---------------------|-------------------------------------------------------------|------------------------------------------------------------------------|-------------|
| **backgroundColor** | This is the background color of the cookie banner           | **String** - [CSS color](https://www.w3schools.com/colors/default.asp) | *"#1c1c1c"* |
| **messageColor**    | This is the color of the consent text                       | **String** - [CSS color](https://www.w3schools.com/colors/default.asp) | *"#fff"*    |
| **linkColor**       | This is the color of the link explaining more about cookies | **String** - [CSS color](https://www.w3schools.com/colors/default.asp) | *"#fad04c"* |
| **buttonColor**     | This is the background color of the consent button          | **String** - [CSS color](https://www.w3schools.com/colors/default.asp) | *"#fad04c"* |

*👉 For a beautiful banner, it is better when linkColor is identical to buttonColor...*


## Change the content
```javascript
var options = {
    messageText: "You have to accept cookies...",
    linkText: "More about cookies",
    linkUrl: "https://...",
    buttonText: "I accept !"
}
```

| Option          | Description                                                 | Type                        | Default                                                                                      |
|-----------------|-------------------------------------------------------------|-----------------------------|----------------------------------------------------------------------------------------------|
| **messageText** | This is the text of the consent banner                      | **String** (allow HTML tag) | *"<b>Do you hungry ?</b> 🍪 Pursuing navigation on this site, you accept the use of cookies."*  |
| **linkText**    | This is the text of the link explaining more about cookies  | **String**                  | *"Learn more"*                                                                               |
| **linkUrl**     | This is the URL of the source explaining more about cookies | **String** (URL)            | *"https://www.cookiesandyou.com"*                                                            |
| **buttonText**  | This is the text of the consent button                      | **String**                  | *"I accept"*                                                                                 |


## 👀 Demo
You can download [here](https://github.com/ThibaudArros/cookit/blob/master/demo.html) a demo of this plugin.
