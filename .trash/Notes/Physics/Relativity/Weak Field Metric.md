# $$\textbf{Newtonian Metric}$$
#GR1 #gravity #geometry #metric 
___
Also known as the __static weak field metric__, is a solution to the linearized [[Einstein Field Equation]]. It is given by

>$$\scriptsize g_{\mu\nu} = 
\begin{pmatrix}
\ -\left(1 + \frac{2\Phi(x^i)}{c^2} \right) & 0 & 0 & 0 \ \\
\ 0 & \left(1 - \frac{2\Phi(x^i)}{c^2} \right) & 0 & 0 \ \\
\ 0 & 0 & \left(1 - \frac{2\Phi(x^i)}{c^2} \right) & 0 \ \\
\ 0 & 0 & 0 & \left(1 - \frac{2\Phi(x^i)}{c^2} \right) \ \\
\end{pmatrix}$$


<br>

and an interval is given by

$$ g_{\mu\nu}dx^{\mu}dx^{\nu} = ds^2 = -\left(1 + \frac{2\Phi(x^i)}{c^2} \right)(cdt)^2 +
\left( 1 - \frac{2\Phi(x^i)}{c^2} \right)(dx^2 + dy^2 + dz^2)$$

The potential $\Phi(x^i)$ is the solution to the Newtonian equations of motion $\nabla^2 \Phi =  - 4\pi G\mu(x^i)$ where $\mu$ is the mass density distribution.

The Newtonian metric sets, among other things, to introduce the effect of gravitational time dilation in a geometrical manner. Let see how gravitational time dilation is reproduced from this purely geometrical definition.

Consider the following system, where two signal are being sent from $x_A$ to $x_B$ on the $x$ coordinate, at coordinate time interval $\Delta t$, which is the same in the two locations, and a proper time interval $\Delta\tau_A$ and $\Delta\tau_B$ respectively. 

![[weak field.png | 500]]

the proper time in each coordinate is given by

$$ \Delta\tau^2 = -\frac{\Delta S^2}{c^2} $$

since $\Delta x =\Delta y = \Delta z = 0$ in each frame we get

$$ \Delta\tau_A = \sqrt{1 + \frac{2\Phi_A}{c^2} }\Delta t \approx \left(1 + \frac{\Phi_A}{c^2}\right)\Delta t $$
$$ \Delta\tau_B = \sqrt{1 + \frac{2\Phi_B}{c^2} }\Delta t \approx \left(1 + \frac{\Phi_B}{c^2}\right)\Delta t $$
$$\boxed{\Delta\tau_B = \Delta\tau_A\left(1 + \frac{\Phi_A}{c^2}\right)^{-1}\left(1 + \frac{\Phi_B}{c^2}\right) \approx
\Delta\tau_A\left(1 + \frac{\Phi_B-\Phi_A}{c^2}\right)}
$$

___
$$\textbf{application of the variational principle using}$$
$$ \textbf{the Newtonian metric yields the the familiar} $$
$$\textbf{Newtonian gravity.}$$
___