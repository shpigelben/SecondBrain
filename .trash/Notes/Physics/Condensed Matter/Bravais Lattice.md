# Bravais Lattice
#SS1 #solid #state 
___
A periodic array in which the repeated units of a (usually) crystal are arranged.
The units may be single atoms, groups of atom, molecules and so on, but the Bravais lattice summarizes only the geometry of the underlying periodic structure, regardless of what the actual units can be.

two equivalent definitions:

> (a) For a 3 dimensional Bravais lattice, all unit positions can be specified with the following
$$ \vec{R} = n_1 \vec{a}_1 + n_2 \vec{a}_2 + n_3 \vec{a}_3 $$
where $\vec{a}_i$  are any non-coplanar vectors, and $n_i\in\mathbb{Z}$ such that $\vec{a}_i$ specify certain direction and $n_i$ specify how many steps are taken.

> (b) A Bravais lattice is an infinite array of discrete points with an arrangement and orientation that appears exactly the same, viewed from any point of the array



</br>\
![[Bravais lattice 1.png | 600x300]]
</br>

- The definition of the Bravais lattice requires it to be infinite. In practice one deals with finite structures like crystals. It is due to the fact that points inside the crystal are far enough and unaffected by the surface that the concept of the lattice holds.

__Primitive Vectors__ - Vectors $\vec{a}_i$ in the definition of the Bravais lattice are called primitive vectors. They are said to _span_ or _generate_ the lattice. Any point can be reached through a linear combination of the primitive vectors $\vec{a}_i$, with integer coefficients $n_i$.

Primitive vectors are not unique and for each lattice there is an infinite number of such vectors.

__Coordination Number__  - Each point in the Bravaise lattice has a number of _nearest neighbors_, and since there are no unique points, every point has the same number of nearest neighbors. Therefore the number of nearest neighbors is a global property of the lattice and is referred to as coordination number.
Coordination number is not unique to Bravaise lattice. There exist other types of lattices that have coordination number.

__Primitive Unit Cells__  - An N-dimensional volume, spanned by N primitive vectors of the lattice. When translated through all lattice vectors the unit cell fills all space without voids and without overlapping.

Just like primitive vectors, a unit cell is not unique and there are infinitely many ways to construct one.

A unit cell contains at most one lattice point, and it usually does, but it can also contain no lattice point when they are on its surface. It follows that if $n$ is the density of points in the lattice and $v$ is the volume of the primitive cell, then 

$$n = \frac{N}{V} = \frac{N}{Nv} = \frac{1}{v}$$

where the second equality comes from the demand that the unit cell cover all space without overlap, and contain at most one lattice point.

$$ v = \frac{1}{n} = \frac{V}{N} $$

The above relation shows that a unit cell, by its definition, has constant volume that is predetermined by the volume of the whole lattice and number of lattice points, regardless of the choice of cell.

The most obvious primitive cell is constructed with the primitive vectors.

$$\vec{R} = x_1 \vec{a_1} + x_2 \vec{a_2} + x_3 \vec{a_3}$$

where the volume of the parallelopiped spanned by the vector is given by

$$ v = |x_1 x_2 x_3||\vec{a_1} \cdot (\vec{a_2} \times \vec{a_3})| $$

where $x\in(0,1]$

__Wigner-Seitz Primitive Cell__

There exists a method of constructing certain primitive cells that preserve the symmetry of the lattice, by far the most common are the Wigner-Seitz primitive cells. 

The Wigner-Seitz cell about a lattice point is the region of space that is closer to that point than any other lattice point

| 3D                                          | 2D                                          |
| ------------------------------------------- | ------------------------------------------- |
| ![[weigner seitz 3D.png \| 400]] | ![[weigner seitz 2D.png \| 400]] | 
