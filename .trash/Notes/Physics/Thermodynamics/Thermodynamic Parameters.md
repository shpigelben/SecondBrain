# Thermodynamics Parameters
___
#TD1 #thermodynamics 
___
A [[Thermodynamic System]] in [[Thermodynamic Equilibrium]] is described by a set [[State Variables]] called thermodynamic parameters that serve as the properties of the system.
$$ \{P,V,T\} $$
These parameters are tied together by [[State Function | an equation of state]]
$$ f(P,V,T) = 0 $$
___
# Intensive & Extensive Properties

Thermodynamic parameters can be either
- **Extensive:** if they are proportional to the number of particles (Volume \ Energy). If we take half a system we get (as $N\rightarrow\infty$) half the energy and half the volume
 - **Intensive:** if they are not proportional to the number of particles (Temperature \ Pressure), and should remain uniform throughout the system, so if we take half the system, we should get the same temperature and pressure.
 
 an extensive property can become intensive 

___
# Homogeneity
A function $\psi$ of the extensive parameters of the system $\psi(U,X,N)$ is also called extensive it is a [[Homogeneous Function | homogeneous function of degree 1]] , namely
$$ \psi(\lambda U,\lambda X,\lambda N) = \lambda \psi(U,X,N) \tag{1} $$
- For a system with a set of $\{X_i\}$ extensive parameters, lets use the notation $\mathbf{x}$ for the sake of brevity
- When taking the partial derivative w.r.t to $x_j$ we assume all other parameters are constant unless specified otherwise

Any extensive function satisfies
$$
\frac{\partial\psi(\lambda \mathbf{x})}{\partial(\lambda x_j)} =
\frac{\partial\psi(\mathbf{x})}{\partial x_j}
$$
___
# First Derivative of a Homogeneous Function
When differentiating both sides of [[#^3ed542|(1)]] with respect to $\lambda$ we get
$$
\frac{d(\lambda \psi(\mathbf{x}))}{d \lambda} = \psi(\mathbf{x}) \tag{RHS}
$$
$$
\frac{d\psi(\lambda\mathbf{x})}{d \lambda} = 
\frac{\partial\psi(\lambda\mathbf{x})}{\partial{X_i}}
\frac{\partial(\lambda X_i)}{\partial\lambda} =
\frac{\partial\psi(\lambda\mathbf{x})}{\partial{X_i}} X_i
\tag{LHS}
$$
Taking $\lambda=1$ we get the following relationship between the LHS and RHS
$$ \psi(\mathbf{x}) = 
\left(
\frac{\partial\psi(\mathbf{x})}{\partial{X_i}}
\right)X_i \tag{2}$$
___
# Second Derivative of a Homogeneous Function
Taking the second derivative of (1) w.r.t $\lambda$
$$
\frac{d^2(\lambda\psi(\mathbf{x}))}{d\lambda^2}
=\frac{d\psi(\mathbf{x})}{d\lambda} = 0
\tag{RHS}
$$
$$
\frac{d^2 \psi(\lambda\mathbf{x})}{d{\lambda}^2} = \frac{d}{d\lambda} \left(
\frac{\partial\psi(\lambda\mathbf{x})}{\partial{X_i}} X_i
\right) \tag{LHS}
$$
 we already have the solution for the term inside the brackets so, taking $\lambda = 1$ once again, we now get
$$ =  
X_i\frac{\partial}{\partial X_i} \left(
\frac{d\psi(\lambda\mathbf{x})}{d\lambda}\right) =
X_iX_j \left(\frac{\partial^2\psi(\mathbf{x})}{\partial X_i \partial X_j}\right)
$$
the two sides are equal, so we get the stability 
$$
X_iX_j \left(\frac{\partial^2\psi(\mathbf{x})}{\partial X_i \partial X_j}\right) = 0 \tag{3} $$

___
#SRS/Thermodynamics 