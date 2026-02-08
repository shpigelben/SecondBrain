#note #physics #astrophysics #statistical-mechanics #model

Consider an isolated system in which atoms and radiation are in thermal equilibrium at temperature $T$. We specifically consider [[Hydrogen Atom|hydrogen]] atoms which can either be in ground state or ionized

![center|600](../9.%20Misc/attachments/Pasted%20image%2020240409012839.png)
$$
\ce{ H^{+} + e^{-}  <=>[\gamma] H + I_{\small H} }
$$

Where $I_{\small H}=13.6 ~ \text{eV}$ is the ionization energy or the hydrogen atom. We wish to understand the ratio of ionized and non-ionized hydrogen atoms in equilibrium. In [[Thermodynamic Equilibrium]] we must have equality of [[Chemical Potential|chemical potentials]] for the reactants (from now on we write the ionization in general terms)
$$ \mu_{\small +} + \mu_{e} = \mu_{0} - I \tag{1}$$
In a dilute enough system we can treat the reactants as having [[Classical Ideal Gas#Chemical Potential|chemical potential of ideal gases]] so we can write
$$T\ln\left(\frac{n_{\small+}}{g_{\small+}}  \lambda^{3}_{\small T,\small +}\right) + Tln\left( \frac{n_{e}}{g_{e}} \lambda^{3}_{\small T,e}\right) = Tln\left( \frac{n_{0}}{g_{0}} \lambda^{3}_{\small T,0}\right) - I_{\small } \tag{1.1}$$
which can be reorganised to give
$$\ln\left[ \frac{g_{0}}{g_{e}g_{+}} \frac{n_{\small+}n_{e}}{n_{0}}  \left(\frac{\lambda_{\small T,+}\lambda_{\small T,e}}{\lambda_{\small T,0}}\right)^{3}\right]= -\beta  I \tag{1.2}$$
hydrogen in ground state has similar [[Degeneracy]] to the electron $g_{0}=g_{e}=2$ and so they cancel each other, and $g_{+}=1$. they also have similar [[Thermal Wavelength]] since it depends only on mass and their mass is approximately the same $\lambda_{T,0}=\lambda_{T,+}$ and so $(1.2)$ simplifies to
$$\frac{n_{\small+}n_{e}}{n_{0}}=\lambda^{3}_{\small T,e}e^{-\beta I} \tag{2}$$
number conservation dictates that the number of ionized atoms and number of non ionized atoms equals the total number of atoms $n = n_{0} + n_{+}$ in equilibrium the number of ionized atoms and electrons is equal $n_{e}=n_{+}$. We define the fraction of ionization by $x\equiv n_{e}/n$
$$\frac{n_{\small+}n_{e}}{n_{0}} \frac{n^{2}_e}{n-n_{e}}  = \frac{x^{2}n^{2}}{n-xn}=n\left( \frac{x^{2}}{1-x} \right) $$
using the above we can write equation $(2)$ in terms of $x$ 
$$ \frac{x^{2}}{1-x} = \frac{\lambda^{3}_{\small T,e}}{n}e^{-\beta I} $$


- [ ] [[SAHA Equation]]