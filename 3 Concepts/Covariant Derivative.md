---
type: concept
discipline:
  - physics
field:
  - relativity
---

Differentiation of a vector field at a certain point involves taking the limiting difference of vectors in the field $$\lim_{dt \to \infty} \frac{\mathbf{V}(t+dt)-\mathbf{V}(t)}{dt}$$
The difference of two vectors consists of parallel transporting them (which is done naively in flat spaces) so that they begin from the same point and computing their difference. In [[Curved Space]], this transport has to be accounted for by doing a proper [[Parallel Transport]] with [[Christoffel Symbols]]. This leads to the 

$$ \nabla_{\beta} A^{\alpha} = \partial_{\beta}A^{\alpha} + {\Gamma^{\alpha}}_{\beta\sigma}A^{\sigma} $$
___
### Directional (?) Covariant Derivative 

Contraction of the covariant derivative with a certain vector
$$ \nabla_{\mathbf{u}}A^{\alpha} = u^{\beta}( \nabla_{\beta} A^\alpha) $$
$$ \nabla_{\mathbf{u}}u^{\alpha} = u^{\beta}( \nabla_{\beta} u^\alpha) $$
