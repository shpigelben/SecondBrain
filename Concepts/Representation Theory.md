---
type: concept
discipline:
  - math
field:
  - group-theory
---

In the study of abstract algebraic structures - such as [[Groups]] - in order to get a more concrete view, one might want to represent the elements of such structures as linear transformations - matrices for example - of vector spaces. By talking about group elements as familiar transformations and their algebraic operations (e.g matrix multiplication or addition).

An abstract group goes through a [[Realization of a Group | realization]] process where the group elements are treated as transformations over a certain space, and then those transformations should be represented as familiar mathematical entities (matrices and so on).

$$ \tau \quad\stackrel{\small(i)}{\longmapsto}\quad U(\tau) \quad\stackrel{\small(ii)}{\longmapsto}\quad U_{ij} $$

We begin by labeling the elements on the manifold they span.

$$\mathbf{\tau} = (\tau_{1},\tau_{2},...,\tau_{d})$$
the identity is parameterized so that it is in the origin
$$\mathbf{I} = (0,0,...,0)$$
The corresponding transformation to a group element is $U(\tau)$ and the __group property__ states that the representation of a product of two group elements is equivalent to the product of the representations of two individual elements.
$$ U(\tau)U(\tau')=U(\tau*\tau')$$