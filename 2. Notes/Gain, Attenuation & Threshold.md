#note #physics/optics 

The intensity of a beam as it travels in the $z$ direction through a medium follows an exponential trend
$$I(z) = I(0){\large e^{\sigma(\nu)Nz }}$$
Where
$$\sigma(\nu)=\frac{\lambda^{2}}{8\pi \tau_{sp}}g(\nu) \quad \quad N = N_{2}- \frac{g_{2}}{g_{1}}N_{1}$$
As light bounces back and forth between a couple of mirrors, $R_{1}$ and $R_{2}$, that sandwich a gain medium (of length $\ell$) its intensity changes 
$$\begin{align*}
I_{1}&\to {\large e^{\sigma(\nu)N\ell}}I_{0}\equiv G(\nu)I_{0}\\\\
I_{2} &\to R_{2}I_{1} =R_{2}G(\nu)I_{0}\\\\
I_{3} &\to {\large e^{\sigma(\nu)N\ell}}I_{2} =R_{2}G^2(\nu)I_{0}\\\\
I_{4} &\to R_{1}I_{3} =R_{1}R_{2}G^2(\nu)I_{0}
\end{align*}$$
By demanding that after a cycle the intensity remains the same (namely $I_{0}=I_{4}$) for a given $\sigma$ and $\ell$ the population inversion threshold for lasing can be extracted 
$$N_{th}=\frac{1}{\sigma \ell}\ln\left( \frac{1}{\sqrt{ R_{1}R_{2} }} \right)$$