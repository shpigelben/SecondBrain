---
type: concept
discipline:
  - physics
field:
  - thermodynamics-statistical-mechanics
---

$$
\begin{align*}
dU(S,V,N) &= TdS + PdV + \mu dN \\
dH(S,P,N) &= TdS - VdP + \mu dN \\
dF(T,V,N) &= -SdT + PdV + \mu dN \\
dG(T,P,N) &= -SdT - VdP + \mu dN
\end{align*}
$$

Considering the equivalence of partial mixed derivatives

$$ \frac{\partial^{2} U}{\partial V \partial S} = 
\frac{\partial T}{\partial V} = \frac{\partial P}{\partial S}$$

$$\frac{\partial T}{\partial V}= \frac{\partial}{\partial V}\left(\frac{\partial U}{\partial S}\right) = \frac{\partial}{\partial S}\left(\frac{\partial U}{\partial V}\right)=\frac{\partial P}{\partial S}$$
___
#### Jacobians
$$ \frac{D(x_{1},\dots,x_{n})}{D(y_{1},\dots,y_{n})} = 
\det\left( \frac{\partial x_{i}}{\partial y_{j}}\right) = \det(\mathcal{J})$$
for example
$$ \left(\frac{\partial U}{\partial T}\right)_{P} = \frac{D(U,P)}{D(T,P)}$$
___
##### Properties

$$ \frac{D(x_{1},\dots,x_{n})}{D(y_{1},\dots,y_{n})} =
\frac{D(x_{1},\dots,x_{n})}{D(z_{1},\dots,z_{n})}\frac{D(z_{1},\dots,z_{n})}{D(y_{1},\dots,y_{n})} \tag{1}$$

$$\frac{D(x_{1},x_{2},\dots,x_{n})}{D(y_{1},x_{2}\dots,x_{n})} = \left(\frac{\partial x_{1}}{\partial y_{1}}\right)_{x_{i\neq1}} \tag{2}$$

$$\frac{D(x_{1},x_{2},\dots,x_{n})}{D(x_{1},x_{2},\dots,x_{n})} = 1 \tag{3}$$

$$\frac{D(x_{1},x_{2})}{D(y_{1},y_{2})} = -\frac{D(x_{2},x_{1})}{D(y_{1},y_{2})} = 
\frac{D(x_{2},x_{1})}{D(y_{2},y_{1})} \tag{4}$$
