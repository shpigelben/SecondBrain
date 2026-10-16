---
type: concept
discipline:
  - engineering
field: []
---

Quantum logic gates are the quantum analog of classical [[Logic Gate]]s, and are the basic building blocks of quantum circuits.

Quantum logic gates are [[Unitary Matrix]]s and are represented by unitary matrices that operate on the states of the [[Qubit 1]]

___
$$\textbf{NOT gate} \quad{} \bigoplus$$
___

$$\sigma_{\small X} = X \longmapsto \begin{pmatrix}0&1\\1&0\end{pmatrix}$$ 

$$X\ket{0}=\ket{1}$$
$$X\ket{1}=\ket{0}$$

This gate is classical and behaves classically
___
$$\textbf{H gate}\quad \boxed{\textbf{H}}$$
___
the Hadamard gate is a common gate that generates a superposition of states and is the first example of a quantum gate that cannot be manifested classically. The H gate creates a symmetric and anti symmetric states out of the two basis states

$$H \longmapsto \frac{1}{\sqrt{2}}\begin{pmatrix} 1 & 1 \\ 1&-1 \end{pmatrix}$$

$$H\ket{0} = \ket{+} \equiv \frac{1}{\sqrt{2}}\begin{pmatrix}1 \\ 1\end{pmatrix}  \quad\quad\quad H\ket{1} = \ket{-} \equiv \frac{1}{\sqrt{2}}\begin{pmatrix}1 \\ -1\end{pmatrix}$$

It is apparent that the H gate generates superposition, and that after it acts on a state there is a $1/2$ probability to measure the system at each of its base states.

$$H(H\ket{0})=H\ket{+}=H\left(\frac{1}{\sqrt{2}}(\ket{0}+\ket{1})\right) = \frac{1}{\sqrt{2}}\big(H\ket{0}+H\ket{1}\big) = $$

$$ = \frac{1}{\sqrt{2}}\big(\ket{+}+\ket{-}\big) = \frac{1}{\sqrt{2}}{\big(\sqrt{2}\ket{0}\big)} = \ket{0} $$

The application of two H gates on a state consecutively lead to a case of interference in which superposition terms cancel and the randomness of the system vanishes.