---
layout: post
title: Perlin noise
comments: true
---

(<em>from the Nature of Code 2 by Daniel Shiffman</em>)

Dan's fantastic [playlist](https://www.youtube.com/playlist?list=PLRqwX-V7Uu6bgPNQAdxQZpJuJCjeOr7VD) about Perlin noise.

A good random number generator produces numbers that have no relationship and show no discernible pattern. As we are beginning to see,
a little bit of randomness can be a good thing when programming organic, lifelike behaviors.
However, randomness as the single guiding principle is not necessarily natural.

There's an algorithm that results in more natural results, and that's known as “Perlin noise".
Ken Perlin developed the noise function while working on the original Tron movie in the early 1980s;
he used it to create procedural textures for computer-generated effects. In 1997, Perlin won an Academy Award in technical achievement for this work.
Perlin noise can be used to generate various effects with natural qualities, such as clouds, landscapes, and patterned textures like marble.

Perlin noise has a more organic appearance because it produces a naturally ordered (“smooth”) sequence of pseudo-random numbers.
The graph below shows Perlin noise over time, with the x-axis representing time; note the smoothness of the curve.

<script src="//toolness.github.io/p5.js-widget/p5-widget.js"></script>
<script type="text/p5" data-autoplay data-preview-width="400">
let time = 0;
function setup() {
	createCanvas(400, 200);
}
function draw() {
	background(255);
	let x = 0;
	while (x < width) {
		point(x, height * noise(x / 100, time));
		x++;
	}
	time += 0.01;
}
</script>

Contrastingly, the next graph below shows pure random numbers over time.

<script type="text/p5" data-autoplay data-preview-width="400">
function setup() {
	createCanvas(400, 200);
}
function draw() {
    background(255);
    frameRate(10);
    let x = 0;
    beginShape();
	while (x < width) {
		vertex(x, random(height));
		x++;
    }
    endShape();  
}
</script>

``P5.js`` has a built-in implementation of the Perlin noise algorithm: the function `noise()`. The `noise()` function takes one, two, or three arguments, as noise is computed in one, two, or three dimensions. Let’s start by looking at one-dimensional noise.

In order to access a particular noise value, a "moment in time", t, must be specified and passed to the `noise()` function. How quickly t increments also affects the smoothness of the noise. Large jumps in time that skip ahead through the noise space produce values that are less smooth, and more random.

![](/assets/coding/perlin_time_step.png)

<strong>Mapping Noise</strong>

Now it’s time to answer the question of what to do with the noise value. Once you have the
value with a range between 0 and 1, it’s up to you to map that range accordingly. The
easiest way to do this is with p5’s `map()` function. The `map()` function takes five arguments.
First is the value you want to map, in this case n . This is followed by the value’s current
range (minimum and maximum), followed by the desired range.

![](/assets/coding/perlin_map.png)

We should note that the noise function is deterministic: it gives you
the same result for a specific time t each and every time. In truth, there is no actual concept of time at play here.
It’s a useful metaphor to help us understand how the noise function works, but really what we have is space, rather than time.

<strong>2D Noise</strong>

This idea of noise values living in a one-dimensional space is important because it leads
right into a discussion of two-dimensional space. Think about this for a moment. With one-
dimensional noise, there is a sequence of values in which any given value is similar to its
neighbor. Because the values live in one dimension, each has only two neighbors: a value
that comes before it (to the left on the graph) and one that comes after it (to the right).

---

![](/assets/coding/noise1D.png) | ![](/assets/coding/noise2D.png)

Two-dimensional noise works exactly the same way conceptually. The difference of course
is that the values don't live along a linear path, but rather sit on a grid. Think of a piece of
graph paper with numbers written into each cell. A given value will be similar to all of its
neighbors: above, below, to the right, to the left, and along any diagonal.

<script type="text/p5" data-autoplay data-height="400" data-preview-width="400">
let inc = 0.01;
function setup() {
	createCanvas(250, 250);
	pixelDensity(1);
}
function draw() {
	let xoff = 0.0;
	loadPixels();
    for(let x = 0; x < width; x++) {
		let yoff = 0.0;
		for(let y = 0; y < height; y++){
			let bright = map(noise(xoff, yoff), 0, 1, 0, 255);
			let index = (x + y*width)*4;
			pixels[index] = 0;
			pixels[index+1] = 50;
			pixels[index+2] = bright;
			pixels[index+3] = bright;
			yoff += inc;
		}
		xoff += inc;
	}
	updatePixels();
	noLoop();
}
</script>
