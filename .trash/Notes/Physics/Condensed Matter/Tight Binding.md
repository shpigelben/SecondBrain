# 1D Tight Binding Chain
We consider a chain of $N$ atoms separated by a distance $a$. Each atomic orbital is considered a separate state $\ket{n}$ and forms a basis $\braket{n|m}=\delta_{nm}$. 
This is an over simplification, since in practice the orbitals have some degree of overlap. Nevertheless, for the purpose of introduction, this simplification is more beneficial.

![[Pasted image 20220310231316.png|400]]

The [[Hamiltonian Operator|Hamiltonian]] of the system is given by
$$
\mathcal{H}=\frac{p^{2}}{2m}+\sum\limits_{j}V(\mathbf{r}-\mathbf{R}_j)\\ = K + \sum\limits_{j}V_{j}
$$
Where $V_{j}$ is the potential of the $j^{\text{th}}$ atom in the chain. We more conveniently write the hamiltonian in a diagonal part for the $\ket{m}$ orbital and an off-diagonal term.
$$\mathcal{H}= (K+V_{m}) + \sum\limits_{j\neq m}V_{j}$$
We nest try to find the matrix elements of the hamiltonian
$$\begin{align*}
\braket{n|\mathcal{H}|m} &= \braket{n|K+V_{m}|m} + \braket{n|{\small\sum\limits_{j\neq m}V_j}|m}\\
& = \varepsilon_{0}\braket{n|m} -t\Big(\braket{n|m-1}+\braket{n|m+1}\Big) 
\end{align*}$$
The second term is reached by assuming that the $\ket{m}$ orbital interacts with the adjacent orbitals, and any farther interaction is negligible. $t$ is known as the __hopping frequency__

___
# Wave Ansatz
We attempt at solving the Hamiltonian for a trial wave function using [[LCAO]] (linear combination of atomic orbitals)
$$\ket{\psi}= \sum\limits_{n}\phi_{n}\ket{n} = \frac{1}{\sqrt{N}}\sum\limits_{n} e^{-ikna}\ket{n}$$
Where $\phi_{n}$ such that 
$$\braket{\psi|\mathcal{H}|\psi} \Rightarrow \varepsilon_{0}e^{-ikna} - t\big(e^{-ik(n-1)a} + e^{-ik(n+1)a}\big)= E_{n}e^{-ikna}$$
Finally, the energy in the $n^{\text{th}}$ site is
$$\large\boxed{E_{n}(k) = \varepsilon_{0}+ 2t\cos{(ka)}}$$
<center><iframe src="https://www.desmos.com/calculator/mn5ce3dzuw?embed" width="500" height="500" style="border: 1px solid #ccc" frameborder=0></iframe></center>

___
# Bandwidth
