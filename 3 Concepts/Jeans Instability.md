---
type: concept
discipline:
  - physics
field:
  - fluid-mechanics
  - astrophysics
---

In a [[Homogeneity & Isotropy|homogenous]], self-gravitating medium we introduce a small [[Thermodynamic Processes|adiabatic]] perturbation to a steady state solution of the hydrodynamic continuity equations for [[Ideal Fluid]]. We assume a __uniform__ & __stationary__ solution
$$\begin{align*}
\rho(\boldsymbol{r},t) &\to \rho_{0} + \delta \rho(\boldsymbol{r},t)\\
\boldsymbol{v}(\boldsymbol{r},t) &\to \mathbf{0} \ + \delta \boldsymbol{v}(\boldsymbol{r},t)
\end{align*}$$
We need to make adjustments to the [[gravitational potential]] and to the [[Acoustic Waves|speed of sound]] because of the perturbation
$$\begin{align*}
\phi(\boldsymbol{r},t) &\to \phi_{0} + \delta \phi(\boldsymbol{r},t)\\
c_{s}(\boldsymbol{r},t) &\to {c_{s}}_{0} \ + \delta c_{s}(\boldsymbol{r},t)
\end{align*}$$
We plug perturbed quantities into the Poisson equation, the matter continuity equation and the Euler equation for conservation of momentum. We neglect second order terms $\mathcal{O}(\delta^{2})$

# Poisson
___
The case of the Poisson equation is fairly simple since it is a linear differential equation. We plug in the perturbation keeping in mind that the uniform case solves the equation
$$\begin{align*}
&\nabla^{2}\phi = 4\pi G \rho \\
\to & \nabla^{2}(\phi_{0}+\delta\phi_{0}) = 4\pi G(\rho_{0}+\delta\rho)\\
&\nabla^{2}\delta\phi = 4\pi G \delta\rho
\end{align*}$$

# Continuity (Density)
___
$$\frac{\partial \rho}{\partial t} + \nabla\cdot(\rho\boldsymbol{v})=0$$
![Scanned Document](../4%20Misc/Attachments/jeans_instability.pdf)

$$  \begin{align*}
&\nabla^{2}\phi = 4\pi G \rho\\
\\
&\left(\frac{\partial }{\partial t} + \boldsymbol{v\cdot\nabla}\right)\boldsymbol{v} = - \frac{c_{s}^{2}}{\rho}\boldsymbol{\nabla}\rho -\boldsymbol{\nabla}\phi
\end{align*}$$
 