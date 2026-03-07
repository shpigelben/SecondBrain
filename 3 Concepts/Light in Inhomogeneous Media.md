---
type: concept
discipline:
  - physics
field:
  - optics
  - electrodynamics
---

# A general transfer matrix formalism
We consider a general case in which waves reflect and transmit from one medium to another. In each medium the wave has a right and left moving component

![center|400](../4%20Misc/Attachments/Pasted%20image%2020240610181756.png)

We approach this problem by relating the waves in medium 1 to the waves in medium 2

$$
\begin{align}
E_{2l} &= t_{12}E_{1r}+r_{21}E_{2l} \\
E_{1l} &= t_{21}E_{2l} + r_{12}E_{1r}
\end{align}
$$

Here, $r$ and $t$ are the wave coefficient for transmission and reflection coefficients. Their nature depends on the type of wave and boundary conditions. By rearranging the expressions above, and using the facts that
$$
\begin{align}
&r_{12}=-r_{21} \\
&t_{12}t_{21}-r_{12}r_{21}=1
\end{align}
$$
it is possible write the whole thing as a matrix operation

$$
\underbrace{ \begin{bmatrix}
E_{1r}  \\ E_{1l}
\end{bmatrix} }_{ \large U_{1} } = \underbrace{ \frac{1}{t_{12}}\begin{bmatrix}1 & r_{12} \\
r_{12} & 1
\end{bmatrix} }_{\large D_{12}  }\underbrace{ \begin{bmatrix}
E_{2r} \\ E_{2l}
\end{bmatrix} }_{\large U_{2}  }
$$

This is a powerful representation, because it can be utilized in a multilayered system for which analytical calculations are non-realistic. But in order to expand this system, we need to consider the propagation of the waves in the bulk of the media. Using the same logic as before it is possible to show that the matrix that describes the phase accumulation due to propagation inside medium $j$ of length $d$ is

$$
P_{j}(d) = \begin{bmatrix}
{\large e^{ik_{z,j}d}} & 0 \\ 0 & {\large e^{-ik_{z,j}d}}
\end{bmatrix}
$$

This why, a structure could be described as a series of transition and propagation matrices. With $D_{ij}$ as interface transfer matrix between medias $i$ and $j$, and $P_{j}$ as the propagation matrix through medium $j$  

$$
\begin{align}
U_{1} &= \Big[D_{12}P_{2}(d_{2})D_{23}\dots P_{\scriptsize N-1}(d_{\scriptsize N})D_{\scriptsize N-1, N}\Big]U_{N} \\ \\
&= \Bigg[ {{\prod_{i=1}^{N-2}}\limits_{j=2}}\limits_{k=3} D_{ij}P_{j}(d_{j})D_{jk}\Bigg]U_{N} \\ \\  &= \left[ \prod_{n=1}^{N-1} M_{n,n+1}  \right]U_{N} = MU_{N}
\end{align}
$$

Where the every matrix $D_{ij}P_{j}D_{jk}\equiv M_{ik}$ describes the transition from medium $i$ into $j$,0 propagation through $j$ and finally a transition from $j$ to $k$. The matrix resulting matrix $M$ for a structure of $N$ layers describes the relationship between the first incoming wave, and the last transmitting wave

$$
\begin{bmatrix}
E_{1r} \\ E_{1l}
\end{bmatrix} = \begin{bmatrix}
M_{11} & M_{12} \\ M_{21}  & M_{22}
\end{bmatrix} \begin{bmatrix}
E_{Nr} \\ \cancel{ E_{Nl} }
\end{bmatrix}
$$
We assume that not wave is incident from the right of the structure, and receive the following two equations
$$
\begin{align}
****E_****{1r} &= M_{11}E_{Nr} \\ E_{1l} &= M_{21}E_{Nr}
\end{align}
$$
Finally, the transmission and reflection coefficients are reasonably defined as 

$$
	\boxed{ \ \begin{align}
	t &\equiv \frac{E_{Nr}}{E_{1r}} = \frac{1}{M_{11}}  \\ \\
	r &\equiv \frac{E_{1l}}{E_{1r}} = \frac{M_{21}}{M_{11}} 
	\end{align} \ }
	$$
___
By considering the right and left moving waves in each region of a multilayered system, we can write the relationship between the waves

$$
\begin{bmatrix}
E_{1r} \\
E_{1l}
\end{bmatrix} = \left[{D_{1}}^{-1}\left( \prod\limits_{i=1}^{N}D_{i}P_{i}{D_{i}}^{-1} \right)D_{N}\right] \begin{bmatrix}
E_{Nr} \\ E_{Nl}
\end{bmatrix}
$$

$D_{j}$ is called the dynamic matrix and it represents the transition between layers from left to right. While ${D_{j}}^{-1}$, its inverse, a similar transition from right to left. The matrix $P_{j}$ represents the phase accumulation due to propagation in a layer with refractive index $n_{j}$ and is therefore known as the propagation matrix. A transition between a layer $i$ and a layer $j$ in a multilayered structure can be represented by transition matrix

$$
M_{ij} = \begin{bmatrix}
M_{00} & M_{01} \\ M_{10} & M_{11}
\end{bmatrix}
$$
___
An alternative way of viewing it is by considering interfaces between layers $a$ and $b$ described by $D_{ab}$ and layer width with the propagation matrix $P_{b}$.

$$
\begin{bmatrix}
E_{1r} \\
E_{1l}
\end{bmatrix}=\left[\prod\limits_{n=1}^{N-1} D_{n, n+1} P_{n+1}\right]\begin{bmatrix}
E_{Nr} \\ E_{Nl}
\end{bmatrix}
$$

Since $D_{ij}= {D_{j}}^{-1}D_{i}$ resulting transition matrix is, of course, identical but the approach is a bit different. The transition matrix is as follows

$$
D_{12} = \frac{1}{t_{12}}\begin{bmatrix} 1 & r_{12}  \\
r_{12} & 1
\end{bmatrix}
$$
Where $r_{12}$ and $t_{12}$ are the reflection and transition field coefficients, which differ for s-polarized light and for p-polarized light.

___
# For electromagnetic waves
[Electromagnetic Waves](Electromagnetic%20Waves.md)
[Fresnel Equations](Fresnel%20Equations.md)
## TE Waves
Boundary conditions for the components of the field parallel to the interface yield
$$
\begin{align}
E_{1}=E_{2} \quad &\Rightarrow \quad  E_{1r}+E_{1l}=E_{2r}+E_{2l} \\
H_{1x}=H_{2x} \quad &\Rightarrow \quad {\small \sqrt{ \frac{\epsilon_{1}}{\mu_{1}} }(E_{1r}-E_{1l})\cos \theta_{1} = \sqrt{ \frac{\epsilon_{2}}{\mu_{2}} }(E_{2r}-E_{2l})\cos \theta_{2}} \\
&\Rightarrow \quad Z_{\scriptsize 1}(E_{\scriptsize 1r} - E_{\scriptsize 1l}) = Z_{\scriptsize 2}(E_{\scriptsize 2r} - E_{\scriptsize 2l})
\end{align}
$$
which can be written in matrix form more compactly as
$$\small
\underbrace{ \begin{pmatrix}
1  & 1  \\
\sqrt{ \frac{\epsilon_{1}}{\mu_{1}} }\cos\theta_{1}  & -\sqrt{ \frac{\epsilon_{1}}{\mu_{1}} }\cos\theta_{1}
\end{pmatrix} }_{ \large {D_{1}}^{s} }
\underbrace{ {\large\begin{pmatrix}
E_{1r}  \\  E_{1l}
\end{pmatrix}} }_{\large U_{1} } =
\underbrace{ \begin{pmatrix}
1  & 1  \\
\sqrt{ \frac{\epsilon_{2}}{\mu_{2}} }\cos\theta_{2}  & -\sqrt{ \frac{\epsilon_{2}}{\mu_{2}} }\cos\theta_{2}
\end{pmatrix} }_{\large {D_{2}}^{s} }
\underbrace{ {\large\begin{pmatrix}
E_{2r}  \\ E_{2l}
\end{pmatrix}} }_{ \large U_{2} }
$$
$$U_{1}=({D_{1}^{s}})^{-1}D_{2}^{s} \ U_{2}$$

___
$$\bbox[10px, border:3px solid lightgrey]
{\begin{align}
{D_{\scriptsize j}}^{s} &= \quad \begin{pmatrix}
1 & 1 \\ Y_{j} & -Y_{j}
\end{pmatrix} \\  \\
{D_{\scriptsize j}}^{p} &= n_{j}\begin{pmatrix}
Z_{j} & Z_{j}  \\ 1 & -1 
\end{pmatrix}
\end{align}}
$$

where we used the definitions of wave admittance and impedance for brevity
$$
\begin{align}
Y_{j}(\theta_{1},n_{j}) &= n_{j}\cos\theta_{j} = \sqrt{ n_{j}^{2}-n_{j}^{2}\sin^{2}\theta_{j} } = \sqrt{ n_{j}^{2}-n_{1}^{2}\sin^{2}\theta_{1} } \\
Z_{j}(\theta_{1},n_{j}) &=\frac{1}{n_{j}}\cos\theta_{j} = \dots = \frac{1}{n_{j}^{2}}\sqrt{ n_{j}^{2}-n_{1}^{2}\sin^{2}\theta_{1} }
\end{align}
$$
![center|450](../4%20Misc/Attachments/Pasted%20image%2020240610230044.png)

A layer can simply be described by the $Q$ matrix so a periodic array

![center](../4%20Misc/Attachments/Pasted%20image%2020240610231547.png)
can be written as
$$
U_{in} = \Bigg[ {D_{1}}^{{-1}} \Big( Q_{2}Q_{3} \Big)^{N} D_{1} \Bigg]U_{out} = M \ U_{out}
$$

