---
type: concept
discipline:
  - physics
field: []
---

![](../4%20Misc/Attachments/Pasted%20image%2020250129143423.png)

The time period between emissions for the emitter is $t_{3}-t_{1}=T$, and the time period between observations for the observer is

$$
\begin{align}
T'&=t_{4}-t_{2} \\&= t_{3}+\frac{L_{2}}{c} - t_{1} - \frac{L_{1}}{c}\\
& = t_{1}+T+ \frac{L_{1}-vT}{c}-t_{1} - \frac{L_{1}}{c} \\
&=T\left( 1-\frac{v}{c} \right)
\end{align}
$$
changing from period to frequency and rearranging, we arrive at the doppler effect

$$
f' = f\left( \frac{c}{c-v} \right) = f\left( \frac{1}{1-n\beta} \right)
$$

For relative velocities $v$ much smaller than the phase velocity $c$ a first order of the Taylor expansion around $v/c = 0$ yields the more familiar form

$$
\frac{v}{c}=n \frac{v}{c_{0}}=n\beta
$$

$$
f'\approx f\left( 1-\frac{v}{c} \right)
$$
The same can be done when the observer moves away (then the sign of the $v$ changes). When both emitter and observer are moving with a velocities relative to a third observer the equation changes a bit, but we can always transform to a frame in which either of the two is stationary and $v$ is relative.
# Alternative Derivation
A traveling wave has the general form
$$
\begin{align}
\psi(x,t) &= \psi_{0}\cos(kx-\omega t) \\
&=\psi_{0}\cos \big( k(x-ct) \big)
\end{align}
$$
shifting to a reference frame $(x',t')$ with relative velocity $\pm v$ as follows
$$
\begin{align}
x'&=x\pm vt \\
t'&=t
\end{align}
$$
where $+v$ means that the new reference frame is moving away from the old one, and vice versa.
$$
\begin{align}
\psi'(x',t')&=\psi_{0}\cos \big( kx' - \omega't \big) \\
&=\psi_{0}\cos \big( k(x'-ct') \big) \\
&=\psi_{0}\cos \big( k(x\pm vt - ct) \big) \\
&=\psi_{0}\cos \big( kx -k(c\mp v)t \big)  \\
\end{align}
$$
The relation between $\omega'$ of the moving frame and that of the "stationary" one is as follows
$$
\begin{align}
\omega'&=k(c\mp v) \\
&=kc\left( 1\mp \frac{v}{c} \right) \\
&=\omega\left( 1\mp \frac{v}{c} \right)
\end{align}
$$
If we know the original reference frame $(x,y)$ to be the reference frame of the source $\omega$ is the "rest frequency". When the frame is moving away ($+v$) the observed frequency $\omega'$ is smaller and vice versa.

$$
\begin{align}
\mathbf{k}\times \mathbf{E} &\propto \mu \mathbf{H} \\
\mathbf{k}\times \mathbf{H} &\propto -\epsilon \mathbf{E}
\end{align}
$$
$$
\begin{align}
\nabla \times \mathbf{E} &= -\mu \frac{ \partial \mathbf{H} }{ \partial t }  \\
\nabla \times \mathbf{H} &=  \epsilon \frac{ \partial \mathbf{E} }{ \partial t } 
\end{align}
$$
$$
\begin{align}
\mathbf{E}(\mathbf{x},t)&=\mathbf{E}_{0} {\large e^{ i(\mathbf{k}\cdot \mathbf{x}-\omega t) }} \\
\mathbf{H}(\mathbf{x},t)&=\mathbf{H}_{0} {\large e^{ i(\mathbf{k}\cdot \mathbf{x}-\omega t) }}
\end{align}
$$



$$
k^{2}= \mu\epsilon \ \omega^{2} = \frac{n^{2}}{c_{0}^{2}}\omega^{2} = \left( \frac{n}{c_{0}} \frac{2\pi}{T} \right)^{2}
$$
$$
\frac{n}{c_{0}T}=\frac{n}{\lambda}
$$

$$
\left( x- \frac{c_{0}}{n}t \right)
$$

$$
\frac{c_{0}}{n} = \frac{\omega}{k}=\frac{\lambda}{T}
$$

$$
f'\approx f\left( 1\pm \beta \right) \to \Delta f = \mp\beta
$$

$$
\begin{align}
T&=t_{4}-t_{2} \\
 & =t_{3}+\frac{L_{2}}{c}-t_{1}-\frac{L_{1}}{c} \\
 & =t_{1}+T_{0} + \frac{L_{1}+vT_{0}}{c}-t_{1}-\frac{L_{1}}{c} \\
 & =T_{0}\left( 1-\frac{v}{c} \right)
\end{align}
$$