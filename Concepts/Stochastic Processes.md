---
type: concept
discipline:
  - math
field:
  - probability-statistics
---

A stochastic process describes __random__ transitions between various possible states which live in a state space $S$. It can be thought of as a black box which generates a set of [[random variable|random variables]] $\{X_{1},X_{2},\dots,X_{n}\}$ which are labeled by an __index set__ $\{t_{1},t_{2},\dots,t_{n}\}$ that gives a notion of _when_ each process took place. These indices can be either discrete of continuous depending on the system.

Any stochastic process is completely defined by its [[Probability Distribution Function|joint probability distribution]]
$$P(X_{n},t_{n} \ ; \ \dots \ ; \ X_{1},t_{1})$$

# Types of Stochastic Processes

# Independent Stochastic Processes
For independent stochastic processes, random variables are independent and therefore the joint probability distribution simplifies into the multiplication of the individual probability distributions
$$P(X_{n};\dots;X_{1})\to \prod\limits_{i=1}^{n}P(X_{i})$$
==The system has no even of its most recent states==.
- Bernoulli Process is the simplest independent process, in which the random variables are independent, discrete and have only two possible outcomes (coin tosses)
- Independent sampling from a distribution is also a type of such process

# Markov Process
In [[Markov Chains|Markov processes]] ==the system has memory of its most recent states==. This is called the [[Markov Property|Markov assumption]]. Now, using conditional probability the joint probability distribution for the process can be simplified to
$$P(X_{n};\dots;X_{1})\to P(X_{1})\prod\limits_{i=1}^{n}P(X_{i+1}|X_{i})$$