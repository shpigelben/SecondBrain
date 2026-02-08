#statistical #mechanics 

# Equipartition Theorem
For a general energy term of the form
$$E = c\chi^{n} \tag{1}$$
Where $\chi$ is a certain dynamical variable (linear/angular momentum, position etc). The [[Canonical Ensemble|canonical partition function]] for a particle with such energy (in one dimension) is given by
$$ Z_{1} = \prod_{d}\int_{-\infty}^{\infty} e^{-\beta c \chi^{n}} d\chi = C_{n}\beta^{-d/n}\tag{2}$$
The calculation of the integral is cumbersome (see A.1). The product over $d$ considers the number of dimensions in which the potential "operates". Expectation value of energy can be calculated from the partition function in the following manner
$$\braket{E_{1}}= -\frac{\partial \ln Z_{1}}{\partial\beta} = -\frac{\partial}{\partial\beta}\left(\ln C_{n} - \frac{d}{n}\ln \beta\right) = \frac{d}{n\beta} \tag{3} $$
We arrive at the interesting relation between the mean energy of a particle and the power of the energy $n$
$$\braket{E_{1}} = d\frac{k_{\tiny B}T}{n}\tag{4}$$
This means that at __equilibrium__ each particle contributes a specific amount of energy depending on its hamiltonian

___
# Factorizable Systems
For a system of noninteracting particles we can write single particle states as independent partition functions
$$\begin{align*}
Z_{1} &= \sum\limits_{i}\exp{\left[-\beta\sum\limits_{k}E_{ki}\right]}\\
& = \prod\limits_{k}\left(\sum\limits_{i}e^{-\beta E_{ki}}\right)\\
& = \prod_{k}Z_{k} = \prod_{k}C_{n_{\small k}}\beta^{-d_{k}/n_{\small k}}
\end{align*}$$
The last equality comes from the calculation in $(2)$. $d_{k}$ refers to the number of dimensions in which each potential operates (even for a 3D system, some potentials can effectively be 1D or 2D). The energy of a single particle (or unit) in the system is thus
$$\braket{E_{1}} = -\frac{\partial\ln{Z_{1}}}{\partial \beta} = -\sum\limits_{k} \frac{\partial\ln{Z_{k}}}{\partial \beta} =  \sum\limits_{k}d_k\frac{k_{\tiny B}T}{n_{k}}$$
For a system with 
$$\begin{align*}
E_{1} &= E_{\text{trans}}+E_{\text{rot}}+E_{\text{vib}}\\ \\
& \propto  (p_{x}^{2}+p_{y}^{2}+p_{z}^{2})+(\omega_{x}^{2}+\omega_{y}^{2}+\omega_{z}^{2})+(x^{2}+y^{2}+z^{2}) 
\end{align*}$$
where the dimensions of possible movement also contribute to the 
$$\braket{E_{1}} = 9\frac{k_{\tiny B}T}{2}$$

___
# Relation to the Adiabatic Index of an Ideal Gas
Consider an [[adiabatic process|adiabatic]] ideal gas whose internal energy is given generally by the equipartition theorem as
$$U = N\braket{E_{1}} = N\left(\sum\limits_{k} \frac{d_{k}}{n_{k}}\right)k_{\small B}T\equiv N\mathcal{Q}k_{\small B}T$$
Using the equation of state for ideal gas we can show that
$$U = \mathcal{Q}PV$$
According to the first law, an adiabatic process is $dU+\delta W=0$. Plugging the internal energy above, we get
$$d(\mathcal{Q}PV)+PdV=0$$
after rearranging we get the following differential equation
$$-\frac{dP}{P}=\left(1+ \frac{1}{\mathcal{Q}}\right) \frac{dV}{V}$$
which can be easily solved and rearranged to produce
$$PV^{\large \left(1+ \frac{1}{\mathcal{Q}}\right)}=\text{const}$$
We know that a general adiabatic process satisfies the following relation
$$PV^{\Gamma}=\text{const}$$
We therefore conclude that in the case of an ideal gas
$$\Gamma = 1 + \frac{1}{\mathcal{Q}}$$
