#quantum #mechanics 

The Bohr model is a "pre-quantum mechanical" model of the electron. It depicts the electron as being bound to the nucleus by the [[Coulomb Force|Coulombic interaction]], performing orbits like that planets around the sun. While this view of the atom is known today to be incorrect, the model does provide remarkably accurate energy quantization for the hydrogen. It is a good introductory tool for understanding the structure and scales of the atom.

# The Problem with Classically Orbiting Electrons
Electrons in "orbit" are constantly accelerating. As accelerating charges they must emit [[Radiation|radiation]] ([[Bremsstrahlung Radiation]]), according to classical theory of electrodynamics. As they radiate they lose the equivalent in kinetic energy and should eventually collapse into the nucleus.

# Bohr's Solution to the Collapsing Electron
Bohr's resolution for the collapsing electron is the postulation of __quantization__ of angular momentum as follows
$$ L = n\hbar \tag{1}$$
and that atomic orbits are stable, while light is only emitted or absorbed when the electron [[Radiative Transitions|transitions]] from one orbit to another

# Equivalence to De Broglie Wavelength
Bohr's quantization of angular momentum is equivalent to the statement that the circumference of the orbit can occupy an integer number of De-Broglie wavelengths
$$2\pi r = n\times \lambda_{\text{deB}} = n\frac{h}{p} = n \frac{h}{mv} \tag{2}$$
Which can be rearranged to give the quantization of angular momentum
$$ L = mvr = \frac{nh}{2\pi} = n\hbar $$
# Quantized Radii
For an electron ($m_{e}$) in a "stable" orbit around a nucleus ($m_{n}$) with charge $+Ze$ the central potential due to the __Coulombic attraction__ is equivalent to the __centripetal force__
$$\frac{\mu v^{2}}{r} = \frac{Ze^{2}}{4\pi\epsilon_{0}r^{2}} \Longrightarrow v^{2}= \frac{e^{2}}{4\pi\epsilon_{0}} \frac{Z}{\mu r} \tag{3}$$
Where $\mu$ is the __reduced mass__ of the two-body system
$$ \frac{1}{\mu} = \frac{1}{m_{n}}+ \frac{1}{m_{e}} \tag{\small\#}$$
From $(1)$ , $(2)$  and $(3)$ we can get the quantization of the radii
$$r_{n}= \frac{n^{2}h^{2}\epsilon_{0}}{Ze^{2}\mu\pi}\approx \frac{n^{2}h^{2}\epsilon_{0}}{Ze^{2}m_{e}\pi}\equiv \frac{n^{2}}{Z}a_{0} \tag{4}$$
Even though the effect of the reduced mass in detectible in spectroscopies, this approximation allows us to conveniently define the quantized radii in terms of the __Bohr Radius__ $a_{0}$

# Quantized Energies
The energy of the system is given by
$$E_{n}=-\left(\frac{e^{2}}{2\epsilon_{0}h}\right)^{2} \frac{\mu Z^{2}}{2n^{2}}=-\alpha\mu \left(\frac{cZ}{n}\right)^{2} = -\frac{R'}{n^{2}} \tag{5}$$
> [!NOTE]- ALGEBRA
> $$\begin{align*}E &= K + U\\&=\frac{\mu v^{2}}{2} - \frac{Ze^{2}}{4\pi\epsilon_{0}r} \tag{>3}\\&= \frac{e^{2}}{8\pi\epsilon_{0}} \frac{Z}{ r} - \frac{Ze^{2}}{4\pi\epsilon_{0}r} = -\frac{Ze^{2}}{8\pi\epsilon_{0}r} = \frac{-\mu Z^{2}e^{4}}{8\epsilon_{0}^{2}h^{2}n^{2}}\tag{>4}\end{align*}$$

Where $\alpha$ is the __fine structure constant__ and $c$ the __speed of light__. $R'$ is a constant that changes based on the specific atom (dependence on $Z$ and $\mu$). For a transition between two energy levels in a [[Hydrogen Atom|hydrogen atom]] for example, the energy of the exciting \ emitted photon is equal to the energy gap
$$ h\nu = R_{H}\left(\frac{1}{{n_{1}}^{2}}- \frac{1}{{n_{2}}^{2}}\right) $$
and since $\nu=c/\lambda$ we can write the transition in terms of the wavelength of the photon and introduce __Rydberg constant__
$$\frac{1}{\lambda}= \frac{R_{H}}{hc}\left(\frac{1}{{n_{1}}^{2}}- \frac{1}{{n_{2}}^{2}}\right)\equiv R_{\infty} \frac{\mu}{m_{e}}\left(\frac{1}{{n_{1}}^{2}}- \frac{1}{{n_{2}}^{2}}\right)$$
Where $R_{\infty}$ is the Rydberg constant

# Fundamental Constants
The relationship between the fine structure constant and Bohr's radius - which are two fundamental constants that have arisen from this model so far - can be written as follows
$$\large\boxed{a_{0}\cdot\alpha=\frac{\hbar}{m_{e}c}}$$
![[Pasted image 20220401000010.png]]

# Inconsistencies of the Bohr Model
1. Doesn't account for the observed phenomenon of the electron spin
2. Bohr model gives us a precise relation between the electron's radius and its orbital velocity which doesn't sit well with the [[Uncertainty Principle|Heisenberg uncertainty principle]]
