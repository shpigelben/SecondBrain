---
type: puzzle
discipline:
  - physics
field:
  - orbital-mechanics
  - dynamical-systems
---

inspired by [Master the Complexity of Spaceflight (Brain Truffle)](https://www.youtube.com/watch?v=dhYqflvJMXc&t=130s&ab_channel=braintruffle)

![500](../4%20Misc/Attachments/Pasted%20image%2020240726112050.png)

Assuming the spacecraft is very light allows for a reduction in variables.

# Solving a 2D equation for gravitationally bound object.

![400](../4%20Misc/Attachments/Pasted%20image%2020240726175715.png)
$$
\begin{align}
\mathbf{F_{g}} &= \frac{GMm}{r^{2}}(-\hat{\mathbf{r}})\\ &= - \frac{GMm}{x^{2}+y^{2}}\begin{bmatrix}
\cos\theta \\ \sin\theta
\end{bmatrix} \\
&= - \frac{GMm}{x^{2}+y^{2}}\begin{bmatrix}
\cos\left( \tan^{-1}\left( \frac{x}{y} \right) \right) \\ \sin\left(\tan^{-1}\left( \frac{x}{y} \right) \right)
\end{bmatrix} = m \large\begin{bmatrix}
\ddot{x} \\ \ddot{y}
\end{bmatrix}
\end{align}
$$

This leads to a [second order, nonlinear, coupled, ordinary, differential equations](Classifications%20of%20Differential%20Equations.md)

$$
\begin{align}
\frac{d^{2}x}{dt^{2}} &= - \frac{GM}{x^{2}+y^{2}} \ \cos\left[\tan^{-1}\left( \frac{x}{y} \right) \right] \\
\frac{d^{2}y}{dt^{2}} &= - \frac{GM}{x^{2}+y^{2}} \ \sin\left[\tan^{-1}\left( \frac{x}{y} \right) \right]
\end{align} 
$$

Which need to be broken down into a set of four first order DEs for numeric solution.
$$
\begin{align}
&x_{1} = x \\
&x_{2} = \dot{x}_{1} = \dot{x} \\
&x_{3} = \dot{x}_{2}=\ddot{x} = f_{\scriptsize x}(x_{1},y_{1})
\end{align} \Longrightarrow \begin{cases}
\dot{x}_{1} = x_{2}  \\
\dot{x}_{2} = f_{\scriptsize y}(x_{1},y_{1})
\end{cases}
$$
$$
\begin{align}
&y_{1} = y \\
&y_{2} = \dot{y}_{1} = \dot{y} \\
&y_{3} = \dot{y}_{2}=\ddot{y} = f(x_{1},y_{1})
\end{align} \Longrightarrow \begin{cases}
\dot{y}_{1} = y_{2}  \\
\dot{y}_{2} = f(x_{1},y_{1})
\end{cases}
$$

Solving via the Euler method goes as follows

$$
\begin{align}
x_{2,n+1} =  x_{2}(t+dt) &= x_{2}(t) + \frac{dx_{2}}{dt}|_{(x_{1}(t),y_{1}(t))}\cdot dt  \\
&=x_{2,n} + f_{\scriptsize x}(x_{1,n}, y_{1,n})\cdot dt \\
 \\
y_{2,n+1} =  y_{2}(t+dt) &= y_{2}(t) + \frac{dy_{2}}{dt}|_{(x_{1}(t),y_{1}(t))}\cdot dt  \\
&=y_{2,n} + f_{\scriptsize x}(x_{1,n}, y_{1,n})\cdot dt \\
 \\
x_{1,n+1} = x_{1}(t+dt) &= x_{1}(t)+ \frac{dx_{1}}{dt}|_{ x_{2}(t)}\cdot dt \\
&=x_{1,n}+x_{2,n}\cdot dt \\
 \\
y_{1,n+1} = y_{1}(t+dt) &= y_{1}(t)+ \frac{dy_{1}}{dt}|_{ y_{2}(t)}\cdot dt \\
&=y_{1,n}+y_{2,n}\cdot dt
\end{align}


$$

Initial conditions are of the form
$$
\mathbf{r_{0}}=R_{\scriptsize 0}\begin{bmatrix}
\cos\theta_{0} \\ \sin\theta_{0}
\end{bmatrix} \quad \mathbf{\dot{r}_{0}} = \begin{bmatrix}
\dot{x}_{0} \\ \dot{y}_{0}
\end{bmatrix}
$$


> [!NOTE] Many Gravitationally Attractive Bodies
> $$\begin{align}\mathbf{a} &= \sum\limits_{i=1}^{N}\mathbf{F_{g,i}}  \\\frac{d^{2}}{dt^{2}} \begin{bmatrix}x \\ y\end{bmatrix}&=\sum\limits_{i=1}^{N} \frac{GM_{\scriptsize i}}{\Big[(x_{i}-x)^{2}+(y_{i}-y)^{2}\Big]^{3/2}}\begin{bmatrix}x_{i}-x \\ y_{i}-y\end{bmatrix}\end{align}$$


# Improvements
- [x] Planet collision detection

![500](../4%20Misc/Attachments/Screen%20Recording%202024-07-27%20at%2017.09.18.gif)

- [ ] Create a contour map of the potential wells made by the gravitating stars
- [ ] Time-dependent planetary positions.
	- [ ] solve the N-body problem of N planets
	- [ ] in the Euler method, use the time dependent position for the planets when updating in the solver $\text{pos}[n] = (x_{\scriptsize i}[n],y_{\scriptsize i}[n])$.
	-  Since the body in question is assumed to be very light, it negligibly effects the trajectories of other planets, so those can be treated as "constant" and independent of the trajectory of the solution

