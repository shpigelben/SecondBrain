---
type: concept
discipline:
  - math
field:
  - probability-statistics
---

- Design of a certain metic that quantifies the degree of correspondence between a data set, and a model.
- Finding the minimizing fitting parameters $(a,b,c)$ which give the best fit.
- Calculating the variance of the fitting parameters $(\sigma_{a},\sigma_{b},\sigma_{c})$.
- Assess the goodness of fit

# Maximal Likelihood
Given a certain data set $\{x_{i},y_{i}\}$ and a model $f$, we wish to understand how likely is the data being generated from that particular model. For a data set of $N$ points, and a model  $f\to f\Big(\{x_{i}\}, \{a_{j}\}_{j=1}^{n}\Big)$  with $n$ parameters we seek the set of parameters $\{a_{j}\}$ which maximizes that likelihood. 

Under the assumption that each data point of value is sampled from a normal distribution with $y_{i}$ as the expectation value and $\sigma_{i}$ as the variance, the likelihood that $y_{i}$ corresponds to $f(x_{i})$ is  
$$
p_{i}=p(y_{i}) \propto \Delta y_{i} \exp{\small \left\{ - \frac{\Big[y_{i}-f(x_{i})\Big]^{2}}{2\sigma_{i}^{2}} \right\}}
$$

And consequently, the likelihood that a set $\{x_{i},y_{i}\}$ corresponds to the model $f(\{x_{i}\})$ is

$$
P = \prod_{i=1}^{N}p_{i}= \left[ \prod_{i=1}^{N}\Delta y_{i} \right] \cdot \left[\exp\left\{ - \sum\limits_{i=1}^{N}\frac{[y_{i}-f(x_{i})]^{2}}{2\sigma_{i}^{2}} \right\}\right]
$$

$\Delta y_{i}$ is related to the sampling capacity (uncertainty in measurement?) of the $i^{th}$ value, and is a constant of the data set. We therefore need to focus on maximizing the expression in the second brackets.

$$
\begin{align}
\max(P) &\Rightarrow \min\left( \frac{1}{P} \right)  \\
&\Rightarrow \min\left[ \ln\left( \frac{1}{P} \right) \right]  \\
&=\min[-\ln(P)]  \\
&\propto \min\left[ \sum\limits_{i=1}^{N} \left( {\frac{y_{i}-f(x_{i})}{\sqrt{ 2 }\sigma_{i}}} \right)^{2} \right] \equiv \min(\chi^{2})
\end{align}
$$

 
