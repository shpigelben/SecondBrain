#note #physics #statistical-mechanics #derivative

# FM-PM Phase Transition
The Paramagnet $\to$ Ferromagnet transition is a [[Magnetism|magnetic]] phase transition, specifically it is a __symmetry breaking transition__ since the paramagnet (disordered phase) has no preferred direction, while the ferromagnet (ordered phase) does. It fits well with the notion of __order to disorder__ transition

paramagnets are disordered phases while ferromagnets are ordered phases

![center|400](../9.%20Misc/attachments/ferropara.png)

# Curie's Temperature
The FM$\to$PM at a critical temperature, known as Curie's temperature.

## Magnetization as an Order Parameter
Magnetization is a natural choice for an order parameter for the magnetic phase transition, since it is strictly zero in one phase and nonzero in another. Unlike the volume as an order parameter for the [[Liquid-Gas Phase Transition]], magnetization can also serve as a measure for the local ordering of the spins.

## Difference from Liquid-Gas Transition
$\bullet$ Unlike in the [[Liquid-Gas Phase Transition]] where the transition can occur at multiple pressures, the FM$\to$PM transition occurs only for zero external magnetic field

$\bullet$ There is no [[Coexistence of Phases in Pure Substances|latent heat]] involved in the FM$\uparrow$ $\to$ FM$\downarrow$ transition. It can be observed when viewing the H-T diagram, where $\frac{\partial H}{\partial T}=0$ and from [[Maxwell Relations]] we have $\frac{\partial H}{\partial T}=\frac{\partial S}{\partial M}$ and so $\Delta S=0\leadsto \ell=T\Delta S=0$ 

## Hysteresis
![center|400](../9.%20Misc/attachments/Pasted%20image%2020220411180838.png)

# Noninteracting Spins - Paramagnet Model
in the absence of interaction between spins, the Hamiltonian of a magnetic system in external field is
$$\mathcal{H}_{0} = -\mathbf{H}\cdot \mathbf{M} = -\mathbf{H}\cdot \mu\sum\limits_{i=1}^{N}\boldsymbol{\sigma}_{i} ~\to~ -H\sum\limits_{i=1}^{N}$$
for simplicity we take $\mu =0$. Quantization of the spin gives $\sigma_{i}=\pm 1$ along the direction of the external field. The partition function of the single particle states of N noninteracting spins is
$$Z = (Z_{1})^{N} = \left(e^{\beta H}+e^{-\beta H}\right)^{N} = (2\cosh{\beta H})^{N}$$
$$\braket{M} = -\left( \frac{\partial F}{\partial H} \right)_{T} = \frac{N}{\beta} \frac{\partial}{\partial H} \bigg[\ln{(2\cosh{\beta H})}\bigg] = N\tanh{\beta H} \tag{1}$$
This model cannot describe ferromagnets since it's predicted magnetization vanishes for $H=0$ while we know ferromagnets of nonzero magnetization do exist in the absence of external fields

# Weiss Effective Field
Weiss assumes an effective field that emerges due to the presence of other moments and that is proportional to the magnetization of the system
$$H_{eff}= H + \lambda M$$
And so the magnetization, based on $(1)$ is given by
$$M = N\tanh{\beta (H+\lambda M)} \tag{2}$$
We have seen that phase transition requires $\small H=0$ and so we make that demand and proceed to find and equation of state $\small M(T)$. It can be done so graphically. if we plot $\small f_{1}(M)=M$ and $\small f_{2}(M)=N\tanh{\beta (\lambda M)}$ for various temperatures it is immediately obvious that three solutions occur at a certain temperature $\small M=0, \& \pm M(T)$

> [!NOTE]- I. EQUATION 2
> <iframe src="https://www.desmos.com/calculator/q7urzyyopc?embed" width="500" height="500" style="border: 1px solid #ccc" frameborder=0></iframe>

The critical temperature can be calculated by demanding that both slopes be equal at $M=0$
$$ f_{1}'(T_{c},0) \stackrel{!}{=} f_{2}'(T_{c},0) \Longrightarrow k_{B}T_{c}=\lambda N \tag{3}$$
For $T_{c}< \lambda N$ there are three possible solutions for magnetization two of which correspond to positive and negative magnetization of a ferromagnet and one which corresponds to an antiferromagnet (?). We now expand equation $(2)$ around $(H,M)\to(0,0)$ which yields
$$M = N\beta(H+\lambda M) $$
Next, we take the derivative of the above linearization wrt the magnetic field, so that the left side becomes the magnetic susceptibility and the right side produces the following 
$$\begin{align*}
{\chi}_{_{T}}&= \left(\frac{\partial M}{\partial H}\right)_{T} = N\beta\left(1+ \lambda \left(\frac{\partial M}{\partial H}\right)_{T}\right)\\
{\chi}_{_{T}} &= \frac{N\beta}{1-N\beta\lambda} = \frac{1}{\lambda\left(\frac{T}{T_{c}}-1\right)} \tag{4}
\end{align*}$$
Where we used the critical temperature value gained in equation $(3)$. It is apparent from equation $(4)$ that for $T\in(0,T_{c})$ the susceptibility is negative which means that an increase in the magnetic field decreases magnetization this implies a region of __magnetic instability__. Moreover, at $T_c$ the susceptibility __diverges__ which hints at a [[Phase Transition|second order phase transition]]. Weis effective potential is a right direction in the modeling of the magnetic phase transition, but it leaves us with two main questions

- Not clear what the value of $\lambda$ is
- No good enough reason for why $H_{int}\propto M$

# Ising & Heisenberg Models
A more microscopically driven approach. For isotropic interaction the Heisenberg model uses the following Hamiltonian
$$\mathcal{H}_{H}= - \frac{1}{2}J \sum\limits_{i,j}\boldsymbol{\sigma}_{i}\cdot \boldsymbol{\sigma}_{j} - H\sum\limits_{i}{\sigma_{i}}^{z}$$
Where $J$ is positive for __ferromagnetic__ interactions (favor neighbor alignment) and negative for __antiferromagnetic__ interactions (favor neighbor anti-alignment). These two types of interactions stem from the [[Pauli Exclusion Principle|Pauli exclusion principle]]. By assuming that the interaction term is dominant in the direction of the external field, we can neglect interactions in other directions and arrive at the __Ising model__
$$\begin{align*}
\mathcal{H}_{\text{Ising}} &= - \frac{1}{2}J \sum\limits_{i,j}{{\sigma}_{i}}^{z} {{\sigma}_{j}}^{z} - H\sum\limits_{i}{\sigma_{i}}^{z}\\
&= - \frac{1}{2}J \sum\limits_{i,j}(2n_{i}-1)(2n_{j}-1) - H\sum\limits_{i}(2n_{i}-1)\\
&=-2J\sum\limits_{i,j} n_{i}n_{j} - (2H-J)\sum\limits_{i}n_{i} + \text{constant}\\
& =\varepsilon\sum\limits_{i,j} n_{i}n_{j} - \mu N + \text{constant}
\end{align*}$$
Where $\sigma_{i}$ was replaced by the occupation number for the spin $2n_{i}-1$. We recognize $\varepsilon=-2J$ as the attractive interaction and $\mu=2H-J$ as the chemical potential of the gas

## Symmetries of The Ising Model
___
__Time reversal symmetry__ requires $\sigma,H \to -\sigma,-H$ (can be thought of as the reversal of the currents that creates these fields)
$$\mathcal{H}_{\text{Ising}}(J,-H,-\sigma)=\mathcal{H}_{\text{Ising}}(J,H,\sigma)$$
The thermodynamic quantities which depend on $H$ and not on $\sigma$ explicitly are antisymmetric $M(-H)=-M(H)$. Specifically for $H=0$ we get that $M$ must be zero.
$$\begin{align*}
\ket{m(t)} &=e^{-itS}\ket{m}=e^{-itm}\ket{m}\\
&\stackrel{t\to-t}{\longrightarrow} e^{-i(-t)m}\ket{m} = e^{-it(-m)}\ket{m} = 
\end{align*}$$
__Sublattice symmetry__ it can be shown that the partition of the Ising model in the absence of external field is invariant under $J\to-J$ which correspond to invariant thermodynamic quantities (unlike in the time reversal case), namely the thermodynamics of ferromagnets and anti-ferromagnets is equivalent


## Mean-Field Approximation
We wish, as is the aim of mean field theory, to reduce the interaction term in the Ising Hamiltonian to that of an effective external field.
$$- \frac{1}{2}J \sum\limits_{i,j}{{\sigma}_{i}}^{z} {{\sigma}_{j}}^{z} ~\to~ \sum\limits_{i}{H_{i}}^{\text{eff}}{\sigma_{i}}^{z}$$
If we manage to do so, we can calculate single particle states of the "noninteracting" system and easily compute the partition function. We begin by neglecting interactions and consider only interactions with nearest neighbors, so that
$${H_{i}}^{\text{eff}} \approx J  \frac{qM}{N} \tag{4}$$
where $q$, the coordination number describes the number of nearest neighbors in a given lattice. $M/N$ is the mean magnetization per spin. Comparing $(4)$ to the effective field in Weiss model, the coupling term $\lambda = \frac{Jq}{N}$. And recalling the critical temperature, we get
$$T_{c}=\lambda N = Jq$$
Borrowing the equation of state derived in the Weiss model we have 
$$ M = N\tanh{\beta\left(H+ \frac{Jq}{N}M\right)} $$
Which can be [[Nondimensionalization|nondimensionalized]] to give an __equation of corresponding states__ by taking $m=M/N~$, $\tilde{T}=T/T_{C}~$, $\tilde{H}=H/T_{c}$ which yields
$$m = \tanh{\left(\frac{\tilde{H}+m}{\tilde{T}}\right)}$$
We can get the spinodal by isolating $\tilde{H}$ and demanding that the derivative of the isotherms be equal to zero (finding the extremum)
$$\tilde{h}_{\tilde{T}}(m)=\tilde{T}\tanh^{-1}(m)-m \tag{5}$$

# The Spinodal & Binodal
Equation $(5)$ exhibits the same type of physical instability (below the critical temperature) that the [[Van der Waals Equation of State|Van der Waals equation]] produces. For the VW equation it was negative compressibility, and here for the equation of state derived from the Ising model, we observe a magnetically unstable region where $\chi_{\small T}<0$. We can enclose the unstable region by the same method used in the [[Liquid-Gas Phase Transition]], by constructing the __spinodal__ which passes through the extremum points of the isotherms of equation $(5)$
$$\frac{\partial \tilde h}{\partial m} = 1 - \frac{\tilde{T}}{1-m^{2}}\stackrel{!}{=}0 \Longrightarrow m(\tilde T)=\pm \sqrt{1-\tilde{T}}$$
> [!NOTE]- II. M-T DIAGRAM
>  <br><center><iframe src="https://www.desmos.com/calculator/xwr3ryldjh?embed" width="500" height="500" style="border: 1px solid #ccc" frameborder=0></iframe> </center>
>  </br>The faded blue lines describe the gradual change (no phase transition) of the magnetization wrt temperature in the presence of different external magnetic fields. For zero external field the black line is the binodal that meets the spinodal and is tangent to it in the critical temperature

> [!NOTE]- III. H-M DIAGRAM
> <iframe src="https://www.desmos.com/calculator/ueuixdafwk?embed" width="500" height="500" style="border: 1px solid #ccc" frameborder=0></iframe>
> 
> $$m(-\tilde{h})=-m(\tilde{h})$$

Since $\tilde{h}$ is anti symmetric

## Critical Exponents of Magnetic Phase Transitions
For the [[Magnetic Phase Transitions]] we approximate the equation of corresponding states around $\tilde{T}_{c}=1$ and $m=0$ in order to obtain the first exponent
$$\begin{align*}
\tilde{h}(m) = \tilde{T}\big[\tanh^{-1}(m)-m\big] &\stackrel{\small \tilde{T}\to1}{\longrightarrow} \tanh^{-1}(m)-m \\
&\stackrel{m\to 0}{\approx} \left(m- \frac{1}{3}m^{3}\right) -m
\end{align*} $$
we get $h \propto m^{3}$ and so the __first exponent is $\boldsymbol{\delta}=3$__. Moving on to the magnetic susceptibility we have
$$ (\chi_{\small _T})^{\small-1} = \frac{\partial \tilde{h}}{\partial m} = \frac{\tilde{T}}{1-m^{2}}-1 \stackrel{m\to 0}{\longrightarrow} \tilde{T}-1$$
here we get $\chi_{\small _{T}} \propto T^{-1}$ and so the __next exponent is__ $\boldsymbol \gamma = -1$. We find $\beta$ by considering the equation of corresponding states again, this time taking $h\to 0$ so that
$$\begin{align*}
&\tilde{T}= \frac{m}{\tanh^{-1}m}\approx 1- \frac{1}{3}m^{2}\\
&m = \sqrt{3(1-\tilde{T})} \propto\ T^{1/2}
\end{align*}$$
and so the __second exponent__ $\boldsymbol{\beta=1/2}$. The first exponent is found through several algebraic identities to produce the __first exponent__ $\boldsymbol{\alpha=0}$

# Important Points
1. Ferro-Para phase transition is an __order to disorder__ transition and a __symmetry creating__ transition
2. Magnetization as an order parameter is also a measure of local ordering
3. Nonanalyticity seem to appear at first in the magnetic susceptibility $\chi_{\small T} = \frac{\partial M}{\partial H}$ around the critical temperature $T_{c}$ and it is therefore considered a __second order phase transition__

