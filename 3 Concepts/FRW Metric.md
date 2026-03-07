---
type: concept
discipline:
  - physics
field:
  - relativity
  - astrophysics
---

![[../4 Misc/Attachments/Cosmos-animation_Lambda-CDM.gif|center|700x200]]

The Friedmann-Robertson-Walker [[Metric Tensor|metric]], is an exact solution to the [[Einstein Field Equation]] which describes an [[Homogeneity & Isotropy|isotropic, homogeneous]] __expanding__ universe. Most generally it is given by
$$\begin{align*}
ds^{2} &= -dt^{2}+a^{2}(t)d\sigma^{2} \\
&= -dt^{2}+a^{2}(t)\big(dr^{2}+r^{2}d\Omega^{2}\big) \tag{1}
\end{align*}
$$
> [!NOTE]- Matrix Notation
> $$g_{\mu\nu}(t)=
\begin{pmatrix}-1 & ~ & ~ & ~ \\ ~ & a^{2}(t) & ~ & ~ \\ ~ & ~ & a^{2}(t) & ~ \\ ~ & ~ & ~ & a^{2}(t)\end{pmatrix}$$

The spatial differential $d\sigma$ can describe either flat (Euclidean), open (hyperbolic) or closed (spherical) space depending on the [[Gaussian Curvature|curvature]] $\kappa$ of the universe which will be introduced later. The time dependent $a(t)$ is called the __scale factor__. It is the dimensionless quantity that describes the expansion of the universe.

> [!NOTE]- Flat Universe
> $$r= \chi \quad\to\quad dr = d\chi $$Plugging the above change of coordinates into the metric gives$$\begin{align*}d\sigma^{2}_{\small E}&=d\chi^{2}+\chi^{2}d\Omega^{2} \\ &=dr^{2}+r^{2}d\Omega^{2}\end{align*}$$

> [!NOTE]- Closed Universe
> $$\begin{align*}r=\sin{\chi} \quad \to \quad &dr=\cos{\chi}d\chi= \sqrt{1-\sin^{2}{\chi}}d\chi= \sqrt{1-r^{2}}dr \\& d\chi= \frac{dr}{\sqrt{1-r^{2}}}\end{align*}$$ Plugging the above change of coordinates into the metric gives $$d\sigma^{2}_{\small S}=\frac{dr^{2}}{1-r^{2}}+r^{2}d\Omega^{2}$$

> [!NOTE]- Open Universe
> $$\begin{align*}r=\sinh{\chi} \quad \to \quad &dr=\cosh{\chi}d\chi= \sqrt{1+\sinh^{2}{\chi}}d\chi= \sqrt{1+r^{2}}dr \\& d\chi= \frac{dr}{\sqrt{1+r^{2}}}\end{align*}$$ Plugging the above change of coordinates into the metric gives$$d\sigma^{2}_{\small H}=\frac{dr^{2}}{1+r^{2}}+r^{2}d\Omega^{2}$$

So the FRW metric for all types of universes can be compactly written as 
$$ds^{2}=-dt^{2}+a^{2}(t) \left[\frac{dr^{2}}{1-\kappa r^{2}} +r^{2}d\Omega^{2} \right]$$
where $\kappa=1,0,-1$ is the spatial curvature of the universe which is closed, flat or open respectively.
___
$a(t)$ is a dimensionless quantity known as the __scale factor__. We normalize it according to our time-view of the universe so $a(t_{0})=1$ where $t_{0}$ is our time. We also define a length scale such that the scale factor could be displayed in terms of it 
$$\bar{a}(t)=r_{0}\cdot a(t)$$
We can therefore write the FRW metric using the unit free variable $\chi$ as follows
$$ds^{2} = -c^{2}dt^{2} + \bar{a}^{2}(t)\Big[ d\chi^{2} + \sigma^{2}(\chi)d\Omega^{2}\Big] $$
Where
$$d\chi= \frac{dr}{\sqrt{1-\kappa r^{2}}} \quad\quad\quad\quad\sigma(\chi) = \begin{cases}
\sin(\chi) &\kappa=1 \\
\chi &\kappa=0 \\
\sinh(\chi) &\kappa=-1
\end{cases}$$
These are known as __comoving coordinates__ 

___
# Comoving & Proper Distance
Comoving distance is __time-independent__ distance. It is measured by photons that travel on null geodesics $ds^{2}=0$. The radial __comoving distance__ that a photon measures between times of emittance $t_{1}$ and time of arrival $t_{2}$ is
$$ d_{c} = r_{0}\chi = r_{0}\int d\chi = \int\limits_{t_{1}}^{t_{2}} \frac{cdt}{a(t)} $$
proper distance on the other hand is __time dependent__. It is the interval $ds$ between two points on a constant time-surface $dt=0$
$$d_{p}(t)= \int ds = \int \bar{a}(t)d\chi = r_{0}a(t)\int d\chi = a(t) r_{0} \chi$$
The relationship between comoving and proper distance is
$$ d_{p}(t)=a(t)d_{c}$$