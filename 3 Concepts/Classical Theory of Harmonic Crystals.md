---
type: concept
discipline:
  - physics
field:
  - condensed-matter
---

The units that constitute a crystal do no remains static, unless in [[Thrid Law of Thermodynamics| absolute zero temperature]]. The classical theory of harmonic crystals takes the vibrational motion of the atoms into account while making two key assumptions.

1. Equilibrium position, $\mathbf{R}$,  the harmonic motion of each atom is a [[Bravais Lattice]] site, and the deviations from equilibrium due to oscillations are given by $\mathbf{u}(\mathbf{R})$ such that the exact position of each atom is given by
$$ \mathbf{r}(\mathbf{R}) = \mathbf{R} + \mathbf{u}(\mathbf{R}) $$
2. The deviations from equilibrium of each atom are __small__ compared to interatomic distances, so if $\mathbf{R}$ is a lattice vector, we can write  $$O(\mathbf{u}) \small{<<} O(\mathbf{R})$$
   Assumption 2 has less validity than assumption 1, but is makes a simpler theory - a harmonic approximation - from which precise quantitative results can be extracted, even though some properties require one to venture into unharmonic territory.

# Monoatomic Chain
We consider the equations of motion on an atom in a chain under the approximation that the interaction is harmonic. We write the net force on the atom at lattice site $n$ from its two adjacent neighbors
$$\begin{align*}
m\ddot{x}_{n}(t) &= - \kappa(x_{n}-x_{n+1}) - \kappa(x_{n}-x_{n-1}) \\
&= \kappa x_{n+1} + \kappa x_{n-1} -2\kappa x_{n}
\end{align*}$$
We guess a wave solution of the form $x_{n}(t) \propto \exp{{i(kx_{n_{0}}- \omega t)}}$ where$$x_{n_{0}} = na$$are the equilibrium positions of the atoms, which are considered to be a lattice with lattice constant $a$. Plugging our guess into the equation of motion we get
$$\begin{align*}
& -m\omega^{2}x_{n}(t) = \kappa e^{ika}x_{n}(t) + \kappa e^{-ika} x_{n}(t) - 2\kappa x_{n}(t)\\
&\Big[2\kappa (\cos{(ka)-1)+m\omega^2}\Big]x_{n}(t) =0
\end{align*}$$
The wave solution is satisfied for the following dispersion relation
$$\begin{align*}
\omega &= \sqrt{ \frac{\kappa}{m} } \sqrt{  2\Big(1-\cos{(ka)}\Big) }\\
&= 2\sqrt{ \frac{\kappa}{m} } \left|\sin{\left(\frac{ka}{2}\right)} \right| 
\end{align*}$$

# Derivation
The total potential energy of the crystal is given by the interaction energy of every distinct pair of atoms in the case of a static crystal the following would hold
$$ U = \frac{1}{2}\sum\limits_{R R'}\phi(R-R') = \frac{N}{2}\sum\limits_{R}\phi(R) $$
Where $\phi$ might be a [[Lennard Jones Potential]]. In our theory of harmonic crystal the above is written as
$$U = \frac{1}{2}\sum\limits_{R R'} \phi\Big(R-R' + u(R) - u(R')\Big) \tag{1}$$
The Hamiltonian of the total system will be written as
$$ \mathcal{H} = \frac{\mathbf{P(R)}^{2}}{2M} + U(R) $$
Taylor expanding $\small U\big[ (R-R') + (u-u') \big]\quad$ of $(1)$  [^1] with $\quad\boxed{\small R-R'\longrightarrow R\equiv r} \quad$ and $\quad\boxed{\small r-r'\equiv \epsilon} \quad$ we get

$$\begin{align} \small U(R) =& \frac{N}{2} \sum\limits\phi(R) \\ &+\frac{1}{2}\sum\limits_{RR'}(u-u')\cdot\nabla\phi{\small(R-R')}
\\
&+\frac{1}{4}\left[\sum\limits_{RR'}(u-u')\cdot\nabla\right]^{2}\phi(R-R')
\\
&+\mathcal{O}\big((u-u')^{3}\big)

\end{align}  $$
The coefficient of the first order in the Taylor series is minus the force exerted on the atom at $R$ by all surrounding atoms at equilibrium, and it must therefore vanish. We are left with the zeroth and second (harmonic - h) orders and neglect higher order terms
$$U = U_{\small eq} \  {\small+} \  U_{\small h}$$
___
$$U_{\small h} = \frac{1}{4}\sum\limits_{\mu\nu=x,y,z}  (u_{\mu}-u_{\mu}')\frac{\partial^{2}\phi(R-R')}{\partial x_{\mu}\partial x_{\nu}}(u_{\nu}-u_{\nu}')$$
and $U_{\small eq}$ can be taken to be 0 because it is a constant and it can be "gauged away".
$$U = U_{\small h} = \frac{1}{4}\sum\limits_{\mu\nu=x,y,z}  (u_{\mu}-u_{\mu}')\frac{\partial^{2}\phi(R-R')}{\partial x_{\mu}\partial x_{\nu}}(u_{\nu}-u_{\nu}')$$
is usually written in the form
$$ U = \frac{1}{2}\sum\limits_{RR'} u_{\mu}(\mathbf{R})D_{\mu\nu}(\mathbf{R}-\mathbf{R}')u_{\nu}(\mathbf{R}) $$
___
### One dimensional lattice without a base
If we assume interactions in the nearest neighborhood are the only ones significant enough. We denote $$K\equiv\frac{\partial^{2}\phi(x_0)}{\partial x^2}$$
and so the total potential, summed over all coupled interaction between each pair of atoms, is given by
$$ U_{h} = \sum\limits_{n} \frac{K}{2}\Big[u({\small na})-u({\small(n+1)a})\Big]^{2}$$
The equation of motion for the atom in the $na$ position will be
$$F_{x}= m\ddot{x} = -\partial_xU_{h}\longrightarrow m\ddot{u}(na) = -K\frac{\partial U_{h}}{\partial u{\small(na)}}$$
$$ \ddot{u}(na) = -\frac{K}{m}\Big[ 2u{\small(na)} - u{\small((n+1)a)} - u{\small((n-1)a)} \Big] \tag {1}$$
we must specify boundary conditions. Since we usually deal with crystals that are large in volume relative to their surface we also neglect surface effects, and so it is mathematically convenient to choose periodic boundary conditions $u(na + Na) = u(na)$, where $N$ is the number of ions in the 1 dimensional lattice these are the _Bon - von Karman periodic boundary conditions_

We seek a solution to $(1)$ in the form of $u(na,t) \propto e^{i(kna-wt)}$, where the periodic boundary conditions demand that $e^{ikNa}=1$ which leads in turn to the quantization of $k_{n}=\frac{2\pi}{a} \frac{n}{N}$. $n$ is an integer with only $N$ values that provide distinct solutions. we take them to be the $n$ values that provide $k\in\left[-\frac{\pi}{a},\frac{\pi}{a}\right]$
substituting $e^{i(k_{n}a-wt)}$ into $(1)$ yields the [[Dispersion Relation]] $\omega(k)$
$$ \omega(k) = \sqrt{\frac{2K}{m}\big(1-\cos{k_{n}a}\big)} = 2\sqrt{\frac{K}{m}}\left|\sin{\left(\frac{k_{n}a}{2}\right)}\right|$$
The solutions can be taken to be the real or imaginary part of the suggested solution
$$ u(na,t) \propto \begin{cases}
cos(k_{n}a-\omega t) \\
sin(k_{n}a-\omega t)
\end{cases}
$$
which are traveling waves with group velocity  $v_{g}=\partial\omega / \partial k$  and phase velocity $v_{p}= \omega(k)/k$

<iframe src="https://www.desmos.com/calculator/ziwfxfc2uq?embed" width="400" height="400" style="border: 1px solid " frameborder=0></iframe>

For very long waves $k<<1$ the relation is to a good approximation linear (the linear regime where the phase and group velocity are approximately equal is called the _acoustic regime_) , but for shorter wavelengths that get closer to interatomic spacing, the relation ceases to be linear, and for waves of $|k| = \frac{\pi}{a}$ the the curve flattens.

___
# One dimensional lattice with a base
We now consider a one dimensional [[Bravais Lattice]] with two ions at equilibrium positions $na$ and $d+na$ respectively, where d is the basis vector.

![[../4 Misc/Excalidraw/Lattice With a Base|center|600]]
We take $d\leq a/2$ so that the force between two atoms depend on their separation.
For simplicity we assume that the two ions are identical and that interactions occur between nearest neighbors. The harmonic potential energy and the forces are given by
$$U_{h}= \frac{K}{2}\sum\limits_{n}\Big[u_1(na)-u_{2}(na)\Big]^{2} + \frac{G}{2}\sum\limits_{n}\Big[u_1(na)-u_{2}(na + a)\Big]^{2}$$
Where the force is stronger for atoms separated by d
$$  M\ddot{u}_{1}(na) = -K\Big[u_1(na)-u_{2}(na)\Big] - G\Big[u_1(na)-u_{2}(na - a)\Big]$$
$$  M\ddot{u}_{2}(na) = -K\Big[u_{2}(na)-u_{1}(na)\Big] - G\Big[u_2(na)-u_{1}(na + a)\Big]$$
with corresponding solutions
$$ u_{1(na)}= \epsilon_{1}e^{i(k_{n}a-\omega t)}$$
$$ u_{2(na)}= \epsilon_{2}e^{i(k_{n}a-\omega t)}$$
with $k_{n}$ as determined by the periodic boundary conditions as shown in the 1d case. The dispersion relations gained by plugging the solutions into the equations of motion form a set of two homogeneous equations
$$[M\omega^{2}-(K+G)]\epsilon_{1} + (K+Ge^{-ika})\epsilon_{2}= 0$$
$$ (K+Ge^{ika})\epsilon_{1} +[M\omega^{2}-(K+G)]\epsilon_{2}= 0$$
The solution to the set of homogeneous equations will have a non trivial answer given that the determinant of the representing matrix vanishes. This demand leads to the following dispersion relation
$$ \omega^{2}=\frac{{K+G}}{M}\pm \frac{1}{m}\sqrt{K^{2}+ G^{2}+2KG\cos{ka}}$$
and
$$\frac{\epsilon_2}{\epsilon_{1}}= \mp \frac{{K+e^{ika}}}{|K+Ge^{ika}|}$$
For each of the $N$ values of $k_{n}$ there are two solutions, leading to a total of $2N$ normal modes.