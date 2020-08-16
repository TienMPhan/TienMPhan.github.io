---
layout: post
title: Highlighting code block in Jekyll using highlight.js
comments: true
---

### Getting started

- Add highlight js and css of the color scheme you want in the header page. Either you can add cdn url as shown below or copy it in your project and give local path. This will find and all highlight the code inside of `<pre><code>` tags

```html
<link rel="stylesheet"
 href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.1.2/styles/atom-one-dark.min.css">
<script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.1.2/highlight.min.js"></script>
<script>hljs.initHighlightingOnLoad();</script>
```

- `highlight.js` provides many color schemes and all you have to do is choose the right css and refer its path.

- [Here](https://cdnjs.com/libraries/highlight.js/10.1.2) is the list of cdn links of all color schemes.

- [Here](https://github.com/highlightjs/highlight.js/tree/master/src/styles) is github link of all color schemes.



- Or you can [download](https://highlightjs.org/download/) and link the library along with one of the styles and calling `initHighlightingOnLoad`:

```html
<link rel="stylesheet" href="/path/to/styles/atom-one-dark.css">
<script src="/path/to/highlight.min.js"></script>
<script>hljs.initHighlightingOnLoad();</script>
```

and change the [highlightjs theme](https://highlightjs.org/static/demo/) in `_config.yml`:

```
highlightjs_theme: "atom-one-dark"
```

### Usage

- Put your code block between
  
  ```
  {% highlight your-language %}
  ...
  {% endhighlight %}
  ```

- Demo in javascript

{% highlight javascript %}
function demo(string, times) {
  for (var i = 0; i < times; i++) {
    console.log(string);
  }
}
demo("hello, world!", 10);
{% endhighlight %}

and `C++`

{% highlight c++ %}
#include <iostream>

int main() {
std::cout << "Hello World!" << std::endl;
}

{% endhighlight %}
