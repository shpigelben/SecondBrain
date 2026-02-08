Ben Shpigel
204389449
# Q1.a - Airy Function Derivation
Consider the multiple transmissions and reflections of a light coming from a medium with a refractive index $n_{1}$, incident on a thin film of thickness $d$ with refractive index $n_{2}$ that lies on a substrate of $n_{3}$. The figure below illustrates the behavior of the rays.

![center|350](../9.%20Misc/attachments/Pasted%20image%2020240116183652.png)

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

## Q1.b - Fabry Perot Interferometer
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

![center|700](../9.%20Misc/attachments/Pasted%20image%2020240124151800.png)

- It is possible to further control the selection of wanted modes by changing the angle of incidence and shifting the spectrum to the right or left accordingly. 
- The FSR (free spectral range) $\nu_{\scriptsize F}$ describes the separation between two modes of the interferometer.
- The width of the mode bands can be shown to correspond to the ratio between the FSR and the finesse $$
\delta\nu = \frac{\nu_{\scriptsize F}}{\mathcal{F}}
$$ and we've shown that increasing $r$ which consequently increases the finesse results in narrower bands.

## Q1.c - Single Layer of Si3N4
As requested, let us first establish the equivalence of the Abeles matrix method with the result of the airy equation for transmission and reflection from a layer. In the Abeles matrix method we consider the left and right moving waves from each side of the layered structure and then relate the using the appropriate matrices

$$
\begin{align}
\begin{bmatrix} E_{1r}  \\ E_{1l} \end{bmatrix} &= 
\underbrace{ \frac{1}{t_{12}}\begin{bmatrix} 1 & r_{12} \\ r_{12} & 1 \end{bmatrix} }_{ D_{12} }\underbrace{ \begin{bmatrix}
e^{i\phi} & 0 \\ 0 & e^{-i\phi}
\end{bmatrix} }_{ P_{2} }\underbrace{ \frac{1}{t_{23}}\begin{bmatrix} 1 & r_{23} \\ r_{23} & 1 \end{bmatrix} }_{ D_{23} }\begin{bmatrix}
E_{3r} \\ E_{3l}
\end{bmatrix} \\ \\
&=\frac{1}{t_{12}t_{23}}\begin{bmatrix}
e^{i\phi}+r_{12}r_{23}e^{-i\phi} &r_{23}e^{i\phi}+r_{12}e^{-i\phi} \\ r_{12}e^{i\phi}+r_{23}e^{-i\phi} & e^{-i\phi}+r_{12}r_{23}e^{i\phi}
\end{bmatrix}\begin{bmatrix}
E_{3r} \\ E_{3l}
\end{bmatrix}
\end{align}
$$

We assume that no wave is coming from the right (traveling left) in medium 3 so we get the following

$$
\begin{align}
E_{1r} &= \left( \frac{e^{i\phi}+r_{12}r_{23}e^{-i\phi}}{t_{12}t_{21}} \right)E_{3r} \tag{10} \\ \Rightarrow \frac{E_{3r}}{E_{1r}}&= \boxed{t_{13} =\frac{t_{12}t_{23}e^{-i\phi}}{1+r_{12}r_{23}e^{-2i\phi}}}
\end{align}
$$
The transmission field coefficient exactly matches the one received from the Airy derivation. For the reflection coefficient we calculate the second entry

$$
\begin{align}
E_{1l}&= \frac{r_{12}e^{i\phi}+r_{23}e^{-i\phi}}{t_{12}t_{23}}E_{3r} \tag{11}\\
&= \frac{r_{12}e^{i\phi}+r_{23}e^{-i\phi}}{t_{12}t_{23}} \frac{t_{12}t_{23}e^{-i\phi}}{1+r_{12}r_{23}e^{-2i\phi}}E_{1r} \\
\Rightarrow \frac{E_{1l}}{E_{1r}} & = \boxed{r_{13} = \frac{r_{12}+r_{23}e^{-2i\phi}}{1+r_{12}r_{23}e^{-2i\phi}}}
\end{align}
$$
Again, the reflection field coefficient is the same here as the one derived earlier. Using both the Abeles matrix method and the Airy function, the power coefficients are calculated for a $5 \ [\mu\text{m}]$ layer of silicon nitride (Si3N4) for $633 \ \text{[nm]}$ of light at angles of incidence ranging from $0^{\circ}$ to $90^{\circ}$.

![center](../9.%20Misc/attachments/Pasted%20image%2020240128012411.png)

Next, we calculated the coefficients for a constant angle of incidence of  $45^{\circ}$ for wavelengths of $500-600 \ \text{[nm]}$.
![center](../9.%20Misc/attachments/Pasted%20image%2020240128012912.png)
It is clear that the Abeles matrix method perfectly matches the results due to Airy.
## Q1.d - Oscillations with Layer Width
We can find the condition for oscillation as it depends on the layer width through equation $(6)$ derived in section (b)

$$
|t|^{2} = \frac{t_{12}t_{23}}{(1-r_{12}r_{23})^{2} + 4r_{12}r_{23}\sin^{2}(\phi)}
$$
The transmission is periodic in $\phi$ and consequently in $d$ due to the $\sin^{2}(\phi)$ which has a period of $\pi$.
$$
\begin{align}
\sin^{2}(\phi) = \sin^{2}\left( \frac{2\pi n_{2}\cos\theta_{2}}{\lambda}d \right) &\equiv \sin^{2}(\chi d) \\
&=\sin^{2} \Big(\chi(d+D)\Big) \Rightarrow\chi D=\pi m
\end{align}
$$
Therefore the transmission is periodic in $d$ with a period of

$$
D = \frac{\pi}{\chi} = \frac{\lambda m}{2n_{2}\cos{(\theta_{2})}}
$$
In the case where $n_{2}=1.0$ and $\theta=0^{{\circ}}$ we receive the Fabry-Perot condition for interference which is that the width of the layer has to be an integer multiple of half the incident wavelength. Using the parameters of this problem, the period at normal incidence is roughly $D \approx 0.15 \  [\mu m]$. A plot of the transmission spectrum as a function of the layer width unsurprisingly gives us the same result. (It was very unnecessary to plot both p and s polarizations since the distinction between them is moot for normal incidence)
![](../9.%20Misc/attachments/Pasted%20image%2020240129175015.png)
To find the width of a layer one could alternatively write the phase as a function of frequency and search for the period in frequency

$$
\begin{align}
\sin^{2}(\phi) = \sin^{2}\left( \frac{2\pi n_{2}\cos\theta_{2}}{c}d\nu \right) &\equiv \sin^{2}(\eta \  d\nu) \\
&=\sin^{2} \Big(\eta \ d(\nu+\mathcal{V})\Big) \Rightarrow\eta d\mathcal{V}=\pi m
\end{align}
$$
By varying the frequency of incident light and measuring the period of oscillation $\mathcal{V}$  ($\eta$ is known for a given $n_{2}$ and $\theta_{2}$) we can calculate the thickness to be 

$$
d = \frac{\pi m}{\eta\mathcal{V}}
$$
where $m$ is the number of periods measured between two frequency points.
___
# Q2.a - Dispersion Relation of Different Materials
A general form of the wave equation in media that has both bound and free charges is as follows
$$
\nabla^{2}\mathbf{E} = \mu\epsilon_{\scriptsize L} \frac{ \partial^{2} \mathbf{E} }{ \partial t^{2} } + \sigma\mu \frac{ \partial  \mathbf{E} }{ \partial t }
$$

A derivation is provided in the Index. By substituting the solution of a monochromatic plane wave, we receive the following dispersion relation

$$
\begin{align}
k^{2} &= \mu\epsilon\omega^{2} - i\mu\sigma\omega  \\
&= \mu \omega^{2}\left( \epsilon + \frac{\sigma}{i\omega} \right) \\
&\equiv \mu\omega^{2}\Big( \epsilon_{\scriptsize L}(\omega)+\epsilon_{\scriptsize D}(\omega)\Big)
\end{align}
$$

Where we distinguish between the permittivity response of free and bound electrons to the harmonic field. The bound charges are modeled as oscillators bound to the nucleus as we've shown in class (Lorentz oscillator model) and the free electrons are described using the Drude model.

$$
\begin{align}
\epsilon_{\scriptsize L}(\omega) &= \epsilon_{0}\left[ 1 + \sum\limits_{j}\frac{\omega_{p,j}^{2}}{\omega^{2}-\omega_{j}^{2} + i\gamma_{j}\omega} \right] \\ \\
\epsilon_{\scriptsize D}(\omega) &= \epsilon_{0}\left[ \frac{\omega_{p}^{2}}{\omega^{2}+i\gamma\omega} \right]
\end{align}
$$

Where $\omega_{p}$ is the plasma frequency, $\omega_{j}$ is a resonant frequency of the medium, and $\gamma$ is a general damping term that has to do with electron-phonon interaction. There can be several resonant frequencies associated with a plasma frequency and a damping term for each medium. We also used the following definitions for the plasma frequency and AC-conductivity.

$$
\begin{align}
\omega_{p,j} &= \sqrt{ \frac{N_{j}e^{2}}{m_{e}\epsilon_{0}} } \\
\sigma(\omega) &= \epsilon_{0}  \frac{\omega_{p}^{2}}{\gamma-i\omega}
\end{align}
$$

Generally speaking, a perfect metal with no bound electrons (plasma) would be solely described by $\epsilon_{\scriptsize D}$ and insulators would be described using only $\epsilon_{\scriptsize L}$. In practice, metals also have absorption bands due to bound electrons (which is why gold is yellowish for instance), and semi conductors have a small degree of conductivity, so most material will have a combination of the two permittivities.

![center](../9.%20Misc/attachments/Pasted%20image%2020240202173347.png)

From [the provided data base for refractive indices](https://refractiveindex.info/) I chose 3 materials, one from each group. Copper as a metal, fluoride glass as a dielectric and silicon germanium as a semiconductor. Below are the real and imaginary part of their refractive indices.
![center](../9.%20Misc/attachments/Pasted%20image%2020240202204027.png)
The dispersion relation was not provided for the selected materials. Instead of plotting an analytic expression, I downloaded and plotted that data provided by the site. We can see that Copper is highly absorptive and increasing with wavelength. The fluoride glass's extinction is negligible to non existent and even the variation in refractive index is insignificant of large variations of wavelengths. The silicon germanium has large variations in refractive index of relatively small range of wavelengths, especially near the $300 \ [nm]$ mark where absorption also peaks.
## Q2.b - Transmission & Reflection Spectra of Selected Materials
We now examine the transmission and reflection of light at wavelength of $520 [nm]$ for varying angles from air to each of the three material selected in the previous chapter.

![center](../9.%20Misc/attachments/Pasted%20image%2020240202215744.png)

We can notice the existence of Brewster's angle in the fluoride silicon which has only real refractive index (according to the data used), and its absence in the other two cases where the refractive index is complex. Next, we examine the transmission and reflection for the same system at a constant angle of incidence of $45^{\circ}$ for varying wavelengths.

![center](../9.%20Misc/attachments/Pasted%20image%2020240202231522.png)

## Q2.c - Layer of TiO2 on a Substrate of SiGe
Next, we calculate the transmission and reflection (using the Abeles matrix method in Python) of light, incident from air onto a layer of titanium dioxide $5 \ [\mu m]$ thick, deposited on a substrate of silicon germanium (one of the chose materials), at a constant wavelength of $1 \ [\mu m]$ as a function of the incident angle.
![center](../9.%20Misc/attachments/Pasted%20image%2020240205102106.png)
I chose the wavelength to be in a range where the refractive index is real and there's no consequent absorption. It seems like $\text{TiO}_{2}$ absorbs around the $0.2 \ [\mu m]$. Interestingly enough I read that nano particles of $\text{TiO}_{2}$ are used in sunscreen to absorb UV sun rays.

![center](../9.%20Misc/attachments/Pasted%20image%2020240205103138.png)
## Q2.d - Anti Reflective Coating
We again employ the method of Abeles matrices in order to find a coating that will reduce the reflection of light in various regions of the spectrum. I used the method as demonstrated in the book by Pochi Yeh on the optics of periodic media (I included a detailed explanation about it in the index). 

### Periodic Array
We consider the transmission of normally incident light from air to the fluoride glass. As a coating on the fluoride glass we analyze a repeating structure of two materials with refractive indices $n_{a}$, $n_{b}$ and thicknesses $d_{a}$, $d_{b}$  and each layer is described by a matrix $Q_{a}$, $Q_{b}$ respectively. The entire thing can be written as

$$
M = D^{-1}_{1}\Big[ Q_{a}(n_{a},d_{a}) Q_{b}(n_{b},d_{b}) \Big]^{N} D_{3}
$$

Where $D^{-1}_{1}$ is the matrix that represents the interface boundary condition between the air and the first layer, and $D_{3}$ represents the transition from the last layer to the fluoride glass. The repeating structure is taken to the power $N$ which determined how many times this structure repeats. Finally, from $M$ we can infer the power transmission and reflection. After having played with the parameters $n_{a}$, $d_{a}$, $n_{b}$, $d_{b}$ a couple of possible filters have been found. We can see that on the first row are essentially a band-stop and band-pass filters (from left to right), the former reflects light $\approx 400-550 \ [nm]$ while letting the rest of the considered spectrum pass, the latter does exactly the opposite.

![center|600](../9.%20Misc/attachments/Pasted%20image%2020240205223205.png)
On the second row are low-pass and high-pass filters (from left to right), the first allows wavelengths longer than $550 \ [nm]$ to pass, while the second allows the more energetic waves to pass - those with wavelengths lower than $400 \ [nm]$. It is possible to tweak the parameter so that the band of reflection will be wider or narrower, or cover other areas of the spectrum. My investigation was relatively qualitative, but the two main insights I got from the numerical simulation are:
- The further the ratio $n_{a}/n_{b}$ is from $1$, the wider the reflection band
- Moving a band to cover other ranges is best done by changing the thickness of one of the layers.

Finally, I was not able to figure out how to further reduce the oscillatory motion in the transmission bands, I suspect that more layers might be needed. This array might be better used as a reflective coating, even though it is obvious that when designed appropriately, there are vanishing reflections for certain regions, but this is probably not the best design for anti-reflecting coating. Unfortunately time did not permit further exploration.
### Gradual Index Matching
For this attempt I intentionally used a very high refractive index for the substrate. Regardless of whether such material exists naturally or otherwise I wanted to have high impedance mismatch between two media and use a periodic array that gradually matches the indices at the two ends. For a structure of $N$ layers with a total width of $d$ I calculated the transmission matrix, again, using the Abeles method.

$$
M=D^{-1}_{1}\left( \prod_{n=0}^{N}Q_{n}(n_{1}+dn, d/N) \right)D_{3}
$$
Where $Q_{n}$ is the matrix for the $n^{th}$ layer, with refractive index incremented by $dn = \frac{n_{3}-n_{1}}{N}$ and a length $\frac{d}{N}$. In the graphs below we can see in the upper left image, the interface problem with no layer in the middle $(N=0)$ in which the reflection is very large and wavelength independent since there is no interference and the indices are constant. As we insert a single layer in between with $n=2$, we observe the emergence of bands in which reflection drops significantly and the wavelength dependence is somewhat oscillatory.

![center|700](../9.%20Misc/attachments/Pasted%20image%2020240205180346.png)
As we increase the number of gradual layers in between, its apparent that the maximal reflection regions begin to recede from the $\approx 0.42$, and as we reach the very large number, 50, of layers (perhaps unreasonably so)  the maximal reflection drops well below $0.1$ and its average is much closer to $0$. This type of ideal filter can potential reduce reflection of any wavelength, and in the limit of $N\to \infty$ we expect ideal impedance match and zero reflections.

# Q3. Polarizing Beam Splitter Using Layered Coating
Light is incident at a $45^{\circ}$ angle relative to the surface of a BK7 glass. Inspired by the periodic structure simulated in previous exercise, we try to find a parameter configuration that will either transmit p-polarized light and reflect s-polarized light (thereby splitting a beam into two polarizations in different directions) or vice versa. In other words, we wish to find a range of wavelengths for which $T_{p}$ and $R_{s}$ are simultaneously maximal (or $T_{s}$ and $R_{p}$).
![center](../9.%20Misc/attachments/Pasted%20image%2020240206000046.png)
In the figure above, we can see a specific parameter configuration that result in such overlapping maximums (Reflectance of the s-polarized light in black and Transmittance of the p-polarized light in blue). We chose specifically the wavelength of $632.8 \ [nm]$ (indicated by the vertical dashed line) of the widely used HeNe laser. It is apparent that the effective width of this overlap is on the order of a few nanometers, far wider than the spectral width of the HeNe laser which is on the order of a hundredth of a nanometer. It seems that such a structure of $7$ alternating layers would be fit for use in a system that uses HeNe laser as its imaging light source.

# Q4.  Colors in the Bio-world & Filter Design
Let us calculate a generic abeles matrix for a single period of two consecutive layers. The $Q$ matrix for a single layer is calculated as follows (for brevity we calculate Q matrices of s-polarized light)

$$
\begin{align}
Q_{a} &= D_{a}P_{a}(D_{a})^{-1} \\ \\
&= \begin{pmatrix}
1 & 1 \\Y_{a} & -Y_{a}
\end{pmatrix} \begin{pmatrix}
e^{i\phi_{a}} & 0 \\ 0 & e^{-i\phi_{a}}
\end{pmatrix} \frac{1}{2Y_{a}} \begin{pmatrix}
Y_{a} & 1 \\ Y_{a}  & 1
\end{pmatrix} = \dots \\  \\
&= \begin{pmatrix}
\cos\phi_{a}   &  \displaystyle\frac{i}{Y_{a}}\sin\phi_{a} \\ iY_{a}\sin\phi_{a}   & \cos\phi_{a}
\end{pmatrix}
\end{align}
$$
Where $Y_{a}$ is the wave admittance in medium $a$ ($Z_{a}$ - wave impedance would have been used for p-polarized light). For two layers we must multiply two such matrices with one another, so the Abeles matrix for the whole stack would be

$$
Q = Q_{a}\cdot Q_{b} \equiv \begin{pmatrix}
A & B \\ C & D
\end{pmatrix}
$$
Where

$$
\begin{align}
A &= \cos\phi_{a}\cos\phi_{b} - \frac{Y_{b}}{Y_{a}}\sin\phi_{a}\sin\phi_{b}  \\ \\
B &= \frac{i}{Y_{b}}\cos\phi_{a}\sin\phi_{b} + \frac{i}{Y_{a}}\sin\phi_{a}\cos\phi_{b}  \\ \\
C &= iY_{a}\sin\phi_{a}\cos\phi_{b}+iY_{b}\cos\phi_{a}\sin\phi_{b} \\ \\
D &= \cos\phi_{a}\cos\phi_{b} - \frac{Y_{a}}{Y_{b}}\sin\phi_{a}\sin\phi_{b}
\end{align}
$$
Now, the only place where I found an identity for the $N^{th}$ power of a 2X2 matrix was in Yariv and Yeh and is given below

$$
M=\left[\begin{pmatrix}
A & B \\ C & D
\end{pmatrix}\right]^{N} = \begin{pmatrix}
AU_{N-1} - U_{N-2} & BU_{N-1} \\ CU_{N-1} & DU_{N-1}-U_{N-2}
\end{pmatrix}
$$
where 
$$
\begin{align}
U_{N} &= \frac{\sin(N+1)K\Lambda}{\sin(K\Lambda)} \\
K &= \frac{1}{\Lambda}\cos^{-1}\left[ \frac{A+D}{2} \right]  \\
\Lambda &= d_{a} + d_{b}
\end{align}
$$

The reflection coefficient is therefore 
$$
r = \frac{M_{21}}{M_{11}} = \frac{CU_{N-1}}{AU_{N-1}-U_{N-2}}
$$
With the above we have can calculate the reflectance using an analytic expression which is somewhat cumbersome. In the book it shows that the expression can be further simplified, but I haven't managed to replicate that result. We resort to the algorithm I've built for previous sections in order to create a filter that reflects in the range of $1200-2000 \ [nm]$. In the figure below is my best attempt at creating such a filter, parameters included.

![](../9.%20Misc/attachments/Pasted%20image%2020240206021443.png)
Lets investigate how the different polarizations react to an increase in angle. Needles to say that at normal incidence there is no distinction, and the two polarizations present similar reflection spectra. 
![](../9.%20Misc/attachments/Pasted%20image%2020240206024304.png)
At $40^{\circ}$ their distributions become more distinct and we can see that the bands of the p-polarized light are narrower and less prominent.
![](../9.%20Misc/attachments/Pasted%20image%2020240206024444.png)
At $70^{\circ}$ there is no reflection of p-waves since this angle corresponds to the Brewster angle of $n_{a}$ and $n_{b}$. We can also notice that the reflection peaks of the s-waves become slightly more prominent.
![](../9.%20Misc/attachments/Pasted%20image%2020240206024814.png)
Finally, at $83^{\circ}$ of incidence, the p-polarized light is reflected again, and there is hardly any transmission for the s-polarized waves. The reflection spectra will obviously peak for both polarizations as the angle of incidence approaches grazing incidence.
# Index

## I - Wave equation in a medium
We begin by taking the curl of Ampere's law

$$
\begin{align}
\nabla \times \mathbf{E} &= -\frac{ \partial \mathbf{B} }{ \partial t}  \\
\nabla \times (\nabla \times \mathbf{E}) &= - \nabla \times \frac{ \partial  \mathbf{B}}{ \partial t }   \\ \\
&\downarrow \ \{\mathbf{B=\mu\mathbf{H}}\}\\ \\
\nabla( \nabla \cdot \mathbf{E} ) - \nabla^{2}\mathbf{E} &= - \frac{ \partial  }{ \partial t }\Big[  \mu(\nabla \times \mathbf{H})+ \mathbf{H}\times \cancel{ \nabla\mu }\Big]
\end{align}
$$
Instead the curl of the magnetic field we insert Faradays equation, and instead of the divergence of the electric field we insert the charge density according to Gauss. We assume a homogenous magnetic permeability so its gradient vanishes.

$$
\begin{align}
\nabla^{2}\mathbf{E} &=  \mu \frac{ \partial  }{ \partial t} \left[ \frac{ \partial \mathbf{D} }{ \partial t } + \mathbf{J}  \right]  +\nabla\rho \\ \\
&\downarrow \ \{\mathbf{\mathbf{D}=\epsilon\mathbf{E}}\}\\ \\
\nabla^{2}\mathbf{E} &= \mu\epsilon \frac{ \partial^{2} \mathbf{E} }{ \partial t^{2} } + \mu \frac{ \partial  \mathbf{J} }{ \partial t }  +\nabla \rho  \\ \\
&\downarrow \ \{\mathbf{J=\sigma \mathbf{E}}\}\\ \\ 
\nabla^{2}\mathbf{E} &= \mu\epsilon \frac{ \partial^{2} \mathbf{E} }{ \partial t^{2} } + \sigma\mu \frac{ \partial  \mathbf{E} }{ \partial t }
\end{align}
$$

# II - Abeles Matrices
Employing parallel boundary conditions for s-polarized light, we have

$$
\begin{align}
E_{1}=E_{2} \quad &\Rightarrow \quad \quad\quad\quad\quad\quad\quad  E_{1r}+E_{1l}&&=E_{2r}+E_{2l} \\
H_{1x}=H_{2x} \quad &\Rightarrow \quad \sqrt{ \frac{\epsilon_{1}}{\mu_{1}} }(E_{1r}-E_{1l})\cos \theta_{1} &&= \sqrt{ \frac{\epsilon_{2}}{\mu_{2}} }(E_{2r}-E_{2l})\cos \theta_{2}
\end{align}

$$

which can be written in matrix form more compactly as

$$
\underbrace{ \begin{pmatrix}
1  & 1  \\
\sqrt{ \frac{\epsilon_{1}}{\mu_{1}} }\cos\theta_{1}  & -\sqrt{ \frac{\epsilon_{1}}{\mu_{1}} }\cos\theta_{1}
\end{pmatrix} }_{ \large {D_{1}}^{s} }
\underbrace{ {\large\begin{pmatrix}
E_{1r}  \\  E_{1l}
\end{pmatrix}} }_{\large U_{1} } =
\underbrace{ \begin{pmatrix}
1  & 1  \\
\sqrt{ \frac{\epsilon_{2}}{\mu_{2}} }\cos\theta_{2}  & -\sqrt{ \frac{\epsilon_{2}}{\mu_{2}} }\cos\theta_{2}
\end{pmatrix} }_{\large {D_{2}}^{s} }
\underbrace{ {\large\begin{pmatrix}
E_{2r}  \\ E_{2l}
\end{pmatrix}} }_{ \large U_{2} }
$$
Where $D$ are called the dynamic matrices and they describe the light as it leaves an interface or approaches one. The relation between the first and second wave is
$$U_{1}=({D_{1}^{s}})^{-1}D_{2}^{s} \ U_{2}$$
This can be similarly done for p-polarization. We use wave impedance and admittance for brevity
$$
\begin{align}
Y_{j}(\theta_{1},n_{j}) &= n_{j}\cos\theta_{j} \\
Z_{j}(\theta_{1},n_{j}) &=\frac{1}{n_{j}}\cos\theta_{j}
\end{align}
$$
so that the dynamic matrices for both polarizations can be written as such
$$
\begin{align}
{D_{j}}^{s} &= \begin{pmatrix}
1 & 1 \\ Y_{j} & -Y_{j}
\end{pmatrix} \\  \\
{D_{j}}^{p} &= n_{j}\begin{pmatrix}
Z_{j} & Z_{j}  \\ 1 & -1 
\end{pmatrix}
\end{align}
$$
The propagation matrix simply gives the appropriate phase depending on the index of the medium, the direction of propagation and the path it travels in the medium
$$
P_{j}(d) = \begin{bmatrix}
{\large e^{ik_{z,j}d}} & 0 \\ 0 & {\large e^{-ik_{z,j}d}}
\end{bmatrix}
$$
finally, we can write the matrix for a layer sandwiched between two materials
![center|450](../9.%20Misc/attachments/Pasted%20image%2020240610230044.png)
$$
U_{in} = [D_{1}^{-1}Q_{2}D_{3}]U_{out}
$$
and for a layers material
![center](../9.%20Misc/attachments/Pasted%20image%2020240610231547.png)
we might write something like this
$$
U_{in} = \Bigg[ {D_{1}}^{{-1}} \Big( Q_{1}Q_{2} \Big)^{N} D_{1} \Bigg]U_{out} = M \ U_{out}
$$
# References 

1. Pochi Yeh - Optical Waves in Layered Media
2. Yariv and Yeh - Optical Waves in Crystals
3. refractiveindex.INFO