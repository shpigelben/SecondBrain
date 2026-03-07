---
type: concept
discipline:
  - physics
field:
  - relativity
---

$$\Lambda_{x} = \begin{pmatrix} \gamma & -\beta \gamma & 0 & 0 \ \\ -\beta\gamma & \gamma & 0 & 0 \ \\ 0 & 0 & 1 & 0 \ \\ 0 & 0 & 0 & 1 \ \end{pmatrix}$$

# Galilean vs Lorentz Invariance
A spacetime interval $s = x^{T}g \ x$ in a transformed reference frame is given by
$$
\begin{align}
ds' &= (x')^{T}g \ (x')  \\
&=( x^{T} \Lambda^{T}) g (\Lambda x) \\
&=x^{T}(\Lambda^{T}g\Lambda)x
\end{align}
$$
Where $g$ is the metric tensor and $\Lambda$ is the transformation. For $s$ to be invariant under $\Lambda$, namely $s'=s$ the following must hold
$$
\Lambda^{T}g\Lambda \stackrel{!}{=} g
$$
Let's investigate the invariance of a spacetime interval first in Minkowski space for Lorentz transformation and the in Euclidean space for Galilean transformation.

# Lorentz Transformation in Minkowski Spacetime
The Minkowski metric and the Lorentz transformation are given respectively by
$$
g = \begin{pmatrix}
-1 &  0 \\ 0 & 1
\end{pmatrix} \quad \Lambda = \gamma \begin{pmatrix}
1 & -\beta \\ -\beta & 1
\end{pmatrix}
$$
The transformation of Minkowski metric is
$$
\begin{align}
\Lambda^{T}g\Lambda  &= \gamma^{2} \begin{pmatrix}
1 & -\beta \\ -\beta & 1
\end{pmatrix} \begin{pmatrix}
-1 &  0 \\ 0 & 1
\end{pmatrix} \begin{pmatrix}
1 & -\beta \\ -\beta & 1
\end{pmatrix} \\ &= \gamma^{2}\begin{pmatrix}
1 & -\beta \\ -\beta & 1
\end{pmatrix}  \begin{pmatrix}
-1 & \beta \\ -\beta & 1
\end{pmatrix} \\
& =  
\gamma^{2} \begin{pmatrix}
-1+\beta^{2} & 0 \\ 0 & 1- \beta^{2}
\end{pmatrix}
\end{align}
$$
and since $\gamma = \frac{1}{\sqrt{ 1-\beta^{2} }}$ it is clear that 
$$
\Lambda^{T}g\Lambda = \begin{pmatrix}
-1 & 0 \\ 0 & 1
\end{pmatrix} = g
$$
Which means that $s' = s$.

# Galilean Transformation in Euclidean Spacetime
The Euclidean metric and the Galilean transformation are given respectively by
$$
g = \begin{pmatrix}
1 &  0 \\ 0 & 1
\end{pmatrix} \quad \Lambda = \begin{pmatrix}
1 & -v \\ 0 & 1
\end{pmatrix}
$$
The transformation of the Euclidean metric is
$$
\begin{align}
\Lambda^{T}g\Lambda  &=  \begin{pmatrix}
1 & 0 \\ -v & 1
\end{pmatrix} \begin{pmatrix}
1 &  0 \\ 0 & 1
\end{pmatrix} \begin{pmatrix}
1 & -v \\ 0 & 1
\end{pmatrix} \\ &= \begin{pmatrix}
1 & 0 \\ -v & 1
\end{pmatrix}  \begin{pmatrix}
1 & -v \\ 0 & 1
\end{pmatrix} \\
& =  
 \begin{pmatrix}
1 & -v \\ -v & 1 +v^{2}
\end{pmatrix}
\end{align}
$$
Here we can see that $\Lambda^{T}g\Lambda  \neq g$ and therefore $s' \neq s$.
Why is $g' = (\Lambda^{-1})^{T}g(\Lambda^{-1})$ and not simply $g' = \Lambda g \ \Lambda^{-1}$ ?




$$
\frac{dI}{dz} = \left[ \frac{g_{0}}{1+ \frac{2I}{I_{s}}}-\alpha \right]I
$$

$$
G^{2}V_{s}^{2}R_{1}R_{2}\stackrel{!}{=}1
$$



$$
I = \frac{I_{s}}{2}\left[ \left( \frac{g_{0}\ell}{| \ln(\sqrt{ R_{1}R_{2} }V_{s})|} \right)^{1/x} -1 \right]
$$