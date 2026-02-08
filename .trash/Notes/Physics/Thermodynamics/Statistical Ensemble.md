#statistical #mechanics 

- A statistical ensemble consists of a large number (sometimes infinitely many) of virtual copies of a system, each represents a possible state of the system (a __microstate__).

- Where microstates of a [[thermodynamic system]] continuously evolve, an ensemble does not necessarily evolve. A system represented by a static ensemble is said to be in thermodynamic or __statistical equilibrium__.

- The statistical ensemble can be thought of as a probability distribution of phase points in [[Phase Space]] with canonical coordinates.

___
# Phase Space

In a 3D box, a particle has 3 spatial degrees of freedom and 3 momenta degrees of freedom. Consequently its phase space is 6 dimensional and its motion [[Chaos|chaotic]] (very sensitive to initial conditions). 

- For N particles in a 3D box we can either think of N points (trajectories) in a 6 dimensional phase space (the so called __$\mu$ space__) where the "cloud" of points at each time represents a microstate of the system
- or we can think of one point (trajectory) that lives in a 6N dimensional phase space (the so called __$\Gamma$ space__) in which each point represents a certain microstate of the system

___
# Ergodic Principle

Since a thermodynamic system is chaotic, given enough time to evolve the system will arrive at every possible microstate #why. Instead of waiting infinite amount of time, we can create virtual copies of every possible microstate of the system.

The ergodic principle states that in thermodynamic equilibrium, all microstates are equally probable #why. So if there are $\Gamma$ possible microstates, each microstate has $1/\Gamma$ Probability of occurring.
___
# Ensembles
Different ensembles allow for different types of systems
[[Microcanonical Ensemble]] - an isolated system **constant energy**
[[Canonical Ensemble]] - energy changes due to contact with a heat bath **constant temperature**
[[Grand Canonical Ensemble]] - both energy and particles are exchangeable
[[Isobaric Ensemble]]

## Evolution of Ensembles
The evolution of a distribution in phase space is given by the [[Liouville Equation]] equation
$$ \begin{align*}
\text{classical} \quad &\leadsto \ \frac{\partial\rho}{\partial t} = -\{\rho,\mathcal{H}\} \\ \text{quantum} \quad &\leadsto \ \frac{\partial\rho}{\partial t} = \frac{i}{\hbar}\mathbf{[}\rho,\mathcal{H}\mathbf{]}
\end{align*} $$
___
# Multiplicity

Multiplicity ($\Gamma$) refers to the number of microstates correspond to a given macrostate. It is easy to portray in the case of two spin-half particles
$$ \begin{align*}
\Uparrow \ &= \ \uparrow \uparrow\\
\Downarrow \ &= \ \downarrow \downarrow\\
\Updownarrow \ &= \ \uparrow \downarrow / \downarrow\uparrow 
\end{align*} $$
There is only __one__ microstate that correspond to either of the $\Uparrow$ or $\Downarrow$ macrostates. On the other hand, there are __two__ microstates that correspond to the $\Updownarrow$ macrostate.
$$\begin{align*}
\Gamma(\Uparrow) = \Gamma(\Downarrow) &= 1\\
\Gamma(\Updownarrow) &=2
\end{align*}$$
All microstates have equal probability of occurring. In this case $p=1/4$. The probability that a certain macrostate takes place equals the probability of a microstate occurring times the multiplicity of microstates that constitutes said macrostate
$$ \begin{align*}
\mathbb{p}(\Uparrow) = \mathbb{p}(\Downarrow) &= \Gamma(\Uparrow /   \Downarrow)\cdot p=1\cdot \frac{1}{4} = \frac{1}{4}\\
\mathbb{p}(\Updownarrow) &=\Gamma(\Updownarrow)\cdot p = 2\cdot \frac{1}{4}=\frac{1}{2}
\end{align*}$$
The up-down macrostate is twice as likely to occur as any of the other two states. 

___
## N Spin-1/2 Particles
Consider now N such particles, each can be in a state $s_{i} = \uparrow / \downarrow$. A microstate corresponds is denoted by $\{ s_{1}, s_{2} \dots,s_{N} \}$. If a certain macrostate has $k$ microstates corresponding to it, its multiplicity will be given by
$$\Gamma=\begin{pmatrix}N \\ k\end{pmatrix} \equiv \frac{N!}{k!(N-k)!}$$
Since each microstate has equal probability of $\left(\frac{1}{2}\right)^{N}$ for occurring , the probability of said macrostate occurring will be 
$$\mathbb{p}=\Gamma \cdot p = \frac{N!}{k!(N-k)!} \left(\frac{1}{2}\right)^{N}$$