---
layout: page
title: Archive
permalink: /archive/
---
<!-- <ul>
{% for post in site.posts %}
{% unless post.next %}
<h3>{{ post.date | date: '%Y' }}</h3>
{% else %}
{% capture year %}{{ post.date | date: '%Y' }}{% endcapture %}
{% capture nyear %}{{ post.next.date | date: '%Y' }}{% endcapture %}
{% if year != nyear %}
<br>
<h3>{{ post.date | date: '%Y' }}</h3>
{% endif %}
{% endunless %}
<time>{{ post.date | date:"%d %b" }}</time>&nbsp;&nbsp;&nbsp;<a href="{{ post.url }}">{{ post.title }}</a><br>
{% endfor %}
</ul> -->


<div class="posts">
<h2>Tech</h2>
<ul>

  {% for post in site.posts %}
    {% unless post.next %}
      <h3>{{ post.date | date: '%Y' }}</h3>
    {% else %}
      {% capture year %}{{ post.date | date: '%Y' }}{% endcapture %}
      {% capture nyear %}{{ post.next.date | date: '%Y' }}{% endcapture %}
      {% if year != nyear %}
        <br>
        <h3>{{ post.date | date: '%Y' }}</h3>
      {% endif %}
    {% endunless %}
    <time>{{ post.date | date:"%d %b" }}</time>&nbsp;&nbsp;&nbsp;<a href="{{ post.url }}">{{ post.title }}</a><br>
  {% endfor %}
</ul>
</div>

<div class="ml">
<h2>Machine Learning</h2>
<ul>
  {% assign mlposts = site.ml | sort: 'date' | reverse %}
  {% for post in mlposts %}
    {% unless post.next %}
      <h3>{{ post.date | date: '%Y' }}</h3>
    {% else %}
      {% capture year %}{{ post.date | date: '%Y' }}{% endcapture %}
      {% capture nyear %}{{ post.next.date | date: '%Y' }}{% endcapture %}
      {% if year != nyear %}
        <br>
        <h3>{{ post.date | date: '%Y' }}</h3>
      {% endif %}
    {% endunless %}
    <time>{{ post.date | date:"%d %b" }}</time>&nbsp;&nbsp;&nbsp;<a href="{{ post.url }}">{{ post.title }}</a><br>
  {% endfor %}
</ul>
</div>

<div class="mindset">
<h2>Mindset</h2>

<ul>
  {% assign mindsetposts = site.mindset | sort: 'date' | reverse %}
  {% for post in mindsetposts %}
    {% unless post.next %}
      <h3>{{ post.date | date: '%Y' }}</h3>
    {% else %}
      {% capture year %}{{ post.date | date: '%Y' }}{% endcapture %}
      {% capture nyear %}{{ post.next.date | date: '%Y' }}{% endcapture %}
      {% if year != nyear %}
        <br>
        <h3>{{ post.date | date: '%Y' }}</h3>
      {% endif %}
    {% endunless %}
    <time>{{ post.date | date:"%d %b" }}</time>&nbsp;&nbsp;&nbsp;<a href="{{ post.url }}">{{ post.title }}</a><br>
  {% endfor %}

</ul>
</div>

<div class="research">
<h2>Research</h2>

<ul>
  {% assign researchposts = site.research | sort: 'date' | reverse %}
  {% for post in researchposts %}
    {% unless post.next %}
      <h3>{{ post.date | date: '%Y' }}</h3>
    {% else %}
      {% capture year %}{{ post.date | date: '%Y' }}{% endcapture %}
      {% capture nyear %}{{ post.next.date | date: '%Y' }}{% endcapture %}
      {% if year != nyear %}
        <br>
        <h3>{{ post.date | date: '%Y' }}</h3>
      {% endif %}
    {% endunless %}
    <time>{{ post.date | date:"%d %b" }}</time>&nbsp;&nbsp;&nbsp;<a href="{{ post.url }}">{{ post.title }}</a><br>
  {% endfor %}

</ul>
</div>

<div class="coding">
<h2>Coding</h2>

<ul>
  {% assign codingposts = site.coding | sort: 'date' | reverse %}
  {% for post in codingposts %}
    {% unless post.next %}
      <h3>{{ post.date | date: '%Y' }}</h3>
    {% else %}
      {% capture year %}{{ post.date | date: '%Y' }}{% endcapture %}
      {% capture nyear %}{{ post.next.date | date: '%Y' }}{% endcapture %}
      {% if year != nyear %}
        <br>
        <h3>{{ post.date | date: '%Y' }}</h3>
      {% endif %}
    {% endunless %}
    <time>{{ post.date | date:"%d %b" }}</time>&nbsp;&nbsp;&nbsp;<a href="{{ post.url }}">{{ post.title }}</a><br>
  {% endfor %}

</ul>
</div>
