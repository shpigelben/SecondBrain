#phase-transitions #thermodynamics 

Van der Waal's genius in his [[Van der Waals Equation of State|equation of state]] was to show that two phases are in fact the same matter since they live on the same curves in phase space, but it fails to predict the [[Coexistence of Phases in Pure Substances|coexistence region]] of phases. __The liquid-gas phase transition is a first order transition__ since during the transition it exhibits a (slight) discontinuity in the volume which is first order derivative of the Helmholtz free energy

![[Pasted image 20220405084137.png]]

# Isotherms & the Spinodal
For a temperatures below the critical threshold $T_{c}$ which is represented by the middle curve with the inflection point there appears to be a region (according to the VW equation of state) that is physically incompatible
![[VW spinodal.png|400]]
If we look at the part D-F in the lower curve, were the slope is __positive__, we have
$$ \kappa_{\small T} \equiv -\frac{1}{V}\left(\frac{dP}{dV}\right)_{T<T_{c}} < 0$$
 It follows from the stability of thermodynamics potential that the compressibility $\kappa_{\small T}$ is positive.  A negative compressibility means that increasing the pressure increases the volume and vice versa. The line that connects all points of extremum in PVT space is called __the spinodal line__.

The projection of the spinodal line can be acquired by the following procedure
- Looking for temperatures that satisfy $\left(\frac{\partial P}{\partial V}\right)_{T} = 0$ where $P(V)$ is the VW equation of state. This provides the relation between the temperature and the volume $T\to T(V)$
- plugging this relation back into the VW equation gives a relation $P(V)$ which is the projection of the spinodal on the PV plane

> [!NOTE]- DESMOS
> <iframe src="https://www.desmos.com/calculator/uiw1hsks6e?embed" width="500" height="500" style="border: 1px solid #ccc" frameborder=0></iframe>
> The Shaded region is the region of positive slope, or negative compressibility, it is therefore the non physical region. It is considered to be the region of coexistence since the VW model does not address phase transitions and falsely assumes a uniform system, and assumption that fails exactly at the region of coexistence 
> 

The region below the spinodal is the region of phase coexistence of liquid and gas

# Maxwell (Equal Areas) Construction
The failure of the VW equation in the region of coexistence is not surprising. In the derivation of the VW equation we assumed a uniform system $\rho=\frac{N}{V}$ while in practice, during a phase transition the system can coexist in two phases and is therefore inherently non-uniform.

Maxwell attempted to correct this fault by drawing a horizontal line C-G, which means that the transition occurs at a certain temperature and pressure as we well know from [[Coexistence of Phases in Pure Substances|Clausius-Clapeyron]], but at what pressure ?

Note that the isothermal closed path C-G-F-E-D does not exchange heat with the environment $$Q = T\oint dS=0$$$S$ is a function of state, therefore does not depend on the path and the closed integral is identically zero, the sate holds for the internal energy as a function of state, thus from the [[First Law of Thermodynamics|first law]] we have
$$0=\oint dU = T\oint ds + \oint PdV$$
Physically, that means that the work done by the system is zero. Graphically, that means that the area enclosed by path also equals to zero
$$\oint PdV=P_{s}(V_{G}-V_{C})+\int\limits_{G}^{C}P(V)dV=0$$
$P_{s}$ here is the constant __saturated vapor pressure__ which can be solved by integrating over the VW pressure
$$P_{s}=\frac{1}{V_{G}-V_{C}} \left[nRT\ln\left( \frac{{V_{C}-bn}}{V_{G}-bn}\right)+an^{2}\left(\frac{1}{{V_{C}}^{2}}-\frac{1}{{V_{G}}^{2}}\right)\right] \tag{\small \#}$$
The volumes $V_{G}$ and $V_{C}$ are the solutions to the equation
$$P_{s}=P_{\small VW}(V)$$
which can be plugged back as $V_{\small GC}(P_{s},T)$ into (#) to produce an implicit function $P_{s}=(P_{s},T)$ this can be numerically solved to give $P_{s}(T)$ through the VW equation we can get $P_{s}(V)$ which is called __the binodal line__!

> [!NOTE]- BINODAL GRAPHS
> In a P-V diagram
> ![[Binodal line.png]]
> IN a T-C (concentration) diagram
> ![[binodal T-C.webp]]

The binodal line encloses a larger area and it contains the area determined by the spinodal. It allows for a metastable region of coexistence and it portrays a better picture of reality. The correction of Maxwell's might have been ad-hoc, but it was physically motivated and produced more accurate results.

# Surface Effects & Metastable Equilibrium
To examine the meta stable region which lie between the binodal and the spinodal we must consider surface effects in finite systems. [[Surface Tension|Surface tension]] is the force that minimizes surface area, its associated work is given by
$$dW = \gamma dA$$ where $\gamma$ is the surface __tension coefficient__ (units of $N/m$). The pressure induced due to surface tension (a rubber balloon that works to minimizes its surface area creates an interior pressure larger than the one outside). The total work where pressure is involved it given by __Laplace pressure__
$$\begin{align*}
dW &= (P_{out}-P_{in})dV + \gamma dA \\
&= (P_{out}-P_{in})4\pi R^{2} + \gamma 8\pi R
\end{align*}$$
When considering a spherical object. Mechanical equilibrium gives
$$\begin{align*}
0 \stackrel{!}{=} \frac{dW}{dR} &= 8\pi (P_{out}-P_{in})R + 8\pi \gamma\\
& P_{in}-P_{out} = \frac{2\gamma}{R}
\end{align*}$$
__Laplace formula__ is a more generalized version that allows for shapes with curvature and allows for a smaller pressure inside than outside (when the overall curvature is negative)
$$P_{in}-P_{out}=2\gamma\left(\frac{1}{R_{1}} + \frac{1}{R_{2}}\right)$$
# Nucleation & Super(heating)cooling
When we cool a gas for example a droplet of liquid might appear inside he gas. Such an droplet is considered a __nucleation site__, and it is interesting to consider under what conditions such droplet will spontaneously evaporate and when will it drive a phase transition towards the liquid phase. We recall that coexistence of phases requires equal chemical potentials
$$dG = (\mu_{g}-\mu_{l})dN=0$$
This requirement, however, ignores surface effects of nucleation sites. If there is a preference for the liquid state, that means that $\mu_{l}>\mu_{g}$ and for the transition to occur, namely for the droplet to increase in size, the Gibbs potential which is now negative must do work against the work of the surface tension. In that case the Gibbs potential should be
$$\begin{align*}
dG(T,P,N,A) &= -SdT + VdP + \gamma dA \\
&= \ \ \ \mu dN +\gamma dA\\
&=-\Delta\mu (n_{l} 4\pi R^{2}dR) + 8\pi\gamma RdR \stackrel{!}{=} 0
\end{align*}$$
 which should still be zero since we demand equilibrium. This gives the critical radius of a drop (again we assumed spherical symmetry)
$$R_{c}=\frac{2\gamma}{\Delta\mu n_{l}}$$
We want to check the stability of this equilibrium wrt to the radius of the droplet, and indeed by taking the second derivative of the Gibbs potential we find that is it unstable
$$\frac{d^{2}G}{dR^{2}}\Bigg|_{R_{c}} = -8\pi\gamma<0 $$
This means that for $R<R_{c}$ the droplet will tend to evaporate, while for the other case a phase transition will occur. Had the substance had no surface tension, namely $\gamma=0$ that would give $R_{c}=0$ which corresponds to a phase transition taking place for a droplet of any size

___
## Critical Exponents of the Liquid-Gas Transition
For the [[Liquid-Gas Phase Transition]] we are also going to use the equation of corresponding states
