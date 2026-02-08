#QM2 #quantum #mechanics
#perturbation #approximation

In the case of a small time depended perturbation, the hamiltonian can be written as a sum of the unperturbed hamiltonian and the time dependent term as follows
$$\mathcal{H(t)}=\mathcal{H}_{0}+V(t)$$
The infinitesimal time evolution of the system, $dt_{n}$, is given 
$$\begin{align*}
U(t_{n}) &= \exp{[-idt_{n}\mathcal{H}(t_{n})]}\\
& = {\exp{[-idt_{n}\mathcal{H}_{0}}]}\Big[1-dt_{n}V(t_{n})+ \mathcal{O}({dt_{n}}^{2}) \Big]\\
& \approx U_{0}(t_{n})\Big(1-dt_{n}V(t_{n})\Big) \tag{1}
\end{align*}$$
Using the [[Groups|group property]] of the [[Time Evolution|evolution operator]], the evolution of the system for time $t_{0}$ to time $t$ will be given by the following
$$ \begin{align*}
U(t,t_{0})&= \prod\limits_{j=0}^{N}U(t_{j})\\
&\approx\prod\limits_{j=0}^{N} U_{0}(t_{j})\Big(1-dt_{j}V(t_{j})\Big)\\

& =U_{0}(t_{0},t) + U_{1}(t_{0},t) + ... \tag{2}
\end{align*} $$
Where the zeroth order is the free time evolution with $\mathcal{H}_{0}$ , and the first order is the multiplication containing only one factor of $dt_{j}$. The second order will contain two such factors  and so on
$$U_{1}(t_{0},t)= -i\int\limits_{t_{0}}^{t}U_{0}(t_{0},t')V(t')U_{0}(t',t)dt' \tag{3}$$
# Transition Probabilities
We work in the $\mathcal{H_{0}}$ basis, and therefore $U_{0}$ is diagonal
$$\begin{align*}
\braket{n|U|m} &= \braket{n|U_{0}|m}+\braket{n|U_{1}|m}+\dots\\\\
&=U_{0} \ \delta_{n,m} + \braket{n|U_{1}|m}+\dots
\end{align*}$$
We are interested in finding the coupling of different energy states of $\mathcal{H}_{0}$ due to the perturbation, so for $n\neq m$ we have
$$\begin{align*}
\braket{n|U_{1}(t)|m} &= -i\int\limits_{t_{0}}^{t}dt' \ {\large e^{-iE_{n}(t'-t_{0})}} \braket{n|V(t')|m} {\large e^{-iE_{m}(t-t')}}\\
& = -ie^{i\varphi}\int\limits_{t_{0}}^{t}dt' \ {\large e^{it'(E_{n}-E_{m})}}\braket{n|V(t')|m}\\
&\equiv -ie^{i\varphi}W_{nm}\int\limits_{t_{0}}^{t}dt' \ f(t'){\large e^{i\omega_{mn} t'}}
\end{align*}$$
Where $\omega$ is the __transition frequency__, and the time dependent perturbation has been taken to be the typical case of $V_{nm}(t)=W_{nm}f(t)$. We can write the probability of transitioning to a state $\ket{m}$ as follows
$$P(m|n)=|\braket{m|U_{1}(t)|n}|^{2} = |W_{nm}|^{2}\left|\int\limits_{t_{0}}^{t}dt' \ f(t'){\large e^{i\omega t'}}\right|^{2} = |W_{nm} \ \tilde{f}(\omega)|^{2}$$
Where $\tilde{f}(\omega)$ is the [[Fourier Transform]] of the the time dependent part of the perturbation $f(t)$. Two things are required for a transition $n\to m$ to occur
1. $W_{nm}\neq 0$
2. $f(t)$ has to contain the appropriate frequency so that the transform does not vanish
$$\Large\boxed{P(m|n) = \bigg|W_{nm} \ \mathcal{F\Big(f(t)\Big)}\bigg|^{2}}$$

For a time independent perturbation, the transition probability is just $|W_{nm}\mathcal{F}(1)|$

# Constant Pulse
A constant pulse between $t'\in(0,t)$ will have transition probability between states $n$ and $m$ of
$$\begin{align*}
P(m|n) = |W_{nm}|^{2}\left|\int\limits_{0}^{t}dt' \ {\large e^{i\omega_{nm} t'}}\right|^{2} &= \left|W_{nm} \frac{1-e^{i\omega_{nm} t}}{\omega_{nm}} \right|^{2}\\
& = |W_{nm}|^{2}  \frac{4\sin^{2}{\left(\frac{\omega_{nm} t}{2}\right)}}{(\omega_{nm})^{2}} 
\end{align*}$$
Where the perturbative treatment holds for $|W_{nm}|<<|\omega_{nm}|$. We want to analyze this transition probability a little further. In the case where $\omega_{nm}= E_{n}-E_{m}\neq 0$ it can be seen that transitions to increasingly different energy values is less and less favorable

> [!NOTE]- Desmos
> <iframe src="https://www.desmos.com/calculator/2ufcvgy9sb?embed" width="500" height="500" style="border: 1px solid #ccc" frameborder=0></iframe>

# Periodic Pulse (EM wave)
For a periodic pulse with frequency $\Omega$ given by $f(t')=e^{i\Omega t'}$ one has
$$P(m|n) = |W_{nm}|^{2}\left|\int\limits_{0}^{t}dt' \ {\large e^{i(\omega - \Omega) t'}}\right|^{2} = \left|W_{nm} \frac{1-e^{i\nu t}}{\nu} \right|^{2}$$
Where $\nu\equiv\omega- \Omega$ is the __detuning frequency__