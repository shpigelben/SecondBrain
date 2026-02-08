#SS1 #solid #state #diffraction
The Von Laue method, does not deal with lattice planes and does not impose incidence reflected correspondence. Instead it regards the [[Bravais Lattice|lattice]] as composed of identical units place at sites denoted by the lattice vector $\mathbf{R}$ each of which can radiate the incident radiation in all directions.

Sharp peaks will be observed in directions of constructive interference and in appropriate wavelengths

![[Laue.png|700x300]]

We consider two such identical scatterers separated by vector $\mathbf{d}$  
- an incident wave arrives in direction $\hat{n}$ with wavelength $\lambda$ (wavevector $\mathbf{k} = \frac{2\pi}{\lambda}\hat{n}$)
- It is reflected in all directions, we denote an arbitrary direction of reflection $\hat{n}'$
- The optic path difference is given (as portrayed in the figure) by $$ D = d(\cos{\theta} + \cos{\theta} ') = \mathbf{d}\cdot({\hat{n}-\hat{n}')} $$
 Constructive interference occurs when the optic path difference is an integer multiplier of the wavelength $m\cdot\lambda$, and therefore the Laue condition is given by$$ \large\boxed{\mathbf{d}\cdot({\hat{n}-\hat{n}'}) = m\lambda 
\quad \xrightarrow{ 2\pi/\lambda} \quad
\mathbf{d}\cdot({\mathbf{k}-\mathbf{k}'}) = 2\pi m}$$
$k'$ is this case is the direction of reflection along which constructive interference occurs

___
# Amplitude of Diffracted Waves
The total diffracted amplitude of an incident wave, is the sum over all of the diffractions from individual lattice sites situated in corresponding $\mathbf{R}_{m}$ vectors
$$\Psi(\mathbf{q})=a_{0}\sum\limits_{n=-\infty}^{\infty}e^{i\mathbf{q}\cdot \mathbf{R_{n}}}=a_{0}\sum\limits_{-\infty}^{\infty}e^{i(\mathbf{q}-\mathbf{G_{m}})\cdot \mathbf{R_{n}}} \ (e^{i\mathbf{G_{m}}\cdot \mathbf{R_{n}}})$$
Where $\mathbf{G}$ is a wavevector that satisfies the Von Laue condition $\mathbf{G}_{m}\cdot \mathbf{R}_{n}=2\pi M$ where $M$ can be any combination $M=n_{1}m_{1}+n_{2}m_{2}+n_{3}m_{3}$ of integers, and therefore is an integer itself.
Therefore the exponent on the right is identically equal to $1$. Were left with the definition of the [[Dirac Comb]] via its [[Fourier Series]]
$$\begin{align*}
\sum\limits_{-\infty}^{\infty}e^{i(\mathbf{q}-\mathbf{G})\cdot \mathbf{R_{n}}} = \prod\limits_{j=1,2,3}\left(\sum\limits_{-\infty}^{\infty}\large e^{i(\mathbf{q}-\mathbf{G})\cdot \mathbf{a_{j}}n_{j}} \right) &= \prod\limits_{j=1,2,3}2\pi\cdot\delta\big[(\mathbf{q}-\mathbf{G})\cdot \mathbf{a_{j}}\big]\\
& = \prod\limits_{j=1,2,3} \frac{2\pi}{|a_{j}|}\delta(\mathbf{q}-\mathbf{G})\\
& =\frac{(2\pi)^{3}}{V_{cell}}\large\delta^{3}(\mathbf{q}-\mathbf{G})
\end{align*}$$
$$\Psi(\mathbf{q}) = $$
___ 
# Generalization for a Bravais Lattice
In a lattice spanned by a lattice vector $\mathbf{R}$ the condition for constructive interference is that the above relation will hold simultaneously for all values of $d$ that are Bravais lattice vectors
$$ \mathbf{R}\cdot({\mathbf{k}-\mathbf{k}'}) = 2\pi m \quad\Longleftrightarrow\quad
e^{i\mathbf{R}\cdot({\mathbf{k}-\mathbf{k}'})} = e^{i2\pi} = 1$$
Comparing this result with the definition for the [[Reciprocal Lattice]]
It is apparent that $\mathbf{k}-\mathbf{k}' \equiv \mathbf{K}$ is a reciprocal vector. In that case the condition for diffraction to happen on a given lattice, is for the sum $\mathbf{k}+ (-\mathbf{k})'$ to be a reciprocal lattice vector $\mathbf{K}$ just as depicted in the figure beneath

![[Laue 2.png|700x300]]

It is also convenient to state the condition in terms of the incident wave vector $\mathbf{k}$. That is, if the $\mathbf{k}$'s tip lies on the perpendicular bisector (Bragg plane) of $\mathbf{K}$. It just so happens that these planes are parallel to the family of direct [[Lattice Plane|lattice planes]] that are responsible for the intensity peaks in [[Bragg Diffraction]] formulation.