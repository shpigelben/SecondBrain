---
type: concept
discipline:
  - physics
field:
  - optics
  - electrodynamics
---

When traversing from an optically denser medium to another, there exists a critical angle $\theta_{c}$, after which light does transmits and there is a total internal reflection. The critical angle is the incident angle for which the refracted angle is $90^{\circ}$, using Snell's law we can find it.
$$
n_{1}\sin\theta_{c}=n_{2}\sin 90^{\circ}\Rightarrow \theta_{c}=\sin^{-1}\left( \frac{n_{2}}{n_{1}} \right)
$$
# Evanescent Wave
A wave is incident upon an interface. The interface lies across the x-axis, and the plane of incidence is the x-z plane. The transferred wave has the following general form
$$
\begin{align}
\boldsymbol{E}_{2} &= \boldsymbol{E}_{2,0}\exp\Big[i(\boldsymbol{k}_{2}\cdot \boldsymbol{r}-\omega t)\Big]  \\
&=\boldsymbol{E}_{2,0}\exp\Big[i(\boldsymbol{k}_{2x}\cdot \boldsymbol{x} + \boldsymbol{k}_{2z}\cdot \boldsymbol{z}-\omega t)\Big] \\
&=\boldsymbol{E}_{2,0}\exp\Big[i\boldsymbol{k}_{0}n_{2}(\sin\theta_{2}\cdot x+\cos\theta_{2}\cdot z)-i\omega t\Big]
\end{align}
$$
the refracted angle does not exist in the usual sense above $\theta_{c}$ but we can write it in terms of $\theta_{1}$. Firstly, from the continuity of tangential components (or Snell's law) $n_{2}\sin\theta_{2}=n_{1}\sin\theta_{1}$. Then,
$$
\begin{align}
n_{2}\cos\theta_{2}&=\sqrt{ {n_{2}}^{2}-{n_{2}}^{2}\sin^{2}\theta_{2} } \\
&=\sqrt{ {n_{2}}^{2}-{n_{1}}^{2}\sin^{2}\theta_{1} } \\
&=i\sqrt{ {n_{1}}^{2}\sin^{2}\theta_{1}-{n_{2}}^{2} } \\
&=in_{1}\sqrt{ \sin^{2}\theta_{1} - \left( \frac{n_{2}}{n_{1}} \right)^{2} } \\
&=in_{1}\sqrt{ \sin^{2}\theta_{1} - \sin^{2}\theta_{c} }
\end{align}
$$
Plugging these back into the wave equation of medium 2
$$
\begin{align}
\boldsymbol{E}_{2} &= \boldsymbol{E}_{2,0}\exp\Big[i(k_{1}\sin\theta_{1}\cdot x-\omega t)\Big]\cdot\exp\bigg(-k_{1}\sqrt{ \sin^{2}\theta_{1} - \sin^{2}\theta_{c} }\cdot z \bigg) \\
&= \boldsymbol{E}_{2,0}\cdot\underbrace{  \exp\Big[{i(\boldsymbol{k}_{1}\cdot \boldsymbol{x}-\omega t)}\Big] }_{ \text{wave in the x direction} }\cdot \underbrace{ \quad \quad \large e^{-\kappa z} \quad \quad }_{ \text{decay in the z direction} }
\end{align}
$$
This reveals, that despite being totally reflected on the boundary, the wave does protrude to the second interface, even though there is no net transfer of energy there.

# 1. TIR Sensitivity
In a TIR sensor, the change in the refractive index of a medium (for example due to the change in concentration of an analyte) is probed by measuring the consequent change in critical angle $\theta_{c}$. The sensitivity of a TIR sensor is simply the amount change in critical angle due to a change refractive index

$$
\begin{align}
S_{\theta} &= \frac{d\theta_{c}}{dn_{s}}  \\
&=\frac{d}{dn_{s}}\left[ \sin^{-1}\left( \frac{n_{0}}{n_{s}} \right) \right] \\
&= \frac{1}{\sqrt{ {n_{0}}^{2}-{n_{s}}^{2}  }}
\end{align}
$$
In cases were subtle changes in RI are needed to be observed, high sensitivity is desirable. High sensitivity can be achieved by making the RI of the guiding layer, $n_{0}$, close in value to the initial value of the RI of the sample $n_{s}$. This can also be seen by considering the reflectance calculated using Fresnel equations
![center](../4%20Misc/Attachments/Pasted%20image%2020240324194806.png)It is clear that the transition to TIR is much more drastic in the case of the orange curve where the indices are closer in value, and much more subtle when they are further away.

# 2. 
$n_{BK7}\equiv n_{0}=1.517$

From BK7 into air
![](../4%20Misc/Attachments/Pasted%20image%2020240324200107.png)
From air into BK7
![](../4%20Misc/Attachments/Pasted%20image%2020240324200151.png)
For TIR, the first medium has to be optically denser than the second, which is why transmission exists for all angles in the second scenario (with the exception of Brewster angle). We can evaluate the sensitivity at different refractive indices by using the equation derived in previous chapter

$$
\begin{align}
S_{\theta}(n_{s} = 1.0) = \frac{1}{\sqrt{ 1.517^{2}+1^{2} }} = 0.876 \\
S_{\theta}(n_{s} = 1.2) = \frac{1}{\sqrt{ 1.517^{2}+1^{2} }} = 1.077 \\
S_{\theta}(n_{s} = 1.4) = \frac{1}{\sqrt{ 1.517^{2}+1^{2} }} = 1.712
\end{align}
$$

# 3. 

![center](../4%20Misc/Attachments/Pasted%20image%2020240324205546.png)

The spectral sensitivity is given by the following 

$$
S_{\lambda} = \frac{d\lambda_{c}}{dn_{s}}\to\frac{\Delta \lambda_{c}}{\Delta n_{s}} 
$$
Since we don't have a simple analytical term for $\lambda_{c}$ we will use the Python code used to calculated the transmission and reflection spectrum to find the critical wavelength for each RI of the analyzed medium $n_{s}$

$$
\begin{align}
n_{s}=1.000 &\to \lambda_{c} = 0.58 \ [\mu m] \\
n_{s}=1.005 &\to \lambda_{c} = 0.45 \ [\mu m] \\
n_{s}=1.010 &\to \lambda_{c} = 0.39 \ [\mu m] \\
n_{s}=1.015 &\to \lambda_{c} = 0.34 \ [\mu m]
\end{align}
$$
consequently

$$
\begin{align}
S_{\lambda}(1.000-1.005) &= \left|\frac{0.58-0.45}{1.000-1.005}\right| = 26 \\
S_{\lambda}(1.005-1.010) &= \left|\frac{0.45-0.39}{1.005-1.010}\right| = 12 \\
S_{\lambda}(1.010-1.015) &= \left|\frac{0.39-0.34}{1.010-1.015}\right| = 10
\end{align}
$$
# 4. 

A totally reflected wave still protrudes from the interface into the second media. It has a penetration depth of 
$$
d_{p} = \frac{1}{\kappa} = \frac{\lambda}{2\pi n_{1}\sqrt{ \sin^{2}\theta_{1}-\sin^{2}\theta_{c} }}
$$
If the decaying field senes a medium of higher refractive the wave can tunnel into it resulting in transmission so that there is no longer TIR. For this effect to be noticeable the second medium has to be within the penetration depth of the field. In a scenario when two glass prisms $(n=1.5)$ are separated by a gap $d$ of air, for a wave $(\lambda=630 \ [nm])$ incident on the first interface at $\theta=45^{\circ}$, for TIR to take place

$$
d>d_{p} = \frac{630 \ [nm]}{2\pi \sqrt{ \frac{2.25}{2}-1 }} = 283.6 \ [nm]
$$
For smaller separations than 283.6 [nm] transmission will become apparent.

# 5.

For the equation for the penetration depth one can observe that the closer the incident angle to the critical angle, the longer the penetration depth. A longer penetration depth means that the field extends further into the sample medium and is more capable of probing changes in its refractive index. It is for that reason that working as close as possible to the critical angle is preferable.

# Surface Plasmon Resonance (SPR)
Let us consider a closely related problem at the interface between a metal and a dielectric. But before we do that, we have to establish the difference between a metal and a dielectric (in the optical sense). The Drude-Lorentz model allows us to do just that. 

## Drude Lorentz Model
By considering the bound electrons in the medium as driven-damped harmonic oscillators in the presence of an EM wave, we can derive an expression for the frequency dependent permittivity and consequently, the refractive index. The equation of motion for the induces polarization can be written as follows
$$
\frac{d^{2}\boldsymbol{\mathcal{P}}}{dt^{2}} +\gamma \frac{d\boldsymbol{\mathcal{P}}}{dt} + \omega_{0}^{2}\boldsymbol{\mathcal{P}} = \frac{Ne^{2}}{m_{e}^{*}}\mathbf{E}
$$
$\omega_{0}$ is the natural frequency of the bound electrons, and $\gamma$ is the damping coefficient.
The equation can be solved for incoming monochromatic wave of frequency $\omega$.
$$
\boldsymbol{\mathcal{P}}= \epsilon_{0}\underbrace{  \frac{-{Ne^{2}}/{\epsilon_{0}m^{*}_{e}}}{(\omega^{2}_{0}-\omega^{2}-i\gamma \omega)} }_{ \chi(\omega) } \mathbf{E}
$$
Where $\chi$ is the electric susceptibility, and since $\frac{\epsilon}{\epsilon_{0}} = 1+\chi$ we have
$$
\epsilon_{\small L}(\omega) = 1+\frac{\omega_{p}^{2}}{\omega_{0}^{2}-\omega^{2}-i \gamma \omega}
$$
where we defined the plasma frequency $\omega_{p}^{2} = \frac{Ne^{2}}{m_{e}^{*}\epsilon_{0}}$. For free (conduction) electrons in metal, $\omega_{0}$ can simply be taken to zero to replicate the Drude permittivity
$$
\epsilon_{\small D}(\omega) = 1-\frac{\omega_{p}^{2}}{\omega^{2}+i \gamma \omega}
$$
# Plasmon Dispersion Relation
 Let us consider a TM wave propagating in the x-z plane towards a metal-dielectric interface that lies along the x-axis. Using Ampere's law (differential form from Maxwell's equations) without currents
$$
\nabla\times \boldsymbol{H} = \cancelto{0}{ \mu_{0}\boldsymbol{J} } + \frac{ \partial \boldsymbol{D} }{ \partial t } 
$$
We get for the TM wave the following

$$
\begin{align}
-i\omega\epsilon E_{x} &= -\frac{ \partial H_{y} }{ \partial z }  \\
-i\omega\epsilon E_{z} &= -\frac{ \partial H_{y} }{ \partial x } 
\end{align}
$$
Here we assume the existence of evanescent waves on both sides of the interface, such a solution has the general form
$$H_{y}=
\begin{cases}
h_{y,d}\cdot {\large e^{-\mathbf{k}_{d}\cdot \mathbf{z}}}\cdot \exp(ik_{x}\cdot x) \quad\quad (z>0)\\
h_{y,m}\cdot {\large e^{\mathbf{k}_{m}\cdot \mathbf{z}}} \cdot\exp(ik_{x}\cdot x) \quad\quad (z<0)
\end{cases}
$$
Where the interface is taken to be positioned at $z=0$. $k_{x,d}=k_{x,m}=k_{x}$ as parallel boundary conditions dictate, and $k_{z}$ is assumed to be imaginary in both cases. Plugging this solution into the above results in the following

$$
\boldsymbol{E}_{d} = \frac{H_{y,d}}{\omega\epsilon_{d}}
\begin{pmatrix}
ik_{z,d} \\ 0 \\ -k_{x}
\end{pmatrix} \quad\quad \boldsymbol{E}_{m} = \frac{H_{y,m}}{\omega\epsilon_{m}}
\begin{pmatrix}
-k_{z,d} \\ 0 \\ -k_{x}
\end{pmatrix}
$$

Parallel since the parallel components remain continuous across the interface in the absence of currents, and so at $z=0$

$$
\begin{align}
H_{d,y} = H_{m,y} &\to h_{d,y} = h_{m,y}  \\
E_{d,x} = E_{m,x} &\to \frac{k_{d,z}}{\epsilon_{d}} = - \frac{k_{m,z}}{\epsilon_{m}}
\end{align}
$$
finally, by converting the z-component of the wave vector as follows
$$
\begin{align}
{k_{j,z}}^{2} &= {k_{j}}^{2}-{k_{x}}^{2}  \\
&= \epsilon_{j}{k_{0}}^{2}-{k_{x}}^{2}
\end{align}
$$
and isolating for the propagation constant $k_{x}$, we get the dispersion relation for the SPP
$$
{k_{x}}^{\text{\small SPP}} = k_{0}\sqrt{ \frac{\epsilon_{m}\epsilon_{d}}{\epsilon_{m}+\epsilon_{d}} } = \frac{\omega}{c_{0}}\sqrt{ \frac{\epsilon_{m}\epsilon_{d}}{\epsilon_{m}+\epsilon_{d}} }
$$
where for reference, the dispersion relation for a bulk wave is the familiar
$$
{k_{x}}^{\text{\small bulk}} = k_{0}\sin\theta_{i}\sqrt{ \epsilon_{d} }
$$
For a light to excite an SPP the two wave vectors along the interface must be equal (conservation of momentum). We can use the the Drude model for metals to plot the two dispersion relations
![](../4%20Misc/Attachments/Pasted%20image%2020240325145017.png)

# 6. Kretschmann Configuration
If we analyze the last statement, and look closely at both dispersion relations we realize that an SPP simply cannot be excited on a single metal-dielectric interface, since the dispersion branches do not meet. All hope is not lost, since we can use a different configuration that employs three layers, two dielectrics and a thin metal sheet in between. 

![center](../4%20Misc/Attachments/Pasted%20image%2020240325145618.png)

If the metal sheet is thin enough, just like in TIR, the incoming like can tunnel to the next interface. By having a second dielectric with lower RI, the tunneling wave can excite an SPP on the second boundary. This can be used as a sensor, similar to a TIR sensor, only here there reflection spectrum has a dip at the angle where an SPP wave has been excited.

![](../4%20Misc/Attachments/Pasted%20image%2020240325144610.png)
we can see the bulk dispersion relation of the incoming light in the first dielectric of $n=1.5$ ($e_{d}$ is written there mistakenly), doesn't intersect the SPP branch of the first interface, but does for the second interface with a dielectric of lower RI of $n=1.33$, at a specific frequency.

# 7. 

![center](../4%20Misc/Attachments/Pasted%20image%2020240325151712.png)
The incident angle on the interface $\theta$ as a function of the incident angle on the prism $\phi$ and as a function of the prism RI $n_{p}$ and the angle of its base $p$ in radians
$$
\theta(n_{p},p,\phi) = p -\sin^{-1}\left[ \frac{\sin\phi}{n_{p}} \right]
$$

![](../4%20Misc/Attachments/Pasted%20image%2020240325180831.png)
Reflectance as a function of incident angle on the interface, for three layers:
- a prism made from SF11 $(n=1.7847)$.
- a thin layer $(d=58 \ [nm])$ of gold $(n_{2}=0.165+3.477i)$.
- and a final medium of water and air alternately.

![](../4%20Misc/Attachments/Pasted%20image%2020240325182828.png)
The same graph as a function of the angle incident on a prism with base angle of $p=\frac{\pi}{4} = 0.785 \ [rad]$

![](../4%20Misc/Attachments/Pasted%20image%2020240325183416.png)The reflectance  as a function of the angle incident on a prism with base angle of $p=0.7*\frac{\pi}{4} = 0.55 \ [rad]$. In order for the a dip in the reflection to be observed in the case of air, a prism with sharper angles for the base must be used.

# 8. Spectral & Angular Sensitivities
Let us recall the condition for the excitation of an SPP wave
$$
\begin{align}
{k_{x}}^{\text{\small SPP}}  &= {k_{x}}^{\text{\small bulk}}  \\
k_{0}\sqrt{ \frac{\epsilon_{m}{\small(\lambda)}\epsilon_{3}}{\epsilon_{m}{\small(\lambda)}+\epsilon_{3}} } &= k_{0}\sin\theta\sqrt{ \epsilon_{1} }
\end{align}
$$
For the angular sensitivity we need to isolate the incident angle to receive

$$
\theta_{\tiny\text{SPP}}(\lambda) = \sin^{-1}\left(\sqrt{ \frac{1}{\epsilon_{1}} \frac{\epsilon_{m}{\small(\lambda)}{n_{3}}^{2}}{\epsilon_{m}{\small(\lambda)}+ {n_{3}}^{2}  } }  \ \right)
$$
and differentiate with respect to the analyte medium $n_{3}$

$$
S_{\theta} = \frac{ \partial \theta_{\tiny\text{SPP}} }{ \partial n_{3} } 
$$

which results in a very nasty expression which we did not manage to simplify. The same thing goes for the spectral sensitivity, in which we use the Drude formula for $\epsilon_{m}{(\small\lambda)}$ and isolate $\lambda_{\tiny\text{SPP}}$

$$
\lambda_{\tiny\text{SPP}}(\theta)= \frac{2\pi c}{\omega_{p}}\sqrt{ 1- \frac{1}{\epsilon_{0}} \frac{\epsilon_{1}n_{3}^{2}\sin^{2}\theta}{n_{3}^{2}-\epsilon_{1}\sin^{2}\theta} }
$$
for which the conservation of momentum holds, then take its derivative with respect to $n_{3}$
$$
S_{\lambda}=\frac{ \partial \lambda_{\tiny\text{SPP}} }{ \partial n_{3} } 
$$
which gives an even nastier expression that we do not present.

# 9. Alternative Methods for Exciting SPPs
- There is the alternative Otto configuration in which a dielectric is sandwiched between the prism and a sheet of metal in a way that excites the SPP on the metal-dielectric boundary closer to the prism.
- Instead of using a prism to couple light to plasmons, gratings are used extensively to match the momentum.
- It is possible to excite SPPs with an electron beam instead of light. By bombarding the surface of a metal with electron they can generate surface waves during their scattering.

# 10. 
The SPP on a metal-dielectric interface always has higher momentum than that of light in the dielectric. This can be seen in the figures [ ] for the dispersion relations that are given in questions 5 and 6. Therefore, exciting an SPP on the boundary between half infinite region of BK7 and gold is impossible. Only by adding a medium with higher RI that increases the momentum of the free photon will we be able to excite the SPP.

# 11. Sellmeier Equation
By converting the Lorentz-Drude Formula (without damping and for multiple resonances) into an expression which is a function of wavelength instead of frequency, we can bring it to a form similar to that of the Sellmeier equation which is essentially the same equation functionally, only with constants that are extracted experimentally
$$
\begin{align}
\epsilon{\small(\omega)} &= 1 + \sum\limits_{i=1}^{M} f_{i}\frac{{\omega_{p}}^{2}}{{\omega_{0,i}}^{2}-\omega^{2}} \\
&= 1 + \sum\limits_{i=1}^{M} \frac{\lambda^{2}f_{i}\left( \frac{{\omega_{p}}}{{\omega_{0,i}}} \right)^{2}}{\lambda^{2}- \left(\frac{2\pi c}{{\omega_{0,i}}}\right)^{2} }
\end{align}
$$
The general form of the Sellmeier equation on the other hand is 
$$
n^{2}(\omega)-1 = \sum\limits_{i=1}^{M} \frac{B_{i}\lambda^{2}}{\lambda^{2}-C_{i}}
$$
Simply by analogy we get the following
$$
\begin{align}
B_{i} &= f_{i} \left( \frac{\omega_{p}}{\omega_{0,i}} \right)^{2} = \frac{f_{i}}{{\omega_{0,i}}^{2}}\frac{Ne^{2}}{m_{e}^{*}\epsilon_{0}}  \\
C_{i} &= \left( \frac{2\pi c}{\omega_{0,i}} \right)^{2}
\end{align}
$$

# 12
Consider the following illustration of a general scenario of light coming into and out of a prism
![center](../4%20Misc/Attachments/Pasted%20image%2020240325234847.png)
Light makes a specular reflection from point D. Assuming the prism is symmetric (otherwise this might not hold) and the base angles $a$ are the same, the triangles ADF and BDE are similar triangles. That means that the angles $b$ and $c$ ought to be equal. If $b$ and $c$ are equal they make the same angle with the normal to the side of prism (the incident angle in F and refracted angle in E) $90-b=90-c\equiv \varphi_{r}$

$$
\begin{align}
n_{1}\sin\varphi_{in} &= n_{p}\sin\left( \varphi_{r}\right) \\
n_{p}\sin\varphi_{r} &= n_{1}\sin\left( \varphi_{out}\right) 
\end{align} \Rightarrow \varphi_{in}=\varphi_{out}
$$

# 13. Plasmon Excitement with Prism
We've already found the relation between the angle incident on the interface $\theta$ and the angle incident on the prism $\phi$
$$
\theta_{\small\text{SPP}} = p -\sin^{-1}\left[ \frac{\sin(\phi_{\small\text{SPP}})}{n_{p}} \right]
$$
and we've shown the expression for the SPP angle at a given wavelength 
$$
\theta_{\tiny\text{SPP}}(\lambda) = \sin^{-1}\left(\sqrt{ \frac{1}{\epsilon_{1}} \frac{\epsilon_{m}{\small(\lambda)}{n_{3}}^{2}}{\epsilon_{m}{\small(\lambda)}+ {n_{3}}^{2}  } }  \ \right)
$$
Combining the two we have
$$
\phi_{\small\text{SPP}}(\lambda)= \sin^{-1}\left[n_{p}\sin\left(p-\sin^{-1}\left(\sqrt{ \frac{1}{\epsilon_{1}} \frac{\epsilon_{m}{\small(\lambda)}{n_{3}}^{2}}{\epsilon_{m}{\small(\lambda)}+ {n_{3}}^{2}  } }  \ \right)\right)\right]
$$
# 14. Exciting SPP with free photon
 The dispersion relation can be viewed in fig [ ] in the theoretical background before question 6. As discussed before, not only does a photon coming from vacuum cannot excite an SPP directly on the interface it is incident upon, but any free photon traveling through any dielectric cannot do so. As stated before, the momentum of an SPP at a given frequency at a metal-dielectric interface is always greater than that of a photon traveling through the same dielectric with the same frequency. Only by coupling that interface to a dielectric with lower RI will an SPP be excitable.
# 15. The Use of Prisms in SPP Detectors
The need for an index matching layer has been established a couple of times during this report so we'll address the reason behind the shape of the prism and why it gives an advantage as a part of a detector. The ability to use prisms with different angles for the bases allow not only to spread the dip of the absorption over larger angles, but also to shift the signal. This is illustrates in figures [ ] in question 7, where in one case the dip for a certain interface does is not apparent, but for the second one it does and the features spread of larger angle range for both cases. This allows to peak the right prism for a certain RI of the analyte medium.

# 16. SPP Penetration Depth
Going back to the general form of the SPP wave, we have

$$H_{y}=
\begin{cases}
h_{y,s}\cdot {\large e^{ik_{z,s}\cdot z}}\cdot \exp(ik_{x}\cdot x) \quad\quad (z>0)\\
h_{y,m}\cdot {\large e^{-ik_{z,m}\cdot z}} \cdot\exp(ik_{x}\cdot x) \quad\quad (z<0)
\end{cases}
$$
Where
$$
\begin{align}
k_{m,z} &=  \sqrt{ {k_{m}}^{2}-{k_{m,x}}^{2} }\\
&=  \sqrt{ {k_{m}}^{2}-{k_{s,x}}^{2} } \\
&= k_{0}\sqrt{ \epsilon_{m}-\epsilon_{s}\sin^{2}\theta } \\
&= ik_{0}\sqrt{ \epsilon_{s}\sin^{2}\theta - \epsilon_{m}}
\end{align}
$$
Inserting into the wave equation in the metal region we get
$$
h_{y,m}\cdot {\large e^{\left[k_{0}\sqrt{ \epsilon_{p}\sin^{2}\theta - \epsilon_{m}}\right]\cdot z}} \cdot\exp(ik_{x}\cdot x) \quad\quad (z<0)
$$

where the penetration depth is finally given as follows
$$
\kappa{\small(\lambda)} = \frac{1}{d_{p}{\small(\lambda)}}= \frac{\lambda}{2\pi \sqrt{ \epsilon_{p}\sin^{2}\theta -\epsilon_{m}{\small(\lambda)}}}
$$
![](../4%20Misc/Attachments/Pasted%20image%2020240326010811.png)
In the figure above we can see the penetration depth as a function wavelength, with the angle of incidence being $\theta_{\small\text{SPP}}(\lambda)$ as derived in previous questions. We used the parameters from equation 7 with the prism being SF11 and the analyte medium being water. For the gold we used the Drude model with $w_{p} = 2.5\times 10^{15} \ [Hz]$.

