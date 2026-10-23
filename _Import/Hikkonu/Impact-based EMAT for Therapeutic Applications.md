> [!NOTE] Introduction
> An RLC circuit discharges energy stored inside a capacitor bank to generate a current pulse that flows through a planar coil. This time varying pulse generates a time varying magnetic field which in turn produces Eddy currents in an aluminum (Al7075-T6) disc that sits on top of it. The eddy currents interact with the coil's magnetic field to produce a Lorentz force which is predominantly in the $z$ direction. The disc is accelerated and impacts a target material. The collision generates a "shockwave" that travels through from the target through a set of matching layer whose goal is to couple the acoustic energy as efficiently as possible into the human tissue. The ultimate goal this transducer is to promote neovasularization in targeted areas within the body. The main challenges are optimizing the system to produce greater shocks for smaller currents and avoid heating as much as possible.

- Lorentz Force
	- vector potential
	- dynamics & optimal height
- Impact-generated acoustic wave
- Tissue-coupling via impedance matching

# General Model
Ampere's law (Maxwell's equations)

$$
\nabla \times \mathbf{B}=\mu_{0}\left( \mathbf{J}+\epsilon_{0} \frac{\partial \mathbf{E}}{\partial t} \right)
$$

In vector potential terms

$$
\mathbf{B}=\nabla \times \mathbf{A} \quad ; \quad \mathbf{E} = -\nabla \phi - \frac{\partial \mathbf{A}}{\partial t} 
$$

yields
$$
\begin{align}
\nabla^2\mathbf{A}&=\mu_{0}(\mathbf{J}_{\text{coil}}+\mathbf{J}_{\text{eddy}}) + \cancelto{0}{ \frac{1}{c^2} \frac{\partial^2 \mathbf{A}}{\partial t^2} } \\
&=\mu_{0}\left( \mathbf{J_{\text{coil}}} - \sigma\frac{\partial \mathbf{A}}{\partial t} \right)
\end{align}
$$

Where we neglect the second order term in time (magneto quasi static regime MQS). This is valid for light time scale is on the order of picoseconds given the system's dimensions, whereas the pulse width is on the order of microseconds (factor of 6 orders of magnitude). The current density has contribution from the generating coil and the induced current using Ohm's law. The induced current is confined to the region of the conductor through the conductivity term

$$
\sigma(\mathbf{r},t)=\begin{cases}
\sigma_{0} & \mathbf{r} \in \mathcal{D}(t) \\
0 &\text{else}
\end{cases}
$$

Where $\mathcal{D}(t)$ is the time-dependent volume in space that the disc occupies. It is time dependent due to the Lorentz force acting between the generated currents and the magnetic fields in the system, namely

$$
\begin{align}
\mathbf{f}_{\text{disc}}&=\mathbf{J}_{\text{eddy}}\times \mathbf{B}-\rho g \hat{\mathbf{z}} \\
\mathbf{f}_{\text{coil}}&=\mathbf{J_{\text{coil}}} \ \times \mathbf{B}
\end{align}
$$
In a sense, this is an " electromagnetic explosion" in which the two conductors exert an equal and opposite repulsive force and convert stored electromagnetic energy into mechanical energy. In practice, the generating coil is mounted and has an effective mass much greater than the disc which harnesses most of the kinetic energy.

The equations of motion is given by the **Cauchy momentum equation**

$$
\rho(\boldsymbol{r},t) \ \frac{\partial^2 \boldsymbol{d}}{\partial t^2} = \nabla \cdot \boldsymbol{\Sigma} + \boldsymbol{f}_{\text{disc}}
$$

where $\rho$ is the region-dependent density (much like $\sigma$), $\boldsymbol{d}$ is the displacement field and $\boldsymbol{\Sigma}$ is the Cauchy stress tensor. Solving the above equation coupled with the diffusion equation for $\boldsymbol{A}$ is non-trivial and we can greatly reduce the complexity  by introducing two simplifying assumptions:

1. Treat the disc as a point object: Assume the forces act solely on the COM of the disc and do not change orientation or invoke bending\flexion modes.
2. Treat the geometry as cylindrically symmetric: Assume that the deviations from perfect cylindrical symmetry (Archimedean spiral, initial misalignments etc) are negligible and that the lion-share of the force acting on the disc is in the $\boldsymbol{\hat{z}}$ direction.

These assumptions lead to a the follow equations of motion of the COM of the disc $\boldsymbol{Z}$

$$
m_{\text{disc}}\frac{d^2 Z}{dt^2} = \int  \ (\boldsymbol{f}_{\text{disc}}(\boldsymbol{r})\cdot \boldsymbol{\hat{z}}) \ d^{3}r
$$
![](V_P_vs_Z.png)
The above are results of the simplified model. Velocity and momentum of the disc as functions of the height above the coil for varying thicknesses of the disc (taking the increased mass into consideration). The higher the velocity, the greater the generated pressure wave will be. So in the case where the disc collides with the target material (similar to Radial machines) maximal velocity is roughly at $0.36 \ \text{[mm]}$ and drifts higher for thinner discs. 

- When the disc is, at any time, pressed against the rubber silicon or is held in place with an elastic membrane that separates it from water\patient the disc acts as a radiator and reaching high velocity remains crucial for generating steep pressure pulses.
- In both cases impedance matching is important but mainly to couple the generated waves into the body and not for the sole purpose of generating the wave. For the generation of wave I believe that a thin elastic layer (small absorption and allowing to achieve high disc velocities) is best.
# Force Distribution
Calculation of the force distribution $\boldsymbol{f}_{\text{disc}}$ specifically in the $z$ direction can hint at what type of flexural\bending modes might be generated in the disc. To fully understand the dynamics the full equation of motion has to be solved, but a force distribution together with experimental findings (such as measuring pressure exactly at the center above the disc which hints at a focal point for each transducer) might guide the way for better transducer design and a better understanding of the spatial characteristics of the pressure waves generated.