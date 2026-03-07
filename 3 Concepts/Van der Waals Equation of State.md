---
type: concept
discipline:
  - physics
field:
  - thermodynamics-statistical-mechanics
  - phase-transitions
---

In the attempt of providing a more accurate model of gasses and liquids that are non-ideal and interacting we stumble upon the obstacle of the [[many body]] problem. In order to overcome this hurdle, we invoke the tool of [[Mean Field Approximation]] which famously simplifies such puzzles. The mean field approximation will allow us to replace the interacting term in the [[hamiltonian]] of the system with a much friendlier effective potential.

# Finding The Effective Potential
How can we arrive at an expression for $V_{eff}(\mathbf{r})$ ? Firstly, we assume homogeneity of the substance $n=N/V$, together with the assumption of translational invariance of $U$ we arrive at the very simplified, but surprisingly accurate constant effective potential
$$\begin{align*}
\frac{1}{2}\sum\limits_{j=1}U(\mathbf{x}_{i}-\mathbf{x}_{j}) &\to \frac{1}{2}\int \mathbf{dx}n(\mathbf{x},\{\mathbf{x}_i\})U(\mathbf{x}_{i}-\mathbf{x}_{j}) \\
&\approx \frac{1}{2}\frac{N}{V}\int d\mathbf{r}U(\mathbf{r}) \equiv V_{eff}
\end{align*} $$
A rough inclusion of repulsive interaction that prevents the collapse of the molecules into themselves leads us to write the following
$$ V_{eff}(\mathbf{r})= \begin{cases}
u_{eff} =\displaystyle -\frac{N}{2V} \underbrace{\int d \mathbf{y}U(\mathbf{y})}_{u_{0}}  & |r|>r_{0} 
\\ \displaystyle \infty &|r|\leq r_{0}
\end{cases} \tag{4} $$
where $r_{0}$ is the effective radius of the particles. Plugging the new $V_{eff}$ in $(4)$ into a single particle state of the partition function in $(3)$ gives
$$ Z=\frac{1}{N! {\lambda_{T}}^{3N}}(V-V_{ex})^{N} \large e^{\frac{\beta u_{0}N^{2}}{V}} $$
Where $V_{ex}$ is the __excluded__ volume that the particles occupy and which vanishes in the spatial integration. $V_{ex}=NV_{particle}=N\left(\frac{4}{3}\pi {r_{0}}^{3}\right)$. By making standard substitutions
$$
\boxed{u_{0}=\frac{a}{{N_{A}}^{2}}} \quad
\boxed{V_{particle} = \frac{b}{N_{A}}} \quad
\boxed{n = \frac{N}{N_{A}}}
$$
we can write the partition function in a different form as follows (where $N_A$ is __Avogadro's number__)
$$ \begin{align*}
Z&=\frac{1}{N! {\lambda_{T}}^{3N}}\left(\frac{{V-bn}}{\lambda_{T}^{3}}\right)^{N} \large e^{\frac{\beta an^{2}}{V}}\\
F &= -\frac{1}{\beta}\ln(Z) = -\frac{N}{\beta}\ln\left(\frac{V-bn}{{\lambda_{T}}^{3}}\right) - \frac{an^{2}}{V}
\end{align*} $$
Now that we have the partition function and the free energy which contain the entire information of the system, we can arrive at an equation of state which is otherwise known as __Van Der Waals equation of state__
$$\large\boxed{\begin{align*}
&P = -\left(\frac{\partial F}{\partial V}\right)_{T} = \frac{nRT}{{V-bn}}- \frac{an^{2}}{V^{2}} \\
&\left(P + \frac{an^{2}}{V^{2}}\right)(V-bn)=nRT
\end{align*}}$$
Note that for $a=b=0$ - which corresponds to the cancellation of the attractive and repulsive forces - the equation reduces to that of an [ideal gas](Classical%20Ideal%20Gas.md).

# Historical Digression
Van Der Waals managed to show two things with his equation
1. Since the VW equation relates to both gas and liquid phases he managed to show that they are the same substance. Moreover, above a certain critical temperature $T_{c}$  (which determines the critical point) there is no differentiation between the two phases
2. Molecules are real and their number could be calculated as well as the strength of their interaction

# Failure in the Coexistence Region
When plotting the VW equation of state, the first problem that appears, is the existence of a positive slope since it corresponds to a negative [[Response Function|compressibility]].
$$\kappa_{\small T} \equiv -\frac{1}{V}\left(\frac{dP}{dV}\right)_{T<T_{c}} < 0$$
It is due to the [[Coexistence of Phases in Pure Substances|coexistence of gas and liquid]] in that region that our assumption of homogeneity breaks and leads to this physical inconsistency
![[../4 Misc/Attachments/VW spinodal.png|400]]
In the [[Liquid-Gas Phase Transition]] page, we discuss more deeply about how one might overcome this problem of the VW model and arrive at a better description of the substance in this region of phase coexistence

# Equation of Corresponding States