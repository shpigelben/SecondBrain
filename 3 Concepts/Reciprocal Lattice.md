---
type: concept
discipline:
  - physics
field:
  - condensed-matter
---

A general [[Plane Wave]] $e^{i\mathbf{k}\cdot \mathbf{r}}$ coming in the direction of a [[Bravais Lattice]]. For a general $\vec{k}$, this wave will not have the periodicity of the Bravais lattice, but for a certain choice of wave vector it will. We denote $\mathbf{G}_m$ the set of all wave vector that yields a plane wave with the spatial periodicity of (a certain) Bravais lattice, the __reciprocal lattice__.
$$e^{i\left(k+G_{m}\right) R_{n}}  \stackrel{!}{=}e^{ik R_n} \ \Longrightarrow \ e^{iG_{m} R_n} = 1 $$
In terms of the direct lattice, a reciprocal lattice is give as
$$ \mathbf{G}_{n} = m_{1}\mathbf{b}_{1} + m_{2}\mathbf{b}_{2} + m_{3}\mathbf{b}_{3}$$
where
$$|b_i| = \frac{2\pi}{|a_i|}$$

# Reciprocal Vector
The recipe for constructing the $i^{\text{th}}$ reciprocal vector, given a complete set of lattice vectors, is as follows
$$\vec{b}_i = 2\pi \frac{\vec{a}_j\times\vec{a}_k}{\vec{a}_i\cdot(\vec{a}_j\times\vec{a}_{k})}=\frac{2\pi}{V_{cell}}\vec{a}_j\times\vec{a}_k$$
where $b_i$ is perpendicular to the plane spanned by the other two vectors
$$ \vec{a}_i \cdot \vec{b}_j = 2\pi \delta_{ij} $$
And it is normalized by the volume of the parallelepiped spanned by the three vectors.

##  The Reciprocal Lattice as a Bravais Lattice

It is easy to see that, using $\mathbf{G}_m$ we can span an entire Bravais lattice, that corresponds to a certain direct Bravais lattice spanned by $\mathbf{R}_n$
$$
(\mathbf{G}_{m}) \cdot (\mathbf{R}_n) = 
2\pi(m_1 n_1 + m_2 n_2 + m_3 n_3)
$$
A formal proof is given below

> [!NOTE]- Fourier Transform of the Direct Lattice
Consider a 1D direct lattice, described by a Dirac comb $$\Delta_{n}(x)= \sum\limits_{n}\delta(x-R_{n}) = \sum\limits_{n}\delta(x-an)$$Now consider its [[Fourier Transform]] $$\begin{align*}
\mathcal{F}[\Delta_{n}(x)] &= \int \limits_{-\infty}^{\infty }dx \ e^{ikx} \Delta_{n}(x)\\
&= \sum\limits_{n}\int dx \ e^{ikx} \delta(x-R_{n})\\
&\stackrel{1}= \sum_{n}e^{ikR_{n}}\\
&\stackrel{2}= \sum\limits_{n,m} e^{i(k-G_{m})R_{n}}\\
&= 2\pi\sum\limits_{m} \left(\frac{1}{2\pi}\sum\limits_{n} e^{i[a(k-G_{m})]n} \right)\\
&\stackrel{3}= 2\pi\sum\limits_{m} \delta[a(k-G_{m})]\\
&\stackrel{4}= \frac{2\pi}{a}\sum\limits_{m} \delta(k-G_{m})\\
&= \frac{2\pi}{a}\Delta_{m}(k)
\end{align*}$$
In 1, we are using the sampling property of the [[Delta Function#Properties|delta function]]. In 2 we note that for every $n$ of the direct vector $R_{n}$ there exists a vector $G_{m}$ such that  $\exp[i(k-G_{m})R_{n}] = \exp[ikR_{n}]$. Later in 3 we are making use of the [[Delta Function#Fourier Series Definition|Fourier series definition of the delta function]] and in 4 we use another of its properties.

## Volume of Reciprocal Lattice
If $v$ is the volume of a primitive cell in direct lattice, then the volume of the corresponding primitive cell in reciprocal lattice has volume of  $\frac{(2\pi)^d}{v}$, where d is the dimension of the lattices. 

# Brillouin Zone
