#math #algebra 

Assuming $A$ is diagonalizable, using the [[Taylor Expansion]] definition of the [exponent](Exponent) we can show the following
$$
{\large e^{A}}=U{\large e^{D}} U^{-1}
$$
Where $D$ is the diagonal matrix, and $U$ is the transition matrix.

> [!NOTE]- Derivation
> $$
\begin{align}\exp{(A)}&=\sum\limits_{n=1}^{\infty} \frac{A^{n}}{n!} \\&=\sum\limits_{n=1}^{\infty} \frac{\Big(UDU^{-1}\Big)^{n}}{n!} \\&=\sum_{n=1}^{\infty}U \frac{D^{n}}{n!} U^{-1} \\&=U\left[\sum_{n=1}^{\infty} \frac{D^{n}}{n!}\right] U^{-1} = U\Big[\exp(D)\Big]U^{-1}\end{align}
$$

