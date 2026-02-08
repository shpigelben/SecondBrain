#note
# Thermometry
- Nanoscale heating is relatively straightforward. Nanoscale temperature probing on the other hand is more intricate.
	- metal (plasmonic) NP have good photothermal efficiency, and are bleach resistant and are therefore the preferred light absorbers (*thermoplasmonics*).
		- High electron density - stronger EM response.
		- LSPR can further increase the response by OOMs.
	- Heating is a usually a side effect in plasmonics and its accurate measurement is a desirable yet intricate procedure. 
		- Spectral measurement based on Anti-Stokes emission of the plasmonic NP is a promising method.
			- measures the temperature of the NP directly
			- less sensitive to other physical parameters

## Fluorescence Thermometry
Using the information of fluorescent emission (emission of longer wavelength following the absorption of shorter photons) one can achieve temperature mapping with diffraction limited spatial resolution.

![[../9. Misc/attachments/Pasted image 20231022195507.png|center]]
Of all characteristics of the fluorescent emission, emission intensity is most often used, with a reduction in intensity as temperature increases (due to decrease in quantum efficiency). The intensity however, is the parameter effected the most by other physical effects (bleaching, variation in concentration and so on).

## Anti-Stokes Thermometry
Following the excitation of an electron to a virtual state (a state which is not an energy eigenstate of the absorbing molecule, but a transient state into which the molecule is perturbed), and prior to reemission of the exciting photon, the absorbing molecule has a small probability of changing its vibrational state (probably due to thermal effects) resulting a reemission of either a less energetic photon (Stokes Raman emission) or a higher energetic photon (Anti-Stokes Raman). 

![center](../9.%20Misc/attachments/Pasted%20image%2020231022205210.png)

The Stokes shift is given by
$$\delta \sigma = \frac{1}{\lambda_{ex}}-\frac{1}{\lambda_{em}}$$
For an Anti-Stokes (AS) emission the initial state obviously cannot be the ground state and has to be one of the higher states, which at room temperature, are very underpopulated (following Boltzmann distribution) and result in a weak AS signal. As temperature rises, so does the AS signal. ==This temperature dependence offers the possibility of using Raman spectroscopy as a thermometry technique.== In practice, the temperature of the emitting material can be estimated by the ratio of Stokes and Anti-Stokes emission intensities.

> [!NOTE] Figure 3
> ![[../9. Misc/attachments/Pasted image 20231022232503.png|center]]
## As Emission from Metals
Unlike molecules, metals have
- No vibrational states (continuum of phonons instead).
- No discrete energy states (continuous energy bands).
- Very short lifetimes of excited states (due to high probability of electron-electron & electron-phonon interactions).![[../9. Misc/attachments/Pasted image 20231023000907.png|center]]![[../9. Misc/attachments/Pasted image 20231023000925.png|center]]![[../9. Misc/attachments/Pasted image 20231023000942.png|center]]

## Fermi Dirac or Bose Einstein?
The temperature of the metal NP can be considered from the distribution of electrons in the metal, which is described by the appropriate occupation statistics. 

The Fermi-Dirac statistics, with $E$ being the energy of electrons above the Fermi energy (or more exactly - the chemical potential)?
$$f_{FD}(E,T) = \frac{1}{e^{\beta E}+1}$$
It is more appropriate when dealing with metals since electrons, which are fermions, are considered. But some researchers have considered their interaction with phonon and have therefore chose to model their occupation using Bose-Einstein statistics.
$$f_{BE}(E,T) = \frac{1}{e^{\beta E}-1}$$
This is better justified when dealing with molecules that posses vibrational levels, but in metal thermalization primarily occurs through e-e collisions and thus the former is a more plausible representation.

Regardless of physical accuracy, it has been noted, that within the AS energy shifts, the result for both statistics do not differ greatly (Fig 3) and can even be replaced with the Maxwell Boltzmann statistics 
$$f_{MB} = e^{-\beta E}$$
## Electronic & Photonic DOS
The AS emission is dependent on three things:
1. energy distribution of carriers which is dependent on **electronic density of state**  (DOS. related to energy band structure) and the occupation statistics $$n(E) = \rho(E)f(E,T)$$ where $E$ is the energy above the Fermi energy $E_{F}$
2. photonic density of states (PDOS) which is related to the Purcell effect and is given in plasmonic particles by the localized plasmonic resonance LPR $I_{LPR}(\omega)$ $$I_{AS}(\omega) \propto I_{LPR}(\omega)\rho(\hbar \omega-\hbar \omega_{laser}) f(\hbar \omega-\hbar \omega_{laser},T)$$$I_{LPR}$ is extremely wavelength dependent, especially near the resonance frequency, and thus distorts the exponential-like temperature dependent emission. This further complicates things as it prevents proper exponential fit of the AS spectra.

___
# Yonatan's Model
The emission rate, which has photonic & electronic contributions is given by the following
$$\Gamma \propto\underbrace{  \rho(\omega) }_{ photonic }\underbrace{ |\braket{ f | \boldsymbol{\mu}| i } |^{2} }_{ electronic } =I_{ph}I_{e}$$
When considering the occupation of many electrons this becomes
$$\Gamma \propto \rho(\omega)\int \ \underbrace{ |\braket{ { \psi_{f}(\mathcal{E}) | \boldsymbol{\mu}| \psi_{i}(\mathcal{E})} } |^{2} }_{ M_{if}(\mathcal{E}) } \  \underbrace{ f(\mathcal{E}+\hbar \omega) }_{ electron } \ \ \underbrace{ \Big[1-f(\mathcal{E})\Big] }_{ hole }  \  d\mathcal{E} \tag{8}  $$
Where we consider the distributions of excited ($\mathcal{E}+\hbar \omega$) electrons and of holes at the recombination energy ($\mathcal{E}$). Under CW illumination, the electron distribution does not follow a thermal distribution and has to be calculated. This can be done through the Boltzmann equation
$$\frac{ \partial f }{ \partial t } = \left( \frac{ \partial f }{ \partial t }  \right)_{e-e} + \left( \frac{ \partial f }{ \partial t }  \right)_{e-ph} + \left( \frac{ \partial f }{ \partial t } \tag{9} \right)_{ph \ - \ abs}$$
since the LHS vanishes in the steady state case of CW the three processes must balance. $f$ can be then calculated numerically and yields the following distribution
![[../9. Misc/attachments/Pasted image 20231028224628.png|center|400]]
By making the simplifying assumption that $M_{if}$ is energy independent (which changes the result quantitatively and not qualitatively), and feeding the analytic solution of $f$ into $(9)$ it can be shown that the emission spectrum is thermal-like and has a polynomial dependence on the local electric field of the laser.
$$I_{e}\propto \underbrace{ \frac{\hbar \omega}{e^{\beta \hbar \omega} - 1} }_{ thermal } + \underbrace{ \alpha\frac{\hbar (\omega - \omega_{L})}{e^{\beta \hbar (\omega - \omega_{L})} - 1}|E|^{2} + \beta\frac{\hbar (\omega - 2\omega_{L})}{e^{\beta \hbar (\omega - 2\omega_{L})} - 1}|E|^{4}+\dots }_{ non- thermal }$$
The following graph shows in black, blue and red the first three terms of $I_{e}$ respectively.
![center|400](../9.%20Misc/attachments/Pasted%20image%2020231029002436.png)
The blue line represents the $|E|^{2}$ dependence and contributes the most to the AS emission. Increasing the intensity of the laser pump, which translates to increasing the local field increases $\delta$ in turn.
$\delta$ which was shown on the previous figure is equal to
$$\delta_{E} = \left|\frac{E}{E_{sat}}\right|^{2}\propto   \ \tau_{e-e} \cdot \epsilon''_{m}(\omega_{L}) |E|^{2}$$

==around $\omega_{L}$ the first term essentially vanishes, and the third term is about 7 orders of magnitude below the second term. So this region is dominated by the second term and the other terms can be safely ignored== 

By plotting $\ln{(I_{e})}$ and $\ln{(I_{e}^{\small T})}$ 
![[../9. Misc/attachments/Pasted image 20231029010332.png|center|370]]
The thermal part in the dashed line is approximately linear, with a slope proportional to $\frac{1}{T_{e}}$. The red line represents the log of the full emission with the non-thermal emission. It decays slower. 
___
## Questions Regarding the PL model

- Following an absorption, during its excited state, a molecule can either receive or lose energy to vibrational modes and emit lower (S) energy photons or higher (AS) energy photons. Is it more probable in molecules where lifetimes are much longer than in metals who usually thermalize through very rapid e-e collisions?
  
-  When calculating emission rates, we treat the electronic and photonic parts separately $$I_{e} \propto \int\ \, f(\varepsilon + \hbar \omega) [1-f(\varepsilon)]d\varepsilon $$The photonic part can drastically change the result in the neighborhood of the resonance frequency of the system, why don't we consider it?
  
- Is the result of $I_{e}$, which has the form of a BE distribution, achieved by considering FD distribution for $f$ ? - No, $f$ is solved from the Boltzmann equation.
  
- Why is Anti-Stokes (AS) thermometry a preferred thermometry method? It is less dependent on other physical conditions than fluorescence thermometry. Why is that?
  
- Given that $I_{e}$ is a power law of $|E|^{2}$, to what power are we doing the fit?
  
- The photonic density of states distorts the emission spectrum based on the shape and material of the PNP (plasmonics NP), does the theory take that into consideration? It appears to consider only the electronic part.

___
# Questions (Array Thermometry)

![[../9. Misc/attachments/Pasted image 20231029092740.png]]

- It is unclear what $f_{I}$ and $f_{PL}$ mean in analogy to the derivation of the model we studied in class. But more unclear to me is why only the AS emission depends on $n$. Feels like the S emission should also have some kind of dependence on the electronic occupation.
  
- It is unclear why they chose BE distribution for $n$? It describes emission and thus deals with photons which are bosons, but the origin of the phenomenon is in the interaction of electrons and holes which are fermions.

- When considering the Model learned in class, how is it generalized to an array of PNPs?

- In the paper on thermometry of PNP arrays, doesn't the photonic density of states, which logically should be very different from that of a single PNP drastically change the result?
  ![[../9. Misc/attachments/Pasted image 20231029094751.png|center]]
- maybe by taking the ratio for two different illumination intensities, the photonic part vanishes since it mostly, if not entirely depends on the frequency?

___
# Comparing with our model

On which of the experimental results should I test our model? 
- fig 1 - (a) ?

![[../9. Misc/attachments/Pasted image 20231029095310.png]]

![[../9. Misc/attachments/Pasted image 20231029095337.png]]

___
# Connection to our model
$$
I_{e}\propto \underbrace{ \frac{\hbar \omega}{e^{\beta \hbar \omega} - 1} }_{ thermal } + \underbrace{ \alpha\frac{\hbar (\omega - \omega_{L})}{e^{\beta \hbar (\omega - \omega_{L})} - 1}|E|^{2} + \beta\frac{\hbar (\omega - 2\omega_{L})}{e^{\beta \hbar (\omega - 2\omega_{L})} - 1}|E|^{4}+\dots }_{ non- thermal }
$$
The following graph shows in black, blue and red the first three terms of $I_{e}$ respectively.
![[../9. Misc/attachments/Pasted image 20231029002436.png|center|350]]

==around $\omega_{L}$ the first term essentially vanishes, and the third term is about 7 orders of magnitude below the second term. So this region is dominated by the second term and the other terms can be safely ignored== 

$$
\Large I_{e} \approx \alpha \ \cdot \ \underbrace{ \frac{\hbar (\omega - \omega_{L})}{\large e^{\frac{\hbar(\omega - \omega_{\tiny L})}{k_{\tiny B}T}} - 1} }_{ f_{\tiny PL}(\omega,\omega_{\tiny L})n(\omega,\omega_{\tiny L},T) } \ \cdot \ \underbrace{ \ |E|^{2} }_{ f_{\tiny I}({ |E|^{2}}) \ }
$$
where $\alpha$ is some constant. 

In analogy to the model in the *array AS thermometry article* where the anti-Stokes emission is given by
$$
I^{AS}(\omega,\omega_{\tiny L}, T) \propto f_{\tiny I}(|E|^{2})f_{\tiny PL}(\omega,\omega_{\tiny L})n(\omega,\omega_{\tiny L},T)
$$
The transition to an array of particles include a vague dependence of each particle on $f_{\tiny PL}$ only, with $f_{I}$ and $n$ similar across all particles. It is unclear how a transition from single to multiple particles occurs in our model.

We take the ratio of two emission spectra at different illuminations $I_{i}$ and $I_{j}$ and therefore different corresponding temperatures $T_{i}$ and $T_{j}$
at the same frequency $\omega_{\tiny L}$

==the constant $\alpha$ is temperature and field independent and is therefore cancelled in the division==
$$
\large Q_{AS} = \frac{I_{e}^{i}}{I_{e}^{j}} = \underbrace{ \frac{e^{ \frac{\hbar(\omega-\omega_{\tiny L})}{k_{\tiny B}T_{j}} } -1}{e^{ \frac{\hbar(\omega-\omega_{\tiny L})}{k_{\tiny B}T_{i}} } -1} }_{  } \cdot \underbrace{  \ \left| \frac{E_{i}}{E_{j}} \right|^{2} }_{ Q_{\tiny S} }
$$
By adopting their convention, we are able to arrive at equation $(6)$ in the article using our model, albeit for a single particle.

$$T_{j} = T_{0} + \beta I_{j}$$

==the fact that they introduce the intensity dependent temperature in $n$ later goes to show how arbitrary the dependence-related division of equation $(1)$ is.

$$
e^{\hbar(\omega-\omega_{\tiny L})}\equiv \eta_{\tiny L}
$$

$$
\large Q = \frac{(\eta_{\tiny L})^{-k_{\tiny B}(T_{0}+\beta I_{j})} - 1}{(\eta_{\tiny L})^{-k_{\tiny B}(T_{0}+\beta I_{i})} - 1} \left(\frac{I_{i}}{I_{j}}\right)
$$

$$
I_{e}(\mathcal{E}_{\text{{ph}}}) = \underbrace{ \frac{\mathcal{E}_{\text{{ph}}}}{{\large e^{ \beta\mathcal{E}_{\text{{ph}}} }}-1} }_{ \mathcal{E}_{\text{{BB}}} } + \delta_{E} \ \underbrace{ \frac{2(\mathcal{E}_{\text{{ph}}}-\mathcal{E}_{\text{{L}}})}{{\large e^{ \beta(\mathcal{E}_{\text{{ph}}}-\mathcal{E}_{\text{{L}}})) }}-1} }_{ A }
$$

$$
f^{NT}(\mathcal{E+\mathcal{E}_{em}})\Big[ 1 - f^{NT}(\mathcal{E}) \Big]
$$

$$
f = f^{T} + \left| \frac{E_{L}}{E_{sat}} \right|^{2} = f^{T} +  \delta_{E}
$$