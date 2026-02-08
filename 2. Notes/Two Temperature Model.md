#note #condensed-matter 

# Electron & Heat Dynamics
Early models of the electronic and phononic response to short pulse illumination in metals approximate a fast return to equilibrium of both species. This approximation enables the separate treatment of electron temperature $T_{e}$ and phonon temperature $T_{ph}$. This is known as the **two temperature model** and is given by the following coupled DEs.
$$
\begin{align*}
C_{e}(T_{e})\frac{ \partial T_{e} }{ \partial t } &= - G_{{e-ph}}(T_{e}-T_{ph}) + P_{abs} \\
C_{ph}\frac{ \partial T_{ph} }{ \partial t } &= G_{e-ph}(T_{e}-T_{ph})
\end{align*}
$$

Where $G_{e-ph}$ [^1] is the **electron-phonon coupling** interaction and $P_{abs}$ is given by [[Poynting Theorem]] for **quasi-monochromatic** illumination.

[^1]: Electrons can technically interact with both acoustic and optical phonons. Since acoustic phonons are less energetic they are generally more populated relative to optical phonons and are therefore the main contributors to resistance in conductors.
$$
P_{abs}=\frac{1}{2}\omega_{0}\epsilon_{0}\epsilon''(\omega_{0})|E(t)|^{2}
$$

$\epsilon''(\omega_{0})$ is the [[Electromagnetic Response|imaginary part of the electric permittivity]] at the central frequency. ==The TTM works well for **light metals** (Na, K, Rb, Cs) and **TCOs** (like ITO) but fails to predict transient (femtosecond range) behavior in **noble metals**==. The **extended TTM** model which takes into account **non-thermal carriers** gives better predictions for the latter and overall. 

Electron heat capacity in metals can be derived using the [[Sommerfeld Model|Sommerfeld free electron approximation]]
$$
C_{e}(T_{e}) = \frac{\pi^{2}}{2} \frac{k_{\small B}^{2}T_{e}}{\epsilon_{\small F}}
$$

And phononic heat capacity can be derived using the equipartition theorem ([[Boltzmann Solid|Dulong Petite]]) which holds for high temperatures

$$
C_{ph}= 3k_{\small B}
$$

## Questions

1. What are noble metals?
2. Why does the spatial part (the heat equation Laplacian) vanish in the TTM? 

3. Find the expression for the **electron heat capacity** in A&M.
4. What are the **non thermal carriers** in the extended TTM?
5. What is the central frequency of the pulse? It appears that the **work function** for ITO is between 4.5-5.4 [eV] which translate to photons of between 800-200 [nm] wavelengths. How can ionization of electrons from the surface of the metal effect the response of the metal? 
