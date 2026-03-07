---
type: puzzle
discipline:
  - physics
field:
  - optics
  - electrodynamics
---

Ben Shpigel 204389449

The ordinary ($n_o(\lambda)$) and principal extraordinary ($n_{\parallel}(\lambda)$) refractive indices for LC E44 are: $$n_o(\lambda) = \sqrt{\frac{G_o\lambda^2 - 1}{G_{co}\lambda^2 - 1}}$$ $$n_{\parallel}(\lambda) = \sqrt{\frac{G_p\lambda^2 - 1}{G_{cp}\lambda^2 - 1}}$$ With a molecular tilt $\theta = 24^\circ$, the effective extraordinary refractive index $n_e(\theta, \lambda)$ is: 

$$
n_e(\theta, \lambda) = \frac{n_o(\lambda)n_{\parallel}(\lambda)}{\sqrt{n_o(\lambda)^2 \cos^2\theta + n_{\parallel}(\lambda)^2 \sin^2\theta}}
$$ We made sure that the plot aligns with the reference provided by the manual (see below)

![](../9.%20Misc/Attachments/Pasted%20image%2020250515010459.png)

The birefringence is $\Delta n(\lambda) = n_e(\theta, \lambda) - n_o(\lambda)$. The phase retardation $\Gamma$ for a wave plate of thickness $d$ is: $$\Gamma(\lambda, d) = \frac{2\pi \Delta n(\lambda) d}{\lambda}$$
![](../9.%20Misc/Attachments/Pasted%20image%2020250515010511.png)

For a polarized at an angle of $P=45^{\circ}$ w.r.t the fast axis the following plots provide the transmission at the analyzer for the different analyzer angles (rows) and the different plate thicknesses (columns). The equation used for this is
$$
T_{A,d}(\lambda) = \cos^{2}(A-P) - \sin(2A)\sin(2P)\sin^{2}(\Gamma_{\lambda,d}/2)
$$
![](../9.%20Misc/Attachments/Pasted%20image%2020250515010522.png)

The transmission of the Lyot filter which is made from plates of $2.5$, $5.0$ and $10.0$ [um] of LC E44 laid out in series. The total transmission is given by

$$
T = T_{2.5}\cdot T_{5.0}\cdot T_{10.0}
$$

![](../9.%20Misc/Attachments/Pasted%20image%2020250515013224.png)

A clear band-pass filter is formed between 500 and 600 [nm]