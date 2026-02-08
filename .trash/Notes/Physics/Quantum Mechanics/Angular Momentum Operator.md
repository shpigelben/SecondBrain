#quantum #mechanics 
#angular #momentum #operator 
#QM2

The action of a rotation operator on a position state in [[Hilbert Space]] can be written as the ket of the action of a rotation matrix on a position vector in Euclidian space. 
$$
\hat{R}\ket{\mathbf{r}} = \ket{R^E \mathbf{r}}
$$
$\hat{R}$ is a $N\times N$ dimensional Hilbert operator, and $\ket{R}$ is an N dimensional Hilbert state, while $R^E$ is a 3x3 matrix (assuming 3 dimensional Euclidean space) and $\mathbf{r}$ is a 3 dimensional vector.

# Generator of Rotations
Angular momentum operator is the generator rotations, for an infinitesimal rotation we have (see derivation)
$$\hat{R}(\boldsymbol{\delta\phi}) \approx 1-i \delta\phi\hat{L}_{n} $$

> [!NOTE]- Derivation of the momentum operator
> Lets consider an infinitesimal rotation $\delta \boldsymbol{\Phi}$  where$$\boldsymbol{\Phi} = \Phi \mathbf{n} = \boldsymbol{\Phi} \begin{pmatrix}\sin \theta \sin \phi \\\sin \theta \cos \phi\\\cos \theta\end{pmatrix}$$It is easily seen from the figure below that an infinitesimal movement along a circle, which corresponds to an small rotation, can be written as ![[Pasted image 20220404125823.png|400]]$$d \mathbf{r} = \delta\boldsymbol{\Phi}\times \mathbf{r}$$Then a small rotation can be written as (in both vector and index notations)$$\begin{align*}R^{E}_{(\delta \Phi)} \mathbf{r}   &= \mathbf{r} + \delta\boldsymbol{\Phi}\times \mathbf{r} \\{R^{E}}_{ij}r_{j}  &= r_{i} + \epsilon_{kij} \ \delta \Phi_{i}r_{j}\end{align*} $$Let us now consider an infinitesimal rotation in Hilbert space$$\begin{align*}\hat{R}\ket{\mathbf{r}} = \ket{R^{E}{\small(\delta \Phi)}\mathbf{r}}&= \ket{\mathbf{r} + \delta\boldsymbol{\Phi}\times \mathbf{r} }\\&=\hat{D}{\small(\delta\boldsymbol{\Phi}\times \mathbf{r})}\ket{\mathbf{r}}\\&=e^{-i(\delta\boldsymbol{\Phi}\times \mathbf{r})\cdot \hat{\mathbf{p}}} \tag{4}\end{align*}$$Where we have used the definition of the [[Position & Momentum Operators#Translation Operator|translation operator]] specifically for [[Position & Momentum Operators#Infinitesimal Translations|infinitesimal translations]]. We proceed by taking the first order approximation of $(4)$ $$ \begin{align*}\hat{R}\ket{\mathbf{r}}=e^{-i(\delta\boldsymbol{\Phi}\times \mathbf{r})\cdot \hat{\mathbf{p}}} &\approx \Big[1-i(\delta\boldsymbol{\Phi}\times \mathbf{r})\cdot \hat{\mathbf{p}}\Big] \ket{\mathbf{r}}\\& = \Big[1-i\hat{\mathbf{p}}\cdot(\delta\boldsymbol{\Phi}\times \mathbf{r})\Big] \ket{\mathbf{r}}\\& =\Big[1-i \hat{\mathbf{p}}\cdot(\delta\boldsymbol{\Phi}\times \hat{\mathbf{r}})\Big] \ket{\mathbf{r}} &\text{\small r is now operator}\\&=\Big[1-i\delta\Phi \  \mathbf{n}\cdot(\hat{\mathbf{r}}\times \hat{\mathbf{p}} )\Big] \ket{\mathbf{r}} &\text{\small cyclic permutation}\\& \equiv\Big[1-i\delta\Phi \  \hat{\mathbf{L}}_{n} \Big] \ket{\mathbf{r}} &\text{\small angular momentum}\end{align*} $$

Rotations in three dimensions is a [[SO(3) Group|group]], and so we invoke the group property to generate non-infinitesimal rotations. So that if $\delta \phi = \frac{\Phi}{N}$ we can write
$$ \hat{R}(\Phi) = \left[\hat{R}\left(\frac{\Phi}{N}\right) \right]^{N} =  \left[ 1-i \frac{\Phi}{N} \hat{L}_{n} \right]^{N} \stackrel{\tiny N\to\infty}{\Large\longrightarrow} \large e^{-i \Phi\hat{\mathbf{L}}_{n}}$$

# Uncertainty Relation
The uncertainty between angular momentum and position can be shown to appear as
$$ \big[r_{i},L_{j}\big]=i\epsilon_{ijk}r_{k} $$
This is actually another form of the statement that $L$ generates rotation in $r$, just like $[r,p]=i$ implies that $p$ generates translations in $r$

# Commutation Relations