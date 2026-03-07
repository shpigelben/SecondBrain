---
type: concept
discipline:
  - physics
field:
  - electrodynamics
  - optics
---

# Basics
## Intensity
The wave equation for the EM field is given by
$$ \nabla^{2}\mathbf{E}=\frac{\partial^{2} \mathbf{E}}{\partial^{2} z} = \frac{1}{c^{2}}\frac{\partial^{2} \mathbf{E}}{\partial^{2} t} $$
It is easily solved with a plane wave
$$\mathbf{E} = \mathbf{E_{0}} e^{i
 (\omega t - \mathbf{k
 }\cdot\mathbf{r}-\varphi_{0})}\equiv \mathbf{E_{0}}\exp{(\varphi)} \exp{(i \omega t)} $$
 it is useful to recall the following relations
$$|\mathbf{k}| = \frac{2\pi}{\lambda} \quad\quad \omega=2\pi f \quad\quad c =\lambda f$$
> [!NOTE] visible range
> $\lambda \propto 400-780nm$
> $\omega \propto (3.8-7.5)\times 10^{14} Hz$

The intensity of light wave is the only directly measurable quantity of the beam
$$I = \varepsilon_{0}c \braket{E^{2}}_{t} = \varepsilon_{0}c \lim\limits_{T\to\infty}\int\limits_{-T}^{T}|E|^{2}dt = \varepsilon_{0}c {E_{0}}^{2} \frac{1}{2T}\int\limits_{-T}^{T}dt = \frac{1}{2}\varepsilon_{0}c {E_{0}}^{2}$$
The intensity doesn't depend on the frequency of the beam, only its amplitude.
# Interference
The wave equation is a linear PDE, and therefore a superposition of solutions is a solution in and of itself. The phenomenon of two waves superimposed in the same **location** in space is called *interference*. For two monochromatic waves of similar wavelength (or frequency) the superposition looks like
$$\begin{align*}
&\mathbf{E_1} =\mathbf{E_{01}}\exp{(\varphi_{1})} \exp{(i \omega t)} \equiv \mathbf{A_{1}}\exp{(i \omega t)} \\
&\mathbf{E_2} =\mathbf{E_{02}}\exp{(\varphi_{2})} \exp{(i \omega t)} \equiv \mathbf{A_{2}}\exp{(i \omega t)}\\
&\mathbf{E} = (\mathbf{A_{1}}+\mathbf{A_{2}})\exp{(i \omega t)}
\end{align*}$$
The intensity of the superposition is therefore proportional to the modulus square of the new amplitude
$$\begin{align*}
I \propto |\mathbf{A_{1}}+\mathbf{A_{2}}|^{2} &= {A_{1}}^{2} + {A_{2}}^{2} + \mathbf{A_{1}}\cdot \mathbf{A_{2}}\\
&={A_{1}}^{2} + {A_{2}}^{2} + 2A_{1}A_{2}\cos{(\theta)}\exp {i(\varphi_{2}-\varphi_{1})}\\
&= {I_{1}}^{2} + {I_{2}}^{2} + 2\sqrt{I_{1}I_{2}}\cos{(\theta)}\exp{(i\Delta\varphi)}
\end{align*}$$
where $\theta$ is the angle between the two polarizations. For two unpolarized beam, the mean angle 
![interference of plane waves](../4%20Misc/Excalidraw/interference%20of%20plane%20waves.md)

# Coherence
[Coherence - Wikipedia](https://en.wikipedia.org/wiki/Coherence_(physics))
Coherence is the ability of light to interfere. Temporal coherence describes the correlation of the wave with itself at different time instants, and spatial coherence  relates to the mutual correlation of different parts of the same wavefront.

## Temporal Coherence
in a Michelson interferometer, a source beam is split into two daughter beams which are later brought back together to interfere with a measurable difference of optical length $(s_{1}-s_{2})$. The fringes of the interference pattern vanish when this difference exceeds a certain limit of final length $L$ after which, the beams are no longer coherent.
![center|200](../4%20Misc/Attachments/Pasted%20image%2020221029003655.png)


For interference to take place, the phase difference between the superimposed beams should be well defined. The limit of the optical path difference is known as **coherence length**. For waves traveling in a vacuum, we can thus define **coherence time** as
$$\tau = \frac{L}{c}$$
The coherence time happens to be the reciprocal of the spectral width of the source, and so the following relation also holds
$$L = \frac{c}{\Delta f}$$
The narrower that spectral width, the larger the coherence length.
## Visibility
Visibility is a measure of the contrast of an interference pattern. It is given by
$$
V = \frac{I_{max}-I_{min}}{I_{max}+I_{min}} = \frac{2\sqrt{I_{1}I_{2}}}{{I_{1}} + {I_{2}}}
$$
where 

$$
\begin{align*}
I_{max} &= I(\Delta\varphi = 0) = {I_{1}}^{2} + {I_{2}}^{2} + 2\sqrt{I_{1}I_{2}}\\
I_{min} &= I(\Delta\varphi = \pi) = {I_{1}}^{2} + {I_{2}}^{2}
\end{align*}
$$
## Complex Self Coherence
To consider the effect of finite coherence length the complex self coherence $\Gamma(\tau)$ is introduced

$$
\Gamma(\tau)=\braket{E(t+\tau){E}^{^{*}}(t)} = \lim\limits_{T\to\infty} \frac{1}{2T}\int\limits_{T}^{T}E(t+\tau){E}^{^{*}}(t)dt
$$

It is an autocorrelation of $E$, and we make use of its normalized form $\gamma = \frac{\Gamma(\tau)}{\Gamma(0)}$ when factoring in the effect of finite coherence length on the intensity
$${I_{1}}^{2} + {I_{2}}^{2} + 2\sqrt{I_{1}I_{2}}|\gamma|
cos{(\Delta\varphi)}$$
The expression for visibility then becomes
$$V = \frac{2\sqrt{I_{1}I_{2}}}{{I_{1}} + {I_{2}}}|\gamma|$$
For two partial waves with similar intensity the visibility reduces simply to $V=|\gamma|$ 
$$|\gamma|=\begin{cases}
1 &\quad\text{monochromatic light} \\
\in(0,1) &\quad\text{partially coherent} \\
 0 &\quad\text{incoherent}
\end{cases}$$

## Spatial Coherence
For the spatial coherence we use the cross correlation. 
$$\Gamma(r_{1}, r_{2}) = \braket{E(r_{1},t+\tau)E^{*}(r_{2},t)}$$
The normalized cross correlation function is given by$$\gamma (r_{1},r_{2},0) = \frac{{\Gamma(r_{1},r_{2},\tau)}}{\sqrt{ \Gamma(r_{1},r_{1}0)\Gamma(r_{2},r_{2},0) }}$$The special case of $\gamma(r_{1},r_{2},\tau=0)$ is a measure of the correlation between the amplitudes at $r_{1}$ and $r_{2}$ at the same time and is named the *complex degree of coherence*.
==By taking $r_{1}\to r_{2}$ we can also retrieve back the temporal auto correlation. Does that mean that the cross correlation gives a more complete definition of both coherence types?==
#  Fresnel Diffraction
[Fresnel diffraction - Wikipedia](https://en.wikipedia.org/wiki/Fresnel_diffraction)
We consider a case in which a light beam approaches a screen with an obstacle in the way. It can be an opaque sheet with transparent holes through which the beam "passes", or it can be opaque structures in the transparent medium through which the beam travels. In either case, we usually expect shadows of appropriate shape and size to appear on the screen at the end. But in cases where the obstacles are in the scale of the wavelength of the propagating beam, a diffraction pattern can appear. Diffraction can be explained by [[Huygens' Principle]] which states that __every point of a wavefront can be considered a source point for secondary spherical waves, and the wavefront at any other place is the coherent superposition of these secondary waves__.
![700px-Diffraction_geometry.svg](../4%20Misc/Attachments/700px-Diffraction_geometry.svg.png)


The **Fresnel diffraction integral** considers the many point sources of secondary waves at the aperture, and yields an interference pattern $E(x,y,d)$ at a plane, distance $d$ from the source

$$
\colorbox{#2AAAFA}{$E(x,y,d) = \frac{i}{\lambda} \iint\limits_{-\infty}^{+\infty} \underbrace{E(x',y',0)}_{\text{field at the aperture}} \frac{e^{-ikr}}{r}Q dx'dy'$}
$$

$$\boxed{E(x,y,d) = \frac{i}{\lambda} \iint\limits_{-\infty}^{+\infty} \underbrace{E(x',y',0)}_{\text{field at the aperture}} \frac{e^{-ikr}}{r}Q dx'dy'}$$
- The distance between a point in the aperture and a point in the plane of interference is given by $r = \sqrt{(x-x')^{2}+(y-y')^{2}+d^{2}}$, where $d$ is the separation distance in the $z$ axis which is taken to be the axis of propagation.
- $Q$ is called _the inclination factor_ which is an ad hoc correction to the integral which artificially ignores light coming back to the aperture. It is defined as follows $$Q = \frac{1}{2}\Big(\cos{\theta}+\cos{\theta'}\Big)$$ In most practical cases, $Q \approx 1$
## 2.5 Speckles
Speckles are bright spots of interference that appear when a rough surface is illuminated with coherent light (given that the variations of the rough surface are larger in scale than the wavelength of the incident light). Since for all intents and purposes the light intensity fluctuates randomly from the variations of the surface it is represented by a probability distribution function which happens to obey a negative exponential
$$P(I)dI = \frac{1}{\braket{I}}\exp{\left(-\frac{I}{\braket{I}}\right)}$$
# Holography
The process of Holography consists of a coherent light beam that is split. One daughter beam illuminates an object from which it reflects into a photographic plate (object beam). The other daughter beam (reference beam) is redirected to the photographic plate which records the interference pattern of the two beams on its surface - this is the hologram.
![Pasted image 20221030170847](../4%20Misc/Attachments/Pasted%20image%2020221030170847.png)

The object beam is then reconstructed by illuminating the hologram with the reference beam (now called the reconstruction beam).
![Pasted image 20221030170857](../4%20Misc/Attachments/Pasted%20image%2020221030170857.png)

The complex amplitude of the two beams are given by the following
$$\begin{align*}
E_{o}(x,y) = a_{o}(x,y)\exp(i \varphi_{o}(x,y))\\
E_{r}(x,y) = a_{r}(x,y)\exp(i \varphi_{r}(x,y))
\end{align*}$$
the coordinates $x$ and $y$ refer to the 2D surface of the plate, where the two waves interfere with varying intensity give by
$$\begin{align*}
I(x,y) &=|E_{o}(x,y)+E_{r}(x,y)|^{2}\\
&= |E_{r}(x,y)|^{2} + |E_{o}(x,y)|^{2} + 2 \text{Re}\big[{E_{r}(x,y)^{*}E_{o}(x,y)}\big]
\end{align*}$$
The *amplitude transmission*, $h(x,y)$, of the developed photographic plate (or of any other recording media) is proportional to $I(x,y)$
$$h(x,y) = h_{0}+\beta \tau I(x,y)$$
And it is also known as the hologram function.
- $\beta$ slope of the <mark style="background: #FF5582A6;">transmittance-exposure</mark> characteristic of the recording plate
- $\tau$ is the exposure time
- $h_{0}$ is the amplitude transmission of the unexposed plate

For hologram reconstruction, the hologram function has to be multiplied by the complex amplitude of the reference wave
$$\begin{align*}
&E_{r}(x,y)h(x,y) = \\
&\underbrace{ \Big[h_{0}+\beta \tau({a_{r}}^{2} + {a_{o}}^{2})\Big]E_{r} }_{ \text{undiffracted part} } +\underbrace{  \beta \tau {a_{r}}^{2} E_{o} }_{ \text{virtual image} } + \underbrace{ \beta \tau {E_{r}}^{2}{E_{o}}^{*}
 }_{ \text{distorted real image} }\end{align*}$$
Multiplying the reference beam by the entire intensity of the interference pattern in digital holography enhances the visibility of the reconstructed object and helps in separating the object wavefront from the reference wavefront. This process effectively isolates the object information encoded in the interference pattern, making it easier to extract and reconstruct the object's characteristics accurately during the numerical reconstruction process.

# Charged Coupled Devices
In the case of hologram recording, the CCD is a matrix of light sensors that store optical information electrically. CCD imaging is performed in three steps:
1. **light exposure** - The incident light separates charges through the photoelectric effect into individual detectors (pixels)
2. **charge transfer** - The packets of charge within the semiconductor are are transferred to memory cells
3. **Charge to Voltage** conversion and output amplification

# Digital Holography
An object (with a diffusively reflective surface) is placed at distance $d$ from the CCD. The interference of light reflected from the object to the CCD can be calculated using Fresnel integral with $E(x,y) \to h(x,y)E(x,y)$. We also use the conjugate of the wave in order to avoid any distortion to the real image
$$E(x,y,d) = \frac{i}{\lambda} \iint\limits_{-\infty}^{+\infty} h(x',y')E^*_{r}(x',y',0) \frac{e^{-ikr}}{r}Q dx'dy'$$
## Lens Corrections
We can introduce a lens in the numerical reconstruction process that will mimic the eye of an observer. The imaging properties of a lens with focal distance $f$ are considered by a complex factor
$$L(x',y') = \exp \left[ i \frac{\pi}{\lambda f}(x'^{2}+y'^{2}) \right]$$
This lens causes phase aberrations which are compensated by multiplying the reconstructed field by yet another phase factor
$$P(x,y) = \exp \left[ i \frac{\pi}{\lambda f}(x^{2}+y^{2}) \right]$$
The complete Fresnel integral is then given by
$$E(x,y,d) = \frac{i}{\lambda} P(x,y)\iint\limits_{-\infty}^{+\infty} h(x',y')E^*_{r}(x',y',0)L(x',y') \frac{e^{-ikr}}{r}Q dx'dy'$$
 For a magnification by factor of 1, a lens of [[focal length]] $f=\frac{d}{2}$ has to be used
## Numerical Reconstruction
for $x,y,x',y' \ll d$ we can expand $r$
$$\begin{align*}
r &= \sqrt{ (x-x')^{2} + (y-y')^{2}+d^{2}}\\
&\approx d + \frac{(x-x')^{2}}{2d} + \frac{(y-y')^{2}}{2d} + \dots
\end{align*}$$
With an additional approximation for the term in the denominator, the Fresnel integral (without the lens corrections) is
$$\begin{align*}
E(x,y,d) &= \frac{i}{\lambda d} \iint\limits_{-\infty}^{+\infty} h(x',y')E^*_{r}(x',y',0) e^{-ikr}Q \\
&\times \exp{\left[-\frac{\pi}{\lambda d}((x-x')^{2}+(y-y')^{2})\right]} dx'dy'\end{align*}$$
which upon expanding becomes
![Pasted image 20221031233546](../4%20Misc/Attachments/Pasted%20image%2020221031233546.png)
This last term is named **Fresnel Transformation** due to its mathematical similarity with the [[Fourier Transform]]. The *reconstruction formula* includes the long expression above together with the lens corrections becomes
$$\small \begin{align*}
\Gamma(x, y) &= \frac{i}{\lambda d}\exp{\left(-i \frac{2\pi}{\lambda}d\right)}\exp\left[ i \frac{\pi (x^{2}+y^{2})}{\lambda d} \right] \\
&\times \iint\limits_{\infty}^{\infty} E_{r}(x',y')h(x',y')\exp\left[ i  \frac{\pi}{\lambda d}(x'^{2}+y'^{2})  \right]U \exp\left[ i \frac{2\pi}{\lambda d}(xx' + yy') \right]dx'dy'
\end{align*}$$
The following substitutions (the two new variables have units of spatial frequency) are introduced$$\begin{align*}
\nu &\to \frac{x}{\lambda d}\\
\mu &\to \frac{y}{\lambda d}
\end{align*}$$under which the reconstruction formula becomes
$$\begin{align*}
\Gamma(\nu, \mu) &= \frac{i}{\lambda d}\exp{\left(-i \frac{2\pi}{\lambda}d\right)}\exp\Big[ -i \pi \lambda d(\nu ^{2}+\mu^{2}) \Big] \\
&\times \iint\limits_{\infty}^{\infty} \underbrace{ E^*_{r}(x',y')h(x',y')\exp\left[ -i  \frac{\pi}{\lambda d}(x'^{2}+y'^{2})  \right] }_{ \text{integrand} } \\
&\times\exp\left[2\pi i(x' \nu + y'\mu)  \right]dx'dy'
\end{align*}$$
and it appears to be the **two dimensional inverse Fourier transform** of the _integrand_ term (up to a spherical phase factor).
## Digitization
The hologram function is sampled electronically on a $N \times N$ grid with steps $\Delta x$ and $\Delta y$ which constitute the pixel resolution of the recording plate.
$$\begin{align*}
\Delta \nu = \frac{1}{N \Delta x'} \qquad \Delta \mu = \frac{1}{N \Delta y'} \\
\Delta x = \frac{\lambda d}{N \Delta x'} \qquad \Delta y=\frac{\lambda d}{N \Delta y'}
\end{align*}$$
The reconstruction formula now returns a $N \times N$ matrix instead of a 2D scalar function $$ \small \begin{align*}
\Gamma(m,n) &= \frac{i}{\lambda d} \exp\left( - \frac{2\pi d}{\lambda} \right)\exp\left[  i \frac{\pi \lambda d}{N^2}\left( \frac{m^{2}}{\Delta x^{2}} + \frac{n^{2}}{\Delta y^{2}} \right)  \right]\\
&\times \sum\limits_{k=0}^{N-1}\sum\limits_{l=0}^{N-1} \Bigg\{E_{r}(k,l)h(k,l) \exp\left[ i \frac{\pi}{\lambda d}(k^{2}\Delta x^{2}+ l^{2}\Delta y^{2}) \right]\Bigg\} \exp\left[ \frac{2\pi i}{N} (km + \ln) \right]
\end{align*}$$This is an inverse discrete Fourier transform for the term in the curly braces
## Convolution Approach
___
## Suppression of the DC Term

$$I(x,y) = |E_{o} + E_{r}|^{2} = \underbrace{ {a_{o}}^{2} + {a_{r}}^{2} }_{ \text{responsibe for DC} } + 2a_{r}a_{o}\cos(\varphi_{o}-\varphi_{r})$$
The average intensity of all pixels in the hologram matrix is given by
$$\braket{I} = \frac{1}{N^{2}}\sum\limits_{k=0}^{N-1}\sum\limits_{l=0}^{N-1}I\small(k \Delta x, l \Delta y)$$
The intensity with the suppressed DC term is therefore
$$I' = I - \braket{I}$$
and the reconstruction of $I'$ instead of $I$ created an image without the zero order DC term. 
- Another way of achieving the DC suppression is by filtering the hologram matrix with a high-pass filter.
- Subtracting two holograms with different speckle structures is also a valid way of getting rid of the zero order term
# Fast Fourier Transform
[[Fourier Transform|Continuous Fourier transform]] $\to$ digitization$=$discretization $\to$ [[../2. Notes/Discrete Fourier Transform]] $\to$ algorithmic implementation $\to$ [[Fast Fourier Transform]]
# Image Quality
 - shifting the image to the center
 - cropping for unwanted noise
 - running IQA on edited image for different distances

We wish to assess the effect a change in different parameters have on the recorded hologram. For that we require an objective measure of the image quality so that we can conclude whether a certain shift results in a better or worse hologram. Since we don't have a reference image for comparison, we rely on a reference-less algorithm that receives only the image data and return a score which reflects the image quality.

For example, we expect to have better and better score as the optical path difference becomes smaller and smaller.