---
type: concept
discipline:
  - physics
field:
  - thermodynamics-statistical-mechanics
---

Heat capacity is defined as the amount of heat required to add to a system in order to change its [[Temperature]]
$$ C = \frac{\delta Q}{dT} $$
Alternatively, one can say that the change in temperature is proportional to the amount of heat added to the system along a certain path (constant volume of pressure), with the proportionality constant being the corresponding heat capacity
$$\delta Q_{P,V} = C_{P,V} dT$$
The heat capacity depends upon __how__ we add heat to the system, in other words it is __path dependent__. Usually one deals with PVT systems, so heat capacity can take one of two forms
$$\begin{align*}
&\text{heat capacity in constant volume}  &C_{\small V} = \left(\frac{\delta Q}{dT}\right)_{\small V} \tag{1} \\
& \text{heat capacity in constant pressure}  &C_{\small P} = \left(\frac{\delta Q}{dT}\right)_{\small P} \tag{2} 
\end{align*}$$
We can get a more explicit expression for the different heat capacities by plugging the [[First Law of Thermodynamics]] into the $\delta Q$ portion
$$ \begin{align*}&C_{\small V} = \left( \frac{dU + P\cancelto{}{dV}}{dT} \right)_{\small V} = \left(\frac{\partial U}{\partial T}\right)_{\small V} = {\overbrace{\left(\frac{\partial U}{\partial S}\right)}^{T}}_{\small V} \left(\frac{\partial S}{\partial T}\right)_{\small V} \\ \\&C_{\small P} = \left( \frac{dU + PdV}{dT} \right)_{\small P} = \left(\frac{\partial U}{\partial T}\right)_{\small P} + P\left(\frac{\partial V}{\partial T}\right)_{\small P}\end{align*}  $$

___
# Heat Capacity in Gasses

For an [[Classical Ideal Gas|ideal gas]], plug $U=C_{v}T$ and the equation of state $V=NT/P$ and get the known identity $C_{P} = C_{V}+N$


# Heat Capacity in Solids
The order of development of heat capacity theory:
1. [[Boltzmann Solid]] - was proposed by Boltzmann who is the "father" of statistical mechanics. It treats the solid as composed of $N$ classical harmonic oscillators and makes use of the [[Equipartition Theorem|equipartition theorem]] to successfully reproduce the law of Dulong and Petit, in high (room) temperatures but fails in low temperatures and in close to zero temperature.
2. [[Einstein Solid]] - Einstein attempted to solve the Boltzmann solid problem at lower temperature by treating the atoms of the solid as $N$ non-interacting quantum harmonic oscillators. It reproduces the law of Dulong & Petit in room temperatures and gives a better prediction for lower temperatures, but fails at very low, near zero, temperatures where it predicts an exponential drop where in practice the drop in heat capacity is cubic
3. [[Debye Solid]] - Debye's idea was that atom oscillations in the solid are not independent, and that they create sound waves ([[Phonons|phonons]]) which contribute to the heat capacity of the solid. It still suffers from inaccuracies at intermediate temperatures due to simplifying assumptions

|          | Boltzmann Solid                       | Einstein Solid              | Debye Solid                             |
| -------- | ------------------------------------- | --------------------------- | --------------------------------------- |
| Idea     | non-interacting classical oscillators | non-interacting QHOs        | interacting QHO                         |
| Solution | Law of DP                             | Heat Capacity at lower Temp | Heat capacity near zero                 |
| Problem  | heat capacity at lower temperatures   | Heat capacity near zero     | Inaccurate at intermediate temperatures | 


# Adiabatic Index
