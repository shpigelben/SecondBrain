---

---

#note #physics #condensed-matter #derivative 

[[Bragg Diffraction|Bragg peaks]] appear when there is a complete constructive interference between diffracted waves
___
# Monoatomic Lattice
Lets consider a monoatomic lattice with $n$ atoms in each primitive cell, each atom is situated at a position $\mathbf{d}_j$ which corresponds to the [[Bravais Lattice|lattice vector]]. From the [[Von Laue Diffraction]] we have seen that two waves, scattered off of two identical scatterers have phase difference of $$\mathbf{d}\cdot\mathbf{K} = \mathbf{d}\cdot(\mathbf{k}-\mathbf{k}') $$ 
where $\mathbf{k}'$ is the wave vector of the diffracted wave. So for two identical scatterers situated at $\mathbf{d}_i$ and $\mathbf{d}_i$ , the phase difference is 
$$(\mathbf{d}_j-\mathbf{d}_j)\cdot\mathbf{K} $$
and the amplitude of the waves will differ by a factor of $e^{i\mathbf{K}\cdot(\mathbf{d}_j-\mathbf{d}_j)}$ and so the amplitudes of the diffracted waves are in ratios of $e^{i\mathbf{K}\cdot\mathbf{d}_j}$ where $j=1,...,n$. The net ray scattered by the primitive cell will have the following factor containing all phase contributions 
$$\large\boxed{ S_K = \sum_{j=1}^n e^{i\mathbf{K}\cdot\mathbf{d}_j} }$$
This is the __geometrical atomic form factor__ which expresses the extent to which the interference can diminish the intensity of the Bragg peaks
___
# Polyatomic Lattice
If the ions in the basis are not identical, every phase contribution in the geometric atomic structure factor is itself multiplied by an [[Atomic Form Factor]] -  $f_j(\mathbf{K})$ that is different for different ions and depends on their positioning within the structure of the lattice. The atomic structure factor assumes the form
$$  \boxed{\begin{align*} \\ \quad
S_K = \sum_{j=1}^n f_j(\mathbf{K})e^{i\mathbf{K}\cdot\mathbf{d}_{j}}\quad\\\
\end{align*}} $$
In elementary treatments the atomic form factor is taken to be proportional to the [[Fourier Transform]] of the charge distribution of a corresponding [[ion]]
$$ f_j(\mathbf{K}) = -\frac{1}{e}\int d\mathbf{r} \ \rho_j(\mathbf{r}) e^{i\mathbf{K}\cdot\mathbf{r}} $$
Since the contribution of every primitive cell is equivalent the total radiation will be given as 
$$F = S_{K}N$$
Where $N$ is the number of primitive cells that constitute the crystal. It is also clear from the above relation that the intensity is proportional the to the square of the structure factor.
$$I\propto|S_K|^2$$
One can find the minimum angle of diffraction from this relation, by seeking the angles that minimize $S_{k}$ and thus minimize $I$
___
# Examples
Calculation of the atomic form structure for various types of lattices

## BCC
Even though the BCC is a Bravais lattice. It is simpler to treat it as a simple cubic lattice
$$ \mathbf{R} = a(n_1\hat{x} + n_2\hat{y} + n_3\hat{z}) $$$$ \mathbf{K} = \frac{2\pi}{a}(m_1\hat{x} + m_2\hat{y} + m_3\hat{z}) $$
and a basis given by
$$ \mathbf{d}_1 = 0 \ , \ \mathbf{d}_2 = \frac{a}{2}(\hat{x} + \hat{y} + \hat{z}) $$
now the form factor can be calculated as __two__ diffractions from two different __simple__ cubic lattices, instead of one BCC lattice
$$\begin{align*}
S_K &= \sum_{j=1}^n e^{i\mathbf{K}\cdot\mathbf{d}_j}\\
&= e^{i\mathbf{K}\cdot\mathbf{d}_1} + e^{i\mathbf{K}\cdot\mathbf{d}_2} \\
&=1 + exp \ i\left[ \frac{2\pi}{a}(m_1\hat{x} + m_2\hat{y} + m_3\hat{z})\cdot \frac{a}{2}(\hat{x} + \hat{y} + \hat{z})\right]\\
& = 1 + exp\Big[i\pi (m_1 + m_2+m_3)\Big] \\
&= 1+(-1)^{(m_1 + m_2+m_3)}
\end{align*}$$ 