#note #physics #statistical-mechanics #derivative
#kinetic-theory #incomplete 

# Collision Probability
The probability of one collision $\mathbb{P}_{c}$ in a volume element is given by the following ratio
$$\mathbb{P}_{c}(dV)=\frac{dV}{V}= \frac{N\sigma dx}{V} = n\sigma dx=\mathbb{P}_{c}(dx)$$
We see that the probability of a collision inside a volume element is equivalent to the probability of a collision along a path element $dx$. For a "beam" of particles traveling in the $x$ direction, we say that a decrease in the beam's __intensity__ depends on its current intensity and the likelihood of collisions. This gives an exponential relation as follows
$$ dI = -P(dx)I=-In\sigma dx$$
$$I(x)=I(0)e^{-n\sigma x}$$
$$\begin{align*}
\braket{ I(x+dx) } &= \mathbb{P}_{c}\mathbf{0} + {\mathbb{P}^{*}_{c}} I(x)
\end{align*}$$

It is convenient to set the initial intensity $I(0)=1$, the __mean free path__  is defined to be the average distance a particle travels
$$\braket{x} = \int\limits_{0}^{x} x' P(dx)dx' =\int\limits_{0}^{x} x'e^{-n\sigma x'}dx'=\frac{1}{n\sigma}\equiv\ell$$
# Alternative derivation
The probability of a particle **collision** along an infinitesimal length $dx$ is proportional to the **density ($\boldsymbol{n}$)** of scatterers and their individual **cross section ($\boldsymbol{\sigma}$)**
$$\mathbb{P}(dx)=n\sigma \ dx$$
For a distance of $x=N\cdot dx$ the probability of **not colliding** is
$$\begin{align*}
\overline{\mathbb{P}}(x)&= \prod\limits_{i=1}^{N}\overline{\mathbb{P}}(dx) \\
&=  \prod\limits_{i=1}^{N}(1-n\sigma \ dx)\\
&= \left( 1-\frac{n\sigma x}{N} \right)^{N} \stackrel{\scriptsize N \to \infty}{\Large\longrightarrow} {\large e^{-n\sigma x}}
\end{align*}$$
(see [[Exponential Map|definition of the exponent]]). The probability of not colliding is $1$ at the beginning and decays exponentially with increasing collision-less path. The average distance a particle travels without colliding is known as the **mean free path** (MFP)
$$\ell=\braket{ x } =\int x \overline{P}(x) \, dx = \int\limits_{0}^{\infty}  x{\large e^{-n\sigma x}}\, dx = \frac{1}{n\sigma}$$
which is inversely proportional to the scatterer's density and cross section.

# Relaxation Time
A similar derivation can be made for **collision time** instead of **collision length**, but since the particles velocity remains constant between collisions, time and length are similar up to a factor of the speed $\mathbf{c}$. 
$$\overline{\mathbb{P}}(x) = {\large e^{-n\sigma x}} = {\large e^{-\frac{x}{\ell}}} = {\large e^{-\frac{ct}{c\tau}}}={\large e^{-\frac{t}{\tau}}} = \overline{\mathbb{P}}(t)$$

Just like $\ell$ is the average collision-less length, $\tau$ is the average collision-less time, also known as *relaxation time*.

# Knudsen Regime
for [[Classical Ideal Gas]] using the equation of state, one can easily show that the mean free path is
$$\ell = \frac{1}{\sigma} \frac{k_{\tiny B}T}{P} \tag{1}$$
As the pressure $P$ is decreased, the MFP of the particles increases. The pressure arrives at a threshold value $P_{\text{Knudsen}}$ when the MFP is equal to the scale of the container $L$.
$$P_{\small\text{Knudsen}} = \frac{k_{\tiny B}T}{\sigma L}$$
When the mean free path of the gas molecules is **larger** than the size of the container there are effectively no collisions. This is called the __Knudsen Regime__.

==**Question**: isn't it contradictory to assume an ideal gas - which is by definition absent interparticle interactions - for regimes in which collisions seemingly take place? Why is the usage of the ideal gas equation of state in $(1)$ valid?==

