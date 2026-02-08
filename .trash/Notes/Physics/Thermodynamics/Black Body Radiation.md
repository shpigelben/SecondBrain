#statistical #quantum #mechanics 

For an ideal gas summation over [[Single Particle States]] transforms into an integral over phase space in which states are determined by momentum $i\to p$ and $n_{i}\to n(p)$
$$\sum\limits_{i} \to \frac{V}{h^{3}}\int d^{3}p \tag{1}$$
And so extensive quantities can be calculated as follows
$$\begin{align*}
N & = \frac{V}{h^{3}}\int \braket{n(p)}d^{3}p \tag{2}\\ \tag{3}
U & = \frac{V}{h^{3}}\int \mathcal{E}(p) \braket{n(p)}d^{3}p
\end{align*}$$
For black body radiation we calculate the energy density $u$ of photons. 
- We therefore use the [[Occupation Numbers|occupation number for bosons]] with $\mu=0$ since photons are massless and their number is not conserved.
- We use the [[Planck Relation]] $E_{\gamma}= \hbar\omega = pc$ for the energy of the photons
- $g$ is the degeneracy due to two possible photon polarizations
$$\begin{align*}
u &= \frac{g}{h^{3}} \int\limits_{0}^{\pi} \sin(p_{\theta})dp_{\theta}
\int\limits_{0}^{2\pi} dp_{\phi} \int\limits_{0}^{\infty} p^{2}dp
\frac{\hbar\omega}{e^{-\beta\hbar\omega}-1}\\
&= \frac{4\pi g}{(2\pi \hbar)^{3}}\int \frac{\hbar^3}{c^3}
\frac{\hbar\omega^3}{e^{-\beta\hbar\omega}-1}d\omega\\
&= \frac{\hbar g}{2\pi^{2}c^{3}}\int\frac{\omega^{3}}{e^{-\beta\hbar\omega}-1}d\omega \tag{4}
\end{align*}$$
___
# Planck Spectrum

The integrand in equation $(4)$ is called the blackbody spectrum, or Planck spectrum, and it represents the distribution of frequencies in the emission of a black body [[1024px-Black_body.svg.png|500]]
$$ B(\omega,T) = \frac{g\hbar\omega^{3}}{2\pi^{2}c^{3}{\large (e^{-\frac{\hbar\omega}{T}}-1)}} \tag{5}$$
![[blackbodyspectrumimg.gif|700]]

___
# Stephan-Boltzmann Law
By substituting $\beta\hbar\omega = x$ we can simplify the integral 
$$ \begin{align*}
u &= \frac{\hbar g}{2\pi^{2}c^{3}}\int \frac{x^{3}}{(\beta\hbar)^{3}} \frac{1}{e^{-x}-1} \frac{dx}{\beta\hbar}\\
&= \frac{gT^{4}}{2\pi^{2} (\hbar c)^{3}}\int\limits_{0}^{\infty} \frac{dx}{e^{-x}-1} \to \sigma T^{4}
\end{align*}$$
