---
layout: post
title: Apply Machine Learning
comments: true
---
(Machine Learning Coursera - Andrew Ng)

### <span style="color:red">**Evaluating a Hypothesis**</span>

Once we have done some trouble shooting for errors in our predictions by:

* Getting more training examples
* Trying smaller sets of features
* Trying additional features
* Trying polynomial features
* Increasing or decreasing $\lambda$

We can move on to evaluate our new hypothesis.

A hypothesis may have a low error for the training examples but still be inaccurate (because of over-fitting). Thus, to evaluate a hypothesis, given a dataset of training examples, we can split up the data into two sets: a training set and a test set. Typically, the training set consists of 70 % of your data and the test set is the remaining 30 %.

The new procedure using these two sets is then:
1. Learn $\Theta$ and minimize $J_{\rm train}(\Theta)$ using the training set,
2. Compute the test set error $J_{\rm test}(\Theta)$.

<span style="color:blue">**The test set error**</span>

1. For linear regression: $J_{\rm test}(\Theta) = \frac{1}{2m_{\rm test}} \sum_{i=1}^{m_{\rm test}} (h_{\Theta}(x_{\rm test}^{(i)}) - y_{\rm test}^{(i)})^2$,
2. For classification ~ mis-classification error (aka 0/1 mis-classification error):

$$err(h_\Theta(x),y) = \begin{matrix} 1 & \mbox{if } h_\Theta(x) \geq 0.5\ and\ y = 0\ or\ h_\Theta(x) < 0.5\ and\ y = 1\newline 0 & \mbox otherwise \end{matrix}$$

This gives us a binary 0 or 1 error result based on a mis-classification. The average test error for the test set is:

$$ {\rm Test Error} = \frac{1}{2m} \sum_{i=1}^{m_{\rm test}} err(h_{\Theta}(x_{\rm test}^{(i)}, y_{\rm test}^{(i)}))$$

This gives us the proportion of the test data that was mis-classified.

### <span style="color:red">**Model Selection and Train/Validation/Test Sets**</span>

Just because a learning algorithm fits a training set well, that does not mean it is a good hypothesis. It could over fit and as a result your predictions on the test set would be poor. The error of your hypothesis as measured on the data set with which you trained the parameters will be lower than the error on any other data set.

Given many models with different polynomial degrees, we can use a systematic approach to identify the 'best' function. In order to choose the model of your hypothesis, you can test each degree of polynomial and look at the error result.

One way to break down our dataset into the three sets is:

* Training set: 60%
* Cross validation set: 20%
* Test set: 20%

We can now calculate three separate error values for the three different sets using the following method:


1. Optimize the parameters in $\Theta$ using the training set for each polynomial degree.
2. Find the polynomial degree d with the least error using the cross validation set.
3. Estimate the generalization error using the test set with $J_{test}(\Theta^{(d)})$, ($d = \theta$ from the polynomial with lower error);


This way, the degree of the polynomial d has not been trained using the test set.

### <span style="color:red">**Diagnosing Bias vs. Variance**</span>

In this section we examine the relationship between the degree of the polynomial d and the underfitting or overfitting of our hypothesis.

* We need to distinguish whether bias or variance is the problem contributing to bad predictions.
* High bias is underfitting and high variance is overfitting. Ideally, we need to find a golden mean between these two.

The training error will tend to <span style="color: purple">**decrease**</span> as we increase the degree d of the polynomial.

At the same time, the cross validation error will tend to <span style="color: purple">**decrease**</span> as we increase d up to a point, and then it will <span style="color: purple">**increase**</span> as d is increased, forming a convex curve.

* High bias (underfitting): both $J_{\rm train}(\Theta)$ and $J_{\rm CV}(\Theta)$ will be high. Also, $J_{\rm CV}(\Theta) \approx J_{\rm train}(\Theta)$.
* High variance (overfitting): $J_{\rm train}(\Theta)$ will be low and $J_{\rm CV}(\Theta)$ will be much greater than $J_{\rm train}(\Theta)$.

The is summarized in the figure below:

<img src="/assets/ml/biased_variance.png">

### <span style="color:red">**Regularization and Bias/Variance**</span>

Instead of looking at the degree d contributing to bias/variance, now we will look at the regularization parameter $\lambda$.

* Large $\lambda$: High bias (underfitting)
* Intermediate $\lambda$: just right
* Small $\lambda$: High variance (overfitting)

A large lambda heavily penalizes all the $\Theta$ parameters, which greatly simplifies the line of our resulting function, so causes underfitting.

The relationship of $\lambda$ to the training set and the variance set is as follows:
* **<span style="color:green">Low</span>** $\lambda$: $J_{\rm train}(\Theta)$ is low and $J_{\rm CV}(\Theta)$ is high (high variance/overfitting).
* **<span style="color:green">Intermediate</span>** $\lambda$: $J_{\rm train}(\Theta)$ and $J_{\rm CV}(\Theta)$ are somewhat low and $J_{\rm CV}(\Theta) \approx J_{\rm train}(\Theta)$.
* **<span style="color:green">Large</span>** $\lambda$: both $J_{\rm train}(\Theta)$ and $J_{\rm CV}(\Theta)$ will be high (underfitting/high bias).

The figure below illustrates the relationship between lambda and the hypothesis:
<img src="/assets/ml/Features-and-polynom-degree-fix.png">

In order to choose the model and the regularization $\lambda$, we need:

1. Create a list of $\lambda$s (i.e. $\lambda \in$ {0, 0.01, 0.02, 0.04, 0.08, 0.16, 0.32, 0.64, 1.28, 2.56, 5.12, 10.24});
2. Create a set of models with different degrees or any other variants.
3. Iterate through the $\lambda$s and for each $\lambda$ go through all the models to learn some $\Theta$.
4. Compute the cross validation error using the learned $\Theta$ (computed with $\lambda$) on the $J_{\rm CV}(\Theta)$ without regularization or $\lambda = 0$.
5. Select the best combo that produces the lowest error on the cross validation set.
6. Using the best combo $\Theta$ and $\lambda$, apply it on $J_{\rm test}(\Theta)$ to see if it has a good generalization of the problem.

### <span style="color:red">**Learning Curves**</span>

Training $3$ examples will easily have $0$ errors because we can always find a quadratic curve that exactly touches $3$ points.

* As the training set gets larger, the error for a quadratic function increases.
* The error value will plateau out after a certain m, or training set size.

_<span style="color:blue">Experience high bias</span>_

* Low training set size: causes $J_{\rm train}(\Theta)$ to be low and $J_{\rm CV}(\Theta)$ to be high.
* Large training set size: causes both $J_{\rm train}(\Theta)$ and $J_{\rm CV}(\Theta)$ to be high $J_{\rm train}(\Theta) \approx J_{\rm CV}(\Theta)$.

If a learning algorithm is suffering from **high bias**, getting more training data **will not (by itself) help much**.

<img src="/assets/ml/highBias.png">

_<span style="color:blue"> Experience high variance</span>_

* **Low training set size**: $J_{\rm train}(\Theta)$ will be low and $J_{\rm CV}(\Theta)$ will be high.
* **Large training set size**: $J_{\rm train}(\Theta)$ increases with training set size and $J_{\rm CV}(\Theta)$ continues to decrease without leveling off. Also, $J_{\rm train}(\Theta) < J_{\rm CV}(\Theta)$ but the difference between them remains significant.

If a learning algorithm is suffering from high variance, getting more training data is likely to help.

<img src="/assets/ml/highVariance.png">

### <span style="color:red">**Deciding What to Do Next**</span>

Our decision process can be broken down as follows:

* **Getting more training examples** $\Rightarrow$ Fixes high variance
* **Trying smaller sets of features** $\Rightarrow$ Fixes high variance
* **Adding features** $\Rightarrow$ Fixes high bias
* **Adding polynomial features** $\Rightarrow$ Fixes high bias
* **Decreasing $\lambda$** $\Rightarrow$ Fixes high bias
* **Increasing $\lambda$** $\Rightarrow$ Fixes high variance.

Diagnosing Neural Networks
* A neural network with fewer parameters is prone to underfitting. It is also computationally cheaper.
* A large neural network with more parameters is prone to overfitting. It is also computationally expensive. In this case you can use regularization (increase $\lambda$) to address the overfitting.

Using a single hidden layer is a good starting default. You can train your neural network on a number of hidden layers using your cross validation set. You can then select the one that performs best.

Model Complexity Effects:

* Lower-order polynomials (low model complexity) have high bias and low variance. In this case, the model fits poorly consistently.
* Higher-order polynomials (high model complexity) fit the training data extremely well and the test data extremely poorly. These have low bias on the training data, but very high variance.
* In reality, we would want to choose a model somewhere in between, that can generalize well but also fits the data reasonably well.
