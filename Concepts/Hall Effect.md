---
type: concept
discipline:
  - physics
field:
  - condensed-matter
  - quantum-mechanics
---

In the absence of electric field, a charged particle's movement through a uniform magnetic field a circular motion given by the [[Lorentz Force]]. The frequency of the circular motion is called [[cyclorton frequency]] and is given by
$$\omega_{B}= \frac{eB}{mc} \tag{1}$$
if the particle enters the field with kinetic energy $E$ its velocity is given by
$$v_{E} = \sqrt{\frac{2E}{m}} \tag{2}$$
Consequently, it travels along a circle of radius $r_E$ given by
$$ r_{E} = \frac{v_{E}}{\omega_{B}} = \frac{mc}{eB}v_{E} \tag{3} $$
if we now introduce an electric field perpendicular to the magnetic field, lets say $\mathbf{B} = B\hat{z}$ and arbitrarily choose $$\vec{\mathcal{E}} = \mathcal{E}\hat{y} = -\frac{\partial V}{\partial y}$$we now have both a magnetic and electric field, the particles motion due to Lorentz is given by
$$ m\dot{v} = \mathcal{E} - B\times v \tag{4} $$
we change transform to a moving reference frame that is moving at velocity $v_0$ relative to the lab, and so(4) changes to
$$
\begin{align}
m\dot{v}' &= \mathcal{E} - B\times (v_{0}+ v') \\ 
&= (\mathcal{E} - B\times v_{0}) - B\times v' \equiv \mathcal{E}' - B\times v' \tag{5}
\end{align}$$
We want a transformation to a frame of velocity $v_0$ such that the electric field will vanish, so we demand that $\mathcal{E}'$ be equal to zero. So by invoking a non-relativistic transformation of the electromagnetic field we arrive at the __drift velocity__
$$ \mathcal{E} - B\times v_{\small d} \overset{!}{=} 0 \ \ \Longrightarrow \ \ v_{\small d} = \frac{\mathcal{E}}{B}c \tag{6} $$
given a charge density $\rho$ the current density is 
$$J_{x}= e\rho v_{\small d} = e\rho c \frac{\mathcal{E}}{B} = - \frac{e\rho c}{B} \frac{\partial V}{\partial y} $$
$$
I_{x}= \int\limits_{y_1}^{y_{2}}J_{x}dy = - \frac{e\rho c}{B}\Big[V{\small(y_2)}-V{\small(y_{1)}\Big]} = \frac{\rho c}{B}\big( \ \mu_{2}^{(y)}- \mu_{1}^{(y)} \ \big )  \equiv G_{\small Hall}\big( \ \mu_{2}^{(y)}- \mu_{1}^{(y)} \ \big )
$$
Where $G_{\small Hall}$ stands for [[Electrical Conduction| conductivity]]. It is apparent that the current-potential relation is different than the familiar [[Ohm's Law]] since in Ohm's case the relation is dependent upon a potential difference along the direction of the current, whereas in the Hall effect introduces a similar dependence, only for a potential difference perpendicular to the propagation of current.