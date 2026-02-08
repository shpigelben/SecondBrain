The Hydrogen is a [[Two Body Problem|two-body system]] consisting of a proton and an electron. The time independent [[Schrodinger Equation|Schrodinger equation]] for the hydrogen is given by
$$\mathcal{H}\psi=\left(-\frac{\hbar^{2}}{2\mu}\nabla^{2} - \frac{Ze^{2}}{4\pi\epsilon_{0}r}\right)\psi(r,\theta,\phi) = E \ \psi(r,\theta,\phi)\tag{1}$$
Where the potential energy is a central potential given by the [[Coulomb Force|Coulombic interaction]] between the electron and the proton. 

# Spherical Symmetry
Thanks to the spherical symmetry of the central potential hamiltonian the equation can be solved by the method of separation of variables. The [[Laplacian|Laplacian]] in spherical coordinates is as follows
$$\small -\frac{\hbar}{2\mu} \left[\frac{1}{r^{2}} \frac{\partial}{\partial r} \left(r^{2} \frac{\partial \psi}{\partial r}\right) + \frac{1}{r^{2}\sin{\theta}} \frac{\partial}{\partial \theta} \left(\sin \theta \frac{\partial \psi}{\partial \theta}\right) + \frac{1}{r^{2}\sin^{2}{\theta}}\frac{\partial^{2} \psi}{\partial \phi^{2}} \right] - \frac{Ze^{2}}{4\pi\epsilon_{0}r}\psi = E \psi$$
We appoint a new operator $\hat{L}^{2}$ which displays properties of quantized angular stated of the atom. It is defined as follows
$$\hat{L}^{2}\equiv-\hbar^{2}\left[\frac{1}{\sin{\theta}} \frac{\partial}{\partial \theta} \left(\sin \theta \frac{\partial \psi}{\partial \theta}\right) + \frac{1}{\sin^{2}{\theta}}\frac{\partial^{2} \psi}{\partial \phi^{2}}\right] \tag{2}$$
Such that the Schrödinger equation can be more tersely written as 
$$ \left[-\frac{\hbar}{2\mu} \frac{1}{r^{2}} \frac{\partial}{\partial r} \left(r^{2} \frac{\partial }{\partial r}\right) +\frac{\hat{L}^{2}}{2\mu r^{2}} - \frac{Ze^{2}}{4\pi\epsilon_{0}r}\right] \psi = E \psi \tag{3}$$
# Separation of Variables
To solve the equation by separating variables we suggest the following solution which consists of a radial part and an angular part 
$$\psi(r,\theta,\phi) = R(r)A(\theta,\phi)$$
Plugging the suggestion into $(3)$ and rearranging a bit we arrive at
$$ \frac{\hbar}{2\mu} \frac{1}{R} \frac{\partial}{\partial r} \left(r^{2} \frac{\partial R}{\partial r}\right) + \left(\frac{Ze^{2}r}{4\pi\epsilon_{0}} + Er^{2}\right) =  \frac{1}{A}\frac{\hat{L}^{2}A}{2 \mu} \tag{4}$$
in which the LHS has only radial dependence, and the RHS has only radial dependence. For this equality to hold, both side must be equal to the same constant. We call constant $\hbar^{2} \frac{{\ell(\ell+1)}}{2\mu}$. 


$$
\begin{align}
H\psi&=\left(-\frac{\hbar^{2}}{2\mu}\nabla^{2} - \frac{Ze^{2}}{4\pi\epsilon_{0}r}\right)\psi \\ \\
&=\small -\frac{\hbar}{2\mu} \left[\frac{1}{r^{2}} \frac{\partial}{\partial r} \left(r^{2} \frac{\partial \psi}{\partial r}\right) + \frac{1}{r^{2}\sin{\theta}} \frac{\partial}{\partial \theta} \left(\sin \theta \frac{\partial \psi}{\partial \theta}\right) + \frac{1}{r^{2}\sin^{2}{\theta}}\frac{\partial^{2} \psi}{\partial \phi^{2}} \right] - \frac{Ze^{2}}{4\pi\epsilon_{0}r}\psi = E \psi
\end{align}

$$