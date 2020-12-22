---
layout: post
title: Combinations and Permutations
comments: true
---

*This interesting article from [Math is fun!](https://www.mathsisfun.com/combinatorics/combinations-permutations.html)*

### What's the Difference?

In English we use the word "combination" loosely, without thinking if the order of things is important. In other words:

>"**My fruit salad is a combination of apples, grapes and bananas**" We don't care what order the fruits are in, they could also be "bananas, grapes and apples" or "grapes, apples and bananas", its the same fruit salad.

>"**The combination to the safe is 472**". Now we do care about the order. "724" won't work, nor will "247". It has to be exactly **4-7-2**.

So, in Mathematics we use more precise language:
* When the order doesn't matter, it is a <span style="color:blue">**Combination**</span>.
* When the order does matter it is a <span style="color:blue">**Permutation**</span>.

> To help you to remember, think "Permutation ... Position"

### <span style="color:red">**Permutations**</span>

There are basically two types of permutation:

* Repetition is Allowed: such as the lock above. It could be "333".
* No Repetition: for example the first three people in a running race. You can't be first and second.

<span style="color:blue">**1. Permutations with Repetition**</span>

These are the easiest to calculate.

When a thing has **n** different types ... we have **n** choices each time!

For example: choosing **3** of those things, the permutations are:

>**n × n × n**
(n multiplied 3 times)

More generally: choosing r of something that has n different types, the permutations are:

>**n × n × ... (r times)**

(In other words, there are n possibilities for the first choice, THEN there are n possibilites for the second choice, and so on, multplying each time.)

Which is easier to write down using an exponent of r:

>**n × n × ... (r times) = $n^r$**


 >   Example: in the lock above, there are 10 numbers to choose from (0,1,2,3,4,5,6,7,8,9) and we choose 3 of them:
 >   10 × 10 × ... (3 times) = $10^3$ = 1,000 permutations


<span style="color:blue">**2. Permutations without Repetition**</span>