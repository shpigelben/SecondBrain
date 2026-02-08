#QM2 #quantum #hamiltonian #spin

Observations of certain particles in the presence of magnetic field reveals more energetic splitting than could be explained by the [[Hamiltonian of a Particle in a Magnetic Field#^fcc5cb|symmetry breaking of the magnetic field]]. This revelation hinted at another inner degree of freedom of such particles, the spin.

___
# Spin - Orbit Interaction

In the absence of magnetic field, a particle is affected by a central dynamical potential $eV(r)$ for which the particle has certain bound states. The central potential induces an electric field, and the question is - does the spin of a particle interacts with the electric field ?

Since the particle is bound and is "orbiting" the source of the potential with a certain momentum $\mathbf{p}$. We can transform to the reference frame of the orbiting particle to find that in its reference frame the electric field is observed as a magnetic field
$$ \mathbf{B}' = \gamma (\mathbf{B - v\times E}) + (1-\gamma)\mathbf{B}\cdot\hat{\mathbf{v}} \ \ \longmapsto \ \ -\mathbf{v\times E} $$
This is the transformation of the EM field where $\mathbf{v} = \mathbf{p}/m$ is the velocity of the electron. For a [[Hamiltonian of a Particle in a Magnetic Field|particle in a magnetic field]], there exists a Zeeman term if the particle feels a magnetic field and also has angular momentum.

- In the presence of $\mathbf{E}$ field, and absence of external $\mathbf{B}$ field a spin-particle experiences a magnetic field in its reference frame $\mathbf{B}'=-\frac{1}{m}\mathbf{p}\times\mathbf{E}$
- In its reference frame a particle does not have orbital angular momentum $\mathbf{L}$
- Nevertheless observations show that energetic splitting do occur for spin-particles just as they occur in the presence of external homogeneous $\mathbf{B}$ field.
- It must be that spin-particles possess some kind of internal angular momentum - a spin $\mathbf{S}$

If the logic of the above prevails, a Zeeman term should arise in the frame of the orbiting spin-particle in the form of 
$$ g\frac{e}{2m} \mathbf{B}'\cdot\mathbf{S} = -g\frac{e}{2m^2}(\mathbf{p\times E})\cdot\mathbf{S} $$
Transforming back to the reference frame of the lab yields the spin orbit term [[Thomas Precession]].
$$\mathcal{H}_{\small LS} = \frac{(g-1)e}{2m^2}(\mathbf{p\times E})\cdot\mathbf{S} \tag{3}$$
Next, we remind ourselves that the electric field can be expressed in terms of the dynamical potential $$\mathbf{E}=-\nabla V(r) = -\frac{\partial V}{\partial r}\frac{\mathbf{r}}{r} \tag{4}$$ and so, plugging  $(4)$ into $(3)$ we get 
$$\mathcal{H}_{\small LS} = \frac{(g-1)e}{2m^2 r}\frac{\partial V}{\partial r}(\mathbf{r\times p})\cdot\mathbf{S} = (g-1)\frac{e}{2m^{2 }}\left(\frac{1}{r}\frac{\partial V}{\partial r}\right)\mathbf{L}\cdot\mathbf{S} \tag{3}$$
This term is called __the spin-orbit coupling__

## The New Good Quantum Number - J
The interaction between two multiplets $(m_{l} \ \& \ m_{s})$ requires us to construct a new basis, in which $J=L+S$ will be a good quantum number. Since $S$ is a $\dim{2}$ representation and $L$ is a $\dim{3}$ representation, [[Addition of Angular Momenta]] allows us to write
$$ 3\otimes2=4\oplus2 $$

___
# Spin-1/2 Particle In a Magnetic Field
In the presence of a magnetic field the spin of the particle - being an intrinsic angular momentum - interacts with it, and another term, not dissimilar from the $\mathcal{H}_{BL}$ term of a [[Hamiltonian of a Particle in a Magnetic Field|charged particle in a magnetic field]]
$$\mathcal{H}_{BS} = -g \frac{e}{2mc}\mathbf{B}\cdot \mathbf{S}$$

___
# Spin-1/2 Particle In Central Potential & Magnetic Field
For a spin-1/2 particle that experiences both a central potential (electron around a nucleus) and a homogenous magnetic field we have 3 additions to the hamiltonian

- The orbital Zeeman term $\mathcal{H}_{BL}$ 
- The spin Zeeman term $\mathcal{H}_{BS}$
- The spin-orbit coupling $\mathcal{H}_{LS}$

Such that the entire hamiltonian is given by 
$$ \mathcal{H} = \mathcal{H}_{0} + \mathcal{H}_{BL} + \mathcal{H}_{BS}+ \mathcal{H}_{LS} $$
