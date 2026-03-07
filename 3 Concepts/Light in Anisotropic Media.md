---
type: concept
discipline:
  - physics
field:
  - optics
  - electrodynamics
---

The [electromagnetic response](Electromagnetic%20Response.md) for waves in anisotropic media take the more general form 

$$
D_{i} = \varepsilon_{ij}E_{j}
$$

Where $\varepsilon_{ij}=\varepsilon_{ji}$ in nonmagnetic, transparent ==(real? non-absorbing?)== materials. Because of its real and symmetric nature, it is always diagonalizable.

$$
\varepsilon_{ij} = \begin{pmatrix}
\varepsilon_{xx} & \varepsilon_{xy} & \varepsilon_{xz} \\
\varepsilon_{yx} & \varepsilon_{yy} & \varepsilon_{yz}  \\
\varepsilon_{zx} & \varepsilon_{zy} & \varepsilon_{zz}
\end{pmatrix} \longmapsto \begin{pmatrix}
\varepsilon_{x}  & 0 & 0 \\
0 & \varepsilon_{y}  & 0  \\
0 & 0 & \varepsilon_{z}
\end{pmatrix} = \varepsilon_{0}\begin{pmatrix}
{n_{x}}^{2}  & 0 & 0 \\
0 & {n_{y}}^{2}  & 0 \\
0 & 0 & {n_{z}}^{2}
\end{pmatrix}
$$

Diagonalization corresponds to finding the principle dielectric axes of the crystal. A wave entering the medium might have different phase velocities depending on its polarization. A plane wave, fed into the [vector wave equation](Electromagnetic%20Waves.md) gives

$$
\mathbf{k}\times(\mathbf{k}\times \mathbf{E}) + \omega^{2}\mu \overline{\overline{\varepsilon}} \ \mathbf{E} =0
$$

This can be written explicitly in matrix notation

$$
\begin{pmatrix}
\omega^{2}\mu\varepsilon_{\times} - k_{y}^{2}-k_{z}^{2} & \omega^{2}\mu \epsilon_{xy} +k_{x}k_{y} & \omega^{2}\mu \epsilon_{xz}+k_{x}k_{z} \\
\omega^{2}\mu \epsilon_{yx}+k_{y}k_{x} & \omega^{2}\mu\varepsilon_{yy} - k_{x}^{2}-k_{z}^{2} & \omega^{2}\mu \epsilon_{yz}+k_{y}k_{z} \\
\omega^{2}\mu \epsilon_{zx}+k_{z}k_{x} & \omega^{2}\mu \epsilon_{zy}+k_{z}k_{y} & \omega^{2}\mu\varepsilon_{zz} - k_{x}^{2}-k_{y}^{2}
\end{pmatrix}\begin{pmatrix}
E_{x} \\ E_{y} \\ E_{z}
\end{pmatrix} =0
$$

for which non trivial solutions exist with a vanishing determinant. This gives a $4^{th}$ order polynomial in $k_{z}$.

## Uniaxial Material
In the case of a uniaxial material we can chose $n_{x}=n_{y}=n_{o}$ without loss of generalization which makes $z$ the optic axis as $n_{z}=n_{e}$. Applying this and calculating the determinant results in the following

$$
\left( \frac{{k_{x}}^{2}}{{n_{o}}^{2}} +\frac{{k_{y}}^{2}}{{n_{o}}^{2}} +\frac{{k_{z}}^{2}}{{n_{o}}^{2}}  - \frac{\omega^{2}}{c^{2}}\right)
\left( \frac{{k_{x}}^{2}}{{n_{e}}^{2}} +\frac{{k_{y}}^{2}}{{n_{e}}^{2}} +\frac{{k_{z}}^{2}}{{n_{o}}^{2}}  - \frac{\omega^{2}}{c^{2}}\right)=0
$$

which can be solved by setting each of the two factors to zero. Setting the first factor to zero results in a sphere in $\mathbf{k}$ space with a radius of $n_{0} \frac{w}{c}$. It is the solution for the propagation of ordinary waves for which the effective refractive index is $n_{0}$ regardless of direction of propagation $(\mathbf{k})$. The second term defines a spheroid, symmetric about the $z$ axis and it corresponds to the solution of the ordinary waves for which the effective refractive index ranges between $n_{o}$ and $n_{e}$ depending on the direction of propagation.
 
==Therefore, for any arbitrary direction of propagation (other than the optic axis), two distinct wave-vectors are allowed, corresponding to the polarizations of the ordinary and extraordinary waves==

___
The resulting equation defines a surface in k-space (known as the normal surface).  general direction of propagation $\mathbf{s}$ intersects the surface at two $k$ values that correspond to two difference phase velocities along this direction.
