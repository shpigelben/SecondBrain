#QM2 #quantum #hamiltonian #symmetry

The [[Hamiltonian Operator|hamiltonian]] of a particle in a  continuous, infinite (or periodic) and homogeneous space is given by the familiar
$$\large \boxed{\begin{align*} \\ \quad
\hat{\mathcal{H}} = \frac{1}{2m}\left(\hat{p}-A(\hat{x})\right)^{2} +V(\hat{x})\quad \\\
\end{align*}} $$
Which can equivalently be written as follows (with the addition of charge to the equation for enlightenment)
$$ \mathcal{H} = \frac{p^{2}}{2m} - \frac{e}{2m}(\mathbf{p\cdot A+A\cdot p}) +\frac{(Ae)^{2}}{2m} + eV $$
In the absence of magnetic field, $\mathbf{A}=0$ and the hamiltonian simplifies to $\frac{1}{2m}p^{2}+V$. In the presence of  homogeneous magnetic field (which we orient in the z direction) , we have the freedom to select a symmetric gauge
$$ \mathbf{A} = \frac{1}{2}\mathbf{B}\times\mathbf{r} = \frac{1}{2}\begin{pmatrix}By \\ -Bx \\ 0\end{pmatrix} $$
It is clear in that form, that $\mathbf{A}$ and $\mathbf{p}$ commute. Taking this into consideration and inserting the gauge choice we can write the following
$$\begin{align*}
\frac{e}{2m}(\mathbf{p\cdot A+A\cdot p}) &=\frac{e}{m}\mathbf{p\cdot A}\\
&=\frac{e}{2m}\mathbf{p\cdot (B\times r})\\
&= \frac{e}{2m}\mathbf{B\cdot(r\times p)}\\
&=\frac{e}{2m}\mathbf{B\cdot L}
\end{align*}$$
- The first equality is valid since $[\mathbf{p},\mathbf{A}]=0$
- The third equality is due to the cyclic property of the triple product

Finally we can write the addition to the hamiltonian due to the presence of homogeneous magnetic field as follows
$$ \large\boxed{\mathcal{H}_{BL} =\frac{e}{2m}\mathbf{B\cdot L} \equiv  \mathbf{\Omega \cdot L} {\Large \ / \ } \mathbf{B \cdot \boldsymbol{\mu}}} $$
This term is the Zeeman term for a spinless particle, or the __orbital Zeeman term__

- It's existence in $\mathcal{H}$ due to the $B$ field implies [[Angular Momentum Operator|rotations]] which are obvious if one chooses to represent it as $\mathbf{\Omega \cdot L}$ , where $\mathbf{\Omega}$ is the angular frequency around the cartesian axes, and $\mathbf{L}$ is the angular momentum of the particle that generates the rotation.
- As is shown one can also choose to represent the Zeeman term in the less enlightening coupling between the magnetic field and the magnetic moment that the rotating particle generates $\boldsymbol{\mu}$

We denote the part of the hamiltonian without the Zeeman term as follows
$$ \large\boxed{\mathcal{H}_{0} = \frac{p^{2}}{2m}+ \left( \frac{(Ae)^{2}}{2m} + eV\right)} $$
So that the total hamiltonian of a spinless particle in homogenous magnetic field is given by
$$ \mathcal{H} = \mathcal{H}_{0} +\mathcal{H}_{BL} $$
___
# In Central Potential
Inserting $A^{2}$ under the gauge, and $\mathcal{H}$ can be  written as follows
$$ \mathcal{H} = \frac{p^{2}}{2m} + eV -\Omega L_{z} + \frac{1}{2}m \Omega^2(x^{2}+y^{2}) $$
In cases where the dynamical potential is central, it is more convenient to write the last term in spherical coordinates
$$ \mathcal{H} = \frac{p^{2}}{2m} + eV(r) -\Omega L_{z} + \frac{1}{2}m (\Omega r\sin{\theta})^2$$
It is now obvious that $[\mathcal{H}, L_{z}]=0$ therefore there is a subspace of $\mathcal{H}$  that is diagonalized in the same basis $\ket{m_l}$. In the case of the hydrogen atom, the degenerate states $\ket{m_{l}}$ are separated energetically in the presence of magnetic field. This is called the Zeeman splitting, And it occurs due to [[Invariance & Symmetry|symmetry breaking]]. For [[Hamiltonian of a Spin-Half Particle|spin 1/2 particles]] the hamiltonian has yet another Zeeman term.