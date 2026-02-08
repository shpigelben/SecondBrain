#note #physics #statistical-mechanics #derivative| #kinetic-theory| #incomplete 

**two assumptions:**
1. the distribution is isotropic (no preferred direction) $$\braket{v}=\braket{v_{x}}=\braket{v_{y}}=\braket{v_{z}}$$
2. velocity components are independent$$p(v)=g(v_{x})g(v_{y})g(v_{z})$$
The function that satisfies these functional conditions is 
$$ \begin{align*}
p(v)= Ae^{-Bv^{2}}
\end{align*} $$
We get $A$ from normalization condition (integrated PDF should give 1), and $B$ is calculated by considering the [[Equipartition Theorem]] where
$$\frac{2}{m}\braket{E}=\braket{v^{2}}=\frac{3k_{\tiny B}T}{m}$$
Both procedures lead us to
$$p(\boldsymbol{v})= \left(\frac{m}{2\pi k_{\tiny B}T}\right)^{3/2}\exp{\left(- \frac{\beta mv^{2}}{2}\right)}$$
integrating over all solid angles (isotropic [[Probability Distribution Function|PDF]]) gives

$$p_{v}(v)=\int p(\boldsymbol{v})d\Omega = 4\pi \left(\frac{m}{2\pi k_{\tiny B}T}\right)^\frac{3}{2}v^{2}\exp{\left(- \frac{\beta mv^{2}}{2}\right)}$$
___
# Most Probable Speed
The most probable speed lies at the top of the distribution. Calculating $v_{p}$ for which $p_{v}(v_{p})=(p_{v})_{\text{max}}$ gives
$$v_{p}=\sqrt{\frac{2k_{\tiny B}T}{m}}$$