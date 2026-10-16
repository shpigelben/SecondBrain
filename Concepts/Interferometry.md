---
type: concept
discipline:
  - physics
field:
  - optics
  - electrodynamics
last_reviewed: 2026-07-24
next_review: 2026-07-25
review_interval: 1
---

# Interferometry
The idea that interference patterns of light can provide information about a system on  the order of wavelengths led to the birth of a specialized measurement device known as an **interferometer**. Interferometers come in many types and serve different purposes, but they all manipulate use interference to extract accurate information. A great example is the LIGO interferometer of the recent years which proved the existence of gravitational waves!

# Beam Splitter
Beam splitters are optical devices, coated in special material that transmits a portion of an incident beam and reflects the rest. One common type of beam splitter is known as the CBS (cubic beam splitter) which is made out of two triangular prisms put together to form a cube with the transmissive-reflective coating in the middle.

Usually a **CBS** splits the beam into two equally intense beams (50-50), even though other ratios can be achieved. The main feature of the CBS is that no optical path difference is created during the splitting of the beams. Assuming the beam enters at a right angle to the CBS, no refraction occurs and the separated beams also exits at right angles such that no optical path difference is created during the separation, making it a good beam splitter for phase sensitive experiments such as interferometry.

On the flip side, cubic beams splitters are usually more expensive, and many times plate beam splitters **PBS**, which are easier to manufacture, are used. In plate beam splitters, usually the first surface of a glass plate is coated with the same transmissive-reflective coating which separates the beams. In the case of the PBS though, the transmitted beam travels a certain distance inside the glass plate while the reflected wave does not. That creates an optical path difference since the transmitted wave travels at an angle inside the material due to its higher refractive index.

> [!NOTE] PBS correction
This discrepancy in optical path difference can be corrected by letting the reflected wave either travel more distance or pass through a prism of the same width and refractive index, entering through the same angle so that the path difference vanishes.

# Michelson Interferometer
A Michelson interferometer is a simple yet effective construction in which a beam of coherent light is separated into two different beams. The two beams are reflected back from mirrors M1 and M2 at distances L1 and L2 respectively. The returning beams recombine in the directions of the source and the screen. Assuming the beam has expanded, we should observe an interference pattern on the screen. This interference pattern is extremely delicate to the change in optical path difference controlled by the positions of the two mirrors. A slight movement of one of the mirrors should result in a corresponding pattern shift.

We have seen that phase differences of $2\pi n$ align the waves (peak to peak) so that they interfere constructively, producing a bright spot or a ring in the case of an expanded beam. Formally, we demand the following
$$2\pi n = \Delta \varphi = k \Delta L $$
which can also be written in terms of wavelength
$$2\pi n = \frac{2\pi}{\lambda}\Delta L \quad\Rightarrow \quad|L_{1}-L_{2}| = \frac{\lambda n}{2}$$
Using the equation above, one can very fine length variations by observing the number of rings that shift as a result.

# 3.4 Coefficient of Expansion
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