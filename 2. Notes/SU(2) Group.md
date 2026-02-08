#note #math #group-theory #derivative 

SU(2) is a [[Lie Group]] of all $2\times 2$ matrices that are [[Determinant|Special]] $(\det{M} = 1)$, and [[Unitary Matrix|Unitary]] $(M^{\small\dagger}=M^{\small-1})$.

# Building SU(2) Representation

By going through the stages of [[Building Irreducible Representations of Lie Groups]], we begin by demanding a two-dimensional representation.
$$ 2 \stackrel{!}{=}N=2j+1 \quad \Longrightarrow \quad j = \frac{1}{2} \leadsto\text{ half integer spin} $$
In the first stage we determine the basis of operation. The representation is $\dim{(2)}$ but the realization is of rotation in $\dim{3}$ Euclidean space, so we expect to have __three__ [[group]] members.  By convention, we choose to work in a base $\ket{m}$ that diagonalizes rotations around the $z$ axis
$$J_{z}\longmapsto S_{z}\ket{m}=m \ket{m}$$
Since $j=\frac{1}{2}$ it means that $m = \left\{-\frac{1}{2},\frac{1}{2}\right\}$ without 0, due to the representation being only two-dimensional. The diagonalized $S_{z}$ is therefore
$$ S_{z} = \frac{1}{2} \begin{pmatrix}1 & 0 \\ 0 & -1\end{pmatrix} = \frac{1}{2}\sigma_{z}$$
Where $\sigma_{z}$ is the [[Pauli Matrices|Pauli matrix in the z direction]]. By defining the appropriate [[Ladder Operators|ladder operators]], and by demanding that the other two elements of the group will obey the commutation relation of the [[Lie Algebra]]
$$ \begin{align*}
[S_{z},S_{\pm}]&=\pm S_{\pm} \\
[S_{l},S_{m}] &= i{\large\varepsilon_{lmn}}S_{n}
\end{align*} $$
We find the other two element representations are $\frac{1}{2}\sigma_{x}$ and $\frac{1}{2}\sigma_{y}$
$$\boxed{
\begin{align*} \\ \quad
\sigma_{x} = \begin{pmatrix}0 & 1 \\ 1 & 0\end{pmatrix} \quad \quad \sigma_{y}=\begin{pmatrix}0 & -i \\ i & 0\end{pmatrix} \quad \quad \sigma_{z}=\begin{pmatrix} 1 & 0 \\ 0 & -1\end{pmatrix}
\quad \\\
\end{align*}}$$
___
# Realization of SU(2)

Being a $\dim{2}$ representation, the generators of SU(2) act on two dimensional vectors which are the _polarization states of spin 1/2_. In the chosen basis we denote
$$\ket{m=\pm 1/2} \ {\Large\leadsto} \ \large\boxed{\ket{\uparrow}\mapsto\begin{pmatrix}1 \\ 0\end{pmatrix} \quad \ket{\downarrow}\mapsto\begin{pmatrix}0 \\ 1\end{pmatrix}}$$
Since these are eigenstates of rotations around $z$ , they are unaffected by such actions and are recognized as pointing up or down along the $z$ direction respectively. ==This is odd, since we now have two orthogonal vectors whose difference in orientation is 180 degrees instead of the familiar 90 degrees. Furthermore, bellow we'll show that a rotation 720 degrees is required to get back to an original orientation - not 360==
$$\begin{align*}
&R({180\degree}_{x/y})\ket{\uparrow}=\ket{\downarrow}\\&R({360\degree}_{x/y})\ket{\uparrow}=-\ket{\uparrow}
\end{align*}$$
The realization of the action of the generators is given by the exponential map
$$R(\mathbf{\Phi}) = \large e^{-i\mathbf{\Phi}\cdot \mathbf{S}} = \large e^{-i\frac{\mathbf{\Phi}}{2}\cdot \vec{\sigma}}$$
___
## Calculating a General Rotation Matrix

We want to reach a comfortable expression for the representation of rotations. We begin by writing the matrix exponent in series form
$$R(\Phi_{n}) = e^{-i \Phi \hat{S_{n}}} = \sum\limits_{k=0}^{\infty} \frac{1}{k!} \left(\frac{\Phi}{2}\hat{\sigma}_{n}\right)^k \Rightarrow $$
We divide the summation into odd and even parts, while keeping in mind the fact that $(\sigma_{j})^{2n}=1$ and that $(\sigma_{j})^{2n-1}=\sigma_{j}$.
$$\Rightarrow \sum\limits_{k=0}^{\infty} \frac{1}{2k!}
\left(i\frac{\Phi}{2}\hat{\sigma}_{n}\right)^{2k} + 
\sum\limits_{k=1}^{\infty} \frac{1}{(2k-1)!} \left(i\frac{\Phi}{2}\hat{\sigma}_{n}\right)^{2k-1}
$$
$$\Rightarrow \sum\limits_{k=0}^{\infty} \frac{(i\Phi/2)^{2k}}{2k!}
\hat{1} + 
\sum\limits_{k=1}^{\infty} \frac{(i\Phi/2)^{2k-1}}{(2k-1)!} \hat{\sigma}_{n}$$
Recognizing the famous Taylor expansions of sin and cos we finally get
$$\boxed{\begin{align*}
\\ \quad
\hat{R}(\Phi_{n}) = \cos{\left(\frac{\Phi}{2}\right)}\hat{I}+ \sin{\left(\frac{\Phi}{2}\right)\hat{\sigma}_n}
\quad\\\
\end{align*}} $$
Where 
$$\begin{align*}
&\vec{n} = (\sin\theta\cos\phi,\sin\theta\sin\phi,\cos\theta)\\
&\vec{\hat\sigma} = (\hat\sigma_{x},\hat\sigma_{y},\hat\sigma_{z})\\
&\hat\sigma_{n} = \sin\theta\cos\phi \ \hat\sigma_{x} + \sin\theta\sin\phi \ \hat\sigma_{y}+\cos\theta \ \hat\sigma_{z}

\end{align*}$$
___
SU(2) is homomorphic to [[SO(3) Group|SO(3)]]