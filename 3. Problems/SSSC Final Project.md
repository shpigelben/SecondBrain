# Structure of the Lecture
- Introduction
- Tight-binding & LCAO
- Nearly free electron model
	- Drude & Sommerfeld
		- continuum of levels and no bands
	- Nearly Free Electron & the Emergence of Bands 
- Bloch Theorem & The Robustness of Bands
	- Bloch Theorem
	- Photonic Crystals
	- Acoustic Bands

# Coupled Wells
When dealing with two coupled wells (tunneling is possible), one cannot solve the Schrödinger equation for each well separately, but has to solve it for the entire system. Instead of the two independent eigenstates for each well, we a symmetric and antisymmetric eigenstates. ==While symmetric and anti symmetric states could have been written in the decoupled wells case, they would have the same energy whereas in the coupled waves case, the symmetric state has lower energy that the antisymmetric energy state. They are not degenerate.== The more strongly coupled the two wells the larger the energy separation. If We add $N$ wells together, we get $N$ combinations of states which are not degenerate in energy.

![center|700](../9.%20Misc/attachments/Pasted%20image%2020240215174304.png)

# Penny Kronig
![](../9.%20Misc/attachments/Pasted%20image%2020240215135750.png)

Lets think of the energy states as the atom's energy states. Namely
$n=1$ is the $S$ orbital, $n=1$ is the $P$ orbital and so on.

![center](../9.%20Misc/attachments/Pasted%20image%2020240215143529.png)


# The LCAO Approximation

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
$$\begin{align}
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

$$
\begin{pmatrix}
c^{*}_{\scriptsize 1} & c^{*}_{\scriptsize N} &\dots & c^{*}_{\scriptsize N}
\end{pmatrix} \begin{pmatrix}
E_{1} & U_{12} & U_{13} & \dots & U_{1\scriptsize N} \\
U_{21} & E_{2} & U_{23} & \dots & U_{2\scriptsize N}  \\
U_{31} & U_{32} & E_{3} & \dots & U_{2\scriptsize N}  \\
\vdots  \\
U_{\scriptsize N 1} & U_{\scriptsize N 2} & U_{\scriptsize N 3} & \dots & E_{\scriptsize N N}
\end{pmatrix}
\begin{pmatrix}
c_{\scriptsize N}\\  c_{\scriptsize N} \\ \\  \vdots \\   c_{\scriptsize N}
\end{pmatrix}

$$


$$
\begin{pmatrix}
E_{1} & U_{12} & 0 & \dots & 0 \\
U_{21} & E_{2} & U_{23} & \dots & 0  \\
0 & U_{32} & E_{3} & \dots & 0  \\
\vdots  \\
 \\
0 & 0 & 0 & \dots & E_{\scriptsize N N}
\end{pmatrix}
$$

$$
E_{n} = -\left( \frac{e^{2}}{2\epsilon_{0}\hbar} \right)^{2} \frac{m_{e}^{*}Z^{2}}{2n^{2}}
$$