#dynamical-systems #nonlinear

The first step in analyzing a dynamical system that in non integrable, is identifying its __critical points__. We recall the general rule that describes an ordinary [[Dynamical System]]
$$ \frac{d\mathbf{x}}{dt}=\frac{d}{dt}\begin{pmatrix}x_{1} \\ \vdots \\ x_{n}\end{pmatrix}=\begin{pmatrix}f_{1}(\mathbf{x}) \\ \vdots  \\ f_{n} (\mathbf{x})\end{pmatrix}=\mathbf{f}(\mathbf{x}) $$
critical points $\mathbf{x_{c}}$ are defined as points of stability where the dynamic of the system seizes, namely where $0=\dot{\mathbf{x}} = f(\mathbf{x_{c}})$

___
# Linearization
The __flow__ of the system is largely determined by the nature of its critical points. Therefore, analyzing the behavior in the vicinity of these points provides a general view of how the system evolves. To do that we [[Taylor Series|approximate the system to linear order]] around the c9ritical point
$$\frac{d\mathbf{x}}{dt} = \mathbf{f}(\mathbf{x}) \approx \mathbf{f}(\mathbf{x_{c}}) + \mathbf{J}{\large |_{\mathbf{x_{c}}}}\cdot (\mathbf{x-x_{c}})$$
where the first order term vanishes by the definition of critical point.
> [!NOTE]- Matrix Notation
> $$\begin{align*}\mathbf{f}(\mathbf{x})&=\begin{pmatrix}f_{1}(\mathbf{x}) \\ \vdots  \\ f_{n} (\mathbf{x})\end{pmatrix} \approx \begin{pmatrix}f_{1}(\mathbf{x_{c}}) + \frac{\partial f_{1}}{\partial x_{j}}(x_{j}-x_{cj}) \\ \vdots  \\ f_{n}(\mathbf{x_{c}}) + \frac{\partial f_{n}}{\partial x_{j}}(x_{j}-x_{cj})\end{pmatrix}\\ \\& =\underbrace{\begin{pmatrix}f_{1}(\mathbf{x_{c}}) \\ \vdots  \\ f_{n} (\mathbf{x_{c}})\end{pmatrix}}_{\mathbf{f}(\mathbf{x_{c}})} + \underbrace{\begin{pmatrix} \frac{\partial f_{1}}{\partial x_{1}} &  \cdots &  \frac{\partial f_{1}}{\partial x_{n}} \\\vdots & \ddots & \vdots\\\frac{\partial f_{n}}{\partial x_{1}} & \cdots & \frac{\partial f_{n}}{\partial x_{n}}\end{pmatrix}} _{\mathbf{J(x_{c})}} \underbrace{\begin{pmatrix}x_{1}-x_{c1}\\\Large\vdots\\x_{n}-x_{cn}\end{pmatrix}}_{\mathbf{x-x_{c}}}\end{align*}$$

And so we're left with the linear behavior of the system near the critical point which is given in index notation below for clarity
$$ \frac{dx_{i}}{dt} \approx \frac{\partial f_{i}{\tiny(x_{cj})}}{\partial x_{j}}  (x_{j}-x_{cj})$$
being able to diagonalize the [[Jacobian matrix]] at the critical point, $\mathbf{J}(\mathbf{x_{c}})$, 

> [!NOTE]- Exponential Basis Change
> We begin by diagonalizing the Jacobian. We aim to find the diagonalizing basis $u$. $$\begin{align*}\mathbf{x}(t) &= \exp(\mathbf{J}t)\cdot\mathbf{x}\small(0)\\\\&= \exp(\mathbf{U^{-1} D U}t)\cdot \mathbf{x}\small(0)\\\\&=\sum\limits_{n} \frac{t^{n}}{n!}(\mathbf{U^{-1} D U})^{n}\cdot \mathbf{x}\small(0)\\\\&=\sum\limits_{n} \frac{t^{n}}{n!}(\mathbf{U^{-1}D^{n} U})\cdot \mathbf{x}\small(0)\\\\&=\mathbf{U^{-1}} \left(\sum\limits_{n} \frac{t^{n}}{n!} \mathbf{D}^{n}\right)\mathbf{U}\cdot \mathbf{x}\small(0)\\\\&=\mathbf{U^{-1}} \exp(t\mathbf{D})   \mathbf{U}\cdot \mathbf{x}{\small(0) }\Rightarrow\\\\\mathbf{U\cdot x}(t) &= \exp(t\mathbf{D})\mathbf{U}\cdot \mathbf{x}{\small (0)}\\\\\mathbf{u}(t)& = \exp(t\mathbf{D})\cdot\mathbf{u}\small(0)\end{align*}$$ In the third transition we do not write it explicitly, by multiplying the $U^{-1}DU$ term $n$ times with itself the $U$ matrices become identities except for the outermost ones


# Stability