---
type: concept
discipline:
  - physics
field:
  - thermodynamics-statistical-mechanics
---

Consider a thermodynamic system with [[Entropy]] $S$ in [[Thermodynamic Equilibrium]].
We represent the entropy as a function of $X_i$ of the extensive parameters of the system $S(X_i)$, and assume two things :

1. From the [[Second Law of Thermodynamics | second law]] we assume that entropy is maximal at equilibrium, therefore $S_{eq} -S \equiv \delta S >0$.

2. Entropy is [[Intensive & Extensive Properties |extensive]], therefore $S(\lambda X_{i})= \lambda S(X_{i})$, and as a consequence, entropy is also additive $S(\lambda X_{i}) + S({\small (1-\lambda)}X_{i}) = S(X_i)\quad\forall\lambda\in(0,1)$

==might only be true for closed system where a constraint exists, so the change considered is a spontaneous one==
# Small Deviation from Equilibrium
We divide the system into two subsystems 1 and 2. $S(X) = S(X_{1}+X_{2})= S(X_{1})+S(X_{2})$ and introduce a variation
$$\begin{align*}
& X_{1}\longmapsto X_{1}+\delta X\\
& X_{2}\longmapsto X_{2}-\delta X
\end{align*}$$
Under the first assumption we expand the series for a small deviation
$$\small\begin{align*}
0<\delta S &= \bigg[S(X_{1})+ S(X_{2})\bigg] - \bigg[S(X_{1}+\delta X) + S(X_{2}-\delta X)\bigg] \\\\
&\approx
\bigg[S(X_{1})+ S(X_{2})\bigg] - 
\Bigg\{  \bigg[S(X_{1})+ S(X_{2})\bigg] +
\delta X^{i}\bigg[  
\frac{\partial S}{\partial X^{i}_{1}} - \frac{\partial S}{\partial X^{i}_{2}}\bigg] + 
\delta X^{i}\delta X^{j}\bigg[
\frac{\partial^2 S}{\partial X^{i}_{1}\partial X^{j}_{1}}
\frac{\partial^2 S}{\partial X^{i}_{2}\partial X^{j}_{2}}
\bigg] \Bigg\}\\\\
&= -\delta X^{i}\bigg[  
\frac{\partial S}{\partial X^{i}_{1}} - \frac{\partial S}{\partial X^{i}_{2}}\bigg] - 
\frac{1}{2}\delta X^{i}\delta X^{j}\bigg[
\frac{\partial^2 S}{\partial X^{i}_{1}\partial X^{j}_{1}}+
\frac{\partial^2 S}{\partial X^{i}_{2}\partial X^{j}_{2}}
\bigg]
\end{align*}$$

# Mutual Thermodynamic Equilibrium
For the composite system to be in internal thermodynamic equilibrium the two subsystems should be in mutual thermodynamic equilibrium. These two requirements are equivalent and demand that the coefficient of the first order vanishes, namely that
$$ \frac{\partial S}{\partial \mathcal{X}^{i}_{1}} = \frac{\partial S}{\partial \mathcal{X}^{i}_{2}} \tag{1} \quad \forall i $$
Lets consider a general thermodynamic system where $\mathcal{X} \longmapsto \{U,X,N\}$. equation $(1)$ implies the following
$$ \frac{\partial S}{\partial U_{1}} = \frac{\partial S}{\partial U_{2}} \ \Longrightarrow \  \frac{1}{T_{1}} = \frac{1}{T_{2}} \tag{1.1}$$
$$ \frac{\partial S}{\partial X_{1}} = \frac{\partial S}{\partial X_{2}} \ \Longrightarrow \  \frac{P_{1}}{T_{1}} = \frac{P_{2}}{T_{2}} \tag{1.2}$$
$$ \frac{\partial S}{\partial N_{1}} = \frac{\partial S}{\partial N_{2}} \ \Longrightarrow \  \frac{\mu_{1}}{T_{1}} = \frac{\mu_{2}}{T_{2}} \tag{1.3}$$
Where $(1.1)$ implies _thermal equilibrium_, equation $(1.2)$ implies _mechanical equilibrium_, and equation $(1.3)$ implies _diffusive equilibrium_ .

## Stability Conditions
We write variation between the subsystems in terms of the encompassing system. $X_{1}= \lambda X$ and $X_{2}=(1-\lambda)X$. Plugging these two into the result of the cumbersome derivation above using the fact that $S$ and $X^i$ are intensive and we get 
$$
0 < \delta S = -\delta X^{i} \frac{\partial S}{\partial X^{i}} -  \frac{\delta X^{i}\delta X^{j}}{2} \left(\frac{1}{\lambda} + \frac{1}{1-\lambda} \right) \frac{\partial^2 S}{\partial X^{i}\partial X^{j}}$$
For the entropy to be extremal the first derivative must vanish and so our first condition is 
$$ \boxed{ \begin{align*} \\ \quad
\frac{\partial S}{\partial X^{i}} = 0
\quad \\\ \end{align*}} \tag{1}
$$
And we're left with satisfying the inequality. Since the $\lambda$ expression is positive

$$
\boxed{ \begin{align*} \\ \quad
\frac{\partial^{2} S}{\partial X^{i}\partial X^{j}}<0
\quad\\\ \end{align*}} \tag{2}
$$
### Consequences of Stability Conditions
If we take $X^{i}$ and $X^j$ to be the internal energy of a system $U$ (an extensive quantity), by the result of $(2)$. 

$$
0>\frac{\partial^{2} S}{\partial U^{2}}= \frac{\partial }{\partial U}\left(\frac{1}{T}\right) = -\frac{1}{T^{2}}\frac{\partial T}{\partial U} = -\frac{1}{TC_{\small V}}
$$
Rearranging this, using the fact that $T>0$ we get
$$
C_{\small V} > 0 
$$
