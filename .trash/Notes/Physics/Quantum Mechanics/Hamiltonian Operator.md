#QM2 #quantum #matrix #operator

##  Discrete Site Hamiltonian

As the [[Time Evolution|generator of evolution]] of a quantum mechanical system, the Hamiltonian should encapsulate the symmetries of the system. Lets walk through the construction of such hamiltonian for a two site system in the most general way

- The particle can be in either of two the two sites, therefore the [[Hilbert Space]] is two dimensional. with a basis 
$$ \ket{1} \mapsto 
\begin{pmatrix}
1 \\ 0 
\end{pmatrix} $$
$$ \ket{2} \mapsto 
\begin{pmatrix}
0 \\ 1
\end{pmatrix}
$$
- The operators, and specifically the Hamiltonian, above this Hilbert space should consequently be of dimension 2x2, the position operator in the position basis for example
$$\hat{x} \mapsto\begin{pmatrix}
\ 1 & 0 \ \\
\ 0 & 2 \ \\
\end{pmatrix}$$
- The hamiltonian is [[Hermitian Operator|hermitian]] so two things should hold : 
	1. The diagonal terms should be real
	2. The off-diagonal terms should be complex conjugates

Under all of these consideration we construct the most general Hamiltonian possible

$$
\hat{\mathcal{H}} \mapsto 
\begin{pmatrix}
\ \epsilon_1 & c e^{-i\phi} \ \\
\ c e^{i\phi} & \epsilon_2 \ \\
\end{pmatrix}
$$

The most general operator would have 8 DOFs (4 complex numbers - 4 real and 4 imaginary), the hermiticity of the hamiltonian halved these into  
$$\text{DOFs \ :} \quad \{\epsilon_1, \epsilon_2, c, \phi\}$$
___

### Gauge Invariance

 In order to reduce the remaining DOFs we invoke gauge invariances of the hamiltonian
 
 1. __constant phase gauge__ - observables are not sensitive to phase change in state vectors so we can get rid of the phase in the off diagonal terms by changing the basis with a _constant phase shift_

$$\begin{matrix}
\ket{1} \mapsto \ket{1} \\
\ \ \ \ \ \ket{2} \mapsto e^{i\phi}\ket{2}
\end{matrix}$$ 
$$ \braket{\tilde{2}|\hat{\mathcal{H}}|1} =
\braket{e^{i\phi}2|\hat{\mathcal{H}}|1} =
e^{-i\phi}\braket{2|\hat{\mathcal{H}}|1} =
e^{-i\phi} c e^{i\phi} = c
$$
alternatively one can view the hamiltonian as changed
$$ \tilde{\hat{\mathcal{H}}} \mapsto \braket{\tilde{n}|\hat{\mathcal{H}}|\tilde{n}} = \begin{pmatrix}
\ \epsilon_1 & c \ \\
\ c & \epsilon_2 \ \\
\end{pmatrix} $$
2. __time dependent phase (energy) gauge__ - we can show that the addition of a constant to the hamiltonian results in a _time dependent phase shift_
$$ \tilde{\hat{U}}\ket{\psi_0} = 
e^{-it\tilde{\hat{\mathcal{H}}}}\ket{\psi_0}=
e^{-it(\hat{\mathcal{H}} + v\hat{I})}\ket{\psi_0}=
e^{-itv}\ket{\psi_t}
$$
and since the addition of phase, time dependent or otherwise does not affect the observables we can invoke it to reduce another degree of freedom by arbitrarily getting rid of $\epsilon_1$. This is equivalent to choosing a frame of reference in which one of the energies is canceled.
$$\begin{pmatrix}
\ \epsilon_1 & c \ \\
\ c & \epsilon_2 \ \\
\end{pmatrix} \mapsto\begin{pmatrix}
\ 0 & c \ \\
\ c & \epsilon_2 \ \\
\end{pmatrix} $$
the values of $\epsilon_i$ correspond to the energy the particle has in each state, where c corresponds to the energy it takes to make the transition between corresponding cells. When the system is symmetric and $\epsilon_1 = \epsilon_2 \equiv \epsilon$, we get the following hamiltonian
 $$\hat{\mathcal{H}} = c
\begin{pmatrix}
\ 0 & 1 \ \\
\ 1 & 0 \ \\
\end{pmatrix} = c\sigma_1 $$
___

###  Hamiltonian of a N-Site System

For an N-site system, if we do not assume any symmetry, and allow transition between sites that are not adjacent the hamiltonian will be a $N\times N$ dimensional hermitian operator, therefore it has DOF contributed from
- $N$ _real_ diagonal terms $\rightarrow N$ diagonal DOFs 
- $\frac{N^2-N}{2}$ top/bottom half _complex_ off-diagonal terms
so $\rightarrow N^2-N$ off-diagonal DOFs
- overall $N^2$ DOFs for a $N\times N$ matrix

for convenience we write each entry for the hamiltonian with indices 

$$\mathcal{H}_{ij} = c_{ij}e^{i\phi_{ij}} \quad \forall i \neq j $$

$$\mathcal{H}_{ij}\delta_{ij} = \epsilon_{j}$$

Time dependent phase gauge allows us to reduce only one DOF. We need to find out how many constant phase gauges are relevant for the further reduction of DOFs.
___

##  Continuum Limit

The Hamiltonian of a symmetric N-site system is given by 

$$\begin{align*}
\mathcal{H}_{ij} &= 

\begin{pmatrix}
v   & c^* & 0      & \cdots & c      \\
c   & v   & c^*    &        &        \\
0   & c   & v      &        & \vdots \\
    &  	  &  	   & \ddots &     c* \\
c^* &     & \cdots & c      & v      \\
\end{pmatrix} \\ \\ &= 

\begin{pmatrix}
0   & c^* & 0      & \cdots & c      \\
c   & 0   & c^*    &        &        \\
0   & c   & 0      &        & \vdots \\
    &  	  &  	   & \ddots &     c* \\
c^* &     & \cdots & c      & 0      \\
\end{pmatrix} +

\begin{pmatrix}
v   &0 & 0    & \cdots & 0      \\
0   & v   &   0  &        &        \\
0   & 0   & v      &        & \vdots \\
    &  	  &  	   & \ddots &   0  \\
0 &     & \cdots & 0      & v     \\
\end{pmatrix} \\ \\
&= \quad \quad \text{Kinetic Term} \quad \quad \quad+ \quad \quad  \text{Potential Term}
\end{align*} 
$$

It is easy to identify that the kinetic term is comprised of two translation matrices one in the clockwise direction $D$ and the other in the anticlockwise direction $D^{\dagger}$ both represent translation size of $a$
$$ \begin{align*}
\hat{\mathcal{H}} &= \hat{D}(a)+{\hat{D}(a)}^{\dagger} + v\hat{I}\\ 
&= ce^{-ia\hat{p}} + c^*e^{ia\hat{p}} 
+ v\hat{I}
\end{align*} $$
since the system is symmetric, each site has similar occupation energy, and the hopping energies are the same. we write c in its polar form $c=ce^{i\phi}$ and so

$$ \begin{align*}
\hat{\mathcal{H}} &= 
c\left(e^{-i(a\hat{p}-\phi)} + e^{i(a\hat{p}-\phi)}\right) 
+ v\hat{I}\\
&=2c \cos{\left[a\left(\hat{p}-A\right)\right]} 
+ v\hat{I}  
\end{align*} $$
Where $A\equiv\frac{\phi}{a}$ is defined to be the phase accumulated over distance traveled. Taking the distance between two sites to be $a\rightarrow0$, we can Taylor expand the cosine to the 2nd order
$$ \hat{\mathcal{H}} = 2c
\left(
\hat{1} - \frac{a^2}{2}\left(\hat{p}-A\right)^2 + O(a^4)\right)
+v\hat{1}
$$
by setting $V \equiv 2c+v$, and $\frac{1}{m}\equiv -ca^2$ and ignoring the fourth order in $a$, we can write the continuous hamiltonian as follows
$$\large \boxed{\begin{align*} \\ \quad
\hat{\mathcal{H}} = \frac{1}{2m}\left(\hat{p}-A(\hat{x})\right)^{2} +V(\hat{x})\quad \\\
\end{align*}} $$
 Where, in general $A$, $V$ and even $m$ depend on position. We treat the mass here as constant for we assume that the space is homogeneous.
 
[[ Phase Accumulation]] - as mentioned above, $A$ is the _Geometric Phase_ that accumulates per unit length, and $V$
is the _Dynamical Phase_ that  accumulates per unit time.


