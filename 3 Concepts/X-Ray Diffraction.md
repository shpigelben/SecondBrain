---
type: concept
discipline:
  - physics
field:
  - condensed-matter
---

X-ray diffraction is a crystallographic method that employs [electromagnetic radiation](Electromagnetic%20Waves.md) in a scattering process with a crystalline lattice. As the name suggest, waves in the x-ray region are used due to their wavelength being on the scale of interatomic distances (Few angstroms). Therefore, [[Diffraction.md]] takes place. The solid acts as a [[diffraction grating]] and the light interferes constructively and destructively, creating an interference pattern from which the structure of the solid can be inferred.

$$ \hbar\omega = \frac{hc}{\lambda} \approx \  12.3\times10^3 \ eV =12.3 \ KeV$$

# Bragg Diffraction
In [[Bravais Lattice|crystalline materials]], for certain wavelengths and incident directions one can observe intense peaks of scattered radiation (Bragg peaks). We regard the crystal as made of [[Lattice Planes|planes]] of ions, distance $d$ apart. For sharp peaks of scattered radiation two condition must be met:

1. angle of incidence and angle of reflection must be equal.
2. reflected rays for successive planes should interfere constructively.

![[../4 Misc/Excalidraw/BraggsCondition|center|500]]
- In the figure it is shown how under the first condition, the bottom ray travels a distance of $2dsin\theta$ where $d$ is the plane separation and $\theta$ is the incident angle.
- The second condition requires constructive interference, that means that the path difference should be and integer number of wavelength (this way a peak meets a peak) $n\lambda$

Put together one gets the __Bragg condition__ $\boxed{n\lambda = 2dsin\theta}$ where $n$ is the order of the corresponding reflection.

This approach is one of two commonly used methods in [[X-Ray Diffraction]]. There is also the [[Von Laue Diffraction]]

# Von-Laue Diffraction
The Von Laue method, does not deal with lattice planes and does not impose incidence reflected correspondence. Instead it regards the [[Bravais Lattice|lattice]] as composed of identical units place at sites denoted by the lattice vector $\mathbf{R}$ each of which can radiate the incident radiation in all directions.

Sharp peaks will be observed in directions of constructive interference and in appropriate wavelengths

![[../4 Misc/Attachments/Laue.png|700x300]]

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

![[../4 Misc/Attachments/Laue 2.png|700x300]]

It is also convenient to state the condition in terms of the incident wave vector $\mathbf{k}$. That is, if the $\mathbf{k}$'s tip lies on the perpendicular bisector (Bragg plane) of $\mathbf{K}$. It just so happens that these planes are parallel to the family of direct [[Lattice Planes|lattice planes]] that are responsible for the intensity peaks in [[Bragg Diffraction]] formulation.

![](../4%20Misc/Attachments/Pasted%20image%2020240121203411.png)

# Ewald Construction
We draw an Ewald sphere which is determined solely by the wave vector $\mathbf{k}$ of the incident wave. By drawing the tail of the wave vector $\mathbf{k}$ on any reciprocal lattice site (doesn't matter which, going to be the origin), the head sits at the center of the sphere so that it has radius $|k|=\frac{2\pi}{\lambda}$. The Laue condition is satisfied (and thus constructive interference occurs) when the difference between $k$ and $k'$ is a reciprocal lattice vector $K$. In the picture of the Ewald sphere, it occurs if and only if another reciprocal lattice site (other than the origin) sits on the edge of the Ewald sphere (the scattering is assumed to be elastic and momentum has to be conserved, so the scattering wave vector has to be of the same magnitude and therefore lie on the edge of the sphere).

![center|450](../4%20Misc/Attachments/Pasted%20image%2020240121204615.png)
The Ewald sphere is the set of all allowed scattering wave vectors under elastic scattering. The lattice, on the other hand has only discrete allowed set of k-sites. The "combined allowed states" which contribute to scattering that interferes constructively, are the reciprocal lattice points that sit on the boundary of the Ewald sphere, if those exist.

# X-ray Diffraction (Crystallography)
By transmitting x-rays through a crystal, a diffraction pattern appears, from which the internal lattice structure can be inferred. In such scenario, the lattice acts as a diffraction grating, diffracting light which interferes constructively and destructively as a function of atomic separation and produces an interference pattern on the screen. The position, the shape and the and the intensity of the diffraction pattern correlates directly to the lattice vectors of the material.

The reason for using x-rays in this technique is the interatomic distances of typical solids, which are on the order of a few Angstroms. X-rays, which have wavelengths on the order of Angstroms as well, are able to properly interact and diffract off of the lattice. Too small a wavelength and no diffraction will occur, and too long a wavelength and the diffraction will only be noticeably affected by larger structures than the interatomic separations of the solid.

Bragg diffraction is one theory that relates the peaks of the diffraction pattern to the position of the ions in the lattice. The idea of what is known as 'Bragg condition' is that constructive interference occurs when the path difference between two adjacent planes can fit an integer number of the x-ray wavelengths.

$$
n\lambda = 2d\sin\theta
$$
Where $\lambda$ is the wavelength of the probing radiation, $d$ is the plane separation in a certain direction, and $\theta$ is the angle with which the light is incident on the plane. 

![center|350](../4%20Misc/Attachments/Pasted%20image%2020240115122815.png)

The plane separation is specific to each family of planes is dependent on the Miller indices $d\to d_{hkl}$. For a cubic lattice with a lattice constant $a$ for example
$$
d_{hkl} = \frac{a}{\sqrt{ h^{2}+k^{2}+l^{2} }}
$$
using the Bragg condition we can write the relation between the Miller indices and the angle as follows

$$
h^{2}+k^{2}+l^{2} = \left( \frac{2a\sin\theta_{hkl}}{n\lambda} \right)^{2}
$$

A generic experimental setup is given in the figure below (on the left) in which a the x-ray source and the detector are aligned in such a way that the angle of detection is twice the angle of incidence. By continuously rotating the setup, and measuring the intensity of diffraction as a function of the incident angle (or twice that) a Bragg diffraction picture is generated (figure below on the right). The peaks correspond to the angles that satisfy the Bragg condition, and each peak represents a family of planes from which it reflects and is denoted by their Miller indices.

![](../4%20Misc/Attachments/Pasted%20image%2020240115143849.png)
So, for a given wavelength, and an angle that corresponds to a peak, we might have a number of Miller indices that correspond to the same constant. For example, the (1,0,0), (0,1,0) and (0,0,1) plane families, all give $h^{2}+k^{2}+l^{2}=1$. To figure out which family is the one actually measured one has to use **selection rules** appropriate for each family of lattices, so by a process of elimination it is possible to discern the structure of the crystal.

Another approach is the Von-Luae diffraction, which considers the wave vector of the incident x-ray and ties it to the reciprocal lattice. It is similar in spirit to the Bragg condition and so I will not go into it for the sake of brevity.

Finally, a more in depth analysis can involve things like the structure factor for a distribution of charges (as opposed to idealized point charges) and a lattice with a basis (additional materials) and so on.
