---
type: concept
discipline:
  - physics
field:
  - thermodynamics-statistical-mechanics
---

The natural variables of internal energy are all the extensive thermodynamic parameters 
$$U\to U(S,V,N)$$
The internal energy is therefore an __extensive__ function in it's extensive parameters. Or a Homogeneous function of order one (for the mathematically inclined)
$$U(\lambda S,\lambda V,\lambda N) = \lambda U(S,V,N)$$
Using the result of [[Intensive & Extensive Properties#First Derivative of a Homogeneous Function|the first derivative of a homogenous function]] we can write the internal energy as
$$U(S,V,N)= \left(\frac{\partial U}{\partial S}\right) S +
\left(\frac{\partial U}{\partial V}\right) V +
\left(\frac{\partial U}{\partial N}\right) N
$$
while the partial derivatives can also be recognized from the first law. And so the nondifferential form of the internal energy can be finally written as
$$U = TS - PV + \mu N \tag{1}$$

___
# Gibbs-Duhem Relation
Taking the total differential of $(1)$
$$dU = SdT + TdS + VdP + PdV + \mu dN + Nd\mu $$
which doesn't fit well with the definition or the first law. For the two equations to agree, one has to take the differential elements of the "unnatural" variables and demand that their sum vanishes
$$ SdT + XdY + Nd\mu = 0 \tag{2} $$
Equation $(2)$ is known as the Gibbs-Duhem relation and can also be obtained from the Legendre transform to Gibbs potential. For this relation we can extract the differential form of the [[Chemical Potential]]
$$ d\mu(T,P) = -\frac{V}{N}dP - \frac{S}{N}dT$$
This term can be used to show the nondifferential form of the [[Gibbs Potential]]
___
### Isolated System

If we divide the work described in the [[First Law of Thermodynamics]] into a part $YdX$ which is quasistatic reversible work and a part $\delta W_{other}$ which generally an irreversible part we have
$$ dU = \delta Q + YdX +\delta W_{other} + \mu dN $$
taking into account the [[Second Law of Thermodynamics]] which gives $\delta Q \leq TdS$, we can write the above as 
$$ dU - YdX - TdS - \mu dN \leq \delta W_{other}  \tag{3}$$
For an isolated system with no quasistatic work, no heat exchange and a constant number of particles we have
$$dU \leq \delta W_{other}$$
