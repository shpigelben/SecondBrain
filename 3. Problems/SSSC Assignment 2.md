Ben Shpigel
204389449

# X-ray Diffraction (Crystallography)
By transmitting x-rays through a crystal, a diffraction pattern appears, from which the internal lattice structure can be inferred. In such scenario, the lattice acts as a diffraction grating, diffracting light which interferes constructively and destructively as a function of atomic separation and produces an interference pattern on the screen. The position, the shape and the and the intensity of the diffraction pattern correlates directly to the lattice vectors of the material.

The reason for using x-rays in this technique is the interatomic distances of typical solids, which are on the order of a few Angstroms. X-rays, which have wavelengths on the order of Angstroms as well, are able to properly interact and diffract off of the lattice. Too small a wavelength and no diffraction will occur, and too long a wavelength and the diffraction will only be noticeably affected by larger structures than the interatomic separations of the solid.

Bragg diffraction is one theory that relates the peaks of the diffraction pattern to the position of the ions in the lattice. The idea of what is known as 'Bragg condition' is that constructive interference occurs when the path difference between two adjacent planes can fit an integer number of the x-ray wavelengths.

$$
n\lambda = 2d\sin\theta
$$
Where $\lambda$ is the wavelength of the probing radiation, $d$ is the plane separation in a certain direction, and $\theta$ is the angle with which the light is incident on the plane. 

![center|350](../9.%20Misc/attachments/Pasted%20image%2020240115122815.png)

The plane separation is specific to each family of planes is dependent on the Miller indices $d\to d_{hkl}$. For a cubic lattice with a lattice constant $a$ for example
$$
d_{hkl} = \frac{a}{\sqrt{ h^{2}+k^{2}+l^{2} }}
$$
using the Bragg condition we can write the relation between the Miller indices and the angle as follows

$$
h^{2}+k^{2}+l^{2} = \left( \frac{2a\sin\theta_{hkl}}{n\lambda} \right)^{2}
$$

A generic experimental setup is given in the figure below (on the left) in which a the x-ray source and the detector are aligned in such a way that the angle of detection is twice the angle of incidence. By continuously rotating the setup, and measuring the intensity of diffraction as a function of the incident angle (or twice that) a Bragg diffraction picture is generated (figure below on the right). The peaks correspond to the angles that satisfy the Bragg condition, and each peak represents a family of planes from which it reflects and is denoted by their Miller indices.

![](../9.%20Misc/attachments/Pasted%20image%2020240115143849.png)
So, for a given wavelength, and an angle that corresponds to a peak, we might have a number of Miller indices that correspond to the same constant. For example, the (1,0,0), (0,1,0) and (0,0,1) plane families, all give $h^{2}+k^{2}+l^{2}=1$. To figure out which family is the one actually measured one has to use **selection rules** appropriate for each family of lattices, so by a process of elimination it is possible to discern the structure of the crystal.

Another approach is the Von-Luae diffraction, which considers the wave vector of the incident x-ray and ties it to the reciprocal lattice. It is similar in spirit to the Bragg condition and so I will not go into it for the sake of brevity.

Finally, a more in depth analysis can involve things like the structure factor for a distribution of charges (as opposed to idealized point charges) and a lattice with a basis (additional materials) and so on.

# Energy Levels of the Hydrogen Atom
By treating the electron-nucleus interaction in Hydrogenic atoms as a classical 2-body system, it is possible to extract a surprisingly accurate result for the energy levels of the electron. A simplifying assumption throughout the derivation considers the nucleus stationary due to it begin OOM heavier than the electron. It is a good approximation for the Hydrogen atom, and more so for heavier cases such as Lithium, Sodium and so on.

For a stable orbit of the electron around the nucleus its coulombic attraction to the nucleus must be balanced by its centripetal force. Translating this into math in the form of Newton's 2nd law

$$\frac{m_{e} v^{2}}{r} = \frac{Ze^{2}}{4\pi\epsilon_{0}r^{2}} \Longrightarrow v^{2}= \frac{e^{2}}{4\pi\epsilon_{0}} \frac{Z}{m_{e} r} \tag{1}$$

Equation (1) provides a relationship between the electron velocity and its distance from the nucleus. $m_{e}$ is the electron mass and $Z$ is the number of protons in the nucleus.

Classically, an accelerating charge radiates energy at the expense of its kinetic energy. This means that the electron, as described above must lose its energy to radiation and eventually collapse into the nucleus. Luckily this doesn't happen and an ad-hoc assumption, made by de-Broglie (and which began the "quantum revolution"), that the electron has a wavelength $\lambda_{DB}=h / p$ that has to fit an integer number of times into the orbit, prevents that from happening. This demand imposes quantization of angular momentum among other quantities

$$
\begin{align}
L &= mvr = \frac{mv}{2\pi} 2\pi r = \frac{mv}{2\pi}n\lambda_{DB}\equiv \frac{\cancel{ mv }}{2\pi} \frac{hn}{\cancel{ p }} \\
&\Rightarrow r_{n} = \frac{hn}{2\pi} \frac{1}{mv}\tag{2}
\end{align}

$$

By inserting (2) into one, eliminating the velocity $v$, we get an equation for the quantized orbit-radii of the electron.
$$r_{n}=  \frac{h^{2}\epsilon_{0}}{e^{2}m_{e}\pi}\left( \frac{n^{2}}{Z} \right)\equiv a_{0}\frac{n^{2}}{Z} \tag{3}$$
Here we defined the Bohr radius, the radius of the electron in ground state of the Hydrogen atom ($n=1$ and $Z=1$). Now, using equations (1) and (2) we can calculate the total energy of the bound electron by considering both its kinetic ($K$) and potential ($U$) energies
$$\begin{align}E_{n} &= K + U\\&=\frac{m_{e} v^{2}}{2} - \frac{Ze^{2}}{4\pi\epsilon_{0}r_{n}} \\&= \frac{e^{2}}{8\pi\epsilon_{0}} \frac{Z}{ r_{n}} - \frac{Ze^{2}}{4\pi\epsilon_{0}r_{n}} \\ &= -\frac{Ze^{2}}{8\pi\epsilon_{0}r_{n}} \\
&= \frac{-m_{e} Z^{2}e^{4}}{8\epsilon_{0}^{2}h^{2}n^{2}}\end{align}$$
Finally, written more compactly, the energies are
$$
\boxed{E_{n} = -R_{H}\left( \frac{Z}{n} \right)^{2}}
$$
Where we defined the Rydberg energy as the ionization energy of an electron in the ground state of a hydrogen atom
$$
R_{H}\equiv \frac{m_{e}e^{4}}{8\epsilon_{0}^{2}h^{2}} \approx13.6  \  \text{[eV]}
$$
By solving the Schrodinger equation for the wave function of an electron in a coulombic potential, ones gets a more rigorous and a better description of the state of the electron. Amazingly, by taking the expectation value of the Hamiltonian it is possible to show that the energy levels are similar to those derived with the Bohr model. But the quantum picture reveals degenerate states for each eigenenergy, which is not predicted by the Bohr model, and the theories further diverge when external forces are taken into consideration (Zeeman & Stark effects) or when spin-orbit coupling is taken into account, all of which cause the degeneracies to separate, resulting in far more energy levels which are absent in the Bohr picture of the atom.