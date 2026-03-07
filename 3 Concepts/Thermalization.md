---
type: concept
discipline:
  - physics
field:
  - thermodynamics-statistical-mechanics
---

Thermalization is a system's approach to equilibrium. [[Second Law of Thermodynamics|The second law]] states that [[Principle of Maximum Entropy|entropy maximizes]] in equilibrium. Any spontaneous process increases the entropy of the system and reaches a new state of equilibrium. This is an undeniable thermodynamic postulate whose rise from microscopic (time reversible) processes is not immediately clear.

# Liouville's Theorem
[[Liouville Equation]]

# Classical Thermalization

- Microstate $w_{i}=(x,p)$
- Phase space on which there is a collection of microstates
- an ensemble is a set of microstates $\{ \omega_{i},\rho(\omega_{i},t) \}$ with probability distribution $\rho$
- Evolution is dictated by Liouville's equation $\frac{\partial \rho}{\partial t}=-\{\rho,\mathcal{H}\}$
- Thermalization: $\rho(\omega_{i},t_{0})\longrightarrow \rho_{mic}(\omega_{i})$
- The trajectories of an isolated system are bound in phase space due to conservation of energy
- chaos $\to$ ergodicity & mixing
- Boltzmann equation proves (?) how a system thermalized from microscopic considerations. Second law of thermodynamics

# Quantum Thermalization

- Microstates cannot be represented precisely on phase space due to uncertainty relations $[x,p]=i\hbar$. There is a limited "resolution" of the phase space
- Wigner function $W(x,p)= \frac{1}{\pi\hbar}\int \psi*(x- \frac{y}{2})\psi(x+ \frac{y}{2})e^{- ipy/\hbar}dy$
- $\int W(x,p)dp=|\psi(x)|^{2}$
- $\int W(x,p)dx=|\psi(p)|^{2}$
- $\int W(x,p)dxdp=1$
- $-\frac{\hbar}{2}\leq W(x,p)\leq \frac{\hbar}{2}$