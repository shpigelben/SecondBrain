#note #physics/statistical-mechanics #derivative 

The equipartition theorem predicts that the mean energy of a particle in a system **in thermodynamic equilibrium** is determined by the **number of degrees of freedom** it has. In **most** cases, each degree of freedom is responsible for an addition of $\small\displaystyle\frac{1}{2} k_{\small B}T$ to the particle's energy, such that
$$\braket{E_{1}}= \sum\limits_{k} \frac{d_{k}}{2}k_{\small B}T$$
Where $d_{k}$ is the number of DOF of each type (e.g. : 3 momentum DOF, and 2 vibrational DOF)
___
# Derivation
For a general energy term of the form
$$E = c\chi^{n} \tag{1}$$
Where $\chi$ is a certain dynamical variable (linear/angular momentum, position etc). The [[Canonical Ensemble|canonical partition function]] for a particle with such energy (in one dimension) is given by
$$ Z_{1} = \prod_{d}\int_{-\infty}^{\infty} e^{-\beta c \chi^{n}} d\chi = C_{n}\beta^{-d/n}\tag{2}$$
The calculation of the integral is cumbersome (see A.1). The product over $d$ considers the number of dimensions in which the potential "operates". Expectation value of energy can be calculated from the partition function in the following manner
$$\braket{E_{1}}= -\frac{\partial \ln Z_{1}}{\partial\beta} = -\frac{\partial}{\partial\beta}\left(\ln C_{n} - \frac{d}{n}\ln \beta\right) = \frac{d}{n\beta} \tag{3} $$
We arrive at the interesting relation between the mean energy of a particle and the power of the energy $n$
$$\braket{E_{1}} = d\frac{k_{\tiny B}T}{n}\tag{4}$$
This means that at __equilibrium__ each particle contributes a specific amount of energy depending on its Hamiltonian

___
# Factorizable Systems
For a system of noninteracting particles we can write single particle states as independent partition functions. Here $k$ counts the possible energy types of the particle (kinetic, rotational, elastic, etc) and the $i$'s index the energy microstates.
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
$$\braket{E_{1}} = 9\frac{k_{\small B}T}{2}$$
**monoatomic gas** - no rotational energy and no elastic energy. Only kinetic energy ($k=1$ and $n_{1}=2$ from the $p^{2}$ part) in three dimensions ($d_{k=1} =3$). Therefore,
$$\braket{E_{1}} = d_{1}\frac{k_{\small B}T}{n_{1}} = \frac{3}{2}k_{\small B}T $$
and the energy of a system of $N$ such particles is   $\displaystyle U = N \braket{E_{1}} = \frac{3}{2}N k_{\small B}T$
___
# Adiabatic Index of an Ideal Gas
Consider an ideal gas whose internal energy is given generally by the equipartition theorem as
$$U = N\braket{E_{1}} = N\left(\sum\limits_{k} \frac{d_{k}}{n_{k}}\right)k_{\small B}T\equiv N\mathcal{Q}k_{\small B}T$$
using the equation of state for the [[Classical Ideal Gas|ideal gas]] the following holds
$$U = \mathcal{Q}PV$$
According to the first law, an [[Thermodynamic Processes|adiabatic process]] is $dU+\delta W=0$. Plugging the internal energy above, we get
$$d(\mathcal{Q}PV)+PdV=0$$
after rearranging we get the following differential equation
$$-\frac{dP}{P}=\left(1+ \frac{1}{\mathcal{Q}}\right) \frac{dV}{V}$$
which can be easily solved and rearranged to produce
$$PV^{\large \left(1+ \frac{1}{\mathcal{Q}}\right)}=\text{const}$$
We know that a general adiabatic process satisfies the following relation
$$PV^{\Gamma}=\text{const}$$
We therefore conclude that in the case of an ideal gas
$$\Gamma = 1 + \frac{1}{\mathcal{Q}}$$
