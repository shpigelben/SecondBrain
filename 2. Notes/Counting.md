#note #math #combinatorics 


# Permutations
The number of ways of enumerating $n$ objects
$$ \Gamma=n(n-1)\dots 2\cdot1=n! $$
___
# Ordered List (Distinguishable Particles)
The number of ways of enumerating $m$ objects out of $n$
$$ \Gamma=n(n-1)\dots (n-m-1)=\frac{n!}{(n-m)!} $$

___
# Unordered List (Indistinguishable Particles)
The number of ways of enumerating $m$ objects out of $n$ without considering their permutations. It is the number of ordered lists (above) divided by the number of possible permutations

$$\Gamma = \frac{1}{m!}\frac{n!}{(n-m)!} = \begin{pmatrix}n \\ m\end{pmatrix}$$
___
### Unordered List with Repetition (Occupation Numbers ?)
The number of ways of ordering $m$ __types__ of object in and unordered list where every type has $n_{i}$ objects (${\small i=1,...,m}$), such that $N = \sum\limits_{i}^{m} n_{i}$ . It is the enumeration of $N$ objects with no consideration of the permutations of each type.
$$ \Gamma = \frac{N!}{(n_{1})!\dots(n_{m})!} $$

> [!NOTE]- Stirling Approximation For large N
> Using [[Stirling Formula]]$$ \begin{align*}
\ln(\Gamma) &= \ln\left(\frac{N!}{n_{1}!\dots n_{m}!}\right)\\
&\approx N\ln(N) - \sum\limits_{i}^{m}n_{i}\ln(n_{i}) \end{align*}$$
