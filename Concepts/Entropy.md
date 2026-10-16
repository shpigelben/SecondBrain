---
type: concept
discipline:
  - physics
field:
  - thermodynamics-statistical-mechanics
---

Entropy can be thought of a measure of disorder. It can also be used to retrospectively identify whether or not a system underwent a reversible process by observing whether its entropy remained the same or increased during the process.
___
# Thermodynamic Entropy

[[Clausius Theorem]], gives us the following inequality, another statement of the [[Second Law of Thermodynamics]]
$$ \oint\limits_\mathcal{C} \frac{\delta Q}{T} \leq 0 \tag{1}$$
In the case of [[Thermodynamic Equilibrium]] and reversible processes the equality holds, and the integrand becomes __path independent__. It can therefore be considered a [[State Function|state variable]] that is famously known as entropy
$$ dS \equiv \frac{\delta Q}{T} \tag{2} $$
When a system undergoes a [[Thermodynamic Processes|reversible process]] the following holds
$$ S(B) - S(A) = \int\limits_{A}^{B} \frac{\delta Q}{T} \tag{3}$$
One can arrive from A to B following an irreversible path instead, and if the system is isolated and the net heat is zero
$$ S(B) - S(A) \geq \int\limits_{A}^{B} \frac{\delta Q}{T} = 0 \Longrightarrow S(B)\geq S(A) \tag{4} $$
For a process that takes place in an isolated system, entropy can be either stay the same or _increase_ ! __Entropy cannot decrease__ this statement of the second law is relevant to processes that happen internally - a transition from a constraint equilibrium to an unconstrained equilibrium

___
It is Important to note that expression $(2)$ establishes entropy and temperature as [[Conjugate Variables|conjugate variables]], where entropy is [[Intensive & Extensive Properties| extensive and temperature is intensive]].
This allows one to write the [[First Law of Thermodynamics]] as follows 
$$\large\boxed{\begin{align*} \\ \quad
dU = \delta W + \delta Q = \sum\limits_{i}^{n}\mathcal{J}_{i}\chi_{i} + TdS \quad
\\\ \end{align*}}$$
Two important relations arise from this form of the first law, first is the definition of the thermodynamic temperature as the partial derivative of the entropy with respect to internal energy. And the second is the generalized force as a partial of the entropy with respect to generalized displacement. 
$$ \large\boxed{
\frac{1}{T} = \frac{\partial S}{\partial U}} \quad \text{\&} \quad  \boxed{
\frac{\mathcal{J}_{i}}{T} = \frac{\partial S}{\partial X_{i}}} $$
___
## Spontaneous Change in Entropy

A change in entropy can be attributed to either a spontaneous process (removal of internal constraints) or induced process during heat is exchanged between the system and its surrounding
$$ dS = \frac{{\delta Q}}{T} + dS_{sp} $$
For an isolated system $\delta Q=0$ therefore, the induced term vanishes.  Since a spontaneous process is necessarily not reversible, by the second law its entropy change will be positive, so generally $\delta S_{sp}\geq 0$ and consequently, for and isolated system, the differential $dS\geq 0$

___
# Statistical Entropy

Let an isolated system be in a certain macrostate $\xi=(U,X,N)$, and let $\Gamma$ be the number of corresponding microstates. The entropy of the system is given by
$$S(\xi)=\ln{\Gamma(\xi)}$$
- __positivity__  $\Gamma\geq1 \Rightarrow S\geq 0$ (a possible macrostate of the system has at least one corresponding microstate)
- __Additivity__ if a macrostate is comprised of two macrostates of two subsystems with $\Gamma_{A}$ and $\Gamma_B$ respectively, $\Gamma_{A+B}=\Gamma_{A}\Gamma_{B}$. It follows that entropy is additive
$$\begin{align*}
S_{A+B}&=\ln{(\Gamma_{A+B})} \\ &=\ln{(\Gamma_{A}\Gamma_{B})} \\
&=\ln{(\Gamma_{A})}+\ln{(\Gamma_{B})} = S_{A}+S_{B}
\end{align*}$$
- __Maximum Entropy__
Maximizing the probability of two subsystems A and B that comprise an isolated system
$$ \mathcal{P}_{AB} = \frac{\Gamma_{A}\Gamma_{B}}{\Gamma}$$
$$ \begin{align*}
\max{(\mathcal{P}_{AB})} &\leadsto \max(\Gamma_{A}\Gamma_{B})\\
&\leadsto \max(\ln(\Gamma_{A}\Gamma_{B}))\\
&\leadsto\max(S_A+S_B)\leadsto\max(S)
\end{align*} $$
- __Definition of Temperature__ 