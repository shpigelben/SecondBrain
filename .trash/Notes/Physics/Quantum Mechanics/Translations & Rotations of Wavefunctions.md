#QM2 #rotation #group 

# Wavefunction on a Torus
A [[Torus]] can be thought of as a box with periodic boundary conditions.
We label the position of a general wavefunction with the following coordinates $\ket{x} \leadsto \ket{\theta}\otimes \ket{\varphi}\leadsto \ket{\theta,\varphi}$
$$\ket{\Psi}=\sum\limits \psi(\theta,\varphi)\ket{\theta,\varphi}$$
The periodic boundary conditions impose quantization of the momentum, we can therefore write the wavefunction in the momentum basis as follows
$\ket{k} \leadsto \ket{n}\otimes \ket{m}\leadsto \ket{n,m}$
$$\ket{\Psi}=\sum\limits \Psi_{n,m}\ket{n,m}$$ Where the transformation matrix is $$\braket{\theta, \varphi|n,m}=\frac{1}{2\pi}e^{i(n \theta+m \varphi)}$$![[Pasted image 20211214195637.png]]
# Wavefunction on a Sphere
In analogy to the Torus, a wave function that lives on a sphere can be written in either a continuous (position) or discrete (momentum) basis.

$$\ket{\Psi}=\sum\limits \psi(\theta,\varphi)\ket{\theta,\varphi}=\sum\limits \Psi_{\ell,m}\ket{\ell,m}$$
$$\braket{\theta,\varphi|\ell,m}=Y^{\ell m}(\theta,\varphi)$$
Where $Y^{\ell m}(\theta,\varphi)$ are [[spherical harmonics]].
