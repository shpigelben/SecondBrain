---
type: concept
discipline:
  - physics
field:
  - astrophysics
---

[[Einstein Field Equation|Einstein field equation]] is given by
$$G_{\mu \nu}+ \Lambda g_{\mu\nu} = \frac{8\pi G}{c^{4}}T_{\mu \nu}$$
# Newtonian Cosmology
Considering the energy $E=K+V$ of an isotropic universe, the kinetic energy, using [[Hubble's Law|Hubble's law]] is
$$K = \frac{1}{2}mv^{2}=\frac{1}{2}m(Hr)^{2}$$
For spherical symmetry, the potential energy is given by integrating over all of the volume of [[Fermions|fermionic matter]] in the universe
$$U = -\frac{GM(r)m}{r} = -\frac{Gm}{r}\left[\frac{4\pi}{3}r^{3}(\rho_{f}+\rho_{\Lambda})\right]$$
where $\rho_{\Lambda}=\frac{\Lambda c^{2}}{8\pi G}$ is an addition added ad-hoc due to the curvature of the universe (General relativity), we can write
$$\frac{2}{mr^{2}}E = \frac{2}{mr^{2}}(K+U)=H^{2} - \frac{8\pi G}{3}\rho_{f} - \frac{1}{3}\Lambda c^{2}$$
Next we make a change of variables $E\to k \Rightarrow E=-\frac{1}{2}mc^{2}k$ where k is a dimensionless quantity
$$\boxed{\begin{align*}
H^{2}+ k\frac{c^{2}}{r^{2}} &= \frac{8\pi G}{3}\rho_{f}+ \frac{1}{2}\Lambda c^{2}\\
\frac{\dot{r}^{2}}{r^{2}}+ k\frac{c^{2}}{r^{2}} &= \frac{8\pi G}{3}\rho_{f}+ 4\pi G \rho_\Lambda
\end{align*}}$$
This is the first __Friedman Equation__, dividing by $H$ we get
$$ 1 = \Omega_{m} + \Omega_{\Lambda}+ \Omega_{k}$$
where we define the omegas to be the ratios of densities in the universe to the critical density of the universe
$$\begin{align*}
\Omega_{m}&= \frac{\rho}{\rho_{c}} &\Omega_{k}&= - \frac{kc^{2}}{r^{2}H^{2}}\\
\Omega_{\Lambda}&= \frac{\rho_\Lambda}{\rho_{c}} & \rho_{c}&= \frac{3H_{0}^{2}}{8\pi G}\\
\end{align*}$$
$\Omega_{m,0}$ 