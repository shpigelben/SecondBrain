---
type: concept
discipline:
  - physics
field:
  - optics
---

[Fresnel Equations](Fresnel%20Equations.md)
[Light in Inhomogeneous Media](Light%20in%20Inhomogeneous%20Media.md)

# Three Media Derivation
Consider the multiple transmissions and reflections of a light coming from a medium with a refractive index $n_{1}$, incident on a thin film of thickness $d$ with refractive index $n_{2}$ that lies on a substrate of $n_{3}$. The figure below illustrates the behavior of the rays.

![center|350](../4%20Misc/Attachments/Pasted%20image%2020240116183652.png)

Let us arrive at a general expression for the reflected and transmitted waves 
$$\begin{align}r_{00} &= r_{12} \\
r_{0} &= t_{12}r_{23}t_{21}e^{-2i\phi}  &&t_{0}=t_{12}t_{23}e^{-i\phi}\\
r_{1} &= t_{12}r_{23}t_{21}e^{-2i\phi}(r_{23}r_{21}e^{-2i\phi}) &&t_{1}=t_{12}t_{23}e^{-i\phi}(r_{21}r_{23}e^{-2i\phi})\\
r_{2} &= t_{12}r_{23}t_{21}e^{-2i\phi}(r_{23}r_{21}e^{-2i\phi})^{2} &&t_{2} = t_{12}t_{23}e^{-i\phi}(r_{21}r_{23}e^{-2i\phi})^{2}\\
& \  \ \vdots  && \ \ \vdots \\ 
r_{n} &= t_{12}r_{23}t_{21}e^{-2i\phi}(r_{23}r_{21}e^{-2i\phi})^{n} &&t_{n}=t_{12}t_{23}e^{-i\phi}(r_{21}r_{23}e^{-2i\phi})^{n}
\end{align} \tag{1}$$
Where $\phi$ is the longitudinal phase accumulation of the wave as it propagates inside the layer and is given by

$$
\phi=\mathbf{k}\cdot \mathbf{z}=k_{0}n_{2}d\cos(\theta_{2})=\frac{2\pi}{\lambda}n_{2}d\cos(\theta_{2}) \tag{2}
$$

Now that we have a general expression of the $n^{th}$ wave, the total reflected  wave can simply be calculated by taking the sum of all reflected rays.

$$
\begin{align}
r &= r_{00} + \sum\limits_{n=0}^{\infty}r_{n} \\
&= r_{12} + t_{12}r_{23}t_{21}e^{-2i\phi}\sum\limits_{n=1}^{\infty}\Big(r_{21}r_{23}e^{-2i\phi}\Big)^{n} \\
&= r_{12} + \frac{t_{12}r_{23}t_{21}e^{-2i\phi}}{1-r_{21}r_{23}e^{-2i\phi}} \\
&= \frac{r_{12}+r_{23}e^{-2i\phi}\cancelto{1}{ (t_{12}t_{21}-r_{12}r_{21}) }}{1-r_{21}r_{23}e^{-2i\phi}} = \frac{r_{12}+r_{23}e^{-2i\phi}}{1+r_{12}r_{23}e^{-2i\phi}} \tag{3}
\end{align} 
$$

Where we used the expression for the sum of a geometric series, and have used the reversibility conditions
$$
\begin{align}
&r_{12} = -r_{21} \\
&t_{12}t_{21}-r_{12}r_{21}=1
\end{align}
$$
Similarly, the total Transmitted wave is the following
$$
\begin{align}
t &= \sum\limits_{n=0}^{\infty}t_{n}\\ &=t_{12}t_{23}e^{-i\phi}\sum\limits_{n=0}^{\infty}(r_{21}r_{23}e^{-2i\phi})^{n}\\
&= \frac{t_{12}t_{23}e^{-i\phi}}{1+r_{12}r_{23}e^{-2i\phi}} \tag{4}
\end{align}
$$

# The Special Case of a Thin Film
Let us use the result of the airy formulas we derived to calculate the transmittance of such a system.

$$
T = \frac{n_{3}\cos\theta_{3}}{n_{1}\cos\theta_{1}}|t|^{2} \tag{5}
$$

denoting $t_{12}t_{23}\equiv\tau$ and $r_{12}r_{23}\equiv\rho$. This derivation assumes no absorption $\rho,\tau\in\mathbb{R}$.

$$
\begin{align}
|t|^{2} = \left|\frac{\tau e^{i\phi}}{1+\rho e^{-2i\phi}}\right|^{2} 
&= \frac{\tau^{2}}{1-2\rho \cos(2\phi)+\rho^{2}} \\ 
& = \frac{\tau^{2}}{(1-\rho)^{2}+4\rho \sin^{2}\phi} \\  
&\equiv\frac{{\tau_{max}}}{1 + \left( \frac{2\mathcal{F}}{\pi}\right)^{2}\sin^{2}\left( \frac{\pi\nu}{\nu_{F}} \right)} \tag{6}
\end{align}
$$
The last transition was made by denoting the following quantities
$$
\begin{align}
{\tau_{max}} &\equiv \frac{\tau^{2}}{(1-\rho)^{2}} &&\to \quad \left( \frac{1-r}{1+r} \right)^{2} \tag{7,7*}\\
\mathcal{F} &\equiv \sqrt{ \frac{\pi \rho}{(1-\rho)^{2}} } &&\to \quad \frac{\sqrt{ \pi } \ r}{1-r^{2}} \tag{8,8*}\\
\nu_{\scriptsize F}&\equiv  \frac{c}{2d}  \tag{9}
\end{align}

$$
which are the maximal transmittance, the finesse, and the free spectral range respectively. Usually, Fabry-Perot interferometers have $n_{1}=n_{3}$ and consequently $r_{12}=r_{23}\equiv r$ and the maximal transmittance and finesse become simpler (equations 7* and 8*). Below, are the limits of maximal and minimal reflection coefficients. It is apparent that the finesse has no bound when nearing complete reflection.

$$
\begin{align}
& \lim\limits_{r\to 1} \mathcal{F} = \infty  &&\lim\limits_{r\to 0} \mathcal{F} = 0\\
& \lim\limits_{r\to 1} \tau_{max} = 0 &&\lim\limits_{r\to 0} \mathcal{\tau_{max}} = 1
\end{align}

$$

Lets investigate the properties of $T$ as a function of $r$ and $d$ for normally incident light. The figure below shows the normalized transmittance of the FB as a function the frequency of the incident wave, for different values of refractivity $r$. The one on the right is $500 [nm]$ thick and the one on the right is $110 [nm]$ thick. We can draw two main conclusions from these graphs that demonstrate the qualities of the interferometer:

- It is clear that as the reflectivity $r$ increases, the FB interferometer becomes a better spectral filter, allowing for increasingly narrower bands of frequencies to transmit, and reflecting the rest. It should be noted that these are normalized  graphs and that transmittance in general decreases as $r$ increases, so there's a tradeoff.

- The thinner the interferometer, the less frequency peaks (modes) are allowed. The $500 [nm]$ interferometer allows roughly 6 modes to go through, and the $110 [nm]$ one allows only 2. To the best of my knowledge, this quality of the FB interferometer is used in laser cavities to filter unwanted longitudinal modes which further increases the coherence length of the laser.

![center|700](../4%20Misc/Attachments/Pasted%20image%2020240124151800.png)

- It is possible to further control the selection of wanted modes by changing the angle of incidence and shifting the spectrum to the right or left accordingly. 
- The FSR (free spectral range) $\nu_{\scriptsize F}$ describes the separation between two modes of the interferometer.
- The width of the mode bands can be shown to correspond to the ratio between the FSR and the finesse $$
\delta\nu = \frac{\nu_{\scriptsize F}}{\mathcal{F}}
$$ and we've shown that increasing $r$ which consequently increases the finesse results in narrower bands.