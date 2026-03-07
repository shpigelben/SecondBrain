---
type: concept
discipline:
  - physics
field:
  - electrodynamics
---

Maxwell equations are the following
$$
\boxed{\begin{matrix} \\
\quad(1) \quad \nabla \cdot \mathbf{D} = \rho & & & (3) \quad\nabla \times \mathbf{E} = -\partial_{t}\mathbf{B} \quad\\ \\
\quad(2) \quad\nabla \cdot \mathbf{B} = 0 & & &\ \ \ \ \ (4) \quad\nabla \times \mathbf{H} = \partial_{t}\mathbf{D} - \mathbf{J} \quad \\\
\end{matrix} } 
$$

Equations $(1)$ and $(4)$ are __source equations__ with electric charge density in $(1)$ and current density for $(4)$. Where
$$\begin{align*}
\mathbf{D} &= \epsilon \mathbf{E} = \epsilon_{0}(1+\chi_{e})\mathbf{E} = \epsilon_{0}\mathbf{E}+\mathbf{P} \\
\mathbf{B} &= \mu \mathbf{H} = \mu_{0}(1-\chi_{m})\mathbf{H}=\mu_{0}\mathbf{H} - \mathbf{M}
\end{align*}$$
$D$ and $B$ are the **induced** fields (electric displacement and magnetic induction by convention), and $E$ and $H$ are the electric and magnetic field **strengths** respectively.

# Free and Bound Charges

# Boundary Conditions at an Interface
$\mathbf{n}$ is the normal to the interface surface, $\sigma$ is surface charge density and $\mathbf{K}$ is surface current. 
$$\begin{align*}
(\mathbf{D}_{2}-\mathbf{D}_{1})\cdot \mathbf{n}&= \sigma\\
(\mathbf{B}_{2}-\mathbf{B}_{1}) \cdot \mathbf{n} &= 0\\
(\mathbf{E}_{2}-\mathbf{E}_{1})\times \mathbf{n} &= 0\\
(\mathbf{H}_{2}-\mathbf{H}_{1})\times \mathbf{n}&= \mathbf{K}
\end{align*}$$




$$
\begin{pmatrix}
\dot{\theta} \\ \dot{\omega}
\end{pmatrix} = \begin{pmatrix}
\omega \\ \pm \frac{\ell mg}{I}\sin\theta
\end{pmatrix}
$$

___
It is useful to consider the transition from the differential form of Ampere's law to its integral form. The differential form states that the existence of a current density $\mathbf{J}$ creates a curl in the magnetic field, namely

$$
\nabla \times \mathbf{B}=\mu_{0}\mathbf{J}
$$

Since current $\mathbf{J}$ integrated over a cross-sectional area through which it flows we integrate the above over said area

$$
\iint\limits_{\mathcal{A}}\nabla \times \mathbf{B} \ \cdot d\mathbf{S} = \mu_{0}\iint\limits_{\mathcal{A}}\mathbf{J}\cdot d\mathbf{S} = \mu_{0} I_{\text{enc}}
$$
The right-hand-side of the above can be converted to a line integral over the boundary of $\mathcal{A}$ to produce the familiar integral form of Ampere's law

$$
\oint\limits_{\partial \mathcal{A}}\mathbf{B}\cdot d \mathbf{\ell} = \mu_{0}I_{\text{enc}}
$$