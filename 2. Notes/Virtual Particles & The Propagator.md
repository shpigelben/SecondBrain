#note #physics #particle-physics #derivative 

The transition rate between initial state $\ket{i}$ to a final state $\ket{f}$ is given by the [[Fermi Golden Rule]]
$$\Gamma_{if} = 2\pi |T_{if}|^{2} \rho\small(E_{f})$$
The transition matrix element $T_{if}$ due to a perturbation $V$, is given by the [[Perturbation Theory|perturbation expansion]] of the energy to second order
$$T_{if} = \braket{f|V|i} + \sum\limits_{j\neq i} \frac{\braket{f|V|j}\braket{j|V|i}}{ E_{i}-E_{j}} + \dots$$
If we consider the process of [[scattering]], the first term can be viewed as scattering directly from initial to final state, while the second term can be view as scattering via an intermediate state $\ket{j}$. Notice that the second term consists of the summation over all possible intermediate states $\ket{j}$.

![[../9. Misc/attachments/Pasted image 20220502111950.png]]

___
# Left Time ordering
For the process on the left, in which $a$ emits a particle $X$ 
$$\begin{align*}
&\ket{i} = \ket{a+b}\\
&\ket{j} = \ket{c+X+b}\\
&\ket{f} = \ket{c + d}
\end{align*}$$
The matrix element for that interaction is given by
$${T^{ab}}_{if} = \frac{\braket{f|V|j}\braket{j|V|i}}{E_{i}-E_{j}} = \frac{\braket{d|V|X+b}\braket{c+X|V|a}}{(E_{a}+E_{b})- (E_{c}+E_{\small X} + E_{b}) } \tag{1}$$
__For such interaction (second order) momentum s conserved, but energy is not $E_{i}\neq E_{j}$__. The exchange particle $X$ satisfies $E_{\small X}^{2} = \mathbf{p}_{\small X}^{2} + m_{\small X}^{2}$. Next want the matrix elements to be [[../Lorentz Invariant Phase Space (LIPS)|Lorentz invariant]] and so we use the following 
$$V_{ji} = \frac{\mathcal{M}_{ji}}{\prod\limits_{k}\sqrt{2E_{k}}}$$
Where $\mathcal{M}_{ji}$ is the Lorentz invariant form. Specifically for the above example
$$\begin{align*}
V_{ji} &= \braket{c+X|V|a} = \frac{\mathcal{M}_{a\to c+X}}{\sqrt{2E_{a}2E_{c}2E_{\small X}}}\equiv \frac{g_{a}}{\sqrt{2E_{a}2E_{c}2E_{\small X}}} \\
V_{fj} &= \braket{d|V|b+X} = \frac{\mathcal{M}_{b+X\to d}}{\sqrt{2E_{d}2E_{b}2E_{\small X}}}\equiv \frac{g_{b}}{\sqrt{2E_{d}2E_{b}2E_{\small X}}}
\end{align*} $$
$g_{a}$ and $g_{b}$ are the coupling strength at the __interaction vertex__ using these definitions we can write equation $(1)$ for the scattering process as follows
$$\begin{align*}
{T^{ab}}_{fi} &= \frac{1}{2E_{\small X}} \frac{1}{\sqrt{2E_{a}2E_{b}2E_{c}2E_{d}}} \frac{g_{a}g_{b}}{E_{a}-E_{c}-E_{\small X}} \\
{\mathcal{M}^{ab}}_{fi}&= \frac{1}{2E_{\small X}}  \frac{g_{a}g_{b}}{E_{a}-E_{c}-E_{\small X}}
\end{align*}$$
Where finally ${\mathcal{M}^{ab}}_{fi}$ is the amplitude for that specific process

# Right Time Ordering
By going through the exact same procedure we can get the amplitude for the second process which is described in the right side of the above figure
$${\mathcal{M}^{ba}}_{fi} = \frac{1}{2E_{\small \hat{X}}}  \frac{g_{a}g_{b}}{E_{b}-E_{d}-E_{\small \hat{X}}}$$
where the exchange particle might be different due to $a$ and $b$ having different properties that the exchange particle might have to conserve (different charges etc), for a photon as an exchange particle the two terms are equivalent.

# Total Process
using energy conservation $E_{a}+E_{b}=E_{c}+E_{d}$ we have $E_{a}-E_{c}=-(E_{b}-E_{d})$. using that we can arrive at the total amplitude for the process  
$${\mathcal{M}}_{fi}={\mathcal{M}^{ab}}_{fi}+{\mathcal{M}^{ba}}_{fi} = \frac{g_{a}g_{b}}{(E_{a}-E_{c})^{2} - E_{\small X}^{2}}\tag{3}$$

# The Propagator
since the exchange particle still satisfies the energy-momentum relation
$$\begin{align*}
m_{\small X}^{2} &= E_{\small X}^{2} - \mathbf{p}_{\small X}^{2}\\
&  = E_{\small X}^{2} - (\mathbf{p}_{c} - \mathbf{p}_{a})^{2}\\
\\
\Rightarrow E_{\small X}^{2} &= m_{\small X}^{2} + (\mathbf{p}_{c} - \mathbf{p}_{a})^{2}
\end{align*}$$
Plugging this into $(3)$ gives 
$$\begin{align*}
{\mathcal{M}}_{fi}={\mathcal{M}^{ab}}_{fi}+{\mathcal{M}^{ba}}_{fi} &= \frac{g_{a}g_{b}}{\Big[(E_{a}-E_{c})^{2} - (\mathbf{p}_{c} - \mathbf{p}_{a})^{2}\Big] + m_{\small X}^{2}}\\
&=\frac{g_{a}g_{b}}{(P_{a}-P_{c})^{2} +m_{x}}
\end{align*}$$
Where $P_{a}$ and $P_{b}$ are [[Four-momenta|four vectors]]. We simplify further by setting $P_{a}-P_{c}\equiv q$ which is just the four-momentum of the exchanged __virtual__ particle $X$. Finally we arrive at the final expression for the interaction amplitude
$$\large\boxed{\begin{align*}\\
\quad
{\mathcal{M}}_{fi}=
\frac{g_{a}g_{b}}{q^{2} +m_{x}}\quad \\
&
\end{align*}}$$
$g_{a}$ and $g_{b}$ are associated with interaction vertices, and $\frac{1}{q^{2}+m_{x}}$ is the __propagator__ associated with the exchanged virtual particle