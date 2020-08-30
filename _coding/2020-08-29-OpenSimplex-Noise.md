---
layout: post
title: OpenSimplex noise
comments: false
---

(from wikipedia)

OpenSimplex noise is an n-dimensional gradient noise function that was developed in order to overcome the patent-related issues surrounding Simplex noise, while continuing to also avoid the visually-significant directional artifacts characteristic of Perlin noise.

The algorithm shares numerous similarities with Simplex noise, but has two primary differences:

* Whereas Simplex noise starts with a Hypercubic honeycomb and squashes it down the main diagonal in order to form its grid structure,[1] OpenSimplex noise instead swaps the skew and inverse-skew factors and uses a stretched hypercubic honeycomb. The stretched hypercubic honeycomb becomes a Simplectic honeycomb after subdivision.[2] This means that 2D Simplex and 2D OpenSimplex both use different orientations of the Triangular tiling, but whereas 3D Simplex uses the Tetragonal disphenoid honeycomb, 3D OpenSimplex uses the Tetrahedral-octahedral honeycomb.[2]

* OpenSimplex noise uses a larger kernel size than Simplex noise. The result is a smoother appearance at the cost of performance, as additional vertices need to be determined and factored into each evaluation.[2]

Below is the 4D OpenSimplex noise loop generated from Processing using 2014 [OpenSimplex Noise](https://gist.github.com/KdotJPG/b1270127455a94ac5d19) in Java by Kurt Spencer in amazing Coding Challenge #137 by Dan Shiffman.


![](/assets/coding/noiseloop.gif)

source code:

{% highlight java %}
int totalFrames = 360;
int counter = 0;
boolean record = false;
float increment = 0.03;
// Just for non-looping demo
float zoff = 0;
OpenSimplexNoise noise;
void setup() {
  size(640, 360);
  noise = new OpenSimplexNoise();
}
void draw() {
  float percent = 0;
  if (record) {
    percent = float(counter) / totalFrames;
  } else {
    percent = float(counter % totalFrames) / totalFrames;
  }
  render(percent);
  if (record) {
    saveFrame("output/gif-"+nf(counter, 3)+".png");
    if (counter == totalFrames-1) {
      exit();
    }
  }
  counter++;
}
void render(float percent) {
  float angle = map(percent, 0, 1, 0, TWO_PI);
  float uoff = map(sin(angle), -1, 1, 0, 2);
  float voff = map(sin(angle), -1, 1, 0, 2);
  float xoff = 0;
  loadPixels();
  for (int x = 0; x < width; x++) {
    float yoff = 0;
    for (int y = 0; y < height; y++) {
      float n;
      if (record) {
        // 4D Open Simplex Noise is very slow!
        n = (float) noise.eval(xoff, yoff, uoff, voff);
      } else {
        // If you aren't worried about looping run this instead for speed!
        n = (float) noise.eval(xoff, yoff, zoff);
      }
      float bright = n > 0 ? 255 : 0;
      //float bright = n*255;
      //float bright = map(n, -1, 1, 0, 255);
      pixels[x + y * width] = color(bright, bright, bright);
      yoff += increment;
    }
    xoff += increment;
  }
  updatePixels();
  zoff += increment;
}
{% endhighlight %}

change `record = true` to save snapshots and use ffmpeg to create gif

{% highlight bash %}
ffmpeg -f image2 -framerate 30 -i output/gif-%3d.png noiseloop.gif
{% endhighlight %}

<strong>References</strong>

[1] Ken Perlin, Noise hardware. In Real-Time Shading SIGGRAPH Course Notes (2001), Olano M., (Ed.).<br>
[2] [Spirit of Iron: Simplectic Noise](https://web.archive.org/web/20160529084209/http://www.spiritofiron.com:80/2015_01_01_archive.html) Michael Powell's blog.
