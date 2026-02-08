$$
\text{Ben Shpigel 204389449}
$$
# Question 1

![](../9.%20Misc/attachments/Pasted%20image%2020240723180103.png)

## a.
![center|400](../9.%20Misc/attachments/Pasted%20image%2020240723163142.png)

**(b)**
![center|500](../9.%20Misc/attachments/Pasted%20image%2020240723164348.png)


It is also clear that
$$
E_{\beta}^{-1}[f]=E_{-\beta}[f]
$$
And recall that $\beta \propto z^{-1}$ (z being the general direction of propagation) which means that $-\beta \propto -z^{-1}$. This physically means that the the inverse of the Fresnel transform, which relates a field at a certain point to its evolution at a later point (z), transforms in the opposite direction (-z).

**(c)** According to previous sections we have
$$
E^{\dagger}_{ \beta}[f] = E^{-1}_{\beta}[f]
$$
which means that the transformation is unitary. Using, the less rigorous (but more intuitive) bracket notation we can show that the norm (or the power) of the fields is conserved along the direction of propagation
$$
|\tilde{f}|^{2}=\braket{ \tilde{f}|\tilde{f}} =  \braket{ f E^{\dagger}_{ \beta}|E_{ \beta}f  } =\braket{  f|E_{\beta}E^{\dagger}_{\beta}| f } =\braket{  f|I| f } = \braket{ f | f } =|f|^{2}
$$

# Question 2

> [!Question] Question 1
> ![](../9.%20Misc/attachments/Pasted%20image%2020240723180039.png)

**(a)**
![center|500](../9.%20Misc/attachments/Pasted%20image%2020240723181232.png)

**(b)**
![center|500](../9.%20Misc/attachments/Pasted%20image%2020240723183437.png)
# Question 3

> [!Question] Question 3
> ![](../9.%20Misc/attachments/Pasted%20image%2020240723180132.png)

**(a)** ![center|500](../9.%20Misc/attachments/Pasted%20image%2020240723205033.png)
**(b)** By using a combination of the fractional Fourier transform and an ideal low pass filter, we can isolate the second signal. The idea goes as follows
![center|500](../9.%20Misc/attachments/Pasted%20image%2020240723215348.png)
The fractional FT with half a period acts as a $45^{\circ}$ rotation in phase space. Sandwiching the filter between the fractional FT and its inverse acts as a basis transformation for the filter operator and rotates in the phase space so that it allows only for frequencies below $x+\sqrt{ 2 }$ which allows the passage of the first $\omega=x$ and blocks $\omega=x+2$.

# Question 4

> [!Question] Question 4
> ![](../9.%20Misc/attachments/Pasted%20image%2020240723180155.png)

**(b)** My ID ends with number 9, so I chose the nest best thing, equation h.

$$
\begin{pmatrix}
1 & x \\0 & 1
\end{pmatrix}

\underbrace{ \begin{pmatrix}
1/c & 0 \\ 0 & c
\end{pmatrix} }_{ scaling }

\underbrace{ \begin{pmatrix}
0 & -1  \\1 & 0
\end{pmatrix} }_{ FT }

\underbrace{ \begin{pmatrix}
1 & d/c \\ 0 & 1
\end{pmatrix} }_{ Fresnel } = \begin{pmatrix}
cx & dx-1/c \\c & d
\end{pmatrix}
$$
The determinant trivially vanishes, regardless of the value of $x$. So I want to say that any value of $x$ is allowed since I can't find or recall any other constraints on the LCT.
**(b)** The general LCT describes the diffraction of a beam, propagated by Fresnel transformation with $\beta=c/2d$  a distance of $z = \frac{2\pi d}{\lambda c}$. Then the Fourier transform describes the mapping of the wavefront into its spatial Fourier transform in the focal plane of the lens. The nest transformation is a scaling transformation that describes the propagation of the beam in free space.
# Question 5

> [!Question] Question 5
> ![](../9.%20Misc/attachments/Pasted%20image%2020240723180223.png)

The output is given by the following
$$
g = m_{1}F\Big[ m_{2}F[f]\Big]
$$
In the Wigner picture, as stated before,  the Fourier transform acts as a rotation in phase space
$$
\begin{align}
W_{g} &= W_{\scriptsize m_{1}}*\Bigg[ R \left( \frac{\pi}{2} \right)\bigg[W_{\scriptsize m_{2}} *\ \Big[R \left( \frac{\pi}{2} \right)W_{\scriptsize f}\Big]\bigg] \Bigg] \\
\end{align}
$$

The process in phase space is as follows
![center|200](../9.%20Misc/attachments/Pasted%20image%2020240723231153.png)