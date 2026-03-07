---
type: concept
discipline:
  - physics
field:
  - condensed-matter
---

# 1D Tight Binding Chain

We consider a chain of $N$ atoms separated by a distance $a$. Each atomic orbital is considered a separate state $\ket{n}$ and forms a basis $\braket{n|m}=\delta_{nm}$. This is an an approximation since, in practice, the orbitals do have some degree of overlap.

![center|400](../4%20Misc/Attachments/Pasted%20image%2020220310231316.png)

The [[Hamiltonian Operator|Hamiltonian]] of the system is given by

$$
\begin{align*}
H&=\frac{p^{2}}{2m}+\sum\limits_{j}V(\mathbf{r}-\mathbf{R}_j)\\ &\equiv K + \sum\limits_{j}V_{j}
\end{align*}
$$
Where $V_{j}$ is the potential of the $j^{\text{th}}$ atom in the chain. We more conveniently write the hamiltonian in a diagonal part for the $\ket{m}$ orbital and an off-diagonal term.
$$H= (K+V_{m}) + \sum\limits_{j\neq m}V_{j}$$
We next try to find the matrix elements of the hamiltonian
$$\begin{align*}
\braket{n|H|m} &= \braket{n|K+V_{m}|m} + \braket{n|{\small\sum\limits_{j\neq m}V_j}|m}\\
& = \varepsilon_{0}\braket{n|m} -t\Big(\braket{n|m-1}+\braket{n|m+1}\Big) 
\end{align*}$$
The second term is reached by assuming that the $\ket{m}$ orbital interacts with the adjacent orbitals, and any farther interaction is negligible. $t$ is known as the __hopping frequency__

> [!NOTE]- Potential Term
> More precisely $$ \left< n \left| \  \sum\limits_{j\neq m}V_{j} \ \right|  m \right> = \begin{cases} \ V_{0} &n=m  \\ -t &n=m\pm 1 \\ \ \ 0 & \text{otherwise} \end{cases}$$

# Wave Ansatz
We attempt at solving the Hamiltonian for a trial wave function using [[Linear Combination of Atomic Orbitals|LCAO]]
$$\ket{\psi}= \sum\limits_{n}\phi_{n}\ket{n} = \frac{1}{\sqrt{N}}\sum\limits_{n} e^{-ikna}\ket{n}$$
Where $\phi_{n}$ such that
$$\braket{\psi|H|\psi} \Rightarrow \varepsilon_{0}e^{-ikna} - t\big(e^{-ik(n-1)a} + e^{-ik(n+1)a}\big)= E_{n}e^{-ikna}$$
Finally, the energy in the $n^{\text{th}}$ site is
$$\mathcal{E}(k) = \varepsilon_{0} - 2t\cos{(ka)}$$
![center|600](../4%20Misc/Attachments/Pasted%20image%2020230204220308.png)
At the bottom of the band, the energy of the electron can be approximated to the second order
$$
\mathcal{E}(k) 
 \approx \mathcal{E}_{0} - 2t\left[ 1- \frac{(ka)^2}{2} \right]
\equiv \tilde{\mathcal{E}}_{0} + k^{2}a^{2}t
$$
# Effective Mass
By defining an effective mass $\large \left( \frac{\hbar^{2}}{2m^{*}} \equiv a^{2}t \right)$ the energy of the electron in the band is reminiscent of the energy of a free electron with an effective mass 
$$\mathcal{E}_{b} = \tilde{\mathcal{E}}_{0} + \frac{\hbar^{2}k^{2}}{2m^{*}}$$
for electrons in the energy band, the momentum states are the quantized crystal momenta
$$k =\frac{2\pi}{L}n = \frac{2\pi}{Na}n$$
with $n=1\dots N$ ranging from 

# Bandwidth
The bandwidth is defined as the maximum range of the energy in a Brillouin zone.
$$\mathcal{E}_{max}-\mathcal{E}_{min} = 4t$$
The value of $t$ increases as the distance between neighboring nuclei, $a$, decreases.

# Counting States

$$
\begin{align*}
N &- \text{nuclei}\\
L &= na \\
k &= \frac{2\pi}{L}p \quad p\in \mathbb{Z}\\
N_{k} &= \frac{\frac{2\pi}{a}}{\frac{2\pi}{L}} = \frac{L}{a} = N\\
\end{align*}
$$

So there are $N$ possible $k$ states, as expected, each can occupy two spin states $\uparrow$ or $\downarrow$ , so a band gap can fit $2N$ total states.
