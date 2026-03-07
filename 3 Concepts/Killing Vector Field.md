---
type: concept
discipline:
  - physics
field:
  - relativity
  - general-relativity
---

A killing vector field, is a vector field on a [[Riemannian Manifold|Riemannian]] (or a [[Pseudo-Riemannian Manifold|pesudo]]) manifold the preserves the [[Metric Tensor|metric]]. It means that moving an object along a killing vector will not distort distances in the object. 

Killing fields are infinitesimal [[Lie Algebra | generators ]] of [[Isometry |isometries]]. If for a certain coordinate $1$ (for example) the following holds for all values of $x^{1}$

$$ \frac{\partial g_{\mu \nu}}{\partial x^{1}} = 0 \quad\forall x^{1} \tag{1}$$

Then there exists a killing vector in the direction of $x^{1}$ for example

$$\large \boxed{ \xi^{\alpha}= (0,1,0,0) }  $$

Simply put, a killing vector points in the direction through which the metric does not change. This vector implies a symmetry for the equations of motion produces by the [[Euler Lagrange Equations]] since the  [[Lagrangian]]'s dependence on the coordinates is _only_ through the metric. Thus, if $(1)$ holds, the following holds as well

$$\large \cancelto{0}{\frac{\partial \mathcal{L}}{\partial x^{\mu}}}= \frac{d}{d\sigma}\frac{\partial \mathcal{L}}{\partial \left(\frac{dx^\mu}{d\sigma}\right)} $$

integrating over the path parameter $\sigma$ and recognizing the generalized momentum

$$P_{\mu} = \frac{\partial \mathcal{L}}{\partial \left(\frac{dx^{\mu}}{d\sigma}\right)}=\text{const}\tag{1}$$

$$ \frac{\partial \mathcal{L}}{\partial \left(\frac{dx^{\mu}}{d\sigma}\right)} = \frac{1}{\mathcal{L}}\left(-g_{1\beta} \frac{dx^{\beta}}{d\sigma}\right) = -g_{1\beta}\frac{dx^{\beta}}{d\tau} = -g_{\alpha\beta}\left(\xi^{\alpha}\frac{dx^{\beta}}{d\tau}\right) = - \xi \cdot u \tag{2}$$

Where the last equality in $(2)$ is by the definition of distance measure through the metric. The two equations above lead to the symmetry implication of the existence of a killing vector.

$$\Large \boxed{ \xi \cdot u = \text{const} }$$


