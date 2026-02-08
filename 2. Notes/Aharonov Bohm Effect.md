#note #quantum 

We consider the following system which consists of a charged ring $(L;e)$ through which there is a flux $\Phi_B$ due to a magnetic field that exists singularly in the middle of the ring $\nabla\times\mathbf{B} = 0 \quad \forall r\neq 0$
$$\Phi = \iint_{\mathcal{S}} \mathbf{B}\cdot d\mathbf{S} = \oint_{\partial\mathcal{S}} \mathbf{A}\cdot d\mathbf{l}$$
![[../9. Misc/attachments/Ring around a solenoid.png|center|250]] 
 
 The simplest gauge choice for the [vector potential](Hamiltonian%20Operator.md) is $A= \frac{\Phi_B}{L}$. The hamiltonian of a charged ring subjected in magnetic flux is
$$
\hat{\mathcal{H}} = \frac{1}{2m}\left(\hat{p}-\frac{e\Phi_B}{cL}\right)^{2}
$$
One can verify that $[\hat{\mathcal{H}},\hat{p}] = 0$ and the momentum and the hamiltonian are both diagonalized in the same basis. It is also apparent that the system has azimuthal symmetry and so it is [[Invariance & Symmetry|symmetric under translations]] in the direction ==(how? in what direction)==. A hamiltonian with symmetry to translations has momentum eigenstates $\ket{k}$ such that $\hat{p}\ket{k} = k_n{\ket{k}} \Rightarrow \frac{2\pi\hbar}{L}n\ket{k}$ where $n=\pm 1,\pm 2, ...$ and the eigen-energies are

$$
E_n = \frac{1}{2m}\left(\frac{2\pi\hbar}{L}n-\frac{e\Phi_B}{cL}\right)^{2} = \frac{1}{2m}\left(\frac{2\pi\hbar}{L}\right)^{2}\left(n-\frac{e\Phi_B}{2\pi\hbar c}\right)^{2}
$$

The quantity $\frac{2\pi\hbar c}{e} = \frac{hc}{e}$ is called a [[Fluxon]] and is a basic unit of flux in nature. The plot beneath shows the the various energy levels (each curve corresponds to a different $n$) and a function of flux in Fluxon units.

![[../9. Misc/attachments/Pasted image 20211122080718.png|center|500]]

It is apparent that the energy spectrum repeats itself for integer fluxon values of flux. It is obvious that even though the ring does not "feel" a magnetic field, the existence of flux generates [[Phase Accumulation]] which in turn affects the hamiltonian and consequently the physical system. The [[vector potential]] in this case is no less physical than the magnetic field. This effect is known as the Aharonov Bohm effect.

The intersections in the graph above, demonstrate a [[degeneracy]] that arises due to the symmetric nature of the system. Every intersection represents two energy states that share an energy level and they occur for specific values of flux that correspond to the circular symmetry of the system.

The system is symmetric to both rotation (=translation in 1D ring, ring=torus=sphere in 1D) and reflection. Introducing something like a delta scatterer will break those symmetries, consequently the degeneracies would vanish.