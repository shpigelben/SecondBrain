#note #math/algebra #concept

The complex conjugate of a unitary matrix (operator) $U$ is equal to the inverse of $U$. namely
$$\large \boxed{U^{\dagger} = U^{-1}}$$
From that, it immediately follows that a unitary matrix is necessarily [[Normal Matrix|normal]]
$$U^{\dagger}U = I = UU^{\dagger}$$

# Preservation of Inner Product
___
The action of a unitary matrix on a vector (operator on a state) is referred to as a unitary transformation. We denote such general transformation as follow 
$$\hat{U}\ket{\psi} \rightarrow \ket{\psi}'$$
Using those, we can write an inner product of two vectors as follows
$$ \braket{\psi' | \phi'} =

\left(\bra{\psi \hat{U}^{\dagger}}\right)
\left(\ket{\hat{U} \phi}\right) =

\braket{\psi|\hat{U}^{\dagger}\hat{U}|\phi}=

\braket{\psi|\hat{I}|\phi}=

\braket{\psi|\phi}
$$
the equality above goes to show that a unitary transformation, by definition preserves, [[Hilbert Space|inner product]] and more importantly the **norm** defined by the inner product. In quantum mechanics unitary operators are ones that conserve probability.