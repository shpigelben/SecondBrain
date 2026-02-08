#note #condensed-matter #incomplete 
$$ \mathbf{J} = \sigma \mathbf{E}\tag{1} $$
$$\mathbf{J}=(-e)n\braket{\mathbf{v}}\tag{2}$$
Electric Field Creates an electric current density proportional to resistivity $\rho=\frac{1}{\sigma}$. We assume that electrons velocity vanishes between collisions and that they are accelerated to velocity
$$ \braket{\mathbf{v}} =\mathbf{a}_{\small E}\tau = \left(\frac{-e\mathbf{E}}{m}\right)\tau \tag{3}$$
Plugging both $(1)$ and $(2)$ into equation $(3)$ one can either get the conductivity in terms of the scattering time, or vice versa

_conductivity_
$$ \boxed{\begin{align*} \\ \quad
\sigma=\frac{e^{2}n\tau}{m}
\quad \\\
\end{align*}} $$
_scattering / relaxation time_
$$ \boxed{\begin{align*} \\ \quad
\tau= \frac{m\sigma}{e^{2}n} = \frac{m}{\rho e^{2} n}
\quad \\\
\end{align*}} $$
___
Drude model is classical kinetic model that treats [[Conduction Electrons]] of atoms in a solid, like particles flowing and colliding with other particles of the metal. Couple of notes:

1. Scattering time $\large\tau$ (a phenomenological parameter), is tied to the probability, $\mathbb{P}_{s}$, of an electron scattering in time $dt$
$$  \mathbb{P}_{s}=\frac{dt}{\tau} $$
2. The average of final momentum after a collision is $\braket{\mathbf{p}_{f}}=0$

___
### General Model
At a time interval $dt$ a particle has a probability to either collide have its momentum changed $\left(\mathbb{P}_{s}=\frac{dt}{\tau}\right)$, or to accelerate and generate momentum due to a force $\mathbf{dp}=\mathbf{f}dt$ that acts upon it
$$
\mathbf{p}(t+dt) = \mathbb{P}_{s}\cdot \mathbf{ p'} + \bar{\mathbb{P}}_{s}\cdot(\mathbf{p}(t)+ d\mathbf{p})
$$
We assume that the scattering is isotropic so that $\braket{ \mathbf{p'} }=0$. The expectation value of the momentum in time $t+dt$ is therefore
$$\begin{align*}
\braket{ \mathbf{p}(t+dt)  } &= \left( 1-\frac{dt}{\tau} \right)\braket{  \mathbf{p}(t) + \mathbf{f}dt }\\ 
\end{align*}  $$
by rearranging and taking the limit $dt\to 0$ we arrive at the **Drude transport equation**
$$ 
\boxed{ \begin{align*} \\ \quad
\frac{d}{dt}\braket{ \mathbf{p}(t) }  = \mathbf{f}(t) - \frac{\braket{ \mathbf{p}(t) }}{\tau} \quad \\\ 
\end{align*}}
 \tag{1}$$
The accelerating force $\mathbf{f}$ is generally a [[Lorentz Force]]
$$ \mathbf{f} = e(\mathbf{E} + \mathbf{v}\times \mathbf{B}) $$
In the absence of fields $\mathbf{f}=0$ the change in momentum of $(1)$ reduces to a separable differential equation whose general solution is
$$ \mathbf{p}(t)= \mathbf{p}_{0}\Large e^{-\frac{1}{\tau}(t-t_{0}) } \tag{2}$$
which correspond to a drag, a particle with momentum $p_{0}$ experiences until it comes to a halt. [(langevine equation without the noise?)](Langevin%20Model.md)

- [ ] a modified Drude model with another noisy term that considers interaction with phonons?
___
# Steady State Solution
A steady state assumes a net zero change in average momentum
$$ 0 \stackrel{!}{=} \left\langle \frac{d\mathbf{p}(t)}{dt}\right\rangle = \mathbf{f}(t) - \frac{\mathbf{p}(t)}{\tau} \tag{3}$$
We write the momentum in terms of velocity and the velocity in terms of [current density](Current%20Density.md)
$$ \mathbf{J} = n(-e) \mathbf{v} \longrightarrow \mathbf{v}=-\frac{\mathbf{J}}{ne} \tag{4}$$
Plugging the Lorentz force and the velocity of $(4)$ into $(3)$
$$ \mathbf{E} = \underbrace{ \frac{1}{ne}\Big(\mathbf{J}\times \mathbf{B}\Big) }_{ E_{\perp} } + \underbrace{ \frac{m}{ne^{2}\tau}\mathbf{J} }_{ E_{\parallel} } $$
## Case I - No Magnetic Field
$$\mathbf{J} = \frac{ne^{2}\tau}{m}\mathbf{E }=\sigma \mathbf{E}$$
## Case II - Magnetic Field
$$E_{\perp}\equiv E_{\small Hall} = \frac{1}{ne}\Big(\mathbf{J}\times \mathbf{B}\Big)$$
![[../9. Misc/Excalidraw/Halleffect|600|center]]

___
# Thermal Conductivity
The [[Thermal Conduction]] of an electron gas (monoatomic) is given by
$$ \kappa = \left[\frac{3}{2}(k_{B})^{2}\right] \left[ \frac{n\tau}{m_{e}}\right]T$$

$$
\rho_{air} g\epsilon + \rho_{water}g
$$

$$
\begin{align}
\frac{d\gamma_{in}}{dt}&=W_{in}-W_{out \ left} - W_{out \ right} \\
&=W_{in} - 2W_{out}\gamma_{in}
\end{align}
$$