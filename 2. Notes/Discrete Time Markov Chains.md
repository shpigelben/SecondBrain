#note #math #probability #derivative
#stochastic-processes #statistical-mechanics
#incomplete 

Discrete time Markov chains (DTMC) is a sequence of discrete [[random variables]] with the [[Markov property]]. Since time steps are discrete and each state depends only on the previous state we have
$$p_{ij}=\Pr(X_{1}=j|X_{0}=i)$$
which after $n$ time steps can be written as
$${p_{ij}}^{(n)}=\Pr(X_{n}=j|X_{0}=i)$$
For a __time homogenous chain__ we have
$$p_{ij}=\Pr(X_{k+1}=j|X_{k}=i)$$
which after $n$ time steps can be written as
$${p_{ij}}^{(n)}=\Pr(X_{k+n}=j|X_{k}=i)$$
This case satisfies the __Chapman Kolmogorov__ equation which states
$${p_{ij}}^{(n)} = \sum\limits_{s\in S} p_{is}^{(k+n)}p_{sj}^{(k)}$$
where $s$ is any state from the countable state-space $S$. The summation is over all possible paths of $n$ time steps between states $i$ and $j$. For a stationary or a time homogenous case like this $p_{ij}$ can be considered a [[Transition Matrix]], and the summation above corresponds to the multiplication of this matrix with itself $n$ times
$${p_{ij}}^{(n)}= (p_{ij})^{n}$$
==Each entry $(p_{ij})^{n}$ in the resulting matrix corresponds to the probability of being at a state $i$ given an initial state $j$ after $n$ time-steps==

![[../9. Misc/attachments/Pasted image 20220605172422.png]]