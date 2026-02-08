# Dirac Delta Function (Distribution ?)
#math #fourier #generalized #function #distribution
___

## Definition

### Fourier Series Definition

A general function, $f(x)$, is given by its [[Fourier Series]] representation
$$
f(x) = \sum_{k=-\infty}^\infty f(k) e^{ikx}
$$
where the Fourier coefficients $f(k)$ are given by
$$f(k) = \braket{f(x),e^{ikx}} =  \frac{1}{2\pi} \int_{-\infty}^\infty dx \ f(x)e^{-ikx}$$
we can therefore write 
$$
f(x_0) = \sum_{k = -\infty}^\infty f(k) e^{ikx_0} = \sum_{k=-\infty}^\infty
\left( \frac{1}{2\pi} \int_{-\infty}^\infty dx \ f(x)e^{-ikx} \right) e^{-ikx_0}
$$
Taking the summation inside the integral, and $f(x)$ outside of the sum we get
$$
f(x_0) 
= \int_{-\infty}^\infty dx \ f(x)
\left( \frac{1}{2\pi} \sum_{k=-\infty}^\infty  \ e^{-ik(x-x_0)} \right)
\tag{1}
$$
we also can write (1) using the sifting property of the delta function as follows
$$ f(x_0) = \int_{-\infty}^\infty dx \ f(x)\delta(x-x_0) \tag{2}  $$
Since $(1)$ and $(2)$ are equivalent $\forall x_0$, we can equate the integrands to get the following definition for the delta function
$$\large\boxed{
\delta(x-x_0) = \frac{1}{2\pi} \sum_{k=-\infty}^\infty  \ e^{-ik(x-x_0)}} $$
which happens to a Fourier series with $f(k)$ = 1


___
# Properties
1. for an $n$ dimensional delta function, scaling of the argument by a factor is disproportional to the scaling of the delta function
$$ \delta^n(ax) =\frac{1}{|a|^{n}}\delta(x)$$