
## Time dependent Hamiltonian
Consider a time dependent Hamiltonian in which the time dependent part is relatively negligible, so we can write it as
$$H = H_{0} + V(t)$$
Where it is convenient to work in the basis of $H_{0}$ eigenstates $\ket{n}$. In the absence of perturbation an arbitrary initial state, expanded in the eigen-basis of $H_{0}$ is $$\ket{\psi(0)}= \sum\limits_{n}\gamma_{n}\ket{n}$$ and it evolves according to $H_{0}$ as  $$\ket{\psi(t)} = \sum\limits_{n}\gamma_{n}e^{-i\omega_{n}t }\ket{n}  $$where $\omega_{n}=  E_{n} / \hbar$. Given such initial state, finding the system at a state $\ket{\varphi}$ after some time $t$ is calculated by taking
$$P_{t}(\varphi|\psi_{0}) = |\braket{\varphi | \psi(0) }|^{2} $$
$$\begin{align*}
H&=H_{0}+H_{1}(t)\\
H_{0}\ket{n} &=E_{n}\ket{n} 
\end{align*}$$
$$\braket{ n |H_{1}|m  }\ll|E_{n}-E_{m}| $$
$$H = H_{0} - \mathbf{D}\cdot \mathbf{E}(t)$$
Where $H_{0}$ is the hydrogen atom hamiltonian with eigenstates $\ket{nlm}$, and $\mathbf{D}=q\hat{\mathbf{r}}$. $q$ is the charge and $\hat{\mathbf{r}}$ is the radius vector from the nucleus of the atoms to the valence electron. $\mathbf{E}(t)=\mathbf{E_{0}}\cos(\omega t +\varphi)$ is the **classical** electromagnetic wave incident on the atom.

## Perturbation Expansion
___
We look at a hamiltonian perturbed by a time dependent potential $V(t)$
$$H = H_{0} + V(t) \to H_{0} + \lambda V'(t)$$
where $|V'|\approx |H_{0}|$ and $\lambda \ll 1$. In the case of atoms light interaction, $\lambda$ is the order of magnitude of the wave amplitude.
$$i\hbar \frac{d}{dt}\ket{\psi(t)} = \big[H_{0}+\lambda V'(t)\big]\ket{\psi(t)}$$
We project $\bra{k}$ state on the Schrodinger equation above
$$i\hbar \frac{d}{dt} \braket{ k | \psi(t) } =\braket{ k | H_{0}|\psi(t) } +\lambda \braket{ k | V'(t)|\psi(t) } $$
We expand $\ket{\psi(t)}$ in the basis of $H_{0}$ eigenstates $\ket{n}$ $$\ket{\psi(t)} = \sum\limits_{n}\gamma_{n}(t)e^{-i\omega_{n} t}\ket{n} $$and plug it into the projected Schrodinger equation above
$$i\hbar \frac{d}{dt} \Big( \gamma_{k}(t)e^{-i \omega_{k}t}\Big)=E_{k}\gamma_{k}(t)e^{-i\omega_{k} t} + \lambda\sum\limits_{n}\braket{ k |V'(t)|n }\gamma_{n}(t)e^{-i\omega_{n}t} $$
by differentiating the left side, cancelling matching terms and simplifying we get
$$i\hbar \frac{d {\gamma_{k}\small(t)}}{dt}  = \lambda \sum\limits_{n}V'_{nm}e^{it(\omega_{k}-\omega_{n})}{\gamma_{n}\small(t)} \tag{1}$$
This system of differential equations for $\gamma$ can be simplified by expanding it with respect to $\lambda$.
$$\gamma_{k} = \gamma_{k}^{\small(0)} + \lambda \gamma_{k}^{\small(1)}+\lambda^{2} \gamma_{k}^{\small(2)}+\dots$$
with $\gamma^{\small (r)}$ being the $r^{th}$ correction. Plugging the perturbative expansion into equation $(1)$, and separating the terms with **equal power of $\lambda$** we get that for $\lambda=r$ the dependance becomes 
$$i\hbar \frac{d \gamma_{k}^{\small (r)}}{dt} = \sum\limits_{n}V'_{nk} e^{it\Omega_{nk}}\gamma_{n}^{\small(r-1)}$$
which can be solved iteratively from $r=1$ (for which the coefficients are constant and are provided by the initial state) up. For a small enough $\lambda$ the higher order corrections can be dropped without loss of physical significance.

## Transition Probability
___
Assuming we begin with the system prepared at an eigenstate $\ket{i}$ of $H_{0}$ so that $\gamma_{k}(t_{0})=\delta_{ki}$. We begin with the $0^{th}$ order.
$$i\hbar \frac{d \gamma^{(0)}_{k}}{dt} = 0 \to\frac{1}{i\hbar}\Big[\gamma_{k}^{(0)}(t)-\gamma_{k}^{(0)}(t_{0})\Big]=0 $$
so we get the zeroth correction
$$\gamma^{(0)}_{k}(t)=\delta_{ki}$$
Plugging into the first correction 
$$\frac{d \gamma_{k}^{(1)}}{dt} = \sum\limits_{n}V'_{nk} e^{it\Omega_{nk}}\delta_{ni}$$
Dropping all irrelevant terms in the sum and integrating 
$$\gamma_{k}^{(1)} (t) = \frac{1}{i\hbar}\int\limits_{t_{0}}^{t}\,dt'\, V'_{ik} {\large e^{it'\Omega_{ik}}}$$
The probability amplitude to the first order is
$$\begin{align*}
P_{t}(k|i)&= |\gamma_{k}^{(0)}(t)+\lambda \gamma_{k}^{(1)}|^{2} \\ \\
&= \frac{1}{\hbar^{2}}\left|\int\limits_{t_{0}}^{t}\,dt'\, V_{ik} {\large e^{it'\Omega_{ik}}} \right|^{2}  \tag{2}
\end{align*}$$
Where we used $\lambda V' = V$. The result in equation $(2)$ is otherwise known as the transition probability from an initial eigenstate $\ket{i}$ to a final eigenstate $\ket{k}$ by the coupling of the perturbation.

### Collisional Process
___
We make the simplification that all perturbation elements have equal time dependence so that we can write
$$V(t) = Wf(t)$$
$$P_{(k|i)}(t) = \frac{W_{ki}^{2}}{\hbar^{2}}\left| \int\limits_{-\infty}^{\infty}\,dt'\, f(t) {\large e^{it'\Omega_{ik}}}  \right|^{2} $$
The integration essentially becomes a [[Fourier Transform]]
$$P_{(k|i)}(t) = \frac{2\pi}{\hbar}|W_{ki}|^2\left| \tilde{f}(\omega_{k}-\omega_{i}) \right|^{2} $$
![[../9. Misc/attachments/Pasted image 20230318220946.png|center]]

$$\Delta E \Delta t \geq \hbar \Rightarrow \Omega \geq \frac{1}{\Delta t}$$