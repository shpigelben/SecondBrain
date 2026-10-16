---
type: concept
discipline:
  - physics
field:
  - atomic-molecular-physics
---

The rate of transition between states is given by [[Fermi Golden Rule]]
$$\Gamma_{nm} = \frac{2\pi}{\hbar}|W_{nm}|^{2}g(\hbar \omega)$$
- Where $g(\hbar\omega)$ is the density of states corresponding to the energy $\hbar \omega$
- and $|M_{nm}|$ is the perturbation matrix element that couples states $n$ and $m$
$$W_{nm} = \braket{n|V|m} =\int \psi^{*}_{n}(\mathbf{r})V(\mathbf{r})\psi_{m}(\mathbf{r})d^{3}\mathbf{r} \tag{1}$$
Where $V$ is the perturbation to the diagonal hamiltonian $\mathcal{H}=\mathcal{H}_{0} + V$. The most significant perturbation to mediate atom-light interaction is the dipole interaction (E1), in analogy to [[Radiation|classical theory of dipole radiation]] where the electron could be considered an oscillating dipole which emits radiation accordingly. The energy of a dipole in the presence of an electric field is
$$
E \to V =-\mathbf{p}\cdot \boldsymbol{\mathcal{E}} = -(-e\mathbf{r} )\cdot\boldsymbol{\mathcal{E}} = e\mathbf{r}\cdot \boldsymbol{\mathcal{E}} \tag{2}
$$
Since atoms are small relative to typical wavelength, their variation in electric field is negligible and the can be considered constant. The transition between states $\ket{1}$ and $\ket{2}$ is couples (enabled) by the __dipole moment__
$$
W_{12} = 
e\boldsymbol{\mathcal{E}}
\cdot\braket{1|\mathbf{r}|2} \propto\int \psi^{*}_{1}(\mathbf{r})\begin{pmatrix}x \\ y \\ z\end{pmatrix}\psi_{2}(\mathbf{r})d^{2}\mathbf{r} = \begin{cases}
\text{x - polarized light} \\
\text{y - polarized light} \\
\text{z - polarized light}
\end{cases}
$$
Spherical symmetry of the hydrogen atom calls for this more natural form
$$ W_{12}\propto \int\int Y^{*}_{lm}(\phi,\theta)\begin{pmatrix}\cos\theta\\ \sin\theta\cos\phi\\
\sin \theta\sin\phi
\end{pmatrix} Y_{l'm'}(\phi,\theta) \ d\Omega\tag{3}$$
By writing the [[spherical harmonics]] explicitly, and by making the following change of variables $\cos{\theta}=x$ we arrive at the following
$$\Rightarrow\left[\int\limits_{0}^{2\pi}e^{i(m-m')\phi}\begin{pmatrix}0 \\ \cos\phi \\ \sin\phi\end{pmatrix}d\phi\right] \left[\int\limits_{-1}^{1}P^{*}_{lm}(x){\small\begin{pmatrix}x \\ \sqrt{1-x^{2}} \\ \sqrt{1-x^{2}}\end{pmatrix}}P_{lm}(x)dx\right] \tag{4}$$
For a transition to occur, the integral of $(4)$ should not vanish, it is the coupling matrix element after all. This poses rules for allowed transitions.

# Orbital Quantum Number ( l )
 For the $dx$ integral over the [[Legendre polynomials]] we consider their __parity__ which is $(-1)^{l}$. This implies that the integration does not vanish for $l$ differences $\Delta l =\pm1, \pm3, \pm5 \dots$ but since we consider interaction with photons that carry only angular momentum of $\pm\hbar$ the selection rule tightens to $\Delta l = \pm1$

# Magnetic Quantum Number (m)
For the magnetic quantum number we consider the $d\phi$ part of the integral at $(4)$. We divide this into two cases. The first case is when light arrives __linearly polarized in the z direction__ (similar as the principle axis of the orbital angular momentum). In this case the $\Delta m =0$ must be satisfied in order for a transition to occur. The second case deals with the other two possibilities in which light arrives with polarization component in the $xy$ plane. In this case, by writing the sine and cosine as complex exponents it is clear that $\Delta m =\pm 1$ must hold for the transition to occur. For __unpolarized light__ all three transitions are possible $\Delta m =0,\pm 1$ while the transitions $\Delta m =\pm1$ are associated with __circularly polarized light__ $\sigma^{+}$ and $\sigma^{-}$ accordingly

# E1 Selection Rules

| Quantum Number        |      Light Polarization      |
| --------------------- |:----------------------------:|
| $$\Delta l =\pm1$$    |              0               |
| $$\Delta m =0,\pm1$$  |      unpolarized light       |
| $$\Delta m =0$$       |      $$\updownarrow_z$$      |
| $$\Delta m = \pm1$$   |    $$\updownarrow_{xy}$$     |
| $$\Delta m = +1 /-1$$ | $$\sigma^{+} / \sigma^{-} $$ |
