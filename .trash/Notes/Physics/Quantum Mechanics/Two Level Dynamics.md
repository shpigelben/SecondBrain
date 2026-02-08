#QM2 #quantum 

A two level system is represented by a $2\times 2$ [[Hamiltonian Operator|hamiltonian]] that is [[Hermitian Operator|hermitian]] and therefore is most generally of the form
$$\mathcal{H}= \begin{pmatrix}\varepsilon_{1} & c+ib \\ c-ib & \varepsilon_{2}\end{pmatrix}$$
- If the can also be gauged in such a way that $a\equiv\varepsilon_1=-\varepsilon_2$ , and so
$$\mathcal{H}= \begin{pmatrix}a & c+ib \\ c-ib & -a\end{pmatrix}=a\begin{pmatrix}1 & 0 \\ 0 & -1\end{pmatrix} + c\begin{pmatrix}0 & 1 \\ 1 & 0\end{pmatrix}+ b\begin{pmatrix}0 & i \\ -i & 0\end{pmatrix}$$
Written this way it is apparent that the hamiltonian can be expressed as a combination of [[Pauli Matrices]].
$$\mathcal{H} = c\sigma_{x} + b\sigma_{y} + a\sigma_{z} \equiv \frac{1}{2}\mathbf{\Omega}\cdot \vec{\sigma} =\mathbf{\Omega}\cdot \mathbf{S} $$
Where
$$\begin{align*}
&\mathbf{\Omega} = (2a,2b,2c)\\
&|\Omega|=\sqrt{(2a)^{2}+(2b)^{2}+(2c)^{2}}\\
&\theta=\arctan\left(\frac{c}{\sqrt{a^{2}+b^{2}}}\right)
\end{align*}$$
Time [[Time Evolution|evolution]] of the system, turns out to be a general rotation matrix in [[SU(2) Group |dim(2) representation]] of angle $\Phi=\frac{\Omega t}{2}$ at precession angle $\theta$ 
$$ U(t) = e^{-it\mathbf{\Omega}\cdot\mathbf{S}} =  R({ \mathbf{\Omega}}t) = \cos\left(\frac{\Omega t}{2} \right)\hat{I}+\sin\left(\frac{\Omega t}{2}\right)\large\hat\sigma_{n}$$
The corresponding eigenstates, are the $\ket{\uparrow}$ and $\ket{\downarrow}$ rotated around the $y$ (or $x$) axis by $\theta$.
$$\begin{align*}
&\ket{+}=R_{y}(\theta)\ket{\uparrow}= \left[\cos{\left(\frac{\theta}{2}\right)}-i\sin{\left(\frac{\theta}{2}\right)}\hat\sigma_{y}\right]\ket{\uparrow}=\begin{pmatrix}\cos{\theta/2} \\ \sin{\theta/2}\end{pmatrix}\\
&\ket{-}=R_{y}(\theta)\ket{\downarrow}= \left[\cos{\left(\frac{\theta}{2}\right)}-i\sin{\left(\frac{\theta}{2}\right)}\hat\sigma_{y}\right]\ket{\downarrow}=\begin{pmatrix}-\sin{\theta/2} \\ \cos{\theta/2}\end{pmatrix}
\end{align*}$$
___
## Heisenberg Picture

$$\mathbf{M} = \Big(\braket{\sigma_{x}}, \braket{\sigma_{y}}, \braket{\sigma_{z}}\Big)$$
The evolution of $\mathbf{M}$ in time is given by the following

$$\begin{align*}
M_{i}(t)=\braket{\sigma_{i}}(t) &= tr\Big({\sigma_{i} \rho(t) }\Big)\\
&= tr\Big({\sigma_{i} U(t)\rho_0 U^{\dagger}(t) }\Big)\\
&= tr\Big({U^{\dagger}(t)\sigma_{i} U(t)\rho_0}\Big) \ \ \text{[cyclic permutation]}\\
&=tr\Big({R^{\dagger}\sigma_{i} R\rho_0}\Big)\\
&=tr\Big({{R^{E}}_{ij}\sigma_{j}\rho_0}\Big) \ \ \text{[Algebraic Rotation]}\\
&= {R^{E}}_{ij} \ tr\Big({\sigma_{j}\rho_0}\Big)\\
&={R^{E}}_{ij} \braket{\sigma_{j}} = {R^{E}}_{ij}M_{j}(0)
\end{align*}$$
 