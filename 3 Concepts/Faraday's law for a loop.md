---
type: concept
discipline:
  - physics
field:
  - electrodynamics
---

To solve Ampere's equation here properly would be vastly more complicated than using Faraday's law which is more suitable in these types of situations. To illustrate why, consider why current is induced by looking at the Lorentz force.

$$
\mathbf{f} = \rho \mathbf{E} + \mathbf{J}\times \mathbf{B}
$$

The magnetic field is constant in time so initially no electric field is induced. Moving the side of your circuit introduces moving charges, perpendicular to the magnetic field which then experience the Lorentz force in the direction of the wire (-y direction according to your geometry). As these charges start to move according to the Lorentz force, they "accumulate" at the  corner where the circuit meets the y axis which in turn induces a local internal field inside the wire. As this process continues, a steady state is reached which is the induced current given by Faraday's law.

You can also see this when you consider the general ohm's law which accounts for the effect of the magnetic field

$$
\begin{align}
\mathbf{J} &= \sigma \big(\mathbf{E} + \ \mathbf{v}\times \mathbf{B} \big)
\end{align}
$$

The electric field, $\mathbf{E}$, here is not induced by the magnetic field (since it is static) but rather by the charges in the conductor. This electric field, which originates from a scalar potential, serves to keep the charges inside the conductor, but the main driver of current is the second term.

Bottom line:
Faraday's law is the right approach here and yields the correct result.
You'r use of Ampere's law here is incorrect which is why you see the discrepancy.

 $$
\nabla \times \mathbf{B_{induced}} = \mu_{0}\sigma(\mathbf{E}+\mathbf{v}\times \mathbf{B_{external}})
$$