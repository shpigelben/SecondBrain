

#TD1 #thermodynamics #processes #cycles
#quasistatic 
___
The [[Classical Ideal Gas#State Equation for Ideal Gas f P V T| ideal classical gas]] in thermodynamic equilibrium is described by the ideal gas [[State Function | equation of state]] 

$$ PV = NT \quad \rightarrow \quad f(P,V,T) = PV-NT = 0  \tag{1}$$
The ideal gas in equilibrium is defined by P, V and T. therefore it is possible to geometrically represent the manifold spanned by [[#^0ba08a| (1)]] in the P, V, T [[State Space | state space]]. All equilibrium states must lay on that manifold.
___

## Isobaric Process (Constant P)

leaving the pressure constant gives us a relation between V and T
$$ V(P) = \left (\frac{N}{P} \right) T$$
Assuming during the process the volume changes from $V_1$ to $V_2$, and the temperature correspondingly changes from $T_1$ to $T_2$. The work done on the system during that process is 

$$ W = - P\Delta V = - N\Delta T $$

using [[Classical Ideal Gas#^7efe18 | This relation]] for U and T we get 

$$ \Delta U = \frac{3}{2}P \Delta V = \frac{3}{2}N \Delta T $$

Heat added during this process can be calculated from the 1st law
$$ \Delta U = Q+W \quad \rightarrow \quad Q = \Delta U - W = \frac{5}{2} P \Delta V = \frac{5}{2}N \Delta T  $$

___
## Isochoric Process (Constant V)
leaving the volume constant gives us a relation between P and T

$$ P(T) = \left(\frac{N}{V}\right)T $$

Since the volume is constant, no work is being done n or by the system, and $W = 0$, so 

$$ Q = \Delta U = \frac{3}{2}N\Delta T = \frac{3}{2}V\Delta P  $$
___
## Isothermal Process (Constant T)
leaving the temperature constant gives us a relation between P and V

$$ P(V) = (NT)\frac{1}{V} $$

The work done on the system is

$$W = - \int_{V_1}^{V^2}P(V)dV = -NT \int_{V_1}^{V^2}\frac{dV}{V} = -NT\ln{\frac{V_2}{V_1}} $$

since $\Delta U = \frac{3}{2}N\Delta T$ and since $\Delta T = 0$ we get that $\Delta U =0$ and so according to the 1st law we have

$$ Q = -W = NT\ln{\frac{V_2}{V_1}} $$
___
## Adiabatic Process (Q = 0)

In adiabatic processes there is no heat exchange between the system and the environment

$$ W = -P\Delta V = \Delta U = \frac{3}{2}N\Delta T = \frac{3}{2}P\Delta V $$
