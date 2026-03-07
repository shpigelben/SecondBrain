---
type: concept
discipline:
  - physics
field:
  - relativity
---

One of the most basic concepts in relativity is that of the event. An event is an occurrence that happens in a certain location in space and at a certain time, and is therefore described by a **4-position** in spacetime. 

$$ X = x^{\mu} = (ct,\mathbf{r})  \tag{1}$$

> [!NOTE] Two Events in Spacetime
>Two events can be related by considering their spacetime separation.$$\Delta X = X_{1}-X_{2} = (c\Delta t,\Delta \mathbf{r})$$ By taking the [Minkowski inner product](Minkowski%20Space.md) of $\Delta  X$ we can determine whether the >events are space-like, time-like or light-like.$$\Delta X^{\mu}\Delta X_{\mu} = (c\Delta t)^{2}-(\Delta r)^{2} = \begin{cases}
\text{time-like  \ :} \quad<0 \\
\text{light-like \ :} \quad=0 \\
\text{space-like  :} \quad>0
\end{cases}$$


4-velocity is defined as the change in 4-position with respect to proper time. It is the equivalent of the 3-velocity in Euclidean space.
$$ 
U = u^{\nu} \equiv \frac{dX}{d\tau} = \frac{dt}{d\tau}\frac{dX}{dt}
= {\gamma} \frac{dX}{dt}
$$
where $\gamma$ is the [Lorentz factor](Lorentz%20Factor%20&%20Proper%20Time.md) and the 4-velocity is therefore
$$U = u^{\nu} = \gamma \left(c,\mathbf{v}\right) \tag{2}$$
Taking the inner product of the 4-velocity with itself, with respect to the Minkowski metric reveals a Lorentz invariant quantity, or a 'scalar'
$$ U\cdot U = \eta_{\mu\nu}u^{\mu}u^{\nu} = 
\gamma^2c^2\left(-1 + \frac{\mathbf{v}^2}{c^2}\right) = -\gamma^2c^2\frac{1}{\gamma^2} = -c^2   \tag{3}$$
or shortly
$$ \large\boxed{U\cdot U = -c^2} $$
# Momentum
For massive particles we simply multiply the four-velocity by the particle's mass. Using the four-velocity invariance expression we get that for four-momentum.
$$ P= p^{\mu} \equiv mu^{\mu} = m\gamma({c,\mathbf{v}}) \equiv \left(
\frac{E}{c},\mathbf{p}\right)\tag{4}$$
With $E \equiv m\gamma c^2$. The invariant quantity of the 4 momentum follows directly from the invariant quantity of the 4 velocity
$$ P\cdot P = m^{2} \left(U\cdot U\right) = -m^2c^2 \tag{5}$$
On the other hand
$$ P\cdot P = -\left(\frac{E}{c}\right)^2 + \mathbf{p}^2 \tag{6}$$
Equating $(5)$ and $(6)$ yields Einstein's famous energy-momentum relation, also known as the relativistic [Dispersion Relation](Dispersion%20Relation.md).
$$ \Large\boxed{E^2 = \left(pc\right)^2 + \left(mc^2\right)^2}$$

For massless particles we construct a 4-wave-vector in complete analogy, without rest mass of course
$$ K = k^{\mu} = \hbar\left(\frac{\omega}{c},\mathbf{k}\right)\tag{7} $$
Such that the invariant quantity is
$$K\cdot K = \eta_{\mu\nu}k^{\mu}k^{\nu} = \hbar^{2} \left( \left(\frac{\omega}{c}\right)^{2}-\mathbf{k^{2}}\right)=0 \tag{8}$$
Sinc e in vacuum the [[Dispersion Relation]] is $\omega = ck$

# Acceleration
The 4 acceleration is obtained by taking the derivative of the 4 velocity with respect to proper time
$$ A = a^{\mu} = \frac{d \ U}{d\tau} = \frac{d \ U}{dt}\frac{dt}{d\tau} = \gamma\frac{d\mathcal{u^{\mu}}}{dt} =  $$
### Proper Acceleration
The acceleration measured by an observer in its frame, using an __accelerometer__. Just like [[Proper Time]] is the time measure by an observer using a __clock__ in its frame.

### Orthogonality of 4-Velocity & 4-Acceleration
$$ U\cdot A = \gamma \left( U \cdot \frac{dU}{dt} \right)  = 
\gamma\frac{1}{2} \frac{d\left(U\cdot U\right)}{dt} = \frac{\gamma}{2} \frac{d(-1)}{dt} = \mathcal{0}
$$
Using the invariance of the inner product of the 4 velocity, we get that 4-acceleration is __always__  Minkowski-perpendicular to 4-velocity.
$$\Large\boxed{ U\cdot A = \mathcal{0}} $$
