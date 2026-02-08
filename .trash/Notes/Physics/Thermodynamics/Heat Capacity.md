#thermodynamics #coefficient

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


___
# Heat Capacity in Solids

# Adiabatic Index
