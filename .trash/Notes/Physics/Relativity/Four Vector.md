# Four Vector
#GR1 #relativity #kinematics #spacetime

Here are few of the most commonly used 4-vectors in special relativity

# 4 Position (Event)
The most basic 4-vector. It Describes an __event__ which is specified by position and time on the spacetime manifold. 
$$ X = x^{\mu} = (ct,\mathbf{r})  \tag{1}$$
___
# 4 Velocity
4-velocity is defined as the change in 4-position with respect to proper time in [[Minkowski Space|Minkowski space-time]]. It is the equivalent of the 3-velocity in Euclidean space.
$$ 
U = u^{\nu} \equiv \frac{dX}{d\tau} = \frac{dX}{dt}\frac{dt}{d\tau}
= \gamma \frac{dX}{dt} \tag{2} = \gamma (c,\mathbf{v})
$$
while the definition of the [[Lorentz Factor & Proper Time |Lorentz Factor]]. The 4-velocity is therefore
$$U = u^{\nu} = \gamma \left(c,\mathbf{v}\right) \tag{2}$$
## Invariance of 4-Velocity
Taking the inner product of the 4-velocity with itself, with respect to the Min kowski metric reveals a Lorentz invariant quantity, or a 'scalar'
$$ U\cdot U = \eta_{\mu\nu}u^{\mu}u^{\nu} = 
\gamma^2c^2\left(-1 + \frac{\mathbf{v}^2}{c^2}\right) = -\gamma^2c^2\frac{1}{\gamma^2} = -c^2   \tag{3}$$
or shortly
$$ \large\boxed{U\cdot U = -c^2} $$
 ___
# 4 Momentum / Wavevector
Just like in Euclidean space, 4-momentum is conserved in the absence of external forces. It is central for the analysis of relativistic collisions.

## massive particles
For massive particles we just multiply the four-velocity by the particles mass. Using the four-velocity invariance expression we get that for four-momentum.
$$ P= p^{\mu} \equiv mu^{\mu} = m\gamma({c,\mathbf{v}}) \equiv \left(
\frac{E}{c},\mathbf{p}\right)\tag{4}$$
$$\textbf{where} \quad E \equiv m\gamma c^2$$
The invariant quantity of the 4 momentum follows directly from the invariant quantity of the 4 velocity
$$ P\cdot P = m^{2} \left(U\cdot U\right) = -m^2c^2 \tag{5}$$
On the other hand
$$ P\cdot P = -\left(\frac{E}{c}\right)^2 + \mathbf{p}^2 \tag{6}$$
Equating $(5)$ and $(6)$ yields Einstein's famous energy-momentum relation, also known as relativistic [[Dispersion Relation]].
$$ \Large\boxed{E^2 = \left(pc\right)^2 + \left(mc^2\right)^2}$$

#### massless particles
Using planks convention for writing energy and momentum of waves we construct a 4-wave vector in the following way
$$ K = k^{\mu} = \hbar\left(\frac{\omega}{c},\mathbf{k}\right)\tag{7} $$
Such that the invariant quantity is
$$K\cdot K = \eta_{\mu\nu}k^{\mu}k^{\nu} = \hbar^{2} \left( \left(\frac{\omega}{c}\right)^{2}-\mathbf{k^{2}}\right)=0 \tag{8}$$
Since in vacuum the [[Dispersion Relation]] is $\omega = ck$
___
## 4 Acceleration
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