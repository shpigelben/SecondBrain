#note #physics/molecular-physics #derivative | #incomplete 

We consider a simple case of two nuclei and a single electron. We wish to find the ground state (aka the lowest energy state) of this configuration.

![[../9. Misc/Excalidraw/LCAO atomic orbitals|center]]

The general hamiltonian for such a system is

$$
\begin{align*}
H &=  \frac{p^{2}}{2m} &&+V(\mathbf{r}-\mathbf{R_{1}}) &&+ V(\mathbf{r}-\mathbf{R_{2}}) \\
&\equiv K &&+ V_{1} &&+ V_{2} 
\end{align*}
$$

We begin by considering the extreme cases in which the electron is only affected by one of the nuclei. The energies of the resulting ground state orbitals are equal since the two nuclei are identical, but we treat the orbitals (the states) themselves as distinguishable

$$
\begin{align*}
(K+V_{1})\ket{1} &= \mathcal{E}_{0}\ket{1}\\
(K+V_{2})\ket{2}  &= \mathcal{E}_{0} \ket{2}  
\end{align*}
$$

We make use of the variational principle to find the ground state of the linear combination of these two orbitals

$$
\ket{\psi} = \phi_{1}\ket{1}+\phi_{2}\ket{2}   
$$