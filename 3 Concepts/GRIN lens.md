---
type: concept
discipline:
  - physics
field:
  - optics
---

$$
n(\rho) = n_{0}\left[ 1-\Delta\left( \frac{\rho}{a} \right)^{m} \right]
$$
$$
\nabla n =  \frac{ \partial n }{ \partial \rho } \hat{\mathbf{\rho}} = -mn_{0} \Delta\left( \frac{\rho}{a} \right)^{m-1}
$$

with the [Eikonal Equation](Eikonal%20Equation.md) (approximating $s\approx z$) we get

$$
\nabla n = \frac{ \partial  }{ \partial s } \left[ n\frac{ \partial \mathbf{r} }{ \partial s }  \right] \approx \frac{ \partial  }{ \partial z } \left[ n\frac{ \partial \mathbf{r} }{ \partial z }  \right] = \frac{ \partial  }{ \partial z } \left[ n\left( \frac{ \partial \rho }{ \partial z }\hat{\boldsymbol{\rho}} + \hat{\mathbf{z}}  \right) \right]
$$
$$
\hat{\boldsymbol{\rho}}: \quad\frac{ \partial n }{ \partial \rho } =-mn_{0}\Delta\left( \frac{\rho}{a} \right)^{m-1}=\frac{ \partial^{2} \rho }{ \partial z^{2}}
$$