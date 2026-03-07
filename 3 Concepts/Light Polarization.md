---
type: concept
discipline:
  - physics
field:
  - optics
  - electrodynamics
---

An [electromagnetic plane wave](Electromagnetic%20Waves.md) propagating along the $z$ direction in free space, has its electric and magnetic fields oscillating in the $xy$ plane, perpendicular to the direction of propagation. Light polarization is conventionally follows the direction of the electric field. Considering the electric field, in its most generic form

$$
\mathbf{E}(z,t) = \begin{bmatrix}
E_{x}(z,t) \\ E_{y}(z,t)
\end{bmatrix} =\begin{bmatrix}A_{x}\cos(\omega t-kz+ \delta_{y}) \\ A_{y}\cos(\omega t-kz+ \delta_{x})\end{bmatrix}
$$

Generally, the electric field traces an ellipse on the $xy$ plane parametrized by the following expression with $\delta = \delta_{y}-\delta_{x}$ 

$$
\left( \frac{E_{x}}{A_{x}} \right)^{2} +\left( \frac{E_{y}}{A_{y}} \right)^{2} - \frac{2E_{x}E_{y}}{A_{x}A_{y}}\cos\delta = \sin^{2}\delta
$$
![](../4%20Misc/Attachments/Pasted%20image%2020240122130949.png)
==Assuming this definition for phase difference, $\delta<0$ means RHC (counter clock-wise), and $\delta>0$  is LHC==. Different combinations of amplitude ratios and phase differences give rise to elliptic polarizations of varying inclinations and eccentricities with the special cases of circular and linear polarizations.
#  Complex Representation
Let's denote the ratio between the two fields by the following complex number
$$
\xi=\frac{E_{y}}{E_{x}} = \left| \frac{A_{y}}{A_{x}} \right|e^{i\delta} = \tan(\psi)  \cdot e^{i\delta}
$$
A natural representation considers the tuple $(\psi,\delta)$ of the field ratios and the phase difference, such that $\psi\in\left( -\frac{\pi}{2}, \frac{\pi}{2} \right)$ and $\delta\in(0,2\pi)$. The set of all possible combinations of $(\psi,\delta)$ includes all possible polarization states and can be represented on a Poincare sphere with $\psi$ as the polar angle and $\delta$ as the azimuthal one.




Another representation considers the ellipticity $e= \tan(\chi) = \pm b / a$  and the ellipse inclination $(\chi,\psi')$. Where
$$
\begin{align}
\tan(2\psi') &= \frac{2Re(\xi)}{1-|\xi|^{2}} \\  \\
\sin(2e) &= \frac{2Im(\xi)}{1+|\xi|^{2}}
\end{align}
$$
# Jones Calculus
Jones vectors are a comfortable vector forms of the complex representation
$$
\mathbf{J} = \begin{pmatrix}
A_{x}e^{i\delta_{x}} \\
A_{y}e^{\delta_{y}}
\end{pmatrix} \ \longmapsto \ \ \mathbf{J(\psi,\delta)}=\begin{pmatrix}
\cos\psi \\ e^{i\delta}\sin\psi 
\end{pmatrix}
$$

| Polarization | $(\psi,\delta)$ | Jones Vector |  |
| :--: | :--: | :--: | ---- |
| <br>linear | $(\psi,0)$ | $\begin{pmatrix}\cos\psi \\ \sin\psi\end{pmatrix}$ | ![](../4%20Misc/Attachments/Pasted%20image%2020240122160904.png) |
| <br>LHC | $\left( \frac{\pi}{4}, \frac{\pi}{2}\right)$ | $\frac{1}{\sqrt{ 2 }}\begin{pmatrix}1 \\+i\end{pmatrix}$ | ![](../4%20Misc/Attachments/Pasted%20image%2020240122160842.png) |
| <br>RHC | $\left( \frac{\pi}{4} , - \frac{\pi}{2}\right)$ | $\frac{1}{\sqrt{ 2 }}\begin{pmatrix}1 \\-i\end{pmatrix}$ | ![](../4%20Misc/Attachments/Pasted%20image%2020240122160827.png) |
| <br>elliptical | $\left( \frac{\pi}{4} ,\delta\right) \quad  \delta\neq \frac{\pi}{2}\cdot z$<br><br>$(\psi, \delta) \quad \delta\neq 0$ | <br>$\frac{1}{\sqrt{ 5 }}\begin{pmatrix}1 \\2i\end{pmatrix}$ | ![](../4%20Misc/Attachments/Pasted%20image%2020240122160921.png) |


# Unpolarized light (Stokes Parameters)
Monochromatic plane wave must be polarized, but for polychromatic light the relative phase $\delta$ depends on time and the polarization state vary in time as well. When the variation in polarization state is more rapid than the scale of observation the light is consider either partially polarized of completely unpolarized. In the case where that bandwidth is relatively narrow (quasi-monochromatic) the variation in the amplitude can be relatively slow. To describe such light we introduce the following quantities 

$$
\begin{align}
S_{0} &= \braket{  {A_{x}}^{2} +{A_{y}}^{2} }  \\
S_{1} &= \braket{  {A_{x}}^{2} -{A_{y}}^{2} }\\
S_{2} &= 2\braket{  {A_{x}}{A_{y}}\cos\delta }\\
S_{3} &= 2\braket{  {A_{x}}{A_{y}}\sin\delta }
\end{align}
$$

Where the brackets represent a time average over a period determined by the period of the detection device. These are known as Stokes parameters. They satisfy the following

$$
{S_{0}}^{2}\geq {S_{1}}^{2}+{S_{2}}^{2}+{S_{3}}^{2}
$$

Where the equality hold for polarized waves. For unpolarized light, there is no preference for direction so $S_{0} = \braket{ {A_{x}}^{2} } = \braket{ {A_{y}}^{2}}$, $S_{1}$ vanished and so do $S_{2}$ and $S_{3}$ since there is no correlation in time. The unpolarized state is given by $(1,0,0,0)$. It is easy to show that light polarized in the $x$ direction corresponds to $(1,1,0,0)$ and for the $y$ direction $(1,-1,0,0)$. LHC light is $(1,0,0,1)$ and RHC is $(1,0,0,-1)$. The degree of polarization can be defined as follows

$$
\gamma = \sqrt{ \left( \frac{S_{1}}{S_{0}} \right)^{2} +  \left( \frac{S_{2}}{S_{0}} \right)^{2} + \left( \frac{S_{3}}{S_{0}} \right)^{2} }
$$

and $\gamma$ ranges from $0$ for completely unpolarized light to $1$ for polarized light.
The normalized Stokes parameters for polarized light can be related to the complex representation in the following manner

$$
\begin{align}
S_{0} &= 1  \\
S_{1} &= \cos 2\psi \\
S_{2} &= \sin 2\psi \cos \delta \\
S_{3} &= \sin 2\psi \sin \delta
\end{align}
$$
