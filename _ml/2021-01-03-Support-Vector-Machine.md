---
layout: post
title: Support Vector Machine (SVM)
comments: true
---
(Machine Learning Coursera - Andrew Ng)

### <span style="color:red">**Optimization Objective**</span>

The **Support Vector Machine** (SVM) is yet another type of supervised machine learning algorithm. It is sometimes cleaner and more powerful.

Recall that in logistic regression, we use the following rules:

if $y = 1$, then $h_{\theta}(x) \approx 1$ and $\Theta^{T}x \gg 0$,
if $y = 0$, then $h_{\theta}(x) \approx 0$ and $\Theta^{T}x \ll 0$.

Recall the cost function for (unregularized) logistic regression:

$$\begin{align*}J(\theta) & = \frac{1}{m}\sum_{i=1}^m -y^{(i)} \log(h_\theta(x^{(i)})) - (1 - y^{(i)})\log(1 - h_\theta(x^{(i)}))\\ & = \frac{1}{m}\sum_{i=1}^m -y^{(i)} \log\Big(\dfrac{1}{1 + e^{-\theta^Tx^{(i)}}}\Big) - (1 - y^{(i)})\log\Big(1 - \dfrac{1}{1 + e^{-\theta^Tx^{(i)}}}\Big)\end{align*}$$

To make a support vector machine, we will modify the first term of the cost function $-\log(h_{\theta}(x)) = -\log\Big(\dfrac{1}{1 + e^{-\theta^Tx}}\Big)$ so that when $\theta^{T}x$ (from now on, we shall refer to this as z) is **greater than** 1, it outputs 0. Furthermore, for values of z less than 1, we shall use a straight decreasing line instead of the sigmoid curve. (In the literature, this is called a [hinge loss](https://en.wikipedia.org/wiki/Hinge_loss) function.)

<img src="/assets/ml/firstTerm.png" style="width:400px">

Similarly, we modify the second term of the cost function $-\log(1 - h_{\theta(x)}) = -\log\Big(1 - \dfrac{1}{1 + e^{-\theta^Tx}}\Big)$ so that when $z$ is less than $-1$, it outputs $0$. We also modify it so that for values of $z$ greater than $-1$, we use a straight increasing line instead of the sigmoid curve.

<img src="/assets/ml/secondTerm.png" style="width:400px">

We shall denote these as $\text{cost}_1(z)$ and $\text{cost}_0(z)$ (respectively, note that $\text{cost}_1(z)$ is the cost for classifying when $y=1$, and $\text{cost}_0(z)$ is the cost for classifying when $y=0$), and we may define them as follows (where $k$ is an arbitrary constant defining the magnitude of the slope of the line):

$$z = \theta^{T}x$$

$$\text{cost}_0(x) = \rm max(0, k(1+z))$$

$$\text{cost}_1(x) = \rm max(0, k(1-z))$$

Recall the full cost function from (regularized) logistic regression:

$$J(\theta) = \frac{1}{m}\sum_{i=1}^m y^{(i)}(-\log(h_{\theta}(x^{(i)}))) + (1-y^{(i)})(-\log(1-h_{\theta}(x^{(i)}))) + \frac{\lambda}{2m}\sum_{j=1}^n\Theta^2_j$$

Note that the negative sign has been distributed into the sum in the above equation.

We may transform this into the cost function for support vector machines by substituting $\text{cost}_0(z)$ and $\text{cost}_1(z)$:

$$J(\theta) = \frac{1}{m}\sum_{i=1}^m y^{(i)}\text{cost}_1(\theta^{T}x^{(i)}) + (1-y^{(i)})\text{cost}_0(\theta^{T}x^{(i)}) + \frac{\lambda}{2m}\sum_{j=1}^n\Theta^2_j$$

We can optimize this a bit by multiplying this by $m$ (thus removing the m factor in the denominators). Note that this does not affect our optimization, since we're simply multiplying our cost function by a positive constant (for example, minimizing $(u-5)^2 + 1$  gives us 5; multiplying it by 10 to make it $10(u-5)^2 + 10$ still gives us $5$ when minimized).

$$J(\theta) = \sum_{i=1}^m y^{(i)}\text{cost}_1(\Theta^{T}x^{(i)}) + (1-y^{(i)})\text{cost}_0(\Theta^{T}x^{(i)}) + \frac{\lambda}{2}\sum_{j=1}^n\Theta^2_j$$

This is equivalent to multiplying the equation by $C = \dfrac{1}{\lambda}$, and thus results in the same values when optimized. Now, when we wish to regularize more (that is, reduce overfitting), we decrease $C$, and when we wish to regularize less (that is, reduce underfitting), we increase $C$.

Finally, note that the hypothesis of the Support Vector Machine is not interpreted as the probability of $y$ being $1$ or $0$ (as it is for the hypothesis of logistic regression). Instead, it outputs either $1$ or $0$. (In technical terms, it is a discriminant function.)

$$h_{\theta}(x)=\begin{cases} 1 & \rm if\,\, \Theta^{T}x \ge 0 \\ 0 & \rm otherwise \end{cases}$$

### <span style="color:red">**Large Margin Intuition**</span>

A useful way to think about Support Vector Machines is to think of them as *Large Margin Classifiers*.

* If $y=1$, we want $\Theta^Tx \geq 1$ (not just $\ge 0$)

* If $y=0$, we want $\Theta^Tx \leq -1$ (not just $<0$)

Now when we set our constant $C$ to a very **large** value (e.g. 100,000), our optimizing function will constrain $\Theta$ such that the equation A (the summation of the cost of each example) equals $0$. We impose the following constraints on $\Theta$:

$\Theta^{T}x \ge 1$ if $y=1$ and $\Theta^{T}x \le -1$ if $y=0$

If $C$ is very large, we must choose $\Theta$ parameters such that:

$$J(\theta) = \sum_{i=1}^m y^{(i)}\text{cost}_1(\Theta^{T}x^{(i)}) + (1-y^{(i)})\text{cost}_0(\Theta^{T}x^{(i)}) = 0$$

This reduces our cost function to:

$$\begin{align*}
J(\theta) = C \cdot 0 + \dfrac{1}{2}\sum_{j=1}^n \Theta^2_j \newline
= \dfrac{1}{2}\sum_{j=1}^n \Theta^2_j
\end{align*}$$

Recall the decision boundary from logistic regression (the line separating the positive and negative examples). In SVMs, the decision boundary has the special property that it is **as far away as possible** from both the positive and the negative examples.

The distance of the decision boundary to the nearest example is called the **margin**. Since SVMs maximize this margin, it is often called a *Large Margin Classifier*.

The SVM will separate the negative and positive examples by a **large margin**.

This large margin is only achieved when **C is very large**.

Data is **linearly separable** when a **straight line** can separate the positive and negative examples.

If we have **outlier** examples that we don't want to affect the decision boundary, then we can **reduce** C.

Increasing and decreasing C is similar to respectively decreasing and increasing $\lambda$, and can simplify our decision boundary.

### <span style="color:red">**Mathematics Behind Large Margin Classification**</span>

#### <span style="color:blue">**Vector Inner Product**</span>

Say we have two vectors, $u$ and $v$:
$$\begin{align*}
u =
\begin{bmatrix}
u_1 \newline u_2
\end{bmatrix}
& v =
\begin{bmatrix}
v_1 \newline v_2
\end{bmatrix}
\end{align*}$$

The length of vector $v$ is denoted $\|\|v\|\|$, and it describes the line on a graph from origin $(0,0)$ to $(v_1,v_2)$.

The length of vector v can be calculated with $\sqrt{v_1^2 + v_2^2}$ by the **Pythagorean** theorem.

The **projection** of vector $v$ onto vector $u$ is found by taking a right angle from $u$ to the end of $v$, creating a right triangle.

* $p$ = length of projection of $v$ onto the vector $u$.
* $u^{T}v=p.\lVert u\rVert$

Note that $u^{T}v=\lVert u \rVert.\lVert v \rVert \rm cos \theta$ where $\theta$ is the angle between $u$ and $v$. Also, $p=\lVert v \rVert \rm cos \theta$. If substitue $p$ for $\lVert v \rVert \rm cos \theta$, you get $u^{T}v = p.\lVert u \rVert$.

So the product $u^{T}v$ is equal to the length of the projection times the length of vector $u$.

In our example, since u and v are vectors of the same length, $u^Tv = v^Tu$.

$$u^Tv = v^Tu = p.\lVert u \rVert = u_1v_1 + u_2v_2$$

If the **angle** between the lines for $v$ and $u$ is **greater than 90 degrees**, then the projection $p$ will be **negative**.

$$\begin{align*}&\min_\Theta \dfrac{1}{2}\sum_{j=1}^n \Theta_j^2 \newline&= \dfrac{1}{2}(\Theta_1^2 + \Theta_2^2 + \dots + \Theta_n^2) \newline&= \dfrac{1}{2}(\sqrt{\Theta_1^2 + \Theta_2^2 + \dots + \Theta_n^2})^2 \newline&= \dfrac{1}{2}||\Theta ||^2 \newline\end{align*}$$

We can use the same rules to rewrite $\Theta^Tx^{(i)}$:

$$\Theta^Tx^{(i)} = p^{(i)}\lVert \Theta \rVert = \Theta_1x^{(i)}_1 + \Theta_2x^{(i)}_2 + ... + \Theta_nx^{(i)}_n$$

So we now have a new optimization objective by substituting $p^{(i)} \cdot \lVert \Theta \rVert$ in for $\Theta^Tx^{(i)}$:

* if $y = 1$, we want $p^{(i)} \cdot \lVert \Theta \rVert \ge 1$,
* if $y = 0$, we want $p^{(i)} \cdot \lVert \Theta \rVert \le -1$.

The reason this causes a "large margin" is because: the vector for $\Theta$ is perpendicular to the decision boundary. In order for our optimization objective (above) to hold true, we need the absolute value of our projections $p^{(i)}$ to be as large as possible.

If $\Theta_0 = 0$, then all our decision boundaries will intersect $(0,0)$. If $\Theta \ne 0$, the support vector machine will still find a large margin for the decision boundary.

#### <span style="color:blue">**Kernels I**</span>

**Kernels** allow us to make complex, non-linear classifiers using Support Vector Machines.

Given $x$, compute new feature depending on proximity to landmarks $l^{(1)},\, l^{(2)},\, l^{(3)}$.

To do this, we find the "similarity" of x and some landmark $l^{(i)}$:

$$f_i = {\rm similarity}(x, l^{(i)}) = \exp(-\frac{\lVert x - l^{(i)}\rVert^2}{2\sigma^2})$$

This "similarity" function is called a **Gaussian Kernel**. It is a specific example of a kernel.

The similarity function can also be written as follows:

$$f_i = {\rm similarity}(x, l^{(i)}) = \exp(-\frac{\sum_{j=1}^n (x_j - l^{(i)}_j)^2}{2\sigma^2})$$

There are a couple properties of the similarity function:

* If $x \approx l^{(i)}$, then $f_i = \exp(-\frac{\approx 0^2}{2\sigma^2}) \approx 1$.
* If $x$ is far from $l^{(i)}$, then $f_i = \exp(-\frac{({\rm large \, number})^2}{2\sigma^2}) \approx 0$.

In other words, if $x$ and the landmark are close, then the similarity will be close to $1$, and if $x$ and the landmark are far away from each other, the similarity will be close to $0$.

Each landmark gives us the features in our hypothesis:

$$\begin{align*}l^{(1)} \rightarrow f_1 \newline l^{(2)} \rightarrow f_2 \newline l^{(3)} \rightarrow f_3 \newline\dots \newline h_\Theta(x) = \Theta_1f_1 + \Theta_2f_2 + \Theta_3f_3 + \dots\end{align*}$$

$\sigma^2$ is a parameter of the Gaussian Kernel, and it can be modified to increase or decrease the **drop-off** of our feature $f_i$. Combined with looking at the values inside $\Theta$, we can choose these landmarks to get the general shape of the decision boundary.

#### <span style="color:blue">**Kernels II**</span>

One way to get the landmarks is to put them in the **exact same** locations as all the training examples. This gives us $m$ landmarks, with one landmark per training example.

Given example $x$:

$$f_1 = {\rm similarity}(x, l^{(1)}), \, f_2 = {\rm similarity}(x, l^{(2)}), \, f_3 = {\rm similarity}(x, l^{(3)})$$, and so on.

This gives us a "<span style="color:green">_feature vector_</span>", $f_{(i)}$ of all our features for example $x_{(i)}$. We may also set $f_0 = 1$ to correspond with $\Theta_0$. Thus given training example $x_{(i)}$:

$$x^{(i)} \rightarrow [f_1^{(i)} = {\rm similarity}(x^{(i)}, l^{(1)}), \, f_2^{(i)} = {\rm similarity}(x^{(i)}, l^{(2)}), \,... f_m^{(i)} = {\rm similarity}(x^{(i)}, l^{(m)})]$$

Now to get the parameters $\Theta$ we can use the SVM minimization algorithm but with $f^{(i)}$ substituted for $x^{(i)}$:

$${\rm min_{\Theta}} \, C \sum_{i=1}^m y^{(i)} {\rm cost}_1(\Theta^Tf^{(i)}) + (1-y^{(i)}){\rm cost}_0(\Theta^Tf^{(i)})+\frac{1}{2}\sum_{j=1}^n\Theta_j^2$$

Using kernels to generate $f(i)$ is not exclusive to SVMs and may also be applied to logistic regression. However, because of computational optimizations on SVMs, kernels combined with SVMs is much faster than with other algorithms, so kernels are almost always found combined only with SVMs.

**Choosing SVM Parameters**

Choosing $C$ ($\rm C = 1/\lambda$):
* If C is large, then we get higher variance/lower bias.
* If C is small, then we get lower variance/higher bias.

The other parameter we must choose is $\sigma^2$ from the Gaussian Kernel function:

* With a large $\sigma^2$, the features $f_i$ vary more smoothly, causing higher bias and lower variance.
* With a small $\sigma^2$, the features $f_i$ vary less smoothly, causing lower bias and higher variance.

**Using An SVM**

There are lots of good SVM libraries already written. A. Ng often uses `liblinear` and `libsvm`. In practical application, you should use one of these libraries rather than rewrite the functions.

In practical application, the choices you do need to make are:

* Choice of parameter $C$,
* Choice of kernel (similarity function),
* No kernel ("linear" kernel) -- gives standard linear classifier,
* Choose when n is large and when m is small,
* Gaussian Kernel (above) -- need to choose $\sigma^2$,
* Choose when n is small and m is large.

The library may ask you to provide the kernel function.

>Note: do perform feature scaling before using the Gaussian Kernel.

>Note: not all similarity functions are valid kernels. They must satisfy "Mercer's Theorem" which guarantees that the SVM package's optimizations run correctly and do not diverge.


**Mercer’s Theorem**:

>According to Mercer’s theorem, if a function $K(a, b)$ respects a few mathematical con‐
ditions called Mercer’s conditions (e.g., $K$ must be continuous and symmetric in its
arguments so that $K(a, b) = K(b, a)$, etc.), then there exists a function φ that maps a
and b into another space (possibly with much higher dimensions) such that $K(a, b) =
\phi(a)^T \phi(b)$. You can use $K$ as a kernel because you know $\phi$ exists, even if you don’t know what $\phi$ is. In the case of the Gaussian RBF kernel, it can be shown that $\phi$ maps each training instance to an infinite-dimensional space, so it’s a good thing you don’t need to actually perform the mapping!<br>
Note that some frequently used kernels (such as the sigmoid kernel) don’t respect all
of Mercer’s conditions, yet they generally work well in practice.

You want to train C and the parameters for the kernel function using the training and <span style="color:green">*cross-validation datasets*</span>.

### <span style="color: purple">**Review Questions**</span>

**Q1**. What is the fundamental idea behind SVMs?

>The fundamental idea behind Support Vector Machines is to fit the **widest possible** “street” between the classes. In other words, the goal is to have the *largest possible margin* between the decision boundary that separates the two classes and the training instances. When performing soft margin classification, the SVM searches for a compromise between perfectly separating the two classes and having the widest possible street (i.e., a few instances may end up on the street). Another key idea is to use kernels when training on nonlinear datasets.

**Q2**. What is a support vector?

>After training an SVM, a **support vector** is any instance located on the “street” (see
the previous answer), including its border. The decision boundary is entirely
determined by the support vectors. Any instance that is not a support vector (i.e.,
is off the street) has no influence whatsoever; you could remove them, add more
instances, or move them around, and as long as they stay off the street they won’t
affect the decision boundary. Computing the predictions only involves the support vectors, not the whole training set.

**Q3**. Why is it important to scale the inputs when using SVMs?

>SVMs try to fit the largest possible “street” between the classes (see the first
answer), so if the training set is not scaled, the SVM will tend to neglect small
features.

**Q4**. Can an SVM classifier output a confidence score when it classifies an instance? What about a probability?

>If the optimization problem is convex (such as Linear Regression or Logistic
Regression), and assuming the learning rate is not too high, then all Gradient
Descent algorithms will approach the global optimum and end up producing
fairly similar models. However, unless you gradually reduce the learning rate,
Stochastic GD and Mini-batch GD will never truly converge; instead, they will
keep jumping back and forth around the global optimum. This means that even
if you let them run for a very long time, these Gradient Descent algorithms will
produce slightly different models.

**Q5**. Should you use the primal or the dual form of the SVM problem to train a model on a training set with millions of instances and hundreds of features?

>If the validation error consistently goes up after every epoch, then one possibility
is that the learning rate is too high and the algorithm is diverging. If the training
error also goes up, then this is clearly the problem and you should reduce the
learning rate. However, if the training error is not going up, then your model is
over-fitting the training set and you should stop training.
