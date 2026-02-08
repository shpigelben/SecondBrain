---
type: note
subject: quantum mechanics
nature: derivative
---
Observables are by definition the outcome of a quantum process we can measure. We usually are interested in dynamical systems that change with time, and therefore it is natural to ask how does an observable change with time ?
# Operator Dynamics
[[Ehrenfest Equation]] allows one to calculate the evolution of an observable in a [[Hamiltonian Operator|hamiltonian]] system. It is given by the following
$$\frac{d\braket{\hat{A}}}{dt} =i \left< [ \hat{\mathcal{H}},\hat{A}]\right> + 
\left< \frac{\partial\hat{A}}{\partial t}\right>$$
___
# Velocity
Lets use the derivation above to find the change of expected position in time, or, expectation value of speed
$$
\braket{\hat{v}} \equiv \frac{d\braket{\hat{x}}}{dt} = 
i\left< [ \hat{\mathcal{H}},\hat{x}]\right> + 
\cancelto{}
{ 
\left<
\frac{\partial\hat{x}}{\partial t}
\right>
}
$$
We assume $\hat{x}$ has no explicit dependence on time, and we use the Hamiltonian of a Continuous System
$$\begin{align*}
i[ \hat{\mathcal{H}},\hat{x}] &= 
i\left[ 
\frac{1}{2m}\left(\hat{p}-A(\hat{x})\right)^2 + V(\hat{x})
 \ ,\hat{x}\right] \\
& =i\left[ 
\frac{1}{2m}\left(\hat{p}-A(\hat{x})\right)^2,
\hat{x}\right]
+ \cancelto{}{
i\left[V(\hat{x})
 \ ,\hat{x}\right]} \\
&=\frac{i}{m}\left(\hat{p}-A(\hat{x})\right)\left[ 
\hat{p}-A(\hat{x}),
\hat{x}\right]
\end{align*}   $$
The commutator of the vector potential with the position operator vanishes, and $[p,x]=-i$ in natural units, and so we're left with the expectation value of the velocity
$$\large\boxed{\braket{\hat{v}} = \frac{{\left<\hat{p}-A(\hat{x})\right>}}{m}}$$
# Acceleration
$$
\braket{\hat{a}} \equiv \frac{d\braket{\hat{v}}}{dt} = 
i\left< [ \hat{\mathcal{H}},\hat{v}]\right> + 
\left<
\frac{\partial\hat{v}}{\partial t}
\right>
$$
we plug the [[#^487637|expectation value]] of the velocity in the hamiltonian, and we assume again that it doesn't have explicit time dependence.
$$
\braket{\hat{a}}  = 
i\left< \left[ \frac{1}{2}m\hat{v}^2 + V(\hat{x}) \ ,\hat{v}\right]\right> + 
{\left<
\frac{\partial\hat{v}}{\partial t}
\right>}
$$
The commutator calculation is split into two parts, one for the potential and the other for the commutation of velocities, and the time derivative of the velocity will be calculated last
$$ [V(\hat{x}),\hat{v}] = \frac{1}{m}[V(\hat{x}),\hat{p}-A(\hat{x})] = \frac{1}{m}[V(\hat{x}),\hat{p}] = \frac{i}{m}\nabla V \tag{1} $$
 It is important to note now that the following commutator vanished in the special case of 1D. we will be considering the general 3D case
 $$
\left[ \frac{1}{2}m\hat{v}^2,\hat{v}\right] = \frac{m}{2}\left[\hat{v}_i \cdot \hat{v}_i \ ,\hat{v}_j\right] = m\hat{v}_i\left[\hat{v}_i \ ,\hat{v}_j\right]
\tag{2.1}
$$
Let calculate this commutator separately
$$
\begin{align*}
\left[\hat{v}_i \ ,\hat{v}_j\right] &=
\frac{1}{m^2}\left[\hat{p}_i-\hat{A}_i,\hat{p}_j-\hat{A}_j\right]\\
& = \frac{1}{m^2}\left(\left[\hat{A}_j , \hat{p}_i\right] -\left[\hat{A}_i , \hat{p}_j\right]\right)\\
&=\frac{i}{m^2}\left(\partial_i\hat{A}_j - \partial_j\hat{A}_i\right) \equiv \frac{i}{m^2}\hat{B}_k
\end{align*} $$
Which can be more neatly written as
$$\Big[m\hat{v}_i \ ,m\hat{v}_j\Big] = i\epsilon_{ijk}\hat{B}_{k}\tag{2.2}$$
plugging $(2.2)$ relation back into $(2.1)$ we get
$$
\left[ \frac{1}{2}m\hat{v}^{2},\hat{v}\right] = \frac{i}{m}\epsilon_{ijk}\hat{B}_k\hat{v}_i  = \frac{i}{m}\left(\hat{B}\times \hat{v}\right) \tag{2}
$$
For the last term we differentiate the velocity with respect to time
$$\frac{\partial\hat{v}}{\partial t} = 
\frac{1}{m} \frac{\partial}{\partial t} \left( \hat{p}-A(\hat{x}) \right) =  - \frac{1}{m}\frac{\partial A}{\partial t} \tag{3}$$
plugging (1), (2) and (3) back into the equation for the acceleration we get
$$
\braket{\hat{a}} = 
\frac{1}{m}\left(
\left< \hat{v}\times \hat{B} \right> + 
{\left<
-\nabla V -\frac{\partial A}{\partial t}
\right>}
\right)
\equiv
\frac{1}{m}
\left< \hat{v}\times \hat{B} + 
\hat{\mathcal{E}}
\right>
$$
We found Lorentz force.