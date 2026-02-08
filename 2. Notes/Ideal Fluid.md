#note #physics #fluid-mechanics #concept | #continuum

# Ideal (Non-viscous) Fluid

The hydrodynamic regime is based on the ratio between the [[Mean Free Path]] of particles in the system $\ell$, and the length scale of spatial variations $L$

- ratio of [[Mean Free Path|MFP]] of particles $(\ell)$ in the system to typical length scale $(L)$ is infinitesimal $\ell/L<<1$
- in this limit collisions are negligible and there is no [[Fluctuation Dissipation|dissipation]]. In other words, there is no [[viscosity]]
- no dissipation means that [[Local Equilibrium]] persists indefinitely and that local variables are governed solely by __conservation laws__ (matter, momentum & energy)

# Conservation of Matter
Conservation of matter merely considers the fact that there are no holes or sinks in the system. If there is a flux of matter through the surface enclosing an element there is a consequent decrease in matter
$$ \begin{align*}
\frac{\partial m}{\partial t} &=\frac{\partial }{\partial t}\left(\int\limits_{V_{0}} \rho dV \right)\\
& = -\iint\limits_{\partial V_{0}}  \rho\mathbf{v}\cdot d\mathbf{A}\\
& =-\int\limits_{V_{0}} \nabla\cdot(\rho\mathbf{v}) dV \equiv\int\limits_{V_{0}} -\nabla\cdot\mathbf{J} dV
\end{align*} \tag{1}$$
Where the second line describes the flow of matter through a surface, $\rho$ being the volumetric mass density. In the third line we use [[Gauss law]] at last we arrive at the first law
$$\frac{\partial \rho}{\partial t}=-\nabla\cdot\mathbf{J}\tag{2}$$

# Conservation of Momentum
$$\frac{\partial (\rho\boldsymbol{v})}{\partial t} + \nabla\cdot(\rho\boldsymbol{v}\otimes\boldsymbol{v} + P) = -\rho\nabla\phi$$
# Conservation of Energy
There are three main why in which [[Heat Transfer.md|heat is transferred]]. In fluids where transport of matter is the main form of energy transfer, heat is exchanged mainly by convection, where conduction is usually negligible and transfer by radiation is minute. In an ideal fluid which is [[viscosity|non-viscous]] there is no transfer of matter between fluid elements and thus there is no heat convection and flow is considered [[Thermodynamic Processes|adiabatic]]
$$ 0=\frac{dQ}{dt} = T \frac{dS}{dt}$$
considering the total derivative identity presented in [[Ideal Fluid#Appendix|appendix 1]]
$$0=\frac{dS}{dt} = (\mathbf{v}\cdot\nabla)S + \frac{\partial S}{\partial t}$$


# Appendix

> [!NOTE] A.1 Total Derivative (also known as material derivative)
$$ \begin{align*}d\mathbf{A}(\mathbf{r},t) = dA_{i}(x_{i},t) &= dx_{j} \frac{\partial A_{i}}{\partial x_{j}} + dt\frac{\partial A_{i}}{\partial t}\\\\ \frac{dA_{i}}{dt} &= v_{j}\frac{\partial A_{i}}{\partial x_{j}} + \frac{\partial A_{i}}{\partial t}=(\mathbf{v}\cdot\nabla)\mathbf{A} + \frac{\partial \mathbf{A}}{\partial t}\end{align*}$$$$\large\boxed{\frac{d\mathbf{A}}{dt} = (\mathbf{v}\cdot\nabla)\mathbf{A} + \frac{\partial \mathbf{A}}{\partial t}}$$ specifically for $\mathbf{A}=\mathbf{v}$ we have $$\frac{d\mathbf{v}}{dt} = (\mathbf{v}\cdot\nabla)\mathbf{v} + \frac{\partial \mathbf{v}}{\partial t}$$
