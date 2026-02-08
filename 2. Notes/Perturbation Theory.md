#note #physics #quantum #derivative 
___

Perturbation theory deals with cases where familiar hamiltonians are __perturbed__ by a small influences. Exact systems like quantum harmonic oscillator and hydrogen atom form the foundation of quantum mechanical systems, and to those cases we have exact solutions. 
$$ \mathcal{H}(\lambda) = \mathcal{H}_0 + \lambda V$$
Where $\mathcal{H}_0$ is a known hamiltonian, $V$ is a perturbation and $\lambda \in[0,1]$ is a dimensionless parameter that allows us to minimize the perturbation in the case that it isn't small enough to be treated with perturbation theory as it stands, such that
$$ \mathcal{H}(0) = \mathcal{H}_0 \quad \text{and} \quad \mathcal{H}(1) = \mathcal{H}_0 + V$$
![[../9. Misc/attachments/perturbation diagram.png|600]]

Perturbation theory treats [[Degeneracy|degenerate and non-degenerate]] systems differently

# Nondegenerate Perturbation Theory
 In the nondegenerate case each energy has a unique corresponding energy state. Under the assumption that $\mathcal{H}_0$ is known and is the dominant driver of the system, it is reasonable to work in the basis $\ket{n}$ that diagonalizes it.
$$ \mathcal{H}(0)\ket{n} \ \mapsto\ \ \mathcal{H}_0\ket{n^{(0)}}={E_n}^{(0)}\ket{n^{(0)}} $$
While for the perturbed hamiltonian we write
$$ \mathcal{H}(\lambda)\ket{n}\ \mapsto\ \ \mathcal{H}_{\lambda}\ket{n}_{\lambda}=E_n(\lambda)\ket{n}_{\lambda} $$
taking $\lambda$ to be sufficiently small we can expand the perturbed states and energies as follows
$$ \begin{align*}
\ket{n}_{\lambda} &= \ket{n^{(0)}} + \lambda\ket{n^{(1)}} + {\lambda}^{2}\ket{n^{(2)}} + \dots \\ \\
E_{n}(\lambda) &= {E_{n}}^{(0)} + \lambda {E_{n}}^{(1)} + {\lambda}^{2}{E_n}^{(2)} + \dots
\end{align*}$$
$$\begin{align*}
E_{n}(\lambda) &= {E_{n}}^{(0)} + \lambda {E_{n}}^{(1)} + {\lambda}^{2}{E_n}^{(2)} + \dots\\
&= {E_{n}}^{(0)} + \lambda \braket{{n}^{\tiny(0)}|V|{n}^{\tiny(0)}} + \lambda^{2}\sum\limits_{n\neq m} \frac{|\braket{{n}^{\tiny(0)}|V|{n}^{\tiny(0)}}|^{2}}{{E_{n}}^{\small(0)}-{E_{m}}^{\small(0)}} + \dots
\end{align*}$$
$$E_{n}(\lambda) = E_{n}^{0}+ \lambda \braket{  n^{0} |V|n^{0  }} + \lambda^{2}\sum\limits_{m \neq n} \frac{\mid \braket{ m^{0} | V | n^{0} } |^{2}}{E_{m}^{0}-E_{n}^{0}} $$
> [!NOTE]- Derivation
> let us solve the eigenvalue problem$$ \begin{align*}&\Big(\mathcal{H}_{\lambda}-E_n(\lambda)\Big) \ket{n}_{\lambda} = 0 \\ \\&\Big(\mathcal{H}_0+\lambda\delta\mathcal{H}-E_n(\lambda)\Big) \ket{n}_{\lambda} = 0\end{align*}$$We now expand $E_n(\lambda)$ and $\ket{n}_{\lambda}$ according to their Taylor expansions, then we gather terms with similar power of $\lambda$ as  coefficient$$\begin{align*}\Bigg[&1\left(\mathcal{H}_0-{E_n}^{(0)}\right)\\+&\lambda\left(\delta\mathcal{H}-{E_n}^{(1)}\right)\\-& \lambda^{2}{E_n}^{(2)}  - \lambda^{3}{E_n}^{(3)} +\dots \Bigg]\left[\ket{n^{(0)}} + \lambda\ket{n^{(1)}} + \ ... \right] = 0\end{align*}$$When factoring this expression by powers of $\lambda$ we get a polynomial of $\lambda$ that should be equal to $0$. Since $\lambda$ is a parameter, the polynomial should vanish for all values of $\lambda$, which in turn implies that all coefficients must vanish. So the equations for the vanishing coefficients by orders of $\lambda$ are$$ \begin{align*}\lambda^{0} &: \ \left(\mathcal{H}_{0}-{E_n}^{(0)}\right)\ket{n^{(0)}}=0\\\lambda^{1} &: \ \left(\mathcal{H}_{0}-{E_n}^{(0)}\right)\ket{n^{(1)}}= \left({E_n}^{(1)}-\delta\mathcal{H}\right)\ket{n^{(0)}}\\ \lambda^{2} &: \ \Big(\mathcal{H}_{0}-{E_{n}}^{(0)}\Big)\ket{n^{(2)}}= \Big( {E_{n}}^{(1)} -\delta \mathcal{H} \Big)\ket{n^{(1)}} + {E_{n}}^{(2)}\ket{n^{(0)}} \end{align*}$$

We can extract this general relation from the expanded states and energies
$$\lambda^k : \ \left(\mathcal{H}_0-{E_n}^{(0)}\right)\ket{n^{(k)}} = \left({E_n}^{(1)}-\delta\mathcal{H}\right)\ket{n^{(k-1)}} + {E_n}^{(2)}\ket{n^{k-2}} + \ ... + {E_n}^{(k)}\ket{n^{0}}$$

___
## First Correction to Energy Eigenvalues
In the result of the derivation above it is easy to sea that the first correction to the energy can be obtained by projecting $\bra{n^{(0)}}$ onto $\lambda^{1}$ term
$$\begin{align*}
\bra{n^{\small 0}}\left(\mathcal{H}_0-{E_n}^{\small 0}\right)\ket{n^{\small 1}}&= \bra{n^{0}}\left({E_n}^{1}-\delta\mathcal{H}\right)\ket{n^{0}} \\
\cancelto{0}{({E_n}^{0}-{E_n}^{0})
\braket{n^{0}|n^{1}}} &= {E_n}^{1}\cancelto{1}{\braket{n^{0}|n^{0}}} - \braket{n^{0}|\delta\mathcal{H}|n^{0}}
\end{align*}$$
and we have the first energy correction
$$ \large\boxed{{E_n}^{1} = \braket{n^{0}|\delta\mathcal{H}|n^{0}}}$$
The first correction to the energy is the expectation value of the perturbation in the unperturbed state. Applying the same method for the $\lambda^k$ order equation and we get the general`
$$ \large\boxed{{E_n}^{(k)} = \braket{n^{(0)}|\delta\mathcal{H}|n^{(k-1)}}}$$
Given that the $k-1$ correction to the energy state is known, the $k$ correction to the energy can be computed

___
## First Correction to Energy States
Using the same method that was used to get the energies we now apply $\bra{m^{(0)}}$ to the $\lambda^1$ order. $\ket{m^{(0)}}$ is a __different__ energy state of the unperturbed hamiltonian
$$\begin{align*}
\bra{m^{(0)}}\left(\mathcal{H}_0-{E_n}^{(0)}\right)\ket{n^{(1)}} &= \bra{m^{(0)}}\left({E_n}^{(1)}-\delta\mathcal{H}\right)\ket{n^{(0)}}\\
({E_{m}}^{(0)}-{E_{n}}^{(0)})\braket{m^{(0)}|n^{(1)}} &= 
{E_{n}}^{(1)}\braket\cancelto{0}{{m^{(0)}|n^{(0)}}} - \braket{m^{(0)}|
\delta\mathcal{H}|n^{(0)}}
\end{align*}$$
and we're left
$$\braket{m^{(0)}|n^{(1)}} = -\frac{\braket{m^{(0)}|\delta\mathcal{H}|n^{(0)}}}{{E_{m}}^{(0)}-{E_n}^{(0)}} = -\frac{{\delta\mathcal{H}}_{mn}}{{E_{m}}^{(0)}-{E_{n}}^{(0)}}$$
* in degenerate perturbation theory, there exist some $m\neq n$ that share the same energy. In that case the denominator of the equation above explodes and renders this method obsolete. One has to use degenerate perturbation theory instead

>$$ \ket{n^{(1)}}=\sum_{m\neq n} \ket{m^{(0)}}\braket{m^{(0)}|n^{(1)}} =
-\sum_{m\neq n}\left(\frac{{\delta\mathcal{H}}_{mn}}{{E_{m}}^{(0)}-{E_{n}}^{(0)}}\right)\ket{m^{(0)}}$$


___
# Doron's Approach
$$\left(\mathcal{H}_0+\lambda \delta\mathcal{H}\right)\psi = E\psi$$
$$\mathcal{H}_0\ket{n} = \mathcal{E}_n\ket{n}$$
$\mathcal{H}$ is treated as a diagonal operator in the energy basis. So, assuming mixed entries are of order small enough, one can ignore them and treat them as perturbation.

An off diagonal term can be treated as perturbation if it is much smaller than the difference in the energies it couples, namely if -
$$ \mathcal{H}_{ij} \lt\lt |\mathcal{H}_{ii} - \mathcal{H}_{jj}| $$

#### 1. Finding a new basis with small off-diagonal terms
If there exists an off diagonal term not small enough so that it cannot be treated as perturbation, we need represent the hamiltonian in a new base where it vanishes

 $$\small \hat{\mathcal{H}} = \begin{pmatrix}2 & 0.03 & 0 & 0 & 0 & 0.5 & 0 \\ 0.03 & 2 & 0 & 0 & 0 & 0 & 0  \\ 0 & 0 & 2 & 0.1 & 0.4 & 0 & 0  \\ 0 & 0 & 0.1 & 5 & 0 & 0.02 & 0  \\ 0 & 0 & 0.4 & 0 & 6 & 0 & 0  \\ 0.5 & 0 & 0 & 0.02 & 0 & 8 & 0.3 \\ 0 & 0 & 0 & 0 & 0 & 0.3 & 9 \\ \end{pmatrix} $$  ![[../9. Misc/attachments/Perturbation energy levels.png|300]]
