We want to calculate the volume and plot an ellipsoid with a constant thickness $d$. Let the parametrization of the outer surface be as follows

$$
\boldsymbol{E}(\theta,\varphi) = \begin{bmatrix}
a\sin \theta \cos \varphi \\
b\sin \theta \sin \varphi \\
c\cos \theta
\end{bmatrix}
$$

To find the parametrization of the inner surface we need the normal offset by $d$ from the surface at every point, namely

$$
\boldsymbol{e}(\theta,\varphi) = \boldsymbol{E}(\theta,\varphi) + d \cdot \hat{\boldsymbol{n}}(\theta,\varphi)
$$
Where the normal vector is

$$
\boldsymbol{n}(\theta,\varphi) = \frac{\partial \boldsymbol{E}}{\partial \varphi}\times \frac{\partial \boldsymbol{E}}{\partial \theta}
$$
write a python code that draws both $\boldsymbol{E}$ and $\boldsymbol{e}$.

___

$$
\boldsymbol{E}(\phi,\theta) = \begin{bmatrix}
A\sin \phi \sin \theta \\ B\cos \phi \sin \theta \\
C\cos \theta
\end{bmatrix}\quad\boldsymbol{e}=k\boldsymbol{E}
$$
Where $0\leq c \leq 1$. The difference vector is

$$
\boldsymbol{d}=\boldsymbol{E}-\boldsymbol{e}=(1-k)\boldsymbol{E}
$$
$$
d^2(\phi,\theta)=(1-k)^2E^2(\phi,\theta)
$$
$$
(0.8)^2 \stackrel{!}{=}\langle d^2 \rangle = \left( \frac{2}{\pi} \right)^2\iint d\phi d\theta \ d^2(\phi,\theta) = \left[ \left( \frac{A}{2} \right)^2 +\left( \frac{B}{2} \right)^2+\left( \frac{C}{\sqrt{ \pi }} \right)^2 \right](1-k)^2
$$
from which

$$
k=1 - \frac{0.8}{\sqrt{ \left( \frac{A}{2} \right)^2 +\left( \frac{B}{2} \right)^2+\left( \frac{C}{\sqrt{ \pi }} \right)^2  }}
$$
