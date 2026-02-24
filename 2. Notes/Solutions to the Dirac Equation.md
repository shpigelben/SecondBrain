We recall that the [[Dirac Equation]] acts on an entity that lives in a four-dimensional [[Hilbert space]] and is knowns a a __Dirac spinor__. We begin the discussion of the solutions to the Dirac equation in the most natural place the free particle solutions
$$\psi(\mathbf{r},t)=u(E,\mathbf{p})e^{i(\mathbf{p}\cdot \mathbf{r}-Et)} =u(E,\mathbf{p})\large e^{-ip^{\mu}r_{\mu}} \tag{1}$$
The $u(E,\mathbf{p})$ are four-component Dirac spinors. The position and time dependencies appear only in the complex exponential part, so that when the [[Dirac Equation#Covariant Form of the Dirac Equation|Dirac gamma matrices]] act on the components of $\psi$ the act only on that part 
$$\partial_\mu(\psi)=\partial_\mu(ue^{-ip^{\mu}r_{\mu}})= -ip_{\mu}(ue^{-ip^{\mu}r_{\mu}})=-ip_{\mu}\psi$$
We make use of the above in plugging solution $(1)$ into the Dirac equation
$$\begin{align*}
(i \gamma^{\mu}\partial_{\mu}-m)\psi&=0\\
(\gamma^{\mu}p_{\mu}-m)\psi&=0\\
(\gamma^{\mu}p_{\mu}-m)u&=0 \tag{2}
\end{align*}$$
# Particle at Rest
For a particle at rest with $\mathbf{p=0}$, the free-particle wave-function is simply 
$$\psi(E,\mathbf{0})=u(E,\mathbf{0})e^{-iEt}$$
And so equation (2) reduces to the following eigenvalue equation
$$E \gamma^{0}u=m u  \quad \to \quad E \begin{pmatrix}1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & -1 & 0 \\ 0 & 0 & 0 & -1\end{pmatrix}\begin{pmatrix}\phi_{1} \\ \phi_{2} \\ \phi_{3} \\ \phi_{4}\end{pmatrix}=m\begin{pmatrix}\phi_{1} \\ \phi_{2} \\ \phi_{3} \\ \phi_{4}\end{pmatrix}$$
with the following four orthogonal solutions. The first pair have positive energies $(E=m)$, and the second pair have negative energies $(E=-m)$
$$u_{1}=N\begin{pmatrix*} 1 \\ 0 \\ 0 \\ 0\end{pmatrix*} \quad
u_{2}=N\begin{pmatrix*} 0 \\ 1 \\ 0 \\ 0\end{pmatrix*} \quad
u_{3}=N\begin{pmatrix*} 0 \\ 0 \\ 1 \\ 0\end{pmatrix*} \quad
u_{4}=N\begin{pmatrix*} 0 \\ 0 \\ 0 \\ 1\end{pmatrix*} \quad$$
For convenience we transition to the more compact Dirac notation
$$\begin{align*}
0\stackrel{!}{=}(E \gamma^{0}-m )\ket{1}&=(E-m)\ket{1}\\
0\stackrel{!}{=}(E \gamma^{0}-m )\ket{2}&=(E-m)\ket{2}\\
0\stackrel{!}{=}(E \gamma^{0}-m )\ket{3}&=(-E-m)\ket{3}\\
0\stackrel{!}{=}(E \gamma^{0}-m )\ket{4}&=(-E-m)\ket{4}
\end{align*}$$
$$\begin{align*}
&\ket{\psi_{1}}=N \ket{1}e^{-imt}\leadsto \ket{\uparrow}_{E} \quad &\ket{\psi_{3}}=N \ket{3}e^{imt} \leadsto \ket{\uparrow}_{-E} \\
&\ket{\psi_{2}}=N \ket{2}e^{-imt} \leadsto \ket{\downarrow}_{E} \quad &\ket{\psi_{4}}=N \ket{4}e^{imt} \leadsto \ket{\downarrow}_{-E}
\end{align*}$$
Since the spinors are also eigenstates of $\hat{S}_{z}$ the positive energy solutions correspond to positive energy spins up and down and vice versa

# General Free Particle Solution
For a particle with non-zero momentum the solution appears as it does in $(1)$ and it therefore satisfies $(2)$.
$$\begin{align*}
&(\gamma^{\mu}p_{\mu}-m)u=0 \\
&(E \gamma^{0} + \gamma^{i}p_{i}-m)u=0\\
&(E \beta + \beta \alpha_{i}p_{i}-m)u=0
\end{align*}$$
We recall the definition of the $\alpha,\beta$ matrices $\alpha_{i}=\small\begin{pmatrix}0 & \sigma_{i} \\ \sigma_{i} & 0\end{pmatrix}$ $\beta=\small\begin{pmatrix}I & 0 \\ 0 & -I\end{pmatrix}$ and use it to write the above in matrix notation
$$\left[\begin{pmatrix}E & 0 \\ 0 & -E\end{pmatrix} + \begin{pmatrix}0 & -\sigma_{i}p_{i} \\  \sigma_{i}p_{i}  & 0 \end{pmatrix} -\begin{pmatrix}m & 0 \\ 0 & -m\end{pmatrix}\right]\begin{pmatrix}u_{\small A} \\ u_{\small B}\end{pmatrix}=0$$
$u_{\small A}$ and $u_{\small B}$ are two component parts of the spinor and correspond to a particle and [[Antiparticles|an antiparticle]]. We simplify the last equation further by writing the components in vector notation
$$\begin{pmatrix}(E-m)I & -\boldsymbol{\sigma\cdot p} \\ \boldsymbol{\sigma\cdot p} & -(E-m)I \end{pmatrix} \begin{pmatrix}u_{\small A} \\ u_{\small B}\end{pmatrix}=0 $$
The separation of the spinor into two components is convenient in the treatment of the matrix as a block matrix. The solution give us two coupled equations
$$\begin{align*}
u_{\small A} &= \frac{\boldsymbol{\sigma\cdot p}}{E-m}u_{\small B}\\
u_{\small B} &= \frac{\boldsymbol{\sigma\cdot p}}{E+m}u_{\small A}
\end{align*}$$
The two simplest orthogonal solutions we can chose for $u_{\small A}$ are $\small\begin{pmatrix}1 \\ 0\end{pmatrix}$ & $\small\begin{pmatrix}0 \\ 1\end{pmatrix}$
which consequently determine the values for $u_{\small B}$ and give us the first two solutions for the spinors
$$u_{1}(E,\mathbf{p})=N_{1}\begin{pmatrix}1 \\ 0 \\ \frac{p_{z}}{E+m} \\ \frac{p_{x}+ip_{y}}{E+m}\end{pmatrix} \quad \quad u_{2}(E,\mathbf{p})=N_{2}\begin{pmatrix}0 \\ 1 \\ \frac{p_{x}-ip_{y}}{E+m} \\ \frac{-p_{z}}{E+m}\end{pmatrix}$$
Going about the same procedure in which $u_{\small B}$ are chosen as the simplest orthogonal set yields the two other solutions
$$u_{3}(E,\mathbf{p})=N_{3}\begin{pmatrix} \frac{p_{z}}{E-m} \\ \frac{p_{x}+ip_{y}}{E-m} \\ 1 \\ 0\end{pmatrix} \quad \quad u_{4}(E,\mathbf{p})=N_{4}\begin{pmatrix}\frac{p_{x}-ip_{y}}{E-m} \\ \frac{-p_{z}}{E-m} \\ 0 \\ 1\end{pmatrix}$$
A general solution in the form $\psi_{i}=u_{i}(E,\mathbf{p})\large e^{-ip^{\mu}r_{\mu}}$ which is plugged in the Dirac equation will produce a the relativistic dispersion relation
$$E^{2}=m^{2}+p^{2}$$
It holds for both positive and negative energies. In the $\mathbf{p}\to 0$ limit we regain the solutions for particles at rest for which $u_{1,2}$ correspond to positive energy particles, and $u_{3,4}$ correspond to negative energy antiparticles. It is also possible to arrive at these solutions by boosting the solution of particle at rest into a frame with velocity corresponding to the "desired" momentum $\mathbf{p}$. Having particles that correspond to negative energies is necessary for the independence of the four solutions

# Wavefunction Normalization
Normalization to the $2E$ particles per unit volume ([[../Lorentz Invariant Phase Space (LIPS)|Lorentz Invariant normalization]] ?)
$${u_{1}}^{\dagger}u_{1}= |N|^{2} \left(1 + \frac{p_{x}^{2}+p_{y}^{2}+p_{z}^{2}}{(E+m)^{2}}\right)=|N|^{2} \frac{2E}{E+m}$$
For ${u_{1}}^{\dagger}u_{1}=2E$ we require that $N=\sqrt{E+m}$
