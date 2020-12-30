---
layout: post
title: Publication Pages Using Jekyll Collections
comments: true
---

Jekyll collections are a great way to group and process pages of related content. I’m currently using collections to build my publications page and associated project pages. This post provides a short rundown how to implement something like this.

### Add a Collection
First of all, you need to add a collection to your Jekyll configuration file, <span style="color:orange">`_config.yml`</span>. In this case, I aptly name it <span style="color:orange">`publications`</span>:

```
collections:
  publications:
    output: true
    permalink: /:collection/:name
```

The <span style="color:orange">`output: true`</span> option configures Jekyll to write a rendered page for each document in the collection. This will be the project page associated to each publication. The <span style="color:orange">`permalink`</span> option configures the output path based on the base name of the document.
