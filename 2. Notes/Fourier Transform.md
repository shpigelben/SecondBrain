#note #math #real-analysis #derivative 

**The Fourier transform** of a function $f(t)$ returns a distribution of its frequency components in the conjugate space $\hat{f}(\omega)$. Most commonly:
- time $\to$ temporal frequency
- space $\to$ spatial frequency
$$\hat{f}(\omega) = \mathcal{F}[f(t)] = \frac{1}{2\pi}\int \limits_{-\infty}^{\infty} dt \ f(t) {\large e}^{-i\omega t} $$
Unlike the [[Fourier Series]], it is applicable to function that satisfy $\int \limits_{-\infty}^{\infty} |f(x)|^{2}  \ dx<\infty$. In other words, Fourier transform is relevant for functions of [[L2 norm]]. **The inverse Fourier transform** is given by
$$f(t) = \mathcal{F}^{-1}[f(t)] = \int \limits_{-\infty}^{\infty} d\omega \ \hat{f}(\omega) {\large e}^{i\omega t} $$
Where the directionality of the transform is arbitrary, yet conventional.
___
In fact, a Fourier transform can be thought of as an [[inner product]] in $L_{2}(\small -\infty,\infty)$ between the transformed function and an [[orthonormal set]]
$$\left< f(t), \frac{1}{2\pi}e^{i\omega t}\right>$$

![center|400](../9.%20Misc/attachments/Fourier_transform_time_and_frequency_domains_(small).gif)
 