#note #physics #condensed-matter #model

Law of Dulong & Petit predicts that the [[Heat Capacity]] of __most__ solids at __room temperature__ is$$ C = 3Nk_{\small B}T $$Where $N$ is the number of particles in the solid. Heat Capacity can be calculated in either constant volume or constant temperature. In solids however, the distinction is moot since
$$
C_p-C_{\small V} = \frac{VT\alpha^{2}}{\kappa}\approx0
$$
Where $\alpha$ is the coefficient of [[Thermal Expansion|thermal expansion]] and $\kappa$ is the isothermal [[Response Function|compressibility]]  and since $\alpha$ is very small 
$$C_{p} \approx C_{\small V}\equiv C$$
And so the heat capacity for solids, is simply given by
$$C = \frac{\partial U}{\partial T} \tag{1}$$
This law is best supported by the equipartition theorem of statistical mechanics

# Derivation
One can use the [[Equipartition Theorem |equipartition theorem]] to show the result of this law very simply. In the [[Classical Theory of Harmonic Crystals|harmonic model of crystals]], the atoms are considered to be in harmonic potential. So there are _three coordinate_ (or vibrational) degrees of freedom due to the harmonic potential - $x,y,z$ - and _three translational_ degrees of freedom - $p_{x},p_{y},p_{z}$ . The equipartition theorem states that there are  $\displaystyle \frac{1}{2}k_{\small B}T$ in the heat capacity for every degree of freedom of the atom, therefore in an $N$ atomic solid the heat capacity is
$$ C = N \left(\frac{6}{2}K_{\small B}T\right) = 3Nk_{\small B}T $$
> [!NOTE]- Derivation
> We describe a crystal using a [[Canonical Ensemble]] which allows for transfer of energy, but not of particles. The internal energy density in terms of the canonical partition function is given by$$u = \frac{1}{V} \frac{\displaystyle \int d\Gamma \ \mathcal{H} e^{-\beta\mathcal{H}}}{\displaystyle\int  d\Gamma \  e^{-\beta\mathcal{H}}} = - \frac{1}{V} \frac{\partial}{\partial\beta} \ln{\left[ \ \int d\Gamma \ e^{-\beta\mathcal{H} }\right]} \tag {2}$$where $d\Gamma$ is a generalized volume element in an $n$ dimensional phase space$\quad d\Gamma = dx_{1}dx_{2}\dots dx_ndp_{1}dp_{2}\dots dp_{n}\quad$, and $\mathcal{H}$ is the hamiltonian of the system as derived in the [[Classical Theory of Harmonic Crystals]]$$\mathcal{H} = \sum\limits \frac{p^{2}}{2m} + U_{\small eq} + U_{\small harm} \tag{3}$$Let try and evaluate the horrid $(2)$ with the hamiltonian of $(3)$ with the slight change of variables $u \longmapsto\beta^{-1/2}u$  and  $p \longmapsto\beta^{-1/2}p$  in the second equality$$\begin{align*}\int d\Gamma \ e^{-\beta \mathcal{H}} = &\int d\Gamma \ \exp{\Bigg[-\beta\left(\sum\limits \frac{p^{2}}{2m} +U_{\small eq} + \frac{1}{2}\sum\limits_{\mu \nu}u_{\mu}D_{\mu \nu }u_{\nu} \right)\Bigg]} \\=& e^{-\beta U_{\small eq}} \beta^{-3N} \int d\Gamma' \exp{\left[-\sum\limits \frac{p^{2}}{2m} -U_{\small harm}  \right]}\\=& e^{-\beta U_{\small eq}} \beta^{-3N} C\end{align*}$$In the last equality, we recognize that the result of the integral is independent of $\beta$ , and we therefore treat it as a constant in the context of calculating the internal energy through $(2)$, so finally $$ u =  - \frac{1}{V} \frac{\partial}{\partial\beta} \ln{\left[  e^{-\beta U_{\small eq}} \beta^{-3N} C  \right]} = - \frac{1}{V} \frac{\partial}{\partial\beta}\bigg(-\beta U_{\small eq}-3N\ln{\beta}+\ln{C} \ \bigg)$$$$ u = \frac{1}{V}\left(U_{\small eq} + \frac{3N}{\beta}\right) = u_{\small eq} + 3nk_{B}T\tag{3}$$Finally, differentiating $(3)$ with respect to temperature by the definition of constant volume heat capacity, we arrive at $$\boxed{\begin{align*} \\ \quad c = 3nk_{B} = 3\mathcal{R} \quad \\&\end{align*}}$$

$$\boxed{\begin{align*} \\ \quad
c = 3nk_{B} = 3\mathcal{R} \quad \\
&
\end{align*}}$$
Where $\mathcal{R}$ is the [[gas constant]].
___
# Problems With the Law of D-P
It appears that the law of Dulong and petite is not true in the following cases:

1. Very low temperatures $T\ll T_{\text{room}}\to \frac{C}{N}\ll 3k_{\small B}T$
2. For rare materials (Diamonds for examples), the heat capacity $\frac{C}{N}\ll 3k_{\small B}T$ even in room temperature