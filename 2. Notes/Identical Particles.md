#note #physics #quantum #concept | #statistical-mechanics 

In the quantum mechanical framework, the __hamiltonian of particles is invariant under permutation of coordinates__ - that means that particles, as described by quantum mechanical hamiltonians are indistinguishable from one another.

Consider two particles with respective coordinates $r_{1}$, $r_{2}$ with a wave function $\psi(r_{1},r_{2})$. Permutation operation $\hat{P}$ acts on this wave function as follows
$$\hat{P}\psi(r_{1},r_{2}) =\psi(r_{2},r_{1}) $$
- It is clear by the definition of the permutation operator, that $\hat{P}^{2}=\hat I$.
- The hamiltonian is invariant to permutation $P^{-1}\mathcal{H}P=\mathcal{H}$  which is another form of saying that the hamiltonian and the permutation operator commute $[P,\mathcal{H}]=0$ .
$$ \begin{align*}
\mathcal{H}\ket{\psi} &= \mathcal{E} \ket{\psi}\\
P\mathcal{H}\ket{\psi} &= \mathcal{E} P \ket{\psi}\\
\mathcal{H}P \ket{\psi} &= \mathcal{E} P \ket{\psi}
\end{align*} $$
The second transition is allowed since the two operators commute. The first and third expressions show that  $\ket{\psi}$ and $P \ket{\psi}$ are both eigenstates for $\mathcal{H}$, and if the energy is not degenerate then they describe the same state up to a factor of the eigenvalue of $P$. Since the permutation operator is both hermitian and unitary it has $\pm 1$ eigenvalues, therefore
$$\psi(r_{1},r_{2}) = P \psi(r_{1},r_{2}) = \pm \psi(r_{2},r_{1}) $$
The wave function is either symmetric $(+)$ or antisymmetric $(-)$ to permutations. Symmetric wave-functions are said to describe [[Bosons]] and are described by [[Particle Statistics|Bose-Einstein Statistics]], whereas antisymmetric wave functions are said to describe [[Fermions]] and obey the [[Particle Statistics|Fermi-Dirac Statistics]]