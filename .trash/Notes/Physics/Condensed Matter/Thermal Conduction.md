#SS1 #solid #state #metal #thermodynamics 

- Thermal conduction is the transfer of heat in matter through microscopic collisions of particles (electrons, ions, atoms etc...)
- The __transfer of energy__ is usually mediated by the propagation of [[Phonons]] and [[Sommerfeld Model| free electrons]]
- The second law of thermodynamics postulates that the [[Direction of Heat Transfer| spontaneous direction of heat flow]] is down a temperature gradient

- Other methods of thermal conduction are [[Thermal Radiation]] and [[Convection]]

# Fourier's Law
The rate of heat transfer $\dot{Q}$ in a material with cross sectional area $A$ is proportional to the negative of the temperature gradient, with the proportionality constant being the _thermal conductivity_ of the material
$$\frac{dQ}{dt} \frac{1}{A}\equiv j^{ \ q} = -\kappa\nabla T \tag{0}$$
where $j$ is the heat flux density $\ \small\displaystyle [ \ j \ ]= \frac{J}{TL^{2}}$ and $\kappa$ the thermal conductivity.
[[Linear Response]]
## Thermal Conductivity

> [!NOTE]- Derivation from kinetic theory
> In a simplified version of a 1D rod, heat flows down a temperature gradient. The temperature is therefore an implicit function of position $T[x]$. We also denote $\mathcal{Q}$ the heat energy per heat carrier. And so a heat carrier moving from a hot place (higher $x$) to a cold place (lower $x$) contributes a heat change of $$ \Delta \mathcal{Q} = -\Big[\mathcal{Q}\Big(T(x)\Big) - \mathcal{Q}\Big(T(x-v{\Delta t})\Big)\tag{1}\Big]$$In the limiting case$$ \lim_{\Delta t\to 0} \frac{\Delta \mathcal{Q}}{\Delta t} = -\frac{\partial \mathcal{Q}}{\partial T}\frac{\partial T}{\partial t} \ \Rightarrow \ -v\frac{\partial \mathcal{Q}}{\partial T}\frac{\partial T}{\partial x}\tag{2}$$In the last transition $dt = \frac{1}{v}dx$ was used.$$j^{\ q} =  \frac{dQ}{dt} \frac{1}{A} = \frac{Nd\mathcal{Q}}{dt} \frac{1}{A} \ \stackrel{(3)}{\Longrightarrow} -\frac{N}{A}v\frac{\partial \mathcal{Q}}{\partial T}\frac{\partial T}{\partial x} \tag{3} $$Writing the above in terms of the [[mean free path]] $l=\tau\ v$
Where $v$ is the average velocity of heat carriers and $\tau$ is the relaxation time.$$ j^{\ q} = -\frac{1}{V} lv \frac{\partial Q}{\partial T}\frac{\partial T}{\partial x} \tag{4}$$Remembering the definition of [[heat capacity]] one finally gets $$ j^{\ q} = -\frac{lv}{V}C_{\small V}\frac{\partial T}{\partial x} = -lvc_{\small V}\frac{\partial T}{\partial x} = -\tau v^{2}c_{\small V}\frac{\partial T}{\partial x} \tag{5}$$When transitioning from the one dimensional $(5)$ into the general 3D case two things have to be taken into account
$$\frac{\partial}{\partial x}\longmapsto \nabla$$
$$(v_{x})^{2}=(v_{y})^{2}=(v_{z})^{2}= \frac{1}{3}v^{2}$$$$ j^{\ q} = \frac{1}{3}\tau v^{2}c_{\small V}(-\nabla T) \tag{6}$$Due to Fourier's law, stated in $(0)$ we finally have an expression for the thermal conductivity. 

Heat is essentially described by the temperature field which has both spatial and temporal dependence
$$Q \longmapsto Q\Big(T(\boldsymbol{x},t)\Big)$$
we wish to study the behavior of the transfer of heat due to a temperature gradient in a solid
$$\frac{dQ}{dt} = \frac{dQ}{dT}\left(- \frac{dT}{dx_{i}}\right) \frac{dx_{i}}{dt}= -C_{\small V}\boldsymbol{\nabla T\cdot v}\tag{1}$$
- Where we took into account that [[Direction of Heat Transfer|heat travels down a temperature gradient]] by taking minus the gradient in the chain of derivatives. 
- For simplicity we also assume that heat travels in the direction of the gradient $\boldsymbol{\nabla T\cdot v}=v\nabla T$.
- We define the __heat flux__ through an area $A$ as 
$$j_{\tiny Q} = \frac{dQ}{Adt} = \frac{1}{V} \frac{dQ}{dt}\ell = \frac{1}{V} \frac{dQ}{dt} v_{x}\tau = \frac{1}{V} \frac{dQ}{dt} \frac{v\tau}{\sqrt{3}} \tag{2}$$
Where $\ell$ is the [[mean free path]] of the heat carriers inside the solid, and $\tau$ is the relaxation time. By inserting $(1)$ into equation $(2)$ we get
$$j_{\tiny Q}=-\left(\frac{C_{\small V}}{3V}v^{2}\tau\right) \nabla T\equiv -\kappa\nabla T$$
$$ \large\boxed{\begin{align*} \\ \quad
\kappa = \frac{1}{3}\tau v^{2}c_{\small V}
\quad \\\
\end{align*}} $$
If one treats the electrons as particles in an [[Classical Ideal Gas|ideal gas]] where $\displaystyle\frac{1}{2}mv^{2}= \frac{3}{2}k_{B}T$ and $\displaystyle c_{\small V} = \frac{3}{2}k_{B} n$ the thermal conductivity is given by
$$ \kappa = \left[\frac{3}{2}(k_{B})^{2}\right] \left[ \frac{n\tau}{m_{e}}\right]T \tag{6}$$
in [[Drude Theory]] of metals the term in the second brackets is the electric conductivity divided by the square of the charge. This established a connection between thermal and electric conductivity which goes as follows
$$ \kappa=\frac{3}{2}\left(\frac{k_{B}}{e}\right)^{2}\sigma T$$