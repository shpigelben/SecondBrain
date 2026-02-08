#math #multivariable #calculus

Consider a function $f(\mathbf{x})$ where $\mathbf{x}=(x_{1}, \dots , x_{n})$. An extremum of $f$ is located where all of its partial derivatives vanish, namely
$$ df(\mathbf{x}) = \frac{\partial f(\mathbf{x})}{\partial x^{i}}dx^{i} = \nabla f(\mathbf{x})\cdot d \mathbf{x} \stackrel{!}{=}0  \tag{1}$$
For an arbitrary $d \mathbf{x}$. If, however, there exists a constraint 
$$g(\mathbf{x})=0\tag{2}$$
that determines an n-1 dimensional surface $\mathcal{S}$. The problem than changes to finding the extremum of $f$ on $\mathcal{S}$. The differential step $d \mathbf{x}$ can no longer be arbitrary, but must satisfy the following
$$0=dg = d \mathbf{x}\cdot\nabla g
\tag{3}$$
 Combining (2) and (3) we get the following
 $$d \mathbf{x}\cdot\nabla(f\pm\lambda g)=0$$
We generalize by giving the constraint a factor of $\lambda$ so that we can later find $x(\lambda)$ that satisfies the extremum of the function on the surface.
$$\mathcal{L}\big(f(x),g(x);\lambda\big)=f(x)\pm \lambda g(x)$$
$$ \nabla \mathcal{L}\stackrel{!}{=} 0 \quad {\large\leadsto} \quad x(\lambda)$$