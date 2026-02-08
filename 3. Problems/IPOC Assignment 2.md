 $$\Huge\text{IPOC Assignment 2} $$
 $$\text{Ben Shpigel 204389449} $$
# Question 1

> [!QUESTION] Question 1a
> Using the 4x4 matrix for isotropic layer, derive a transformation between the 
4x4 matrix formalism and the Abeles matrix formalism. 

Both the 4X4 matrix for isotropic layers and the Abeles matrix formalism are physically equivalent and provide the same results. They both work in a different bases (as given presented in the first lecture slides) and a transformation between them requires knowing the transition matrix from one basis to the other.

$$
\begin{align}
\underline{\text{4X4}} \quad & \quad  \quad\underline{\text{Abeles}} \\
\begin{pmatrix}
E_{x} \\H_{y} \\E_{y} \\ -H_{x}
\end{pmatrix} & \to   \begin{pmatrix}H_{y} \\ -E_{x} \\ E_{y} \\ H_{x}
\end{pmatrix}
\end{align}
$$

This simple transformation can be achieved using the following transition matrix

$$
\underbrace{ \begin{pmatrix}
0 & 1 & 0 & 0  \\
-1 & 0 & 0 & 0  \\
0 & 0 & 1 & 0 \\
0 & 0 & 0 & -1
\end{pmatrix} }_{ \Large U }\begin{pmatrix}
E_{x} \\H_{y} \\E_{y} \\ -H_{x}
\end{pmatrix}  =   \begin{pmatrix}H_{y} \\ -E_{x} \\ E_{y} \\ H_{x}
\end{pmatrix}
$$

Using this transition matrix we can also get the Abeles propagation matrix $P$ in the following way

$$
P_{\text{Abeles}} = U\Big[P_{\text{4X4}} \Big] U^{-1}
$$

<div style="page-break-after: always;"></div>


> [!QUESTION] Question 1b
> Using the 4x4 matrix approach calculate the angular and spectral (400-900nm)
reflection and transmission coefficients for a general biaxial waveplate of
thickness d= 10 microns having the following principal values of the dielectric
tensor $\epsilon_{1}=2.25,\ \epsilon_{2}=2.3,\ \epsilon_{3}= 2.7$

Using rotation matrices, we reorient the anisotropic layer with tilt and azimuth angles of $45^{\circ}$ relative to the lab reference coordinates. We can then calculate the dynamical $4\times4$ matrix, and from it the propagation matrix for a layer of a thickness of 10 microns. By implementing the method numerically and extracting the field coefficients and then the power coefficients using the elements of the propagation matrix we can produce the angular dependence of the reflection and transmission through the layer at constant wavelength

![](../9.%20Misc/attachments/Pasted%20image%2020240415181627.png)

And the spectral distribution of the reflection and transmission with a constant incident angle of $0^{\circ}$. 
![center](../9.%20Misc/attachments/Pasted%20image%2020240415181810.png)
It is possible to see that energy is conserved which gives a good reason to suspect that the numerical solution work properly. The code used to produce these graphs is attached in that mail.

> [!QUESTION] Question 1c
Express the refractive indices for the two propagating eigenmodes in a
uniaxial medium as a function of the tilt, and azimuth angles of the dielectric
ellipsoid as well as the incidence angle. Based on that write down the
retardation between the two waves and calculate it numerically versus
incidence angle for a specific waveplate as an example of your choice.

In order to find the eigenmodes as functions of the incident angle, we write the dispersion relation
$$
\mathbf{k}\times(\mathbf{k}\times \mathbf{E}) + \omega^{2}\mu \overline{\overline{\varepsilon}} \ \mathbf{E} =0
$$

which can be written in matrix notation
$$
\begin{pmatrix}
\omega^{2}\mu\varepsilon_{x x} -k_{z}^{2} & \omega^{2}\mu \epsilon_{xy} & \omega^{2}\mu \epsilon_{xz}+k_{x}k_{z} \\
\omega^{2}\mu \epsilon_{yx} & \omega^{2}\mu\varepsilon_{yy} - k_{x}^{2}-k_{z}^{2} & \omega^{2}\mu \epsilon_{yz}\\
\omega^{2}\mu \epsilon_{zx}+k_{z}k_{x} & \omega^{2}\mu \epsilon_{zy} & \omega^{2}\mu\varepsilon_{zz} - k_{x}^{2}
\end{pmatrix}\begin{pmatrix}
E_{x} \\ E_{y} \\ E_{z}
\end{pmatrix} =0
$$
and demand that the determinant vanishes for nontrivial solutions. This results in a 4th degree polynomial with $k_{z}$ as the variable. Out of the 4 solutions two correspond to the forward propagating eigenmodes, from which we can calculate
$$
n_{i} = \sqrt{{ \nu_{x}}^{2} + {\nu_{z,i}}^{2} }
$$
We go about the above process for an array of tilt angles of the dielectric medium with respect to the propagation of the incoming light (or the reference frame of the lab) to find the dependence of the ordinary and extra ordinary refractive indices as shown in the figure below to the left. 

![center](../9.%20Misc/attachments/Pasted%20image%2020240415200125.png)
We also compute the retardation 

$$
\Gamma = \frac{2\pi h}{\lambda}(n_{e}-n_{o})
$$

between the two eigenmodes as a function of the tilt angle for different layer widths as shown in the figure above on the right. 

# Question 2

> [!QUESTION] Question 2a
> Using the 4x4 matrix formalism show that for a biaxial waveplate with its 
principal axes coinciding with the xyz axes (z is the normal to the interface) the eigen-indices for oblique incidence are given by $$ n_{e} = \sqrt{ \epsilon_{x x} +\nu_{x}^{2}\left( 1- \frac{\epsilon_{x x}}{\epsilon_{zz}} \right) } \quad n_{o}=\sqrt{ \epsilon_{yy} }$$

Since here, the principle axes of the medium are aligned with the reference coordinates, the dielectric tensor is diagonal, which means that the dispersion matrix shown in previous section becomes

$$
\begin{pmatrix}
\omega^{2}\mu\varepsilon_{x x} -k_{z}^{2} & 0 & k_{x}k_{z} \\
0 & \omega^{2}\mu\varepsilon_{yy} - k_{x}^{2}-k_{z}^{2} & 0\\
k_{z}k_{x} & 0 & \omega^{2}\mu\varepsilon_{zz} - k_{x}^{2}
\end{pmatrix}\begin{pmatrix}
E_{x} \\ E_{y} \\ E_{z}
\end{pmatrix} =0
$$
Same as before, we demand that the determinant vanishes, and end up with a 4th degree polynomial in $k_{z}$ whose roots are the eigenmodes propagating forward and backward in the crystal. Two of the forward propagating modes are the desired 
$$ n_{e} = \sqrt{ \epsilon_{x x} +\nu_{x}^{2}\left( 1- \frac{\epsilon_{x x}}{\epsilon_{zz}} \right) } \quad \quad n_{o}=\sqrt{ \epsilon_{yy} }$$

<div style="page-break-after: always;"></div>


> [!QUESTION] Question 2b
> In one liquid crystal type called electroclinic Smectic A LC the molecules are 
laying in the plane of the glass substrates (yz plane) with their long axes making and angle θ with the z-axis assuming uniaxial molecules with two principal refractive indices $n_{\parallel}$ and $n_{\perp}$. 
> - Write down the dielectric tensor for this structure in the xyz system and calculate the ordinary and extraordinary indices at normal incidence.
> - The polarizer is at an angle Ω with respect to the z-axis as shown in the figure. Using the Jones calculus show that the transmission between crossed polarizers is 
given by $T =\sin^{2}(2\Omega)\sin^{2}\left( \frac{\Gamma}{2} \right)$ where $\Gamma$ is the phase retardation.

Based on the general scheme for calculating the dielectric tensor (as provided in the lecture slides and used in previous sections)

$$
\epsilon_{ij} = \begin{pmatrix}
\epsilon_{2} + \delta \cos^{2}\phi & 0.5\delta \sin 2\phi & 0.5(\epsilon_{3}-\epsilon_{1})\sin 2\theta \cos \phi  \\
0.5\delta \sin 2\phi & \epsilon_{2} + \delta \sin^{2}\phi & 0.5(\epsilon_{3}-\epsilon_{1})\sin 2\theta \sin\phi  \\
0.5(\epsilon_{3}-\epsilon_{1})\sin 2\theta \cos \phi  & 0.5(\epsilon_{3}-\epsilon_{1})\sin 2\theta \sin \phi  & \epsilon_{1} + (\epsilon_{3}-\epsilon_{1})\cos^{2}\theta
\end{pmatrix}
$$
with $\delta = \epsilon_{1}\cos^{2}\theta + \epsilon_{3}\sin^{2}\theta - \epsilon_{2}$

In the case of the uniaxial molecule we have $n_{1}=n_{2}=n_{\perp}$ and $n_{3}=n_{\parallel}$. For a ray propagating in the z-direction, birefringence would occur only if the optical axis is in the xy plane. That means that $\theta=90^{{\circ}}$ which results in

$$
\epsilon_{ij} = \begin{pmatrix}
\epsilon_{\perp} + \delta \cos^{2}\phi & 0.5\delta \sin 2\phi & 0 \\
0.5\delta \sin 2\phi & \epsilon_{\perp} + \delta \sin^{2}\phi & 0 \\
0&0& \epsilon_{\perp}
\end{pmatrix}
$$
and now $\delta = \epsilon_{\parallel}-\epsilon_{\perp}$. Solving the dispersion relation determinant and polynomial again will yield the eigenmodes

$$
n_{e} = n_{\parallel} \quad n_{o} = n_{\perp}
$$

 Such a medium of width $h$ causes a phase retardation between the two eigenmodes according to
 
 $$
\Gamma = \frac{2\pi h}{\lambda}(n_{\parallel}-n_{\perp})
$$

Using Jones formalism, such a matrix would be represented by the following

$$ W = 
\begin{pmatrix}
e^{-i\Gamma/2} & 0 \\
0 & e^{i\Gamma/2}
\end{pmatrix}
$$
A light passes through a polarizer oriented along the $x$ axis, passes through the anisotropic medium at hand with its fast and slow axes rotated at an angle $\phi$ relative to the $x$ axis and exists through another linear polarizer align along the $y$ axis. This whole system can be represented by the following

$$
P_{y}\Big(\underbrace{ R(-\phi)WR(\phi) }_{ W(\phi) }\Big)P_{x}\ket{x} 
$$
Where $\ket{x}$ is the polarization in the x direction, and $R(\phi)$ is a rotation matrix of angle $\phi$ relative to the x axis. In matrix notation it is given as follows

$$
\begin{align}
\begin{pmatrix}
x_{out} \\ y_{out}
\end{pmatrix}&=\left[\begin{pmatrix}
0 & 0  \\ 0 & 1
\end{pmatrix} \begin{pmatrix}
W_{11} & W_{12} \\ W_{21} & W_{22}
\end{pmatrix}\begin{pmatrix}
1 & 0 \\ 0  & 0
\end{pmatrix}\right]\begin{pmatrix}
1\\0
\end{pmatrix} \\
&=\begin{pmatrix}
0 & 0 \\ W_{21} & 0
\end{pmatrix}\begin{pmatrix}
1 \\0
\end{pmatrix} \\
&=\begin{pmatrix}
0\\W_{21}
\end{pmatrix}
\end{align}
$$
Carrying the calculation of the rotation retardation plate, gives a matrix element 
$$
W_{21} = -i\sin(2\phi)\sin\left( \frac{\Gamma}{2} \right)
$$
Finally, the amount of passing light in terms of intensity is 

$$
I_{out} = \left|\cancelto{0}{ {x_{out}}^{2} }+{y_{out}}^{2}\right| = \sin^{2}(2\phi)\sin^{2}\left( \frac{\Gamma}{2} \right)
$$
> [!QUESTION] Question 2c
For normally incident elliptically polarized wave passing through a waveplate
show that the relation between the exit angle of the long axis of the ellipse to
the entrance angle is given by $$\tan(2\alpha)=\tan(2\beta) \frac{\cos(\omega t - \phi_{i}-\Gamma)}{\cos(\omega t - \phi_{i})}$$ where $\phi_{i}$ is the initial phase retardation of the elliptically polarized light.

A general elliptical Jones vector going through a retarder can be written as 

$$
\begin{align}
\begin{pmatrix}
x_{out}\\x_{out}
\end{pmatrix} = W\begin{pmatrix}
x_{in}\\x_{in}
\end{pmatrix} &= \begin{pmatrix}
e^{-i\Gamma/2} & 0 \\
0 & e^{i\Gamma/2}
\end{pmatrix}\begin{pmatrix}
\cos\psi \\ e^{i\varphi} \sin\psi
\end{pmatrix} \\
&= e^{-i\Gamma/2}\begin{pmatrix}
\cos\psi\\ e^{i(\varphi+\Gamma)}\sin\psi
\end{pmatrix}
\end{align}
$$
Where $\varphi\equiv\omega t-\phi_{i}$. It can be shown (seen in lecture 2) that for incoming polarization with angle $\gamma$ relative to the slow axis the following holds
$$
\tan(2\gamma)=\tan(2\psi)\cos(\varphi+\Gamma)
$$
For the incoming and outgoing light, angles $\beta$ and $\alpha$ are he angles relative to the slow axis before $(\Gamma=0)$ and and after $(\Gamma)$ the waveplate

$$
\begin{align}
\text{in:}\quad &\tan(2\beta)=\tan(2\psi)\cos(\varphi) \\
\text{out:}\quad&\tan(2\alpha)=\tan(2\psi)\cos(\varphi+\Gamma)
\end{align}
$$

By dividing the two, we get the relation between the deviations

$$
r=\frac{\tan(2\alpha)}{\tan(2\beta)}=\frac{\cos(\varphi+\Gamma)}{\cos(\varphi)}\begin{cases}
\Gamma = \frac{\pi}{2}\to r=\tan(\varphi) \\ \Gamma=\pi\to r= -1
\end{cases}
$$


<div style="page-break-after: always;"></div>


# Question 3

> [!QUESTION] Question 3a
> Look for the dispersion relation for SF11 glass, write it down and draw the dispersion curve for the spectral range 400-900nm. 

The following is the dispersion relation as taken from [refractiveindex.info](https://refractiveindex.info/?shelf=glass&book=SF11&page=SCHOTT) with coefficients written up the the 3rd digit for brevity.
 $$
n^{2}-1 = \frac{1.738\lambda^{2}}{\lambda^{2}-0.013} + \frac{0.314\lambda^{2}}{\lambda^{2}-0.062}+\frac{1.899\lambda^{2}}{\lambda^{2}-155.236}
$$

![center|600](../9.%20Misc/attachments/Pasted%20image%2020240408012902.png)

> [!QUESTION] Question 3b
> Derive an expression for the deviation angle and draw the deviation angle versus wavelength assuming the prism in air.

We define the deviation as the angle between the continuation of the incident beam with the right side of the prism, $\alpha$, and the refraction angle of the exiting beam with the same side of the prism $\beta$. 
$$
\delta = \alpha - \beta
$$
Using the notation in the diagram below, the following relations can be shown

$$
\begin{align}
\alpha &= 30 +\theta_{1} \\
\theta_{2}(n) &= \sin^{-1}\left[ \frac{1}{n}\sin\theta_{1}\right] \\
\theta_{3}(n) &= 30 + \theta_{2}(n) \\
\theta_{4}(n) &= \sin^{-1}\Big[n\sin\theta_{3}(n)\Big] \\
\beta(n) &= 90 - \theta_{4}(n)
\end{align}
$$

![center|500](../9.%20Misc/attachments/Pasted%20image%2020240407195844.png)

Where $\theta_{1}$ is the angle of incidence with the left side of the prism. The deviation is therefore
$$
\delta(n) = \theta_{1}+\theta_{4}(n) - 60
$$
I avoid presenting the full expression as it is complex and does not provide additional enlightenment. From previous section we have the refractive index as a function of wavelength, let us then use the dispersion relation and find the deviation as a function of wavelength.
$$
\delta(\lambda) = \theta_{1}+\theta_{4}(\lambda) - 60
$$

![center|600](../9.%20Misc/attachments/Pasted%20image%2020240407204125.png)

The plot above, of the deviation angle (in radians) as a function of wavelength (in micrometers), for various incident angles.

> [!QUESTION] Question 3c
> If you draw the deviation angle versus the incidence angle (from the left side on the air-prism interface) you'll find an angle where minimum deviation exists.  Find the expression for the angle of minimum deviation and explain how it is possible to measure the refractive index of the prism from measurement of this angle. 

![center|600](../9.%20Misc/attachments/Pasted%20image%2020240408005535.png)
As instructed, the plot contains an angle for which the deviation is minimal. In order to find that angle analytically we need to take the derivative of the deviation angle with respect to the incident angle and equate to zero.
$$
0 \stackrel{!}{=}\frac{ \partial \delta }{ \partial \theta_{1} } = 1 + \frac{ \partial \theta_{4} }{ \partial \theta_{1} } 
$$
Calculating the RHS of the above is very cumbersome so let us use the following trick
$$
\begin{align}
\sin\theta_{1}&=n\sin\theta_{2}\to\cos\theta_{1}d\theta_{1}=n\cos\theta_{2}d\theta_{2} \\
\sin\theta_{4}&=n\sin\theta_{3}\to\cos\theta_{4}d\theta_{4}=n\cos\theta_{3}d\theta_{3}
\end{align}
$$
We can divide the second row by the first and rearrange to receive

$$
\frac{d\theta_{4}}{d\theta_{1}} = \frac{\cos\theta_{3}}{\cos\theta_{4}} \frac{\cos\theta_{2}}{\cos\theta_{1}} \underbrace{ \frac{d\theta_{3}}{d\theta_{2}} }_{ -1 }
$$
Where the connection between $\theta_{2}$ and $\theta_{3}$, established in previous section, implies that $d\theta_{3} = -d\theta_{2}$. We can now insert this into the derivative of $\delta$, and using Snell's law, arrive at the following expression

$$
\frac{{1-\sin^{2}\theta_{1}^{*}}}{1-\sin^{2}\theta_{4}}= \frac{{n-\sin^{2}\theta_{1}^{*}}}{n-\sin^{2}\theta_{4}}
$$

Where $\theta_{1}^{*}$ is the incident angle for which the minimal deviation occurs. This last expression holds if and only if $\theta_{1}^{*}=\theta_{4}$, which also means that in this case $\theta_{2}=\theta_{3}$. Geometrically, this means that the ray inside the prism is parallel to the base of the triangle. Using simple geometry, we find that the angle for which there is minimal deviation (in the case of an equilateral triangle) is 

$$
\theta_{1}^{*}(n) = \sin^{-1}\left( \frac{n}{2} \right)
$$
We can either use the expression above to find $n$ by measuring the angle of minimal deviation, or alternatively measure the minimal deviation and find $n$ from it as follows

$$
\begin{align}
\delta_{min} &= \theta_{1}^{*}+\theta_{4}-60 \\
&=2\theta_{1}^{*}-60  \\
&=2\sin^{-1}\left( \frac{n}{2} \right) -60 \\ \\
\Rightarrow n & =2\sin\left( \frac{\delta_{min}+60}{2} \right)
\end{align}
$$
> [!QUESTION] Question 3d
> The resolution of the spectrometer is defined by how much the different spectral lines are separated.  With modern spectrometers an array of detectors detects the different wavelengths at different pixels in parallel, thus giving a fast spectroscopy. Try to investigate the resolution of such spectrometer in terms of distance of the detector from the prism, the prism parameters and size of pixels. 

A screen is placed a distance $L$ from the prism. The screen is perpendicular to the ground (and the base of the prism). A ray, coming out of the prism at angle $\gamma=120-\theta_{4}$ relative to the ground, hits the screen at height $y$ away from its original starting point. The relation between all parameters is simply 

$$
\frac{y}{L}=\tan\gamma
$$
in a dispersive medium, a change in the wavelength will result in a change in the height. We can take the differential as follows

$$
\frac{dy}{L} = \frac{1}{\cos^{2}\gamma}\frac{ \partial \gamma }{ \partial \lambda } d\lambda
$$

The resolution of such construction is therefore
$$
\mathcal{R}=\frac{dy}{d\lambda}\Bigg|_{\lambda_{0}} = \frac{L}{\cos^{2}\gamma}\frac{ \partial \gamma }{ \partial \lambda } \Bigg|_{\lambda_{0}} =  \frac{L\cdot D_{\lambda}}{\cos^{2}\gamma}
$$
The larger the height shift for a given wavelength shift, the larger the resolution.
We can tell that the resolution scales linearly with the distance of the screen and the "disperssivity", $D_{\lambda}$, of the prism at a given wavelength
$$
D_{\lambda}\frac{ \partial \gamma }{ \partial \lambda } \propto \frac{ \partial \theta_{4} }{ \partial n } \frac{ \partial n }{ \partial \lambda }  
$$
This analysis assumes that the dispersion of the beam inside the prism in negligible and approximately exits at the same point, and the the spatial separation occurs as the exiting light propagates towards the screen.

![center|600](../9.%20Misc/attachments/Pasted%20image%2020240408124246.png)

# Question 4

> [!QUESTION] Question 4a
> For the system of two components of powers P1 and P2 separated by a distance d as shown in the figure, show that the equivalent power is $$P=P_{1}+P_{2}- \frac{d}{\mu}P_{1}P_{2}$$

The equivalent power of the system can be calculated using the transfer matrix formalism.

$$
\begin{align}
\text{component with power P} &\to \begin{pmatrix}
1 & 0 \\ - P & 1
\end{pmatrix} \\ \text{free propagation of distance d} &\to \begin{pmatrix}
1 & d/\mu \\ 0 & 1
\end{pmatrix}
\end{align}
$$
The transfer matrix describing the entire system is thus
$$
M=\begin{bmatrix}
1 & 0 \\ - P_{1} & 1
\end{bmatrix}
\begin{bmatrix}
1 & d/\mu \\ 0 & 1
\end{bmatrix}
\begin{bmatrix}
1 & 0 \\ - P & 1
\end{bmatrix} = \begin{bmatrix}\displaystyle
1 - \frac{dP_{1}}{\mu} & {\displaystyle\frac{d}{\mu}} \\\displaystyle -\left( P_{1}+P_{2}- \frac{dP_{1}P_{2}}{\mu} \right) &\displaystyle  1-\frac{dP_{2}}{\mu}
\end{bmatrix}
$$
By analogy, the $M_{21}$ component is the equivalent power of the system, so we end up with
$$
P=P_{1}+P_{2}- \frac{d}{\mu}P_{1}P_{2}
$$

> [!QUESTION] Question 4b
> Show that the location of the two principal planes of the equivalent system measured with respect to V1 and V2 respectively are $$\delta' = \frac{n_{1}dP_{2}}{\mu P} \quad\quad \delta = -\frac{n_{2}dP_{1}}{\mu P}$$

In the figure below, a general imaging system with refractive indices $n_{1}$, $\mu$ and $n_{2}$ respectively from left to right.

![center|800](../9.%20Misc/attachments/Pasted%20image%2020240409020749.png)

A ray coming from the left, parallel to the optical axis $\theta_{1}=0$ enters the system at height $y_{1}$ and exits at height $y_{2}$ with angle $\theta_{2}$ is described by the general ABCD matrix as follows
$$
\begin{pmatrix}
y_{2} \\ n_{2}\theta_{2}
\end{pmatrix} = \begin{pmatrix}
A & B \\ C &  D
\end{pmatrix}\begin{pmatrix}
y_{1} \\ 0
\end{pmatrix}
$$
The back focal point **F**, is the intersection of the outgoing ray with the optical axis. The back principle plane **H**, is the intersection of the continuations of the entering and exiting rays. We begin be calculating the following distances
$$
\begin{align}
VF &= \frac{y_{2}}{\tan\theta_{2}}\approx \frac{y_{2}}{\theta_{2}} = n_{2} \frac{A}{C} \\
HF &= \frac{y_{1}}{\tan\theta_{2}}\approx \frac{y_{2}}{\theta_{2}} = n_{2}\frac{1}{C}
\end{align}
$$
The distance from the back principle plane from the vertex **HV** is
$$
\begin{align}
\delta \equiv HV &= HF-VF  \\
&= \frac{n_{2}}{C}(1-A) = -d\left( \frac{n_{2}P_{1}}{\mu P} \right)
\end{align}
$$
Similarly, for the front principle plane we consider a ray with an analogous trajectory as illustrated in the figure below

![center|800](../9.%20Misc/attachments/Pasted%20image%2020240409021101.png)
It can be described using the ABCD formalism as such
$$
\begin{pmatrix}
y_{2} \\ 0
\end{pmatrix} = \begin{pmatrix}
A & B \\ C &  D
\end{pmatrix}\begin{pmatrix}
y_{1} \\ n_{1}\theta_{1}
\end{pmatrix}
$$
the relevant distances are
$$
\begin{align}
V'F' &= \frac{y_{1}}{\tan\theta_{1}}\approx \frac{y_{1}}{\theta_{1}} = -n_{1} \frac{D}{C} \\
H'F' &= \frac{y_{2}}{\tan\theta_{1}}\approx \frac{y_{2}}{\theta_{1}} = -n_{1}\left( \frac{D}{C}A-B \right)
\end{align}
$$
The distance from the back principle plane from the vertex **H'V'** is
$$
\begin{align}
\delta' &\equiv H'V'  \\
&= H'F'-V'F'=\dots=d \left( \frac{n_{1}P_{2}}{\mu P}  \right)
\end{align}
$$
Where the algebra here was more cumbersome and is therefore not presented. Note that I switched between conventions, the primed cardinal points are the frontal points and vice versa.

<div style="page-break-after: always;"></div>


> [!QUESTION] Question 4c
Based on the above choose two thick lenses from one of the catalogues of optics companies such as Thorlabs, Edmunds Optics, Newport, etc, and design a microscope system (either in transmission or reflection modes) from two such lenses.  If additional lenses are needed for the illumination then feel free to add them. 
>- First draw the lenses and their cardinal points as given by the manufacturer. 
>- Find the cardinal points of the equivalent system and draw the equivalent system. 
>- Draw three rays connecting one off axis point on the object to the image point. 
>- What is the magnification, and the depth of field obtained? 
>- Locate the aperture and field stops in the illumination path.
>- Calculate the optical invariant.
>- Calculate the light intensity in the image plane (normalized to the input flux).

Below are the two lenses picked from the Thorlabs catalog. 
![center](../9.%20Misc/attachments/Pasted%20image%2020240411190931.png)
An this is a qualitative schematic of the system
![center|1100](../9.%20Misc/attachments/Picture1.png)
For an image to form, all rays leaving a point $y_{1}$ on an object should converge at a single point $y_{2}$ regardless of emission angle. For a general optical system described by an ABCD matrix, we can impose the imaging criterion as follows

$$
\begin{align}
\begin{bmatrix}
y_{2} \\ n\theta_{2}
\end{bmatrix} &= \left(\overbrace{ \begin{bmatrix}
1 & s'/n \\
0 & 1
\end{bmatrix} }^{ \text{image}}
\underbrace{ \begin{bmatrix}
A & B \\
C & D \end{bmatrix} }_{ \text{system} }
\overbrace{ \begin{bmatrix}
1 & s/n \\
0 & 1
\end{bmatrix} }^{ \text{object} }\right)\begin{bmatrix}
y_{1} \\
n\theta_{1}
\end{bmatrix} \\ \\ &=
\underbrace{ \begin{bmatrix}
A+s'C  & (A+s'C)s + B+s'D  \\
C & Cs+D
\end{bmatrix} }_{ \Large T }\begin{bmatrix}
y_{1} \\
n\theta_{1}
\end{bmatrix}\end{align}
$$
Where $n$ is the RI of the ambient medium, which is taken to be $n=1$ in the second step. For imaging to occur $T_{12}$ has to vanish. From this we can extract the general formula for the image given the object position (both with relation to the entrance and exit vertices of the system)
$$
\boxed{s' = - \frac{B+As}{D+Cs}}
$$
using the above, with $T_{12}=0$ it is easy to see that the magnification is simply 
$$
\boxed{M=\frac{y_{2}}{y_{1}}=T_{11}=-A\left( \frac{B+As}{D+Cs} \right)}
$$
A ray traveling parallel to the optical axis $(\theta_{1}=0)$ passes through the system (ABCD) and crosses the optical axis $(y_{2}=0)$ at a distance $F'$ away from the **back vertex** of the system.
$$
\begin{align}
\begin{bmatrix}
\cancelto{0}{ y_{2} } \\ n\theta_{2}
\end{bmatrix} &= \left(\overbrace{ \begin{bmatrix}
1 & F'/n \\
0 & 1
\end{bmatrix} }^{ \text{focal point}}
\underbrace{ \begin{bmatrix}
A & B \\
C & D \end{bmatrix} }_{ \text{system} }
\right)\begin{bmatrix}
y_{1} \\
n\cancelto{0}{ \theta_{1} }
\end{bmatrix} \\ \\ \Longrightarrow \begin{bmatrix}
0 \\ n\theta_{2}
\end{bmatrix}&= y_{1}\begin{bmatrix}A+\frac{CF'}{n} \\C

\end{bmatrix}
\end{align}
$$
The **back focal point** of the system is therefore give by
$$
\boxed{F' = -n \frac{A}{C}}
$$
The **front focal plane** of the system is calculated by considering a ray that leaves the optical axis $(y_{1}=0)$ at an angle $\theta_{1}$, propagates $F$ distance, enters the system and leaves at height $y_{2}$ parallel to the optical axis $(\theta_{2}=0)$

$$
\begin{align}
\begin{bmatrix}
y_{2} \\ n\cancelto{0}{ \theta_{2} }
\end{bmatrix} &= \left(
\underbrace{ \begin{bmatrix}
A & B \\
C & D \end{bmatrix} }_{ \text{system} }\overbrace{ \begin{bmatrix}
1 & F/n \\
0 & 1
\end{bmatrix} }^{ \text{focal point}}
\right)\begin{bmatrix}
\cancelto{0}{ y_{1} } \\
n\theta_{1}
\end{bmatrix} \\ \\ \Longrightarrow \begin{bmatrix}
y_{2} \\ 0
\end{bmatrix}&= n\theta_{1}\begin{bmatrix}B+\frac{AF}{n} \\ D+\frac{CF}{n}

\end{bmatrix}
\end{align}
$$
$$
\boxed{F = -n \frac{D}{C} }
$$
It can also be shown that the distance between the back (front) principle plane and the back (front) vertex of the system is given by

$$
\boxed{\delta= F\left( \frac{1}{D}-1 \right) \quad \delta'=F'\left( \frac{1}{A}-1 \right)}
$$
By calculating the transfer matrix of the system based on the Thorlab's provided specifications we can use the boxed equations in this section to find the most important properties about the system.

<div style="page-break-after: always;"></div>


# Question 5
> [!QUESTION] Question 5a
> A light ray is incident at an angle $\theta_{i}$ in the $xz$ plane from air on polluted water so that the pollution concentration is decreasing with the depth $x$ in the water. The refractive index as a result is $$n=n_{0}(1-\beta x)$$ with $n_{0} = 1.335$ as the surface of the water. Using the Eikonal equation, calculate the equation of the ray pathinside the water for different values of $\beta$.

The ray equation, under the **paraxial approximation** $(s\approx z)$ and in vector notation can be written as follows
$$
n \frac{d^{2}}{dz^{2}}\begin{bmatrix}
x \\ y \\ z
\end{bmatrix} = \begin{bmatrix}
\partial_{x}n \\ \cancelto{0}{ \partial_{y}n } \\ \cancelto{0}{ \partial_{z}n }
\end{bmatrix}
$$
We're left with an equation for the $x$ component which upon solving, will give us the trajectory of the ray in the $xz$ plane.

$$
\frac{d^{2}x}{dz^{2}} = \frac{1}{n} \frac{dn}{dx} \approx -\frac{1}{n_{0}} \frac{dn}{dx} = \beta
$$

The approximation in the above assumes that $x$ is small which is a given when working in the regime of paraxial rays. This simplifies the equation dramatically and allows it to be solved analytically

$$
\begin{align}
\frac{dx}{dz}&=\frac{dx}{dz}{\bigg|}_{z=0} \beta z  \\
&= \tan(\theta_{i})+\beta z
\end{align}\quad\quad \Longrightarrow \quad\quad\begin{matrix}
x(z) &= x\big|_{z=0} + \tan(\theta_{i})z + \frac{\beta z^{2}}{2} \\
&=x_0 + \tan(\theta_{i})z + \frac{\beta z^{2}}{2}
\end{matrix}
$$
Let us plot the different trajectories resulting from different parameters of the problem
![center|700](../9.%20Misc/attachments/Pasted%20image%2020240416140302.png)
The physics is not too far from that of the Mirage phenomenon shown in class. The ray experiences a growing RI value as it delves deeper into the water, and as a result its angle of attack shrinks until it changes sign. 

<div style="page-break-after: always;"></div>


> [!QUESTION] Question 5b
> Calculate the maximum depth that the ray can penetrate as a function of  $\beta$.

We can find the minimum depth of the ray by simply equating the $dx/dz$ equation above to zero. This yields a minimal $z_m$ value of

$$
z_{m} = - \frac{\tan(\theta_{i})}{\beta}
$$

Which in turn gives a minimal depth $x_{m}$ of

$$
x_{m} = x_{0} - \frac{\tan^{2}(\theta_{i})}{\beta}
$$
![center](../9.%20Misc/attachments/Pasted%20image%2020240416142348.png)

It is clear that the minimal depths changes more drastically in smaller ranges of $\beta$ as is evident from the equation itself, in the limit that $\beta\to 0$ we get $x_{m}\to -\infty$. When $\beta=0$ there is no variation in the refractive index, and therefore there is no change in the linear momentum of the ray, which means that if it has momentum in the -x direction it will remain constant and the ray will forever decrease in height towards $-\infty$.

<div style="page-break-after: always;"></div>

> [!QUESTION] Question 6a
> Give a short description of the different types of zoom lenses

Zoom lens is essentially a collection of lenses that change their position relative to one another in order to change their focal length and magnification while keeping the the object and image planes constant. The lenses in a zoom ensemble are usually divided into two groups, a **focal group** with a total positive optical power the focuses the beam of light, and an **afocal group** with zero total optical power that controls the overall size of the beam. Such a generic system can be viewed in the illustration below

![center|700](../9.%20Misc/attachments/Pasted%20image%2020240425224831.png)

The afocal group consists of a stationary lens of positive power and two mobile units of negative and positive powers. At any point in time the system is arranged such the the total power of the system is zero. By shifting the position of the middle negative lens and the first positive lens (L1 and L2) such that the 3-lens system remains afocal, the width of the beam changes and consequently the total magnification of the system

![center|400](../9.%20Misc/attachments/Pasted%20image%2020240425225912.png)
The figure above illustrates how the beam expands when the central lens is closer to the first, and how it shrinks when the central lens is closer to the last. The first lens also moves to compensate for the second and make sure that the total optical power is zero. Since the afocal group has zero power it does not affect the back focal length, only the magnification. Zoom lenses are usually constructed in a such a way that the image plane remains in a constant distance form the back focal plane of the system.

> [!QUESTION] Question 6b
> Select one of the types you mentioned and choose appropriate lenses from
Thorlabs or Edmunds Scientific or others to design such a zoom lens.

Let us investigate the afocal group. We know that it should satisfy total zero optical power, this condition, imposed on its ABCD matrix means that the angle of incidence $\theta_{1}$ should always equal the exiting angle $\theta_{2}$ independent of entrance height
$$
\begin{pmatrix}
y_{2} \\ \theta_{2}
\end{pmatrix} = \begin{pmatrix}
A & B \\ C & D
\end{pmatrix}\begin{pmatrix}
y_{1} \\ \theta_{1}
\end{pmatrix}
$$
The equation relating the angles is given by

$$
\theta_{2} = Cy_{1}+D\theta_{1}
$$
Independence of entrance height means $C=0$, and for the angles to be equal means that $D=1$. Let us consider a system of three such lenses, L1 has optical power $P_{1}$ a distance $d_{1}$ from it L2 has a negative optical power $P_{2}$ and a distance $d_{2}$ from it L3 has optical power $P_{3}$. Such a system has the following ABCD matrix

$$
\begin{pmatrix}
A & B \\ C  & D
\end{pmatrix}=\begin{pmatrix}
1 & 0 \\ -P_{3} & 1
\end{pmatrix}\begin{pmatrix}
1 & d_{2} \\ 0 & 1
\end{pmatrix} \begin{pmatrix}
 1 & 0 \\ -P_{2} & 1
\end{pmatrix}\begin{pmatrix}
1 & d_{1} \\ 0 & 1
\end{pmatrix}\begin{pmatrix}
1 & 0 \\ -P_{1} & 1
\end{pmatrix}
$$
Finding $D$ and $C$ and enforcing the above constraints will provide us the the proper power and distance ratios that would satisfy an afocal system.


# Bibliography
[1] Imaging Principles and Optical Components - Ibrahim Abdulhalim
[2] Optical Waves in Layered Media - Pochi Yeh
[3] Optics - Eugene Hecht

