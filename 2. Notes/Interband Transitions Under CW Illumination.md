---
type: note
degree: MSc
research: photoluminescence
---
$$
\begin{align}
\Gamma &= \underbrace{ \Gamma_{\scriptsize C,V}^{X} + \Gamma_{\scriptsize C,V}^{L} }_{ \text{inter} } + \underbrace{ \Gamma_{\scriptsize C,C}}_{ \text{intra} } \\  \\
&\propto \sum\limits_{j= X, L} |\mathbf{\mu}_{\scriptsize CV}^{j}|^{2} \int f^{j}_{\scriptsize V}(\mathbf{k}+\mathbf{q})\Big[ 1 - f^{j}_{\scriptsize C}(\mathbf{k}) \Big] d\mathbf{k} \\
&+ \quad \quad \  |\mathbf{\mu}_{\scriptsize CC}^{j}|^{2} \int f_{\scriptsize C}(\mathbf{k}+\mathbf{q})\Big[ 1 - f_{\scriptsize C}(\mathbf{k}) \Big] d\mathbf{k}

\end{align}
$$

where $\mathbf{k} = (k_{\scriptsize \perp},k_{\scriptsize \parallel})$. 
==should $\mathbf{q}=(q_{\scriptsize \perp}, q_{\scriptsize \parallel})$ ?==

The electron occupation at a $\mathbf{k}$ state in a certain band is given by
$$
f_b{\scriptsize }(\mathbf{k}) = \frac{1}{1+\exp\bigg[\beta\Big(\mathcal{E}_{\scriptsize b}{ (\mathbf{k})} - \mathcal{E}_{\scriptsize F}\Big)\bigg]}
$$
and the energy momentum relations of each band is given by
$$
\begin{align}
\mathcal{E}_{\scriptsize V}(\mathbf{k}) &= \mathcal{E}_{0V} - \frac{{\hbar ^{2}k_{\perp}^{2}}}{2m_{V \perp}} - \frac{{\hbar ^{2}k_{\parallel}^{2}}}{2m_{V \parallel}}  \\
\mathcal{E}_{\scriptsize C}(\mathbf{k}) &= \mathcal{E}_{0C} + \frac{{\hbar ^{2}k_{\perp}^{2}}}{2m_{C \perp}} - \frac{{\hbar ^{2}k_{\parallel}^{2}}}{2m_{C \parallel}}
\end{align}
$$
==$\mathcal{E}_{\scriptsize 0V}$ and $\mathcal{E}_{\scriptsize 0C}$ are given with respect to $\mathcal{E}_{\scriptsize F}$==
 
# Impossibility of free electron - photon interaction
$$
\begin{align} \\
E_{i}&=\frac{\hbar^{2}k^{2}}{2m} + \hbar\omega \\ \\
E_{f} &=  \frac{\hbar^{2}k'^{2}}{2m}
=\frac{\hbar^{2}}{2m}(\mathbf{k}+\mathbf{q})^{2} \\
&=\frac{\hbar^{2}}{2m}(k^{2}+2\mathbf{k}\cdot \mathbf{q}+q^{2}) \\

\end{align}
$$

$$
\frac{\hbar^{2}}{2m}(q^{2}+\mathbf{k}\cdot \mathbf{q}) \stackrel{!}{=} \hbar\omega = \hbar cq
$$

$$
q = \frac{2m_{e}c}{\hbar}-\hbar k\cos\theta
$$
$$
\underbrace{ \hbar cq }_{ \hbar\omega } = \underbrace{ 2m_{e}c^{2} }_{ \approx 10^{6} \ [eV] } - c \  \hbar k \cos \theta
$$

photon energies have to be enormous.

# Possibility of nearly-free electron - photon interaction

The presence of atomic structure in the background "breaks" the symmetry of free space and allows for a weaker conservation law

$$
\mathbf{k}' = \mathbf{k}+\mathbf{q} + \mathbf{K_{n}} 
$$

where $\mathbf{K_{n}} = \mathbf{b}_{1}n_{1}+\mathbf{b}_{2}n_{2}+\mathbf{b}_{3}n_{3}$ is a reciprocal lattice vector.

![center](../9.%20Misc/attachments/Pasted%20image%2020241015154456.png)

# Incorporating band energies in Fermi-Dirac distribution

![center](../9.%20Misc/attachments/Pasted%20image%2020241015154754.png)
- try to implement the simple symmetrical case of parabolic bands?
- in the non-equilibrium case there should seemingly be no contribution to interband transitions with $\hbar\omega _{\scriptsize L}<E_{g}$


