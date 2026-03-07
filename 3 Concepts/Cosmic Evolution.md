---
type: concept
discipline:
  - physics
field:
  - astrophysics
  - relativity
---

Under the assumption of [[Homogeneity & Isotropy]] of the universe the [[FRW Metric]] is derived, and the treatment of the universe as a [fluid](../4%20Misc/MOCs/Fluid%20Mechanics%20MOC.md) is reasonable.

# Continuity Equation
The [Stress Energy Tensor](Stress%20Energy%20Tensor.md) of an ideal fluid is particularly simple and is given by
$$\small{T^{\mu}}_{\nu} = \begin{pmatrix}-\rho  & ~ & ~ & ~ \\ ~ & p & ~ & ~ \\ ~  & ~ & p  & ~  \\ ~ & ~ & ~ & p\end{pmatrix}$$
Considering the conservation of the energy density, a detailed calculation in [[Cosmic Evolution#^c160ee|A1]] yields the continuity equation
$$ \dot\rho + 3\frac{\dot a}{a}(\rho+p)=0 $$
Different types of pressures relate to corresponding types of densities (matter, radiation, vacuum) by an [[State Function|equation of state]] $p=w\rho$ so $({1})$ can be generally written as
$$\dot\rho + 3\rho \frac{\dot a}{a}(w+1)=0 \tag{1}$$
Where $w$ is a general constant that changed depending on the type of "substance" it describes (matter, radiation, dark energy, etc)

___
# Evolution of the Different Components
From the [Friedmann Equations](Friedmann%20Equations.md) we get a sense for what are the main "ingredients" that make up our universe and their relative abundance in it. It is natural then to consider how each of these evolves in an expanding universe. The continuity equation $(1)$ is separable. When solved, it gives an expression for the evolution each density
$$\large\rho(t)= \rho_{0} \cdot \left[\frac{{a}{\small(t)}}{a\small(0)}\right]^{\small-3(w+1)}\tag{2}$$
The universe is isolated and its expansion is an [[Thermodynamic Processes|adiabatic]] process which according to the [[First Law of Thermodynamics|first law]] gives
$$dU = -PdV$$
It can be shown that $w = \Gamma -1$ where $\Gamma$ is the __adiabatic index__

| type        |                 s-equation                 |      $w$      |   $\Gamma$    |             $\propto a$             |
|:----------- |:------------------------------------------:|:-------------:|:-------------:|:-----------------------------------:|
| radiation   |        $p_{r}=\frac{1}{3}\rho_{r}$         | $\frac{1}{3}$ | $\frac{4}{3}$ |      $\rho_{r}\propto a^{-4}$       |
| matter      |              $p_{m}\approx0$               |      $0$      |       1       |      $\rho_{m}\propto a^{-3}$       |
| dark energy | $p_{\small \Lambda}= -\rho_{\small \Lambda}$ |     $-1$      |      $0$      | $\rho_{\small \Lambda}\propto a^{0}$ |


Plugging the different density evolutions in equation $(1)$ into the [first Friedmann equations](Friedmann%20Equations.md) results in a first order (generally nonlinear) ODE as follows
$$\large\dot{a}\propto a^{- \frac{3w+1}{2}}$$
 which can be solved exactly for each component of the universe separately for the different $w$ values
 
| dominated universe | expansion rate                     |
| :----------------: | ---------------------------------- |
|     radiation      | $a_{r}\propto t^\frac{1}{2}$       |
|       matter       | $a_{m}\propto t^\frac{2}{3}$       |
|    dark energy     | $a_{\small \Lambda}\propto e^{Ht}$ |

# Appendix

> [!NOTE]-  A1 - Continuity Equation - Derivation
> [[Christoffel Symbols]]
> We use the fact that its [[Covariant Derivative|covariant divergence]] of time-like components of the energy-momentum tensor vanishes. This is called the __continuity equation__$$\begin{align*}0=\text{div}({T^\mu}_\nu)&=\nabla_{\mu}{T^{\mu}}_{0}\\&=\partial_{\mu}{T^{\mu}}_{0} + {\Gamma^{\mu}}_{\mu\nu}{T^{\nu}}_{0} - {\Gamma^{\mu}}_{\mu 0}{T^{\mu}}_{\nu}\\&=\partial_{0}{T^{0}}_{0} + {\Gamma^{\mu}}_{\mu 0}{T^{0}}_{0} - {\Gamma^{\mu}}_{\mu 0}{T^{\mu}}_{\nu}\\& = \partial_{0}{T^{0}}_{0} + {\Gamma^{j}}_{j 0}{T^{0}}_{0} - {\Gamma^{j}}_{j 0}{T^{j}}_{j}\\& = -\dot\rho - 3\left(\frac{\dot a}{a}\right)\rho  - 3\left(\frac{\dot a}{a}\right)p\end{align*}$$
> which simplifies neatly into the final form of the continuity equation for the FRW metric of a homogenous, isotropic perfect fluid of a universe
$$ \dot\rho + 3\frac{\dot a}{a}(\rho+P)=0$$


> [!NOTE]- A2 - Adiabatic Index
> Contents
