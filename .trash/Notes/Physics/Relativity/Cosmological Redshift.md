#cosmology #general #relativity 

We consider the path of a radial $(d\Omega^{2})$ light ray $(ds^{2}=0)$ in a universe described by the [[FRW Metric]]
$$\begin{align*}
0\stackrel{!}{=}ds^{2}&=cdt^{2}-a^{2}(t)\left( \frac{dr^{2}}{1-\kappa r^{2}}+r^{2}\cancelto{}{d\Omega^{2}}\right)\\
\\
\frac{cdt}{a(t)}&= \pm\frac{dr}{\sqrt{1-\kappa r^{2}}} \tag{1}
\end{align*}$$
we as observers at $r=0$ measure the light as it travels from a distant place in the opposite radial direction as time increases from $t=t_{e}$ (emitted) to $t=t_{m}$ (measured). We therefore chose the negative solution of $(1)$
$$\int_{t_{e}}^{t_{m}} \frac{cdt}{a(t)}= -\int_{r_{e}}^{r_{m}\small =0}\frac{dr}{\sqrt{1-\kappa r^{2}}}= \int_{0}^{r_{e}}\frac{dr}{\sqrt{1-\kappa r^{2}}}\equiv R \tag{2}$$
The comoving distance $d_{c}$ remains the same regardless of emission and measurement times, specifically for a signal emitted at time $t_{e}+\delta t_{e}$ and measured at time $t_{m}+\delta t_{m}$ such that
$$\int_{t_{e}+\delta t_{e}}^{t_{m} + \delta t_{m}} \frac{cdt}{a(t)}= d_{c} \tag{3}$$
For small enough time intervals $a(t)$ is approximately constant, so subtraction of $(2)$ from $(3)$ gives the following
$$\int_{t_{m}}^{t_{m}+\delta t_{0}} \frac{cdt}{a(t)}-\int_{t_{e}}^{t_{e}+\delta t_{e}} \frac{cdt}{a(t)} \approx 
\frac{\delta t_{m}}{a(t_{m})}-\frac{\delta t_{e}}{a(t_{e})}=0$$
which can be written in terms of frequency $\delta t \propto \nu$ and wavelength
$$\frac{a(t_{m})}{a(t_{e})}=\large\frac{\nu_{e}}{\nu_{m}}= \frac{\lambda_{m}}{\lambda_{e}}\equiv z+1 \tag{4}$$
It can be noted that the relation above holds __independent of the universe curvature__. $z$ is __the measured redshift__. It is the amount of deviation from the emitted wavelength. The time it takes a signal to reach us can be can be approximated to first order from the time coordinate in the metric in $(1)$
$$c \Delta t \approx a(t)d_{c} = d_p ~~\longrightarrow~~ \Delta t = \frac{d_{p}}{c}$$
It is now easy to write $t_{e}$ in terms of $t_{m}$ and $\Delta t$. We use equation $(4)$ and approximate it to first order, assuming $a$ varies slowly during $\Delta t$. We also make use of the definition in terms of red shift
$$
\begin{align*}
z+1&=\frac{a(t_{m})}{a(t_{e})}=\frac{a(t_{m})}{a({t_{m}-\Delta t})}\approx  \frac{a(t_{m})}{a(t_{m})-\Delta t\dot{a}(t_{m})}  \\ \\&= \frac{1}{1-\Delta t \frac{\dot{a}(t_{m})}{a(t_{m})}} \approx 
1 + \Delta t \frac{\dot{a}(t_{m})}{a(t_{m})} =1+ \frac{d_{p}}{c}\left(\frac{\dot{a}(t_{m})}{a(t_{m})}\right) \tag{5}
\end{align*}
$$
We are reminded of [[Hubble's law]] which appears explicitly in the result of equation $(5)$ and finally write a tangible definition for cosmological redshift
$$z=d_{p}\frac{H_{0}}{c}$$
Where $H_{0}$ is Hubble constant and $d$ is the distance between the point of emittance and point of receival