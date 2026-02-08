#math #multivariable #calculus 

The Hessian is a matrix with entries consisting of second partial derivatives of some scalar function. For a multivariable function symmetric$\mathbb{R}^{n}\to \mathbb{R}$, the Hessian will be a $n\times n$ matrix
$$ (H_{f})_{ij} = \frac{\partial ^{2}f}{\partial x_{i}\partial x_{j}} $$
It is symmetric since mixed partial derivatives commute $\partial_{xy}f =\partial_{yx}f$, so every off-diagonal term as a corresponding, equal, term in its transposed location

___
# Taylor Expansion of a Multivariable Function
The [[Taylor Series|Taylor expansion]] of a scalar function $f:\mathbb{R}^{n}\to\mathbb{R}$ around the point $\mathbf{x}_{0}=(x_{1,0},\dots,x_{n,0})$ is given by
$$f(\mathbf{x}) = f(\mathbf{x}_{0}) + \left(\frac{\partial f}{\partial x_{i}}\Bigg|_{x_{i,0}}\right)\Delta x_{i} + \left(\frac{\partial^{2}f}{\partial x_{i} \partial x_{j}}\Bigg|_{\begin{align*}
x_{i,0} \\x_{j,0}
\end{align*}}\right)\Delta x_{i}\Delta x_{j} + \dots$$
Where $\Delta x_{i} = x_{i}-x_{i,0}$. This can also be written less rigorously in a differential form
$$df(\mathbf{x}) = \mathbf{}{\nabla f}\cdot d\mathbf{x} + \mathbf{H} d\mathbf{x}\cdot d\mathbf{x} + ...$$
Where $\mathbf{H}$ is the Hessian matrix

___
# Jacobian of the Gradient
The Hessian can be calculated by taking the Jacobian of the gradient of a scalar function
$$H_{f} = J\big( \mathbf{\nabla f}\big)$$
The proof for this "identity" is fairly straight forward using the definitions of the gradient and the Jacobian in index notation

___
# Second Derivative Test