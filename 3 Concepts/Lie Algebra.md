---
type: concept
discipline:
  - math
field:
  - group-theory
  - linear-algebra
---

The Lie algebra of a [[Lie Group]] is built upon the tangent space to the group's manifold at the identity $I=(0,0,...,0)$. One can span that tangent space by taking infinitesimally small steps in each direction and take the first order of the Taylor approximation U of the [[Realization of a Group| realization]] of the group $U$

$$U(\delta\tau_{1},0,...,0) = 1 - i\delta\tau_{1}\hat{G}_{1} + \mathcal{O}(\delta\tau^2)$$

Where the $i$ factor serves to allow for a [[Hermitian Matrix|hermitian]] operator $\hat{G}$, also known as the _generator_ of the group.

We say that taking a small $\frac{\tau_{j}}{N}$ step in the $j^{th}$ direction $N$ times, is just equivalent to taking a step $\tau$, this translates to

$$U(\tau_{j})= \left(U\left(\frac{\tau_{j}}{N}\right)\right)^{N} \approx 
\left(1 - i \frac{\tau_{j}}{N} \hat{G}_{j} +\cancelto{0}{\mathcal{O}(\delta\tau^{2})}\right)^{N} \xrightarrow[]{N\rightarrow\infty} e^{-i \hat{G}_{j} \tau_{j}}$$

The right arrow indicates the usage of the [[Exponent | definition of the exponent]]. So the generator is used to generate _large_ translations.

$$\boxed{ \begin{align*} \\
\quad U(\tau_{j}) = \large e^{-i \tau_{j} \  \hat{G}_{j}} \quad
\\\
\end{align*}} $$

This is the [[Exponential Map]] from the tangent space to the manifold.
___

Lie algebra is equipped with a binary operation called [[The Commutator]]. It is in general a _non-associative_ and _non-commutative_ algebra.

Two different generators $A$ and $B$ that do not commute satisfy

$$\large e^{A+B}\neq e^{A}e^{B}\neq e^{B}e^{A} \neq e^{B+A}$$

But the [[Lie Product]] states for infinitesimally small generated transformations the relation above does commute 

$$\large e^{\epsilon(B+A)} = e^{\epsilon(A+B)}$$

and even more generally

$$\large e^{\epsilon(\alpha A+\beta B)} = e^{\epsilon\alpha A}e^{\epsilon\beta B} \tag{1} $$

equation $(1)$ implies that an arbitrary generator can be represented as a linear combination of a chosen generator basis therefore,

$$U(\tau) = \exp{\left(i\tau\sum\limits_{j}\alpha_{j}G_{j} \right)}$$


So one can create a general transformation using two non commuting generators in infinitesimally small steps

![[../4 Misc/Attachments/Generators.png]]

__in the sum (in the picture) there should be a power of $k$ at the left term in the product instead of a power of $N$__

___

In general the multiplication of two generators does not yield another generator, but it can be shown that a commutator of two generators (since the lie algebra is closed under its commutator operation) yields another generator. combining that with the consequence of $(1)$ one can write

$$\boxed{
\begin{align*} \\ \quad

[G_{\mu} \ , \ G_{\nu}] = i \sum\limits_{\lambda} {c^{\lambda}}_{\mu\nu}G_{\lambda} 

\quad \\\ \end{align*}}$$

