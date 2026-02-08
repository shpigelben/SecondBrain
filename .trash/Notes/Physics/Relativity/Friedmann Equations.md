#general #relativity #cosmology 

# First Friedmann Equation
The __first Friedmann equation__ is gained by calculating the $G_{00}$ component of the [[Einstein field equation]] for the FRW metric
$$\frac{\dot a ^{2}+kc^{2}}{a^{2}} = \frac{8\pi G\rho' + \Lambda c^{2}}{3}$$
Which can be also written in the more compact form
$$H^{2} + \frac{kc^{2}}{a^{2}} = \frac{8\pi G}{3}\rho \tag{2}$$
Where $k$ is the [[Gaussian Curvature|spatial curvature]], $a$ is the scale factor of the metric, and $\rho$ is the density of all radiation, baryonic matter and dark matter in the universe. We write $\rho=\rho_{r}+\rho_{m}+\rho_{\small \Lambda}$. We identify a density scale called the __critical density__ which is the density we observe today, in a flat universe where $k=0$. We plug this into $(2)$ and recall the definition of the [[Hubble's Law|Hubble constant]] so
$$ \boxed{\rho_{c} \equiv \frac{3H^{2}}{8\pi G}}$$
through the critical density we define the dimensionless quantities which are known as __density parameters__ as follows
$$\Omega = \frac{\rho}{\rho_{c}} = \Omega_{r}+\Omega_{m} + \Omega_{\small \Lambda} \tag{4}$$
dividing the Friedmann equation $(2)$ by $H^{2}$ gives 
$$1 - \frac{kc^{2}}{a^{2}H^{2}}= \frac{8\pi G}{3H^{2}}\rho \Rightarrow \frac{\rho}{\rho_{c}}\tag{5}$$
By defining the __spatial curvature density__ to be 
$$\boxed{\Omega_{k}=\frac{\rho_{k}}{\rho_{c}} \equiv \frac{kc^{2}}{a^{2}H^{2}}}$$
we can rewrite $(5)$ as follows. using $(4)$
$$ 1 = \Omega_{r} + \Omega_{m} + \Omega_{\small \Lambda} + \Omega_{k} \tag{6}$$
equation $(6)$ accounts for everything that constitutes our universe, and the dimensionless density parameters are the relative contribution of each constituent.

___
# Second Friedmann Equation

$$\frac{\ddot{a}}{a} = -\frac{4\pi G}{3}\left(\rho+ \frac{3p}{c^{2}}\right) + \frac{\Lambda c^{2}}{3}$$