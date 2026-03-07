---
type: concept
discipline:
  - physics
field:
  - quantum-mechanics
---

> [!NOTE] Introduction
> A system with a time dependent [[Hamiltonian Operator|hamiltonian]] of the form
$$\mathcal{H}(t)=\mathcal{H_{0}}+V(t)\tag{1}$$
where $\mathcal{H}_{0}$ is constant and $V(t)$ is small enough to be treated with [[Time Dependent Perturbation Theory|TDPT]]. For perturbations of the form $V(t) = W_{nm}f(t')$ the transition probability from a state $n$ to a state $m$ is given by
$$  \large\boxed{P_{nm}(t) = \Big|W_{nm} \ \mathcal{F}\big[f(t')\big]\Big|^{2}}\tag{2}$$

# Introduction
A system with a time dependent [hamiltonian](Hamiltonian Operator.md) of the form
$$\mathcal{H}(t)=\mathcal{H_{0}}+V(t)\tag{1}$$
where $\mathcal{H}_{0}$ is constant and $V(t)$ is small enough to be treated with [[Time Dependent Perturbation Theory|TDPT]]. For perturbations of the form $V(t) = W_{nm}f(t')$ the transition probability from a state $n$ to a state $m$ is given by
$$  \large\boxed{P_{nm}(t) = \Big|W_{nm} \ \mathcal{F}\big[f(t')\big]\Big|^{2}}\tag{2}$$

## Harmonic Perturbation
In the case of harmonic perturbation $V(t)\propto e^{i\Omega t}$ the transition probability is
$$P_{nm}(t) = \left| W_{nm} \int\limits_{0}^{t} {\large e^{i\nu t'}}dt' \right|^{2}\tag{3} = \left|W_{nm} \frac{1-e^{i\nu t}}{\nu} \right|^{2}$$
Where the __detuning__ $\nu=\omega-\Omega$ where $\omega\to\omega_{nm}$ is the transition frequency between the relevant energy states, and is the frequency of the Fourier transform in (2). The result of (3) can be written in a more illuminating way
$$ \begin{align*}
P_{nm}(t) &= |W_{nm}|^{2} \left| \frac{2(1-\cos{\nu t})}{\nu^{2}}  \right|\\
& = |W_{nm}|^{2} \left| \frac{4\sin^{2}{\left(\frac{\nu t}{2}\right)}}{\nu^{2}}  \right| \tag{4}\\
&= |W_{nm}|^{2} \ t^{2} \ \text{sinc}^{2}\left(\frac{\nu t}{2}\right) \tag{5}
\end{align*} $$
![[../4 Misc/Attachments/Fermi Golden Rule.png]]

> [!NOTE]- DESMOS
> <center><iframe src="https://www.desmos.com/calculator/hljgyblosz?embed" width="500" height="500" style="border: 1px solid " frameborder=0></iframe></center>

# Definition of a Delta function with a Sinc(x)
By normalizing the squared sinc appropriately we can get a finite area of one 
$$\int\limits_{\infty}^{\infty} \frac{d\nu}{2\pi}\text{sinc}^{2}\left(\frac{\nu}{2}\right)=1$$
In the limit of large $\lambda$ the sinc squared acts like a delta function that is centered around $\nu=0$ 
$$ \lim_{\lambda\to\infty}\frac{\lambda}{2\pi}\text{sinc}^{2}\left(\frac{\lambda\nu}{2}\right)\equiv {\large\delta}_{\frac{2\pi}{\lambda}}(\nu) $$
- Where the subscript $\frac{2\pi}{\lambda}$ represents for the width of the pick around $\nu=0$
- With this definition one can rewrite (4) in terms of the delta function $(\lambda\to t)$ as long as the following condition is met
$$ \nu << \frac{2\pi}{\lambda} \quad \longrightarrow \quad \lambda\nu \lt\lt 2\pi $$
Which neatly corresponds to the [[Uncertainty Principle|time-energy uncertainty relation]].
$$\boxed{P_{nm}(t)=|W_{nm}|^{2} \ 2\pi t \  {\large \delta}_{2\pi/t}(\nu)}\tag{6}$$
As time progresses, the width localizes around $\nu=0$
___
# FGR (Zwibach)
We wish to sum over all of the transition probabilities in the limit of $\Delta_{0}\to 0$
$$\sum\limits_{n\neq m}P(n|m)\longmapsto
\int P(n|m)dn = 
\int\limits_{E_{min}}^{E_{max}} P(n|m) \rho(E)dE$$
# Fermi Golden Rule
A system is found in energy state $n$ and has N other energy states available. The __bandwidth__ is $E_{max}-E_{min}=\Delta_{b}$, and we assume constant and equal __level spacing__, that is $E_{n+1}-E_{n}=\Delta_{0}$ such that the [[Density of States|density of states]] is $g(E)= \frac{1}{\Delta_{0}}$

We wish to sum over all of the transition probabilities in the limit of $\Delta_{0}\to 0$
$$\sum\limits_{n\neq m}P(n|m)\longmapsto \int\limits_{E_{min}}^{E_{max}} \frac{dE'}{\Delta_{0}} 2\pi t|W|^{2} {\large\delta}(E_{m}-E'-\Omega) = \frac{2 \pi}{\Delta_{0}}|W|^{2}\cdot t$$
Therefore the probability of transitioning to any of the other energy levels increases linearly in time, while the proportionality constant is what we call the transition rate $\Gamma$
$$\begin{align*}
&P(\text{transition}) = 2\pi g(E)|W|^{2}\cdot t\equiv \Gamma  t\\
&P(\text{survival})= 1-\Gamma t
\end{align*}$$
___
# Time Scales
We denote the following time scales
$$\begin{align*}
t_{\small\Gamma}= \frac{1}{\Gamma} &\to \text{Wigner Time}\\
t_{\small H}= \frac{1}{\Delta_{0}}&\to \text{Heisenberg Time}
\end{align*}$$
The relationship between the two time scales of the system dictates how it's transition probabilities evolve in time

# Rabi Oscillations (Small Perturbation)
When the Heisenberg time is smaller than the Wigner time we get Rabi oscillations for the transition/survival probability
$$ \begin{align*}
t_{\small H}<t_{\small\Gamma} &\Longrightarrow \frac{1}{\Delta_{0}} <\frac{1}{\Gamma}\leadsto \boxed{\Gamma<\Delta_{0}}\\
&\Longrightarrow \frac{1}{\Delta_{0}}< \frac{\Delta_{0}}{2\pi|W|^{2}} \leadsto \boxed{|W|<\frac{1}{2\pi}|\Delta_{0}|}
\end{align*}$$
The last boxed result is in fact the condition for the [[Perturbation Theory|time independent perturbation theory]]

# Wigner Decay (Large Perturbation)
