#note #physics #statistical-mechanics #concept 

A Carnot engine, is any [[Heat Engines]] whose process : 
1. is [[Thermodynamic Processes#Reversible Process|reversible]]
2. is cyclic
3. Operates between two specified temperatures $T_{\small H}$ and $T_{\small C}$

![[../9. Misc/attachments/Carnot Engine.png|center]]

___
### Carnot Cycle
The Carnot cycle comprises of four [[Thermodynamic Processes]] - two isotherms and two adiabats 

1. Isothermal expansion
2. Adiabatic expansion (moving to lower temperature)
3. Isothermal contraction
4. Adiabatic contraction (moving back to the initial temperature)

![[../9. Misc/attachments/Carnot Cycle.png|center|400]]
___
##### Two insights for the Carnot engine

1. Of all engines operating between temperatures $T_{\small H}$ and $T_{\small C}$ , the Carnot engine is the most efficient.
2. All Carnot engines that operate between $T_{\small H}$ and $T_{\small C}$ are the same.

The implication of the second insight is that the efficiency that describes the Carnot engine is a function of the two temperatures only and is independent on how or what the engine is made of
$$\large \eta_{c} = \eta(T_{\small H},T_{\small C}) = 1- \frac{T_{\small C}}{T_{\small \mathcal{H}}}$$

The implication of the second statement is that any engine that works between the same two temperatures and _isn't_ a Carnot engine will have lesser efficiency
$$ \eta_{\small E} \lt \eta_\mathcal{\small C} $$
$$ \frac{W}{Q_{\small H}} = 1- \frac{Q_{\small C}}{Q_{\small H}} \leq 1 - \frac{T_{\small C}}{T_{\small H}} $$
Where equality holds only for Carnot engine. Rearranging this give us
$$ \frac{Q_{\small H}}{T_{\small H}} - \frac{Q_{\small C}}{T_{\small C}} \leq 0 $$

