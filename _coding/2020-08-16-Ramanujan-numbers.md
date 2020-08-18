---
layout: post
title: Checking Ramanujan numbers with 64-bit long integers
description: Algorithm for fast checking Ramanujan numbers.
comments: true
dependencies:
    - p5
---

When the English mathematician G. H. Hardy came to visit the Indian
mathematician Srinivasa Ramanujan one day in the hospital at Putney, Hardy remarked that the number of
his taxi was 1729, a rather dull number. To which Ramanujan replied, <em>No, Hardy! No, Hardy! It
is a very interesting number; it is the smallest number expressible as the sum of two cubes in two
different ways</em>.

<!-- <iframe width="640" height="480" src="https://www.youtube.com/embed/Qi4SDDjgHdU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->

{% youtube Qi4SDDjgHdU %}

An integer <em>n</em> is a <em>Ramanujan number</em> if can be expressed as the sum of two positive cubes in two
different ways. That is, there are four distinct positive integers <em>a, b, c</em>, and d such that $n = a^3 + b^3 = c^3 + d^3$.
For example, $1279 = 1^3 + 12^3 = 9^3 + 10^3$.

Write a program Ramanujan.java that takes a long integer command-line argument n and prints
true if it is a Ramanujan number, and false otherwise. To do so, organize your program
according to the following public API:

{% highlight java %}
public class Ramanujan {
	// Is n a Ramanujan number?
	public static boolean isRamanujan(long n)
	// Takes a long integer command-line arguments n and prints true if
	// n is a Ramanujan number, and false otherwise.
	public static void main(String[] args)
}
{% endhighlight %}

Here are a few sample executions:

```bash
~/Desktop/performance> java-introcs Ramanujan 1729
true
~/Desktop/performance> java-introcs Ramanujan 3458
false
~/Desktop/performance> java-introcs Ramanujan 4104
true
~/Desktop/performance> java-introcs Ramanujan 216125
true
~/Desktop/performance> java-introcs Ramanujan 9223278330318728221
true
```

<em>The program should take time proportional to n in the worst case. It should be fast enough to
process any 64-bit long integer in a fraction of a second.</em>

This is an interesting problem from <strong>Computer science: Program with a Purpose</strong> offered by Princeton University on Coursera.

A brute-force approach for this may be:

{% highlight java%}

public class Ramanujan {

    public static void main(String[] args) {

        // read in one command-line argument
        int n = Integer.parseInt(args[0]);

        // for each a, b, c, d, check whether a^3 + b^3 = c^3 + d^3
        for (int a = 1; a <= n; a++) {
            int a3 = a*a*a;
            if (a3 > n) break;

            // start at a to avoid print out duplicate
            for (int b = a; b <= n; b++) {
                int b3 = b*b*b;
                if (a3 + b3 > n) break;

                // start at a + 1 to avoid printing out duplicates
                for (int c = a + 1; c <= n; c++) {
                    int c3 = c*c*c;
                    if (c3 > a3 + b3) break;

                    // start at c to avoid printing out duplicates
                    for (int d = c; d <= n; d++) {
                        int d3 = d*d*d;
                        if (c3 + d3 > a3 + b3) break;

                        if (c3 + d3 == a3 + b3) {
                            System.out.print((a3+b3) + " = ");
                            System.out.print(a + "^3 + " + b + "^3 = ");
                            System.out.print(c + "^3 + " + d + "^3");
                            System.out.println();
                        }
                    }
                }
            }
        }
    }
}
{% endhighlight %}

Possible bugs: If a number can be expressed as a sum of cubes in more than two different ways, the program prints some duplicates.
Of course, it won't work with `long int`.

Since we are searching for intergers <em>a, b, c, and d</em> such that $n = a^3 + b^3 = c^3 + d^3$, we need only consider values for <em>n</em>
between 1 and $n^{1/3}$. For a given value of a, the only possible way to choose b to make $a^3 + b^3 = n$ is $b = (n - a^3)^{1/3}$. Based on this
hint, one possible solution is

{% highlight java%}
public class Ramanujan {
    // Is n a Ramanujan number?
    public static boolean isRamanujan(long n) {
        long i = 1;
        long j = (long) Math.ceil(Math.cbrt(n));
        int count = 0;
        long sum;
        while (i < j) {
            sum = i * i * i + j * j * j;
            if (sum > n) j--;
            else if (sum < n) i++;
            else {
                count++;
                i++;
            }
            if (count >= 2) break;
        }
        return count >= 2;
    }

    public static void main(String[] args) {
        long n = Long.parseLong(args[0]);
        System.out.println(isRamanujan(n));
    }
}
{% endhighlight %}


<!-- An implementation in javascript is below. Since `JavaScript` only support 53 bit integers, we cannot test 64 bit integers here! -->


<!-- <div id="sketch-holder">
    <script type="text/javascript" src="/assets/js/ramanujan-sketch.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.1.9/p5.js"></script>
</div> -->


<!-- <div id="sketch-holder"></div> -->
<!-- <p id="p5 sketch"></p> -->


<!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.1.9/p5.js"></script> -->

<!-- <script>

let textbox;
let output;

function setup() {
	noCanvas();
	createP("Enter your number!")
	textbox = createInput('0');
	output = createP('false');
	textbox.input(updateText);
}

function ramanujan(n) {
	let i = 1;
	let j = Math.ceil(Math.cbrt(n));
	let count = 0;
	let sum;
	while (i < j) {
		sum = i * i * i + j * j * j;
		if (sum > n) j--;
		else if (sum < n) i++;
		else {
			count++;
			i++;
		}
		if (count >= 2) break;
	}
	return (count >= 2);
}

function updateText() {
	let val = ramanujan(textbox.value());
	output.html(val);
}
</script> -->
