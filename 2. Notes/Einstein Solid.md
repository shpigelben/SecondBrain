#note #physics #condensed-matter #model 

Einstein treatment of the solid is a quantum mechanically inspired improvement on [[Boltzmann Solid|Boltzmann solid]]. It considers the solid as comprised of numerous non-interacting [[Quantum Harmonic Oscillator | QHOs]], all with frequency $\omega$. Unlike the Boltzmann solid, it manages to give a qualitative description of the behavior of [[Heat Capacity]] in lower temperatures, even though it fails at very low temperatures.

![center|500](../9.%20Misc/attachments/Pasted%20image%2020240603190003.png)
The derivation assumes the solid to be a [[Canonical Ensemble]]
$$ U = \hbar\omega \left(n_{\small B}{\small (T)} + \frac{1}{2}\right) $$
$$ n_{\small B}{\small (T)} = \frac{1}{e^{\beta\hbar\omega}-1} $$
$$ \boxed{\begin{align*} \\ \quad
C(\beta) = \left(\frac{\beta\hbar\omega}{n_{\small B}{\small (\beta)}}\right)^{2} e^{\beta\hbar\omega} \quad \\\
\end{align*}} $$
For a 3D oscillator with $N$ atoms, one gets Einstein's final result
$$\frac{C}{N} = 3 k_{\small B}T  \left( \frac{\beta \hbar\omega}{e^{\beta\hbar\omega}-1} \right)^{2}e^{\beta\hbar\omega} $$
In the high temperature limit $k_{\small B}T \gg \hbar \omega \to \quad \beta \hbar \omega \ll 1$ 

$$\beta \hbar \omega = \frac{\hbar \omega}{k_{\small B}T} \equiv x \longrightarrow \begin{cases}
k_{\small B}T\ll \hbar \omega \to x\gg 1  \\
k_{\small B}T\gg \hbar \omega \to x \ll 1
\end{cases}$$
For very temperatures $(x \ll 1)$ we get back the law of DP
$$\underbrace{ \frac{C}{N} =3k_{\small B}T }_{ \text{Dulong Petit} } + \mathcal{O}(x) $$
For very low temperatures $(x \gg 1)$  though we get
$$ \frac{C}{N} = 3k_{\small B}T (\beta \hbar \omega)^{2} {\large e}^{-\beta \hbar \omega}$$
The heat capacity drops exponentially fast. This is a quantum phenomenon in nature. At very low temperatures the QHOs drop to their ground state in which they can no longer absorb energy. In practice the very low temperature prediction of Einstein's solid is wrong. In practice it goes like $C\propto T^{3}$
![[../4. Misc/Escv.png]]