---
type: concept
discipline:
  - physics
field:
  - astrophysics
  - electrodynamics
---

Radiative transfer describes the propagation of energy in the form of [electromagnetic radiation](Electromagnetic%20Waves.md). A ray, passing through matter may have energy added to it or subtracted from it. 

# In Free Space
Consider a ray that passes through two area elements $dA_{1}$ and $dA_{2}$ at distance $R$ apart. Conservation of energy dictates that the same energy should pass through both. $$dE_{1}= I_{\nu 1} d\nu dt dA_{1} d\Omega_{1} = I_{\nu 2} d\nu dt dA_{2} d\Omega_{2} = dE_{2}$$ where the frequencies are similar since we consider a propagation in free space. since $R^{2}d\Omega_{i}=dA_{j}$ we have
$$dE_{1}= I_{\nu 1} dA_{1} \frac{dA_{2}}{R^{2}} = I_{\nu 2} dA_{2}\frac{dA_{1}}{R^{2}} = dE_{2}$$
which leads to the conclusion that intensity __remains constant__ throughout propagation in free space $I_{\nu 1} = I_{\nu 2}$
$$\frac{dI_{\nu}}{ds}=0$$
 Where $ds$ is a differential element along the ray

# Emission
spontaneous emission coefficient is defined as the energy emitted per unit volume pert unit time per solid angle $\left[\frac{W}{V \ str}\right]$
$$dE = j_{\nu} dV d\Omega dt d\nu$$
By traveling a distance $ds$, a beam of cross section $dA$ covers a volume of $dV = dsdA$ thus the intensity added to the beam by spontaneous emission is
$$\boxed{dI_{\nu}=j_{\nu}ds}$$
# Absorption
The absorption coefficient $\alpha_{\nu}$ in units $\left[\frac{1}{m}\right]$ is "responsible" for the loss of intensity in a beam is it travels a distance $ds$ in matter of absorbing components at density $n$ and with cross sections $\sigma$
$$\boxed{dI_{\nu}=-\alpha_{\nu}I_{\nu}ds} = \begin{cases}
-n\sigma_{\nu} I_{\nu}ds \\ -\rho \kappa_{\nu}I_{\nu}ds
\end{cases} $$
where the alternative description of $\alpha_\nu$ with mass density $\rho$ and the mass absorption coefficient $\kappa_{\nu}$ which is also known as opacity. These expressions for the absorption coefficient hold for cases where the means interparticle distance is much larger than that of a cross section

# The Radiative Transfer Equation
The contributions above to energy loss and gain can now be incorporated into an equation that describes the variation of intensity along the ray due to __absorption__ and __emission__
$$\frac{dI_{\nu}}{ds}= -\alpha_{\nu}I_{\nu}+ j_{\nu}\tag{1}$$
For the case where only emission is present $\alpha_{\nu}=0$ the solution is
$$I_{\nu}(s) = I_\nu(s_{0}) + \int\limits_{s_{0}}^{s}j_{\nu}(s')ds' $$
For the case of no emission $j_{\nu}=0$ and only absorption the solution is
$$I_{\nu}(s) = I_\nu(s_{0})\exp\left[-\int\limits_{s_{0}}^{s}\alpha_{\nu}(s')ds'\right] $$
# Optical Depth & Source Function
The transfer equation takes a simpler form when one works with __optical depth__ instead of $s$
$$d\tau_{\nu}=\alpha_{\nu}ds$$
When integrated along a typical path through a medium, it is said to be __opaque - optically thick__ when $\tau_{\nu}>1$ and __transparent - optically thin__ when $\tau_{\nu}<1$. These definitions serve to describe whether a typical photon is able or not to traverse a medium without being absorbed. Dividing $(1)$ by $\alpha_\nu$ leads to the new form of the transfer equation
$$\frac{dI_{\nu}}{d\tau_{\nu}}=-I_{\nu}+S_{\nu}\tag{2}$$
where $S_{\nu}=j_{\nu}/\alpha_{\nu}$ is called the __source function__ 