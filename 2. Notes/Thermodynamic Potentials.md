#note #physics #statistical-mechanics #concept| #incomplete 

All thermodynamic potentials can be arrived at by [[Legendre Transform]]s from one potential to the other, where the internal energy, given by the [[First Law of Thermodynamics|first law]], is taken as reference base.

Thermodynamic potentials are [[State Function|state functions]] and as such, their value depends only on state the system is in and not on the path the system has taken to get that said state
# Internal Energy

$$ dU(S,V,N) = TdS-PdV+\mu dN $$
[[Internal Energy]] is convex in with respect to all of its natural (extensive) parameters
$$ \frac{\partial^{2} U}{\partial S^{2}} > 0  \quad \quad 
\frac{\partial^{2} U}{\partial V^{2}} > 0  \quad \quad
\frac{\partial^{2} U}{\partial N^{2}} > 0 
$$
This can be calculated by the second derivative test which consists of taking the determinant of the [[Hessian Matrix]]. For a fully convex function like the internal energy it should hold that
$$\det{(H_{\small U})}<0$$
# Enthalpy
The __enthalpy__ is a Legendre transform from the internal energy 
$$H(S,P,N) \longmapsto U - XY$$
$$ dH(S,P,N) = TdS-VdP+\mu dN $$
Enthalpy is convex w.r.t $S,N$ but concave w.r.t $P$
$$ \frac{\partial^{2} H}{\partial S^{2}} > 0  \quad \quad 
\frac{\partial^{2} H}{\partial P^{2}} < 0  \quad \quad
\frac{\partial^{2} H}{\partial N^{2}} > 0 
$$
# Free Energy
The free energy can be thought of as a Legendre transform of the internal energy
$$F(T,X,N) \longmapsto U - TS$$
$$ dF(T,V,N) = -SdT - PdV + \mu dN $$
Free energy is useful since temperature is a much easier thermodynamic parameter to measure as opposed to entropy.
Free energy in convex w.r.t $V,N$ but concave w.r.t $T$
$$ \frac{\partial^{2} F}{\partial T^{2}} < 0  \quad \quad 
\frac{\partial^{2} F}{\partial V^{2}} > 0  \quad \quad
\frac{\partial^{2} F}{\partial N^{2}} > 0 
$$

# Gibbs Potential
The __Gibbs potential__ can be thought of as two Legendre transforms from the internal energy, or one transform from enthalpy or the free energy
$$G(T,P,N) \longmapsto U - TS - XY$$
$$ dG(T,P,N) = -SdT - VdP + \mu dN$$
Gibbs potential is convex only w.r.t $N$ and concave w.r.t $T,P$
$$ \frac{\partial^{2} G}{\partial T^{2}} < 0  \quad \quad 
\frac{\partial^{2} G}{\partial P^{2}} < 0  \quad \quad
\frac{\partial^{2} G}{\partial N^{2}} > 0
$$
$$g = \frac{G}{m} = -\frac{S}{m}dT + \frac{V}{m}dP\equiv-sdT-vdP$$
# Grand Potential

The __grand potential__ can be $U(S,X,N) \longmapsto G(T,X,\mu)$

$$ \boxed{\begin{align*} \\ \quad
&\Omega = U - TS - \mu_{i}dN^{i} = XY \quad \\ \\
&\Omega = F - \mu_{i}dN^{i} \\\
\end{align*}} $$
# Minimum Energy

From the first and second laws of thermodynamics

$$ dU = \delta Q + \mu dN + PdV + \delta W_{other} \tag{1}$$

$$ \delta Q \leq TdS \tag{2}$$

From these two we get the minimization for all thermodynamic potentials (with constant particles $d\mu=0$)

$$\begin{align*}
&dU - TdS - PdV \leq \delta W_{other}\\
&dH - TdS + VdP \leq \delta W_{other}\\
&dF + SdT - PdV \leq \delta W_{other}\\
&dG +SdT + VdP \leq \delta W_{other}
\end{align*}$$



