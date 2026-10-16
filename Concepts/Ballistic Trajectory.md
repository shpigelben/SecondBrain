---
type: concept
discipline:
  - physics
field:
  - classical-mechanics
---

The forces that act on a ballistic body are mainly the force of gravity and drag force due to air resistance. The equation of motion can be written as follows

$$
\begin{align*}
m \frac{d^{2}\mathbf{r}}{dt^{2}} &=  -\gamma \frac{d\mathbf{r}}{dt}-m\mathbf{g} \\ \\
m \frac{d^{2}}{dt^{2}}\begin{pmatrix}x \\
y\end{pmatrix} &= -\gamma \frac{d}{dt} \begin{pmatrix}x \\
y\end{pmatrix} -\begin{pmatrix} 0 \\
mg\end{pmatrix}
\end{align*}
$$

these are two uncoupled ODEs of order 2, which can be solved separately

$$
\begin{cases}
\ddot{x} = - \frac{\gamma}{m} \dot{x} \\ \\ \ddot{y}=- \frac{\gamma}{m} \dot{y} - g
\end{cases}
$$
to solve numerically, we first have to separate each component of the equation into two first order ODEs.

$$
\begin{align*}
X  &\equiv  \begin{pmatrix}x_{1} \\ x_{2}\end{pmatrix} =\begin{pmatrix}x \\\dot{x}\end{pmatrix} \\ \\ 

Y  &\equiv  \begin{pmatrix}y_{1} \\ y_{2}\end{pmatrix} =\begin{pmatrix}y \\\dot{y}\end{pmatrix}
\end{align*}
$$


$$
\begin{align*}
\dot{X}  &=\begin{pmatrix}\dot{x} \\\ddot{x}\end{pmatrix} =\begin{pmatrix}\dot{x}_{1} \\ \dot{x}_{2}\end{pmatrix} =\begin{pmatrix}x_{2} \\
- \frac{\gamma}{m}x_{2}\end{pmatrix} \\ \\ 

\dot{Y}  &=\begin{pmatrix}\dot{y} \\\ddot{y}\end{pmatrix} =\begin{pmatrix}\dot{y}_{1} \\ \dot{y}_{2}\end{pmatrix} =\begin{pmatrix}y_{2} \\
-\frac{\gamma}{m}y_{2} -g\end{pmatrix}

\end{align*}
$$

By solving for $x_{2}$ and $x_{1}$ we can get $x$