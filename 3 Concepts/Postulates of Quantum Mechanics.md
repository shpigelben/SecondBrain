---
type: concept
discipline:
  - physics
field:
  - quantum-mechanics
---

> [!NOTE] Postulate I
> The state of a particle is represented at, a time $t$, by a vector $\ket{\psi}$ in [[Hilbert space]] $\mathcal{H}$  called state space

the state of a classical particle is described by the [[dynamic variables]] $x(t)$ and $p(t)$ in phase space

> [!NOTE] Postulate II
> Every measurable quantity of the particle $\mathcal{O}$ is called an observable and is described by a [[Hermitian Matrix]] acting in state space. The result of measuring $\mathcal{O}$ results in one of its eigenvalues.

any dynamical variables of a classical particle describe its state deterministically.
$$\begin{align*}
\mathcal{O}\ket{\psi} &= \mathcal{O}\sum_{i}c_{i}\ket{o_{i}}\\
&=\sum_{i}c_{i}\mathcal{O}\ket{o_{i}}\\
&=\sum_{i}c_{i}o_{i}\ket{o_{i}}
\end{align*}$$
The expectation value of the observable $\mathcal{O}$ is 

> [!NOTE] Postulate III
> The [[Time Evolution]] of a closed system is described by a [[Unitary Matrix|unitary]] transformation of the initial state$$\ket{\psi(t)} = U(t;t_{0})\ket{\psi(t_{0})}$$

This postulate is more commonly known in the form of Schrodinger Equation
$$i \hbar \frac{d}{dt} \ket{\psi(t)} = H(t) \ket{\psi(t)}$$
unitary time evolution most critically means that probability is conserved. 

