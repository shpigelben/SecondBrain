#SS1 #solid #state

A general [[Plane Wave]] coming in the direction of a [[Bravais Lattice]] (Spanned by $\vec{R_n}$) is given by definition as $e^{i\vec{k}\cdot \vec{r}}$. For a general $\vec{k}$, this wave will not have the periodicity of the Bravais lattice, but for a certain choice of wave vector it will. 
We call $\vec{K}_m$ the set of all wave vector that yields a plane wave with the spatial periodicity of (a certain) Bravais lattice, the __reciprocal lattice__.
$$e^{i\left(k+K_m\right) R_n} = e^{ik R_n} e^{iK_m R_n}
\stackrel{!}{=}e^{ik R_n} \ \Longrightarrow \ e^{iK_m R_n} = 1 $$
Since $(R_n)_i = a_i n_i$, for the above to hold we get
$$ (K_m)_i = \frac{2\pi}{a_i}m_i $$
$$ \ \ \ \  \text{Lattice Vector} \longmapsto (R_n)_i = a_i n_i$$
$$ \text{Reciprocal Vector} \longmapsto (K_m)_i = b_i m_i$$
$$|b_i| = \frac{2\pi}{|a_i|}$$
and generally for higher dimensions 
$$ e^{\vec{R_n}\cdot\vec{K_m}} = 1 $$
___
# Constructing a Reciprocal Vector from a Direct Vector
The recipe for constructing the $i^{\text{th}}$ reciprocal vector, given a complete set of lattice vectors, is as follows
$$\vec{b}_i = 2\pi \frac{\vec{a}_j\times\vec{a}_k}{\vec{a}_i\cdot(\vec{a}_j\times\vec{a}_{k})}=\frac{2\pi}{V_{cell}}\vec{a}_j\times\vec{a}_k$$
where $b_i$ is perpendicular to the plane spanned by the other two vectors. 
$$ \vec{a}_i \cdot \vec{b}_j = 2\pi \delta_{ij} $$
And it is normalized by the volume of the parallelopiped spanned by the three vectors.

___
##  The Reciprocal Lattice as a Bravais Lattice
It is easy to see that, using $(\mathbf{K}_k)_i$ we can span an entire Bravais lattice, that corresponds to a certain direct Bravais lattice spanned by $(\mathbf{R}_n)_i$
$$
(\mathbf{K}_k) \cdot (\mathbf{R}_n) = 
2\pi(k_1 n_1 + k_2 n_2 + k_3 n_3)
$$
Needless to day that the reciprocal of the reciprocal is, once again, the direct lattice.

___
## Volume of Reciprocal Lattice
If $v$ is the volume of a primitive cell in direct lattice, then the volume of the corresponding primitive cell in reciprocal lattice has volume of  $\frac{(2\pi)^d}{v}$, where d is the dimension of the lattices. 
