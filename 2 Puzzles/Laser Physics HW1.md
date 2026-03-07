---
type: puzzle
discipline:
  - physics
field:
  - laser-physics
---

> [!NOTE] Question 1
> In thermal equilibrium, calculate the temperature required to gain a ratio of $10^{-5}$ between the lower lasing state and the ground state for Nd:YAG $$\Delta E \propto 2111 \ \left[ \frac{1}{\text{cm}} \right] = 2111\times 10^{-7} \ \left[ \frac{1}{\text{nm}} \right] $$

In thermodynamics equilibrium, the occupation can be calculated using the canonical ensemble. The occupation ratio between the states is therefore 
$$
\begin{align}
N_{1} =e^{-\beta E_{1}} /Z \\ N_{2} = e^{-\beta E_{2}}  /Z
\end{align} \quad\Rightarrow \quad\frac{N_{2}}{N_{1}} =e^{-\beta\Delta E}
$$
Taking the $\ln$ of both sides and rearranging we get that

$$
T = -\frac{\Delta E}{k_{\small\text{B}}\cdot \ln\left( \frac{N_{2}}{N_{1}} \right)}
$$
To get $\Delta E$ in terms of energy we must multiply by $hc$

$$
\Delta E = \frac{hc}{\lambda}= \left( 2111\times 10^{-7} \left[ \text{nm}^{-1} \right]  \right)(1240 \  [\text{eV}\cdot \text{nm}]) = 0.26 \ [\text{eV}]
$$
with $k_{\small \text{B}}T\approx 8.617 \ [\text{eV}/K]$ we get that the temperature required to reach the required thermal ratio is as follows
$$
\boxed{T \approx \frac{3000}{5\ln 10}\approx 260 \ [K] \approx -13 \ [C]}
$$


> [!NOTE] Question 2
> a. Show that in a two level system $\frac{N_{2}}{g_{2}}\leq \frac{N_{1}}{g_{1}}$
> b. Show how spontaneous emission effect the maximal possible occupation of the upper level.

**a.** The rate equation for a two level system, including all 3 fundamental radiative processes is given as follows
$$
\frac{dN_{2}}{dt}=-AN_{2}+B_{12}N_{1}-B_{21}N_{2}
$$
Where $A$ is the [spontaneous emission coefficient](../3%20Concepts/Einstein%20Coefficients.md) and $B\to B\rho(u)$ since we omit $\rho$ for brevity. Since the system is closed the total number of available states remains constant
$$
N_{1}+N_{2}=N
$$
This allows us to decouple the rate equation as formerly presented and leaves us with a regular differential equation

$$
\frac{dN_{2}}{dt}= B_{12}N - (A+B_{12}+B_{21}) N_{2}
$$

Let us divide by $N$ to arrive at an equation for the ratio $r_{2}(t)$ of excited atoms to total population

$$
\frac{dr_{2}}{dt}= B_{12} - (A+B_{12}+B_{21}) r_{2}
$$

Since we can obviously set the initial ratio to be whatever we want we care about only non-transient behaviors. We therefore look for the stationary ratio $r_{2}^{*}$ gained by setting $\dot{r}_{2}=0$.

$$
r_{2}^{*} = \frac{1}{1+\frac{A}{B_{12}}+\frac{B_{21}}{B_{12}}}
$$
in the special case of thermal equilibrium of the atoms with blackbody radiation we have $g_{1}B_{12}=g_{2}B_{21}$.
$$
r_{2}^{*} = \frac{N_{2}^{*}}{N_{1}+N_{2}} =  \frac{1}{1+\frac{A}{B_{12}}+\frac{g_{1}}{g_{2}}}\leq \frac{1}{1+\frac{g_{1}}{g_{2}}}
$$
where $N_{2}^{*}$ is the maximal number possible for excited atoms. Rearranging yields the desired
$$
\frac{N_{1}}{g_{1}}\ge \frac{N_{2}}{g_{2}}
$$
**b.** It is clear from the expression for $r_{2}^{*}$ that the higher $A$ is the lower the maximal possible excited atoms.

> [!NOTE] Question 3
> a. Ascertain Wien's law by plotting the emission spectrum of a black body at room temperature.
> b. Ascertain Stephan-Boltzmann law using Planck's law.
> c. Find the difference in emission of two radiating aluminum sheets with different emissivities (aluminum and anodize?).
> d. Given that the camera has a capture range of 7.5-13.0 microns, what temperature correction is needed for the camera to give accurate reading?

**a.**
![](../4%20Misc/Attachments/Pasted%20image%2020241219190722.png)

**b.** Stephans Boltzmann law states that the total radiated energy scales like the fourth power of the temperature of the emitting body. To get it from [Planck's law](../3%20Concepts/Black%20Body%20Radiation.md) we need to integrate the emission spectrum over all possible frequencies

$$\begin{align*}
P &= \frac{\hbar g}{2\pi^{2}c^{3}}\int\frac{\omega^{3}}{e^{-\beta\hbar\omega}-1}d\omega
\end{align*}$$
By substituting $\beta\hbar\omega = x$ we can simplify the integral


$$ \begin{align*}
P &= \frac{\hbar g}{2\pi^{2}c^{3}}\int \frac{x^{3}}{(\beta\hbar)^{3}} \frac{1}{e^{-x}-1} \frac{dx}{\beta\hbar}\\
&= \frac{gT^{4}}{2\pi^{2} (\hbar c)^{3}}\underbrace{ \int\limits_{0}^{\infty} \frac{dx}{e^{-x}-1} }_{ \text{const} } \ \ \to \ \ \sigma T^{4}
\end{align*}$$
**c** In practice the camera measures a spectrum $T_{\epsilon}$ of a body with emissivity $\epsilon$, but considers it to be that of black body $T_{0}$. In order for the camera to present the correct spectrum the correction $T_{c}$ must be
$$
\begin{align}
\sigma \left( T_{0}-T_{c} \right)^{4} &\stackrel{!}{=} \epsilon\sigma T_{\epsilon}^{4} \\
T_{c} &= T_{0} -(\epsilon)^{1/4}T_{\epsilon}
\end{align}
$$
Assuming both the black body and the gray body are in thermal equilibrium $T_{\epsilon}=T_{0}$ and thus
$$
T_{c} = T_{\epsilon}(1-\epsilon^{1/4})
$$
Which clearly and unsurprisingly requires knowledge of $\epsilon$.
$$
\begin{align} 
\epsilon_{A} &= 0.04 \\
\epsilon_{AA} &= 0.90
\end{align}
$$
The corrections needed for Aluminum and anodized Aluminum respectively (based on values from Wikipedia) are
$$
\begin{align}
T_{c,A} &= 0.749T_{\epsilon} \\
T_{c,AA}&=0.026T_{\epsilon}
\end{align}
$$
Where, again, $T_{\epsilon}$ is the measured temperature.


> [!NOTE] Question 4
> Find the lifetime of the R1 transition of a RUBY laser, given that it has Lorentzian broadening of 330 [GHz] at room temperature, the cross section is $\sigma=2.5\times_{1}0^{-20} \ [cm^{2}]$ and the refractive index is 1.76

![](../4%20Misc/Attachments/Pasted%20image%2020241219193829.png)


> [!NOTE] Question 5
> Two different materials with similar central emission wavelength $\lambda_{0}=0.694  \ \ [\mu m]$  and $\Delta\nu_{\tiny\text{FWHM}}=349 \ [\text{GHz}]$ have different broadenings - one is homogenous and the other is Doppler. For which frequency would their emission intensities be equal?

$$
g_{\tiny \text{H}}(\nu)= \frac{\Delta\nu/2\pi}{(\nu-\nu_{0})^{2} + (\Delta\nu/2)^{2}}
$$
$$
g_{\tiny \text{D}}(\nu)= \frac{1}{\sigma\sqrt{ 2\pi }}\exp\Big[ -  \frac{(\nu-\nu_{0})^{2}}{2\sigma^{2}}\Big]
$$
where $\sigma(\nu_{0};T)=\sqrt{ \frac{k_{\small B}T}{mc^{2}} }\nu_{0}$

![](../4%20Misc/Attachments/Pasted%20image%2020241219195729.png)

