---
type: concept
discipline:
  - math
field:
  - group-theory
---

SO(3), better known as the _rotation group_ is a non-commutative [[Lie Group]]. SO stands for "special orthogonal". orthogonal means that the group is represented by [[Orthogonal Matrices]], and special mean that these are exclusively matrices with [[Determinant]] 1. The 3 in the brackets represents the number of dimensions the group acts on, and consequently the dimension of the representing matrices.

## small rotations
___
## general rotation
___

# Generators In Euclidean Basis (M)
___
Lets consider a matrix representation of a rotation around the $\hat{z}$ axis
$$R(\Phi_{z})= \begin{pmatrix}\cos{(\Phi)}&-\sin{(\Phi)}&0\\\sin{(\Phi)}& \  \ \cos{(\Phi)}&0 \\ 0&0&1\end{pmatrix} $$
Now, consider an infinitesimal rotation $\delta\Phi$. We take the first order approximation
$$R(\delta\Phi) \approx \begin{pmatrix}1&-\delta\Phi&0 \\ \delta\Phi&1&0\\0&0&1\end{pmatrix} \longmapsto\hat{1} +\delta\Phi\begin{pmatrix}0&-1&0\\1&0&0\\0&0&0\end{pmatrix}\equiv\hat{1}-i\delta\Phi\hat{M}_z$$

$M_z$ is the generator of rotations around the $\hat{z}$ axis. In a similar fashion, we find the other two generators of the algebra

$$
M_{x}= 
\begin{pmatrix} 
0 & 0 & 0 \\
0 & 0 & -i \\
0 & i & 0
\end{pmatrix} \quad
M_{y}= 
\begin{pmatrix} 
0 & 0 & i \\
0 & 0 & 0 \\
-i & 0 & 0
\end{pmatrix} \quad M_{z}= 
\begin{pmatrix} 
0 & -i & 0 \\
i & 0 & 0 \\
0 & 0 & 0
\end{pmatrix}
$$

### Structure Constants (Symbols)
in compact notation $\Big[M_\gamma\Big]_{\alpha\beta}=\Large -i\epsilon_{\alpha\beta\gamma}$. With that one can calculate using the commutators to be
$$\large\boxed{
\begin{align*} \\ \quad

[M_{\alpha},M_{\beta}] = i\epsilon_{\alpha\beta\gamma}M_{\gamma}

\quad \\\ \end{align*}}$$
Where the [[Levi Cevita]] symbol is the structure constant of the rotation group.

# Building SO(3) Representation
___

By going through the stages of [[Building Irreducible Representations of Lie Groups]], we begin by demanding a three-dimensional representation.
$$ 3 \stackrel{!}{=}N=2j+1 \quad \Longrightarrow \quad j = 1 \leadsto\text{ integer spin} $$
The realization of the group is over 3D space, so we expect three generators. By convention, we choose to work in a base $\ket{m}$ that diagonalizes rotations around the $z$ axis.
$$J_{z}\longmapsto S_{z}\ket{m}=m \ket{m}$$
Since $j=\frac{1}{2}$ it means that $m = \left\{-1,0,1\right\}$ including zero since this is a dim3 representation. $S_z$ is therefore diagonalized and appears as
$$S_{z}=
\begin{pmatrix}1 & 0 & 0 \\ 0 & 0 & 0 \\ 0 & 0 & -1\end{pmatrix}
$$
$$ \begin{align*}
[S_{z},S_{\pm}]&=\pm S_{\pm} \\
[S_{l},S_{m}] &= i{\large\varepsilon_{lmn}}S_{n}
\end{align*} $$

### Calculating a General Rotation Matrix
___
$$U(\mathbf{\Phi}) = {\large e^{-i\mathbf{\Phi}\cdot\mathbf{S}}} = \hat{I}-i\sin{(\Phi)}\hat{S}_{n}-(\hat{I}-\cos(\Phi)){\hat{S}_{n}}^{2} $$

$$U(\Phi_{z}) = $$
$$U(\Phi_{y}) = $$

### Realization of SO(3) 
___
The dim3 representation of the rotation group in the spin basis, does not act on the usual three-dimensional vectors of Euclidean space, but on what is known as _polarization states of spin 1_. ==Unlike in the Euclidean basis (M) where the realization is above $\mathbb{R}^{3}$, here the realization here is above $\mathbb{C}^{3}$ ==
<!--SR:!2021-12-15,1,230-->

$$
\begin{align*}
\ket{m=1} \ &{\Large\leadsto} \ \large\boxed{\ket{\Uparrow}\mapsto\begin{pmatrix}1 \\ 0 \\ 0\end{pmatrix}}\quad\text{Elliptical}
\\
\ket{m=0} \ &{\Large\leadsto} \ \large\boxed{\ket{\Updownarrow}\mapsto\begin{pmatrix}0 \\ 1 \\ 0\end{pmatrix}}\quad\text{Linear}
\\
\ket{m={\small-}1} \ &{\Large\leadsto} \ \large\boxed{\ket{\Downarrow}\mapsto\begin{pmatrix}0 \\ 0 \\ 1\end{pmatrix}}\quad\text{Elliptical}
\end{align*}
$$

In this realization and chosen basis, we have 3 polarization states in the $z$ direction, all of which are unaffected by rotations about the $z$ axis.

#### Rotating Spin-1
___
Like in [[SU(2) Group]], rotating $\ket{\Uparrow}$ by 180 degrees about x or y gives $\ket{\Downarrow}$, and vice versa. But the $\ket{\Updownarrow}$ rotated by 180 degrees gives $-\ket{\Uparrow}$ which means it is 

Rotating $\ket{\Uparrow}$ brings us to other elliptically polarized states

$$U_{z}(\varphi)U_{y}(\theta)\ket{\Uparrow} = \frac{1}{2}\begin{pmatrix}
(1+\cos{\theta})e^{-i\varphi} \\ 
\sqrt{2}\sin{\theta} \\ 
(1-\cos{\theta})e^{-i\varphi}
\end{pmatrix}$$
Rotating $\ket{\Updownarrow}$ brings us to other linearly polarized states
$$U_{z}(\varphi)U_{y}(\theta)\ket{\Updownarrow} = \frac{1}{\sqrt{2}}\begin{pmatrix}
-\sin{\theta} \ e^{-i\varphi} \\ 
\sqrt{2}\cos{\theta} \\ 
\sin{\theta} \ e^{i\varphi}
\end{pmatrix}$$
Linear Polarization in the XY plane.
$$\ket{{\mathcal{O}}} =  \frac{1}{\sqrt{2}}\Big(\sqrt{1+q}\ket{\Uparrow}-\sqrt{1+q}\ket{\Downarrow}\Big)$$
#### SO(3) - SU(2) Group Homomorphism
___
hard enough. There is an analogous representation of rotations in 3D space using [[SU(2) Group | SU(2)]] matrices which are 2x2 and are much easier to work with. Realization of the operation of 3x3 rotation matrices on 3d vectors is quite intuitive, but the realization of the representation of SU(2) on the 3d space in more mysterious. The interpretation of the vectors on which the dim(2) representation acts upon is the [[Spin]]

