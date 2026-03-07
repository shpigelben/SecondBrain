---
type: concept
discipline:
  - physics
field:
  - thermodynamics-statistical-mechanics
---

The equipartition theorem predicts that the mean energy of a particle in a system **in thermodynamic equilibrium** is determined by the **number of degrees of freedom** it has. In **most** cases, each degree of freedom is responsible for an addition of $\small\displaystyle\frac{1}{2} k_{\small B}T$ to the particle's energy, such that
$$\braket{E_{1}}= \sum\limits_{k} \frac{d_{k}}{2}k_{\small B}T$$
Where $d_{k}$ is the number of DOF of each type (e.g. : 3 momentum DOF, and 2 vibrational DOF)
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
and the energy of a system of $N$ such particles is   
$$
U = N \braket{E_{1}} = \frac{3}{2}N k_{\small B}T
$$
# Adiabatic Index of Ideal Gas
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
___
# Equipartition Theorem
The equipartition theorem is a statistical-mechanical theorem that gives an estimate to the average kinetic energy of a single particle in a statistical ensemble (a gas in a container for example). This estimate depends on the temperature of the system, as well as the dimensionality of the system and the types of energies that are available to each particle. In the first derivation I provide what requested for HW. I also chose to provide an alternative, more general derivation from statistical mechanics which I personally like.

### Simple Kinetic Derivation
Using a kinetic approach, it can be shown that he pressure of a gas on the walls of a container is given by
$$
p = \frac{1}{3}nm^{*}{v_{th}}^{2} \tag{1}
$$
Where $n$ is the concentration of gas particles $\small \left[{\#}/{V} \right]$, $m^{*}$ is the effective mass of the particle and $v_{th}$ is the thermal velocity, defined as the expectation value of the square of the particle's velocity

$$
v_{th}\equiv \sqrt{\braket{ v^{2} }} = \sqrt{ \braket{  {v_{x}}^{2} }+\braket{  {v_{y}}^{2} }+\braket{  {v_{z}}^{2} }  } \tag{*}
$$
Using the equation of state for an ideal gas together with equation $(1)$ 
$$
p = nk_{\small B}T \tag{2}
$$
we get that 
$$
v_{th} = \sqrt{ \frac{3k_{\small B}T}{m^{*}} } \tag{3}
$$
finally, the average kinetic energy of a particle in the gas is given by

$$
\braket{  E } = \frac{m^{*}\braket{v^{2}} }{2} = \frac{m^{*}{v_{th}}^{2}}{2} = \frac{3}{2}k_{\small B}T \tag{4}
$$
Where we used $(3)$ for $v_{th}$.

### More General Statistical-Mechanical Derivation (Extra)
The above result, given by equation $(4)$, is true for mono-atomic ideal gas in 3d. A more general approach invokes the canonical-ensemble and takes into account any type of energies (other than kinetic) that the system might have. It also considers the number of dimensions (not necessarily 3d). Let us consider a general form of energy 
$$
E = c\chi^{n} \tag{5}
$$
where $c$ is a constant, $\chi$ is a generic dynamical variable (linear velocity, angular velocity, position, etc) and $n$ is a whole number. The partition function of a single particle in such a generic system is given by
$$
Z_{1} = \prod_{d} \int\limits_{-\infty}^{\infty}  e^{-\beta E} \, dE  \ \propto \  \prod_{d}\int\limits_{-\infty}^{\infty} e^{-\beta c\chi^{n}} \, d\chi \tag{6}
$$
where we use $\beta=1/k_{\small B}T$, and where $d$ is the dimensionality of the system. The solution to $(6)$ amounts to

$$
Z_{1} = K\beta^{- d/n} \tag{7}
$$
Where $K$ is a constant w.r.t temperature (which is what we care about). The average energy of a particle is the logarithmic derivative of the partition function w.r.t $\beta$.

$$\braket{E_{1}}= -\frac{\partial \ln Z_{1}}{\partial\beta} = -\frac{\partial}{\partial\beta}\left(\ln C_{n} - \frac{d}{n}\ln \beta\right) = \frac{d}{n\beta} \tag{8} $$

Notice that for out case where $d=3$ and $n=2$ we receive $\braket{ E_{1} }=\frac{3}{2\beta}=\frac{3}{2}k_{\small B}T$. Where this theorem really shines is in the more general cases where more types of energies are involved, then $(8)$ becomes 

$$
\braket{ E_{1} } =\frac{1}{\beta}\sum\limits_{k} \frac{d_{k}}{n_{k}} \tag{9}
$$
For a diatomic molecule for example, we now have a vibrational degree of freedom between the two atoms and two axes around which the molecule can rotate, as well as the three translational degrees of freedom due to the kinetic energy. So the energy per molecule in this case will be 

$$
\begin{align}
\braket{ E_{1}  } &= \frac{1}{\beta}\left( \frac{d_{trans}}{n_{trans}} + \frac{d_{vib}}{n_{vib}} + \frac{d_{rot}}{n_{rot}} \right)  \\
&= \frac{1}{\beta}\left( \frac{3}{2} + \frac{1}{2} + \frac{2}{2} \right) = \frac{3}{\beta} = 3k_{\small B}T
\end{align}
$$
Which is two times more than the case for a monoatomic gas. This means that each constituent of the system can hold more energy, and consequently, so does the entire system which lends to a higher heat capacity but I digress.


