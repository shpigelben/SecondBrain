---
type: concept
discipline:
  - physics
field: []
---

Assume the universe is a box with lengths $L_{x}$, $L_{y}$ and $L_{z}$. We would like to calculate the number of momentum states for a free particle which are typically given (in position basis) by
$$\psi(x,y,z)= \frac{1}{\sqrt{L^{3}}}\large e^{-ik_{x}x}e^{-ik_{y}y}e^{-ik_{z}z}$$
We treat the box as having periodic boundary conditions (demanding that the wave function vanished on the wall is equivalent) which quantizes the possible momentum states
$$\begin{align}
&k_{x}L_{x} = 2\pi n_{x}\\
&k_{y}L_{y} = 2\pi n_{y}\\
&k_{z}L_{z} = 2\pi n_{z}
\end{align}$$
The smallest scale is given by $\Delta k_{i} = \frac{2\pi}{L_{i}}$ and generally the smallest volume
$$(\Delta k)^{d} = \frac{(2\pi)^{d}}{V}$$
Where $d$ is the dimension of phase space. This provides a measure when calculating areas in [[Phase Space]]. At zero temperature where no thermal behavior is relevant, one can count the number of states in a given volume $\Omega$ enclosed by an equal-energy surface.
$$N = \frac{\Omega}{(\Delta k)^{d}}=\frac{\Omega V}{(2\pi)^d}$$
For fermions one has to multiply by a factor of two (in the case of spin 1/2) to account for the number spins that can occupy each state.

# Density of States in Phase Space
In the general case in which states are distributed in phase space according to a distribution function $f(\mathcal{E})$ we count the number of possible states by integrating over the phase space volume enclosed by an energy surface.
$$
N = \int \frac{d^{3}x \ d^{3}k}{(2\pi)^{3}} f(\mathbf{x},\mathbf{k})
$$
Given that the distribution function is **spatially homogenous** the above can be reiterated as follows
$$
N = V \int\limits \frac{d^{3}k}{(2\pi)^{3}} f(\mathbf{k})
$$
Given that the distribution function is **isotropic is momentum** the above integral becomes an integral over the magnitude of the momentum
$$
n(\kappa) = \int\limits_{0}^{\kappa} \frac{k^{2}}{2\pi^{2}} f(k)\, dk
$$
where a simple transition from the **number of states** into the more commonly used **density of states**. It is also more common to count the number of states up to a certain energy and not necessarily up to a certain magnitude of momentum.
$$
\begin{align}
n(\mathcal{E}_{0}) &= \int\limits_{0}^{\mathcal{E}_{0}} \frac{k^{2}}{2\pi^{2}} f(k) \left( \frac{dk}{d\mathcal{E}} \right) \ d\mathcal{E} \\ &= \int\limits_{0}^{\mathcal{E}_{0}}f(\mathcal{E})g(\mathcal{E})  \, d\mathcal{E} 
\end{align}
$$
Finally, we arrive at a general expression of the more practical **degree of degeneracy** $g(\mathcal{E})$.
# Energy-Momentum Relation
The functional form of the degree of degeneracy $g$ depends on the nature of  entity whose states we are counting in phase space. Most simply and sparsely - photons and electrons

# In Terms of Energy
The energy of a free particle in terms of momentum is given by

> [!NOTE]- CHANGE OF VARIABLES
> $$\begin{align*}&E = \frac{\hbar^{2}k^{2}}{2m} \tag{a}\\& k = \frac{\sqrt{2mE}}{\hbar} \tag{b}\\&dE=\frac{\hbar^{2}}{m}kdk \tag{c}\\&k^{2}dk = \frac{mdE}{\hbar^{2}}\frac{\sqrt{2mE}}{\hbar} \tag{d}\end{align*}$$

plugging (d) into the spherical definition of $(1)$ gives us the __density of energy states per solid angle__
$$\frac{dn}{d\Omega}=\frac{V}{(2\pi)^{3}} \frac{m\sqrt{2mE}}{\hbar^{3}}dE = \frac{V}{h^{3}}\sqrt{2m^{3}E} \ dE$$
To calculate the number of states in an interval $[E,E+dE]$ we can multiply by $dn$ and integrate of the relevant solid angle (useful for scattering in specific directions).

 - One can think of energy values as shells in the 3D momentum space, and the solid angles as cones piercing those shells

$$ 
dn = \frac{V}{h^{3}}\sqrt{2m^{3}E} \ d\Omega dE \equiv \rho(E)dE 
$$
Where $\rho(E)$ is the density of energy state in a certain solid angle.

# Dimensionality
k Jacobians for different k dimensional spaces
$$
\begin{align}
\text{1D}: && 1 \ dk && \\
2D: &&2\pi k \ dk \\
3D: && 4\pi k^{2} \ dk
\end{align}
$$
transition to $\mathcal{E}\text{nergy}$
$$
\begin{align}
k &= \frac{\sqrt{ 2m_{e}\mathcal{E} }}{\hbar}\\ \\
dk &= \left( \frac{dk}{d\mathcal{E}} \right)d\mathcal{E} = \frac{1}{\hbar}\sqrt{ \frac{m_{e}}{2\mathcal{E}} } \ d\mathcal{E}
\end{align}
$$

$$
d^{3}k\to 4\pi k^{2}dk \to 4\pi k^{2} \left( \frac{d k}{d\mathcal{E}} \right) d\mathcal{E} \to 4\pi \left( \frac{{ 2m_{e}\mathcal{E}}}{\hbar^{2}} \right) \frac{1}{\hbar} \sqrt{ \frac{m_{e}}{2\mathcal{E}}} \; d\mathcal{E}= 4\pi\frac{m_{e}^{3/2}}{\hbar^{3}}\sqrt{ 2\mathcal{E} }
$$
___
$$
\begin{align}
g_{\scriptsize 1D}(\mathcal{E}) &=  \frac{1}{\hbar}\sqrt{ \frac{m_{e}}{2\mathcal{E}} }\\  \\
g_{\scriptsize 2D}(\mathcal{E}) &= 2\pi \frac{m_{e}}{\hbar^{2}} \\  \\
g_{\scriptsize 3D}(\mathcal{E})  & = 4\pi\frac{m_{e}^{3/2}}{\hbar^{3}}\sqrt{ 2\mathcal{E} }
\end{align}
$$
# Photonic Density of States

$$
\mathcal{E}_{n}=h\nu_{n} = \frac{hc}{\lambda_{n}}
$$

A free photon has no discretization and can have any value $\lambda_{n}\to\lambda$. A photon in a box however can fit half integer wavelengths into the length of the box $L$.
$$
\frac{\lambda_{n}}{2}n \stackrel{!}{=} L
$$
$$
\begin{align}
\mathcal{E}_{\text{ph}}=\hbar \omega 
&= \hbar c|k|  \\
&= \hbar c\sqrt{ k_{x}^{2}+k_{y}^{2}+k_{z}^{2} } \\
&= hc\sqrt{ \frac{1}{\lambda_{x}^{2}}+ \frac{1}{\lambda_{y}^{2}}+ \frac{1}{\lambda_{z}^{2}} }
\end{align}
$$
Now, considering that in each direction, an integer multiple of half the wavelength along this direction fits the length of the box in that direction, namely
$$
\frac{{\lambda_{nj}\cdot nj}}{2}\stackrel{!}{=}L_{j}\to \lambda_{nj} = \frac{2L_{j}}{nj}
$$
the possible energy states are therefore 
$$
\mathcal{E}_{\text{ph}}(\mathbf{n}) = \frac{hc}{2}\sqrt{ \left( \frac{n_{x}}{L_{x}} \right)^{2}+\left(\frac{n_{y}}{L_{y}} \right)^{2} +\left(\frac{n_{z}}{L_{z}} \right)^{2}}
$$
and in the special case of a cubic box $L_{x}=L_{y}=L_{z}$
$$
\mathcal{E}_{\text{ph}}(\mathbf{n})=\frac{hc}{2L}\sqrt{ n_{x}^{2}+n_{y}^{2}+n_{z}^{2} }
$$
# Joint Density of States (JDOS)

$$
\rho(\omega) = \frac{1}{\pi \hbar^{2}}(2\mu)^{3/2} \sqrt{ \hbar\omega - \mathcal{E}_{g} }
$$

$$
\int\limits f(\mathcal{E}+\hbar\omega)\Big[ 1-f(\mathcal{E}) \Big] \, g(\mathcal{E})d\mathcal{E}
$$

$$
\int\limits f(\mathcal{E}+\hbar\omega)g()
$$
