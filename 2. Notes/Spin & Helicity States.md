#note #physics #particle-physics #concept 
#relativity

The [[Solutions to the Dirac Equation#Particle at Rest|rest particle solutions]] to the [[Dirac Equation]] are clearly eigenstates of the [[Spin|total spin]] $\hat{S}^{2}$ and z-projection spin $\hat{S}_{z}$ operators(in the Pauli-Dirac representation in which both operators are diagonal). While It is not the case for the [[Solutions to the Dirac Equation#General Free Particle Solution|general solution]] for particles with momentum $\mathbf{p}$, it is also true that the solutions with momentum $\mathbf{p}=(0,0,\pm p)=p_{z}$ are eigenstates of the diagonal spin operators
$$\hat{S}_{z}=\frac{1}{2}\Sigma_{z}=\frac{1}{2}\begin{pmatrix}\sigma_{z} & 0 \\ 0 & \sigma_{z}\end{pmatrix}=
\frac{1}{2}\begin{pmatrix}1 & 0 & 0 & 0 \\ 0 & -1 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & -1\end{pmatrix}$$
For both cases (Rest and propagating in the z-direction), the solutions $u_{1}$ and $v_{1}$ correspond to __spin-up__ states, and  the solutions $u_{2}$ and $v_{2}$ correspond to __spin-down__ states. We also recall that on the [[Antiparticles#Operators of the Antiparticles|antiparticle spinors]] we must act with the appropriate operator ${\hat{S}_{z}}^{v}=-\hat{S}_{z}$
$$\begin{align*}
&\hat{S}_{z}u_{1}{\small(E,0,0,\pm p)}=+{\tiny\frac{1}{2}}u_{1} &\hat{S}_{z}^{v}v_{1}{\small(E,0,0,\pm p)}=+{\tiny\frac{1}{2}}v_{1}\\
&\hat{S}_{z}u_{2}{\small(E,0,0,\pm p)}=-{\tiny\frac{1}{2}}u_{2}  &\hat{S}_{z}^{v}v_{2}{\small(E,0,0,\pm p)}=-{\tiny\frac{1}{2}}v_{2}
\end{align*}$$
# Helicity
Since $u,v$ solutions only map to easily identified spin states, and since $S_{z}$ and $\mathcal{H}_{\small D}$ do not commute and do not share eigenstates in the same basis (not diagonal in the same basis - cannot be measured simultaneously), rather then defining a basis in terms of external (x-axis) considerations we introduce the more natural and "personal" property of __helicity__. The helicity of a particle is defined as the normalized component of the spin along the axis of propagation
$$\hat{h}\equiv \frac{\hat{\mathbf{S}}\cdot\hat{\mathbf{p}}}{p}=\frac{\hat{\boldsymbol{\Sigma}}\cdot\hat{\mathbf{p}}}{2p}=\frac{1}{2p}\begin{pmatrix}\boldsymbol{\sigma}\cdot\hat{\mathbf{p}} & 0 \\ 0 & \boldsymbol{\sigma}\cdot\hat{\mathbf{p}}\end{pmatrix}$$
It can be see that unlike the spin, helicity does commute with the Dirac hamiltonian were we recall the [[Spin|spin-hamiltonian commutation relation]]
$$\begin{align*}
\big[ \hat{\mathcal{H}}_{\small D},\hat{h} \big] &= \big[ \hat{\mathcal{H}}_{\small D}, \hat{\mathbf{S}}\cdot\hat{\mathbf{p}} \big]\\
&= \big[ \hat{\mathcal{H}}_{\small D}, \hat{\mathbf{S}} \big]\cdot\hat{\mathbf{p}} + \hat{\mathbf{S}}\cdot \cancelto{0}{\big[ \hat{\mathcal{H}}_{\small D}, \hat{\mathbf{p}} \big]}\\
& = i (\boldsymbol{\alpha}\times \hat{\mathbf{p}})\cdot\hat{\mathbf{p}} =0
\end{align*}$$
It is therefore possible to identify spinor states which are __simultaneous eigenstates__ of the free particle Dirac hamiltonian and the helicity operator. The eigenstates of spin-half spinor states acted upon by the helicity operator are $\pm 1/2$ and are termed __right\left-handed__ helicity states

# Lorentz Variance
The helicity is by its definition not Lorentz invariant (Unlike [[Chirality]]). It can be easily understood by the fact the the handedness can be changed by transforming into a frame of reference where the momentum of the particle switches signs

# Spherical Coordinates
Let us solve the helicity eigenvalue problem for a general solution in terms of $u$, namely the equation $\hat{h}u=\lambda u$. By treating $u$ as composed of two two-dimensional components $u_{\small A}$ and $u_{\small B}$ the eigenvalue equation can be written
$$ \frac{1}{2p} \begin{pmatrix}\boldsymbol{\sigma}\cdot\hat{\mathbf{p}} & 0 \\ 0 & \boldsymbol{\sigma}\cdot\hat{\mathbf{p}} \end{pmatrix}\begin{pmatrix}u_{\small A} \\ u_{\small B}\end{pmatrix} = \lambda \begin{pmatrix}u_{\small A} \\ u_{\small B}\end{pmatrix}$$
This can be more simply be written as a set of 2 e.v. problems
$$
\frac{1}{2p}(\boldsymbol{\sigma\cdot p})u_{j} = \lambda u_{j}
$$
__eigenvalues__ can be calculated by squaring both sides and remembering that $(\boldsymbol{\sigma\cdot p})^{2}=p^{2}$. Doing so yields the eigenvalues that correspond to the helicity __handedness__
$$\frac{1}{4}u_{j}=\lambda^{2}u_{j} \Longrightarrow \lambda=\pm \frac{1}{2}$$
__Next__ we write the helicity operator in spherical coordinates where $\mathbf{p}=p(\cos\theta, \sin\theta\cos\phi, \sin\theta\sin\phi)$ so that for $u_{\small A}=\tiny\begin{pmatrix}a \\ b\end{pmatrix}$ we get
$$ 
\begin{align*}
\frac{1}{2p}\begin{pmatrix}p_{z} & p_{x}-ip_{y} \\ p_{x}+ip_{y} & -p_{z}\end{pmatrix}\begin{pmatrix}a \\ b\end{pmatrix}&= \lambda\begin{pmatrix}a \\ b\end{pmatrix}\\
\frac{1}{2}\begin{pmatrix}\cos\theta & \sin\theta e^{-i\phi} \\ \sin\theta e^{i\phi} & -\cos\theta\end{pmatrix}\begin{pmatrix}a \\ b\end{pmatrix} &= \lambda\begin{pmatrix}a \\ b\end{pmatrix} \tag{1}
\end{align*}$$
which gives us the following relation
$$\frac{b}{a} = \frac{2\lambda-\cos\theta}{\sin\theta}e^{i\phi} \tag{2}$$
for right handed $\uparrow$ helicity $\lambda=1/2$ and we get (using some identities)
$$\frac{b}{a}= \frac{e^{i\phi}\sin{(\theta/2)}}{\cos (\theta/2)}\longrightarrow~u_{\small A}=\begin{pmatrix}\cos{(\theta/2)} \\ e^{i\phi}\sin{(\theta/2)}\end{pmatrix}\tag{3}$$
__Now__ that we have the first component of the spinor, we can use the connection between $u_{\small A}$ and $u_{\small B}$ given by the [[Solutions to the Dirac Equation#General Free Particle Solution|Dirac hamiltonian]] to find the spinor
$$u_{\small B} = \frac{\boldsymbol{\sigma\cdot p}}{E+m}u_{\small A} = \lambda \left(\frac{2p}{E+m}\right)u_{\small A}\to \left(\frac{p}{E+m}\right)u_{\small A}$$
such that the __right-handed helicity spinor__ can be identified as
$$u_{\uparrow} = \sqrt{E+m}\begin{pmatrix}\cos\theta/2 \\ e^{i\phi}\sin\theta/2 \\ \frac{p}{E+m}\cos\theta/2 \\ \frac{p}{E+m}e^{i\phi}\sin\theta/2\end{pmatrix}$$
We can find the left-handed helicity spinor by taking $\lambda=-1/2$. And we can find the antiparticle spinors $v_{\uparrow}$ and $v_{\downarrow}$ by using $\hat{\mathbf{S}}^{v}=-\hat{\mathbf{S}}$