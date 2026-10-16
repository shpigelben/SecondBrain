---
type: concept
discipline:
  - physics
field:
  - atomic-molecular-physics
---

Two atoms in identical quantum states, tend to get closer (?). Their wave functions $(\psi_{a} \ \ {\small\&} \ \ \psi_{b})$ interfere to create two new states one of constructive interference and one of destructive interference. We denote the two new states as a transformation to a new basis
$$
\psi_{\pm}(\mathbf{r}) = N\Big[\psi_a(\mathbf{r})\pm \psi_b(\mathbf{r}-\mathbf{R})\Big]
$$
Where $\mathbf{R}$ is the vector separating atoms $a$ and $b$. $N$ is given by normalization demand
$$1 \stackrel{!}{=} \int |\psi_{\pm}|^{2} \ dv = N^{2}\left[ \int |\psi_{a}|^{2}dv + \int |\psi_{b}|^{2}dv \pm 2\int\psi_{a}\psi_{b} \ dv \right]$$
We denote the __overlap integral__ by the following - $\int\psi_{a}\psi_{b} \ dv \equiv \Delta$, and assuming that $\psi_{a/b}$ are normalized, we get the normalization condition as
$$1 \stackrel{!}{=} N^{2}{[1 + 1 +2\Delta]} \Longrightarrow \boxed{N \stackrel{!}{=} \frac{1}{\sqrt{2(1\pm\Delta)}}}  $$
The new states in the basis of the overlapping atoms are
$$
\psi_{+} = \frac{ \psi_{a} + \psi_b }{\sqrt{2(1+\Delta)}}
\quad \quad \quad
\psi_{-} = \frac{ \psi_{a} - \psi_b }{\sqrt{2(1-\Delta)}}
$$
with energies 
$$
\begin{align*}
\mathcal{E}_{a} &= \braket{\psi_{a}| \mathcal{H} | \psi_{a}} =
\mathcal{E}_{b} = \braket{\psi_{b}| \mathcal{H} | \psi_{b}} \equiv \mathcal{E}
\\
\beta &= \braket{\psi_{a}| \mathcal{H} | \psi_{b}} =
\braket{\psi_{b}| \mathcal{H} | \psi_{a}}
\end{align*}
$$
Using the energy definitions above we can get the following energies for the now energy basis
$$E_{+} = \braket{\psi_{+}|\mathcal{H}|\psi_{+}} = \frac{\mathcal{E}+\beta}{1+\Delta}$$
$$E_{-} = \braket{\psi_{-}|\mathcal{H}|\psi_{-}} = \frac{\mathcal{E}-\beta}{1-\Delta}$$
It turns out that $E_{+}<E_{-}$ , and since the symmetric state corresponds to a covalent bond where the electron is shared equally between the two atoms, it is apparent that the covalent bond is the energetically favorable state.
___
Covalence is greatest for two identical elements. Any other configuration (of two different elements with different [[Electronegativity|Electronegativities]]) will result in a slightly polarized state due to the higher probability density of the shared electron in the vicinity of the more electronegative atom of the pair.