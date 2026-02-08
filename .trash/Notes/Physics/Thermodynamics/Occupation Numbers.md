#statistical #mechanics 

We use the [[Grand Canonical Ensemble]] 
# Single Particle States
For a state $i$ of energy $\varepsilon_i$ that is occupied by $n_{i}$ noninteracting particles
$$ \begin{align*}
\mathbb{Z} = \sum\limits_{a} e^{\beta(\mu N_{a}-E_{a})} & \stackrel{1}{=} \sum\limits_{n_{i}} \exp\left({ \sum\limits_{i}\beta(\mu-\varepsilon_{i})n_{i}}\right)\\
&\stackrel{2}{=}\sum\limits_{n_{i}}\left(\prod\limits_{i} {\large e^{\beta(\mu-\varepsilon_{i})n_{i}}} \right)\\
&\stackrel{3}{=}\prod\limits_{i}\left(\sum\limits_{n_{i}} {\large e^{\beta(\mu-\varepsilon_{i})n_{i}}} \right)\equiv \prod\limits_{i} \mathbb{Z}_{i}
\end{align*} $$
1 - summing over partitions or occupations instead of over microstates
2 - sum in exponent becomes a product of exponents
3 - switching summation and product. The summation goes over all possible partitions of the $i$ single particle state, while the product runs through the possible states.

The process of constructing the partition function of a system of single particle state simplifies into finding the partition functions of certain states.

___
# Fermions
[[Fermions]] are quantum particles that obey the [[Pauli Exclusion Principle]]. That means that there are either be 0 or 1 particles at a certain state. This fact of nature determines their statistics which in turn are determined by their partition function.
$$(\mathbb{Z}_{f})_{i} = \sum\limits_{n_{i}=0}^{1} {\large e^{\beta(\mu-\varepsilon_{i})n_{i}}} = 1 + \large e^{\beta(\mu-\varepsilon_{i})}\equiv1+c$$
$$\braket{n}_{\small f}=\frac{c}{1+c} = \frac{1}{c^{\small -1}+1} = \frac{1}{{e^{\beta(\varepsilon_{i}-\mu)}+1}}$$
In the limit of zero temperature $\beta\to\infty$
$$\lim_{\beta\to\infty} \braket{n}_{f} = \theta(\varepsilon_{i}-\mu) = \begin{cases}  1 \quad(\varepsilon_{i}-\mu)>0
\\ 0 \quad(\varepsilon_{i}-\mu)<0\end{cases}$$
___
# Bosons
Bosons are spin-1 particles that are not limited by the Pauli exclusion principle. They can bunch in a single state meaning there can be infinitely many bosons in each state.
$$(\mathbb{Z}_{b})_{i} = \sum\limits_{n_{i}=0}^{\infty} {\large e^{\beta(\mu-\varepsilon_{i})n_{i}}} = \frac{1}{1-{e^{\beta(\mu-\varepsilon_{i})}}} = \frac{1}{1-c}$$
The condition for the sum to converge is that $\mu<\varepsilon_{i}$ 
$$\braket{n}_{\small b}=\frac{c}{1-c} = \frac{1}{c^{\small -1}-1} = \frac{1}{{e^{\beta(\varepsilon_{i}-\mu)}-1}}$$
In the limit of zero temperature $\beta\to\infty$
$$\lim_{\beta\to\infty} \braket{n}_{b} = 1-\theta(\varepsilon_{i}-\mu) = \begin{cases} \ \ \ 0 \quad(\varepsilon_{i}-\mu)>0
\\ -1 \quad(\varepsilon_{i}-\mu)<0\end{cases}$$
___

$$\large\boxed{\braket{n}=\frac{1}{e^{\beta(\varepsilon_{i}-\mu)}\pm1}=\begin{cases}+:\text{fermions}\\
-:\text{bosons}\end{cases}}$$