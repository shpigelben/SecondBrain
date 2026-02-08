#note 

# Phase Velocity
The phase of a monochromatic wave is given by
$$\varphi(x,t)=kx-\omega t$$
A point on the wave crest, defined by a constant phase, propagates at a speed known as **phase velocity**
$$v_{\varphi} = \left( \frac{ \partial x }{ \partial t }  \right)_{\varphi} = \frac{-\left( \frac{ \partial \varphi }{ \partial t }  \right)_{x}}{  \left( \frac{ \partial \varphi }{ \partial x }  \right)_{t}}= \frac{\omega}{k}$$
where the second equality is known for partial derivatives (used a lot in thermodynamics). In [[Electromagnetic Response|dispersive medium]] $k$ is generally frequency dependent
$$k(\omega)=k_{0} \ n(\omega) = \frac{\omega}{c_{0}}n(\omega)$$
and consequently the phase velocity is frequency and wavelength dependent. Different wavelengths propagate at different speeds when moving through dispersive media.

# Group Velocity
The superposition of two different monochromatic waves with different wave vectors and frequencies can be written as follows
$$\begin{align*}
&E_{0}\cos(k_{1}x-\omega_{1} t) + E_{0}\cos(k_{2}x-\omega_{2} t) = \\ \\
&2E_{0}\cos\left( k_{m}x - \omega_{m}t \right)\cos\left( k_{a}x - \omega_{a}t \right) =\\ \\
&2E_{0}\cos\Big(k_{m}(x - ct)\Big)\cos\Big(k_{a}(x - ct)\Big)
\end{align*}$$
where $k_{m}$ and $\omega_{m}$ are the **modulating** wavevector and frequency, and $k_{a}$ and $\omega_{a}$ are the **carrier** ones. They are given by
$$\begin{align*}
k_{m} = \frac{k_{1}-k_{2}}{2} \quad \quad \omega_{m} = \frac{\omega_{1}-\omega_{2}}{2} \\\\
k_{a} = \frac{k_{1}+k_{2}}{2} \quad \quad \omega_{a} = \frac{\omega_{1}+\omega_{2}}{2}
\end{align*}$$
The phase velocity of the carrier wave is simply
$$v_{\varphi}=\frac{\omega_{a}}{k_{a}}$$
and the velocity of the modulating wave, also known as the **group velocity** is 
$$v_{g}=\frac{\omega_{m}}{k_{m}} = \frac{\omega_{1}-\omega_{2}}{k_{1}-k_{2}}=\frac{\Delta \omega}{\Delta k}$$
In **nondispersive medium** $k_{i} \ c_{0} = w_{i}$ (where $i=1,2$) and phase velocity and group velocity are equal. That is not the case in a **[[Electromagnetic Response|dispersive medium]]** where $k_{i} \ c(\omega_{i})= \omega_{i}$.

In the limiting case of two interfering waves with infinitesimally different velocities, the group velocity is the $k$
$$v_{g} = \frac{ \partial \omega }{ \partial k } {\Large\Bigr|}_{\omega_{a}}$$

$$
\begin{align}
\frac{1}{v_{g}}=\frac{ \partial k }{ \partial \omega } &= \frac{ \partial k_{0} }{ \partial \omega }n +k_{0}\frac{ \partial n{\small (\omega) } }{ \partial \omega } \\ &= \frac{n}{c}+\frac{\omega n'}{c}
 
\end{align}
$$
$$
v_{g}=c\left( \frac{1}{n+\omega n'} \right)
$$

$$
e^{- 0.5(\frac{p-p_{0}}{\sigma})^{2}}
$$
