# Metric Tensor
#GR1 #geometry #gravity #spacetime #manifold
___

- Spacetime is a [[Manifold]]. A manifold which is equipped with a metric $g$ that measures "distances" between points on the manifold is called a [[Riemannian Manifold]]. 
- In the case of [[Minkowski Space]] where distances can be negative it is called a pseudo-Riemannian manifold.

The distance between two tensors $v^{\mu}$ and $u^{\nu}$ of the manifold is given by
$$g(v^{\mu},u^{\nu}) = \mathcal{V}\cdot\mathcal{U}$$
the representation of the tensor metric in a given basis ${e_i}$ is given by
$$ g(\mathbf{e}_i,\mathbf{e}_j) = g_{ij}$$
The "length" of the vector is given by feeding the same vector into the metric
$$g(v^{\mu},v^{\mu}) = \mathcal{V}\cdot\mathcal{V} = ||\mathcal{V}||^2$$
___
## "Lengths" In Relativity

In the formalism of [[Special Relativity]] spacetime is described by the mathematical construct of [[Minkowski Space]].
- Points in the Minkowski space, correspond to __events__ (position+time) that occur in physical spacetime.
- Distance between two events is called an __interval__ and is computed using the Minkowski metric.

lengths of vectors can be 0 for nonzero vectors, and even negative we call them null and spacelike vectors respectively, while timelike vectors  are the "normal" definite positive vectors.

When a metric can zero lengths for nonzero vectors, and negative lengths, we call it a __pseudo metric__. A manifold with a pseudo metric is called [[Pseudo-Riemannian Manifold]]. So the mathematical formalism of special relativity takes place on what is called a pseudo-Riemannian manifold equipped with a pseudo metric, also known as Minkowski metric. 