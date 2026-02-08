#note #condensed-matter 

___
In the interaction between electromagnetic fields and matter, fields are changed by matter and matter is changed by the fields. In this article we take the narrower, yet robust, view of how the fields are effected by matter - more specifically electromagnetic **waves**. By waves we consider any electromagnetic disturbance that changes in space and time.
___

The response of matter to electromagnetic radiation is given by its frequency dependent **susceptibility**. The electric displacement, $\mathbf{D}$, inside a medium in the presence of an external electric field $\mathbf{E}$, is

$$
\mathbf{D} = \epsilon_{0}\mathbf{E}+\epsilon_{0}\chi^{(1)}\mathbf{E} + \epsilon_{0}\chi^{(2)}\mathbf{E^{2}}+\dots
$$

For weak perturbations the [Linear Response](Linear%20Response.md) is a good approximation
$$
\mathbf{D}= \epsilon_{0}\mathbf{E}+\overbrace{ \epsilon_{0}\chi \mathbf{E} }^{ \boldsymbol{\mathcal{P}} } = \epsilon_{0}\epsilon_{r} \mathbf{E} \tag{1}\\
$$

The electromagnetic fields induce electric dipoles which together give rise to electric polarization

$$
\boldsymbol{\mathcal{P}}=\sum\limits_{i}q_{i}\mathbf{r}_{i}=-Ne\mathbf{r}\tag{2}
$$

Where $N$ is the number density of induces electric dipoles. These dipoles are essentially electrons and charged ions that are driven from equilibrium by the external field. In the most general case the charges are bound (electrons to cores) and damped (due to interaction with other ions) and therefore behave like damped harmonic oscillators, whose equation is as follows

$$
\frac{d^{2}\mathbf{r}}{dt^{2}} +\gamma \frac{d\mathbf{r}}{dt}  + \omega_{0}^{2}\mathbf{r} = \frac{e}{m_{e}^{*}}\mathbf{E}\tag{3}
$$

- $\omega_{0}$ describes how tightly the electron is bound to the nucleus
- $m^{*}_{e}$ is the electron [[effective mass]]
- $\gamma$ accounts for the electron-phonon collisions (damping)

by considering $(2)$ we can turn $(3)$ into a DE for the polarization

$$
\frac{d^{2}\boldsymbol{\mathcal{P}}}{dt^{2}} +\gamma \frac{d\boldsymbol{\mathcal{P}}}{dt} + \omega_{0}^{2}\boldsymbol{\mathcal{P}} = \frac{Ne^{2}}{m_{e}^{*}}\mathbf{E}\tag{4}
$$

For incoming **monochromatic** electric wave of the form $\mathbf{E} = \mathbf{E}_{0}\exp[i(kx-\omega t)]$ the solution is

$$
\boldsymbol{\mathcal{P}}= \epsilon_{0}\underbrace{  \frac{-{Ne^{2}}/{\epsilon_{0}m^{*}_{e}}}{(\omega^{2}_{0}-\omega^{2}-i\gamma \omega)} }_{ \chi(\omega) } \mathbf{E}\tag{5}
$$
# Bound Electrons (Lorentz Model)
We have found an expression of the susceptibility contribution of bound electrons (with binding strength of $\kappa=\sqrt{ \omega_{0}/m^{*}_{e} }$ ). The relative-permittivity is therefore

$$
\boxed{\epsilon_{\small L}(\omega) = 1+\frac{\omega_{p}^{2}}{\omega_{0}^{2}-\omega^{2}-i \gamma \omega} }
$$

where the following is known as the **plasma frequency**

$$
\omega_{p}^{2} = \frac{Ne^{2}}{m_{e}^{*}\epsilon_{0}} \tag{6}
$$

The $L$ subscript indicates that this is the Lorentz permittivity.
# Free Electrons (Drude Model)
Since $\omega_{0}$ describes how tightly an electron is bound to its nucleus. In the limit of free electrons simply $w_{0}\to 0$ and we get the [Drude Model](Drude%20Model.md)

$$
\boxed{\epsilon_{\scriptsize D}(\omega) = 1-\frac{\omega_{p}^{2}}{\omega^{2}+i \gamma \omega} }
$$

Where the $D$ stands for Drude and indicates the permittivity of free electrons.
$$
\epsilon_{D} = \epsilon_{\infty}- \frac{1}{\left( \frac{\omega}{\omega_{p}} \right)^{2}+i\left( \frac{\omega}{\omega_{p}} \right)\left( \frac{\gamma}{\omega_{p}} \right)}\equiv\epsilon_{\infty} - \frac{1}{x(x+ia)}
$$

$$
\epsilon_{D} = \epsilon_{\infty}- \frac{\left( \frac{\lambda}{\lambda_{p}} \right)^{2}}{ 1 +i\left( \frac{\lambda}{\lambda_{p}}\right)\left( \frac{\lambda_{p}}{\lambda_{\gamma}} \right)} \equiv \epsilon_{\infty} - \frac{y^{2}}{1+i\left( \frac{y}{b} \right)}
$$



![[../9. Misc/attachments/Pasted image 20230718123112.png|center]]

## Connection to Conductivity

$$
\begin{align*}
\nabla \times \mathbf{H}&=  \frac{ \partial \mathbf{D} }{ \partial t }+\mathbf{J}\\
&= i\omega \mathbf{D} + \sigma \mathbf{E}\\
&= i\omega \left(\epsilon + \frac{\sigma}{i\omega}\right) \mathbf{E}\\
&= i\omega \epsilon_{c} \mathbf{E}\\
\end{align*}
$$

$$
\sigma(\omega)=\frac{\sigma_{0}}{1+i\omega \tau}
$$

# Refractive Index
Permeability relates to the refractive index in the following way
$$
n=\sqrt{\epsilon_{r} \mu_{r} }\approx \sqrt{ \epsilon_{r} } = \sqrt{ 1+\chi } \tag{8}
$$

$$
\begin{align*}
n' &= \sqrt{ \frac{1+\chi}{2}\left( \sqrt{ 1+ \frac{2\chi'^{2}}{(1+\chi)^{2} }}+1 \right) }\\
n'' &= \sqrt{ \frac{1+\chi}{2}\left( \sqrt{ 1+ \frac{2\chi'^{2}}{(1+\chi)^{2} }}-1 \right) }
\end{align*}
$$

> [!Desmos]- Frequency dependent refractive index
> 
> <center><iframe src="https://www.desmos.com/calculator/g0q7it9nm5?embed" width="500" height="500" style="border: 1px solid #ccc" frameborder=0></iframe></center>

Inside a medium, the wavevector becomes

$$
k \to k_{0}n= k_{0}\sqrt{ \epsilon }\equiv \beta-i \frac{\alpha}{2}
$$

So that a plane wave going through said medium experiences both a phase shift (refraction) and attenuation (gain/absorption).

$$
\psi \propto \exp(-ikx)=\exp(-i\beta x)\exp\left(- \frac{\alpha}{2}x \right)
$$

$$
I \propto |\psi|^{2} \propto \exp(-\alpha x)
$$

> [!NOTE]- Kramers-Kronig Relations
> $$\begin{align*}
> \chi'(\nu)&= \frac{2}{\pi} \int\limits_{0}^{\infty} \frac{s \chi''(s)}{s^{2}-\nu^{2}} \, ds\\
> \chi''(\nu)&= \frac{2}{\pi} \int\limits_{0}^{\infty} \frac{\nu \chi'(s)}{\nu^{2}-s^{2}} \, ds
> \end{align*}$$
> This inherent relation between the real and imaginary part of the susceptibility reveal that the existence of dispersion $\chi'$ in a medium necessarily implies the existence of absorption $\chi''$ in it (however slight).

# Epsilon Near Zero (ENZ)
$$\epsilon(\omega) = \epsilon_{\infty} - \frac{\omega_{p}^{2}}{w^{2}+i\omega \gamma} = \epsilon_{\infty} - \frac{1}{x(x+ia)}$$
$$\epsilon(\omega)' = \epsilon_{\infty} - \frac{1}{x^{2}+a^{2}}$$
$$x_{\text{ENZ}} = \sqrt{ \frac{1}{\epsilon_{\infty}}-a^{2} }\quad \Rightarrow \quad \omega_{\text{ENZ}} = \omega_{p}\sqrt{ \frac{1}{\epsilon_{\infty}}-\left( \frac{\gamma}{\omega_{p}} \right)^{2} }$$


# References

Optics, Light and Lasers (chapter 7)
Nanoscale Light Matter Interaction (chapter 4)

$$
\begin{align}
\exp{(ikx)}&= \exp\Big(ik_{0}(n'+in'')x\Big)\\
&= \exp\Big(ik_{0}n'x\Big)\exp\Big(-k_{0}n''x)\Big)\\
&= \exp(ik_{0}n'x)\exp\left( -\frac{x}{\delta_{s}} \right)
\end{align}
$$

$$
\delta_{s} = \frac{1}{k_{0}n''}=\frac{c_{0}}{\omega n''(\omega)} = \frac{c_{0}}{\omega_{p}xn''(x)}
$$

$$
\boxed{\epsilon(\omega) = 1 - \frac{(\omega_{p}^{2})_{cond}}{\omega^{2}+i\gamma_{e}\omega} + \sum\limits_{j} \frac{(\omega_{p}^{2})_{val , \ j }}{\omega_{0, \ j}^{2}-\omega^{2}+i\gamma_{j}\omega} }
$$

$$
\omega_{p}^{2} = \frac{Ne^{2}}{\epsilon_{0}m^{*}_{e}}
$$

Where $N$ is the number of electrons in the band, and $m^{*}_{e}$ is the electron's effective mass in the band.


___
# From older note

electric $(\mathbf{E})$ and magnetic $(\mathbf{H})$ fields induce electric polarization $(\mathbf{P})$ and magnetization $(\mathbf{M})$ inside materials
$$\begin{align}
\mathbf{D}&=\epsilon_{0}\mathbf{E}+\mathbf{P}&\approx \epsilon_{0}(1+\chi)\mathbf{E}\equiv \epsilon \mathbf{E} \\
\mathbf{B}&=\mu_{0}\mathbf{H}+\mu_{0}\mathbf{M} &\approx \mu_{0}(1+\chi_{m})\mathbf{H}\equiv \mu \mathbf{H}
\end{align}$$
While the approximation above holds for weak perturbations where the linear response is prominent. Most generally, there can be electric response induced by a magnetic field and vice versa given by
$$\begin{align}
\mathbf{D} &= \epsilon \mathbf{E} + \xi \mathbf{ H} \\
\mathbf{B} &= \mu \mathbf{H} +\zeta \mathbf{E} 
\end{align}$$
The so called *constitutive relations* in which the cross relations are usually neglected due to their value being OOMs smaller.

# Electric response
Most generally, the bulk of a material is both inhomogeneous and anisotropic in response to electromagnetic radiation. Such interaction, therefore, varies with position inside the material, and with relative orientation between the material and the polarization of light.
$$
D_{i}(\omega,\mathbf{r}) = \varepsilon_{ij}(\omega,\mathbf{r})E_{j}
$$
The permittivity in its most general form $\varepsilon_{ij}(\omega,\mathbf{r})$ is a tensor field with specific spectral response.
# Time Domain
Given the frequency response of the function in frequency domain $\epsilon(\omega)$ we can find the EM response as a function of time by taking the [Fourier transform](Fourier%20Transform.md)

$$
\mathbf{D}(t) = \int\limits_{-\infty}^{\infty}\epsilon(\omega)\hat{\mathbf{E}}(\omega)e^{-i\omega t}  \, d\omega 
$$
using the [[convolution theorem]] 
$$\begin{align*}
\mathbf{D}(t) &= \mathcal{F}[\hat{\mathbf{D}}(\omega)]\\ \\
&=\mathcal{F}\big[\epsilon(\omega)\hat{\mathbf{E}}(\omega)\big] \\
&=  \mathcal{F}\big[\epsilon(\omega)\big]*\mathcal{F}\big[\hat{\mathbf{E}}(\omega)\big]\equiv \int\limits_{-\infty}^{t} R(\tau)\mathbf{E}(t-\tau) \, d\tau 
\end{align*}$$
$R(t)$ is called the *memory function*. In essence, the convolution above quantifies how much the response $R(\tau)$ at time $\tau$ is effected by the field at time $t-\tau$ which is $E(t-\tau)$.

___
# Recap with Yonatan
## Response of Matter to Light
Up until now we talked in time domain $E(t)$, but for the description of response it is more natural to work in the frequency domain $\hat{E}(\omega)$. 

For the response of materials we need to introduce **6 new quantities**
$$\begin{align*}
\hat{\mathbf{D}}(\omega) &= \epsilon(\omega)\hat{\mathbf{E}}(\omega) + \zeta(\omega) \hat{\mathbf{H}}(\omega)\\
\hat{\mathbf{B}}(\omega)&= \mu(\omega)\hat{\mathbf{H}}(\omega)+\xi(\omega)\hat{\mathbf{E}}(\omega)
\end{align*}$$
- $\mathbf{E}$ and $\mathbf{H}$ are the electric field and magnetic fields.
- $\mathbf{D}$ is the **electric induction** (electric response)
- $\mathbf{B}$ is the **magnetic induction** (magnetic response)

- $\Large\epsilon$ is the **electric permittivity** (electric response coefficient)
	- $\epsilon(\omega) = \epsilon_{0} \epsilon_{r}(\omega)$
- $\large \mu$ is the **magnetic permeability** (magnetic response coefficient)
	- $\mu(\omega) = \mu_{0} \mu_{r}(\omega)$
	- $\mu_{r}(\omega)\approx 1$ for optical frequencies
- $\large\zeta$ and $\large\xi$ are the **magneto-electric coupling coefficients**
	- usually 6-9 OOM smaller than the other response coefficients.
	- [constitutive relations](https://en.wikipedia.org/wiki/Constitutive_equation)

When working in the limits of $\zeta, \xi\ll{1}$ and $\mu \approx 1$ the equations for the displacement field and the magnetic induction reduce to 
$$\begin{align*}
\hat{\mathbf{D}}(\omega) &= \epsilon(\omega)\hat{\mathbf{E}}(\omega)\\
\hat{\mathbf{B}}(\omega)&= \mu_{0}\hat{\mathbf{H}}(\omega)
\end{align*}$$
Once we have the response of the material in the frequency domain, we can transform back to the time domain with a [Fourier Transform](Fourier%20Transform.md)
$$\mathbf{D}(t) = \int\limits_{-\infty}^{\infty}\epsilon(\omega)\hat{\mathbf{E}}(\omega)e^{-i\omega t}  \, d\omega $$
using the [[convolution theorem]] 
$$\begin{align*}
\mathbf{D}(t) &= \mathcal{F}[\hat{\mathbf{D}}(\omega)]\\ \\
&=\mathcal{F}\big[\epsilon(\omega)\hat{\mathbf{E}}(\omega)\big] \\
&=  \mathcal{F}\big[\epsilon(\omega)\big]*\mathcal{F}\big[\hat{\mathbf{E}}(\omega)\big]\equiv \int\limits_{-\infty}^{t} R(\tau)\mathbf{E}(t-\tau) \, d\tau 
\end{align*}$$
$R(t)$ is the "memory function" which describes the "memory" of the . Above, the convolution above integrates over times $\tau$ and quantifies how much the response at time $\tau$ which is $R(\tau)$ is effected by the field at time $t-\tau$ which is $E(t-\tau)$.

The response function is usually of the form
$$R(\tau)=e^{-\frac{\tau}{\tau_{2}}}\sin\left( \frac{\tau}{\tau_{1}} \right)\theta(\tau)$$
Where the $\theta(\tau)$ is a Heaviside step function that "turns on" at a time $0$.

## Two limits
We consider $\mathbf{D}(t)$ at two limiting ends
1. **non-dispersive medium** - $\epsilon(\omega) \to\epsilon\approx\text{const}$
	-  response is instantaneous (delta after Fourier)
2. **dispersive medium but illuminated with monochromatic wave** - 

## Maxwell Equations In Matter
$$\nabla \times \mathbf{H} = \frac{ \partial \mathbf{D} }{ \partial t } + \mathbf{J}_{ext} $$

> [!NOTE] Title
> $$\oint\limits_{S=\partial V} \mathbf{E}\cdot d\mathbf{\mathcal{S}}$$

 $$\begin{align*}
\epsilon_{0}\oint\limits_{\mathcal{S}=\partial \mathcal{V}} \mathbf{E}\cdot d\mathbf{\mathcal{S}} = Q_{\text{en}} = Q_{f}+Q_{b} &= \int\limits_{\mathcal{V}} (\rho_{f}+\rho_{b})  \, d \mathcal{V} \\
\epsilon_{0}\nabla \cdot \mathbf{E} &= \rho_{f}+\rho_{b}
\end{align*}$$
$$\rho_{b}\equiv -\nabla \cdot \mathbf{P}$$
$$\nabla \cdot(\epsilon_{0}\mathbf{E} +\mathbf{P}) \equiv \nabla \cdot \mathbf{D} = \rho_{f} $$

