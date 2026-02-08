#note #physics/condensed-matter #model | #incomplete 
Also known as the free electron model. This quantum mechanical theory takes into consideration the fermionic nature of the valence electrons that constitute the electric and thermal currents in solids. It improves on [[Drude Model]] by incorporating the [[Particle Statistics|Fermi-Dirac statistics]].

# Assumptions
- Electrons behave as a fermi gas in solids
- Unlike in Drude model, ions are not necessarily the source of collisions
- Interaction between electrons is not considered

# General
We wish to count the number of electrons that occupy all energy states in a system. Using the occupation number for fermions we have
$$N = \sum\limits_{i} \braket{n_{f}}_{i} = \sum\limits_{i} \frac{1}{e^{\beta(\mu-\epsilon_{i})}+1}  $$
Since the model deals with free particles the energy spectrum is continuous, therefore the conventional transition to integration is performed
$$\begin{align*}
N &=  \int\limits_{0}^{\infty}  \, \frac{dx^{3}dp^{3}}{(2\pi \hbar )^{3}}n(\epsilon) \\
&=  \frac{1}{(2\pi)^{3}}\int\limits_{0}^{\infty}    dx^{3}dk^{3} \, n(k) \\
&=  \frac{V}{(2\pi)^{3}} \int\limits_{0}^{\infty}    n(k) dk^{3} \\
&= \frac{V}{(2\pi)^{3}}\underbrace{ 2 }_{ \text{2 spins} }\int\limits_{0}^{\infty}   n(k) \, 4\pi k^2 dk 
\end{align*}   $$
In very low temperatures the fermion occupation number becomes a Heaviside step function around the [[Chemical Potential]] which is called the **Fermi energy**
$$ \lim\limits_{T \to 0} \  n_{f}(\epsilon) =  \theta(\epsilon - \epsilon_{\scriptsize F})\to \theta(k - k_{\scriptsize F})$$The Fermi corresponds directly to a **Fermi wavelength**
![center|550](../9.%20Misc/attachments/Pasted%20image%2020240612004650.png)

Going back to the integral above
$$N=\frac{4V}{(2\pi)^{2}}\int\limits_{0}^{\infty}   \theta(k - k_{\scriptsize F})\, k^{2} dk = \frac{V}{\pi^{2}}\int\limits_{0}^{k_{\scriptsize F}}    k^{2} dk = V\frac{{k_{\scriptsize F}}^{3}}{3 \pi^2} $$
$$\begin{align*}
\frac{N}{V} &= n = \frac{{k_{\scriptsize F}}^{3}}{3 \pi^{2}} \\
E_{\scriptsize F} &= \frac{\hbar^{2 k_{\scriptsize F}^{2}}}{2m}= \frac{\hbar^2}{2m}(3\pi^{2}n)^{2/3}\\
T_{\scriptsize F} &= \frac{E_{\scriptsize F}}{k_{\small B}}
\end{align*}$$
what is $n$? Let us try one valence electron per atom

$$
n{\small (E)}=\frac{1}{e^{\beta(E-E_{\small F})}+1} 
$$