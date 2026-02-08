#note #physics #quantum #derivative 

We begin by writing the [[Quantum State 1 |expectation value of an operator]] and it's full derivative in time
$$
\frac{d\braket{\hat{A}}}{dt} = \frac{d}{dt}\left(Tr(\hat{A}\rho)\right) 
$$
We assume that $\hat{A}$ and $\rho$ both depend on time and insert the derivative into trace (since trace is a linear operation). For the second equality we use the [[Liouville Equation#Quantum Picture|Liouville equation]]
$$
Tr\left(\frac{\partial\hat{A}}{\partial t}\rho
+ \hat{A}\frac{\partial \rho}{\partial t}\right) = 
Tr\left(\frac{\partial\hat{A}}{\partial t}\rho
-i \hat{A} \ [\hat{\mathcal{H}},\rho]\right)
$$
We can show that $\ \ Tr\left(A[B,C]\right) = Tr\left([A,B]C\right)$ and so
$$
Tr\left(\frac{\partial\hat{A}}{\partial t}\rho
-i [\hat{A}, \hat{\mathcal{H}}]\rho\right)
= \left< \frac{\partial\hat{A}}{\partial t} + i [ \hat{\mathcal{H}},\hat{A}]\right>
$$
Finally we get __Ehrenfest equation__ which gives a procedure for calculating the rate of change of an observable given the [[Hamiltonian Operator|hamiltonian]] of the system
$$\large\boxed{
\frac{d\braket{\hat{A}}}{dt} =i \left< [ \hat{\mathcal{H}},\hat{A}]\right> + 
\left< \frac{\partial\hat{A}}{\partial t}\right>}$$