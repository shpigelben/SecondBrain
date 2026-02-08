#note #mechanics 

The momentum of an object can most generally be written as
$$\mathbf{p}(t)=m(t)\mathbf{v}(t)$$
	 Ejection of a mass element $dm$ has a consequent increase in velocity $dv$, and the total momentum after a time $dt$ is
$$\begin{align*}
\mathbf{p}(t+dt)&= m(t+dt)\mathbf{v}(t+dt)\\
&= \underbrace{ (m-dm)(\mathbf{v}+\mathbf{dv}) }_{ \text{rocket} } + \underbrace{ \ dm \ \mathbf{v}_{e} \  }_{\text{exhaust}}
\end{align*}$$
Where $\mathbf{v}_{e}$ is the **exhaust velocity** in the lab frame. Under the assumption the exhaust velocity relative to the rocket, $\tilde{\mathbf{v}}_{e}$, is constant it makes better sense to have it in the equation instead.
![center|500](../9.%20Misc/attachments/Pasted%20image%2020240603183801.png)

Using Galilean transformation the relationship to the rocket velocity is as follows.
$$\mathbf{v}_{e}=\mathbf{v}+\tilde{\mathbf{v}}_{e}$$
the equation above becomes
$$\mathbf{p}(t+dt)=m \mathbf{v} + m\mathbf{dv} + dm \tilde{\mathbf{v}}_{e} - \cancelto{}{dm \mathbf{ dv}}$$
where the second order term is neglected. We can now calculate the impulse
$$\mathbf{dp} = \mathbf{p}(t+dt)-\mathbf{p}(t)= m\mathbf{dv} + dm \ \tilde{\mathbf{v}}_{e}$$
# No External Forces

$$
\int\limits_{m(0)}^{m(t)} \frac{dm}{m} = - \frac{1}{\tilde{v}_{e}}\int\limits_{v(0)}^{v(t)}  dv 
$$
