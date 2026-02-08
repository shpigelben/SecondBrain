#note #physics #electrodynamics #derivative 

[[Maxwell Equations]] are given in terms of physical fields (electric & magnetic) in four of the following equations
$$
\large\boxed{\begin{align*}
\\ \quad\quad
&\text{i}. \quad\nabla\cdot\mathbf{E}=\rho  &\text{iii}. \quad\nabla\times\mathbf{E}= - \frac{\partial \mathbf{B}}{\partial t} \quad\quad\quad \\\\
&\text{ii}. \quad\nabla\cdot\mathbf{B}=0   &\quad \text{iv}. \quad\nabla\times\mathbf{B} = \mathbf{J}+ \frac{\partial \mathbf{E}}{\partial t} \quad\quad
\\\
\end{align*} }
$$
The electric & magnetic fields can also be fully represented by underlying potentials which are mathematical constructs and have no physical implications (they cannot be measured, as opposed to the physical fields). They are in fact sometimes easier to work with mathematically.
# Potentials
Since the [[divergence]] of the magnetic field is always zero (the second Maxwell equation), it can be written as the [[curl]] of some __vector potential__ $\mathbf{A}$ since __the divergence of the curl field always vanishes__.
$$\mathbf{B} = \boldsymbol{\nabla}\times\mathbf{A}\tag{1}$$
For the potential of the electric field we plug equation $(1)$ into the third Maxwell equation which produces
$$\nabla\times \left(\mathbf{E} + \frac{\partial\mathbf{A}}{\partial t}\right)=0 \tag{2}$$
Here we use the fact that the __curl of a gradient field vanished__ to treat the term in the brackets in $(2)$ as (minus) the gradient of some scalar potential. This way, the electric field in terms of both potentials is
$$\mathbf{E}= -\boldsymbol{\nabla\phi} - \frac{\partial \mathbf{A}}{\partial t} \tag{3}$$
In the case of static fields, the electric field is just (minus) the gradient of a scalar potential.
# Lorentz Gauge
By plugging equations $(1)$ & $(3)$ into the fourth Maxwell equation
$$\begin{align*}
&\nabla\times(\nabla\times \mathbf{A}) = \frac{\partial}{\partial t}\left(-\nabla\phi - \frac{\partial \mathbf{A}}{\partial t}\right) + \mathbf{J}\\
&\nabla(\nabla\cdot\mathbf{A}) - \nabla^{2}\mathbf{A} = -\nabla \frac{\partial \phi}{\partial t} - \frac{\partial^{2}\mathbf{A}}{\partial t^{2}} + \mathbf{J}\\
&\nabla \left(\nabla\cdot \mathbf{A + \frac{\partial \phi}{\partial t}}\right) = \nabla^{2}\mathbf{A}-\frac{\partial^{2}\mathbf{A}}{\partial t^{2}} + \mathbf{J}
\end{align*}$$
Demanding that the gradient on the left vanishes is equivalent to saying that the term inside the gradient is constant which we can set to zero. This gives the __Lorentz gauge condition__
$$\nabla\cdot \mathbf{A + \frac{\partial \phi}{\partial t}} = 0 \tag{4}$$
when this equation is satisfied we're left with the [wave equation](Electromagnetic%20Waves.md)  for the vector potential
$$\frac{\partial^{2} \mathbf{A}}{\partial t^{2}}-\nabla^{2}\mathbf{A}=\mathbf{J}\tag{5}$$
By plugging $(3)$ into the first Maxwell equation and taking the Lorentz gauge condition in equation $(4)$ into consideration, we can attain by the same procedure the analogous wave equation for the scalar potential
$$\frac{\partial^{2} \phi}{\partial t^{2}}-\nabla^{2}\phi= \rho\tag{6}$$
Equations $(5)$ & $(6)$ can be written in a compact covariant form$$\left[ \frac{\partial^{2}}{\partial t^{2}}-\nabla^{2} \right](\phi,\mathbf{A})=(\rho,\mathbf{J}) \quad \longrightarrow \quad \partial_{\mu}\partial^{\mu}A^{\nu} = J^{\nu} $$ where $A^{\mu}$ is the [[Four Vector|four-potential]] and $J^{\mu}$ is the four-current
___
# Gauge Transformations (Invariance)
We have established that the divergence of a curl field is zero. Thus, by the definition of the magnetic field in $(1)$ it is clear that $\mathbf{A}$ is _unique up to a gradient field_
$$\begin{align*}
\mathbf{ B} &= \nabla \times \mathbf{A}  \\
&\to \nabla\times (\mathbf{A}+ \nabla\chi) \tag{4}\\
&= \  \nabla\times\mathbf{A}
\end{align*} $$
This gauge invariance should also apply to the electric field as defined in equation $(3)$
$$\begin{align*}
\mathbf{E} &= -\nabla \phi - \frac{\partial \mathbf{A}}{\partial t}\\
&\to -\nabla \phi - \frac{\partial}{\partial t}(\mathbf{A + \nabla\chi})\\
& = -\nabla\left(\phi+ \frac{\partial\chi}{\partial t}\right) - \frac{\partial\mathbf{A}}{\partial t}
\end{align*}$$
Which yields another gauge invariance
$$\phi\to \phi+ \frac{\partial \chi}{\partial t}$$