
# What is a Dynamical System ?
A dynamical system is a system described by a set of __dynamical variables__ which evolve in __time__ according to a certain rule. The independent variable - time - can take on either discrete or continuous value

# Independent Variable (Time)
The case of continuous time is often referred to a __flow__, and the rules by which the dynamical variables evolve are written in the language of differential equations. The case of a discrete time evolution is known as a __map__

# Dependent (Dynamical) Variables
The set of dynamical variables which describe the system can also be either discrete (the position and momentum of a point particle) or continuous (the amplitude of a wave)

# Evolution of a Dynamical System
A system described by $n$ dynamical variables $\{x_{1},\dots , x_{n} \}$ which continuously evolve in time according to the following set of differential equations (rules)
$$ \begin{cases}
&\displaystyle\frac{dx_{1}}{dt}= f_{1}(x_{1},\dots,x_{n},t)\\
&\vdots\\
&\displaystyle\frac{dx_{n}}{dt}= f_{n}(x_{1},\dots,x_{n},t)
\end{cases} \tag{1}$$
Differential serve as rules in most physical systems due to the notion of [[locality]], which means that an occurrence can affect only neighbors in its infinitesimal vicinity. No action at a distance 

> [!NOTE]- Reducibility of the Dynamical Rule
> A system described by the following rule$$\sum\limits_{i=0}^{N} a_{n}(t)\frac{d^{n}x}{dt^{n}}=0$$can always be reduced to a set of first order differential equations by going through the following procedure$$\begin{align*}&{\color{teal}x_{1}}=\color{teal}x\\&x_{2}=\dot{x} = \color{teal}\dot{x}_{1}\\&x_{3}=\ddot{x} = \ddot{x}_{1} = \color{teal}\dot{x}_{2} \\&\vdots\\&{\color{teal}x_{n}}=x^{(n-1)}=\dots=\color{teal}\dot{x}_{n-1}\end{align*}$$which is equivalent to what is drawn in equation $(1)$

Time might appear explicitly in the differential equations, meaning that the rules themselves are changing with time. Such systems are called __non-autonomous__ systems and are generally more complicated. A non-autonomous system can always be made autonomous by defining time itself as an additional dynamical variable $x_{n+1}=t$ such that $\dot{x}_{n+1}=1$. Equation $(1)$ can be more compactly written in "vector" notation, where $\mathbf{x}$ and $\mathbf{f}$ are column vectors
$$\frac{d\mathbf{x}}{dt} = \mathbf{f}(\mathbf{x},t) \tag{2}$$
equation $(2)$ is generally not integrable. The solution $\mathbf{x}(t)$ is unique, given $n$ initial conditions, and it traces a trajectory in [[Phase Space]]

## Local Solvability
$$\begin{align*}
\mathbf{x}(\delta t) &= \mathbf{x}(t_{1}) + \left(\frac{d\mathbf{x}}{dt}\right)_{t_{1}}\delta t\\
& =\mathbf{x}(t_{1}) + \ {\large f}\big(\mathbf{x}{\small(t_{1})}\big)\delta t
\end{align*}$$
which resembles [[Euler's Method for Solving ODEs]]
___
# Integrability
Constants of the motion define hypersurfaces in phase space. If a certain quantity (e.g. total energy) of an $n$-dimensional system $F_{1}(\mathbf{x})=C_{1}$ is constant, it defines an $n-1$ dimensional hypersurface. The trajectories of the system are constrained to that surface. Given another constant of motion $F_{2}(\mathbf{x})=C_{2}$, another hyper surface is set, and the systems is then constrained to trajectories that live only on the intersection of these two $n-1$ dimensional hypersurfaces which in itself is a $n-2$ hypersurface.

Integrability corresponds to a system which is constrained to a $1$-dimensional surface - a line. A line is the intersection of $m$, $m$-dimensional hypersurfaces. So for a system with $n$ dynamical variables, we need $n-1$ constants of motion that create $n-1$ hypersurfaces which intersect to give a line.

### Scarcity of integrable systems
for a system with $N$ particles there are $n=6N$ dynamical variables (3 momenta + 3 position vectors for each particle). that means that $n-1=6N-1$ integrals of motion are necessary for the integrability of the system.