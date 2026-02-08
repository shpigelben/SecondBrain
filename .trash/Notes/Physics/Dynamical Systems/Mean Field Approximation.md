#math #approximation #many-body 

For now the MFA is explained mainly for statistical mechanics and the simplification of partition functions of [[many-body]] systems of interacting particles

# The Interacting Problem
The most generic Hamiltonian for a gas of interacting particles, with interaction term $U$, in an external potential $V$
$$\mathcal{H}(\{\mathbf{x}_{i}\},\{\mathbf{p}_{i}\}) = \sum\limits_{i=1}^{N} \frac{{p_{i}}^{2}}{2m} + V(\mathbf{x}_{i}) + \frac{1}{2}\sum\limits_{i,j\neq i}U(\mathbf{x}_{i}-\mathbf{x}_{j})$$
The [[Canonical Ensemble|canonical partition function]] which is given by
$$Z = \frac{1}{N!} \frac{1}{h^{3N}}\int \prod\limits_{i}d \mathbf{x}_{i}\prod\limits_{i}d \mathbf{p}_{i} \  e^{-\beta \mathcal{H}} $$
For an interacting problem, the single particle state are __no longer independent__ and one __cannot__ simply write $Z = \frac{1}{N!}{Z_{1}}^{N}$. We can still integrate over the 3N momenta integrals to receive the __thermal de Broglie wavelength__ so that the partition can be written as
$$ Z = \frac{1}{N!{\lambda_{T}}^{3N}}\int\prod\limits_{k}d \mathbf{x}_{k} \exp{\left( -\frac{\beta}{2}\sum\limits_{i,j\neq i}U(\mathbf{x}_{i}-\mathbf{x}_{j}) \right)} \tag{2}$$
in which we neglected the external potential. The integral over the interaction terms is called __the configurational integral__ and it depends only on the position of the particles. The analytic calculation of the configurational integral is in most cases impossible

# Mean Field Approximation
Mean field approximation treats the interaction between the particles as an effective __external__ potential which is produced by all the rest of the particles
$$\frac{1}{2}\sum\limits_{i,j\neq i}U(\mathbf{x}_{i}-\mathbf{x}_{j})\to \sum\limits_{i}V_{eff}(\mathbf{x}_{i})$$
By reducing the potential to be dependent only on the position of the particle $i$, it simplifies the partition function of $(2)$ since single particle states are no independent, and so
$$  Z = \frac{1}{N!} \frac{1}{{\lambda_{T}}^{3N}}\left[\int d \mathbf{r} e^{-\beta V_{eff}(\mathbf{r})}\right]^{N} \tag{3}$$
Equation $(3)$ is easily solvable. Even if non-analytic, it is still a computationally easy problem relative to the partition of $N\propto 10^{24}$ interacting particles