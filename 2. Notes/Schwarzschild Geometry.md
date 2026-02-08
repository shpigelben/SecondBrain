---
type: note
field: physics
subject: relativity
nature: model

---
Schwarzschild metric is a __static__ and __spherically symmetric__ solution to the [[Einstein Field Equation]] in __vacuum__.  It describes the way spacetime behaves around (outside) massive spherical objects such as [[stars]] and [[black holes]]. The Schwarzschild [[Metric Tensor|metric]] in natural units is given by 
$$\large\boxed{ \begin{align*}
\\ \quad dS^{2}= 
-\left(1-\frac{2M}{r}\right)dt^{2} + \left(1-\frac{2M}{r}\right)^{-1}dr^{2} + r^{2}d\Omega^{2}\quad \\\
\end{align*}
}$$
and with units it is given by the following
$$ dS^{2}= 
-\left(1-\frac{2GM}{c^{2}r}\right)dt^{2} + \left(1-\frac{2GM}{c^{2}r}\right)^{-1}dr^{2} + r^{2}d\Omega^2$$

___
# Symmetries & Killing Vectors

The SWS metric in spherical coordinates is independent of time $\large t$ (_static_) and of azimuthal rotations $\large\varphi$ (_rotational symmetry_) it therefore has two [[Killing Vector Field| killing vectors]] along these coordinates
$$  \begin{align*}
&\xi^{\alpha}=(1,0,0,0)\\
&\eta^\alpha=(0,0,0,1)
\end{align*}$$
We name the two useful integrals of motion that arise from these symmetries  as follows

$$ e = -\xi\cdot u = g_{tt} \frac{dt}{d\tau} = \left(1- \frac{2M}{r}\right)u^{t} \tag{1} $$

$$l = \eta \cdot u = g_{\varphi\varphi} \frac{d\varphi}{d\tau} = \Big(r^{2}\sin^{2}{\theta}\Big) \ u^{\varphi} \tag{2}$$

1. In large distances $\lim_{r\to\infty}e{\small(r)} = u^{t}$ . Now recall from the definitions of the [[Four Vector]]s, that $mu^{t}=p^{t}=E$ , and so in large distances $\large e$ becomes energy per unit mass $\large[{e}] = {\text{J}}/{\text{M}}$ .

2. In the same dimensional analysis approach, $l$ can be observed to have units of angular momentum per unit mass. $rsin\theta$ being the radius of rotation, times the -angular frequency $\large[{l}] = {\text{JT}}/{\text{M}}$

3. Taylor expanding the metric for a small $M$ and we find resemblance with the [[Weak Field Metric]]. We recognize $M$ as the mass of the spherical object. The metric and its effect on geodesic trajectories is determined only by the mass, and not by mass distribution. 

4. There are two singularities for the metric - at $r=0$ and at $r=R_{s}=2M$ (in natural units). The $r=0$ remains inside the interior of any massive object and the metric fails to describe that region so we will not concern ourselves with the origin. The second radius is called the Schwarzschild radius and the same holds for it when talking about stars, but for a black hole, the Schwarzschild radius is outside the interior of the black hole. in fact it determines the boundary of the black hole, and it is of high interest to us.
___
# Effective Potential

Just like in classical physics, the existence of azimuthal symmetry implies planar motion. So the freedom to choose plane allows us to pick the $\theta=\pi/2$ plane such that $d\theta=0$. Plugging these facts into the normalization condition of the velocity $g_{\mu \nu}u^{\mu}u^{\nu}=-1$ we get 
$$ -\left(1- \frac{2M}{r}\right)(u^{t})^{2} + \left(1- \frac{2M}{r}\right)^{-1}(u^{r})^{2} + r^{2}(u^{\varphi})^{2} = -1$$
Expressing the velocity components in terms of the constants according to $(1)$ and $(2)$, and plugging them into the normalization condition above allows us to arrive (after certain amount of algebra) to
$$\left(\frac{e^{2}-1}{2}\right) = \frac{1}{2} \left(\frac{dr}{d\tau}\right)^{2}+ \frac{1}{2}\Bigg[\left(1- \frac{2M}{r}\right)\left(1+ \frac{r^{2}}{l^{2}}\right) - 1\Bigg]\tag{3}$$
Renaming the term on the left, and recognizing an [[Effective Potential | effetive potential]], that depends on the radial distance and we arrive at the following.
$$\large\boxed{
\begin{align*} \\ \quad 
\mathcal{E} = \frac{1}{2} \left(\frac{dr}{d\tau}\right)^{2} + V_{\small eff}(r) \quad \\\
\end{align*}} \tag {3}$$

Upon rearrangement of the expression for the effective potential in $(3)$ we get
$$
V_{\small eff}(r) = - \frac{M}{r}+ \frac{l^{2}}{2r^{2}}- \frac{Ml^{2}}{r^{3}}
$$
Which is the familiar classic [[effective potential]] of a particle in central potential, but with an added term that is inversely proportional to the cube of the distance. It is an added effect predicted by general relativity that disappears for lesser massive objects or for distant particles in orbit.

![[../9. Misc/attachments/SWS effective potential.png]]

___
# Trajectories of Massive Bodies

__For a given angular momentum and a given mass__ an effective potential is set. There exist several possible trajectories, depending on the overall energy $\mathcal{E}$ of the approaching body.

1. Circular Orbit
2. Bounded Orbits (elliptic with precession)
3. Scattering Orbits
4. Radial Plunge

## Circular Orbits

Circular orbits are born when there is no radial "force". We can find such radii for a given SWS geometry by seeking points where the radial derivative of the effective potential vanishes $\partial_rV_{\small eff}(r_{m})=0$ (extramum points of the effective potential). The radii in terms of angular momentum are calculated to be
$$ {\Large r}_{\begin{align*} max \\ min \end{align*}} =
\frac{l^{2}}{2M}\left[1\pm \sqrt{1-12\left(\frac{M}{l}\right)^{2}} \ \right] \tag {4}$$ 
The smaller radius is the unstable equilibrium point on the barrier, and the larger radius is the stable equilibrium. The condition for the existence of two circular orbits is that 
$$ l > M \sqrt{12} = \sqrt{3}R_{s}\equiv l_c $$
As a body approaches a massive spherical object with lesser and lesser angular momentum, $r_{min}$ and $r_{max}$ get closer and closer. When the body has angular momentum of exactly $l=l_c$ , there is only one possible radius that allows for circular orbit which is half stable (unstable from $r^{-}$ and stable from $r^+$) and is known as ISCO (innermost stable circular orbit). 
$${\Large r}_{m}(l_{c}) \equiv r_{\small ISCO} = 6M = 3R_s$$
When the body has less than the critical angular momentum it's only possible trajectory is that of a plunge into the massive object.

<iframe src="https://www.desmos.com/calculator/ollc1zgr9u?embed" width="400" height="300" style= "border: 5px solid   #ccc" frameborder=0></iframe>

___
### Angular Velocity as Observed from Far

We consider the angular velocity of an object orbiting a massive star, as observed from far away such that the [[Proper Time]] of the observer coincides with his time coordinate $d\tau = dt$  (for $\theta=\pi/2$)
$$ \Omega = \frac{d\varphi}{dt} = \frac{d\varphi/d\tau}{dt/d\tau}\quad \xrightarrow{(1) \ \& \ (2)}\quad \frac{1}{r^{2}}\left(1- \frac{2M}{r}\right)\left(\frac{l}{e} \right)$$
We can get the value of $l/e$ from two demands that establish a circular orbit:
1. that the radial velocity vanishes in $(3)$
2. the we are in $r_{max}$ of $(4)$ 
$$ \frac{l}{e} = \frac{\sqrt{Mr}}{{1- \frac{2M}{r}}} $$
And so the angular frequency of a circular orbit measured by a distant observer is 
$$ \Omega^{2} = \frac{M}{r^{3}} $$
Which encapsulates [[Kepler's Laws | one of Kepler's laws ]].