---
type: concept
discipline:
  - physics
field:
  - quantum-mechanics
---

| classic            | first quantization | second quantization |
| ------------------ | ------------------ | ------------------- |
| dynamical variable | operators          | field operators     |

- quantum [[many-body]] with indistinguishable particles (IP for short)
- many-body states are invariant under the exchange of two IP 
- wave-function is therefore invariant up to phase factor. 

# Fock States
Fock space is constructed by filling [[Single Particle States|single particle states]], which are handled by __creation and annihilation__ operators

# Fermions & Bosons
bosons (symmetric)
$$\Psi(\dots,r_{i},\dots ,r_{j},\dots) = +\Psi(\dots,r_{j},\dots ,r_{i},\dots)$$
fermions (anti-symmetric)
$$\Psi(\dots,r_{i},\dots ,r_{j},\dots) = -\Psi(\dots,r_{j},\dots ,r_{i},\dots)$$
# First Quantization
Many-body (first quantized) wavefunction
$$\Psi[\mathbf{r}_{i}]=\prod\limits_{i=1}^{N}\psi_{\alpha_{i}}(\mathbf{r}_{i})=\psi_{\alpha_{1}}\otimes \psi_{\alpha_{2}}\otimes\dots\otimes \psi_{\alpha_{\small N}}$$
$$\ket{\varphi_{1},\varphi_{2}\dots,\varphi_{N}} = \varphi_{1}\otimes\varphi_{2}\otimes\dots\varphi_{N}  = {\Huge \otimes}_{k}^N\varphi_{k}$$
## Symmetrizer & Anti-symmetrizer
$$\mathcal{S} \ \mathcal{A}$$
# Second Quantization
In the second quantization language, instead of asking _"each particle on which state"_, one asks _"How many particles are there in each state?"_.

in the occupation number basis, a many-body state (a __Fock state__) is  given by
$$\ket{[n_{\alpha}]}\equiv \ket{n_{1},n_{2},\dots,n_{\alpha},\dots}$$
where $n$ is the number of particles in the $\alpha$ single particle state
$$n_{\alpha} = \begin{cases}
0,1 &\text{fermions} \\
0,1,2,\dots &\text{bosons}
\end{cases}$$
The total number of particles in the system is given by summing over all of the single particle states
$$\sum\limits_{\alpha}n_{\alpha}=N$$
Fock state with all occupation number equal to zero is called the __vacuum state__ $\ket{n_{\alpha}} = \ket{0,...,0,...,0}$, and the Fock state with only one nonzero occupation number is a __single-mode Fock state__ $\ket{n_{\alpha}} = \ket{0,...,n_{\alpha},...,0}$ 
$$\underset{\alpha}{\huge\otimes} {\psi_{\alpha}}^{\otimes n_{\alpha}}$$
# Creation & Annihilation Operators
The creation and annihilation operators are introduced to add or remove a particle from the many-body system.

## Fermions & Bosons
For fermions the creation and annihilation operators behave as follows
$$\begin{align*}
{c^{\dagger}}_{j}\ket{\dots n_{j}\dots} &=  (-1)^{\nu_{j}}\sqrt{ 1 - nj}\ket{\dots{1}-n_{j}\dots}\\
{c}_{j}\ket{\dots n_{j}\dots} &=  (-1)^{\nu_{j}}\sqrt{nj}\ket{\dots 1-n_{j}\dots}
\end{align*} \quad \quad \boxed{\nu_{j} = \sum\limits_{i<j}n_{i}}$$
For example
$$\begin{align*}
c^{\dagger}_{2}\ket{1001} \to (-1)^{1} \ket{1011} \\
c^{\dagger}_{2}\ket{1101} \to (-1)^{2} \ket{1111}
\end{align*} $$
> [!INFO] Fermion Algebra
> $$\large\begin{align} &\underline{\text{Fermions}}  && \underline{\text{Bosons}}  \\ &\{f_{\alpha},{f^{\dagger}_{\beta}}\} = \delta_{\alpha\beta}     && \boldsymbol{[} b_{\alpha},b_{\beta}^{\dagger}  \boldsymbol{]} = \delta_{\alpha\beta}  \\ &\{ f^{\dagger}_{\alpha}, f^{\dagger}_{\beta} \} =0  && \boldsymbol{[}b_{\alpha}^{\dagger},b_{\beta}^{\dagger}\boldsymbol{]}= 0 \\ &\{ f_{\alpha}, f_{\beta} \} = 0  && \boldsymbol{[}b_{\alpha},b_{\beta}\boldsymbol{]}= 0\end{align}$$


Let the following anti commutator act on the vacuum state
$$
\begin{align*}
\big\{ C_{i}, C^{\dagger}_{j} \big\}\ket{0} &=  C_{i} C^{\dagger}_{j}\ket{0} + C_{j}^{\dagger}\cancelto{0}{C_{i}\ket{0}}\\
&=C_{i}\ket{j}\\
&= \delta_{ij}\ket{0} 
\end{align*} 
$$

# Change of Basis
The following relations entail the transition from field operators in position basis to their counterparts in momentum basis. (Here N is the number of sites)
$$\large\boxed{\begin{align*}
C^{\dagger}_{x} &= \frac{1}{\sqrt{ N}}\sum\limits_{k=1}^{N}e^{-ikx}C^{\dagger}_{k} \\
C_{x} &= \frac{1}{\sqrt{ N}}\sum\limits_{k=1}^{N}e^{ikx}C_{k} 
\end{align*}}$$

> [!NOTE]- Change of basis
$$\begin{align*}{C}_{x_{i}}^{\dagger}\ket{0}=\ket{x_{i}} &= \mathbb{1}\ket{x_{i}}\\&= \left(\sum\limits_{j}\ket{k_{j}}\bra{k_{j}} \right) \ket{x_{i}} \\&= \sum\limits_{j}\braket{ k_{j} | x_{i} } \ket{k_{j}} \\ &= \sum\limits_{j} e^{ik_{j}x_{i}}C^{\dagger}_{k_{j}}\ket{0}\end{align*}$$ $$ \begin{align*} C^{\dagger}_{x}\ket{0}= \ket{x}  &= \mathbb{1}\ket{x}\\ &= \left( \sum\limits_{k}\ket{k}\bra{k} \right) \ket{ x}\\ &= \sum\limits_{k}\braket{ k | x } \ket{ k}\\ &= \sum\limits_{k} \frac{1}{\sqrt{ N }}e^{ikx} C^{\dagger}_{k}\ket{0}\end{align*}$$

# Translation Operator

$$T^{x} = J\sum\limits_{x} C^{\dagger}_{x}C_{x+1} + C^{\dagger}_{x+1}C_{x}$$
> [!NOTE]-  Operator Change of Basis
 $$\small\begin{align*}\sum\limits_{x} C^{\dagger}_{x}C_{x+1} &= \sum\limits_{x}\left(\frac{1}{\sqrt{ N}}\sum\limits_{k=1}^{N}e^{-ikx}C^{\dagger}_{k}\right)\left(\frac{1}{\sqrt{ N}}\sum\limits_{k'=1}^{N}e^{ik'(x+1)}C_{k'}\right)\\ &= \sum\limits_{kk'}e^{ik'}\left(\frac{1}{N}\sum\limits_{x} e^{ix(k'-k)} \right)C^{\dagger}_{k}C_{k'}\\&=  \sum\limits_{kk'}e^{ik'} \delta_{kk'} C^{\dagger}_{k}C_{k'}\\&= \sum\limits_{k}e^{ik}{C^{\dagger}}_{k}C_{k}\end{align*}$$
 The second term is
$$\small \begin{align*}\sum\limits_{x} {C^{\dagger}}_{x+1}C_{x} &= \sum\limits_{x} \left( \frac{1}{\sqrt{ N }}\sum\limits_{k'}e^{-ik'(x+1)} {C^{\dagger}}_{k'} \right)\left(\frac{1}{\sqrt{ N }}\sum\limits_{k}e^{ikx} {C^{\dagger}}_{k} \right)\\ &= \sum\limits_{kk'}e^{-ik'}\left(\frac{1}{N}\sum\limits_{x} e^{ix(k'-k)} \right)C^{\dagger}_{k'}C_{k}\\ &=  \sum\limits_{kk'}e^{-ik'} \delta_{kk'} C^{\dagger}_{k'}C_{k}\\ &=\sum\limits_{k}e^{-ik}{C^{\dagger}}_{k}C_{k}\end{align*}$$

$$\begin{align*}
T^{k} &=2J \sum\limits_{k} \cos(k) \  {C^{\dagger}}_{k}C_{k} \\\\
&= 2J \sum\limits_{k} \cos\left( \frac{2\pi}{N}k \right) \  N_{k}
\end{align*}$$
The last is given in terms of the number operator. 

> [!NOTE]-  Example (3-site system)
> Let's first examine the action of $T^x$ on an arbitrary state $\ket{110}_{x}$ $$T^{x}\ket{110} _{x} = \frac{1}{2}\Big(\ket{101}+\ket{011}  \Big)$$it is a superposition of the only two possible translations in this configuration. It is clearly non-diagonal in position basis. If we wish to evolve this arbitrary initial state in time we have to be able to represent it in the diagonalizing basis - momentum. $$\begin{align*}\ket{110}_{x} &= {C^{\dagger}}_{0}{C^{\dagger}}_{1}\ket{000 } \\
&=  \left( \frac{1}{\sqrt{ N }}\sum\limits_{k=1}^{3}e^{ik\cdot 0}{C^{\dagger}}_{k} \right)\left( \frac{1}{\sqrt{ N }}\sum\limits_{k'=1}^3e^{ik'\cdot 1}{C^{\dagger}_{k'}} \right)\ket{000}\\
&= \frac{1}{N}\sum\limits_{k,k'}^{3} e^{ik'} {C^{\dagger}}_{k}{C^{\dagger}}_{k'} \ket{000} \end{align*}$$
$\Big[k' \to \frac{2\pi}{3}k' \quad k'=0,1,2\Big]$ only the $k'\neq k$ terms survive in the sum. $$\begin{align*} \frac{1}{3}\Big[    
&{C^{\dagger}}_{0}{C^{\dagger}}_{1} + 
{C^{\dagger}}_{0}{C^{\dagger}}_{2} + 
e^{i\frac{2\pi}{3}}{C^{\dagger}}_{1}{C^{\dagger}}_{2} + \\
& e^{i\frac{2\pi}{3}}{C^{\dagger}}_{1}{C^{\dagger}}_{0} + e^{i\frac{4\pi}{3}}{C^{\dagger}}_{2}{C^{\dagger}}_{0} + e^{i\frac{4\pi}{3}}{C^{\dagger}}_{2}{C^{\dagger}}_{1}
\Big]\ket{000} \\\\
\frac{1}{3}\Big[  
&\ket{110}_{k} + \ket{101}_{k} + e^{i\frac{2\pi}{3}}\ket{011}_{k}\\
&   -e^{i\frac{2\pi}{3}}\ket{110}_{k} -e^{i\frac{4\pi}{3}}\ket{101}_{k} - e^{i\frac{4\pi}{3}}\ket{011}_{k}  
\Big]
\end{align*}
$$ Where the minuses in the second row, respect the order in which particles are created and their permutations. Finally, the initial state in momentum basis is given neatly by $$\small \ket{011}_{x} = \frac{1}{3}\left[ \left(1-e^{i {\frac{2\pi}{3}}}\right)\ket{110}_{k} + \left(1-e^{i {\frac{4\pi}{3}}}\right)\ket{101}_{k} + \left(1-e^{i {\frac{4\pi}{3}}}\right)  \ket{011}_{k}  \right] $$

# Coupling Coefficient
$$
\hat{U}_{[x]} = u\sum\limits_{k}C_{x}^{\dagger}C_{x+1}^{\dagger}+C_{x+1}C_{x}
$$

> [!NOTE]-  Change of Basis
>$$
\begin{align}
\small \sum\limits_{x}C_{x}^{\dagger}C_{x+1}^{\dagger} &= \sum\limits_{x} \left(\frac{1}{\sqrt{N}}\sum\limits_{k=1}^{N}e^{-ikx}C^{\dagger}_{k}\right)\left(\frac{1}{\sqrt{N}}\sum\limits_{k'=1}^{N}e^{-ik'(x+1)}C^{\dagger}_{k'}\right) \\ \\
&= \sum\limits_{k, k'}e^{-ik'}C_{k}^{\dagger}C_{k'}^{\dagger}\underbrace{ \left( \frac{1}{N}\sum\limits_{x}e^{-ix(k+k')} \right)}_{ \delta_{k',-k} } \\
&= \sum\limits_{k}e^{ik}C_{k}^{\dagger}C_{-k}^{\dagger}
\end{align}
$$

$$
\hat{U}_{[k]}= u\sum\limits_{k} e^{ik}C_{k}^{\dagger}C_{-k}^{\dagger} + e^{-ik}C_{-k}C_{k}
$$


# Time Evolution
$$\small\begin{align*}
U(t)\ket{011}_{x} &=\\
&=\small\exp{\left[  -it \frac{2J}{3}\sum\limits_{k=1}^{3} \cos\left( \frac{2\pi}{3}k \right) N_{k} \right]} \frac{1}{3}(c_{1}\ket{110}_{k} +c_{2}\ket{101}_{k}+c_{3}\ket{011}_{k}) =\\
&=\exp{\left[   -\frac{2iJt}{3}\left( \cos(0)+\cos\left( \frac{2\pi}{3} \right) \right)  \right]} \frac{c_{1}}{3}\ket{110}_{k} + \\
&+\exp{\left[   -\frac{2iJt}{3}\left( \cos(0)+\cos\left( \frac{4\pi}{3} \right) \right)  \right]} \frac{c_{2}}{3}\ket{101}_{k} +\\
&+\exp{\left[   -\frac{2iJt}{3}\left( \cos\left( \frac{2\pi}{3} \right)+\cos\left( \frac{4\pi}{3} \right) \right)  \right]} \frac{c_{3}}{3}\ket{011}_{k} 
\end{align*} $$

$$C_{k}=U_{x-k}^{\dagger}C_{x}U_{x-k}$$
