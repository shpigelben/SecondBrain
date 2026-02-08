#note #physics #statistical-mechanics #derivative 
#phase-transitions  

A pure substance coexist in different simultaneously. 

- We assume that two phases of a substance are at a certain pressure and temperature
- The two phases can be thought of as two subsystems in mutual thermodynamic equilibrium at the boundary.
- Each phase or subsystem has its own chemical potential (Gibbs potential)

We write the Gibbs potential of the composite system as follows
$$ G=g_{1}m_{1}+g_{2}m_{2} \tag{1}$$
Where $m_{i}$ is the mass of the phase and $g_{i}$ is the Gibbs potential per unit mass.
In equilibrium the [[Thermodynamic Potentials|Gibbs potential]] is at a minimum, therefore
$$0 \stackrel{!}{=} \delta G=g_{1}
\delta m_{1}+g_{2}
\delta m_{2} \tag{2}$$
With the constraint $\delta m_{1} = -\delta m_{2}$, the condition for phase coexistence is
$$(g_{2}-g_{1})\delta m=0 \quad \leadsto \quad \Delta g=0 \tag{3}$$
That means that the coexisting phases must have similar Gibbs per unit mass and therefore similar chemical potential
$$\begin{align*}
&\left(\frac{\partial (\Delta g)}{\partial T}\right)_{P} = -\Delta s\\
&\left(\frac{\partial (\Delta g)}{\partial P}\right)_{T} = \Delta v
\end{align*} \tag{4} $$
Which are specific entropy and specific volume respectively.

Since we're dealing with potential $\Delta g$, $\Delta s$ and $\Delta v$ that are all functions of $P$ and $T$ there must exist a relation $f( \Delta g, \Delta s, \Delta v)=0$ . We use the following rule

$$ \left(\frac{\partial (\Delta g)}{\partial T}\right)_{P}
\left(\frac{\partial T}{\partial P}\right)_{\Delta g}\left(\frac{\partial P}{\partial (\Delta g)}\right)_{T} = -1 \tag{5} $$
Plugging the relations in (4) into (5), and demanding constant $\Delta g = 0$ which was given as a condition for phase coexistence, and we arrive at the __Clausius - Clapeyron__ equation for phase coexistence which describes the __slope of coexistence__ on the PT diagram
$$\large\boxed{\left(\frac{\partial P}{\partial T}\right)_{\Delta g =0 }\equiv \frac{dP}{dT} = \frac{\Delta s}{\Delta v} = \frac{l}{T\Delta v}}$$
where $l=T\Delta s$ is the __latent heat__.

# Critical Point
The critical point (temperature) exists for liquid-gas phase transition on an isochor (it is a line in PVT). There is no phase transition for temperatures above $T_{c}$ therefore they are not really considered different phases (one can arrive from a liquid to a gas and vice versa, via a path in PT that does not include a phase transition). However, it does not exist for solid-liquid phase transition since unlike the liquid-gas phase transitions, it is an __order to disorder__ phase transition.

![[../9. Misc/attachments/Pasted image 20220405092502.png|center|400]]