# Cookit
``⚠️ Not RGPD compliant anymore``<br>
👉 A jQuery plugin to add a cookies consent banner on a website.<br>
🚀 It only weighs 4Ko! 

## 🤔 About

### Tools
🐙 Github 💻 VS Code 🧰 jQuery

### Languages
🟠 HTML 🔵 CSS 🟡 JavaScript

## 📥 Getting started

### Prerequisites
Get the latest version of jQuery on [jquery.com](https://code.jquery.com).

### Installation
Download the following files:
* [cookit.css](https://github.com/ThibaudArros/cookit/blob/master/cookit.css)
* [cookit.js](https://github.com/ThibaudArros/cookit/blob/master/cookit.js)

## 📑 Usage

### Includes

#### Styles
```html
<link rel="stylesheet" href="path-to/cookit.css">
```

#### Scripts
```html
<!-- Inside the <head> -->
<script src="path-to/jquery.js"></script>
<!-- At the end of the <body> -->
<script src="path-to/cookit.js"></script>
```

### Call the plugin
```javascript
$(document).ready(function() {
    $.cookit();
});
```

## ⚙️ Settings
You can also pass some informations to the plugin.
```javascript
$(document).ready(function() {
    var options = {
        // Some options...
    };
    $.cookit(options);
});
```

### Global
```javascript
var options = {
    lifetime: 30
}
```

| Option        | Description                                            | Type                                                                             | Default  |
|---------------|--------------------------------------------------------|----------------------------------------------------------------------------------|----------|
| **lifetime** | Define the cookie lifetime (days)         | **int**                                                                      | *365*   |

### Style
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

### Content
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
You can see [here](https://thibaudarros.github.io/cookit/demo.html) a demo of this plugin.

***
**Made with 💛 by [Thibaud d'Arros](https://github.com/ThibaudArros)**
