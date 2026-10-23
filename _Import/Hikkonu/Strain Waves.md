
Newton's 2nd law, applied to a mass element inside a material can be written as
$$
dF = dm \frac{\partial^2 u}{\partial t^2}
$$
Where $u(x,t)$ is the particle displacement field. The power on the mass elements is due to stress differences across its boundary

$$
dF = d\sigma A = \frac{\partial \sigma}{\partial x} dV
$$
Where $dV=Adx$. Plugging the two together and setting $\rho = \frac{dm}{dV}$ yields

$$
\frac{\partial \sigma}{\partial x} = \rho \frac{\partial^2 u}{\partial t^2}
$$

# Stress-Strain Relation

- Assuming a linear response (Hooke's law of elasticity) we have $\sigma=E\epsilon$ where $E$ is the material's Young modulus and $\epsilon$ is the strain.
- Assuming small particle displacement lets us write $\epsilon=\frac{\partial u}{\partial x}$

Plugging all of this for $\sigma$ in our main equation results in a wave equation for particle displacement

$$
\frac{\partial^2 u}{\partial x^2} = c^2 \frac{\partial^2 u}{\partial t^2}
$$
where $c = \sqrt{ E/\rho }$ is the speed of sound in the medium.

# Riemann Invariants


$$
\partial_{t}\begin{bmatrix}
v \\ \sigma
\end{bmatrix} = \begin{bmatrix}
0 & \frac{1}{\rho} \\ E & 0
\end{bmatrix}\cdot\partial_{x}\begin{bmatrix}
v \\ \sigma
\end{bmatrix}
$$

$$
	\mathbf{v}(\lambda=c)=\begin{bmatrix} 1 \\ \rho c\end{bmatrix}
$$

