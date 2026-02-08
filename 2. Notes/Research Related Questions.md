---
degree: MSc
---

# ITO
- [x] ~~How much of the absorbed EM energy, is reemitted and lost as thermal radiation.~~ this is probably what the PL integrals try to answer.
- [ ] Why should spherical nano-particles be better candidates for the role of heating water up?
	- Could be the larger surface area?
	- Maybe larger resonance and better absorption due to geometrical reasons ([Mie Theory of Scattering](2.%20Notes/Mie%20Theory%20of%20Scattering.md)).
	- Smaller volumes -> smaller heat capacities faster heating times? -> higher risk of melting?

# Fresnel & Comsol

# Metal PL
- [x] in $I_{e}(\omega) = \int\limits_{0}^{\infty} f(\mathcal{E}+\hbar\omega) \big[ 1-f(\mathcal{E}) \big]  \, d\mathcal{E}$ why not use the density of states?
==We assumed a constant DOS thus far. For more accurate result a DOS term should be present in the integrand==

- [x] When using the [Boltzmann Equation](Boltzmann%20Equation.md) for the derivation of the non-equilibrium distribution only electron absorption is considered$$
\frac{ \partial f }{ \partial t }  =\left(  \frac{ \partial f }{ \partial t }  \right)_{\text{abs}} + \left(  \frac{ \partial f }{ \partial t }  \right)_{\text{e-e}} + \left(  \frac{ \partial f }{ \partial t }  \right)_{\text{e-ph}}
$$why not add a $\left(  \frac{ \partial f }{ \partial t }  \right)_{\text{emission}}$ term? 

==It is possible to add such term, but in metals its contribution is negligible and is therefore neglected.==

- [x] Relaxation time approximation (RTA). If we have several scattering processes - how to we apply the RTA?

$$\left(  \frac{ \partial f }{ \partial t }  \right)_{\text{e-e}} + \left(  \frac{ \partial f }{ \partial t }  \right)_{\text{e-ph}}\approx \frac{f^{\scriptsize T}-f}{\tau_{e-e} + \tau_{e-ph}}$$The addition of collision rates is known as **Matthiessen's rule**

- [ ] Incorporation of [interband transition](Interband%20Transitions%20Under%20CW%20Illumination.md) in emission currently comes as an addition in the Fermi golden rule with different transition dipole moments, but with the same non-equilibrium distribution$$\begin{align}\Gamma &= \underbrace{ \Gamma_{\scriptsize C,V}^{X} + \Gamma_{\scriptsize C,V}^{L} }_{ \text{inter} } + \underbrace{ \Gamma_{\scriptsize C,C}}_{ \text{intra} } \\  \\&\propto \sum\limits_{j= X, L} |\mathbf{\mu}_{\scriptsize CV}^{j}|^{2} \int f^{j}_{\scriptsize V}(\mathbf{k}+\mathbf{q})\Big[ 1 - f^{j}_{\scriptsize C}(\mathbf{k}) \Big] d\mathbf{k} \\&+ \quad \quad \  |\mathbf{\mu}_{\scriptsize CC}^{j}|^{2} \int f_{\scriptsize C}(\mathbf{k}+\mathbf{q})\Big[ 1 - f_{\scriptsize C}(\mathbf{k}) \Big] d\mathbf{k}\end{align}
$$Just as in previous question - why not include new terms for interband absorption and interband emission?$$
\scriptsize \frac{ \partial f }{ \partial t }  =\underbrace{ \left(  \frac{ \partial f }{ \partial t }  \right)_{\text{abs}} +\left(  \frac{ \partial f }{ \partial t }  \right)_{\text{emission}} }_{ \text{intra} } +\underbrace{ \left(  \frac{ \partial f }{ \partial t }  \right)_{\text{abs}} +\left(  \frac{ \partial f }{ \partial t }  \right)_{\text{emission}} }_{ \text{inter X} } + \underbrace{ \left(  \frac{ \partial f }{ \partial t }  \right)_{\text{abs}} +\left(  \frac{ \partial f }{ \partial t }  \right)_{\text{emission}} }_{ \text{inter L} }+\left(  \frac{ \partial f }{ \partial t }  \right)_{\text{e-e}} + \left(  \frac{ \partial f }{ \partial t }  \right)_{\text{e-ph}}$$==perhaps this is what we already do, and the transition rates calculated using FGR are the terms in the above?==

- [ ] We have values for $\mu_{\scriptsize CV}^{X}$ and $\mu_{\scriptsize CV}^{L}$ what is $\mu_{\scriptsize CC}$ ?
- [ ] On the one hand, FGR is used in the rate calculations of the different interactions in the QBE. On the other, we use FGR to compute the emission rate with the already calculated non-equilibrium distribution from the QBE. Isn't this somewhat circular?



# 15-09-2024 Meeting (OLD)
___
## Water absorption
- [ ] Should we try to model absorption spectrum of water for a more accurate simulation?
## ITO layer
- [ ] Why not calculate $\omega_{\scriptsize p}$ and $\gamma$ from basic principles?
- [ ] Given our constraints, why not calculate the parameters that give us the desired resonance, and then look for material with such parameters?
- [ ] Tradeoffs of increasing ITO width:
	- [ ] Skin depth - when the layer with is about 3-times the skin depth any additional thickness is redundant.
	- [ ] Higher SS temperature - higher PL emission
	- [ ] Higher SS temperature - different $\varepsilon(T)$

- [ ] **A reminder - why use ITO to being with?**
## Linus Mesh Convergence
- Two main things Linus does differently:
	-  Triangular mesh - defines it differently.
	-  Comparison of power rather than field coefficients.
		- Issue could still be with my field calculations

## Heating Module
- Are we taking the [TTM](Two%20Temperature%20Model.md) into account? 

 - How to calculate the gaussian absorbed field as a phenomenological source.
 
 - Do we base our thermal simulations on something? How do we self-check in order to find if the simulation makes sense, given that my knowledge of Comsol simulations is fairly limited?




