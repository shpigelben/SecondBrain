---
type: concept
discipline:
  - physics
field:
  - thermodynamics-statistical-mechanics
---

Thermal conduction is the transfer of heat, which is really the __transfer of energy__. It  usually mediated by the propagation of [[Phonons]] and [[Sommerfeld Model|free electrons]] in the solid. The second law of thermodynamics postulates that the [[Second Law of Thermodynamics#Direction of Heat Flow|direction of heat flow]] is down a temperature gradient. Other methods of [Heat Transfer](Heat%20Transfer.md) are [radiation](Electromagnetic%20Waves.md) and [[Convection|convection]]

![[../4 Misc/Attachments/Simple_definition_of_thermal_conductivity.png]]

# Fourier's Law
The rate of heat transfer $\dot{Q}$ in a material with cross sectional area $A$ is proportional to the negative of the temperature gradient, with the proportionality constant being the _thermal conductivity_ of the material
$$\frac{dQ}{dt} \frac{1}{A}\equiv j^{ \ q} = -\kappa\nabla T \tag{1}$$
where $j$ is the heat flux density $\ \small\displaystyle [ \ j \ ]= \frac{J}{TL^{2}}$ and $\kappa$ the thermal conductivity.
[Linear Response](Linear%20Response.md)
___
# Thermal Conductivity

> [!NOTE]- Derivation from kinetic theory
> In a simplified version of a 1D rod, heat flows down a temperature gradient. The temperature is therefore an implicit function of position $T[x]$. We also denote $\mathcal{Q}$ the heat energy per heat carrier. And so a heat carrier moving from a hot place (higher $x$) to a cold place (lower $x$) contributes a heat change of $$ \Delta \mathcal{Q} = -\Big[\mathcal{Q}\Big(T(x)\Big) - \mathcal{Q}\Big(T(x-v{\Delta t})\Big)\tag{1}\Big]$$In the limiting case$$ \lim_{\Delta t\to 0} \frac{\Delta \mathcal{Q}}{\Delta t} = -\frac{\partial \mathcal{Q}}{\partial T}\frac{\partial T}{\partial t} \ \Rightarrow \ -v\frac{\partial \mathcal{Q}}{\partial T}\frac{\partial T}{\partial x}\tag{2}$$In the last transition $dt = \frac{1}{v}dx$ was used.$$j^{\ q} =  \frac{dQ}{dt} \frac{1}{A} = \frac{Nd\mathcal{Q}}{dt} \frac{1}{A} \ \stackrel{(3)}{\Longrightarrow} -\frac{N}{A}v\frac{\partial \mathcal{Q}}{\partial T}\frac{\partial T}{\partial x} \tag{3} $$Writing the above in terms of the [[Mean Free Path]] $l=\tau\ v$
Where $v$ is the average velocity of heat carriers and $\tau$ is the relaxation time.$$ j^{\ q} = -\frac{1}{V} lv \frac{\partial Q}{\partial T}\frac{\partial T}{\partial x} \tag{4}$$Remembering the definition of [[Heat Capacity]] one finally gets $$ j^{\ q} = -\frac{lv}{V}C_{\small V}\frac{\partial T}{\partial x} = -lvc_{\small V}\frac{\partial T}{\partial x} = -\tau v^{2}c_{\small V}\frac{\partial T}{\partial x} \tag{5}$$When transitioning from the one dimensional $(5)$ into the general 3D case two things have to be taken into account
$$\frac{\partial}{\partial x}\longmapsto \nabla$$
$$(v_{x})^{2}=(v_{y})^{2}=(v_{z})^{2}= \frac{1}{3}v^{2}$$$$ j^{\ q} = \frac{1}{3}\tau v^{2}c_{\small V}(-\nabla T) \tag{6}$$Due to Fourier's law, stated in $(0)$ we finally have an expression for the thermal conductivity. 

We know that a temperature gradient results in the transfer of heat from hot to cold [transfer of heat](Direction%20of%20Heat%20Transfer) from a place of high temperature to a place of low temperature. We also expect temperature in a solid to be a scalar field, having both spatial and temporal dependence
$$Q \longmapsto Q\Big(T(\boldsymbol{x},t)\Big)$$
using the chain rule we, write the total time derivative of $Q$ as follows
$$\frac{dQ}{dt} = \frac{dQ}{dT}\left(- \frac{dT}{dx_{i}}\right) \frac{dx_{i}}{dt}= -C_{\small V}\boldsymbol{\nabla T\cdot v}\tag{2}$$
- The minus sign in the temperature gradient is due to heat flow pointing __down__ the temperature gradient
- For simplicity we also assume that heat travels in the direction of the gradient $\boldsymbol{\nabla T\cdot v}=v\nabla T$

We define the __heat flux__ through an area $A$ as
$$j_{\tiny Q} = \frac{dQ}{Adt} = \frac{1}{V} \frac{dQ}{dt}\ell = \frac{1}{V} \frac{dQ}{dt} v_{x}\tau = \frac{1}{V} \frac{dQ}{dt} {\frac{v}{\small\sqrt{3}}}\tau \tag{3}$$
Where $\ell$ is the [mean free path](Mean%20Free%20Path.md) of the heat carriers inside the solid, and $\tau$ is the relaxation time. By inserting $(2)$ into equation $(3)$ we get
$$j_{\tiny Q}=-\left(\frac{C_{\small V}}{3V}v^{2}\tau\right) \nabla T\equiv -\kappa\nabla T \quad \longrightarrow\quad \large\boxed{\begin{align*} \\ \quad
\kappa = \frac{1}{3}\tau v^{2}c_{\small V}
\quad \\\
\end{align*}}  \tag{4}$$
___
# Relation to Electric Conductivity
If one treats the electrons as particles in an [ideal gas](Classical%20Ideal%20Gas.md) where $\displaystyle\frac{1}{2}mv^{2}= \frac{3}{2}k_{B}T$ and $\displaystyle c_{\small V} = \frac{3}{2}k_{B} n$ the thermal conductivity is given by
$$ \kappa = \left[\frac{3}{2}(k_{B})^{2}\right] \left[ \frac{n\tau}{m_{e}}\right]T \tag{5}$$
in the [Drude model](Drude%20Model.md) of metals the term in the second brackets is the electric conductivity divided by the square of the charge. This established a connection between thermal and electric conductivity which goes as follows
$$ \kappa=\frac{3}{2}\left(\frac{k_{B}}{e}\right)^{2}\sigma T \tag{6}$$
This relationship - which is correct up to a factor - is known as __Wiedemann–Franz law__


