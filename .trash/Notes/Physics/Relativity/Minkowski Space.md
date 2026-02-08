# Minkowski Space (Spacetime)
#GR1 #relativity #spacetime
___

The formulation of [[Special Relativity]] requires treating time as an equal coordinate in a combined structure known as a __spacetime manifold__.
A point in spacetime is pointed at by a [[Four Vector]]. It is specified by 3 spatial coordinates and 1 temporal coordinate), and is called an __event__.

- Outline:
	1. [[Minkowski Space#Four Vector|four vector]]
	2. [[Minkowski Space#Interval|the interval]]
	3. [[Minkowski Space#Minkowski Metric|Minkowski metric]]

___
## Four Vector

Position 4-vector $X^\mu = (ct,x,y,z) = (ct,\vec{r})$

The separation in spacetime between two events is called an __interval__, and is equivalent to the notion of distance (norm) in regular euclidean space which is calculated using a metric. In the case of the interval it is calculated using the __Minkowski metric__.

___
## Minkowski Metric
The interval, $S$, is calculated by contracting two 4-vectors with the Minkowski metric $\eta$ which is given by
$${\eta}_{ij} = \begin{pmatrix}
-1 & 0 & 0 & 0 \\
 0 & 1 & 0 & 0 \\
 0 & 0 & 1 & 0 \\
 0 & 0 & 0 & 1 \\
\end{pmatrix}$$

___
## Interval
The contraction of two 4-vectors with the [[Metric Tensor|Minkowski metric]] 
$$ S = {\eta}_{\mu\nu} X^\mu X^\nu $$
or in  infinitesimally
$$ dS^2 = g_{\mu\nu} = {\eta}_{\mu\nu} = dX^{\mu} dX^{\nu} $$
$$\begin{align*}
&\textbf{spacelike vectors} \quad\quad dS^2 > 0\quad \Longrightarrow\text{measure proper distance}\\
&\textbf{lightlike vectors}  \ \quad\quad dS^2 = 0\quad \Longrightarrow \text{paths of light beams}\\
&\textbf{timelike vectors} \ \quad \quad dS^2 < 0\quad \Longrightarrow
\text{measure proper time}
\end{align*}$$

   <iframe src="https://www.desmos.com/calculator/dszughqn6s?embed" width="500" height="500" style="border: 1px solid #ccc" frameborder=0></iframe>
