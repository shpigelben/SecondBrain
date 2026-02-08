#TD1 #Thermodynamics #statistical #osmosis #chemistry

Consider a dilute solution with a solvent $N_{1}$ and a solute $N_{2}$ such that 
![[OsmosisPNG.png]]
$$\begin{cases}
&N_{1} + N_{2}=N \\ \\   &\frac{N_{1}}{N}+\frac{N_{2}}{N} \equiv x_{1}+x_{2}=1 
\end{cases}\quad \text{where} \quad \begin{align*}
& N_{2}<<N_{1} \\\\
&x_2<<1
\end{align*}$$
In a dilute solution interactions are negligible and so the [[Thermodynamic Potentials|Gibbs Potential]] is approximately that of a [[Mixture of Ideal Gasses]]
$$\begin{align*}
G(T,P) &= \sum\limits_{i}N_{i}\mu_{i}(T,P)\\
&=\sum\limits_{i}N_{i}{\mu_{i}}^{(0)}(T,P) + N_{i}ln(x_{i})
\end{align*} $$
For the solvent we can write the chemical potential as follows
$$ \begin{align*}
\mu_{1}(T,P) &= {\mu_{1}}^{(0)}(T,P) + T\ln(x_{1})\\
&={\mu_{1}}^{(0)}(T,P) + T\ln(1-x_{2})\\
&\approx {\mu_{1}}^{(0)}(T,P) - Tx_{2} \tag{1}
\end{align*} $$
The container has a membrane permeable only to solvent molecules. The temperature is the same on both sides, but there is a difference in pressures. The chemical potential of the solvent should be homogenous throughout the container $\mu_{\text{left}}=\mu_{\text{right}}$.
$$ {\mu_{1}}^{(0)}(T,P_{1}) = {\mu_{1}}^{(0)}(T,P_{2}) - Tx_{2} \tag{2}$$
Rearranging (2) we can arrive at the following

$$ {\mu_{1}}^{(0)}(T,P_{2}) - {\mu_{1}}^{(0)}(T,P_{1}) = \int_{P_{1}}^{P_{2}} \left(\frac{\partial\mu_{1}}{\partial P}\right)_{T,N} dP = Tx_{2} \tag{3}$$
We recognize the molar volume which is approximately constant for liquids as
$$ \left(\frac{\partial\mu_{1}}{\partial P}\right)_{T,N} = V_{m} = \frac{V}{N}\approx\text{const} \tag{4}$$
The molar volume is constant and can be taken out of the integral in (3) to give
$$ V_{m}(P_{2}-P_{1})=Tx_{2} \quad \Rightarrow \quad (P_{2}-P_{1})= \frac{TN_{2}}{N} \frac{N}{V} = Tn_{2} \tag{5}$$
Where $n_{2}$ is the particle volume density. Finally we get the osmotic pressure
$$ \large\boxed{\begin{align*} \\ \quad
 \Delta P=Tn_{2} \quad \\\
\end{align*}}$$
___