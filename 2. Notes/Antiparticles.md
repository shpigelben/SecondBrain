#note #physics #particle-physics #derivative  

[[Solutions to the Dirac Equation|Solutions]] to the [[Dirac Equation]] are associated with both positive and negative energies. This is unavoidable since the existence of negative energies is necessary for the solutions to be independent. What is the physical interpretation for the solutions associated with negative energies ?

# Dirac Sea
___
If lower, negative energy states were accessible one would assume that all particles would spontaneously tend toward those states. Clearly, this does not occur and a solution to the apparent contradiction is given by the Dirac sea interpretation which assumes in vacuum all of these negative energy states are filled. In this picture, the [[Pauli Exclusion Principle]] prevents positive energy (for example) electrons from occupying the corresponding negative energy states, but it poses a problem when considering bosons and their negatively energetic counterparts

# Holes in the Vacuum
___
![[../9. Misc/attachments/Pasted image 20220412162137.png|center|700]]

# Feynman-Stuckelberg Interpretation
___
It is an experimentally established fact that apart from possessing different charges, anti particles behave very similarly to regular particles, they seem to propagate forward in time and undergo similar interactions. It is therefore not straight forward to reconcile these experimental observations with the theoretical prediction of negative energies

 The Feynman Stuckelberg interpretation treats the anti particles as regular particles the negative energies that go backwards in time. This is best portrayed in the time evolution operator
$$ {\large e}^{-i tE} = {\large e}^{-i (-t)(-E)}$$
Given this interpretation, the [[Antiparticles|antiparticle]] spinors can be rewritten as 
$$u_{i}(E,\mathbf{p}){\large e}^{i(\mathbf{p\cdot r}-Et)}\to
u_{i}(-E,-\mathbf{p}){\large e}^{i(\mathbf{-p\cdot r}+Et)}\equiv v_{j}(E,\mathbf{p}){\large e}^{-i(\mathbf{p\cdot r}-Et)}$$
One can also look for solutions to the Dirac equation will the reverse sign in the exponent and identify them as antiparticles. The __antiparticle spinors__ are denoted with "switched" indices $v_{1}\equiv u_{4}$ and $v_{2}\equiv u_{3}$. The solution of an antiparticle spinor in terms of $v$ can be plugged into the Dirac equation to produce the following relation (the [[Solutions to the Dirac Equation#General Free Particle Solution|same expression]] is given for __particle spinor__ solutions for comparison)
$$\begin{align*}
&(\gamma^{\mu}p_{\mu}+m)v=0\\
&(\gamma^{\mu}p_{\mu}-m)u=0
\end{align*}$$
$$ \begin{align*}
&\psi_{i}=u_{i}{\large e}^{i(\mathbf{p\cdot x}-Et)} &\text{particles solutions}\tag{1}\\
&\psi_{i}=v_{i}{\large e}^{-i(\mathbf{p\cdot x}-Et)} &\text{antiparticles solutions}\tag{2}
\end{align*}  $$
As is done for the $u$ spinor we can define $v=\begin{pmatrix}v_{\small A} \\ v_{\small B} \end{pmatrix}$ and arrive at a coupled equation for $v_{\small A}$ and $v_{\small B}$ , define one of the two as a set of simple orthogonal states and arrive at four solutions $v_{1}\dots v_{4}$. We have eight solutions in total only four of which are independent, and while it is possible to work with either $u$ or $v$ spinors, it is more natural to embrace a spinor combination of the two that has positive energies for both particles and antiparticles, namely $\{u_{1},u_{2},v_{1},v_{2}\}$

> [!NOTE]- EXPLICIT $\{u_{1},u_{2},v_{1},v_{2}\}$
> 
$$ u_{1}=\sqrt{E+m}\begin{pmatrix} 1 \\ 0 \\ \frac{p_{z}}{E+m} \\ \frac{p_{x}+ip_{y}}{E+m} \end{pmatrix} \quad u_{2}=\sqrt{E+m}\begin{pmatrix} 0 \\ 1 \\ \frac{p_{x}-ip_{y}}{E+m} \\ \frac{-p_{z}}{E+m} \end{pmatrix} $$
$$ v_{1}=\sqrt{E+m}\begin{pmatrix} \frac{p_{x}-ip_{y}}{E+m} \\ \frac{-p_{z}}{E+m} \\ 0 \\ 1 \end{pmatrix} \quad v_{2}=\sqrt{E+m}\begin{pmatrix} \frac{p_{z}}{E+m} \\ \frac{p_{x}+ip_{y}}{E+m} \\ 1 \\ 0 \end{pmatrix} $$

# Operators of the Antiparticles
___
The normal quantum operators $\hat{\mathcal{H}}$ and $\hat{\mathbf{p}}$ acting on the antiparticle spinors written in the physical energy form (equation $(2)$) still do not give physical quantities. $\hat{\mathcal{H}}\psi= i \frac{\partial \psi}{\partial t}=-E \psi$ and $\hat{\mathbf{p}}\psi=-i\nabla\psi=-\mathbf{p}\psi$, and so the operators that __do__ yield the physical energy and momenta are
$$\hat{\mathcal{H}}^{v}\equiv -i \frac{\partial}{\partial t} \quad \quad \hat{\mathbf{p}}^{v}\equiv+i\boldsymbol\nabla$$
Furthermore, the change of sign for the momentum $\hat{\mathbf{p}}$ leads to a change of sign in the orbital angular momentum $\hat{\mathbf{L}}\to -\hat{\mathbf{L}}$ and from considerations of conservation of total [[Spin|angular momentum]] a new definition for the spin operator must be made $\hat{\mathbf{S}}^{v}=-\hat{\mathbf{S}}$. A spin-up hole in the Dirac sea leaves the vacuum in a net spin-down state