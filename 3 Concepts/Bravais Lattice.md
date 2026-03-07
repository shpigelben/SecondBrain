---
type: concept
discipline:
  - physics
field:
  - condensed-matter
---

Bravais lattice is a periodic array of points (**lattice points**), arranged in a way that captures the geometry of a [[crystalline solid]]. The lattice is a mathematical construct and is not unique - usually, the lattice point coincide with the constituent units of the crystal it describes, but not always.

> [!NOTE] Geometric Definition of a Lattice
> A Bravais lattice is an infinite array of discrete points with an arrangement and orientation that appears exactly the same, viewed from any point of the array

The definition of the Bravais lattice requires it to be infinite. In practice one deals with finite structures like crystals. It is due to the fact that points inside the crystal are far enough and unaffected by the surface that the concept of the lattice holds.

# Lattice Vectors
Lattice vectors point from one lattice point to another. In an $N$-dimensional lattice, one can get from any lattice point to another via $N$ linearly independent lattice vectors

> [!NOTE] Algebraic Definition of a Lattice
> For a 3 dimensional Bravais lattice, all unit positions can be specified with the following$$ \vec{R} = n_1 \vec{a}_1 + n_2 \vec{a}_2 + n_3 \vec{a}_3 $$
where $\vec{a}_i$  are any non-coplanar **lattice vectors**, and $n_i\in\mathbb{Z}$ such that $\vec{a}_i$ specify certain direction and $n_i$ specify how many steps are taken.

**Primitive Lattice Vectors** - Vectors $\vec{a}_i$ in the definition of the Bravais lattice are called primitive vectors. They are said to _span_ or _generate_ the lattice. Any point can be reached through a linear combination of the primitive vectors $\vec{a}_i$, with integer coefficients $n_i$. Primitive vectors are not unique and for each lattice there is an infinite number of such vectors.

# Unit Cells
In an $N$-dimensional lattice, the volume of the region spanned the set of $N$-independent lattice vectors is called a unit cell. Most often unit cells are taken to be **Primitive Unit Cells** which are unit cells that contain exactly one lattice point each. They fill the entire volume of the lattice without overlap.
$$n = \frac{N}{V} = \frac{N}{Nv} = \frac{1}{v}$$
where $v$ is the volume of a unit cell, and $n$ is the particle density of the lattice. It can be seen that a unit cell has constant volume, regardless of its shape or orientation 
$$v=\frac{1}{n}$$
Since the volume is constant, it is most easily calculated as the primitive unit cell spanned by a set of PLVs. In the special case of 3D, the volume of the parallelopiped they create is given by
$$ v = |\vec{a_1} \cdot (\vec{a_2} \times \vec{a_3})| $$
a value which holds for all primitive cells of all shapes.

## Wigner-Seitz Primitive Cell
Is what is known as a conventional cell. It preserves the symmetry of the lattice.
There exists a method of constructing certain primitive cells that preserve the symmetry of the lattice, by far the most common are the Wigner-Seitz primitive cells. 

The Wigner-Seitz cell about a lattice point is the region of space that is closer to that point than any other lattice point

> [!NOTE]- Wigner-Seitz in 2D and 3D
> ![[../4 Misc/Attachments/weigner seitz 3D.png|center]]
> ![[../4 Misc/Attachments/weigner seitz 2D.png|center]] 

# Coordination Number
Each point in the Bravais lattice has a number of _nearest neighbors_, and since there are no unique points, every point has the same number of nearest neighbors. Therefore the number of nearest neighbors is a global property of the lattice and is referred to as coordination number.


# Lattice with a Base
__Crystal Structure__ emphasizes the difference between the abstract description of a lattice and a physical structure that contains atoms or molecules. A crystal structure consists of identical copies that when translated by a primitive vector span the crystal. 

The definition is reminiscent of the definition for the [[Bravais Lattice]], but it does not require the same symmetries (e.g - the lattice doesn't have to look the same viewed from every point in the lattice)

Many times a crystal structure will be a combination of a Bravais lattice and an addition of what is known as a base.

When talking about a lattice with a base, there is the usual translation vector
$$ \vec{R}_{Lattice} = n_1 \vec{a}_1 + n_2 \vec{a}_2 + n_3 \vec{a}_3  $$
That can describe every point on the lattice, and a base vector
$$
\mathbf{B} = (\mathbf{b}_{1}, \mathbf{b}_{2}, \mathbf{b}_{3})
$$

with which one can transition from moving through lattice points using the lattice vector to moving through base points by adding the base components
$$
\mathbf{R} = n_{1}(\mathbf{a}_{1}+\mathbf{b_{1}})+ n_{2}(\mathbf{a}_{2}+\mathbf{b}_{2})+ n_{3}(\mathbf{a}_{3}+\mathbf{b}_{3})
$$

# Lattice Types