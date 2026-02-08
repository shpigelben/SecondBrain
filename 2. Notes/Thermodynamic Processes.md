#note #physics #thermodynamics #concept 

A state of thermodynamics equilibrium endures without change, unless interrupted by a thermodynamic operation (heating, performing work etc...). When subjected to such interaction the system will respond by shifting from one [[Thermodynamic State|state]] to another

In general, a process can path through physical states that are not in internal thermodynamic equilibrium and therefore are not describable as thermodynamic states.

- __Outline__
	1.  [[Thermodynamic Processes#Types Of Processes|Types of Processes]]
		1. [[Thermodynamic Processes#Quasistatic Processes|Quasistatic Processes]]
		2. [[Thermodynamic Processes#Reversible Process|Reversible Process]]
		3. [[Thermodynamic Processes#Spontaneous Process|Spontaneous Process]]
	2. [[Thermodynamic Processes#General Processes|General Processes]]
	3. [[Thermodynamic Processes#Cycles|Cycles]]


# General Processes


## Quasistatic Processes
Quasistatic processes are thermodynamic processes during which the system remains in internal thermodynamic equilibrium. As long as the system is in [[Thermodynamic Equilibrium]] it's temperature is defined, and it can be described by the state function - [[Entropy]]
$$ \begin{align*}
dS &= \left(\frac{\partial S}{\partial U}\right)_{\small{N,X}}dU +
\left(\frac{\partial S}{\partial X}\right)_{\small{U,N}}dX + 
\left(\frac{\partial S}{\partial N}\right)_{\small{X,U}}dN\\ \\
&= \frac{1}{T}dU - \frac{Y}{T}dX - \frac{\mu}{T}dN
\end{align*}
$$
$T$ is the system's temperature, $Y$ is the generalized force and $\mu$ is the chemical potential, these are all [[Intensive & Extensive Properties|intensive quantities]]. _A quasistatic process is not necessarily reversible ! If the entropy of a composite system increases the process is not reversible_

## Reversible Process
Contrary to the last statement in the last section, the opposite is not true. _Reversible processes are necessarily quasistatic !_ Geometrically, reversible paths do not leave the equilibrium manifold determined by [[State Function]].

## Spontaneous Process
- A spontaneous process occurs without outside intervention - no work from the outside, and no heat or particle transfer 
- It is a process that takes the system from one equilibrium state to another equilibrium state
- A spontaneous process in an isolated system is irreversible and thus increases the entropy of the system
- As a consequence, if in a system a spontaneous process exists, it has an available equilibrium state of higher entropy 
- If a spontaneous process exists it will take place
- _In internal equilibrium, an isolated system has maximum entropy_

![[../9. Misc/attachments/TD PROCESSES.png]]


$$\boxed{\begin{align*} \\\quad
Quasistatic &\Leftarrow Revesible \\
Spontaneus &\Rightarrow Irreversible \quad \\\\
\end{align*}}$$

# Specific Processes

## Adiabat
## Isotherm

## Isobar
## Isochor
## Isentropic

# Ideal Classical Gas
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
