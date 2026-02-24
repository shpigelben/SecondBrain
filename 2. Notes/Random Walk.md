In the absence of density gradients there is no [[Diffusion|collective diffusion]], but particles are far from static. They perform an erratic movement known as __Brownian motion__ which is the result of their high velocity and numerous collisions with other particles. The motion is diffusive in nature and is characterized by a __self diffusion coefficient__ (different from the collective diffusion coefficient). ![right|400](../9.%20Misc/attachments/2Drandomwalk.gif) The vector $\mathbf{R}$ is the final position of a particle after it had taken a $N$ steps $\mathbf{r}_{j}$ in random directions and is given by 
$$\mathbf{R}=\sum\limits_{j=1}^{N}\mathbf{r}_{j}$$
Under the assumption of [isotropy](Homogeneity%20&%20Isotropy.md)  no direction is favorable, therefore the contribution of each step is zero and the [[Mean|mean]] final position is given by
$$\braket{\mathbf{R}}= \sum\limits_{j=1}^{N}\braket{\mathbf{r}_{j}}=0$$
The [[Variance|variance]] of $\mathbf{R}$ is thus given by
$$\begin{align*}
\text{Var}(\mathbf{R}) =\braket{\mathbf{R}^{2}}&=\left\langle\left(\sum\limits_{j}\mathbf{r}_{j}\right)\cdot\left(\sum\limits_{i}\mathbf{r}_{i}\right)\right\rangle\\\\
& = \sum\limits_{j}\left\langle \mathbf{r}_{j}\cdot\mathbf{r}_{j} \right\rangle + \sum\limits_{j\neq i}\left\langle \mathbf{r}_{j}\cdot\mathbf{r}_{i}\right\rangle =N \braket{r^{2}}\\
\end{align*}$$
Where the two following assumptions have been made
1. The term $\braket{\mathbf{r}_{j}\cdot\mathbf{r}_{i}}$ vanishes for any two different steps. Two different steps are independent of each other.
2. It is assumed that there is a [[Mean Free Path|mean free path]]
3. There is a typical step size $\ell^{2}$ which is equivalent to $\braket{r^{2}}$
$$(\ell_{mfp})^{2}=\text{Var}(\mathbf{R}) = N \braket{r^{2}} = N\ell^{2}$$
and so the [[root mean square]] is which corresponds in this case to the standard deviation is $$\ell_{mfp} = \sigma_{\small R} = \sqrt{\text{Var}(\mathbf{R})} = \sqrt{N}{\ell}$$
# Time of Random Walk Process
If we assume a typical time for a step $\tau$ , for a process of $N$ steps the time it takes the particle to arrive to its final position is $t=N\tau$.
$$\ell_{mfp} = \sqrt{N}{\ell} = \sqrt{\frac{t}{\tau}}\ell = \sqrt{t\tau} \ v$$
$$\begin{align*}
&\ell_{mfp} \propto N^{\frac{1}{2}}\\
&\ell_{mfp} \propto t^{\frac{1}{2}}
\end{align*}$$
# Self Diffusion Coefficient
Going back to the variance of the position of a random walker we achieved the following which can be written as


$$\text{Var}(\boldsymbol{R})=N\ell^{2}= \left( \frac{t}{\tau} \right)\ell^{2} = 2d\underbrace{ \left(\frac{\ell^{2}}{2d\tau}\right) }_{ D_{s} }t$$

Where $d$ is the dimensionality of the system. And $D_{s}$ is the self diffusion coefficient. But where is the diffusion equation associated with it? If we treat the path traced by a single Brownian motion as a collection of random numbers sampled from some [[Probability Distribution Function|probability density function]] $\mathcal{P}(\boldsymbol{R}(t))$ we find that such distribution function solves the diffusion equation.

Since the variance of $\boldsymbol{R}$ is finite, the [[Central Limit Theorem]] applies and the mentioned PDF is thus described by a [[normal distribution]]

$$\mathcal{P}(\boldsymbol{R}(t))=N\big(\boldsymbol{R_{0}};2dD_{s}t\big)= \frac{1}{(4\pi D_{s}t)^{d/2}}\exp{\left[- \frac{(\boldsymbol{R}-\boldsymbol{R_{0}})^{2}}{4dD_{s}t}\right]}$$


# Simulating Random Walk

> [!NOTE]- Title
> ![[../9. Misc/attachments/NM - HW8 - Jupyter Notebook.pdf]]

# Levy Flight


$$
\mathbf{E}(\mathbf{k},\omega)= \int\limits_{\Omega}  \int\limits_{-\infty}^{\infty}   \mathbf{E}(\mathbf{r},t) \ e^{-i(\mathbf{k\cdot \mathbf{r}}+\omega t)} \ \, d\mathbf{r} dt 
$$

