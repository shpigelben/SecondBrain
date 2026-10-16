---
type: concept
discipline:
  - math
field: []
---

$$\int\limits_{\mathcal{C}}\mathbf{F}\cdot d\boldsymbol{\gamma} $$
$\gamma:[0,1]\to \mathcal{C}$ is the parametrization of the curve $\mathcal{C}$. The line integral can then instead be written in terms of the parametrization variable $t$ by using the chain rule
$$\int\limits_{0}^{1} \mathbf{F}\big(\boldsymbol{\gamma}(t)\big)\cdot \frac{d\boldsymbol{\gamma}}{dt} \ dt $$
$$\mathbf{F}(\mathbf{r}) = \begin{bmatrix}A(\mathbf{r}) \\
B(\mathbf{r}) \\
\vdots \end{bmatrix} \quad \quad 
\boldsymbol{\gamma}(t)=\begin{bmatrix}\gamma_{1}(t) \\
\gamma_{2}(t) \\
\vdots\end{bmatrix} \quad \quad
\mathbf{F}(\boldsymbol{\gamma}(t))=\begin{bmatrix}A\big(\boldsymbol{\gamma}(t)\big) \\
B\big(\boldsymbol{\gamma}(t)\big) \\
\vdots \end{bmatrix}$$
$$\int\limits_{0}^{1} \begin{bmatrix}A\big(\boldsymbol{\gamma}(t)\big) & B\big(\boldsymbol{\gamma}(t)\big) & \dots\end{bmatrix} \cdot \begin{bmatrix}\gamma'_{1}(t) \\
\gamma'_{2}(t) \\
\vdots\end{bmatrix}\, dt $$
