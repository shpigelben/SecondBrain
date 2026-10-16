---
type: concept
discipline:
  - physics
field:
  - atomic-molecular-physics
---

We consider a simple case of two nuclei and a single electron. We wish to find the ground state (aka the lowest energy state) of this configuration. The general hamiltonian for such a system is
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
___

$\ket{\psi}=c_{1}\ket{\psi_{1}}+c_{2}\ket{\psi_{2}}$

$$\begin{align}
\braket{ \psi | H | \psi } &= \Big[c_{1}^{*}\bra{ \psi_{1}}+c_{2}^{*}\bra{\psi_{2}}  \Big]H\Big[c_{1}\ket{\psi_{1}}+c_{2}\ket{\psi_{2}}\Big] \\ \\
&= | c_{1}|^{2} \braket{ \psi_{1} |H|\psi_{1}  } + | c_{2}|^{2} \braket{ \psi_{2} |H|\psi_{2}  } \\
&+ \ c_{1}^{*}c_{2}\braket{ \psi_{1} |H|\psi_{2}  }+c_{2}^{*}c_{1}\braket { \psi_{2} |H|\psi_{1}  } \\  \\
&= |c_{1}|^{2}E_{1} + |c_{2}
|^{2}E_{2}  + \ c_{1}^{*} c_{2}U + c_{1} c_{2}^{*}U^{*}

\end{align}

$$
$$
\ket{\psi} =  \sum\limits_{i=1}^{N}c_{i}\ket{\psi_{i}} 
$$

$$
\begin{align}
E = \braket{ \psi | H | \psi } &= \left[ \sum\limits_{i=1}^{N}c_{i}^{*}\bra{\psi_{i}}  \right]H \left[ \sum\limits_{i=1}^{N}c_{i}\ket{\psi_{i}}  \right]  \\ \\ &=\Big[c^{*}_{1}\bra{\psi_{1}} + c^{*}_{2}\bra{\psi_{2}} + \dots \Big]H\Big[c_{1}\ket{\psi_{1}}+c_{2}\ket{\psi_{2}}+\dots \Big]  \\ \\  \\ &= c_{1}^{*}\bra{\psi_{1}}H\ket{\psi_{1}}c_{1} +   c_{1}^{*}\bra{\psi_{1}}H\ket{\psi_{2}}c_{2} + \dots + c_{1}^{*}\bra{\psi_{1}}H\ket{\psi_{\scriptsize N}}c_{\scriptsize N}  \\
&+ c_{2}^{*}\bra{\psi_{2}}H\ket{\psi_{1}}c_{1} +   c_{2}^{*}\bra{\psi_{2}}H\ket{\psi_{2}}c_{2} + \dots + c_{2}^{*}\bra{\psi_{2}}H\ket{\psi_{\scriptsize N}}c_{\scriptsize N} \\
& \ \ \vdots  \\
&+ c_{\scriptsize N}^{*}\bra{\psi_{\scriptsize N}}H\ket{\psi_{1}}c_{1} +   c_{\scriptsize N}^{*}\bra{\psi_{\scriptsize N}}H\ket{\psi_{2}}c_{2} + \dots + c_{\scriptsize N}^{*}\bra{\psi_{\scriptsize N}}H\ket{\psi_{\scriptsize N}}c_{\scriptsize N}  \\  \\ \\

&= c_{1}^{*}(E_{1})c_{1} +   c_{1}^{*}(U_{12})c_{2} + \dots + c_{1}^{*}(U_{1\scriptsize N})c_{\scriptsize N}  \\
&+ c_{2}^{*}(U_{21})c_{1} +   c_{2}^{*}(E_{2})c_{2} + \dots + c_{2}^{*}(U_{2\scriptsize N})c_{\scriptsize N} \\
& \ \ \vdots  \\
&+ c_{\scriptsize N}^{*}(U_{\scriptsize N 1})c_{1} +   c_{\scriptsize N}^{*}(U_{\scriptsize N 2})c_{2} + \dots + c_{\scriptsize N}^{*}(E_{\scriptsize N})c_{\scriptsize N}  \\ \\ \\

&= \begin{pmatrix}
c^{*}_{1} & c^{*}_{N} &\dots & c^{*}_{N}
\end{pmatrix} \begin{pmatrix}
E_{1} & U_{12} & U_{13} & \dots & U_{1\scriptsize N} \\
U_{21} & E_{2} & U_{23} & \dots & U_{2\scriptsize N}  \\
\vdots  \\
U_{\scriptsize N 1} & U_{\scriptsize N 2} & U_{\scriptsize N 3} & \dots & U_{\scriptsize N N}
\end{pmatrix}
\begin{pmatrix}
c^{*}_{1} \\  c^{*}_{N} \\ \vdots \\  c^{*}_{N}
\end{pmatrix}

\end{align}
$$
Where $\braket{ \psi_{n} |H|\psi_{n}  }=E_{n}$ is the energy of the electron on the $n^{th}$ orbital (of the $n^{th}$ atom), and $U_{ij}=\braket{ \psi_{i} | H | \psi_{j}  }$. If we consider
$$\braket{ \psi_{i} | H | \psi_{j}  }=
\begin{cases}
E_{n} &{(i=j=n)} \\
U_{ij} &(i\neq j)
\end{cases}
$$
We can consider the nearest neighbors and the above becomes
$$\braket{ \psi_{i} | H | \psi_{j}  }=
\begin{cases}
E_{n} &{(i=j=n)} \\
U_{ij} &(i = j\pm 1)  \\
0 & (otherwise)
\end{cases}
$$
and the Hamiltonian matrix becomes
$$\small\begin{align}
H &= \begin{pmatrix}
E_{1} & U_{12} & 0 & 0 & 0 & 0\\
U_{21} & E_{2} & U_{23} & 0 & 0 & 0 \\
0 & U_{32} & E_{3} & U_{34} & 0 & 0 \\
0 & 0 & U_{43} & E_{4} & U_{45} & 0 \\
0 & 0& 0 & U_{54} & E_{5} & U_{56} \\
0 & 0  & 0& 0 & U_{65} & E_{6}
\end{pmatrix} \to \begin{pmatrix}
E_{1} & t & 0 & 0 & 0 & 0\\
t & E_{2} &t& 0 & 0 & 0 \\
0 &t & E_{3} &t& 0 & 0 \\
0 & 0 &t& E_{4} &t& 0 \\
0 & 0& 0 &t& E_{5} &t\\
0 & 0  & 0& 0 &t & E_{6}
\end{pmatrix} \\ \\ &\to \begin{pmatrix}
\tilde{E}_{a}(t) & 0 & 0 & 0 & 0 & 0\\
0 & \tilde{E}_{b}(t) & 0 & 0 & 0 & 0 \\
0 & 0 & \tilde{E}_{c}(t) & 0 & 0 & 0 \\
0 & 0 & 0 & \tilde{E}_{d}(t)&0& 0 \\
0 & 0& 0 & 0&\tilde{E}_{e}(t)&0\\
0 & 0  & 0& 0 &0&\tilde{E}_{f}(t)
\end{pmatrix}
\end{align}

$$

___