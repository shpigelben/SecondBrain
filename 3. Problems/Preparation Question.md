#problem #optics 

> [!NOTE] Question 1
> 1. Define what a refractive index is, what is chromatic dispersion and what is the meaning of the real and imaginary parts of the refractive index?

The refractive index can be considered by its appearance in the electromagnetic wave equation

$$
\nabla^{2}\boldsymbol{E} = \frac{n^{2}}{c^{2}}\frac{ \partial^{2} \boldsymbol{E} }{ \partial t^{2} } =\frac{1}{v^{2}}\frac{ \partial^{2} \boldsymbol{E} }{ \partial t^{2} } 
$$

It quantifies by how much the wave velocity of a wave is dampened in a medium. When light moves between two media in an abrupt change of refractive index, it's direction of propagation will generally change due to the change in phase velocity, in a process known as refraction and is modeled after Snell's law which related the refraction angle to the incident angle and the two refractive indices. The refractive index is, in general, wavelength dependent and when a polychromatic light is incident on an interface at an oblique angle, it will refract in different angles due to each wavelength experiencing a different value of refractive index. This is known as chromatic dispersion and is a cause of unwanted chromatic aberrations in imaging systems.  The refractive index is generally a complex number and has an imaginary part whenever the system is either absorbing, or have negative permittivity (metals). Either way, having an imaginary part to the refractive index results in the decay of the wave's amplitude
$$
\begin{align}
\psi(x,t) &= \psi_{0}{\large e}^{i\Big(k(n'+in'')x-\omega t\Big)} \\
&= (\psi_{0}e^{-n''x}){\large e}^{i\big(kn'x-\omega t\big)}
\end{align}
$$
Usually, the energy is lost either to heat, reflection or a combination of the two.


> [!NOTE] Question 2
> 2. Explain Snell's law and what is total internal reflection.

As mentioned in previous question, Snell's law draws a relationship between the incident angle, refracted angle, and the refractive indices of a planar interface as light passes it. It is given by the following formula

$$
n_{1}\sin\theta_{1}=n_{2}\sin\theta_{2}
$$

Generally, light that moves between interfaces has a certain degree of transmission and reflection, but when the light moves from an optically dense (high $n$) medium to a less optically dense one $(n_{1}>n_{2})$ there exists a certain critical angle $\theta_{c}$ such that for angles larger than it, the light is totally reflected and no transmission occurs. This happens when the angle of refraction is $90^{\circ}$ and from Snell's law we get 

$$
\theta_{c} = \sin^{-1}\left( \frac{n_{2}}{n_{1}} \right)
$$

The phenomenon is otherwise known as total internal reflection or TIR for short.

> [!NOTE] Question 3
> 3. Given the diagram below, find a formula the relates $n_{2}$, $\theta_{1}$, $d$ and $h$.![center|400](../9.%20Misc/attachments/Pasted%20image%2020240310230232.png)

First, we calculate  $\theta_{2}$ by using snells law
$$
\theta_{2}=\sin^{-1}\left( \frac{n_{1}}{n_{2}}\sin\theta_{1} \right)
$$
then, the length, $\ell$ of the path the ray takes inside the layer is calculated by considering the triangle it forms with the boundary and $h$. Using trigonometry it can be easily seen that
$$
\ell = \frac{h}{\cos\theta_{2}}
$$
By considering yet another triangle, formed by $\ell$, $d$ and the dotted continuation of the incoming ray, it can be seen that 
$$
d = \ell \sin (\theta_{1}-\theta_{2})
$$
where $\theta_{1}-\theta_{2}$ is the angle between $\ell$ and the dotted continuation of the incoming ray. Inserting the first two equations into this last one yields the desired connection between $n_{2}$, $\theta_{1}$, $d$ and $h$.

> [!NOTE] Question 4
> 4. Make a comparison for the deviation as a function of $\theta_{1}$ for two different wavelengths 500 [nm] and 800 [nm] such that $n_{500}=1.1n_{800}$

![center](../9.%20Misc/attachments/Pasted%20image%2020240310233653.png)

Couple of things are clear from this solution. 
- The larger $n_{2}$, the larger the deviation. 
- The larger $h$ the larger the deviation.
- The difference between the deviations of the two wavelength is more prominent as $n_{2,800}$ is closer to one.

> [!NOTE] Question 5
> a. what is the maximal $\theta_{i}$ for which there is TIR?
> b. calculate the maximal angle for $n_{0}=1.0$ and $n_{1}=1.33$.
> ![center|500](../9.%20Misc/attachments/Pasted%20image%2020240311000807.png)

The maximal $\theta_{1}$ is the angle for which $\phi$ is the critical angle. Let us calculate $\phi_{c}$ and from it, $\theta_{i,max}$. From Snell's law we've already shown that
$$
\phi_{c}=\sin^{-1}\left( \frac{n_{0}}{n_{1}} \right)
$$
Next, we derive an expression for the numerical aperture of the system, which contains the desired maximal angle of incidence
$$
\begin{align}
NA\equiv n_{0}\sin\theta_{max} &=n_{1}\sin\theta'_{c}  \\
&= n_{1}\sin(90^{\circ}-\phi_{c}) \\&= n_{1}\cos\phi_{c} \\
&=n_{1}\sqrt{ 1-\sin^{2}\phi _{c} } \\
&=n_{1}\sqrt{ 1-\left( \frac{n_{0}}{n_{1}} \right)^{2} } \\
&=\sqrt{ {n_{1}}^{2}-{n_{0}}^{2} }
\end{align}
$$
finally, we can find the angle explicitly as follows

$$
\theta_{max} = \sin^{-1}\left(\small \sqrt{ \left( \frac{n_{1}}{n_{0}} \right)^{2}-1 } \  \right)
$$
For $n_{0}=1.0$ and $n_{1}=1.33$ the maximal angle is 

$$
\theta_{max} = \sin^{-1}\left(\small \sqrt{ 1.33^{2}-1 } \  \right) \approx 61.26^{\circ}
$$
> [!NOTE] Question 6
> a. Write and explain the lens-maker equation.
> b. Write and explain the imaging equation for a thin lens.
> c. Define positive vs negative lens, and virtual vs real image.
> d. 

The lens-maker equation gives the distance of the focal point $f$, from the center of a lens with refractive index $n$ and whose surfaces at both ends have radii of curvature $R_{1}$ and $R_{2}$. The equation assumes that light enters and leaves from air.

$$
\frac{1}{f} = (n-1)\left[ \frac{1}{R_{1}}-\frac{1}{R_{2}}+ \frac{(n-1)d}{nR_{1}R_{2}} \right]
$$

In the case where $d\ll R_{1},R_{2}$ one can use the thin lens approximation and omit the last term in the brackets for a simpler relation. Once the focal length is gained, and given an object a distance $S_{1}$ from the lens, and image will form at a distance $S_{2}$ according to the following equation (and still under the thin lens approximation)

$$
\frac{1}{f} = \frac{1}{S_{1}} + \frac{1}{S_{2}}
$$

When an image is formed on the other side of the lens we say the the image is real as it can be viewed, whereas an image formed on the same side as the object is called virtual since it cannot be projected on a screen. A negative lens takes parallel rays and diverge them, thereby creating virtual images. A positive lens, which is a lens that takes parallel rays and converge them into a point, usually creates a real image (but not always). When the object is closer to the lens than the focal length $(|S_{1}|<|f|)$ we get

$$
S_{2} = \frac{|S_{1}||f|}{|S_{1}|-|f|} < 0 
$$

Since $S_{2}$ is negative (as measured from the middle of the thin lens) it is on the same side as the object and therefore virtual.

> [!NOTE] Question 7
> 2. When imaging with a lens, what is the effect of using an aperture between the lens and the imaging screen?

- Most notably it controls the amount of light passing and consequently the brightness of the image on the screen.
- The narrower the aperture the deeper the depth of field and therefore the sharper the resulting image.
- Spherical lenses do not ideally focus light to a point and therefore introduce spherical aberrations that negatively effect the resulting image. The closer the passing rays to the optical axis of the lens the less prominent the aberrations. By closing the aperture light that is further away from the center of the lens is filtered. This decreases the effect of spherical aberrations.


> [!NOTE] Question 8
> Explain the principle behind the beam expander as it is shown in the figure below, and explain the function of the pinhole.![center|500](../9.%20Misc/attachments/Pasted%20image%2020240311005917.png)

The beam expander works by taking parallel rays at a certain spot size, and transmit parallel rays at a bigger spot size. This is achieved here by taking two positive lenses that are separated by the sum of their focal lengths, such that the total optical power of the system is zero, meaning that the curvature of the incoming wavefront (planar) ultimately remains the same. By considering the similar triangles created by the rays and the lens it is easily seen that the magnification of the spot size is 
$$
M = \frac{f_{2}}{f_{1}}
$$

The pinhole is placed at the focal plane of the two lenses and is narrow enough to allow the passage of the most coherent light at the center and filter unwanted diffractions or noise.

> [!NOTE] Question 9
>Given the following imaging system ![center|500](../9.%20Misc/attachments/Pasted%20image%2020240311010739.png) calculate:
>a. Distance of the image $S_{2}$.
>b. Type of image (real / virtual).
>c. Magnification.
>$f_{1} = 50$, $f_{2} = 100$ and  $s_{1}=13$ for  $d=50$, $d=150$ and $d=250$.



The image formed after $L_{1}$ is given by
$$
s_{1}' = \frac{f_{1}s_{1}}{f_{1}-s_{1}}
$$
$s_{1}'$ becomes the object for $L_{2}$ a distance $s_{2} = d-s_{1}'$ away. $s_{2}'$ is then given by

$$
s_{2}'= \frac{f_{2}(d-s_{1}')}{f_{2}-d+s_{1}'}
$$
The results are as follows

| $d$      | 50   | 150     | 250     |
| -------- | ---- | ------- | ------- |
| $s_{2}'$ | 48   | -408    | -175    |
| $M$      | 2.73 | 23.24   | 10      |
| type     | real | virtual | virtual |

> [!NOTE] Question 10
>Repeat the calculation above for the following parameters
>.$s_{1}= 13$, $d = 440$, $f_{2}= 150$, $f_{1}= 12.47$ 


| $d$      | 440     |
| -------- | ------- |
| $s_{2}'$ | -187.76 |
| $M$      | 0.61    |
| type     | virtual |
