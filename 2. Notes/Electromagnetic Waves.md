#note #physics #electrodynamics #derivative

$$
\large\nabla^{2}\mathbf{E} = \mu\epsilon \frac{ \partial^{2} \mathbf{E} }{ \partial t^{2} }
$$

$$
\mu\epsilon = \frac{1}{c^{2}}= \frac{n^{2}}{c_{0}^{2}}
$$

# Derivation
We begin by taking the curl of Ampere's law

$$
\begin{align}
\nabla \times \mathbf{E} &= -\frac{ \partial \mathbf{B} }{ \partial t}  \\
\nabla \times (\nabla \times \mathbf{E}) &= - \nabla \times \frac{ \partial  \mathbf{B}}{ \partial t }   \\ \\
&\downarrow \ \{\mathbf{B=\mu\mathbf{H}}\}\\ \\
\nabla( \nabla \cdot \mathbf{E} ) - \nabla^{2}\mathbf{E} &= - \frac{ \partial  }{ \partial t }\Big[  \mu(\nabla \times \mathbf{H})+ \mathbf{H}\times \cancel{ \nabla\mu }\Big]
\end{align}
$$

Instead the curl of the magnetic field we insert Faradays equation, and instead of the divergence of the electric field we insert the charge density according to Gauss. We assume a homogenous magnetic permeability so its gradient vanishes.

$$
\begin{align}
\nabla^{2}\mathbf{E} &=  \mu \frac{ \partial  }{ \partial t} \left[ \frac{ \partial \mathbf{D} }{ \partial t } + \mathbf{J}  \right]  +\nabla\rho \\ \\
&\downarrow \ \{\mathbf{\mathbf{D}=\epsilon\mathbf{E}}\}\\ \\
\nabla^{2}\mathbf{E} &= \mu\epsilon \frac{ \partial^{2} \mathbf{E} }{ \partial t^{2} } + \mu \frac{ \partial  \mathbf{J} }{ \partial t }  +\nabla \rho  \\ \\
&\downarrow \ \{\mathbf{J=\sigma \mathbf{E}}\}\\ \\ 
\nabla^{2}\mathbf{E} &= \mu\epsilon \frac{ \partial^{2} \mathbf{E} }{ \partial t^{2} } + \sigma\mu \frac{ \partial  \mathbf{E} }{ \partial t }
\end{align}
$$


==read about free charges $\rho$ in electric conductors. surface charges evenly distribute and make the electric field vanish inside the metal== 

$$
\begin{align}
k^{2} &= \mu\epsilon\omega^{2}-i\mu \sigma\omega  \\
&=\mu\epsilon\left( 1-i \frac{\sigma}{\omega} \right)\omega^{2} \\
&\equiv \mu\epsilon' \omega^{2}
\end{align}
$$

This is the most general case were both magnetic and electric response are present, and there are both charge and current densities present. For current-less and charge-less media we are left with an ordinary [wave equation](../4.%20Unassigned/Wave%20Equation.md)
$$
\nabla^{2}\mathbf{E} = \mu\epsilon \frac{ \partial^{2} \mathbf{E} }{ \partial t^{2} } 
$$
A traveling wave solution to this equation would reveal that the propagation speed of a **monochromatic** electric field in this medium is
$$
c = \frac{1}{\sqrt{ \mu\epsilon }} = \frac{1}{\sqrt{ \mu_{0}\epsilon_{0} }} \frac{1}{\sqrt{ \mu_{r}\epsilon_{r} }} = \frac{c_{0}}{n}
$$

For most materials $\mu \approx 1$ and the refractive index is simply $\sqrt{ \epsilon_{r} }$ 

# Relation Between Electric & Magnetic Components

$$
\mathbf{k}\times \mathbf{E} = \omega \mathbf{B}
$$
$$
|k| | E| = ck |B| \Rightarrow | E | =  k | B |
$$

$$
|H| = \frac{|B|}{\mu_{0}} = \frac{|E|}{c\mu_{0}} = \frac{|E|}{\eta_{0}}
$$

$$
\eta = \frac{|E|}{|H|} = \sqrt{ \frac{\mu}{\epsilon} }
$$
# Dispersion Relation
$$
E\propto e^{i(kx-\omega t)}
$$
$$
k^{2} = \frac{n^{2}}{c_{0}^{2}}\omega^{2} = n^{2}k_{0}^{2}
$$
$$
\omega = k_{0}c_{0} = kc
$$
# Direction of energy propagation

___
$$
0=\nabla\cdot \mathbf{D} = \nabla\cdot (\varepsilon \mathbf{E}) = (\nabla\varepsilon)\cdot \mathbf{E} + \varepsilon \nabla\cdot \mathbf{E}
$$
in homogeneous materials $\nabla\varepsilon=0$ and consequently $\nabla\cdot \mathbf{E}=0$. A plane wave then satisfies $\mathbf{k}\cdot \mathbf{E}=0$ which means that the electric field is perpendicular to the direction of propagation. This, however, is not necessarily the case for inhomogeneous medium in which longitudinal components are occur.






