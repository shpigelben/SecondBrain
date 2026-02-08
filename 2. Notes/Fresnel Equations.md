#note 

- [Field Coefficients](#Field%20Coefficients)
	- [TM (p-polarization) Coefficients](#TM%20(p-polarization)%20Coefficients)
	- [TE (s-polarization) Coefficients](#TE%20(s-polarization)%20Coefficients)
- [Field Conservation](#Field%20Conservation)
- [Power (Energy) Conservation](#Power%20(Energy)%20Conservation)
- [Power Coefficients](#Power%20Coefficients)

# Continuity of Transverse Momentum
$$
\mathbf{E}(\mathbf{r},t)=\begin{cases}
E_{I}e^{i(\mathbf{k}_{I}\cdot \mathbf{r} - \omega t)} + E_{R}e^{i(\mathbf{k}_{R}\cdot \mathbf{r} - \omega t)} \\
E_{T}e^{i(\mathbf{k}_{T}\cdot \mathbf{r} - \omega t)}
\end{cases}
$$
Boundary conditions yield equations of the following form
$$(\dots)\exp({i\mathbf{k}_{I} \cdot \mathbf{r})}+(\dots)\exp({i\mathbf{k}_{R} \cdot \mathbf{r})}=(\dots)\exp({i\mathbf{k}_{T} \cdot \mathbf{r})} \tag{1}$$
Where the amplitudes $(\dots)$ are generally position independent. Since the whole expression should hold true **at the boundary** (for convenience - at $z=0$) the phases should all be equal!
$$
\large\boxed{\mathbf{k}_{I} \cdot \mathbf{r} = \mathbf{k}_{R} \cdot \mathbf{r} = \mathbf{k}_{T} \cdot \mathbf{r}}
$$
Or more explicitly for a boundary that lies perpendicular to the $z$ axis
$$k_{I,x} \ x + k_{I,y} \ y = k_{R,x} \ x + k_{R,y} \ y = k_{T,x} \ x + k_{T,y} \ y$$
since this should hold for all $x$ and $y$ the following should hold as well
$$\begin{align*}
(k_{I})_{x}=(k_{R})_{x}=(k_{T})_{x} \\
(k_{I})_{y}=(k_{R})_{y}=(k_{T})_{y}
\end{align*}$$
which means that all wave vectors lie in the same **plane of incidence**.
It follows that 
$$k_{I}\sin(\theta_{I})=k_{R}\sin(\theta_{I})=k_{T}\sin(\theta_{I})$$
$k_{j}=k_{0}n_{j}$

$$n_{1}\sin(\theta_{I})=n_{1}\sin(\theta_{R})=n_{2}\sin(\theta_{T})$$
The first equality yields **spectral reflection** $\theta_{I}=\theta_{R}$, and the second equality is **Snell's law** of refraction.
___
$$\begin{align*}
r_{1,2} &=  \frac{(k_{1})_{x} - (k_{2})_{x}}{(k_{1})_{x}+ (k_{2})_{x}}\\
t_{1,2} &= \frac{2(k_{2})_{x}}{(k_{1})_{x}+ (k_{2})_{x}}
\end{align*}$$
we can write 
$$\begin{align*} k_{j}^{2} = k_{j,x}^{2}+k_{j,z}^{2} \longrightarrow
k_{j,z} &=  \sqrt{ \left( \frac{\omega}{c_{0}}n_{j} \right)^{2} - k_{j,x}^{2}}\\
&= \left( \frac{\omega}{c_{0}} \right)\sqrt{ n_{j}^{2} -\sin^{2}(\theta_{1}) }
\end{align*}$$
where $j=i,r,t$

for $\mu = 1$ 

 
![[../9. Misc/attachments/Pasted image 20230920154826.png]]

![[../9. Misc/attachments/Pasted image 20230920155018.png]]

in terms of impedance

![[../9. Misc/attachments/Pasted image 20230920162055.png]]

sometimes it is convenient to define **field impedance** as the ratio of the EM field components (E and H) tangential to the interface

$$
\begin{align*}
TE &\to \eta \cos \theta\\
TM &\to \eta \ / \cos \theta
\end{align*}
$$
___
# Transmissivity

$$\begin{align*}
T = \frac{|\mathbf{S}_{2z}|}{|\mathbf{S}_{1z}|} &=  \frac{|Re(\mathbf{E_{2}\times \mathbf{H^{*}_{2}}})\cdot\hat{z}|}{|Re(\mathbf{E_{1}\times \mathbf{H^{*}_{1}}})\cdot\hat{z}|}\\
&= \frac{\Bigg|Re\left[ tE_{1}\left( \frac{1}{\eta_{2}}tE_{1} \right)^{*}\cos \theta_{2} \right]\Bigg|}{\Bigg|Re\left[ E_{1}\left( \frac{1}{\eta_{1}}E_{1} \right)^{*}\cos \theta_{1} \right]\Bigg|}\\
&= |t|^{2} \frac{|Re(n_{2}\cos \theta_{2})|}{|Re(n_{1}\cos \theta_{1})|}
\end{align*}$$
where we used the approximation for optical frequencies
$$\eta = \sqrt{ \frac{\mu}{\epsilon} }\approx \sqrt{ \frac{1}{\epsilon} } = \frac{1}{n}$$
since $\theta_{2}$ is complex and not well defined we use the following expression instead, which should hold for all cases
$$\theta_{2}=\arcsin\left( \frac{n_{1}}{\hat{n_{2}}}\sin \theta_{1} \right)=\theta_{2}'+i\theta''_{2}$$

$$\begin{align*}
n_{2}\cos \theta_{2} &=  n_{2}\sqrt{ 1-\sin^2\theta_{2} }\\
&= \sqrt{ (n_{2})^{2}-(n_{1})^{2}\sin^{2} \theta_{1} }\\
\end{align*}$$
Here we used Snell's law (continuity of parallel wave vectors) to re-express the refraction angle in terms of the incident angle. The transmission coefficient should now look as follows
$$T =  \frac{\Bigg|Re\left(\sqrt{ (n_{2})^{2}-(n_{1})^{2}\sin^{2} \theta_{1} } \right)\Bigg|}{|Re(n_{1}\cos \theta_{1})|}|t|^{2}$$
# Complex Refractive Index
When the refractive index is complex, as is the case with most materials, Snell's law becomes a bits awkward as the angle of refraction seem to become complex
$$n_{1}\sin{\theta_{1}} = \tilde{n}_{2}\sin{\theta_{2}} =(n'_{2}+in''_{2})\sin \theta_{2} $$

In actuality, $\theta_{2}$ as it now appears in Snell's law, now longer represent the direction of propagation of the wave. Lets consider the transmitted wave

$$
\begin{align*}
E_{2} &=  tE_{1}\exp\Big\{ i(\mathbf{k_{2}}\cdot \mathbf{r}-\omega t) \Big\}\\
&= tE_{1}\exp\Big\{i(\tilde{k}_{2}\sin \theta_{2}\cdot x + \tilde{k}_{2}\cos \theta_{2}\cdot z - \omega t)\Big\}\\
&= tE_{1}\exp\Big\{ik_{0}\left(xn_{1}\sin \theta_{1} + z\tilde{n}_{2}\sqrt{ 1 - \sin^{2}{\theta_{2}} } - \omega t \right)\Big\}\\
&= tE_{1}\exp\Big\{ik_{0}\left(xn_{1}\sin \theta_{1} + z\sqrt{ (\tilde{n}_{2})^{2} - (n_{1})^{2}\sin^{2}{\theta_{1}} } - \omega t \right)\Big\}
\end{align*}
$$

The expression in the $z$ component is a complex one which we denote for convenience by $\chi' + i\chi''$ (can be calculated explicitly, but more easily can be given numerically). The expression for the transmitted wave now becomes
$$E_{2} = tE_{1}\exp\Big\{ik_{0}\left(n_{1}\sin \theta_{1}\cdot x + \chi'\cdot z - \omega t \right)\Big\}\exp\Big\{ -\chi''\cdot z \Big\}$$
The resulted wave is an **inhomogeneous one**. Its surfaces of constant phase do not align with its surfaces of constant amplitude. It decays exponentially in the $z$ direction with half life of $\frac{1}{\chi''}$ and it travels in the direction of the real angle
$$\theta'_{2}=\arctan\left( \frac{n_{1}\sin \theta_{1}}{\chi'} \right)$$

# Wave Impedance & Admittance
![](../9.%20Misc/attachments/Pasted%20image%2020240609170655.png)

For p-polarized light, continuity of the magnetic field parallel to the interface (in terms of electric field) is given by

$$
\begin{align*}
\sqrt{ \frac{\varepsilon_{1}}{\mu_{1}} }(E_{1p}-E'_{1p}) = \sqrt{ \frac{\varepsilon_{2}}{\mu_{2}} }(E_{2p}-E'_{2p})
\end{align*}
$$

Since $E'_{p2}=0$ , $\mu \approx  1$ and $\sqrt{ \varepsilon_{j} }=n_{j}$  we get

$$
\begin{align*}
n_{1}(E_{1p}-E'_{1p})&= n_{2}E_{2p}\\ \\
\Rightarrow n_{1}(E_{0}-r_{p}E_{0})&= n_{2}(t_{p}E_{0})\\ \\
\Rightarrow \frac{n_{2}}{n_{1}}t_{p}+r_{p}&= 1
\end{align*}
$$

Which represents the field conservation in term of its coefficients. We can instead use the continuity of the electric field parallel to the surface

$$
\begin{align*}
(E_{1p}+E'_{1p})\cos \theta_{1}&= (E_{2p}+E'_{2p})\cos \theta_{2}\\
(1+r_{p})\cos \theta_{1}&= t_{p}\cos \theta_{2}\\
\frac{\cos\theta_{2}}{\cos \theta_{1}}t_{p}-r_{p}&= 1
\end{align*}
$$
which is another statement of the above.
## Field Coefficients
We begin with the expressions for the TM field coefficients (as derived and provided in Pochi-Yeh) and rewrite them first in terms of characteristic impedance and then in terms of wave impedance.
### TM (p-polarization) Coefficients
$$
\begin{align}
\boxed{r_{p} =  \frac{{n_{1}\cos \theta_{2}-n_{2}\cos \theta_{1}}}{{n_{1}\cos \theta_{2}+n_{2}\cos \theta_{1}}}}
&=  \frac{{\frac{1}{n_{2}}\cos\theta_{2}-\frac{1}{n_{1}}\cos\theta_{1}}}{{\frac{1}{n_{2}}\cos\theta_{2}+\frac{1}{n_{1}}\cos\theta_{1}}} \\ &= \frac{{\eta_{2}\cos\theta_{2}-\eta_{1}\cos\theta_{1}}}{{\eta_{2}\cos\theta_{2}+\eta_{1}\cos\theta_{1}}} = \boxed{\frac{Z_{2}-Z_{1}}{Z_{2}+Z_{1}}}\end{align}
$$ 
$$
\begin{align}
\boxed{t_{p} = \frac{2n_{1}\cos\theta_{1}}{{n_{1}\cos \theta_{2}+n_{2}\cos \theta_{1}}}}&=  \frac{n_{1}}{n_{2}} \frac{2 \frac{1}{n_{1}}\cos \theta_{1}}{\frac{1}{n_{2}}\cos \theta_{2}+\frac{1}{n_{1}}\cos \theta_{1}}\\ &= \frac{n_{1}}{n_{2}} \frac{2\eta_{1}\cos\theta_{1}}{\eta_{2}\cos \theta_{2} + \eta_{1}\cos \theta_{1}} = \boxed{\frac{n_{1}}{n_{2}} {\frac{2Z_{1}}{Z_{2}+Z_{1}} }}
\end{align}
$$

in the most general case $(\mu\neq 1)$ the transmission coefficient should be

$$
t_{p} = \frac{\eta_{2}}{\eta_{1}} \frac{2Z_{1}}{Z_{2}+Z_{1}}
$$
### TE (s-polarization) Coefficients
$$
\begin{align*}
\boxed{r_{s} =  \frac{{n_{1}\cos \theta_{1}-n_{2}\cos \theta_{2}}}{{n_{1}\cos \theta_{1}+n_{2}\cos \theta_{2}}}}
&=  \frac{{\frac{1}{\eta_{1}}\cos\theta_{1}-\frac{1}{\eta_{2}}\cos\theta_{2}}}{{\frac{1}{\eta_{1}}\cos\theta_{1}+\frac{1}{\eta_{2}}\cos\theta_{2}}}= \boxed{\frac{Y_{1}-Y_{2}}{Y_{1}+Y_{2}}}\\
\boxed{t_{s} = \frac{2n_{1}\cos\theta_{1}}{{n_{1}\cos \theta_{1}+n_{2}\cos \theta_{2}}}}&=  \frac{2 \frac{1}{\eta_{1}}\cos \theta_{1}}{\frac{1}{\eta_{1}}\cos \theta_{1}+\frac{1}{\eta_{2}}\cos \theta_{2}} = \boxed{{\frac{2Y_{1}}{Y_{1}+Y_{2}} }}
\end{align*}
$$

## Field Conservation
When writing the coefficients in terms of **refractive indices**, the field conservation is given by

$$\begin{align}
\boxed{\frac{\cos\theta_{2}}{\cos \theta_{1}}t_{p}-r_{p}} &= \frac{2n_{1}\cos \theta_{2} - n_{1}\cos \theta_{2}+n_{2}\cos \theta_{1}}{n_{1}\cos \theta_{2} + n_{2}\cos \theta_{1}} \\
 &= \frac{n_{1}\cos \theta_{2} + n_{2}\cos \theta_{1}}{n_{1}\cos \theta_{2} + n_{2}\cos \theta_{1}}=\boxed{1}
\end{align}
$$

When they are given in terms of **characteristic impedance or wave impedance**, the conservation is as follows

$$
\boxed{\frac{n_{2}}{n_{1}}t_{p}+r_{p}}=\frac{2Z_{1}+Z_{2}-Z_{1}}{Z_{2}+Z_{1}} = \frac{Z_{2}+Z_{1}}{Z_{2}+Z_{1}}=\boxed{1}\tag{4}
$$

For TE waves I wrote the field coefficients in terms of **wave admittance** 
And the field conservation expression is simply $\boxed{t_{s} - r_{s}=1}$

# Power Coefficients
Power coefficients, defined as the ratio of the Poynting component **normal to the interface** assuming $\hat{z}$ direction.

> [!NOTE]- $T_{p}$ Derivation
> $$\begin{align*}T_{p} =  \left|\frac{\mathbf{S^{t}_{p}\cdot \hat{z}}}{\mathbf{S^{i}_{p}\cdot \hat{z}}}\right| &=   \left| \frac{\text{Re}[E_{2}H^{*}_{2}\cos\theta_{2}]}{\text{Re}[E_{1}H^{*}_{1}\cos\theta_{1}]} \right|\\ \\&= \left| \frac{\text{Re}\left[  (t_{p}E_{1}) \left( \frac{t_{p}E_{1}}{\eta_{2}} \right)^{*}  \cos \theta_{2} \right]}{\text{Re}\left[  (E_{1}) \left( \frac{E_{1}}{\eta_{1}} \right)^{*} \cos \theta_{1} \right]} \right|\\ \\ &= \frac{|E_{1}|^{2}}{|E_{1}|^{2}} |t_{p}|^{2}  \left| \frac{\text{Re}[n^{*}_{2}\cos \theta_{2}]}{\text{Re}[n^{*}_{1}\cos \theta_{1}]} \right|\end{align*}$$ In terms of wave impedence $$T_{p} =  |t_{p}|^{2}  \left| \text{Re}\left[  \frac{n^{*}_{2}\cos \theta_{2}}{n^{*}_{1}\cos \theta_{1}}  \right] \right| = |t_{p}|^{2} \left| \frac{n_{2}}{n_{1}} \right|^{2} \text{Re}\left[ \frac{Z_{2}}{Z_{1}} \right] = \frac{4\text{Re}[Z_{2}Z^{*}_{1}]}{|Z_{1}+Z_{2}|^{2}}$$

> [!NOTE]- $T_{s}$ Derivation
> $$\begin{align*}T_{s} =  \left|\frac{\mathbf{S^{t}_{s}\cdot \hat{z}}}{\mathbf{S^{i}_{s}\cdot \hat{z}}}\right| &= \left| \frac{\text{Re}[E_{2}H^{*}_{2}\cos^{*}\theta_{2}]}{\text{Re}[E_{1}H^{*}_{1}\cos^{*}\theta_{1}]} \right|  \\ \\&= \left| \frac{\text{Re}\left[  (t_{s}E_{1}) \left( \frac{t_{s}E_{1}}{\eta_{2}} \right)^{*}  \cos^{*} \theta_{2} \right]}{\text{Re}\left[  (E_{1}) \left( \frac{E_{1}}{\eta_{1}} \right)^{*} \cos^{*} \theta_{1} \right]} \right|\\ \\&= \frac{|E_{1}|^{2}}{|E_{1}|^{2}} |t_{s}|^{2}  \left| \frac{\text{Re}[n^{*}_{2}\cos^{*} \theta_{2}]}{\text{Re}[n^{*}_{1}\cos^{*} \theta_{1}]} \right|\end{align*}$$ in terms of wave admittance $$T_{s} =   |t_{s}|^{2}  \left| \text{Re}\left[  \frac{n_{2}\cos \theta_{2}}{n_{1}\cos \theta_{1}}  \right] \right| =|t_{s}|^{2} \text{Re}\left[ \frac{Y_{2}}{Y_{1}} \right] =\frac{4\text{Re}[Y_{2}Y^{*}_{1}]}{|Y_{1}+Y_{2}|^{2}} $$

> [!NOTE]- $R_{s,p}$ Derivation
> $$\begin{align*}R_{s,p} =  \frac{|\mathbf{S^{r}_{s,p}\cdot \hat{z}}|}{|\mathbf{S^{i}_{s,p}\cdot \hat{z}}|} &=   \left| \frac{\text{Re}[ \mathbf{E'_{1}}\times \mathbf{H'_{1}}^{*}\cdot \mathbf{\hat{z}} ]}{\text{Re}[ \mathbf{E_{1}}\times \mathbf{H_{1}}^{*}\cdot \mathbf{\hat{z}} ]} \right|\\ \\&= \left| \frac{\text{Re}\left[  (r_{s,p}E_{1}) \left( \frac{r_{s,p}E_{1}}{\eta_{1}} \right)^{*}  \cos \theta_{1} \right]}{\text{Re}\left[  (E_{1}) \left( \frac{E_{1}}{\eta_{1}} \right)^{*} \cos \theta_{1} \right]} \right|\\ \\\end{align*}$$ by taking $|r_{s,p}|^{2}$ out of the real bracket both numerator and denominator are the same and cancel each other.

For simplicity here $n_{1}$ and $\theta_{2}$ are both assumed to be real. Finally
$$
\bbox[10px, border:2px solid currentColor]{\begin{align*}
T_{p} &= \frac{4\text{Re}[Z_{2}Z^{*}_{1}]}{|Z_{1}+Z_{2}|^{2}}  && R_{p} = \left| \frac{Z_{2}-Z_{1}}{Z_{2}+Z_{1}} \right|^{2}\\ \\
T_{s} &=\frac{4\text{Re}[Y_{2}Y^{*}_{1}]}{|Y_{1}+Y_{2}|^{2}}  &&R_{s} = \left| \frac{Y_{1}-Y_{2}}{Y_{1}+Y_{2}} \right|^{2}
\end{align*}}
$$
## Power (Energy) Conservation
$T$ and $R$ represent the reflected and transmitted energy flux. On an infinitely thin interface no absorption can occur, so energy is either transmitted or reflected
$$\mathbf{S}_{i} = \mathbf{S}_{t}+\mathbf{S}_{r} \rightarrow 1 = \frac{\mathbf{S}_{t}}{\mathbf{S}_{i}} + \frac{\mathbf{S}_{r}}{\mathbf{S}_{i}} = T + R$$
By using the explicit expressions for the power coefficients of the two polarizations we can show that the sum indeed adds to unity.
$$
\begin{align*}
T_{s,p} + R_{s,p} &= \frac{4\text{Re}[X_{2}X^{*}_{1}]}{|X_{1}+X_{2}|^{2}}  + \left| \frac{X_{1}-X_{2}}{X_{1}+X_{2}} \right|^{2} \\ \\
&= \frac{4\text{Re}\left[X_{2}X^{*}_{1}\right] + |X_{1}|^{2}-2\text{Re}[X_{2}X_{1}^{*}]+|X_{2}|^{2}}{|X_{1}+X_{2}|^{2}}\\ \\
&= \frac{  |X_{1}|^{2} + 2\text{Re}[X_{2}X_{1}^{*}]+|X_{2}|^{2}}{|X_{1}+X_{2}|^{2}} = \frac{{|X_{1}+X_{2}|^{2}}}{{|X_{1}+X_{2}|^{2}}}=1
\end{align*} 
$$

Where $X$ should be replaced by wave impedance $Z$ for TM waves, and wave admittance $Y$ for TE waves.

# Comparison to Comsol simulation

$$
\begin{align}
\frac{E_{\scriptsize aa} - E_{\scriptsize ag}}{E_{\scriptsize aa}} = \frac{E_{\scriptsize R}}{E_{\scriptsize I}}&=\frac{{|E_{\scriptsize R}|e^{i(\mathbf{k_{\scriptsize R}\cdot r}+\varphi_{\scriptsize \text{com}})}}}{{|E_{\scriptsize I}|e^{i(\mathbf{k_{\scriptsize I}\cdot r}+\varphi_{\scriptsize \text{com}})}}} \\
&=\left|\frac{E_{\scriptsize R}}{E_{\scriptsize I}}\right|e^{i(\mathbf{k_{\scriptsize R} - k_{\scriptsize I}})\cdot \mathbf{r}} \\
&=\underbrace{ \left|\frac{E_{\scriptsize R}}{E_{\scriptsize I}}\right| }_{ |r| }\exp{\left( i\ \underbrace{ \frac{2\pi }{\lambda}n_{1}\cos(\theta_{\scriptsize I})z }_{ \varphi_{\scriptsize } } \right)} 
\end{align}
$$
# Thin Layers (Airy Construction)

# Appendix

## Power Coefficients

$$
\boxed{
\begin{align*}
|\mathbf{S^{t}_{s}}\cdot \mathbf{\hat{z}}|  &=  
\left| \text{Re}\left\{ \begin{pmatrix}E_{2x} \\E_{2y} \\E_{2z}\end{pmatrix}\times \begin{pmatrix}H_{2x} \\H_{2y} \\H_{2z}\end{pmatrix}^{*} \right\} \cdot \begin{pmatrix}0\\0\\1\end{pmatrix}\right|\\ \\

&= \left| \text{Re}\left\{ \begin{pmatrix}0 \\E_{2} \\0\end{pmatrix}\times \begin{pmatrix}-H_{2}\cos \theta_{2} \\0 \\H_{2}\sin \theta_{2}\end{pmatrix}^{*} \right\} \cdot \begin{pmatrix}0\\0\\1\end{pmatrix}\right| \\ \\

&= \left| \text{Re}\left\{ \begin{pmatrix}E_{2}H_{2}^{*}\sin^{*} \theta_{2} \\0 \\E_{2}H_{2}^{*}\cos^{*} \theta_{2}\end{pmatrix} \right\} \cdot \begin{pmatrix}0\\0\\1\end{pmatrix}\right| \\ \\

&= |\text{Re}[ E_{2}H_{2}^{*}\cos^{*} \theta_{2} ]|
\end{align*}
}
$$
$$
\boxed{
\begin{align*}
|\mathbf{S^{t}_{p}}\cdot \mathbf{\hat{z}}| &=  
\left| \text{Re}\left\{ \begin{pmatrix}E_{2x} \\E_{2y} \\E_{2z}\end{pmatrix}\times \begin{pmatrix}H_{2x} \\H_{2y} \\H_{2z}\end{pmatrix}^{*} \right\} \cdot \begin{pmatrix}0\\0\\1\end{pmatrix}\right|\\ \\

&= \left| \text{Re}\left\{ \begin{pmatrix}-E_{2}\cos \theta_{2} \\0 \\E_{2}\sin \theta_{2}\end{pmatrix}\times \begin{pmatrix}0 \\H_{2}^{*} \\0\end{pmatrix} \right\} \cdot \begin{pmatrix}0\\0\\1\end{pmatrix}\right| \\ \\

&= \left| \text{Re}\left\{ \begin{pmatrix}E_{2}H_{2}^{*}\sin \theta_{2} \\0 \\-E_{2}H_{2}^{*}\cos \theta_{2}\end{pmatrix} \right\} \cdot \begin{pmatrix}0\\0\\1\end{pmatrix}\right| \\ \\

&= |\text{Re}[ E_{2}H_{2}^{*}\cos \theta_{2} ]|
\end{align*}
}
$$

