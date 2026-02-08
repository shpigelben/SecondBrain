#note #statistical-mechanics 
The Liouville equation describes the time evolution of a distribution of states in [phase space](Phase%20Space.md). Trajectories cannot vanish and their flow can be likened to the motion of an [incompressible fluid](Ideal%20Fluid.md). By considering the continuity equation
$$ \frac{\partial \rho}{\partial t}=-\nabla\cdot\mathbf{J} =-\nabla\cdot(\rho\mathbf{u}) = -\boldsymbol{\nabla\rho}\cdot\mathbf{u} - \rho\nabla\cdot\mathbf{u} \tag{1}$$
Where $\mathbf{u}= (\dot{x},\dot{p})$. We treat the distribution in phase space as an incompressible fluid $\nabla\cdot\mathbf{u}=0$, therefore
$$\frac{\partial \rho}{\partial t}= -\boldsymbol{\nabla\rho}\cdot\mathbf{u}= -\left(\frac{\partial \rho}{\partial x} \frac{dx}{dt} + \frac{\partial \rho}{\partial p} \frac{dp}{dt}\right) \tag{2}$$
Using [[Hamilton's Equations]] we can rewrite $(2)$ as
$$ \frac{\partial \rho}{\partial t}= -\left(\frac{\partial \rho}{\partial x} \frac{\partial \mathcal{H}}{\partial p} - \frac{\partial \rho}{\partial p} \frac{\partial \mathcal{H}}{\partial x}\right) \tag{3} $$
by considering the [[Poisson brackets]], equation $(3)$ can be compactly written
$$\frac{\partial \rho}{\partial t} = -\{\rho, \mathcal{H} \}$$

# Classical Picture
For an $n$-dimensional [[hamiltonian]] system, with position $\mathbf{q}$ and momenta $\mathbf{p}$, the phase space distribution $\rho(\mathbf{q}, \mathbf{p})$ determines the [[Probability]],  $\rho(\mathbf{q}, \mathbf{p})d^{n}r d^{n}p$ that the system will be found in a certain ($2n$-dimensional) phase space volume element
$$\frac{\partial \rho}{\partial t} = -\{ \rho, \mathcal{H} \}$$

# Quantum Picture
In the quantum mechanical case the [[Quantum State 1|density matrix]] plays the role of the phase-space distribution, and appropriately the Poisson brackets transform into commutators
$$\frac{\partial \rho}{\partial t}= -\frac{i}{\hbar}
\big[\rho , \mathcal{H}\big]$$

# Liouville Operator