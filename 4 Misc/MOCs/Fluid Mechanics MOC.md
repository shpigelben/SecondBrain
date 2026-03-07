---
type: moc
discipline:
  - physics
field: []
---

> [!NOTE]- Video Lectures
> ![](https://www.youtube.com/watch?v=AWtKDDE4Bbw&list=PLzsw4j7Owox7vvMZaPvjHiMENZYwl5hj1&index=2)
> ![](https://www.youtube.com/watch?v=clVwKynHpB0&list=PLZOZfX_TaWAGocs2k5QmTL44OKOl7rn34)
> 
# Hydrostatics
- [Hydrostatics](../../3%20Concepts/Hydrostatics.md)

# Hydrodynamics
- [Ideal Fluid](../../3%20Concepts/Ideal%20Fluid.md)
- [Acoustic Waves](../../3%20Concepts/Acoustic%20Waves.md)

# Misc
- [Surface Tension](../../3%20Concepts/Surface%20Tension.md)

___
In fluid mechanics we deal with media that consist of numerous particles. We treat such systems as [[../../3 Concepts/Thermodynamic System|thermodynamic systems]] more so than Newtonian systems. For the description of a moving fluid we need 5 quantities - 3 velocity-field components, and two [[State Variables|thermodynamic properties]] of the fluid, usually pressure and density.
$$ \begin{align*}
\boldsymbol{v} &=\boldsymbol{v}(\boldsymbol{r},t)\\
 \rho &= \rho(\mathbf{r},t)\\
 P &= P(\mathbf{r},t)
\end{align*} $$
As is appropriate with continuous media, those properties are fields that vary spatially and temporally, and are the solutions to dynamic conservation laws which are the fundamental equations that govern fluid dynamics
___

An ideal fluid is a fluid that can be completely characterized by its rest frame.

- No sources or sinks
- no [[Diffusion]] of particles
- no diffusion of momentum ([[viscosity]])
- no diffusion of energy (no heat conduction)
- mass is conserves (non-relativistic)

mass conservation yields one equation, momentum conservation has three, and energy conservation has one

___
# Standard (Lagrangian) Form
$$\frac{d}{dt}q_{a}=\dots$$
$$\frac{d\rho}{dt} = (\partial_{t}\rho+ \nabla(\rho\mathbf{v}))$$

___
# Conservative (Eulerian) Form
$$\partial_{t}n_{a}=-\partial_{k}J_{ak}$$
$$\begin{align*}
\frac{\partial\rho}{\partial t} &= -\nabla\cdot \mathbf{J} = -\nabla\cdot(\rho \mathbf{v})\\
\frac{\partial M}{\partial t} &=   - \oint \rho \mathbf{v}\cdot d\mathbf{A}
\end{align*}$$

$$\begin{align*}
\partial_{t}\rho_{a} &=-\partial_{k}J_{ak} = -\partial_{k}(\rho v_{k})\\
& = -\rho\partial_{k}v_{k} - v_{k}\partial_{k}\rho\\
& = -\rho(\nabla\cdot\mathbf{v}) - (\mathbf{v}\cdot\nabla)\rho\\
&=-\nabla(\rho\mathbf{v})
\end{align*}$$


# Steady flow
$$\rho(x,y,z,t)\to \rho(x,y,z)$$
# Incompressible Flow
$$\nabla\cdot\mathbf{v}=0$$

# Conservation of Momentum

$$\begin{align*}
&m \frac{d\mathbf{v}}{dt}= \mathbf{F}\\
&\rho \frac{d\mathbf{v}}{dt} = \tilde{\mathbf{F}} \to \frac{d\mathbf{v}}{dt} = \mathbf{f} = \mathbf{f}_{p}+\mathbf{f}_{ext}
\end{align*}$$
where $\mathbf{f}$ is specific force $\left[\frac{N}{M}\right]$. the specific force can be divided into $\mathbf{f}_{p}$ which is force due to pressure, and $\mathbf{f}_{ext}$ which are external forces

$$ \mathbf{F}_{p} = -\nabla P $$


$$\partial_{t}(\rho_{i})=-\partial_{j}(\rho v_{i}v_{j} + P\delta_{ij})$$