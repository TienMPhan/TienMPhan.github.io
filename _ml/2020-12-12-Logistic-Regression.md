---
layout: post
title: Logistic Regression
comments: true
---
(Machine Learning Coursera - Andrew Ng))

"Logistic Regression" is actually an approach to classification problems, not regression problems.

## Binary Classification

Instead of our output vector y being a continuous range of values, it will only be 0 or 1, $y \in [0,1]$.
Where 0 is usually taken as the "negative class" and 1 as the "positive class", but you are free to assign any representation to it.

We're only doing two classes for now, called a "Binary Classification Problem."

One method is to use linear regression and map all predictions greater than 0.5 as a 1 and all less than 0.5 as a 0. This method doesn't work well because classification is not actually a linear function.

## Hypothesis Representation

Our hypothesis should satisfy:

$$ 0 \le h_{\theta}(x) \le 1$$

Our new form uses the "sigmoid function", also called the "Logistic function":

$$h_{\theta}(x) = g(\theta^Tx)$$

$$z = \theta^Tx$$

$$g(z) = \frac{1}{1 + e^{-z}}$$

The function $g(z)$, shown here, maps any real number to the (0, 1) interval, making it useful for transforming an arbitrary-valued function into a function better suited for classification.

Plugging $\theta^Tx$ into the Logistic Function will restrict the the range to 0 and 1. $h_{\theta}$ will give us the __probability__ that our output is 1.

For example, $h_theta(x)=0.7$ gives the probability of 70% that our output is 1.

$$h_\theta(x) = P(y=1|x;\theta) = 1 - P(y=0|x;\theta)$$

$$P(y=0|x;\theta) + P(y=1|x;\theta) = 1$$

## Decision Boundary

In order to get our discrete 0 or 1 classification, we can translate the output of the hypothesis function as follows:

$$h_{\theta} \ge 0.5 \rightarrow y = 1$$

$$h_{\theta} < 0.5 \rightarrow y = 0$$

The way our logistic function g behaves is that when its input is greater than or equal to zero, its output is greater than or equal to 0.5: $g(z) \ge 0.5 \,\, if \,\, z > 0$

$$\theta^Tx \ge 0 \rightarrow y = 1$$

$$\theta^Tx < 0 \rightarrow y = 0$$

The __decision boundary__ is the line that separates the area where y = 0 and where y = 1. It is created by our hypothesis function. For example,

$$\theta = [5 \, -1 \, 0]$$

$$y = 1 \,\, if \,\, 5 + -x_1 + 0x_2 \ge 0 \Leftrightarrow x_1 \le 5$$

In this case, our decision boundary is a straight vertical line placed on the graph where $x_1 = 5$, and everything to the left of that denotes $y = 1$, while everything to the right denotes $y = 0$.
