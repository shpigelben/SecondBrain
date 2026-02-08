#note #physics #quantum #derivative  | #relativity  

 The [[Angular Momentum Operator]] defined as $\hat{\mathbf{L}}=\hat{\mathbf{r}}\times \hat{\mathbf{p}}$ commutes with the [[Schrodinger Equation]] of a free particle. That means that by [[Equations of Motion#Operator Dynamics|Ehrenfest equation]] that $\hat{\mathbf{L}}$ is conserved. It is not the case for the [Dirac hamiltonian](Dirac%20Equation.md)
$$\begin{align*}
\big[ \hat{\mathcal{H}}_{\small D}, \hat{\mathbf{L}} \big] &= \big[ \boldsymbol{\alpha}\cdot \mathbf{\hat{p}}+ \beta m , \hat{\mathbf{r}}\times \hat{\mathbf{p}} \big]\\
&= [\alpha_{i}\hat{p}_{i}, \epsilon_{klm}\hat{r}_{l}\hat{p}_{m}]\\
&=\alpha_{i}\epsilon_{klm}[ \hat{p}_{i}, \hat{r}_{l}\hat{p}_{m} ]\\
&=\alpha_{i}\epsilon_{klm}\big([\hat{p}_{i},\hat{r}_{l}]\hat{p}_{m} + \hat{r}_{l}[\hat{p}_{i},\hat{p}_{m}]
\big)\\
&=\alpha_{i}\epsilon_{klm}\big(-i\delta_{il}\hat{p}_{m} 
\big)\\
&=-i\epsilon_{klm}\alpha_{l}\hat{p}_{m}\\
&=-i \ \boldsymbol{\alpha}\times\hat{\mathbf{p}}
\end{align*}$$
The orbital angular momentum is no longer conserved. We seek a new quantity which will obey the rules of [[Addition of Angular Momenta]] and will produce the following commutation relation $\big[ \hat{\mathcal{H}}_{\small D}, \hat{\mathbf{S}} \big]=i \ \boldsymbol{\alpha}\times\hat{\mathbf{p}}$ such that the new quantity $\hat{\mathbf{J}}=\hat{\mathbf{L}}+\hat{\mathbf{S}}$ will be conserved
$$\big[ \hat{\mathcal{H}}_{\small D}, \hat{\mathbf{J}} \big]= \big[ \hat{\mathcal{H}}_{\small D}, \hat{\mathbf{S}} + \hat{\mathbf{L}} \big] =i \ \boldsymbol{\alpha}\times\hat{\mathbf{p}} - i \ \boldsymbol{\alpha}\times\hat{\mathbf{p}} =0$$
The new operator is called the __spin operator__ and it is another intrinsic degree of freedom, a form of intrinsic angular momentum that is inherent in relativistic particles

- While spin appears from the Dirac equation it does not necessarily mean that relativistic velocities are required for its appearance
- if the SH equation is the nonrelativistic limit of the Dirac equation, does that mean that every particle has a degree of spin which is negligible in nonrelativistic regimes? 
  
# The Spin Operator
The need for the spin operator is clear, but what kind of an operator is it and what exactly does it represent ? It just so happens that the spin operator is given by
$$ \hat{\mathbf{S}} = \frac{1}{2}\hat{\boldsymbol{\Sigma}}=\begin{pmatrix}\hat{\boldsymbol{\sigma}} & 0 \\ 0 & \hat{\boldsymbol{\sigma}}\end{pmatrix} $$
where $\hat{\boldsymbol{\sigma}}$ are the [[Pauli Matrices]]. The $\hat{\boldsymbol{S}}$ matrices satisfy [[Lie Algebra]] for generators of rotations, namely$\big[S_{i},S_{j}\big]=i\epsilon_{ijk}S_{k}$ and the it is a [[Representation Theory|representation]] of a certain dimension. To find the dimension of representation we want to calculate the Casimir operator of the group.
$$\mathbf{S}^{2}= \frac{1}{4}\Big({\Sigma_{x}}^{2} + {\Sigma_{y}}^{2} + {\Sigma_{z}}^{2}\Big)=\frac{3}{4}I$$
And since the total spin should satisfy $\hat{S}\ket{s}=s(s+1)\ket{s}$ in combination with the above equation, the spin is half integer, specifically $s=\frac{1}{2}$. That means that particles that satisfy the Dirac equation have spin $\frac{1}{2}$ 

