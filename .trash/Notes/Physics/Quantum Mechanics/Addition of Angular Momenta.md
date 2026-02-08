#quantum #rotation #algebra 

Lets say we have two independent spaces - one of spin 1/2 ([[SU(2) Group|dim2 representation]]) and one of spin-1 ([[SO(3) Group|dim3 representation]] ). We can create a [[Product Space]] that contains the ordered pairs of all spin-1/2 and spin-1 combinations.

$$\begin{align*}
\ket{m} = &\ket{\uparrow},\ket{\downarrow}\\
\ket{l} = &\ket{\Uparrow}, \ket{\Downarrow}, \ket{\Updownarrow}\\
\end{align*}
$$
The (dim6) product space will be given by the following 
$$\begin{align*}
\ket{m }\otimes \ket{l} \equiv\ket{ml}\leadsto \ &\ket{\uparrow \Uparrow},\ket{\uparrow \Downarrow}, \ket{\uparrow \Updownarrow}\\
&\ket{\downarrow \Uparrow},\ket{\downarrow \Downarrow}, \ket{\downarrow \Updownarrow}
\end{align*}$$
___
We know that each spin has a generator of rotations (angular momentum) associated with it 
$$\begin{align*}
S_{z}\ket{m} &=m_{s}\ket{m}\\
L_{z}\ket{l}&=m_{l}\ket{l}
\end{align*}$$
where $m_{s}={-m,...,m}$ (in this case $m=1/2$), and $m_{l}={-l,...,l}$ (in this case $l=1$). 
___
# Rotation of Only One Spin

Lets say we want to construct an operator the acts on the new dim6 vector but rotates only the spin-1 component. We remind ourselves that general rotation of spin-1 object is given by the exponential map of its rotation generators

$$ \begin{align*}
\hat{R}^{l}=\hat{R}^{L}\otimes\hat{1}_{2} &= {\large e^{-i\Phi \hat{L}_{n}}}\otimes\hat{1}_{2}\\
&=\large e^{-i\Phi \ \hat{L}_{n}\otimes\hat{1}_{2}}
\end{align*}$$
Where the last transition is valid due to the tensor product being done on a complete basis 
$$f(\hat{x})\otimes\hat{1}=f(\hat{x}\otimes\hat{1})$$
component.
$$\hat{R}^{l}\ket{lm}=\ket{\tilde{l} , m}$$
In a similar fashion we can construct a rotation operator that acts on the composite system and rotates the spi-1 component and leaves the spin-1 unchanged

$$ \begin{align*}
\hat{R}^{m}=\hat{R}^{S}\otimes\hat{1}_{3} &= e^{-i\Phi \hat{S}_{n}}\otimes\hat{1}_{3}\\
&=e^{-i\Phi \ \hat{S}_{n}\otimes\hat{1}_{3}}
\end{align*}$$
Such that
$$\hat{R}^{m}\ket{lm}=\ket{l , \tilde{m}}$$
___
# Rotation of the Composite State
We seek a new generator of rotation $J$ that will generate rotations of the composite states $\ket{ml}$. We want a way to rotate the entire new state. It is obvious from the definition above that  the addition two operators that act on the components separately will result in an operator that acts on the composite system.

$$\begin{align*}
\hat{R} &= \hat{R}^{l}\cdot\hat{R}^{m} \\
&=(\hat{R}^{L}\otimes\hat{1}_{2})(\hat{R}^{S}\otimes\hat{1}_{3})\\
&=\large(e^{-i\Phi \hat{L}_{n}}\otimes\hat{1}_{2})(e^{-i\Phi \hat{S}_{n}}\otimes\hat{1}_{3})\\
&=\large(e^{-i\Phi \ \hat{L}_{n}\otimes\hat{1}_{2}})(e^{-i\Phi \ \hat{S}_{n}\otimes\hat{1}_{3}})\\
&=\large e^{-i\Phi (\hat{L}_{n}\otimes\hat{1}_{2}+ \hat{S}_{n}\otimes\hat{1}_{3})}\\
&\equiv\large e^{-i\Phi\hat{J}}
\end{align*}$$
The last equality is valid since the operators live in different spaces and therefore trivially commute and can be written on the same exponent.

___
##  The case of 2X2 = 1+3
In general, the new rotation operator $J$ for the $2\otimes 2$ case is not block diagonal. By transitioning to an appropriate (singlet-triplet) basis we can show that rotating two composite spins-1/2 is equivalent to a rotation of a __singlet__ (dim1) and a rotation of a __triplet__ (dim3).
$$\begin{align*}
&\text{singlet}\leadsto \begin{cases}\frac{1}{\sqrt{2}}\Big(\ket{\uparrow \uparrow}+\ket{\downarrow \downarrow}\Big)\end{cases}\\
&\text{triplet}\leadsto \begin{cases} &\ket{\uparrow \uparrow}\\
\frac{1}{\sqrt{2}}\Big( &\ket{\uparrow \downarrow}+\ket{\downarrow\uparrow}\Big)\\
&\ket{\downarrow \downarrow}\end{cases} \leadsto \begin{cases}&\ket{\Uparrow} \\ &\ket{\Updownarrow} \\ &\ket{\Downarrow} \end{cases}
\end{align*}$$
$$\large2\otimes2=1\oplus3$$
___
## The case of 3X2 = 2+4
$$\begin{align*}
\large3\otimes2&=\large4\oplus2\\
[1]\otimes \left[\frac{1}{2}\right]&=\left[\frac{3}{2}\right]+\left[\frac{1}{2}\right]
\end{align*}$$
$$j(j+1)=\begin{cases} \frac{3}{2}\left(\frac{3}{2}+1\right)\\ \frac{1}{2}\left(\frac{1}{2}+1\right)\end{cases}$$
$$\left(\begin{array}{cccc|cc} \frac{15}{4} & 0 & 0 & 0 & 0 & 0 \\ 0 & \frac{15}{4} & 0 & 0 & 0 & 0 \\ 0 & 0 & \frac{15}{4} & 0 & 0 & 0 \\ 0 & 0 & 0 & \frac{15}{4} & 0 & 0 \\
\hline 0 & 0 & 0 & 0 & \frac{3}{4} & 0 \\ 0 & 0 & 0 & 0 & 0 & \frac{3}{4}\end{array}\right)$$

___
# Total Angular Momentum

$$ (2l+1)\otimes(2s+1) = (2|l+s|+1)\oplus\dots\oplus(2|l-s|+1) $$
representations
$$[l]\otimes[s] = [l+s]\oplus\dots\oplus[|l-s|]$$
$$3\otimes2\leadsto[1]\otimes[1/2]=[3/2]\oplus[1/2]\leadsto4\oplus2$$
$$3\otimes 3 \leadsto  [1]\otimes [1]= [2]\oplus[1]\oplus[0] \leadsto5\oplus 3\oplus 1$$
$$5\otimes2\leadsto[2]\otimes\left[\frac{1}{2}\right]=\left[\frac{5}{2}\right]\oplus\left[\frac{3}{2}\right]\leadsto 6\oplus 4$$
$$ 6\otimes2\leadsto\left[\frac{5}{2}\right]\otimes\left[\frac{1}{2}\right]=[3]\oplus[2]=7\oplus5 $$
$$5\otimes3=[2]\otimes[1]=\left[3\right]\oplus\left[2\right]\oplus[1]=7\oplus5\oplus3$$
