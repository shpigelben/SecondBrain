---
type: concept
discipline:
  - physics
field:
  - standard-model
---

Parity transformation is the flipping of all spatial coordinates about the origin. It is an important concept since interactions always conserve parity. 
$$ P:\begin{pmatrix}x \\ y \\ z\end{pmatrix} \longmapsto \begin{pmatrix}-x \\ -y \\ -z\end{pmatrix}$$
since parity transformation is the inverse of itself, we can write $\psi=P\psi'$ where $\psi$ is a [[Solutions to the Dirac Equation|spinor solution]] for the Dirac equation
$$ \begin{align*}
&(i\gamma^{\mu}\partial_{\mu}- m)\psi=0\\
&(i\gamma^{\mu}\partial_{\mu}- m)P\psi'=0\\
&(i \gamma^{0}\partial_{t} -i \gamma^{j}\partial'_{j}-m)P \psi'=0
\end{align*} $$
where in the last equality we replaced $x'_{j} \longmapsto -x$ for the spatial derivatives. Next, we multiply from the right by $\gamma^{0}$ and recall that $\{ \gamma^{0},\gamma^{j} \}=0$ 
$$\begin{align*}
&\Rightarrow (i\gamma^{0}\gamma^{0}\partial_{t} + \gamma^{j}\gamma^{0}\partial'_{j} -\gamma^{0} m)P \psi'=0\\
&\Rightarrow (i\gamma^{0}[\gamma^{0}P]\partial_{t} + \gamma^{j}[\gamma^{0}P]\partial'_{j} -[\gamma^{0}P] m) \psi'=0\\
&\Rightarrow(i \gamma^{\mu}[\gamma^{0}P]\partial'_{\mu}-[\gamma^{0}P]m)\psi'=0
\end{align*}$$
For $\psi'$ to remain a solution under parity, namely to be invariant to parity, $\gamma^{0}P$ has to be proportional to the identity matrix. In addition we have $PP=I$
$$\gamma^{0}P \propto I \to \gamma^{0}PP \propto P \to \gamma^{0} \propto P$$
$P$ can be either $\pm \gamma^{0}$ but it is conventional to pick $+\gamma^{0}$ so that the __intrinsic parity__ of spin-1/2 particles is __even__ and and that of spin-1/2 [[Antiparticles]] is __odd__. The intrinsic parity of a particle is defined for a particle at rest, so 
$$\begin{align*}
& P(u_{1}+v_{1}) = \gamma^{0}(u_{1}+v_{1})=\\
& \Rightarrow\tiny \begin{pmatrix}1 & 0 & 0 & 0\\
0 & 1 & 0 & 0\\
0 & 0 & -1 & 0\\
0 & 0 & 0 & -1\end{pmatrix}\left[\sqrt{2m}\begin{pmatrix}1\\
0\\
0\\
0\end{pmatrix}+\sqrt{2m}\begin{pmatrix}0\\
0\\
1\\
0\end{pmatrix}\right]=\\
&=u_{1}-v_{1}
\end{align*}$$
Parity, like [[Charge Conjugation]] is a type of discrete symmetry

