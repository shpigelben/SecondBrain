 # Item 2 - The Phase Oracle
The phase oracle acts directly on the register, returning it with a phase as follows
$$\begin{align*}
&P_{f}\ket{x}  = (-1)^{f(x)}\ket{x} \\&P_{k}\ket{x} = (-1)^{k\odot x}\ket{x} 
\end{align*}$$
Where $k\odot x$ is a bitwise operation between the binary representations of both $k$ and $x$, which is calculated in mod(2). $k$ is a predetermined number called the SEED which uniquely defines the phase oracle. Finding the SEED of an oracle is a classically intensive task. As we'll later see, it is easily solved using quantum computation.

We wish to realize the phase oracle on a 3-qubit register $\ket{q_{1}}\otimes \ket{q_{2}}\otimes \ket{q_{3}} \equiv \ket{q_{1} \ q_{2} \ q_{3}}$ for which there are $2^{N}=2^{3}=8$ possible state configurations. The standard basis of the system is chosen to be in the order of the binary representation of the state as shown below
$$
\begin{align}
& \ket{x=0} \longrightarrow \ket{000} \\
& \ket{x=1} \longrightarrow \ket{001} \\
& \ket{x=2} \longrightarrow \ket{010}  \\
& \ket{x=3} \longrightarrow \ket{011}  \\ 
& \vdots \\
& \ket{x=7} \longrightarrow \ket{111} \\ 
\end{align} 
$$
The SEED also receives values $k=0,\dots,7$ in binary. It is possible to choose a higher SEED value, but the oracle will be "indifferent" to any binary digit higher than the third.

## 2.1 - Constructing the Phase Oracle
## 2.2 - Decrypting the Phase Oracle

Finding the SEED of the oracle is as easy as sandwiching the oracle between Hadamard gates as demonstrated in the following picture


That way, instead of feeding the oracle with a single state we prepare the system in a superposition of all possible states which simultaneously pass through
$$ H_{1}\ket{0}\otimes H_{2}\ket{0}\otimes H_{3}\ket{0}\equiv \mathbf{H}\ket{000}=\ket{+++} = \frac{1}{\sqrt{8}}\Big(\ket{0}+ \ldots +\ket{7}\Big) $$
The oracle acts on the superposed state, giving every basis vector its relative phase according to the predetermined SEED
$$
P_{k}\ket{+++} = \frac{1}{\sqrt{8}}\Big( (-1)^{k\odot 0}\ket{0} + \ldots + (-1)^{k\odot 7}\ket{7}  \Big)
$$
We are now going to show that letting the superposed output pass again through Hadamard gates gives us with complete certainty the value of the SEED. To do that we use the general definition of the Hadamard gate in index notations
$$\mathbf{H}\ket{x} = \frac{1}{\sqrt{2^{N}}}\sum\limits_{z=0}^{2^{N}-1}(-1)^{x\odot z}\ket{z} \tag{1}$$
Let us write in index notation the action of the oracle on the action of the oracle on $\ket{\small +++}$ using (1)
$$
\begin{align*}
P_{k}\Big(\mathbf{H}\ket{x=0}\Big) &= P_{k}\left(\frac{1}{\sqrt{8}}\sum\limits_{z=0}^{7}\ket{z}\right)\\
&=\frac{1}{\sqrt{8}} \sum\limits_{z=0}^7 P_k\ket{z}\\
&=\frac{1}{\sqrt{8}} \sum\limits_{z=0}^{7} (-1)^{k\odot z}\ket{z} = \mathbf{H}\ket{k} \tag{2} 
\end{align*}
$$
Lastly we let $\mathbf{H}$ act on the result of (2) once again
$$ \mathbf{H}\Big( P_{k}\mathbf{H}\ket{x=0} \Big) = \mathbf{H}\Big( 
\mathbf{H}\ket{k} \Big) = \ket{k}\tag{4}$$
Here we used the fact (shown in item 1) that $\mathbf{H}\mathbf{H}=I$. It is obvious from the result of (4) that the usage of this Hadamard architecture with the phase oracle allows us to extract the definite value of $k$ by accessing the oracle only once.