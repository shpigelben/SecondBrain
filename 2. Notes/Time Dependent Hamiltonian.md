---
type: note
field: physics
subject: quantum mechanics
---


We consider the following time dependent hamiltonian
$$
H(t) = H^{(0)} + \delta H(t) \tag{1}
$$
for which we make the first assumption - the constant part $H^{(0)}$ has a known energy basis $H^{(0)}\ket{n} = \mathcal{E}_{n}\ket{n}$. We consider a general solution for the time evolved wave function to be as follows
$$
\ket{\psi {\small (t) }} = \sum\limits_{n=1}^{N}C_{n}{\small (t) }{\large e^{ -i\omega_{n}t }}\ket{n} \tag{2}
$$
Where the "unperturbed" energy states evolve according to $H^{(0)}$ and the coefficients evolve according to the $\delta H(t)$ contribution. In order to find the unknown coefficients, we insert $(1)$ into the [Schrodinger equation](Schrodinger%20Equation) and act of the solution from the left with $\bra{m}$. This results in the following coupled differential equation

$$
i\hbar \dot{C}_{m} = \sum\limits_{n}{\large e^{ i\omega_{mn}t }} \ \delta H_{mn}  \ C_{n} \tag{3}
$$

Where
$$
\begin{align}
\delta H_{mn} &= \braket{ m |\delta H| n  } \tag{3.1}\\  \\
\omega_{mn} &= \frac{\mathcal{E_{m}-\mathcal{E_{n}}}}{\hbar} \tag{3.2}
\end{align}
$$
