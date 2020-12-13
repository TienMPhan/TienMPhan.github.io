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

### Cost Function

The cost function for logistic regression looks like:

$$\begin{align*}& J(\theta) = \dfrac{1}{m} \sum_{i=1}^m \mathrm{C}(h_\theta(x^{(i)}),y^{(i)}) \newline & \mathrm{C}(h_\theta(x),y) = -\log(h_\theta(x)) \; & \text{if y = 1} \newline & \mathrm{C}(h_\theta(x),y) = -\log(1-h_\theta(x)) \; & \text{if y = 0}\end{align*}$$

The more our hypothesis is off from $y$, the larger the cost function output. If our hypothesis is equal to $y$, then our cost is 0:

$$\begin{align*}& \mathrm{C}(h_\theta(x),y) = 0 \text{  if  } h_\theta(x) = y \newline & \mathrm{C}(h_\theta(x),y) \rightarrow \infty \text{  if  } y = 0 \; \mathrm{and} \; h_\theta(x) \rightarrow 1 \newline & \mathrm{C}(h_\theta(x),y) \rightarrow \infty \text{  if  } y = 1 \; \mathrm{and} \; h_\theta(x) \rightarrow 0 \newline \end{align*}$$

- If our correct answer '$y$' is 0, then the cost function will be 0 if our hypothesis function also outputs 0. If our hypothesis approaches 1, then the cost function will approach infinity.

- If our correct answer '$y$' is 1, then the cost function will be 0 if our hypothesis function outputs 1. If our hypothesis approaches 0, then the cost function will approach infinity.

Note that writing the cost function in this way guarantees that $J(\theta)$ is convex for logistic regression.

### Simplified Cost Function and Gradient Descent

The cost function can be written in a simplified form:

$C(h_\theta(x), y) = -y \log (h_\theta(x)) - (1-y) \log(1 - h_\theta(x))$.

We can fully write out our entire cost function as follows:

$J(\theta) = -\frac{1}{m} \sum_{i=1}^m[y^{(i)}\log(h_\theta(x^{(i)})) + (1-y^{(i)})\log(1-h_\theta(x^{(i)}))]$

A vectorized implementation is:

$$\begin{align*}
& h = g(X\theta)\newline
& J(\theta)  = \frac{1}{m} \cdot \left(-y^{T}\log(h)-(1-y)^{T}\log(1-h)\right)
\end{align*}$$

**Gradient Descent**

Repeat {

$ \theta_j := \theta_j - \frac{\alpha}{m}\sum_{i=1}^m (h_\theta(x^{(i)}) - y^{(i)})x_j^{(i)} $

}

Notice that this algorithm is identical to the one we used in linear regression. We still have to simultaneously update all values in theta.

A vectorized implementation is:

$\theta = \theta - \frac{\alpha}{m}X^T(g(X\theta) - \vec{y})$

**Partial derivative of $J(\theta)$**

$\frac{\partial}{\partial \theta_j} J(\theta) = \frac{1}{m}\sum_{i=1}^m(h_\theta(x^{(i)}) - y^{(i)})x_j^{(i)}$

The vectorized version:

$\nabla J(\theta) = \frac{1}{m} X^T.(g(X.\theta)-\vec{y})$

### Advanced Optimization

"Conjugate gradient", "BFGS", and "L-BFGS" are more sophisticated, faster ways to optimize θ that can be used instead of gradient descent. A. Ng suggests not to write these more sophisticated algorithms yourself (unless you are an expert in numerical computing) but use the libraries instead, as they're already tested and highly optimized. Octave provides them.

We first need to provide a function that evaluates the following two functions for a given input value $\theta$:

$J(\theta)$ and $\frac{\partial}{\partial \theta_j}J(\theta)$

We can write a single function that returns both of these:

{% highlight matlab %}
function [jVal, gradient] = costFunction(theta)
  jVal = [...code to compute J(theta)...];
  gradient = [...code to compute derivative of J(theta)...];
end
{% endhighlight%}

Then we can use octave's "fminunc()" optimization algorithm along with the "optimset()" function that creates an object containing the options we want to send to "fminunc()"

{% highlight matlab %}
options = optimset('GradObj', 'on', 'MaxIter', 100);
      initialTheta = zeros(2,1);
      [optTheta, functionVal, exitFlag] = fminunc(@costFunction, initialTheta, options);

{% endhighlight%}

We give to the function "fminunc()" our cost function, our initial vector of theta values, and the "options" object that we created beforehand.
