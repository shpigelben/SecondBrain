---
type: concept
discipline:
  - physics
field:
  - quantum-mechanics
---

In an N-site system, a particle can be in any of the N position states that constitute a [[Hilbert space]]. Each of the N positional states specifies a location in the physical world (be it a 1D, 2D or 3D system or maybe even more...). in Dirac notation position states are given by $\ket{x}$. For example, the second site in a three-site system $$\ket{2} \rightarrow \begin{pmatrix} 0 \\ 1 \\ 0 \end{pmatrix}$$Position states, are by definition the eigenstates of the __position operator__. We assume periodic boundary conditions that is, for a N-site system $\ket{N+1} = \ket{1}$ holds

# Position Operator
The position operator defined over a Hilbert space is a diagonal operator in position basis, namely $$\hat{x}\ket{x} \equiv x\ket{x}$$Its eigenvalues correspond to the positions of the states. For a 3-site system, in Matrix representation
$$\hat{x}\ket{2} \rightarrow \begin{pmatrix}
1 & 0 & 0 \\
0 & 2 & 0 \\
0 & 0 & 3 \\
\end{pmatrix}
\begin{pmatrix} 0 \\ 1 \\ 0 \\ \end{pmatrix}
=
2\begin{pmatrix} 0 \\ 1 \\ 0 \\ \end{pmatrix}
$$

# Translation Operator
The translation operator acts on a position state and translates it another position state. In the discrete, 1D case it is defined as
$$ \hat{D}\ket{x} \equiv \ket{x+1} $$
It is clear that $\hat{D}$ is not diagonal in the position basis. In matrix notation, in position basis (the 2rd site in a 3-site system)  it is written as
$$\hat{D}\ket{2} \rightarrow \begin{pmatrix}
0 & 0 & 1 \\
1 & 0 & 0 \\
0 & 1 & 0 \\
\end{pmatrix}
\begin{pmatrix} 0 \\ 1 \\ 0 \\ \end{pmatrix}
=
\begin{pmatrix} 0 \\ 0 \\ 1 \\ \end{pmatrix} = \ket{3}
$$
It is apparent that state $\ket{2}$ was translated into $\ket{3}$ as advertised. The conjugate hermitian of $\hat{D}$ translates states in the opposite direction as evident by the translation of $\ket{2}$ into $\ket{1}$
$$\hat{D}^\dagger\ket{2} \rightarrow \begin{pmatrix}
0 & 1 & 0 \\
0 & 0 & 1 \\
1 & 0 & 0 \\
\end{pmatrix}
\begin{pmatrix} 0 \\ 1 \\ 0 \\ \end{pmatrix}
=
\begin{pmatrix} 1 \\ 0 \\ 0 \\ \end{pmatrix} = \ket{1}
$$
In general $\hat{D}^\dagger\ket{x} = \ket{x-1}$ which means that $\hat{D}\hat{D}^\dagger = \hat{I}$. The translation operator is [[Unitary Matrix]]. Translation can be made any number of times by letting $\hat{D}$ act on $\ket{x}$ accordingly
$$ \hat{D}^n \ket{x} = \hat{D}^{n-1} \ket{x+1} = \ ... \ =\ket{x+n} $$
Where $n\in \mathbb{N}$ is of $mod(N)$ which is defined as $\frac{n}{N} = Z\frac{mod(N)}{N}$. This is the [[Representation Theory|group property]] of the translation group

## Algebraic Characterization of Translations
$\hat{D}$ and $\hat{x}$ do not commute, their commutation relation goes as follows
$$ \begin{align*}
\hat{x}\hat{D}\ket{x} &= \hat{x}\ket{x+a} \\
&=  (x+a)\ket{x+a} \\
&=  (x+a)\hat{D}\ket{x} \\
&= \hat{D}(x+a)\ket{x} \\
&= \hat{D}(\hat{x}+a)\ket{x} \\
&\Downarrow\\
(\hat{x}\hat{D}-\hat{D}\hat{x})\ket{x} &= a \hat{D} \ket{x}\\
[\hat{x}, \hat{D}]  &= a \hat{D}
\end{align*} $$
the last relation is a general one that implies that an operator $\hat{D}$ translates states of $\hat{x}$ by $a$. 

## Infinitesimal Translations
$$ \hat{D}(\epsilon)\ket{x} = \ket{x + \epsilon} \tag{1} $$
Taking the first order Taylor expansion for and infinitesimal translation
$$ \hat{D}(\epsilon) = \left( D(0) + \epsilon 
\left. \frac{d\hat{D}(x)}{dx}\right|_{x=0} + O(\epsilon^2) \  
\right) \approx \hat{I}+\epsilon\hat{G} $$
Due to the fact that the translation operator is unitary
$$\hat{I} = \hat{D}\hat{D}^{\dagger} = \left( \hat{I}+\epsilon\hat{G}\right)\left( \hat{I}+\epsilon\hat{G}^{\dagger}\right) = \hat{I} + \epsilon(\hat{G} + \hat{G}^{\dagger}) + O(\epsilon^2)$$
We arrive at the understanding that $\hat{G}$ has to be anti-hermitian $( \hat{G}^{\dagger}\stackrel{!}{=}-\hat{G})$ . And so we redefine $\hat{G}$ in order to express the translation operator in terms of a hermitian operator $\hat{p}$ instead
$$ \hat{p} \equiv i\hat{G}$$
Finally we're left with
$$ \hat{D}(\epsilon) = \hat{I} - i\epsilon\hat{p} $$
Say we wanted to translate $\ket{x}$ a distance $a$. Instead of making one translation of length $a$ we could take $N$ translations of length $\frac{a}{N}$ by invoking the group property
$$
\hat{D}(a) = \left[\hat{D}\left(\frac{a}{N}\right)  \right]^{N} \Rightarrow \lim\limits_{\small N\to \infty}
\left[ \hat{I} - i \frac{a}{N} \hat{p} \right]^N = e^{-ia\hat{p}}
$$
and so the new definition for the translation operator in terms of what we call _momentum operator_ 
$$\boxed{\begin{align*} \\
\quad\hat{D}(a) = e^{-ia\hat{p}}\quad 
\\ \\\end{align*}} $$

# Momentum Operator
By invoking infinitesimal translations we discovered and redefined a new hermitian operator $\hat{p}$ which we call the _momentum operator_. It is the **generator** of translations in position states.

## Momentum States
Momentum states, $\ket{k}$, are defined to be the eigenstates of the momentum operator as follows 
$$ \hat{p}\ket{k} \equiv k\ket{k} $$
They can also be thought of as defined to be the states that diagonalize $\hat{D}$
$$
\begin{align*}
\hat{D}(a)\ket{k} &= e^{-ia\hat{p}}\ket{k} \\
&= \sum_{n=0}^\infty\frac{(-ia)^n}{n!}\hat{p}^n\ket{k} \\
&=  \sum_{n=0}^\infty\frac{(-ia)^n}{n!}k^n\ket{k} \\
&=  e^{-iak}\ket{k}\\ \\
&\Rightarrow \hat{D}(a)\ket{k} = e^{-iak}\ket{k}
\end{align*} 
$$

## Uncertainty Relation
Using the algebraic depiction of the translation operator, in the limit of infinitesimal translation we have
$$\begin{align*}
[\hat{x},\hat{D}] &= a\hat{D} \\
\Rightarrow [\hat{x}, \hat{\mathbb{1}} - i \epsilon \hat{p} ] &= \epsilon(\hat{\mathbb{1}} - i \epsilon \hat{p})\\
\Rightarrow \cancelto{}{[x, \hat{\mathbb{1}}]} - i \epsilon[\hat{x},\hat{p}] &= \epsilon- \cancelto{}{i \epsilon^{2}\hat{p}} \\
\Rightarrow  [\hat{x},\hat{p} ]&=i 
\end{align*}$$
the uncertainty relation between the two canonical position and momentum operators.
An uncertainty relation between two non-commuting operators also means that one generates translations in the other and vice versa.

## Momentum Operator in Position Basis
The operation of an operator $D$ in function space is given in terms of its operation on the abstract state space
$$\begin{align*}
\psi(x+ \epsilon) &= \braket{ x+ \epsilon | \psi  }\\
&= \braket{  x | D^{\dagger}(\epsilon) | \psi  }\\
&=  \braket{  x | I + i \epsilon \hat{p} | \psi  }\\
&= \braket{ x | \psi }  + i \epsilon \braket{ x |\hat{p}|\psi  } \\
&= \psi(x) + i \epsilon \hat{p} \ \psi(x)
\end{align*}$$
on the other hand, the Taylor expansion of the translated wave function is
$$\psi(x+ \epsilon) = \psi(x) + \epsilon \frac{d \psi}{dx} $$
Equating the two sides, we get the action of $\hat{p}$ in position basis
$$\hat{p} \psi(x) = -i \frac{d}{dx} \psi(x)$$
___
So far we have defined the momentum operator as the generator of translation in position space. We have defined the momentum states to be the eigenstates of the momentum operator with corresponding momentum eigenvalues. But we have yet to establish a connection between position states and momentum states. We can begin by finding the representation of the momentum states in the position space.
$$ \braket{x|k} \equiv \psi^k(x) $$
on the one hand
$$\braket{x|\hat{p}|k} = k\braket{x|k} = k\psi^k (x) \tag{6}$$
on the other hand, using (3) and the differential form of the momentum operator we also have
$$\braket{x|\hat{p}|k} = \hat{p}\braket{x|k} = -i\frac{d}{dx}\psi^k (x) \tag{7}$$
equating $(7)$ & $(8)$ we get the following differential equation
$$-i\frac{d}{dx}\psi^k (x) = k\psi^k (x) $$
whose solution is
$$ \psi^k(x) = c(k)e^{ikx} \tag{8} $$
The nature of $c(k)$ depends on normalization conditions
$$ \delta(k-k') = \braket{k|k'} = \int \braket{k|x}\braket{x|k'}dx = $$
$$ =c^*(k)c(k')\int e^{i(k-k')x}dx = 2\pi c^*(k)c(k')\delta(k-k')  $$
and so
$$
c(k) = \frac{1}{\sqrt{2\pi}} \tag{9}
$$
finally the representation of $\ket{k}$ in x basis is given by $$\braket{x|k} = \psi^k(x) = \frac{1}{\sqrt{2\pi}} e^{ikx} $$equivalently$$ \braket{k|x} = \psi^x(k) = \frac{1}{\sqrt{2\pi}} e^{-ikx} $$
Since we're dealing with finite spaces of size, say, $L$.
And since we demand periodic spatial boundary conditions
$$\psi^k(0) = \psi^k(L) \longrightarrow e^{i2\pi n} = e^{ikL}$$
the permitted values of momentum eigenstates are 
$$k_n = \frac{2\pi}{L}n$$

# Change of Basis
We have shown the connection between position and momentum states, now we want to be able to represent an arbitrary state $\ket{\psi}$ in momentum basis
$$\psi(k)\equiv\braket{k|\psi} = \int dx \braket{k|x}\braket{x|\psi}$$
using the derived representation of  for $\braket{k|x}$
$$ \psi(k) = \frac{1}{\sqrt{2\pi}} \int  dx \ \psi(x)e^{-ikx} $$
which is the [[Fourier Transform]] of $\psi(x)$. The transformation from momentum to position basis is therefore the inverse Fourier transform given by
$$ \psi(x) = \frac{1}{\sqrt{2\pi}} \int  dk \ \psi(k)e^{ikx} $$

# Continuum
We consider the case of $N$ sites over distance $L$ in the limiting case of $\Delta x\equiv\frac{L}{N}$ as $N\rightarrow\infty$. The following is a representation of a state $\ket{\psi}$ in the position basis. A series of projections on the position basis
$$\ket{\psi} = \frac{1}{N}\sum_i \ket{x_i}\braket{x_i|\psi} =
\frac{1}{N}\sum_i \psi_i\ket{x_i}
$$
as we transition to an infinite basis with separation $\Delta x$ 
- We switch the convention of $\ket{x_i}\rightarrow\sqrt{\Delta x} \ \ket{x}$ 
- We write $\psi_i \rightarrow\sqrt{\Delta x} \ \psi(x_i)$ which will later become the continuous version of the coefficients. 
- The change of convention introduces a $\Delta x$ into the summation and presents a Riemann sum which will become an integral in the limit of $N\rightarrow\infty$ which corresponds to $\Delta x \rightarrow0$ 
$$
\left(\sum_i \Delta x \ \psi(x_i)\right)\ket{x_i}
\xrightarrow{\Delta x \rightarrow0}\int_L dx \ \psi(x) \ket{x} = \int_L dx \ \ket{x}\braket{x|\psi(x)}
$$

By the change of convention in the continuous states we have 
$$\ket{x} \longrightarrow \frac{1}{\sqrt{\Delta x}}\ket{x_i}$$
$$
\braket{x'|x} = \frac{1}{\Delta x}\braket{x_i|x_j} = \frac{1}{\Delta x}\delta_{ij}
$$
Since $N\rightarrow\infty$ and simultaneously $\Delta x \rightarrow0$, the $\delta_{ij}$ becomes a kernel with infinite entries, at the same time that the scaling factor grows to infinity, this is a Dirac [[Delta Function]]
$$ \braket{x|x'} \equiv \delta(x-x')  $$