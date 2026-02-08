---
type: problem
---


Interesting question. To calculate the total time it takes to traverse between two points in 2D you can use the following.

$$
T = \int\limits_{t_{1}}^{t_{2}}  \, dt = \int\limits_{s(t_{1})}^{s(t_{2})}  \, \frac{ds}{v} =\int\limits_{s(t_{1})\to x_{1}}^{s(t_{2}) \to x_{2}}  \frac{1}{v(x)} \frac{ds}{dx} \, dx = \int\limits_{x_{1}}^{x_{2}}  \frac{\sqrt{ 1+\left( \frac{dy}{dx} \right)^{2} }}{\sqrt{ 2g(y_{1}-y(x)) }} dx   
$$

where $ds=\sqrt{ dx^{2}+dy^{2} }$ is the infinitesimal arc length along the path such that $\frac{ds}{dx}=\sqrt{ 1+\left( \frac{dy}{dx}\right)^{2}}$ and $v(x)$, the velocity, can be calculated from conservation of energy as follows

$$
mgy_{1} = mgy(x)+\frac{mv^{2}(x)}{2}
$$

Applying the general formula to a given curve $y=x^{n}$ results in

$$
T_{n} = \frac{1}{\sqrt{ 2g }}\int\limits_{1}^{0}  \sqrt{ \frac{1+n^{2}x^{2n-2}}{1-x^{n}} }\, dx 
$$

Never been great at solving integrals, but pretty sure there's no general analytic solution to this one. You can solve this numerically for each $n$ to get a sense or perhaps consider a more sophisticated approach. If I have time later I might add some of these solutions. Hope this helps.

# Generalization
Can be approached from Hamiltonian\Lagrangian mechanics (Calculus of variations)