---
type: concept
discipline:
  - physics
field:
  - quantum-mechanics
---

A particle $m$ with a charge $e$ is in a constant homogeneous magnetic field $\mathbf{B} = B_{z}$ , with velocity perpendicular to the magnetic field such that by [[Lorentz Force |the Lorentz force]], it has cyclotron frequency
$$ \omega_{\small B} = \frac{eB}{mc} \tag{1}$$
By choosing the gauge $\mathbf{A} = (-By,0,0)$ the [[Hamiltonian Operator|hamiltonian]] of the particle is given by 
$$ \mathcal{H} = \frac{1}{2m}\left(P_{x} + \frac{e}{c}By\right)^{2} + \frac{1}{2m}{P_{y}}^{2} \tag{2} $$
Where we consider the particle to live in a _hall bar geometry_ - a $L\times L$ conductive bar that lives in the $x,y$ plane that is _periodic in x_, and does not allow for motion in the $z$ direction. Let us consider conserved quantities by considering the [[Invariance & Symmetry| symmetries]] of the hamiltonian. $\mathcal{H}\longmapsto \mathcal{H}(y,P_{x},P_{y})$ since there is no $x$ dependence $[\mathcal{H},P_{x}]=0$ and so $P_{x}$ is a constant of motion, and the hamiltonian can be diagonalized in the x-momentum basis, therefore
$$\mathcal{H} = \Bigg[\frac{1}{2m}P_{y} + \frac{1}{2m}\left(\frac{eB}{c}y + \hbar k_{x}\right)^{2} \Bigg] \tag{3}$$
Rearranging $(3)$ and it is clear that we have a [[Quantum Harmonic Oscillator |QHO]] in the $y$ direction.

> [!NOTE] Derivation
> 
By rearranging $(3)$ and recognizing that we have a [[Quantum Harmonic Oscillator | QHO]] in the $y$ direction we can write$$\frac{1}{2m}\left(\frac{eB}{c}y + \hbar k_{x}\right)^{2} = \frac{1}{2m}\bigg(m\omega_{\small B}y + \hbar k_{x}\bigg)^{2}$$The next step, which is unnecessary but simplifies the hamiltonian a bit, requires us to recognize the natural length scale of the QHO$$l = \sqrt{\frac{\hbar}{m\omega}} \longmapsto l_{\small B} =\sqrt{\frac{\hbar}{m\omega_{\small B}}} = \sqrt{ \frac{\hbar c}{eB} }$$And plug it in appropriately to finally have$$= \frac{1}{2}m{\omega_{\small B}}^{2} \bigg( y + \frac{\hbar}{m\omega_{\small B}} k_{x} \bigg)^{2}= \frac{1}{2}m{\omega_{\small B}}^{2}\bigg( y + {l_{\small B}}^2k_{x} \bigg)^{2}$$

And we can tidy it up using recognizing that $(1)$ can be plugged in and renaming the oscillator shift from the origin by $-y_{0}(k_{x})$ 
$$\mathcal{H}_{k_{x}}=\frac{1}{2m}{P_{x}}^{2} + \frac{1}{2}m{\omega_{\small B}}^{2}\bigg( y + {l_{\small B}}^2k_{x} \bigg)^{2} \tag{4}$$
- $l_{\small B}$ is the natural length of the oscillator and represents the width of oscillations. 
- We can see that the value of $k_{x}$ determines the center of oscillations.
- $L_{y}$ determines how many centers of oscillations fit inside the system.
- $k_x$ is also quantized (by the periodic boundary conditions) $k_{x}=\frac{2\pi n_{x}}{L_{x}}$

we demand that the center of oscillations $y_{0}= {l_{\small B}}^2k_{x}$ remain inside the system so
$$ 0 < |y_{0}| < L_{y}$$
Plugging in $y_{0}$ and $k_{x}$ explicitly into the above inequality, and we get an upper bound on the possible number of states of the system (for a given size of the system and magnetic field strength). The maximum number of states is given by the upper bound and is known as _Landau degeneracy_
$$\large\boxed{
\begin{align*} \\ \quad

\bar{n}_{x}=\frac{L_{x}L_{y}}{2\pi {l_{\small B}}^{2}} = \frac{L_{x}L_{y}}{2\pi\hbar c}eB = \frac{\Phi_{\small B}}{\Phi_{0}}

\quad \\\
\end{align*}}$$
Where we used the explicit form of $l_{\small B}$ , defined the flux of the system $\Phi_{\small B} = L_{x}L_{y}B$  and plugged in the definition of the [[Fluxon]]. So in this context, it is the number of fluxons that can fit inside the overall flux of the system. 

___
#### Solution
A solution to $(4)$ will consist of free motion in the $x$ direction and the Hermite solution to the QHO
$$ \psi (x,y) = H(y)e^{ik_{x}x}\tag{5} $$
The boundary conditions for $x$ are periodic which yields $k_{x}=\frac{2\pi n_{x}}{L}$ 