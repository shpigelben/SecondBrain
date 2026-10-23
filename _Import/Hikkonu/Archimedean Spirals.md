The (non-normalized) tangent vector $\mathbf{T}$ to any parametrization $\mathbf{r}(\theta)$ is given by 
$$\mathbf{T} = \frac{d\mathbf{r}}{d\theta}$$
specifically in polar coordinates

$$
\begin{align}
\mathbf{T} &= \frac{dr}{d\theta} \hat{\mathbf{r}} + r \frac{d \hat{\mathbf{r}}}{d\theta} \\ &= \frac{dr}{d\theta}\hat{\mathbf{r}} + r \hat{\boldsymbol{\theta}}  \\
&=T_{r} \mathbf{\hat{r}} + T_{\theta}\hat{\boldsymbol{\theta}}
\end{align}
$$
We quantify the deviation from a circular trajectory by the ratio of the radial to azimuthal components

$$
\tan(\psi) = \frac{T_{r}}{T_{\theta}} = \frac{1}{r} \frac{dr}{d\theta}=\frac{d \ln(r)}{d \theta}
$$
For a circle $r=r_{0}$ and thus $\psi_{\text{circle}}=0$. Let us investigate the deviation of an Archimedean spiral from a circle as a function of azimuthal angle $\theta$.

$$r_{\text{spiral}}(\theta)=r_{0}+\alpha \theta$$

The deviation angle is thus
$$
\psi_{\text{spiral}}(\theta) = \tan^{-1}\left( \frac{\alpha}{r_{0}+\alpha \theta} \right)
$$
whose plot looks like this
![](Pasted%20image%2020250727162854.png)


for arbitrary values of $\alpha$ and $r_{0}$.

- [ ] non-dimensionalization?
- [ ] optimal spiral?