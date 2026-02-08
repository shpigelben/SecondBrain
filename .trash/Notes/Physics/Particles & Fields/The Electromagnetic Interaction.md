#particles #standard-model #fundamental

For a particle in the presence of [[EM Scalar & Vector Potentials|E&M potentials]] $\mathcal{H}_{0}(\mathbf{p})\longmapsto\mathcal{H_{0}}(\mathbf{p}+q\mathbf{A}) + q\phi$ so for a relativistic particle, the Dirac hamiltonian becomes
$$\begin{align*}
i \frac{\partial\psi}{\partial t} &= \boldsymbol{\alpha}\cdot \hat{\boldsymbol{p}}+\beta m\\
i \frac{\partial\psi}{\partial t} &= \Big[\boldsymbol{\alpha}\cdot ({\boldsymbol{p}}+q \mathbf{A})+\beta m\ + q\phi\Big]\psi\\
i \frac{\partial\psi}{\partial t} &= (\boldsymbol{\alpha\cdot p} + \beta m)\psi + q(\boldsymbol{\alpha\cdot A}+\phi)\psi \tag{1}
\end{align*}$$
The first term on the RHS is the [[Dirac Equation|Dirac hamiltonian]] for a free particle, and the second term is the __potential energy operator__ that describes the electromagnetic interaction. For the covariant form we take advantage of the fact that $\mathbb{1}=\beta\beta$ such that multiplying equation $(1)$ from the left by $\beta\beta$ wont change the operators
$$0=\beta\left[-i\left( \beta\frac{\partial }{\partial t} + \beta\boldsymbol{\alpha\cdot\nabla} \right) +m  + q\Big(\beta\phi+\boldsymbol{\beta\alpha\cdot A}\Big)\right]\psi$$
We recall the definition of the [[Dirac Equation#Covariant Form of the Dirac Equation|gamma matrices]] and the [[Four Vector|four potential]] to write
$$0=\gamma^{0}\Big[-i \gamma^{\mu}\partial_{\mu} + m + q \gamma^{\mu}A_{\mu} \Big]\psi$$
Such that the potential energy operator in both vector and covariant forms is given by
$$ \boxed{\begin{align*} \\ \quad V_{\tiny D} &= q(\boldsymbol{\alpha\cdot A}+\phi) \quad \\&= q\gamma^{0}\gamma^{\mu}A_{\mu}  \\\ \end{align*}} $$
# Matrix Element for QED Process
For a process $1+2\to 3+4$ that involves electromagnetic interaction, during which a photon acts as the [[Virtual Particles & The Propagator|virtual particle]] that mediates the process
![[Pasted image 20220506162511.png|300]]
the $\mu$ vertex is given as follows
$$\braket{\psi_{1}|V_{\tiny D}|\psi_{3}} = u_{1}^{\small \dagger} \Big[Q_{e}e \gamma^{0}\gamma^{\mu} \mathcal{E}_{\mu}^{(\lambda)} \Big]u_{3}$$
and the $\nu$ vertex is given by
$$\braket{\psi_{4}|V_{\tiny D}|\psi_{2}} = u_{4}^{\small \dagger} \Big[Q_{e}e \gamma^{0}\gamma^{\nu} \mathcal{E}_{\nu}^{*(\lambda)} \Big]u_{2} $$
Where the $\lambda$ superscript represents the polarization state of the mediating photon, and $u$ are the [[Solutions to the Dirac Equation#General Free Particle Solution|fermion spinors]]. The [[Virtual Particles & The Propagator#Total Process|total amplitude]], which is given by summing over all time orderings and all possible polarization states is
$$ \begin{align*}
\mathcal{M} &= \sum\limits_{\lambda}\frac{g^{(\lambda)}_{a}g^{(\lambda)}_{b}}{q^{2} + \cancelto{}{m_{x}}}\\
&=u_{1}^{\small \dagger} \Big[Q_{e}e \gamma^{0}\gamma^{\mu}  \Big]u_{3} \left[\sum\limits_{\lambda} \frac{\mathcal{E}_{\mu}^{(\lambda)} \mathcal{E}_{\nu}^{*(\lambda)}}{q^{2}}\right]u_{4}^{\small \dagger} \Big[Q_{\tau}e \gamma^{0}\gamma^{\nu}  \Big]u_{2}\\
&=u_{1}^{\small \dagger} \Big[Q_{e}e \gamma^{0}\gamma^{\mu}  \Big]u_{3} \left[ \frac{-g_{\mu\nu}}{q^{2}}\right]u_{4}^{\small \dagger} \Big[Q_{\tau}e \gamma^{0}\gamma^{\nu}  \Big]u_{2} \\
& \equiv -Q_{e}Q_{\tau}e^{2} \frac{g_{\mu\nu}j_{e}^{\mu}j_{\tau}^{\nu}}{q^{2}}
\end{align*} $$
Where we used the $\sum\limits_{\lambda} \mathcal{E}_{\mu}^{(\lambda)} \mathcal{E}_{\nu}^{*(\lambda)} = g_{\mu\nu}$ identity in the second transition and the definition of the four-current $j_{e}^{\mu}=\bar{u}_{3}\gamma^{\mu}u_{1}$ 

