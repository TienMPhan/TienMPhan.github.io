---
layout: post
title: Neuron Networks
comments: true
---
(Machine Learning Coursera - Andrew Ng)

### Model Representation

 At a very simple level, neurons are basically computational units that take inputs (__dendrites__) as electrical inputs (called "__spikes__") that are channeled to outputs (__axons__). In a ML model, our dendrites are like the input features $x_1 ... x_n$ and the output is the result of our hypothesis function. In this model, $x_0$ input node is sometimes called the "__biased__ unit", it is always equal to 1. In neural networks, we use the same logistic function as in classification, $\frac{1}{1 + e^{-\theta^Tx}}$, yet we sometimes call it a sigmoid (logistic) __activation__ function. In this situation, our "theta" parameters are sometimes called "__weights__".

Visually, a simplistic representation looks like:

$[x_0 x_1 x_2] \longrightarrow [\,\,] \longrightarrow h_\theta(x)$

Our input nodes (layer 1), also known as the "input layer", go into another node (layer 2), which finally outputs the hypothesis function, known as the "output layer". We can have intermediate layers of nodes between the input and output layers called the "hidden layers." In this example, we label these intermediate or "hidden" layer nodes $a_0^{(2)}...a_n^{(2)}$ and call them "activation units."

$a_i^{(j)}$ = "activation" of unit i in layer j

$\Theta^(j)$ = matrix of weights controlling function mapping from layer $j$ to layer $j+1$

If we had one hidden layer, it would look like:

$[x_0 x_1 x_2] \longrightarrow [a_1^{(2)}a_2^{(2)}a_3^{(2)}] \longrightarrow h_\theta(x)$

The values for each of the activation nodes is obtained as follows:

$$\begin{align*} a_1^{(2)} = g(\Theta_{10}^{(1)}x_0 + \Theta_{11}^{(1)}x_1 + \Theta_{12}^{(1)}x_2 + \Theta_{13}^{(1)}x_3) \newline a_2^{(2)} = g(\Theta_{20}^{(1)}x_0 + \Theta_{21}^{(1)}x_1 + \Theta_{22}^{(1)}x_2 + \Theta_{23}^{(1)}x_3) \newline a_3^{(2)} = g(\Theta_{30}^{(1)}x_0 + \Theta_{31}^{(1)}x_1 + \Theta_{32}^{(1)}x_2 + \Theta_{33}^{(1)}x_3) \newline h_\Theta(x) = a_1^{(3)} = g(\Theta_{10}^{(2)}a_0^{(2)} + \Theta_{11}^{(2)}a_1^{(2)} + \Theta_{12}^{(2)}a_2^{(2)} + \Theta_{13}^{(2)}a_3^{(2)}) \newline \end{align*}$$

This is saying that we compute our activation nodes by using a 3×4 matrix of parameters. We apply each row of the parameters to our inputs to obtain the value for one activation node. Our hypothesis output is the logistic function applied to the sum of the values of our activation nodes, which have been multiplied by yet another parameter matrix $\Theta^{(2)}$ containing the weights for our second layer of nodes. Each layer has its own matrix of weights, $\Theta^{(j)}$.

If the network has $s_j$ units in layer $j$ and $s_{j+1}$ units in layer $j+1$, then $\Theta^(j)$ will be of dimension $s_{j+1} \times (s_j +1)$.

The $+1$ comes from the addition in \Theta^{(j)} of the "bias nodes," $x_0$ and $\Theta_0^{(j)}$. In other words the output nodes will not include the bias nodes while the inputs will.

### Forward propagation: Vectorized Implementation

We define a new variable $z_k^{(j)}$ that encompasses the parameters inside our $g$ function. From the above example, if we replaced by the variable $z$ for all the parameters we would get:

$$\begin{align*}a_1^{(2)} = g(z_1^{(2)}) \newline a_2^{(2)} = g(z_2^{(2)}) \newline a_3^{(2)} = g(z_3^{(2)}) \newline \end{align*}$$

In other words, for layer $j=2$ and node $k$, the variable $z$ will be:

$z_k^{(2)} = \Theta_{k,0}^{(1)}x_0 + \Theta_{k,1}^{(1)}x_1 + ... + \Theta_{k,n}^{(1)}x_n$

The vector representation of $x$ and $z^{(j)}$ is

$$\begin{align*}x = \begin{bmatrix}x_0 \newline x_1 \newline\cdots \newline x_n\end{bmatrix} &, z^{(j)} = \begin{bmatrix}z_1^{(j)} \newline z_2^{(j)} \newline\cdots \newline z_n^{(j)}\end{bmatrix}\end{align*}$$

Setting $x=a^{(1)}$, we can rewrite the equation as:

$z^{(j)} = \Theta^{(j-1)}a^{(j-1)}$,

$a^{(j)} = g(z^{(j)})$,

where our function g can be applied element-wise to our vector $z^{(j)}$.

We can then add a bias unit (equal to 1) to layer j after we have computed $a^{(j)}$. This will be element $a_0^{(j)}$ and will be equal to 1. To compute our final hypothesis, let's first compute another $z$ vector:

$z^{(j+1)} = \Theta^{(j)}a^{(j)}$

$h_\theta(x) = a^{(j+1)} = g(z^{(j+1)})$

Notice that in this __last step__, between layer $j$ and layer $j+1$, we are doing __exactly the same thing__ as we did in logistic regression. Adding all these intermediate layers in neural networks allows us to more elegantly produce interesting and more complex non-linear hypotheses.
