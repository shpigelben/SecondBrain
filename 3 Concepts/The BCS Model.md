---
type: concept
discipline:
  - physics
field:
  - quantum-mechanics
---

# Abstract
Superconductivity has been around for more than century, but it was only half a century ago that a satisfactory account of the phenomenon was purposed by John Bardeen, Leon Cooper and John Robert Schrieffer. This microscopic theory, named BCS theory in their honor, remains central in the research of superconductivity to this day. In this short essay we present a simplified version of the model and an unfinished attempt at a numerical simulation of it. What this work may lack in insight it hopefully makes up for in clarity and may serve as a gentle introduction for those looking to explore the topic.

# Introduction
Superconductivity gives rise to several unique behaviors, some of which combat our basic physical intuition. Perhaps most notably is the complete disappearance of electrical resistance below the metal's critical superconducting temperature, a highly desirable trait for obvious reasons. The presence of resistance in normal metals is attributed to the scattering of electrons from phonons, impurities and defects in the lattice. These scattering events are responsible to the transformation of electromagnetic energy into heat and the increase in decoherence of the electrons' wave functions. The main idea proposed by the BCS theory is that the charge carriers in the superconducting phase are no longer electrons but rather pairs of bound electrons known as cooper pairs. These pairs have unique properties which make them resilient to the dissipative processes that effect electrons in normal conductors.

# Cooper Pairs
Electrons have identical electric charge and are usually repelled by one another. The idea of a bound pair of electrons is non-trivial and warrants at least a qualitative explanation (for a more rigorous mathematical treatment of the phenomenon you are invited to read ref [] ). Consider two electrons with opposite momenta progressing towards one another. Taking place in a vacuum or inside a very dilute gas, their scattering might look something like the illustration in fig [ ] (a), but inside a crystalline solid, their interaction is screened by the presence of tightly packed ion cores ref [Ashcroft Mermin] and unless they pass very close to one another, their trajectory would resemble the one shown in fig [ ] (b)

![center|700](../4%20Misc/Attachments/BCS2.png)

It is not only the lattice that effects the electrons by screening their coulombic potential, the electrons themselves exert coulombic force on the neighboring (positively charged) ions, pulling them toward the electron (fig [ ] (c)). This creates a distortion in the lattice as the ions come closer to the instantaneous location of the electron, creating a positively charged region which can in turn interact with another electron in its vicinity.

![center|700](../4%20Misc/Attachments/BCS3.png)

Keeping in mind that typical electron velocities are much greater than those of phonons in the lattice, by the time the lattice becomes distorted due to the presence of an electron, the electron is already gone. This is loosely illustrated in figure [ ] (d) for the case of the two counter-propagating electrons. This entire interaction has a binding energy which is readily broken by phonons at room temperature. In low enough temperatures though, phonons are much less energetic and the bound state can become dominant. This entire interaction can be treated as a composite entity, a quasi-particle, famously known as a cooper pair. In superconductors the entirety of electrons form cooper pairs below the critical temperature, and these become the charge carriers of the system instead of electrons. What makes cooper pairs so special is that they create a composite boson. As such they can undergo Bose-Einstein condensation, a process after which they all share the same ground state and wave function. This highly coherent state is resilient to the decohering effects of scattering, and the formation of cooper pairs is accompanied by the emergence of an energy gap which makes scattering between cooper pairs and phonons energetically inaccessible. Under these circumstances, a superconducting material will display no apparent losses of current (which now consists of cooper pairs as charge carriers).

# The BCS Model
After what was a very qualitative (yet hopefully enlightening) description of cooper pair formation, let us turn to a more rigorous treatment of the phenomenon by considering the BCS model which aims to capture this behavior in mathematical terms. Equation ( ) is a simplified one-dimensional variant that ignores the spin of the electrons.
$$
\begin{align*}
H = &-J\sum\limits_{x=1}^{N} ({C_{x}}^{\dagger}{C_{x+1}} + {C_{x+1}}^{\dagger}{C_{x}}) \\
&+ \ \ \sum\limits_{x=1}^{N} V_{x}{C_{x}}^{\dagger}{C_{x}} \\
&+ U\sum\limits_{x=1}^{N}({C_{x}}^{\dagger}{C_{x+1}}^{\dagger} + {C_{x+1}}{C_{x}}) 
\end{align*}
$$
With $C_{x}^{\dagger}$ and $C_{x}$ being the creation and annihilation operators respectively, and as their name suggests, they create and annihilate an electron in a specified site $x$. The first term can be identified as the translation term which makes electrons hop one site to the left or right. The second term simply counts the number of electrons in a given site (0 or 1) and assigns a binding energy to that site. The third term is the interaction term which has undergone a mean-field approximation and describes the creation or annihilation of two adjacent electrons. We wish to diagonalize the hamiltonian and find the ground state and energy of the system. Our first step is transition to momentum basis, using the following basis transformation relations
$$\begin{align*}
C^{\dagger}_{x} &= \frac{1}{\sqrt{ N}}\sum\limits_{k=1}^{N}e^{-ikx}C^{\dagger}_{k} \\
C_{x} &= \frac{1}{\sqrt{ N}}\sum\limits_{k=1}^{N}e^{ikx}C_{k} 
\end{align*}$$
Plugging this into the initial hamiltonian while making the simplifying assumption that $V_{x}=V=\text{const}$, results in the following
$$\begin{align*}
H = &-2J \sum\limits_{k} \cos(k) \  {C^{\dagger}}_{k}C_{k}\\
&  + V \sum\limits_{k} {C^{\dagger}}_{k}C_{k}\\
& +U\sum\limits_{k} e^{-ik}{C^{\dagger}}_{k}{C^{\dagger}}_{-k} + e^{ik}{C}_{-k}{C}_{k}
\end{align*}$$
Note that $k\to\frac{2\pi}{N}k$ is the discrete **lattice momentum** due to the discrete translational symmetry in position basis. By combining the diagonal part and embracing the following notations
$$
\begin{align}
2\varepsilon_{k} &\equiv V-2J\cos(k) \\
\Delta_{k} &\equiv Ue^{ik}
\end{align}
$$
we are able to write the Hamiltonian more neatly as follows
$$
\begin{align*}
H &= \sum\limits_{k} 2\varepsilon_{k}{C^{\dagger}}_{k}C_{k} \\
&+ \sum\limits_{k}\Delta_{k}^{*}{C^{\dagger}}_{k}{C^{\dagger}}_{-k} + \Delta_{k}{C}_{-k}{C}_{k}\\
\end{align*}
$$
Which can conveniently be written in a matrix form

$$
H=\mathcal{E}+\sum\limits_{k} \ \begin{align}
\begin{bmatrix}
C_{k}^{\dagger} & C_{-k}
\end{bmatrix} \\ \
\end{align} \begin{bmatrix}\varepsilon_{k} & \Delta_{k} \\
\Delta^{*}_{k} & -\varepsilon_{k}\end{bmatrix}\small\begin{bmatrix}C_{k} \\
{C^{\dagger}_{-k}}\end{bmatrix}
$$
With
$$
\mathcal{E}=\sum\limits_{k=1}^{N}\varepsilon_{k}=\text{const}
$$

It should be noted that the hamiltonian in momentum basis is often the starting point of most of the treatments in the BCS model. By diagonalizing the matrix in the hamiltonian, we essentially perform a Bogolyubov transformation and should arrive at the diagonal form of the BCS hamiltonian.

$$H=\mathcal{E} +\sum\limits_{k} \  \begin{align}
{\begin{bmatrix}{\small \gamma^{\dagger}_{k,{\small 1}}} & {\small \gamma ^{\dagger}_{k,{\small 2}}}\end{bmatrix}}\\ \
\end{align}{\small\begin{bmatrix}\sqrt{ {\varepsilon_{k}}^{2}+{U}^{2} } & 0 \\ 0 & -\sqrt{ {\varepsilon_{k}}^{2}+{U}^{2} }\end{bmatrix}} \begin{bmatrix}\gamma_{k,{\small 1}} \\ {\gamma}_{{k,{\small 2}}}\end{bmatrix}
$$

The new basis presents new fermionic operators ${\gamma}_{k,\small 1}^{\dagger}$ and $\gamma_{k, \small 2}^{\dagger}$ which create and annihilate a combination of an electron and a hole, quasi-particles known as Bogoliubons. Simple, yet cumbersome algebra allows us to find the transformation matrix that relates the momentum basis to the diagonalizing basis
$$\begin{bmatrix}\gamma_{k,{\small 1}} \\
{\gamma}_{{k,{\small }2}}\end{bmatrix} = \underbrace{ \begin{bmatrix}
u_{k} & -v_{k} \\ v_{k}^{*} & u_{k}
\end{bmatrix} }_{ \begin{align}
&\text{transformation} \\ &\text{matrix}
\end{align} } \begin{bmatrix}C_{k} \\
{C^{\dagger}}_{{-k}}\end{bmatrix}$$
where

$$
\begin{align}
u_{k} &=  1+\sqrt{ 1+ \left( \frac{\Delta_{k}}{\varepsilon_{k}} \right)^{2}}\\
v_{k} &= -\frac{\Delta_{k}}{\varepsilon_{k}}
\end{align}
$$


The diagonal Bogolyubov Hamiltonian can be reduced to the following form
$$
H = \mathcal{E} + \sum\limits_{k=1}^{N}\xi_{k}({\gamma_{k,\small 1}^{\dagger}}{\gamma_{k,\small 1}} - {\gamma_{k,\small 2}^{\dagger}}{\gamma_{k,\small 2}})
$$
Where
$$
\begin{align*}
\xi_{k} &\equiv\sqrt{{\varepsilon_{k}}^{2}+{U}^{2} } 
\end{align*}
$$
## BCS ground state and energy
Since $\xi_{k}$ is non-negative, is it apparent from the diagonalized hamiltonian that the ground state is filled with states that correspond to $\gamma_{k,2}$, as they have overall negative contribution to the hamiltonian, and void of states that correspond to $\gamma_{k,1}$ which have positive contribution. Such a state would have a ground state energy of
$$
\begin{align}
E_{0} &= \mathcal{E}-\sum\limits_{k=1}^{N}\xi_{k} \\
&=\sum\limits_{k=1}^{N}\varepsilon_{k} - {\small\sqrt{ \varepsilon_{k}^{2}+ U^{2} }}
\end{align}
$$
The ground state can be constructed by simply creating $\gamma_{k,2}$ states and annihilating  $\gamma_{k,1}$ as follows
$$
\ket{\psi}_{\small\bf{BCS}} = \prod_{k=1}^{N}\gamma_{k,\small 2}^{\dagger}\gamma_{k,\small 1}\ket{0} 
$$
וֹsing the transformation between the bases it is possible to arrive at the expression below

$$
\ket{\psi}_{\small\bf{BCS}} \propto \prod\limits_{\mathbf{k=1}}^{N}(u_{\mathbf{k}}+v_{\mathbf{k}}C^{\dagger}_{\mathbf{k}}C^{\dagger}_{-\mathbf{k}})\ket{0} 
$$
# Simulating of the Model
Analytic results are important for sanity checks and comparison with numeric results. Once we are confident that our annihilation and creation operators simulate the model appropriately though, we can work in position basis and perform numeric matrix exponentiation for the time evolution of various initial states from which we can compute expectation values.


First, we begin by initializing a basis. For a system with $N$ sites we construct a basis with $2^{N}$ states which are all the occupation permutations from the vacuum state $\ket{0,\dots,0}$ to the maximally occupied state $\ket{1,\dots,1}$. Then a $2^{N}$ dimensional vector is assigned to each state. This results in a correspondence between what I call the abstract state-space (on which we act with the operators) and the vectors space (in which we perform the same action in with the matrix representation of the operator).

an illustration for a possible basis assignment for a 3-site system.
$$
\begin{align}
\ket{000} &\to [1,0,0,0,0,0,0,0] =\boldsymbol{e}_{1}\\
\ket{100} &\to [0,1,0,0,0,0,0,0] =\boldsymbol{e}_{2}\\
\ket{010} &\to [0,0,1,0,0,0,0,0] =\boldsymbol{e}_{3}\\ \\
& \  \ \vdots \\ \\
\ket{111} &\to [0,0,0,0,0,0,0,1] =\boldsymbol{e}_{8}
\end{align}
$$

The next step is constructing the creation and annihilation operators. It is done using the following pseudo algorithm


```
for creation operator of a certain site (s)
	run over all basis states
		copy the current state (i)
		run over all sites leading to (s) of the copy
				count the number of occupied states before site (s) their sum equals nu
				if the site (s) is empty
					change the entry of the site from 0 to 1 this is the new state
					run over all basis states
						find the basis state (j) corresponding to the new state
						set the $ij$ entry of the creation matrix to (-1)^nu

the rest of the matrix entries are 0.
the annihilation matrix is the transpose of the creation matrix.
this has to be done for all sites (s) in order to produce all the creation and annihilation operators.
```

$$
\begin{matrix}
C_{2}^{\dagger}\ket{000}&\longrightarrow&\ket{010} \\ \\
\downarrow & \ & \downarrow \\ \\ \boldsymbol{e}_{1} & \underbrace{ \longrightarrow }_{ \big(C_{2}^{\dagger}\big)_{13} } & \boldsymbol{e}_{3}
\end{matrix}
 
$$
$$
\begin{align}
C_{2}^{\dagger}\ket{000}&\to 1*\ket{010}    \\
C_{2}^{\dagger}\ket{100}&\to -1*\ket{110}  \\
C_{2}^{\dagger}\ket{010}&\to 0  \\
C_{2}^{\dagger}\ket{001}&\to \ket{011}  \\
C_{2}^{\dagger}\ket{110}&\to 0  \\
C_{2}^{\dagger}\ket{101}&\to -1*\ket{111}  \\
C_{2}^{\dagger}\ket{011}&\to 0  \\
C_{2}^{\dagger}\ket{111}&\to 0 
\end{align}
$$
# Cooper Pairs
- Electrons in a lattice **can** display attractive interaction.
- This is known as phonon mediated interaction.
- In higher temperatures, thermal fluctuations break this attraction.
- But under the critical (superconducting) temperature this interaction becomes prevalent.

- Cooper pairs become the charge carriers of the material
- they are composite bosons which condense into a single state in the superconducting ground state
- As they are in a single state they "travel" in a completely coherent manner which doesn't suffer from the decoherence associated with scattering off impurities
- And their formation creates an otherwise nonexistent energy gap for which electron-phonon scattering - the main mechanism responsible for resistivity in normal conductors - is energetically inaccessible. 
___
The interaction between two electrons can be described by the following hamiltonian

$$
\begin{align}
\mathcal{H}=&\frac{1}{2m}({\boldsymbol{p}_{1}}^{2}+{\boldsymbol{p}_{2}}^{2})+V(\boldsymbol{r}_{1}-\boldsymbol{r}_{2}) \\
=- &\frac{\hbar^{2}}{2m}({\boldsymbol{\nabla}_{1}}^{2}+{\boldsymbol{\nabla}_{2}}^{2})+V(\boldsymbol{r}_{1}-\boldsymbol{r}_{2})
\end{align}
$$
This is a two body problem which is much more naturally solved in terms of the center of mass (COM) and the relative displacement which are defined as follows

$$
\begin{align}
\boldsymbol{R}&\equiv\frac{1}{2}(\boldsymbol{r}_{2}+\boldsymbol{r}_{2}) \\
\boldsymbol{r}&\equiv\boldsymbol{r}_{1}-\boldsymbol{r}_{2}
\end{align}
$$

For the transformation to be canonical the following must also be satisfied

$$
\begin{align}
\boldsymbol{P}&=\boldsymbol{p}_{1}+\boldsymbol{p}_{2}\to \boldsymbol{\nabla}_{R}= \boldsymbol{\nabla}_{1}+\boldsymbol{\nabla}_{2} \\
\boldsymbol{\rho}&=\boldsymbol{\rho}_{1}+\boldsymbol{\rho}_{2}\to \boldsymbol{\nabla}_{r}= \frac{1}{2}(\boldsymbol{\nabla}_{1}-\boldsymbol{\nabla}_{2})
\end{align}
$$
Following this transformation, the hamiltonian becomes

$$
\begin{align}
\mathcal{H} &= \underbrace{ \frac{\hbar^{2}\boldsymbol{\nabla}_{R}^{2}}{2M} }_{ \mathcal{H}_{\small\text{COM}} } + \underbrace{ \frac{\hbar^{2}\boldsymbol{\nabla}_{r}^{2}}{2\mu}+V(\boldsymbol{r}) }_{ \mathcal{H}_{\small\text{rel}} } \\
\end{align}
$$
Where $M=2m^{*}$ and $\mu=m^{*}/2$. The hamiltonian separates into a hamiltonian for the motion of the COM and another for the relative motion. A general solution can therefore be

$$
\Psi(\boldsymbol{r},\boldsymbol{R})=\psi(\boldsymbol{r})e^{i\boldsymbol{K}\cdot \boldsymbol{R}}
$$
The eigenvalue problem can be written as
$$
\begin{align}
\mathcal{H}\Psi \Rightarrow \Big[\mathcal{H}_{\small\text{COM}}+\mathcal{H}_{\small\text{rel}}\Big]\Psi &= E\Psi \\
\frac{\hbar^{2}\boldsymbol{K}^{2}}{2M}\Psi + \mathcal{H}_{\small\text{rel}}\Psi &=E\Psi \\
\cancel{ e^{i\boldsymbol{K}\cdot \boldsymbol{R}} } \ \mathcal{H}_{\small\text{rel}}\psi(\boldsymbol{r})&=\left( E-\frac{\hbar^{2}\boldsymbol{K}^{2}}{2M} \right)\cancel{ e^{i\boldsymbol{K}\cdot \boldsymbol{R}} }\psi(\boldsymbol{r}) \\
\mathcal{H}_{\small\text{rel}}\psi(\boldsymbol{r})&\equiv \tilde{E}\psi(\boldsymbol{r})
\end{align}
$$

For a given $\tilde{E}$ the lowest energy $E$ is the one for which the COM energy vanishes $(\boldsymbol{K}=0)$. We therefore consider the case of $\tilde{E}=E$ and seek to solve the following

$$
\mathcal{H}_{\small\text{rel}}\psi(\boldsymbol{r}) \Rightarrow \quad \left[ \frac{\hbar^{2}\boldsymbol{\nabla}_{r}^{2}}{2\mu}+V(\boldsymbol{r}) \right]\psi(\boldsymbol{r}) = E\psi(\boldsymbol{r})
$$
By taking the Fourier transform of the above, we get

$$
\begin{align}
\mathcal{F}\Big[ V(\boldsymbol{r})\psi(\boldsymbol{r}) \Big] &= \mathcal{F}\left[ \left( E-\frac{\hbar^{2}\boldsymbol{\nabla}^{2}}{2\mu} \right) \psi(\boldsymbol{r}) \right] \\ \\
\tilde{V}(\boldsymbol{k})*\tilde{\psi}(\boldsymbol{k}) &= \left( E - \frac{\hbar^{2}k^{2}}{2\mu} \right)\tilde{\psi}(\boldsymbol{k}) \\ \\
\int\limits_{}^{}  \, \frac{dk'^{3}}{(2\pi)^{2}}V(\boldsymbol{k}-\boldsymbol{k}') \tilde{\psi}(\boldsymbol{k}')& = \underbrace{ (E-2\varepsilon_{k}) }_{ E_{b} }\tilde{\psi}(\boldsymbol{k})
\end{align}
$$
Where in the second row, we used the convolution theorem. In the third row we identify $E_{b}$ as the binding energy and $\varepsilon_{k}$ as the energy of a single free electron. When $E_{b}$ is negative, which is when $E$ is smaller than the energy of the two free electrons, they are in a bound state. We would like to understand under which circumstance this occurs.