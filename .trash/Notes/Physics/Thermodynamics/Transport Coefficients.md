#transport #continuum #thermodynamics 

The following, are current densities. They describe the flow a certain quantity - __particle density__, __momenta__ (three components) and __internal energy__ respectively - through area $S$ per unit time
$$\boldsymbol{J}_{n}= \frac{\Delta N}{S\Delta t}\hat{n} \quad\quad \boldsymbol{J}_{\boldsymbol{p}}= \frac{\Delta \boldsymbol{p}}{S\Delta t}\hat{n} \quad\quad \boldsymbol{J}_{u}= \frac{\Delta u}{S\Delta t}\hat{n} \tag{1}$$
These current are associated with densities and are tied together by the equation of continuity
$$ \frac{\partial n_\alpha}{\partial t}=-\nabla\cdot\boldsymbol{J}_{\alpha} \tag{2}$$
For small enough perturbations, the current density is proportional to an appropriate __gradient force__ that acts on the quantity $\alpha$
$$\boldsymbol{J}_{\alpha} = -K_{\alpha}\boldsymbol{\nabla}\phi_{\alpha}\tag{3}$$
where $K_\alpha$ is the __transport coefficient__, and $\phi_{\alpha}$ is a relevant scalar field, whose gradient is said gradient force. Plugging $(3)$ into the continuity equation gives the following PDE
$$\frac{\partial n_{\alpha}}{\partial t} = K_\alpha\nabla^{2}\phi_{\alpha}\tag {4}$$
Usually $n_{\alpha}\propto \phi_{\alpha}$ so that we get a PDE in terms of $n_{\alpha}$ such that the solution $n_{\alpha}(\boldsymbol{r},t)$ provides the evolution of the property, given initial and boundary conditions.

# Types of Transport Coefficients

- [[Diffusion|Fick's Law]] of diffusion
- [[Thermal Conduction|Fourier's Law]] of heat conduction
- [[Momentum Transport|Newton's Law]] of momentum transfer
- [[Ohm's Law]] of electrical conductivity

# Connection Between Coefficients

$$\frac{K}{\sigma_{e}}= LT$$
$$\frac{K}{D}=\rho c_{\small V}$$
$$\frac{K}{\eta}=c_{v}$$