#note #physics/condensed-matter #concept 

Given a [[Bravais Lattice]] plane, a __lattice plane__ is defined to be any plane containing at least __3 non-colinear__ lattice points.

Because of the translational symmetry of the Bravais lattice, any such plane will contain infinitely (in the case of an infinite lattice) many lattice point. Each plane can be treated as a two dimensional Bravais lattice.

__Family of lattice planes__ regards any set of perpendicular planes equally spaced apart in such a way that the entirety of lattice points are contained by the set.

___
# Miller Indices
Any reciprocal vector $\mathbf{G}$, defines a [[plane]] in the direct lattice
$$  e^{i\mathbf{G}\cdot\mathbf{r}}=1 \rightarrow \mathbf{G}\cdot \mathbf{r} = 2\pi m$$
all points $r$ whose projection on the lattice vector $\mathbf{G}$ is $2\pi m$ form a plane. Each $m$ defines a certain plane. The spacing between each two planes is
$$d = \frac{2\pi}{|\mathbf{G}|}$$
since $\mathbf{G}$ defines a family of planes, we describe those planes using the coefficients of $\mathbf{G}$ better known in the context as **Miller indices**. In three dimensions
$$\mathbf{G} = h\mathbf{b}_1 + k\mathbf{b}_2 + l\mathbf{b}_3$$
Since $\mathbf{G}$ is perpendicular to the planes, any other lattice vector with the same relation $$h \ : \ k \ : \ l$$Will also be perpendicular to them

___
# Method of Intercept
The method of intercept lets us easily calculate the miller indices of a family of direct lattice planes, given the set of PLVs
$$(h : k : l) = \left( \frac{a_{1}}{x_{0}} : \frac{a_{2}}{y_{0}} : \frac{a_{3}}{z_{0}} \right)$$
Where $j_{0}$ is the plane's intercept with the $j^{\text{th}}$ axis and $a_{i}$ are the PLVs. If any of the indices or all turn out to be rational numbers, we multiply all by the lead common multiple

- If a plane doesn't intersect an axis, the corresponding miller index is zero
