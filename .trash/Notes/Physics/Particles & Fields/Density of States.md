#phase #space

Assume the universe is a box with lengths $L_{x}$, $L_{y}$ and $L_{z}$. We would like to calculate the number of momentum states for a free particle which are typically given (in position basis) by
$$\psi(x,y,z)= \frac{1}{\sqrt{L^{3}}}\large e^{-ik_{x}x}e^{-ik_{y}y}e^{-ik_{z}z}$$
We treat the box as having periodic boundary conditions (demanding that the wave function vanished on the wall is equivalent) which quantizes the possible momentum states
$$\begin{align}
&k_{x}L_{x} = 2\pi n_{x}\\
&k_{y}L_{y} = 2\pi n_{y}\\
&k_{z}L_{z} = 2\pi n_{z}
\end{align}$$
In a universe so large that the states can be considered continuous one might take the differentials of the above
$$\begin{align}
&dk_{x}L_{x} = 2\pi dn_{x}\\
&dk_{y}L_{y} = 2\pi dn_{y}\\
&dk_{z}L_{z} = 2\pi dn_{z}
\end{align}$$
multiplying all three equation gives us a differential (momentum) piece of the 6D [[Phase Space]]
$$dk_{x}dk_{y}dk_{z}L_{x}L_{y}L_{z} = (2\pi)^{3}dn_{x}dn_{y}dn_{z}$$
Rearranging a bit gives us the differential number of states in the differential piece of momentum phase space
$$dn=\begin{cases}
\displaystyle\frac{V}{(2\pi)^{3}}d^{3}k &\text{(cartesian)} \\
\displaystyle\frac{V}{(2\pi)^{3}}d\Omega k^{2}dk &\text{(spherical)}
\end{cases}\tag{1}$$
This can also be written in the __density of momentum states__ form
$$\rho(k)=\frac{dn}{d^{3}k} = \frac{V}{(2\pi)^{3}}$$
# In Terms of Energy
The energy of a free particle in terms of momentum is given by

> [!NOTE]- CHANGE OF VARIABLES
> $$\begin{align*}&E = \frac{\hbar^{2}k^{2}}{2m} \tag{a}\\& k = \frac{\sqrt{2mE}}{\hbar} \tag{b}\\&dE=\frac{\hbar^{2}}{m}kdk \tag{c}\\&k^{2}dk = \frac{mdE}{\hbar^{2}}\frac{\sqrt{2mE}}{\hbar} \tag{d}\end{align*}$$

plugging (d) into the spherical definition of $(1)$ gives us the __density of energy states per solid angle__
$$\frac{dn}{d\Omega}=\frac{V}{(2\pi)^{3}} \frac{m\sqrt{2mE}}{\hbar^{3}}dE = \frac{V}{h^{3}}\sqrt{2m^{3}E} \ dE$$
To calculate the number of states in an interval $[E,E+dE]$ we can multiply by $dn$ and integrate of the relevant solid angle (useful for scattering in specific directions).

 - One can think of energy values as shells in the 3D momentum space, and the solid angles as cones piercing those shells

$$ dn = \frac{V}{h^{3}}\sqrt{2m^{3}E} \ d\Omega dE \equiv \rho(E)dE $$
Where $\rho(E)$ is the density of energy state in a certain solid angle 