---
layout: default
title: sample 
subtitle: There's lots to learn!
gh-repo: daattali/beautiful-jekyll
gh-badge: [star, fork, follow]
tags: [test]
comments: true
mathjax: true
author: Bill Smith

tabs:
  - title: Tab 1
    content: >
      This is the content for **Tab 1**. You can include HTML or Markdown here.
  - title: Tab 2
    content: >
      This is the content for **Tab 2**. Markdown is supported too!
  - title: Tab 3
    content: >
      Content for **Tab 3**. Add as many tabs as you want.
---



<div class="tab-container">
    <ul class="tabs">
      <li class="tab active" onclick="openTab(event, 'tab1')">Tab 1</li>
      <li class="tab" onclick="openTab(event, 'tab2')">Tab 2</li>
      <li class="tab" onclick="openTab(event, 'tab3')">Tab 3</li>
    </ul>

    <div id="tab1" class="tab-content active">
      <h2>Content for Tab 1</h2>
      <p>This is the content for the first tab.</p>
    </div>

    <div id="tab2" class="tab-content">
      <h2>Content for Tab 2</h2>
      <p>This is the content for the second tab.</p>
    </div>

    <div id="tab3" class="tab-content">
      <h2>Content for Tab 3</h2>
      <p>This is the content for the third tab.</p>
    </div>
  </div>

<script src="assets/js/beautifuljekyll.js"></script> <!-- Link to your JS file -->



# lala it's up to date 

### First tabs

<div class="tab-container">
  <ul class="tabs">
    <li class="tab active" onclick="openTab(event, 'tab1')">Tab 1</li>
    <li class="tab" onclick="openTab(event, 'tab2')">Tab 2</li>
    <li class="tab" onclick="openTab(event, 'tab3')">Tab 3</li>
  </ul>

  <div id="tab1" class="tab-content active">
    <h2>Content for Tab 1</h2>
    <p>This is the content for the first tab.</p>
  </div>

  <div id="tab2" class="tab-content">
    <h2>Content for Tab 2</h2>
    <p>This is the content for the second tab.</p>
  </div>

  <div id="tab3" class="tab-content">
    <h2>Content for Tab 3</h2>
    <p>This is the content for the third tab.</p>
  </div>
</div>

<script src="{{ 'assets/js/beautifuljekyll.js' | relative_url }}"></script>
<link rel="stylesheet" href="{{ 'assets/css/custom-styles.css' | relative_url }}">



# third way

<div class="tab-container">
  <!-- Generate Tab Headers -->
  <ul class="tabs">
    {% for tab in page.tabs %}
      <li class="tab {% if forloop.first %}active{% endif %}" onclick="openTab(event, 'tab{{ forloop.index }}')">
        {{ tab.title }}
      </li>
    {% endfor %}
  </ul>

  <!-- Generate Tab Contents -->
  {% for tab in page.tabs %}
    <div id="tab{{ forloop.index }}" class="tab-content {% if forloop.first %}active{% endif %}">
      {{ tab.content | markdownify }}
    </div>
  {% endfor %}
</div>

<script src="{{ 'assets/js/beautifuljekyll.js' | relative_url }}"></script>
<link rel="stylesheet" href="{{ 'assets/css/custom-styles.css' | relative_url }}">


<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

# TODO delete below  
{: .box-success}
This is a demo post to show you how to write blog posts with markdown.  I strongly encourage you to [take 5 minutes to learn how to write in markdown](https://markdowntutorial.com/) - it'll teach you how to transform regular text into bold/italics/tables/etc.<br/>I also encourage you to look at the [code that created this post](https://raw.githubusercontent.com/daattali/beautiful-jekyll/master/_posts/2020-02-28-sample-markdown.md) to learn some more advanced tips about using markdown in Beautiful Jekyll.

**Here is some bold text**

## Here is a secondary heading

[This is a link to a different site](https://deanattali.com/) and [this is a link to a section inside this page](#local-urls).

Here's a table:

| Number | Next number | Previous number |
| :------ |:--- | :--- |
| Five | Six | Four |
| Ten | Eleven | Nine |
| Seven | Eight | Six |
| Two | Three | One |

You can use [MathJax](https://www.mathjax.org/) to write LaTeX expressions. For example:
When \\(a \ne 0\\), there are two solutions to \\(ax^2 + bx + c = 0\\) and they are $$x = {-b \pm \sqrt{b^2-4ac} \over 2a}.$$

How about a yummy crepe?

![Crepe](https://beautifuljekyll.com/assets/img/crepe.jpg)

It can also be centered!

![Crepe](https://beautifuljekyll.com/assets/img/crepe.jpg){: .mx-auto.d-block :}

Here's a code chunk:

~~~
var foo = function(x) {
  return(x + 5);
}
foo(3)
~~~

And here is the same code with syntax highlighting:

```javascript
var foo = function(x) {
  return(x + 5);
}
foo(3)
```

And here is the same code yet again but with line numbers:

{% highlight javascript linenos %}
var foo = function(x) {
  return(x + 5);
}
foo(3)
{% endhighlight %}

## Boxes
You can add notification, warning and error boxes like this:

### Notification

{: .box-note}
**Note:** This is a notification box.

### Warning

{: .box-warning}
**Warning:** This is a warning box.

### Error

{: .box-error}
**Error:** This is an error box.

## Local URLs in project sites {#local-urls}

When hosting a *project site* on GitHub Pages (for example, `https://USERNAME.github.io/MyProject`), URLs that begin with `/` and refer to local files may not work correctly due to how the root URL (`/`) is interpreted by GitHub Pages. You can read more about it [in the FAQ](https://beautifuljekyll.com/faq/#links-in-project-page). To demonstrate the issue, the following local image will be broken **if your site is a project site:**

![Crepe](/assets/img/crepe.jpg)

If the above image is broken, then you'll need to follow the instructions [in the FAQ](https://beautifuljekyll.com/faq/#links-in-project-page). Here is proof that it can be fixed:

![Crepe]({{ '/assets/img/crepe.jpg' | relative_url }})