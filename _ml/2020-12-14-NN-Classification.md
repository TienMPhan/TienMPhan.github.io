---
layout: post
title: Neuron Networks - Classification
comments: true
---
### Cost Function

Let's first define a few variables that we will need to use:

- $L$ = total number of layers in the network,
- $s_l$ = number of units (not counting bias unit) in layer $l$,
- $K$ = number of output units/classes.

Recall that in neural networks, we may have many output nodes. We denote $h_\Theta(x)_k$ as being a hypothesis that results in the $k^{th}$ output. Our cost function for neural networks is going to be a generalization of the one we used for logistic regression. Recall that the cost function for regularized logistic regression was:

$J(\theta) = -\frac{1}{m} \sum_{i=1}^m[y^{(i)}\log(h_\theta(x^{(i)})) + (1-y^{(i)})\log(1-h_\theta(x^{(i)}))] + \frac{\lambda}{2m}\sum_{j=1}^n\theta_j^2$

For neural networks, it is going to be slightly more complicated:

$$\begin{gather*} J(\Theta) = - \frac{1}{m} \sum_{i=1}^m \sum_{k=1}^K \left[y^{(i)}_k \log ((h_\Theta (x^{(i)}))_k) + (1 - y^{(i)}_k)\log (1 - (h_\Theta(x^{(i)}))_k)\right] + \newline + \frac{\lambda}{2m}\sum_{l=1}^{L-1} \sum_{i=1}^{s_l} \sum_{j=1}^{s_{l+1}} ( \Theta_{j,i}^{(l)})^2\end{gather*}$$

We have added a few *nested* summations to account for our *multiple* output nodes. In the first part of the equation, before the square brackets, we have an additional nested summation that loops through the number of output nodes.

In the regularization part, after the square brackets, we must account for **multiple theta matrices**. The number of columns in our current theta matrix is equal to the number of nodes in our current layer (including the bias unit). The number of rows in our current theta matrix is equal to the number of nodes in the next layer (excluding the bias unit). As before with logistic regression, we square every term.

Note:

- the double sum simply adds up the logistic regression costs calculated for each cell in the output layer

- the triple sum simply adds up the squares of all the individual $\Theta$s in the entire network

- the i in the triple sum does not refer to training example $i$

### Backpropagation Algorithm

"**Backpropagation**" is neural-network terminology for minimizing our cost function, just like what we were doing with gradient descent in logistic and linear regression. Our goal is to compute: ${\rm min}_\Theta J(\Theta)$.

That is, we want to minimize our cost function J using an optimal set of parameters in theta. In this section we'll look at the equations we use to compute the partial derivative of $J(\Theta)$:

$\frac{\partial}{\partial \Theta_{i,j}^{(l)}} J(\Theta)$

In back propagation we're going to compute for every node: $\delta_j^{(l)} =$ "error" of node $j$ in layer $l$. Recall that $a_j^{(l)}$ is the activation node $j$ in layer $l$.

For the last layer, we can compute the vector of delta values with: $\delta^{(L)} = a^{(L)} - y$,


Given the training set ${(x^{(1)}, y^{(1)}), (x^{(m)}, y^{(m)})}$

* Set $\Delta_{i,j}^{(l)} := 0$ for all $(l, i, j)$, (hence you end up having a matrix full of zeros).

For training example $t = 1$ to $m$:
1. Set $a^{(1)} := x^{(t)}$
2. Perform forward propagation to compute $a^{(l)}$ for $l = 2, 3, ...L$.
		![](/assets/ml/gradient_comp.png)
3. Using $y^{(t)}$, compute $\delta^{(l)} = a^{(l)} - y^{(t)}$
where $L$ is our total number of layers and $a^{(L)}$ is the vector of outputs of the activation units for the last layer. So our "error values" for the last layer are simply the differences of our actual results in the last layer and the correct outputs in $y$. To get the delta values of the layers before the last layer, we can use an equation that steps us back from right to left:
4. Compute $\delta^{(L-1)}$, $\delta^{(L-2)}$,...,$\delta^{(2)}$, using

    $$\delta^{(l)} = (\Theta^{(l)T}\delta^{(l+1)}).* a^{(l)}.* (1-a^{(l)})$$

    The delta values of layer $l$ are calculated by multiplying the delta values in the next layer with the theta matrix of layer $l$. We then element-wise multiply that with a function called $g^{\prime}$, or g-prime, which is the derivative of the activation function g evaluated with the input values given by $z^{(l)}$. The g-prime derivative terms can also be written out as:

    $$g^{\prime}(z^{(l)}) = a^{(l)} .* (1 - a^{(l)})$$

5. $\Delta_{i,j}^{(l)} = \Delta_{i,j}^{(l)} + a_j^{(l)}\delta_i^{(l+1)}$ or vectorization, $\Delta^{(l)} = \Delta^{(l)} + \delta^{(l+1)}a^{(l)T}$

Hence we update the new matrix $\Delta$

* $D_{i,j}^{(l)} := \frac{1}{m}(\Delta_{i,j}^{(l)} + \lambda\Theta^{(l)}_{i,j})$ if $j \ne 0$.
* $D_{i,j}^{(l)} := \frac{1}{m}\Delta_{i,j}^{(l)}$ if $j = 0$

The capital-delta matrix $D$ is used as an "accumulator" to add up our values as we go along and eventually compute our partial derivative. Thus we get $\frac{\partial}{\partial \Theta_{i,j}^{(l)}}J(\Theta) = D_{ij}^{(l)}$.
