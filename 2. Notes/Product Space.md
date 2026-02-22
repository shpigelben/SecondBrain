Consider two separate, independent Hilbert spaces 
- $A$ with states $\ket{a}$  
- $B$ with states $\ket{b}$
___
# Outer Product
An outer product takes two vectors $u$ and $v$ from two spaces $U$ and $V$ and combine them into a new vector that lives in a __product space__ $W$ with dimensions $\dim{W} = \dim{U}\cdot\dim{V}$
$$ \begin{pmatrix}a \\ b\end{pmatrix} \otimes\begin{pmatrix}c \\ d\end{pmatrix} = \begin{pmatrix}a c \\ a d \\ b c \\ b d\end{pmatrix} $$
$$\begin{pmatrix}a \\ b\end{pmatrix}\otimes\begin{pmatrix}1 \\ 0\end{pmatrix} + \begin{pmatrix}c \\ d\end{pmatrix}\otimes\begin{pmatrix}0 \\ 1\end{pmatrix} =\begin{pmatrix}a\cdot1 \\ b\cdot1 \\ a\cdot0 \\ b\cdot0\end{pmatrix} + \begin{pmatrix}c\cdot0 \\ d\cdot0 \\ c\cdot1 \\ d\cdot1\end{pmatrix} = \begin{pmatrix}a \\ b \\ c \\ d\end{pmatrix}$$

___
## States

A __2-dim__ space of spin - 1/2 states and a __3-dim__ space of position states can be combined to produce a __6-dim__ space of spin-position states. 
$$\begin{align*}
&\ket{x} : x=\{1,2,3\}\\
&\ket{s} : s=\{\uparrow, \downarrow\}
\end{align*}$$
We use the outer product to create a new general vector in the product space. We also show how we treat the new states as basis vectors. 
$$\begin{pmatrix}1 \\ 2 \\ 3 \\\end{pmatrix}\otimes\begin{pmatrix}\uparrow \\ \downarrow\end{pmatrix} = \begin{pmatrix}1 \uparrow \\ 1 \downarrow \\ 2 \uparrow \\ 2 \downarrow \\ 3 \uparrow \\ 3 \downarrow\end{pmatrix} \equiv \begin{pmatrix}1 \\ 0 \\ 0 \\ 0 \\ 0 \\ 0\end{pmatrix} + \begin{pmatrix}0 \\ 1 \\ 0 \\ 0 \\ 0 \\ 0\end{pmatrix} + \dots + \begin{pmatrix}0 \\ 0 \\ 0 \\ 0 \\ 0 \\ 1\end{pmatrix}$$
or more comfortably with Dirac notation
$$ \ket{x}\otimes\ket{s} = \ket{xs} \leadsto \begin{align*}
&\ket{1 \uparrow}\ket{1 \downarrow}\\
&\ket{2 \uparrow}\ket{2 \downarrow}\\
&\ket{3 \uparrow}\ket{3 \downarrow}
\end{align*} $$
___
### Entanglement

A super position of two such new states can create an [[Entanglement]]. To illustrate this we use the example above - if we have a wave function that is a superposition of the particle with spin up in the first site and a particle with spin down in the second site, we can measure the position of the particle, if we know that 
$$ \ket{\psi} = \ket{\uparrow1}+\ket{\downarrow 2}  $$
Entangled state is non-coherent.
___
## Operators Over a Product Space

Reusing our spin & position spaces, we recognize operators $\hat{S}$ & $\hat{X}$ that operate on the vectors of each space respectively. Accordingly, they have dimensions $2\times 2$ & $3\times 3$ respectively.
$$\begin{align*}
\hat{O}=\hat{X}\otimes\hat{S}&=(\hat{X}\otimes\hat{1}_{2})(\hat{1}_{3}\otimes\hat{S})\\
&=[({\tiny 3\times3})\otimes({\tiny 2\times 2})][({\tiny3\times3})\otimes({\tiny 2\times 2})]\\
&=[\dim(6\times6)][\dim(6\times6)]\\
&=\dim(6\times 6)
\end{align*}$$
Where $\hat{1}_n$ is a $n\times n$ identity matrix. It is obvious that the outer product of two operators $C=A\otimes B$  has dimensions that correspond to the product of dimensions - $\dim{C}=\dim{A}\cdot\dim{B}$.
