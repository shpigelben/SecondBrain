Ben Shpigel
204389449

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


