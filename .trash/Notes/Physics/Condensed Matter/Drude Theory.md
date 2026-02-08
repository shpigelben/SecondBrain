#condensed-matter #solids #metals #kinetic-theory #conductors 

$$ \mathbf{J} = \sigma \mathbf{E}\tag{1} $$

$$\mathbf{J}=(-e)n\braket{\mathbf{v}}\tag{2}$$

in the absence of electric field, the current density vanished. We assume that electrons velocity vanishes between collisions and that they are accelerated to velocity 

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
A classical [[Kinetic Theory]] of electrons. 

1. Scattering time $\large\tau$ (a phenomenological parameter), where the probability of scatter in time $dt$ is 
$$ \mathbb{P}[\text{scatter}]\equiv \mathbb{P}_{s}=\frac{dt}{\tau} $$ 

2. The average of final momentum is $\braket{\mathbf{P}_{f}}=0$

3. Each electron "sees" both electric and magnetic field

___
### General Model
We assume that after collision an electron loses its momentum, so at an interval $dt$ 

$$\begin{align*}
\mathbf{p}(t+dt) &= (1-\mathbb{p})\Big(\mathbf{p}(t)+\mathbf{f}dt\Big) + \mathbb{p}_{s}\Big(\mathbf{0}\Big) \\
&= \left(1-\frac{dt}{\tau}\right)\Big(\mathbf{p}(t)+\mathbf{f}dt\Big) \\ 
&=\mathbf{p}(t)- \left(\frac{dt}{\tau}\right)\mathbf{p}(t) + \mathbf{f}(t)dt + \mathcal{O}(dt^{2})
\end{align*}$$

rearranging and taking the limit of $dt \to 0$

$$ \frac{d\mathbf{p}(t)}{dt} = \mathbf{f}(t) - \frac{\mathbf{p}(t)}{\tau} \tag{1}$$

the accelerating force $\mathbf{f}$ is generally a [[Lorentz Force]]
$$ \mathbf{f} = e(\mathbf{E} + \mathbf{v}\times \mathbf{B}) $$
In the absence of fields $\mathbf{E}=\mathbf{M}=0$ the change in momentum of $(1)$ reduces to a separable differential equation whose general solution is
$$ \mathbf{p}(t)= \mathbf{p}_{0}\Large e^{-\frac{1}{\tau}(t-t_{0}) } \tag{2}$$
___
#### Steady State

A steady state assumes a zero net change in average momentum
$$ 0 \stackrel{!}{=} \left\langle \frac{d\mathbf{p}(t)}{dt}\right\rangle = \mathbf{f}(t) - \frac{\mathbf{p}(t)}{\tau} \tag{3}$$
We write the momentum in terms of velocity and the velocity in turn, in terms of [[Charge Density Current]]. 
$$ \mathbf{J} = n(e \mathbf{v}) \longrightarrow \mathbf{v}=\frac{\mathbf{J}}{ne} \tag{4}$$
Plugging the Lorentz force and the velocity of $(4)$ into $(3)$ 
$$ \mathbf{E} = \frac{1}{ne}\Big(\mathbf{J}\times \mathbf{B}\Big) + \frac{m}{ne^{2}\tau}\mathbf{J}\equiv E_{\perp} + E_{\parallel}$$
##### Case I - No Magnetic Field
$$\mathbf{J} = \frac{ne^{2}\tau}{m}\mathbf{E }=\sigma \mathbf{E}$$
##### Case II - Magnetic Field
$$E_{\perp}\equiv E_{\small Hall} = \frac{1}{ne}\Big(\mathbf{J}\times \mathbf{B}\Big)$$
___

### Thermal Conductivity
The [[Thermal Conduction#Thermal Conductivity|thermal conductivity]] of an electron gas (metals ?) is given by
$$ \kappa = \left[\frac{3}{2}(k_{B})^{2}\right] \left[ \frac{n\tau}{m_{e}}\right]T$$

