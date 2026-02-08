# 1. Preliminary Background on Waves
There is a clear distinction between two physical entities we usually refer to as particles and waves. When we refer to particles we actually talk about physical objects that are localized in space (a ball, the book from which you read, your cellphone and so on)

> [!NOTE] Particles
> Mathematically, particles are described at any point in time by their position $x{\small(t)}$ and velocity $v{\small(t)} = \frac{dx{\small(t)}}{dt}$

Even though we interact with waves on a daily basis their behavior is less intuitive and produces some bizarre phenomena which most of us are not even aware of. Unlike particles, waves are not localized but are spread out over space. We cannot describe a wave by its position or velocity because those too are spread over space. Instead, waves are described by their amplitudes which are position and time dependent.

![[../5. Misc/Excalidraw/excalidraw - position & momentum|700|center]]
Maybe most familiar of all waves are water waves. The amplitude of a wave in the ocean is its height and it varies with both location and time. There are many types of waves, each with its own relevant amplitude - there are sound waves whose amplitude is pressure, and even more exotic types of waves such as quantum mechanical wave-functions whose amplitudes are probabilities, and gravitational waves whose amplitude is the curvature of space and time! But for our humble purposes we are interested in light, which is electromagnetic wave and whose amplitude is the electromagnetic field.

> [!NOTE] Waves
> Mathematically, waves are described by amplitudes $\psi{(\small x,t)}$ with spatial and temporal dependencies.

# 1.2 Electromagnetic Waves
Maxwell equations can be thought of as a set of rules which describe the behavior of electric and magnetic fields. We will not dive into specifics, but Maxwell equations predict the existence of electromagnetic waves which we know as the light that we see. The simplest waves that they predict are **periodic** waves of **constant frequency** which can mathematically be represented as follows
$$E(x,t) = E_{0}\cos(kx-\omega t)$$
$k$ stands for the spatial frequency of the wave and $\omega$ represents the temporal frequency. A qualitative portrayal of such a wave is given below
![[Drawing 2022-11-28 16.21.15.excalidraw|500|center]]
A spacial period of the wave is known as the **wavelength** of the wave and is usually denoted the Greek letter $\lambda$ and its relation to the spatial frequency is $k=\frac{2\pi}{\lambda}$. The wavelength of the electromagnetic wave correspond to what we perceive as color (in the same way that the wavelength of a sound wave correspond to a certain pitch or tone for example). A light wave with a single wavelength is called a **monochromatic** wave and is usually the type of light LASERs emit (this is why they are usually only red or green).

# 1.3 Interference
Now that we have a somewhat better understanding of waves and their representation we can talk about one of their most distinguishing properties, and it is the ability to interfere with one another. Unlike localized particles which can only exist in separate locations at any given time, waves can "share" a location in space and superimpose their amplitudes at the location (not that this is only true for what **linear waves**). Most simply, and also most interestingly, we will consider the interference of two similar rays of monochromatic light

![[Drawing 2022-11-28 16.48.46.excalidraw|600|center]]
The two rays align perfectly, and add up at every point in space. The result is a wave who amplitude is the sum of amplitudes of the contributing waves. This is a truly remarkable property that is unique to waves. But an even odder thing occurs when one of the waves is shifted by half a wavelength, so that the two added waves are anti-aligned

> [!NOTE] Shifting a Wave by $\frac{\lambda}{2}$
> We wish to shift the position of one of the waves by half a wavelength. Mathematically this translates to $$x\to x- \frac{\lambda}{2}$$ 
> Therefore a translated wave would be $$ \begin{align*}
E_{0}\cos{(kx-\omega t)} &\to E_{0}\cos{\left(k\left( x- \frac{\lambda}{2} \right)-\omega t\right)} \\
&= E_{0}\cos{\left(  kx - \omega t - \frac{k \lambda}{2}  \right)} \\
&= E_{0}\cos{\left(  kx - \omega t - \pi  \right)} = -E_{0}\cos{(kx - \omega t)}
\end{align*}$$
> 

Now the waves are perfectly **anti-aligned**. The peaks of one wave are added to the troughs of the other waves and at each an every point in space the addition of two waves result in complete cancellation. The resulting wave is a wave of zero amplitude. Two visible light rays can combine in this specific way to produce darkness! This might be the most bizarre of wave behaviors and it is definitely something we do not observe in the behavior of particle-like objects (the combination of two books cannot be zero books).

![[Drawing 2022-11-28 17.12.46.excalidraw|600|center]]
Here is a [Desmos](https://www.desmos.com/calculator/evuauykwsj) link that will allow you to play with the interference of two monochromatic waves at various phase differences.

# 1.4 Refraction
When light passes from one medium to another its path bends in a certain angle. This phenomenon has been observed for the transition between numerous materials and was found to obey the following rule known as Snell's law
$$n_{1}\sin (\theta_{1}) = n_{2} \sin(\theta_{2})$$
Where $n$ is known as the **index of refraction** and is dependent on microscopic structure of the medium, and $\theta$ is the angle between the light ray and the interface.
# 2. Double Slit Experiment
The most ubiquitous experiment to display the magic of interference is the famous double slit experiment. In this experiment, a ray of light pass through two very narrow slits. The light comes out the other side of the slits as if two sources are situated at the slits' locations. The two separated beams expand on the other side and interfere with one another to produce an interference pattern of bright and dim strips of light on a screen

**Young interferometer**

# 3. Interferometry
The idea that interference patterns of light can provide information about a system on  the order of wavelengths led to the birth of a specialized measurement device known as an **interferometer**. Interferometers come in many types and serve different purposes, but they all manipulate use interference to extract accurate information. A great example is the LIGO interferometer of the recent years which proved the existence of gravitational waves!

# 3.1 Beam Splitter
Beam splitters are optical devices, coated in special material that transmits a portion of an incident beam and reflects the rest. One common type of beam splitter is known as the CBS (cubic beam splitter) which is made out of two triangular prisms put together to form a cube with the transmissive-reflective coating in the middle.

Usually a **CBS** splits the beam into two equally intense beams (50-50), even though other ratios can be achieved. The main feature of the CBS is that no optical path difference is created during the splitting of the beams. Assuming the beam enters at a right angle to the CBS, no refraction occurs and the separated beams also exits at right angles such that no optical path difference is created during the separation, making it a good beam splitter for phase sensitive experiments such as interferometry.

On the flip side, cubic beams splitters are usually more expensive, and many times plate beam splitters **PBS**, which are easier to manufacture, are used. In plate beam splitters, usually the first surface of a glass plate is coated with the same transmissive-reflective coating which separates the beams. In the case of the PBS though, the transmitted beam travels a certain distance inside the glass plate while the reflected wave does not. That creates an optical path difference since the transmitted wave travels at an angle inside the material due to its higher refractive index.

![[../5. Misc/Excalidraw/ex-PBS|500|center]]

> [!NOTE] PBS correction
This discrepancy in optical path difference can be corrected by letting the reflected wave either travel more distance or pass through a prism of the same width and refractive index, entering through the same angle so that the path difference vanishes.

# 3.2 Michelson Interferometer
A Michelson interferometer is a simple yet effective construction in which a beam of coherent light is separated into two different beams. The two beams are reflected back from mirrors M1 and M2 at distances L1 and L2 respectively. The returning beams recombine in the directions of the source and the screen. Assuming the beam has expanded, we should observe an interference pattern on the screen. This interference pattern is extremely delicate to the change in optical path difference controlled by the positions of the two mirrors. A slight movement of one of the mirrors should result in a corresponding pattern shift.

![[../9. Misc/Excalidraw/michelsonInterfermoeter - excaliber.md|600|center]]
We have seen that phase differences of $2\pi n$ align the waves (peak to peak) so that they interfere constructively, producing a bright spot or a ring in the case of an expanded beam. Formally, we demand the following
$$2\pi n = \Delta \varphi = k \Delta L $$
which can also be written in terms of wavelength
$$2\pi n = \frac{2\pi}{\lambda}\Delta L \quad\Rightarrow \quad|L_{1}-L_{2}| = \frac{\lambda n}{2}$$
Using the equation above, one can very fine length variations by observing the number of rings that shift as a result.

# 3.3 Refractive Index
A good use of the delicate precision of the interferometer is the measurement of indices of refraction for various materials. Light not only accumulates phase difference when traveling in different media, but upon entrance at an angle, it also travels longer distances inside the material. 

We let on of our separated light beams travel through a certain transparent material. An interference pattern should appear on the screen as usual. By slightly and continuously rotating the material (assuming its rectangular geometry) a phase difference should accumulate, consequently shifting the rings in the interference pattern. From the number of shifts we can deduce the phase difference $\Delta \varphi$ as we've done so far. 

Now all that's left is understanding how the phase difference relates to the optical path difference and the refraction index.

# 3.4 Coefficient of Expansion
___
Another property of a material, which can be measured using the interferometer is the coefficient of expansion of materials. Material respond to increase in temperature by increasing their size. In the linear regime of small temperature changes, the relationship can be written as follows
$$\Delta L = \alpha L_{0} \Delta T$$
Where $\Delta L$ is the change in length of the heated material, $\alpha$ its coefficient of expansion, $L_{0}$ is the initial length (before initiating temperature change) and $\Delta T$ is the difference in temperature.

We can mount one of the mirrors on the material so that a change in the material's length becomes a change in distance between the mirrors $|L_{1}-L_{2}|$. By using the relationship developed in section 3.2 we can write
$$\frac{\lambda n}{2} = \alpha L_{0} \Delta T \quad\Rightarrow \quad \alpha= \frac{\lambda n}{L_{0}\Delta T}$$
By changing the temperature of the material and observing the number of ring shifts $n$, we can determine $\alpha$


We use the equation $\lambda = \frac{d\cdot y}{L}$ to calculate the wavelength based on the slit separation $d$ the distance from the screen $L$ and the fringe separation $\Delta y$ which we call here $y$ for simplicity. In an ideal experiment those quantities would be exact, but in practice they each come with a certain uncertainty. We therefore understand that when calculating $\lambda$ we should get a **result that falls within a certain region of uncertainty**.
$$
\lambda(L_{0},d_{0},y_{0}) \to \lambda(L_{0},d_{0},y_{0}) \pm \sigma_{\lambda}(L_{0},d_{0},y_{0})
$$
$\sigma_{\lambda}$ is the uncertainty in the calculated wavelength due to the inherent uncertainties in the system.
$$\sigma_{\lambda}=\sigma_{\text{laser}}+\sigma_{measurements}$$
$\sigma_{laser}$ is the uncertainty in the output of the laser, which is related to the spectral width of the specific laser we use and is given by the manufacturer. $\sigma_{measurements}$ is the uncertainty in the measurements we make which is a combination of human error (imprecision of reading a ruler) and the finite resolution of our measuring tools (a ruler with a resolution of $1mm$ has uncertainty of $1mm$ because we cannot account for smaller lengths). The estimation of $\sigma_{measurements}\to \sigma_{m}$ is done using error propagation which we simply provide here without going  into detail.
$$\begin{align*}
\sigma_{m}(L_{0},d_{0},y_{0})&=\sqrt{ \left(\frac{\partial \lambda}{\partial d}\sigma _{d}\right)^{2}+\left(\frac{\partial \lambda}{\partial y}\sigma _{y}\right)^{2}+\left(\frac{\partial \lambda}{\partial L}\sigma _{L}\right)^{2} }\\ \\
&= \sqrt{ \small\left( \frac{y_{0}}{L_{0}}\sigma_{d} \right)^{2}+\left( \frac{d_{0}}{L_{0}}\sigma_{y} \right)^{2} +\left( \frac{d_{0}y_{0}}{L_{0}^2}\sigma_{L} \right)^{2}}
\end{align*}$$
$\sigma_{d}$ is the uncertainty in the slit separation, $\sigma_{y}$ is the estimated uncertainty in the measurement of fringe separation and $\sigma_{L}$ is the estimated uncertainty in the measurement of the distance from the slits to the pattern on the screen.
___
$$
I = I_{1} + I_{2} + 2I_{12}
$$

$$
I_{12} = \frac{c}{4\pi}\sqrt{ \frac{\epsilon}{\mu} }\Big\langle\mathbf{E}\cdot \mathbf{E}^{*}\Big\rangle = \frac{c}{8\pi}\sqrt{ \frac{\epsilon}{\mu} }\Big( \mathbf{a}_{1}\cdot \mathbf{a}_{2} \Big)\cos(\phi_{1}-\phi_{2})
$$

where $\mathbf{E}=\mathbf{E}_{1}+\mathbf{E}_{2}$ and $\mathbf{E}_{j}=\mathbf{a}_{j}\Big( e^{i(\phi_{j}-\omega t)} + \text{C.C} \Big)$.

$$
\Delta\eta = \frac{\Delta V}{V^{(0)}}\sqrt{ 1 + \left( \frac{V^{(\ell)}}{V^{(0)}} \right)^{2} } 
$$