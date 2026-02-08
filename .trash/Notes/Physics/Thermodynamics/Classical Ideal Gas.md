#TD1 #thermodynamics #statistical #classical #mechanics
___
The ideal gas is one of many (albeit ubiquitous) thermodynamic systems. The ideal gas describes a gas with no intermolecular interactions except for collisions. The derivation for its [[Thermodynamic Parameters |thermodynamics parameters]] and its [[State Function |equation of state]] is presented here
___
# Kinetic Theory (Thermodynamic Approach)
#### Internal Energy (U)
Since the molecules that constitute the gas are assumed to interact only by colliding, and have no interaction potential, their energy is purely kinetic
$$
U = \sum_i K_i = 
\sum_i \frac{m_i}{2}\braket{v_i^2} = 
N\frac{m \braket{v^2}}{2}
\tag{1}
$$
Here we assume that all particles are identical, and so  $m_i=m_j$

#### Pressure (P)
The pressure a gas exerts on the walls of its container can be attributed to the impulse of the collisions of the gas molecules with the wall 
> [!NOTE]- Pressure derivation from kinetic theory
> Pressure is most commonly defined as the ratio of applied force and the surface area to which said force is applied. In this case of many body system we have to sum over the forces applied to an arbitrary surface area $A$ $$P = \sum_i P_i \equiv\sum_i \frac{\braket{\vec{F}_i} \cdot \hat{x} }{A}$$we assume that $\braket{\vec{F}_i}$ is the same $\forall i$ and so for N particles **half of which (on average) are traveling in the opposite direction**$$P = \sum_i \frac{\braket{\vec{F}_i} \cdot \hat{x} }{A} = \frac{N}{2} \frac{\braket{\vec{F}_x}}{A} = \frac{N}{2} \frac{ \braket{ \frac{\Delta p_x}{\Delta t} }}{A}$$Particles are assumed to collide elastically with the wall, therefore transferring it twice their momentum $\Delta p_x = p_x - (-p_x) = 2p_x$. And obviously $\braket{\Delta t} = \Delta t$, so $$P = \frac{N}{2} \frac{ \braket{ \frac{\Delta p_x}{\Delta t} }}{A} = \frac{N}{2}\frac{\braket{2p_x}}{A \Delta t} = N\frac{\braket{p_x}}{A \Delta t}  \tag{1.1}$$We introduce the quantity ==particle density==  which is defined as $n \equiv \frac{N}{V}$ where V is a certain volume. Particles with momentum $p_x$ travel with corresponding velocity ${v_x}$ and so in a time interval $\Delta t$ they cover a distance of $l = \braket{v_x}\Delta t$. By choosing an arbitrary surface area $A$ that defines a volume $V = Al = A\braket{v_x}\Delta t$ which contains all particles that will hit the container's wall throughout $\Delta t$. ![[PNG image 1.png  | 300 ]]Plugging this volume into the number density gives the number density of the colliding particles$$ n = \frac{N}{V} = \frac{N}{A\braket{v_x}\Delta t} \longrightarrow  N = nA\braket{v_x}\Delta t \tag{1.2}$$Plugging the number of colliding particles in (2) to the definition of pressure in (1) one gets $$P = N\frac{\braket{p_x}}{A \Delta t} =n\braket{v_x}A\Delta t \frac{\braket{p_x}}{A \Delta t} = n\braket{v_x p_x} $$we can see that there is no dependence on the arbitrary are $A$ of the wall, and so the pressure is the same over the whole wall (under the assumption of the equality of mean velocity). Since $\braket{p} = \braket{mv} = m\braket{v}$ in non relativistic regimes we get a concrete definition of the pressure the particles exert on the wall of the container$$ P = nm\braket{v_x^2} \tag{1.3} $$We now make the intuitive assumption that there is no preferred direction (assuming the the container and therefore the center of mass is stationary) and so we conclude that $$ \braket{v_x} = \braket{v_y} = \braket{v_z} = 0 \tag{a1} $$$$ \braket{v_x^2} = \braket{v_y^2} = \braket{v_z^2} \tag{a2} $$$$\braket{v^2} = \braket{v_x^2} + \braket{v_y^2} + \braket{v_z^2} = 3\braket{v_x^2}\longrightarrow \braket{v_x^2} = \frac{1}{3}\braket{v^2} \tag{1.4}$$(1.4) into (1.3) gives 
> $$P = \frac{1}{3}nm\braket{v^2} \tag{1}$$

$$P = \frac{1}{3}nm\braket{v^{2}}= \frac{N}{3V}m\braket{v^{2}} = \frac{2U}{3V} $$
Where the in the last equality we plug $(1)$ in. And so we get the first expression for the internal energy of the ideal gas
$$ \Large \boxed{U = \frac{3}{2}PV} \tag{2} $$
#### Temperature (T)
We define the [[Temperature |temperature]] of a molecule of an ideal gas with its
$$
k_B T \equiv \frac{1}{3}m\braket{v^2} \tag{3.1}
$$
T is a dimensionless quantity, so a constant called Boltzman's constant with dimensions of energy is "assigned" to it. We usually take $k_B$ to be $1$. It is used mainly for unit conversion. Using a bit of manipulation, and plugging in equation (1)
$$
T = \frac{2}{3} \frac{m\braket{v^2}}{2} = \frac{2U}{3N} \quad \longrightarrow \quad \frac{U}{N}\equiv u = \frac{3}{2}T \tag{3.2}
$$
$u$ is energy per particle. there is $\frac{1}{2}T$ for every translational degree of freedom. Using (3.2) we can get three new relations for the ideal gas 
$$\Large\boxed{ U = \frac{3}{2}NT} \tag{3} $$
#### Equation of State (P,V,T)
using $(3)$ and $(2)$ we get what is known as the [[State Function|equation of state]] of the ideal gas
$$\Large\boxed{ PV = N k_B T} \tag{4}$$
The equation of state describes a system in thermodynamic equilibrium. It is an explicit dependence between the system's thermodynamic variables. These are in fact [[state variables]] variables and describe a system's particular equilibrium state. The state function is thus essential in describing [[thermodynamic processes]] in which a systems transitions from one state to the next

#### Entropy of an Ideal Gas (Extensive Variables)
The first Law gives (for a constant amount of matter, $dN=0$) so we can 
$$dU = - PdV + TdS \ \Longrightarrow \ dS = \frac{1}{T}dU + \frac{P}{T}dV \tag{5} $$
Plugging $(3)$ and $(4)$ into the entropy differential
$$ dS = \frac{3N}{2} \frac{dU}{U} + N \frac{dV}{V}$$
Integrating over a reversible path from state $1$ to state $2$ we get
$$ S_{2}-S_{1} = \ln{\Bigg[\left(\frac{U_{2}}{U_{1}}\right)^{3N/2} \left(\frac{V_{2}}{V_{1}}\right)^{N} \Bigg]}$$
Or more generally
$$ \boxed{S(U,V) = N\ln{\big(A_{1}U^{C_{\small V}}V\big)}}$$
#### Entropy of an Ideal Gas (Intensive Variables)
one can write $(5)$ a little differently
$$ dS = \frac{1}{T}dU + \frac{1}{T}d(PV) - \frac{1}{T}VdP $$
Using $(3)$ and $(4)$ again for replacing U and V now
$$ dS = \frac{N}{T} c_{\small V} dT + \frac{N}{T}dT - N \frac{dP}{P} \Longrightarrow N\left(c_{\small P} \frac{dT}{T} - \frac{dP}{P}\right) $$
$$ \boxed{S(T,P) = N \ln{\left( \frac{A_{2}}{P} T^{C_{\small P}}\right)}} $$
___
# Statistical Approach
using the __[[Grand canonical ensemble]]__ we write the partition function for an ideal gas with hamiltonian with continuous momentum on position values $$ \mathcal{H}(\mathbf{r},\mathbf{p})= \sum\limits_i\frac{\mathbf{p}_{i}^{2}}{2m} $$In the grand canonical scheme we sum over all possible microstates of the system which include all possible energy and particle configurations
$$\begin{align*}
\mathbb{Z} &= \sum\limits_{N,\mathcal{H}}\exp\Big[-\beta(\mathcal{H}-\mu N)\Big]\\
& =\sum\limits_{N,\mathcal{E}_{i}}\frac{g}{N!}\exp\Big[-\beta(N\mathcal{E}_{i}-\mu N)\Big]
\end{align*}$$
The first transition is a summation over all possible single particle energies $\mathcal{E}_{i}$ and multiply by the Gibbs factor to account for the lack of multiplicity in exchanging two indistinguishable particles with the same energy, for generality, we also take into consideration [[Degeneracy|quantum degeneracy]] (usually for spin -$g$). Since the energy states of free particles are continuous in both space and momentum, this part becomes an integration
$$\begin{align*}
\mathbb{Z} &= \sum\limits_{N} \frac{1}{N!} e^{\beta\mu N} \left[g\prod\limits_{x,y,z}\int \int drdp \ \exp\left(-\frac{\beta p^{2}}{2m}\right)\right]^{N} \\
&= \sum\limits_{N} \frac{1}{N!}\left(e^{\beta\mu }\frac{gV}{\lambda^{3}_{\small T}}\right)^{N} \stackrel{N\to\infty}{-\longrightarrow} \exp \left[ e^{\beta\mu} \frac{gV}{\lambda^{3}_{\small T}}\right]
\end{align*}$$
The limiting case is that of the [[thermodynamic limit]] in which $N\to\infty$. The [[Thermodynamic Potentials#Grand Potential|grand potential]] whose natural variables are $T, V$ and $\mu$ is given by
$$ \Omega = - \frac{1}{\beta}\ln\mathbb{Z}= - \frac{e^{\beta\mu}}{\beta}\left(\frac{gV}{\lambda^{3}_{\small T}}\right)$$
#### Chemical Potential
The thermodynamic number of particles is calculated by the appropriate derivative
$$N = -\frac{\partial \Omega}{\partial \mu} =  e^{\beta\mu}\left(\frac{gV}{\lambda^{3}_{\small T}}\right)$$
From which we can separate the [[Chemical Potential]] which depends on the temperature, the number-density of the particles and their mass (in the [[Thermal Wavelength]] expression)
$$\mu(T,n) = Tln \left( \frac{n}{g}\lambda^{3}_{\small T}\right)$$
For the case of $n=1$ we can regain the equation of state for classical ideal gas.