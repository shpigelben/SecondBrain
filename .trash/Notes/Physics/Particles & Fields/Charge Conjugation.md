# Charge Conjugation
#particles #relativity #quantum #mechanics 

Just as the [[Hamiltonian Operator#Continuum Limit|Schrodinger hamiltonian]] receives an addition for charged particles $\hat{p}\to\hat{p}+A(\hat{x})$ in magnetic fields and $E\to E-e\phi(\hat{x})$, so does the [[Dirac equation#Covariant Form of the Dirac Equation|Dirac equation]]
$$(i \gamma^{\mu}\partial_{\mu}-m)\psi=0 ~~\longrightarrow ~~ 
 \gamma^{\mu}(\partial_{\mu}-ieA_\mu)\psi  + im\psi=0 \tag{1}
$$
Under the operations of complex-conjugation following with multiplication from the left by $-i \gamma^{\mu =2}=-i \gamma^{2}$ equation $(1)$ becomes
$$ \begin{align*}
&\gamma^{\mu}(\partial_\mu+ieA_{\mu})i \gamma^{2}\psi^{*}+im ~ i \gamma^{2}\psi^{*}=0 \\
\Rrightarrow \  & \gamma^{\mu}(\partial_\mu+ieA_{\mu})\psi' + im\psi'=0 \tag{2}
\end{align*} $$
the Dirac equation for a [[Antiparticles|positively charged particle]] $(+e)$. Where we defined a new operation $\hat{C}$ known as __charge conjugation__
$$\large\boxed{\psi' = \hat{C}\psi \equiv i\gamma^{2}\psi^{*}}$$
It is clear, when letting $\hat{C}$ act on a spinor solution of a particle, that the positively charged spinor becomes that of an [[Antiparticles#Feynman-Stuckelberg Interpretation|antiparticle]].
$$\psi'=\hat{C}\psi=i\gamma^{2}{u_{1}}^{*}e^{-i (\mathbf{p\cdot\mathbf{x}}-Et)}=v_{1}e^{-i (\mathbf{p\cdot\mathbf{x}}-Et)}\tag{3}$$
> [!NOTE]- Proof of (3)
> It is shown only for $v_{1}$ but also holds for $v_{2}$
> $$\small i\gamma^{2}{u_{1}}^{*}=
i\begin{pmatrix}0 & 0 & 0 & -i \\ 0 & 0 & i & 0 \\ 0 & i & 0 & 0 \\ -i & 0 & 0 & 0 & \end{pmatrix}
\sqrt{E+m}\begin{pmatrix}1  \\ 0 \\ \frac{p_{z}}{E+m} \\ \frac{p_{x}+ip_{y}}{E+m}\end{pmatrix}
=\sqrt{E+m}\begin{pmatrix} \frac{p_{x}-ip_{y}}{E+m}  \\ \frac{-p_{z}}{E+m} \\ 0 \\ 1 \end{pmatrix} = v_{1}$$

The overall effect of the charge conjugation operator is to transform the particle spinors $u_{1}$ and $u_{2}$ into their antiparticle counterparts $v_{1}$ and $v_{2}$ since the effect on the complex exponent is a change in an unobservable phase

