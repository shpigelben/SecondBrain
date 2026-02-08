#statistical #mechanics #phase-transitions 

Spatial correlation function is a measure of ordering in a system.

### Spatial Correlation & Long-Range Order
__Time reversal symmetry__ implies that finding a particle with either spin up or down is equiprobable, therefore a system with such trait is symmetric WRT its overall magnetization. By introducing small magnetic fields $h_{k}$ (that spins induce on one other) the time-reversal symmetry of the system is broken
$$\mathcal{H}\to \mathcal{H} + h_{i}\sigma_{i} + h_{j}\sigma_{j} 
  $$
spin [[correlation]] is a good way of capturing symmetry breaking in the system, since we expect zero spin-correlation for a highly symmetric system. Using the definition of the expectation value of the [[Canonical Ensemble]] we write the following correlation for spins that point in the $z$ direction
$$\begin{align*} G(i,j)\equiv
\braket{\sigma_{i}\sigma_{j}} &= \sum\limits_{i,j}\sigma_{i}\sigma_{j} \frac{\text{exp}[-\beta(\mathcal{H + \sigma_{i}h_{i} + \sigma_{j}h_{j}})]}{Z}\\
& = \frac{1}{\beta^{2} Z} \frac{\partial^{2} Z}{\partial h_{i} \partial h_{j}} \tag{1}
\end{align*}$$
We would assume that for large separations, the magnetization per spin for two spins would be independent and therefore uncorrelated such that $\lim\limits_{j\to\infty}G(i,j)=\braket{\sigma_{i}}\braket{\sigma_{j}}=0$. But, as a quick calculation can reveal, in the presence of external fields (however insignificant) 
$$\braket{\sigma_{i}}\braket{\sigma_{j}} = \lim_{h_{ij}\to 0}\frac{1}{\beta Z} \frac{\partial Z}{\partial h_{i}}\frac{1}{\beta Z} \frac{\partial Z}{\partial h_{j}} =\lim_{h\to 0} \braket{\sigma_{i}^{z}}_{h}\braket{\sigma_{j}^{z}}_{h}=\braket{m}^{2}\neq0$$
$\lim\limits_{j\to\infty}G(i,j)\neq 0$ is the definition of __long range ordering__ and it implies that a certain spin orientation in one place would correspond with high likelihood to another, distant measurements

## Fluctuations & Connected Correlations
The connection between the [[Response Function|response functions]] and the [[Canonical Ensemble|fluctuations]] of the system in the case of a [[Magnetism|magnetic system]] is given by
$$\begin{align*}
\chi_{\small T} &= -\frac{\partial^{2}G}{\partial h^{2}} = -\frac{\partial^{2} \ln{Z}}{\partial h^{2}}\\
& = \frac{1}{\beta} \left(\frac{1}{Z} \frac{\partial^{2}Z}{\partial h^{2}} - \left(\frac{1}{Z} \frac{\partial Z}{\partial h}\right)^{2} \right)\\
&= \beta \Big(\braket{M^{2}} -\braket{M}^{2} \Big)\\
&=\beta \sum\limits_{ij} \braket{\sigma_{i}\sigma_{j}}- \braket{\sigma_{i}}\braket{\sigma_{j}}\\
&\equiv \beta\sum\limits_{ij}G_{c}(i,j) \tag{2}
\end{align*}$$
$G_{c}$ is the __connected correlation__. By considering the continuous case and transitioning to integration we get
$$\chi_{\small T}=\beta\sum\limits_{ij}G_{c}(i,j) =\beta N \sum\limits_{i}G_{c}(i) \to \beta N\int \frac{d\mathbf{r}}{a^{d}} G_{c}(\mathbf{r}) \tag{3}$$
where $a$ is the distance between spins. From the relation above it is clear that ==susceptibility diverges in regions that are highly correlated==. The functional dependence of the connected correlation on the radius is given by
$$ G_{c}(r) = \frac{1}{\large r^{\frac{d-1}{2}}\xi^{\frac{d-3}{2}} }\exp{\left(-\frac{r}{\xi}\right)}  \tag{4}$$
Where the length scale $\xi$ is called the __correlation length__. Combining equations $(3)$ and $(4)$ we can the following proportionality
$$\chi_{\small T} \propto \xi ^{2}\tag{5}$$
we recall the [[Critical Phenomena & Universality|critical exponents]] of the correlation length and the magnetic susceptibility
$$\chi_{\small T}\propto |T-T_{c}|^{-\gamma}\propto \xi^{2} \propto |T-T_{c}|^{-2\nu}$$
from which we get $\nu=\frac{\gamma}{2}$ and since we know $\gamma=1$ we have the critical exponent for the correlation length $\nu=1/2$ which in turn gives the qualitative behavior of the correlation length near the critical temperature
$$ \xi\propto |T-T_{c}|^{-1} $$
which implies, as we already knew, that correlation length diverges near the critical temperature. The divergence of correlation length hints at a phase transition

# Irrelevance of Quantum Effects for continuous Phase Transitions
Since correlation length diverges for [[Phase Transition|continuous phase transitions]], it s safe to assume that the correlation length is larger than the [[Thermal Wavelength|thermal De-Broglie wavelength]] $\xi>>\lambda_{\small T}$. And since quantum phenomena manifest in length scales smaller than $\lambda_{\small T}$ it is safe to assume that they are negligible near the critical point of a continuous phase transition.