#note #math/real-analysis #concept  

# Fourier Series Definition
A general function, $f(x)$, is given by its [[Fourier Series]] representation
$$\begin{align*}
f(x) &= \sum_{k=-\infty}^{\infty} f(k) e^{ikx}\\
&=\sum_{k=-\infty}^{\infty} \left(\frac{1}{2\pi} \int_{-\infty}^{\infty} dx \ f(x)e^{-ikx}\right)e^{-ikx}
\end{align*}$$
For a single point $f(x_{0})$ the following is allowed
$$
f(x_0) 
= \int_{-\infty}^\infty dx \ f(x)
\left( \frac{1}{2\pi} \sum_{k=-\infty}^\infty  \ e^{-ik(x-x_0)} \right)
\tag{1}
$$
where integration and summation were exchanged and the second exponent was brought inside the integration since it is no longer a function of $x$.

On the other hand, we can use the definition of the delta function to write (1) as follows
$$ f(x_0) = \int_{-\infty}^\infty dx \ f(x)\delta(x-x_0) \tag{2}  $$
and since $(1)$ and $(2)$ are equivalent $\forall x_0$, we can equate their integrands to get the following definition for the delta function
$$\large\boxed{
\delta(x-x_0) = \frac{1}{2\pi} \sum_{k=-\infty}^\infty  \ e^{-ik(x-x_0)}} $$
which happens to a Fourier series with $f(k)$ = 1


___
# Properties
1. Sampling property $$\int  \, dx \, \delta(x-x_{0})f(x)=f(x_{0}) $$
2. for an $n$ dimensional delta function, scaling of the argument by a factor is disproportional to the scaling of the delta function $$ \delta^n(ax) =\frac{1}{|a|^{n}}\delta(x)$$