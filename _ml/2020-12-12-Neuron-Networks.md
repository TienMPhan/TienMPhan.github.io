---
layout: post
title: Neuron Networks
comments: true
---
*Grant Sanderson* puts "Neuron Networks" in an intuitive way in a video in his 3Blue1Brown Youtube Channel

<div align = "center">
<iframe width="560" height="315" src="https://www.youtube.com/embed/aircAruvnKk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

----
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

### Examples and Intuitions I

A simple example of applying neural networks is by predicting $x_1$ **AND** $x_2$, which is the logical 'and' operator and is only true if both $x_1$ and $0x_2$ are 1.

The graph of our functions looks like:

$$\begin{align*}\begin{bmatrix}x_0 \newline x_1 \newline x_2\end{bmatrix} \rightarrow\begin{bmatrix}g(z^{(2)})\end{bmatrix} \rightarrow h_\Theta(x)\end{align*}$$

Let's consider the first theta matrix:

$\Theta = [-30 \,\, 20 \,\, 20]$

This will cause the output of our hypothesis to only be positive if both $x_1$ and $x_2$ are 1. In other words:

$$\begin{align*}& h_\Theta(x) = g(-30 + 20x_1 + 20x_2) \newline \newline & x_1 = 0 \ \ and \ \ x_2 = 0 \ \ then \ \ g(-30) \approx 0 \newline & x_1 = 0 \ \ and \ \ x_2 = 1 \ \ then \ \ g(-10) \approx 0 \newline & x_1 = 1 \ \ and \ \ x_2 = 0 \ \ then \ \ g(-10) \approx 0 \newline & x_1 = 1 \ \ and \ \ x_2 = 1 \ \ then \ \ g(10) \approx 1\end{align*}$$

So we have constructed one of the fundamental operations in computers by using a small neural network rather than using an actual AND gate. Neural networks can also be used to simulate all the other logical gates. The following is an example of the logical operator '**OR**', meaning **either** $x_1$ is true or $x_2$ is true, or **both**.

### Examples and Intuitions II

The $\Theta^{(1)}$ matrices for AND, NOR, and OR are:

AND: $\Theta^{(1)} = [-30 \,\, 20 \,\, 20]$

NOR: $\Theta^{(1)} = [10 \,\, -20 \,\, -20]$

OR: $\Theta^{(1)} = [-10 \,\, 20 \,\, 20]$

We can combine these to get the XNOR logical operator (which gives 1 if $x_1$ and $x_2$ are both 0 or both 1).

$$\begin{align*}\begin{bmatrix}x_0 \newline x_1 \newline x_2\end{bmatrix} \rightarrow\begin{bmatrix}a_1^{(2)} \newline a_2^{(2)} \end{bmatrix} \rightarrow\begin{bmatrix}a^{(3)}\end{bmatrix} \rightarrow h_\Theta(x)\end{align*}$$

For the transition between the first and second layer, we'll use a $\Theta^{(1)}$ matrix that combines the values for AND and NOR:

$\Theta^{(1)} = [-30 \,\, 20 \,\, 20 \,\, 10 \,\, -20 \,\, -20]$

For the transition between the second and third layer, we'll use $\Theta^{(2)}$ matrix that uses the value for OR:

$\Theta^{(2)} = [-10 \,\, 20 \,\, 20]$

The values for our nodes are:

$$\begin{align*}& a^{(2)} = g(\Theta^{(1)} \cdot x) \newline& a^{(3)} = g(\Theta^{(2)} \cdot a^{(2)}) \newline& h_\Theta(x) = a^{(3)}\end{align*}$$

And there we have the XNOR operator using a hidden layer with two nodes! The following summarizes the above algorithm:

![](/assets/ml/xnor_operator.png)

### Multiclass classification

To classify data into multiple classes, we let our hypothesis function return a vector of values. Say we wanted to classify our data into one of four categories. We will use the following example to see how this classification is done. This algorithm takes as input an image and classifies it accordingly

![](/assets/ml/one_vs_all.png)

We can define our set of resulting classes as $y$:

$$\begin{align*}y=\begin{bmatrix}1 \newline 0 \newline 0 \newline 0\end{bmatrix},\,\begin{bmatrix}0 \newline 1 \newline 0 \newline 0\end{bmatrix}, \, \begin{bmatrix}0 \newline 0 \newline 1 \newline 0\end{bmatrix}, \,\begin{bmatrix}0 \newline 0 \newline 1 \newline 0\end{bmatrix}\end{align*}$$

Each $y^{(i)}$ represents a different image corresponding to either a car, pedestrian, truck, or motorcycle. The inner layers, each provide us with some new information which leads to our final hypothesis function. The setup looks like:

$$\begin{align*}\begin{bmatrix}x_0 \newline x_1 \newline x_2 \newline ... \newline x_n \end{bmatrix}  \rightarrow \begin{bmatrix}a_0^{(2)} \newline a_1^{(2)} \newline a_2^{(2)} \newline ... \end{bmatrix} \rightarrow \begin{bmatrix}a_0^{(3)} \newline a_1^{(3)} \newline a_2^{(3)} \newline ... \end{bmatrix} \rightarrow ... \rightarrow \begin{bmatrix}h_\Theta(x)_1 \newline h_\Theta(x)_2 \newline h_\Theta(x)_3 \newline h_\Theta(x)_4 \end{bmatrix}\end{align*}$$

Our resulting hypothesis for one set of inputs may look like:

$h_\theta(x) = [0 \,\, 0 \,\, 1 \,\, 0]$

In which case our resulting class is the third one down, or $h_\Theta(x)_3$ which represents the motorcycle.
