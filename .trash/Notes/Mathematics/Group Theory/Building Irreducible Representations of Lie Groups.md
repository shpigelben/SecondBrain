#group #representation 
# I. Determination of Basis

In order to check that a set of three matrices correctly represent rotations in 3D, they have to satisfy the appropriate [[Lie Algebra]]

$$[J_{l},J_{m}]=i\varepsilon_{lmn}J_{n} \tag{1}$$

$J^{2}$ commutes with all other members of the group, it is therefore a [[Casimir Element]] of the [[Groups| group]]

$$[J^{2},J_{i}]=0 \quad i=x,y,z\tag{2}$$

We have the freedom to choose a basis. And as a convention we choose to work in the basis that diagonalize $J_{z}$ which we denote $\ket{m}$.

$$ J_{z}\ket{m} = m\ket{m} \tag{3}$$

Since $J^{2}$ commutes with $J_{z}$ it is also diagonal in $\ket{m}$, for now 

$$ J^{2}\ket{m} = \lambda\ket{m} $$

___
# II. Identification of Ladder Operators

By definition of the [[Ladder Operators | ladder operators]] , we seek lowering and raising operators in the chosen base that satisfy 

$$ [J_{z},J_{\pm}]=\pm J_{\pm}\tag{4} $$

Operators that satisfy this condition also satisfy $J_{\pm}\ket{m}=\alpha\ket{m\pm1}$, where $\alpha$ is an eigenvalue we're yet to have figured out. The ladder operators in the chosen base are given in terms of the two other generators as follows

$$J_{\pm} = J_{x}\pm iJ_{y} \tag{5}$$

The commutation and anticommutation relation of the generators are given in accordance with the group's algebra (commutation rule)

$$[J_{+},J_{-}] = 2J_{z} \tag{6}$$

$$\{ J_{+},J_{-} \} = 2(J^{2}-{J_{z}}^{2})\tag{7}$$

Adding and subtracting $(6)$ and $(7)$ gives

$$J_{+}J_{-}=J^{2}-J_{z}(J_{z}+1)$$
$$J_{-}J_{+}=J^{2}-J_{z}(J_{z}-1)$$

$$ ||J_{+}\ket{m}||^{2} = \braket{m|J_{-}J_{+}|m}= \lambda - m(m+1) $$
$$ ||J_{-}\ket{m}||^{2} = \braket{m|J_{+}J_{-}|m}= \lambda - m(m-1) $$

by analogy we choose $\lambda$ to be $\lambda= j(j+1)$ so that eventually

$$ J_{\pm}\ket{m}=\sqrt{j(j+1)-m(m\pm1)}\ket{m\pm 1} \tag{8} $$

Since the dimension of our representation is finite, the ladder operators cannot raise or lower the state indefinitely. It is apparent from our choice of $\lambda$ that the eigenvalue vanishes for the two edge cases of $m=\pm j$ and prevents a further lowering or raising of the states.
___

# III. Declaring the Representation
0
It appears then that $j$ has the "responsibility" of declaring the dimensions of the space. there are $\large\boxed{2j+1}$ numbers (including $0$) between $j$ and $-j$ . So if we're dealing with an $N$ dimensional space we have to make sure $N=2j+1\longrightarrow j\in\left(-\frac{N-1}{2} \ , \ .. \ , \ 0 \ , \ .. \ , \ \frac{N-1}{2}\right)$

$J$ is referred to as the [[Spin]]. If for example, the dimension of the space is $N=2$ then $j=\frac{1}{2}$ as is the case with [[Electron Spin]].

___ 
# IV. Casimir Operator and Irreducibility

A Casimir element of a group, is an element that commutes with all other members of the group. In the case of the Lie group it is $J^{2}$. Thus, if we the representation of $J^{2}$ is block diagonal, the representation is [[Irreducible Representation|reducible]]
___
![[Building representations.png]]