---
layout: post
title: Apply Machine Learning (Cont.)
comments: true
---
(Machine Learning Coursera - Andrew Ng)


### <span style="color:red">**Building a Spam Classifier**</span>

#### <span style="color:blue">**Prioritizing What to Work On**</span>

**System Design Example**:

Given a data set of emails, we could construct a vector for each email. Each entry in this vector represents a word. The vector normally contains 10,000 to 50,000 entries gathered by finding the most frequently used words in our data set.  If a word is to be found in the email, we would assign its respective entry a 1, else if it is not found, that entry would be a 0. Once we have all our x vectors ready, we train our algorithm and finally, we could use it to classify if an email is a spam or not.

So how could you spend your time to improve the accuracy of this classifier?

* Collect lots of data (for example "honeypot" project but doesn't always work)
* Develop sophisticated features (for example: using email header data in spam emails)
* Develop algorithms to process your input in different ways (recognizing misspellings in spam).

It is difficult to tell which of the options will be most helpful.

#### <span style="color:blue">Error Analysis</span>

The recommended approach to solving machine learning problems is to:

* Start with a simple algorithm, implement it quickly, and test it early on your cross validation data.
* Plot learning curves to decide if more data, more features, etc. are likely to help.
* Manually examine the errors on examples in the cross validation set and try to spot a trend where most of the errors were made.

For example, assume that we have **500** emails and our algorithm misclassifies a **100** of them. We could manually analyze the **100** emails and categorize them based on what type of emails they are. We could then try to come up with new cues and features that would help us classify these 100 emails correctly. Hence, if most of our misclassified emails are those which try to steal passwords, then we could find some features that are particular to those emails and add them to our model. We could also see how classifying each word according to its root changes our error rate:

It is very important to get error results as a single, numerical value. Otherwise it is difficult to assess your algorithm's performance. For example if we use stemming, which is the process of treating the same word with different forms (fail/failing/failed) as one word (fail), and get a **3%** error rate instead of **5%**, then we should definitely add it to our model. However, if we try to distinguish between upper case and lower case letters and end up getting a **3.2%** error rate instead of **3%**, then we should avoid using this new feature.  Hence, we should try new things, get a numerical value for our error rate, and based on our result decide whether we want to keep the new feature or not.

#### <span style="color:blue">Error Metrics for Skewed Classes</span>

It is sometimes difficult to tell whether a reduction in error is actually an improvement of the algorithm.

For example: In predicting a cancer diagnoses where **0.5%** of the examples have cancer, we find our learning algorithm has a **1%** error. However, if we were to simply classify every single example as a $0$, then our error would reduce to **0.5%** even though we did not improve the algorithm.
This usually happens with skewed classes; that is, when our class is very rare in the entire data set.

Or to say it another way, when we have lot more examples from one class than from the other class.

For this we can use **Precision/Recall**.

* Predicted: 1, Actual: 1 --- True positive
* Predicted: 0, Actual: 0 --- True negative
* Predicted: 0, Actual: 1 --- False negative
* Predicted: 1, Actual: 0 --- False positive

 **Precision** means the percentage of your results which are relevant. On the other hand, **recall** refers to the percentage of total relevant results correctly classified by your algorithm

**Precision**: of all patients we predicted where $y=1$, what fraction actually has cancer?

$$\frac{\rm True\,Positives}{\rm Total\,number\,of\,predicted\,positives} = \frac{\rm True\,Positives}{\rm True\,Positives + False\,Positives}$$

**Recall**: Of all the patients that actually have cancer, what fraction did we correctly detect as having cancer?

$$\frac{\rm True\,Positives}{\rm Total\,number\,of\,actual\,positives} = \frac{\rm True\,Positives}{\rm True\,Positives + False\,Negtives}$$

These two metrics give us a better sense of how our classifier is doing. We want both precision and recall to be high.

In the example at the beginning of the section, if we classify all patients as 0, then our **recall** will be $\dfrac{0}{0 + f} = 0$, so despite having a lower error percentage, we can quickly see it has worse recall.

$$\rm Accuracy = \frac{true\,possitive + true\,negative}{total\,population}$$

<img src="/assets/ml/Precision_Recall.png" style="width:800px">

**Note**: if an algorithm predicts only negatives like it does in one of exercises, the precision is not defined, it is impossible to divide by 0. F1 score will not be defined too.

#### <span style="color:blue">Trading Off Precision and Recall</span>

We might want a **confident** prediction of two classes using logistic regression. One way is to increase our threshold:

* Predict $1$ if: $h_{\theta} \ge 0.7$
* Predict $0$ if: $h_{\theta} < 0.7$

This way, we only predict cancer if the patient has a $70\%$ chance.

Doing this, we will have **higher precision** but **lower recall** (refer to the definitions in the previous section).

In the opposite example, we can lower our threshold:

* Predict $1$ if: $h_{\theta} \ge 0.3$
* Predict $0$ if: $h_{\theta} < 0.3$

That way, we get a very **safe** prediction. This will cause **higher recall** but **lower precision**. <br>
>* The greater the threshold, the greater the precision and the lower the recall. <br>
>* The lower the threshold, the greater the recall and the lower the precision. <br>

In order to turn these two metrics into one single number, we can take the **F value**. <br>
One way is to take the **average**:

$$\frac{\rm P + R}{2}$$

This does not work well. If we predict all $y=0$ then that will bring the average up despite having 0 recall. If we predict all examples as $y=1$, then the very high recall will bring up the average despite having $0$ precision.

A better way is to compute the **F Score** (or $\rm F1$ score):

$$\rm F Score = 2\frac{PR}{P + R}$$

In order for the F Score to be large, both precision and recall must be large. <br>
We want to train precision and recall on the **cross validation** set so as not to bias our test set.

#### <span style="color:blue">Data for Machine Learning</span>

How much data should we train on? <br>
In certain cases, an "_inferior algorithm_," if given enough data, can outperform a superior algorithm with less data. <br>
We must choose our features to have **enough** information. A useful test is: Given input $x$, would a human expert be able to confidently predict $y$? <br>
**Rationale for large data**: if we have a **low bias** algorithm (many features or hidden units making a very complex function), then the larger the training set we use, the less we will have over-fitting (and the more accurate the algorithm will be on the test set).
