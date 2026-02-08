#note #physics/condensed-matter #derivative #application 

X-ray diffraction is a crystallographic method that employs [electromagnetic radiation](Electromagnetic%20Waves.md) in a scattering process with a crystalline lattice. As the name suggest, waves in the x-ray region are used due to their wavelength being on the scale of interatomic distances (Few angstroms). Therefore, [[Diffraction.md]] takes place. The solid acts as a [[diffraction grating]] and the light interferes constructively and destructively, creating an interference pattern from which the structure of the solid can be inferred.

$$ \hbar\omega = \frac{hc}{\lambda} \approx \  12.3\times10^3 \ eV =12.3 \ KeV$$

# Bragg Diffraction
In [[Bravais Lattice|crystalline materials]], for certain wavelengths and incident directions one can observe intense peaks of scattered radiation (Bragg peaks). We regard the crystal as made of [[Lattice Planes|planes]] of ions, distance $d$ apart. For sharp peaks of scattered radiation two condition must be met:

1. angle of incidence and angle of reflection must be equal.
2. reflected rays for successive planes should interfere constructively.

![[../9. Misc/Excalidraw/BraggsCondition.md|center|500]]
- In the figure it is shown how under the first condition, the bottom ray travels a distance of $2dsin\theta$ where $d$ is the plane separation and $\theta$ is the incident angle.
- The second condition requires constructive interference, that means that the path difference should be and integer number of wavelength (this way a peak meets a peak) $n\lambda$

Put together one gets the __Bragg condition__ $\boxed{n\lambda = 2dsin\theta}$ where $n$ is the order of the corresponding reflection.

This approach is one of two commonly used methods in [[X-Ray Diffraction]]. There is also the [[Von Laue Diffraction]]

# Von-Laue Diffraction
The Von Laue method, does not deal with lattice planes and does not impose incidence reflected correspondence. Instead it regards the [[Bravais Lattice|lattice]] as composed of identical units place at sites denoted by the lattice vector $\mathbf{R}$ each of which can radiate the incident radiation in all directions.

Sharp peaks will be observed in directions of constructive interference and in appropriate wavelengths

![[../9. Misc/attachments/Laue.png|700x300]]

We consider two such identical scatterers separated by vector $\mathbf{d}$  
- an incident wave arrives in direction $\hat{n}$ with wavelength $\lambda$ (wavevector $\mathbf{k} = \frac{2\pi}{\lambda}\hat{n}$)
- It is reflected in all directions, we denote an arbitrary direction of reflection $\hat{n}'$
- The optic path difference is given (as portrayed in the figure) by $$ D = d(\cos{\theta} + \cos{\theta} ') = \mathbf{d}\cdot({\hat{n}-\hat{n}')} $$
 Constructive interference occurs when the optic path difference is an integer multiplier of the wavelength $m\cdot\lambda$, and therefore the Laue condition is given by$$ \large\boxed{\mathbf{d}\cdot({\hat{n}-\hat{n}'}) = m\lambda 
\quad \xrightarrow{ 2\pi/\lambda} \quad
\mathbf{d}\cdot({\mathbf{k}-\mathbf{k}'}) = 2\pi m}$$
$k'$ is this case is the direction of reflection along which constructive interference occurs

## Amplitude of Diffracted Waves
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

## Generalization for a Bravais Lattice
In a lattice spanned by a lattice vector $\mathbf{R}$ the condition for constructive interference is that the above relation will hold simultaneously for all values of $d$ that are Bravais lattice vectors
$$ \mathbf{R}\cdot({\mathbf{k}-\mathbf{k}'}) = 2\pi m \quad\Longleftrightarrow\quad
e^{i\mathbf{R}\cdot({\mathbf{k}-\mathbf{k}'})} = e^{i2\pi} = 1$$
Comparing this result with the definition for the [[Reciprocal Lattice]]
It is apparent that $\mathbf{k}-\mathbf{k}' \equiv \mathbf{K}$ is a reciprocal vector. In other words, the Laue conditions states that for constructive interference to occur, the change in wave-vector must itself be a vector of the reciprocal lattice.


In that case the condition for diffraction to happen on a given lattice, is for the sum $\mathbf{k}+ (-\mathbf{k})'$ to be a reciprocal lattice vector $\mathbf{K}$ just as depicted in the figure beneath

![[../9. Misc/attachments/Laue 2.png|700x300]]

It is also convenient to state the condition in terms of the incident wave vector $\mathbf{k}$. That is, if the $\mathbf{k}$'s tip lies on the perpendicular bisector (Bragg plane) of $\mathbf{K}$. It just so happens that these planes are parallel to the family of direct [[Lattice Planes|lattice planes]] that are responsible for the intensity peaks in [[Bragg Diffraction]] formulation.

![](../9.%20Misc/attachments/Pasted%20image%2020240121203411.png)

# Ewald Construction
We draw an Ewald sphere which is determined solely by the wave vector $\mathbf{k}$ of the incident wave. By drawing the tail of the wave vector $\mathbf{k}$ on any reciprocal lattice site (doesn't matter which, going to be the origin), the head sits at the center of the sphere so that it has radius $|k|=\frac{2\pi}{\lambda}$. The Laue condition is satisfied (and thus constructive interference occurs) when the difference between $k$ and $k'$ is a reciprocal lattice vector $K$. In the picture of the Ewald sphere, it occurs if and only if another reciprocal lattice site (other than the origin) sits on the edge of the Ewald sphere (the scattering is assumed to be elastic and momentum has to be conserved, so the scattering wave vector has to be of the same magnitude and therefore lie on the edge of the sphere).

![center|450](../9.%20Misc/attachments/Pasted%20image%2020240121204615.png)
The Ewald sphere is the set of all allowed scattering wave vectors under elastic scattering. The lattice, on the other hand has only discrete allowed set of k-sites. The "combined allowed states" which contribute to scattering that interferes constructively, are the reciprocal lattice points that sit on the boundary of the Ewald sphere, if those exist.