---
type: concept
discipline:
  - math
field:
  - probability-statistics
  - thermodynamics-statistical-mechanics
---

A transition matrix $P_{ij}$ is a stochastic matrix whose entries represent a certain probability. They are used in [[Discrete Time Markov Chains|DTMCs]]. 

==Properties==:
- Square matrices
- Non negative
- Real valued

==classifications==:
- Right stochastic matrix - rows sum to 1 
- Left stochastic matrix - columns sum to 1
- Doubly stochastic matrix - both rows and columns sum to 1

# Stochastic Vector
___
A vector whose elements are nonnegative real values that sum to 1. Each row of a right stochastic matrix (or column of a left one) is a stochastic vector. The sum of the elements of a stochastic vector is 1.
$$\sum\limits_{j}P_{\small ij}=1$$
A stochastic vector whose all entries are ones - $\phi_{j}=1 \quad\forall j$, is an eigenvector of the matrix and is therefore stationary.
$$\sum\limits_{i}\phi_{i}P_{ij}=\sum\limits_{i}P_{ij}=\phi_{j}$$
# Types
___
- ==__Irreducible Transition Matrix__==:
  If one a system can transition between any two states in a finite number of number of time steps it is said to be irreducible. Namely, the $n^{th}$ power of a transition matrix have non zero entries for all finite powers. $$(P_{ij})^{k}>0 \quad \forall ij \quad\forall k<\infty$$
- ==__Periodic Transition Matrix__==: 
  If there exists a constant time-interval $nd$ for which the 