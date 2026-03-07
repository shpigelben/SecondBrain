---
type: concept
discipline:
  - physics
field:
  - quantum-mechanics
  - particle-physics
---

å†In search of a relativistic formulation of quantum mechanics, the [[Klein Gordon Equation]] succeeded in producing a relativistic [[Dispersion Relation|dispersion relation]] and was therefore [[Lorentz Invariance|Lorentz invariant]], yet it generated a [[Probability Density & Current|probability density]] which was linearly dependent on the energy and could therefore gain negative values. The negative probabilities of the KG equation render it incompatible and a better equation must be sought after

# Enter Dirac
Dirac observed that in order to produce the desired dispersion relation, the wave equation can also be first order in both time and space, he suggested the following equation

$$
\begin{align*}
\hat{E}\psi &= (\boldsymbol{\alpha}\cdot \mathbf{\hat{p}}+ \beta m)\psi \\ \\
i \frac{\partial }{\partial t}\psi &= \left(-i\alpha_{x}\frac{\partial }{\partial x}-i\alpha_{y}\frac{\partial }{\partial y}-i\alpha_{z}\frac{\partial }{\partial z}+\beta m\right)\psi
\end{align*} \tag{1}
$$

The next step is to figure what exactly $\boldsymbol{\alpha}$ and $\beta$ are. We multiply equation $(1)$ by itself (the resulting expression is cumbersome) and demand that the values for $\alpha_{i}$ and $\beta$ be such that the equation reduces to the KG equation. This puts the following constraints on them

$$
\begin{align*}
{\alpha_{x}}^{2}={\alpha_{y}}^{2}={\alpha_{z}}^{2}=\beta^{2}&=\hat{\mathbb{1}} \tag{2}\\
\alpha_{i}\beta+\beta\alpha_{i}=\{\alpha_{i},\beta\} &=0 \tag{3}\\
\alpha_{i}\alpha_{j}+\alpha_{j}\alpha_{i}=\{\alpha_{i},\alpha_{j}\}&=0 &i\neq j\tag{4}
\end{align*}
$$


1. it might not be obvious from the start, but for $(3)$ and $(4)$ to be satisfied, $\alpha_{i}$ and $\beta$ have to be **matrices**
2. __zero trace__ requirement $(2)$, the cyclic property of the trace and $(3)$ gives
   

$$
\text{Tr}(\alpha_{i}) = \text{Tr}(\alpha_{i}\beta \beta)=\text{Tr}(\beta\alpha_{i}\beta)=-\text{Tr}(\beta \beta\alpha_{i})=-\text{Tr}(\alpha_{i})
$$
This can be done for $\beta$ as well, and it shows that the trace must vanish
4. __eigenvalues__ we assume $\alpha_{i}A = \lambda A$. multiplication from the right by $\alpha_i$ gives ${\alpha_{i}}^{2}A = \lambda \alpha_{i}A \Longrightarrow A=\lambda^{2}A$ which leaves two options for the eigenvalues $\lambda=\pm 1$
5. __even dimensions__ since the only possible eigenvalues are $\pm 1$ one even dimensional matrices are allowed

The lowest dimension set of matrices that satisfy all the four conditions above and are [[Hermitian Matrix|hermitian]] (we want physical observables after all) are the two dimensional [[Pauli Matrices|Pauli matrices]]. The problem is that there are __three__ Pauli matrices and we look for __four__ (3 for the $\alpha_{i}$ 1 for the $\beta$). Therefore the next candidates are $4\times 4$ matrices, and such sets exist in several representations. In the Dirac-Pauli representation $\alpha_{i}$ and $\beta$ are given by

$$
\beta=\begin{pmatrix}I & 0 \\ 0 & -I\end{pmatrix} \quad \quad \alpha_{i}= \begin{pmatrix}0 & \sigma_{i} \\ \sigma_{i} & 0\end{pmatrix}
$$

Where $I$ is the identity matrix and $\sigma_{i}$ are the [[Pauli Matrices|Pauli matrices]]. The physical predictions are not dependent on the choice of representation, the physics of the Dirac equation is satisfied by the algebra that $\alpha_{i}$ and $\beta$ satisfy
$$
\hat{\mathcal{H}}_{\small D} = \boldsymbol{\alpha}\cdot \hat {\mathbf{p}} + \beta m
$$
This is the __Dirac hamiltonian operator__

# The Dirac Spinor
The fact that the Dirac hamiltonian operator is four-dimensional means that it necessarily acts on four-dimensional wave functions which is anything but trivial. Such objects are called __spinors__

$$
\psi = \begin{pmatrix}\psi_{1}  \\ \psi_{2}  \\ \psi_{3} \\ \psi_{4}\end{pmatrix}
$$

It is good to note the distinction between the operation of $\hat{\mathbf{p}}$ (on the components of the spinors) and the operation of $\boldsymbol{\alpha}$ and $\beta$ on the spinors themselves. It can also be stated that they are operators above the spinor space

# Probability Density & Current
For the proceeding analysis we denote the Dirac equation as follows

$$
\hat{\mathcal{D}}\psi \equiv i \frac{\partial \psi}{\partial t} + \hat{\mathcal{H}}_{\small D}\psi = 0 \tag{5}
$$
By performing the following algebraic manipulation we will be able to arrive at a familiar formula
$$
\begin{align*}
\psi^{\dagger}\Big(\hat{\mathcal{D}}\psi - \hat{\mathcal{D}}\psi^{\dagger}\Big)\psi &=0\\
\psi^{\dagger}a_{i} (\partial_{i}\psi) + (\partial_{i}\psi^{\dagger})a_{i}\psi &= \psi^{\dagger} \frac{\partial \psi}{\partial t} +  \frac{\partial \psi^{\dagger}}{\partial t}\psi\\
\partial_{i}(\psi^{\dagger} a_{i} \psi) &= \frac{\partial (\psi^{\dagger} \psi)}{\partial t}\\
\boldsymbol{\nabla}\cdot (\psi^{\dagger} \boldsymbol{\alpha} \psi) &= \frac{\partial (\psi^{\dagger} \psi)}{\partial t}\tag{6}
\end{align*}
$$
We recognize equation $(6)$ as the [[Probability Density & Current|continuity equation]] for probability, and so by analogy we denote the probability density and probability current as 
$$
\begin{align*}
\mathbf{J} &\equiv \psi^{\dagger}\boldsymbol{\alpha}\psi\\
\rho &\equiv \psi^{\dagger}\psi
\end{align*}
$$
which is comforting, since not only does the probability density independent of the energy, but it also takes a familiar form which is nonnegative for any $\psi$ The Dirac equation fixes the problem that showed up in the KG equation

# Covariant Form of the Dirac Equation
The Dirac equation is Lorentz invariant and it is therefore fitting to write it in a covariant form. We begin by writing the Dirac equation as follows and multiply it from the left by $\beta$
$$
i\left(\frac{\partial }{\partial t} + \boldsymbol{\alpha}\cdot \boldsymbol{\nabla}\right)\psi -\beta m\psi=0
$$
	We define what are known as Dirac $\gamma$-matrices $\gamma^{\mu}=\beta(1,\alpha_{x},\alpha_{y},\alpha_{x})$ and we use the definition covariant definition of the four derivative to write the Dirac notation in the following compact notation

$$
\large(i\gamma^{\mu}\partial_{\mu}-m)\psi=0
$$
We also use the Dirac $\gamma$-matrices to define the [[Four Vector|4-current]] in the following way

$$
j^{\mu}=(\rho,\mathbf{j}) = \psi^{\dagger}\gamma^{0}\gamma^{\mu}\psi \equiv \bar{\psi}\gamma^{\mu}\psi
$$
Where we used the definition of the __adjoined spinor__ $\bar{\psi}=\psi^{\dagger}\gamma^{0}$. The continuity equation can be therefore written as $\partial_{\mu}j^{\mu}=0$
