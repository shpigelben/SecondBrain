#math #incomplete

The variation of the product of two conjugate variables $(x,y)$ 

$$d(xy) = xdy+ydx$$ 

relates the changes of the two variables. Consider a differential of a function $f(x,y)$ of the two conjugate variables

$$df(x,y) = \left(\frac{\partial f}{\partial x}\right)dx + \left(\frac{\partial f}{\partial y}\right)dy \equiv udx + vdy$$

arbitrarily subtracting the differential of $vy$ from the differential of $f$ yields the following

$$\begin{align*}
dg(x,v) &= df(x,y) - d(vy)\\ &= udx + vdy - vdy - ydv \\ &= udx - ydv 
\end{align*} $$

Where $g(x,v)$ is the _Legendre Transform of f_.  By the same procedure one can take 
$$
\begin{align*}
& h(u,y) \Rightarrow df(x,y)-d(ux) \\
& h(u,v) \Rightarrow df(x,y)-d(ux)-d(vy)
\end{align*}
$$
___

Consider a function that depends on several variables $f(x_{1},\dots, x_{\small N})$ , its natural variables. Its exact differential is given by

$$ \begin{align*}
df &= \left(\frac{\partial f}{\partial x_{1}}\right)dx_{1} + \dots + \left(\frac{\partial f}{\partial x_{\tiny N}}\right)dx_{\tiny N}\\ \\
&\equiv p_{1}(x_{1})dx_{1} + \dots + p_{\tiny N}(x_{\tiny N})dx_{\tiny N} 
\end{align*} $$

each pair $(x_{i},p_{i})$ is referred to as a pair of conjugate variables.

It is possible to obtain from the function $f$ another function, that accounts for the same "information", but whose natural variables has been switched by their conjugate variables 

$$ f(x_{1}\dots x_{j} \dots x_{\tiny N}) \longmapsto g_{j}(x_{1}\dots p_{j} \dots x_{\tiny N})$$

by performing the Legendre transform

$$g_{j}=f - p_{j}x_{j}$$
 

### Concavity & Convexity 


