---
type: concept
discipline:
  - physics
field:
  - thermodynamics-statistical-mechanics
---

using the momentum number density distribution (which describes how many particles are at an interval $dp$) we can find the number density
$$ n = \frac{dN}{dV}=\int n(\mathbf{p})d^{3}p $$
and the energy density
$$ u = \int E(\mathbf{p})n(\mathbf{p})d^{3}p $$

___
$$Fdt=dp=2p\cos(\theta)$$
$$\begin{align*}
dN &= Vn(\mathbf{p})d^{3}p\\
& = Av\cos(\theta)dt\cdot n(\mathbf{p})d^{3}p
\end{align*}$$
$$dP = \frac{dF_{tot}}{A}=\frac{FdN}{A}=2v\cos^{2}(\theta)n(\mathbf{p}) \ p \ d^{3}p$$

$$ P = \frac{2}{m}\int d^{3}p \ pvn(\mathbf{p})\cos^{2}(\theta) $$
To simplify, we can assume $n(\mathbf{p})$ is isotropic so that  
$$n(\mathbf{p})\to \frac{1}{4\pi}n(p)$$
$$P = \frac{1}{2\pi m}\int\limits_{0}^{2\pi}d\phi  \int\limits_{0}^{\frac{\pi}{2}}d\theta \sin(\theta)\int\limits_{p_{1}}^{p_{2}} dp \ p^{3}vn(p)\cos^{2}(\theta)$$
$$ \boxed{\begin{align*}
P &= \frac{1}{3}\int dp \  p^{3}v(p)n(p)\\
\end{align*}}$$