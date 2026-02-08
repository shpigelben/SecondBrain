Hermitian operators are self adjoint operators(?). These are operators that are invariant under hermitian conjugation
$$\large\boxed{ \begin{align*} \\
\quad H^{\dagger} = H \quad \\ \
\end{align*} }$$
eigenvectors of hermitian operators, which correspond to different eigenvalues, are **orthogonal**

> [!NOTE]- Proof of Orthogonality
> we assume $\mathbf{v}_{1}$ and $\mathbf{v}_{2}$ are eigen vectors of $H$. on the one side $$\mathbf{v}_{2} ^{\dagger} H \mathbf{v}_{1} = \mathbf{v}_{2} ^{\dagger} \lambda_{1} \mathbf{v}_{1} = \lambda_{1} \mathbf{v}_{1}\cdot \mathbf{v}_{2} \tag{1}$$ on the other $$\mathbf{v}_{2} ^{\dagger} H \mathbf{v}_{1} = \mathbf{v}_{2} ^{\dagger} H^{\dagger} \mathbf{v}_{1} = (H \mathbf{v}_{2})^{\dagger} \mathbf{v}_{1} = \lambda_{2}^{\dagger} \mathbf{v}_{2}^{\dagger}\mathbf{v}_{1} = \lambda_{2}\mathbf{v}_{1}\cdot\mathbf{v}_{2}\tag{2}$$ where we used the fact that eigenvalues of hermitian operators are real valued. Finally equating the two sides, (1) and (2) we're left with $$(\lambda_{1}-\lambda_{2})\mathbf{v}_{1}\cdot \mathbf{v}_{2}=0$$ This last relation means that if the two Evecs correspond to two different Evals, they necessarily are orthogonal. But if the share the same Eval, no such conclusion can be drawn.