---
layout: post
title: Publication Pages Using Jekyll Collections
comments: true
---

Jekyll collections are a great way to group and process pages of related content. I’m currently using collections to build my publications page and associated project pages. This post provides a short rundown how to implement something like this.

### Add a Collection
First of all, you need to add a collection to your Jekyll configuration file, <span style="color:maroon">`_config.yml`</span>. In this case, I aptly name it <span style="color:maroon">`publications`</span>:

```
collections:
  publications:
    output: true
    permalink: /:collection/:name
```

The <span style="color:maroon">`output: true`</span> option configures Jekyll to write a rendered page for each document in the collection. This will be the project page associated to each publication. The <span style="color:maroon">`permalink`</span> option configures the output path based on the base name of the document.

### Create an Example Document

Next, create a directory named <span style="color:maroon">`_publications`</span> to store one Markdown file for each publication. Each of these files will hold the publication meta-data such as title, authors, or where the work was published. In this example, I’m using the following dummy content and save it in a file named <span style="color:maroon">`mypub19.md`</span>:

```
---
layout: default
title: A New Method for Fancy Research
authors: John Doe and Mary Jane
publication: Journal of Fancy Research
year: 2019
doi: http://dx.doi.org/XX.XXX/
---
```

### Add a Publications Page

The next step is to create an overview page that lists all your publications. In my example, I simply call it <span style="color:maroon">`publications.html`</span> and use some basic Liquid loop to list all publications in reverse chronological order:


Admittedly, this looks rather dull, so let’s add at least some minimal CSS styling:
