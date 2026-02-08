#note #physics #electrodynamics #concept

Poynting theorem is a statement of conservation of energy for electromagnetic fields.

$$
\oint\limits_{\mathcal S}\mathbf{S} \cdot d\boldsymbol{\mathcal{S}} = -\int\limits_{\mathcal{V}}\sigma |E|^{2} - \frac{ \partial u }{ \partial t } 
$$
$$
\nabla \cdot \mathbf{S} = -\mathbf{J} \cdot \mathbf{E} - \frac{ \partial u }{ \partial t } 
$$

# Derivation
For a single charge $q$ the rate of work done by external $\mathbf{ E}$ and $\mathbf{ B}$ is $q\mathbf{v}\cdot \mathbf{E}$
$$P = \mathbf{v} \cdot \mathbf{ F} =\mathbf{ v} \cdot \left( q\mathbf{E}+ \frac{q}{c}\mathbf{v}\times \mathbf{B} \right)=q\mathbf{v}\cdot \mathbf{E}$$
and for a continuous charge distribution in space
$$P = \int\limits_{V} \mathbf{J}\cdot \mathbf{ E} \, dV$$
This represent the rate of energy loss to mechanical and thermal energy. We wish to account for the loss in the EM field in the volume $V$ and so we eliminate $\mathbf{J}$ using [[Ampere's law]]
$$P = 
\int\limits_{V}dV\left( \nabla \times \mathbf{H} - \frac{ \partial \mathbf{D} }{ \partial t }  \right)\cdot \mathbf{E} \tag{1}$$
by using the following vector identity together with [[Faraday's Law]] gives
$$\begin{align*}
\nabla \cdot(\mathbf{E}\times \mathbf{H}) &= \mathbf{H}\cdot(\nabla \times \mathbf{E})-\mathbf{E}\cdot(\nabla \times \mathbf{H})\\
&= -\mathbf{H}\cdot\frac{ \partial \mathbf{B} }{ \partial t } -\mathbf{E}\cdot(\nabla \times \mathbf{H})
\end{align*}$$
which we plug back into (1) to get
$$\begin{align*}
P &= -\int\limits_{V} dV\left[ \nabla \cdot(\mathbf{E}\times \mathbf{H})+ \frac{ \partial }{ \partial t }\Big(\mathbf{E \cdot D } + \mathbf{H \cdot B}\Big)  \right]\\
&= -\int\limits_{V} dV\left[ \nabla \cdot \mathbf{S}+ \frac{ \partial u}{ \partial t }\right]
\end{align*}$$
Identifying the mechanical energy and the field energy as the total energy, we can write the above in following form
$$P = \frac{dE}{dt} = \frac{d}{dt}\Big(E_{\text{mech}}+E_{\text{field}}\Big)=-\oint\limits_{\partial V}\mathbf{S}\cdot \mathbf{n} \ dA$$
the change in total energy in a volume equals minus the Poynting vector flux through the surface of the volume  boundary.

# In Dispersive Media

$$
P_{abs} = \omega_{0} \ \varepsilon''(\omega_{0}) |E|^{2}
$$

> [!NOTE]- Units
> $$
\begin{align}
[E] &= \frac{V}{m}  \\
[\varepsilon''] &= \frac{F}{m} = \frac{C}{mV}  \\
[V] &= \frac{J}{C}
\end{align}$$
$$[P_{abs}] = \left( \frac{1}{s} \right)\left( \frac{C}{mV} \right)\left( \frac{V}{m} \right)^{2} = \frac{CV}{s \cdot m^{3}} = \frac{J}{s\cdot m^{3}} = \frac{W}{m^{3}}$$

This is the amount of EM energy absorbed at any time in any volume of the material.
# Absorption of a Gaussian Beam
$$
\begin{align}
Q_{\scriptsize abs} = \int \int\limits P_{\scriptsize abs}\, dV \ dt &=\omega\varepsilon'' \int\limits_{t_{0}}^{{t_{1}}}  \int\limits_{0}^{R} \int\limits_{0}^{d} |E^{2}(r,z)| r \ dr \ dz \ dt  \\
&= \Delta t \cdot\omega\varepsilon'' \int\limits_{0}^{R} |E_{\scriptsize 0}(r)^{2}| \  r \ dr \int\limits_{0}^{d} e^{-\alpha z}  \ dz
\end{align}
$$
