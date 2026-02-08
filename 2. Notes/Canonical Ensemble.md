 #note #physics #statistical-mechanics #concept

The canonical ensemble is a [[Statistical Ensemble | statistical ensemble]] that represents the possible states of a [[Thermodynamic System | thermodynamic system]] in [[Thermodynamic Equilibrium| thermal equilibrium]] with a heat reservoir at a fixed temperature. The system exchanges heat with the reservoir and so the canonical ensemble allows for states of the system with different total energies.

# Derivation

- We consider an isolated system (the universe $\mathcal{U}$) in a certain macrostate $(U_{u},X_{u},N_{u})$. The universe is in an internal thermodynamic equilibrium and therefore represented by the [[Microcanonical Ensemble]]
- We are interested in a small part of that universe, a subsystem $\mathcal{A}$
- The rest of the universe is $\mathcal{U}-\mathcal{A}=\mathcal{R}$ the reservoir
- Since the universe is in internal equilibrium, $\mathcal{A}$ and $\mathcal{R}$ are in mutual thermodynamic equilibrium. That means that they can exchange energy.

A certain microstate of the universe $\xi_{u}$ corresponds to the constant energy $E_{u}=U_{u}$, but microstates of the composite systems that make it up $\xi_{a}+\xi_{r}=\xi_{u}$ correspond to energies $E_{a}$ and $E_{r}$ which are not constant but must always satisfy $$\begin{align*}
&U_{u}=E_{a}+ E_{r}\\
&U_u=U_a+U_{r}
\end{align*} \tag{1}$$Where $U_\alpha$ is the energy expectation value for the $\alpha$ microstate. The probability of the system of being a microstate $\xi_{u}$ is given by
$$p_{u}=\frac{1}{\Gamma(\xi_{u})}=\large e^{-S(U_{u},X_{u},N_{u})}$$
The probability of subsystem $\mathcal{A}$ for being in microstate $\xi_{a}$ is given by
$$ p_{a}=\frac{1}{\Gamma _{a}}= \frac{\Gamma_{r}}{\Gamma_{a}\Gamma_{r}} 
 = \frac{\Gamma_{r}}{\Gamma_{u}} = \frac{e^{S_{r}(E_{r})}}{e^{S_{u}(U_{u})}}= e^{S_{r}(U_{u}-E_{a})-S_{u}(U_{u})} \tag{2}$$
 Next we Taylor expand the exponent of (2) by assuming small fluctuations in the energy of system A, namely$|U_{a}-E_{a}|<<1$ 
$$\small \begin{align*}
S_{r}(U_{u}-E_{a})-S_{u}(U_{u}) &= S_{r}(U_{r}+U_{a}-E_{a})-S_{u}(U_{r}+U_a)\\
&= S_{r}(U_{r}+U_{a}-E_{a})-S_{r}(U_{r}) - S_{a}(U_{a})\\
&\approx S_{r}(U_{r}) + (U_{a}-E_{a}) \frac{\partial S_{r}}{\partial U_{r}} - S_{r}(U_{r}) - S_{a}(U_{a}) \\
&= (U_{a}-E_{a}) \frac{1}{T} - S_{a}(U_{a})\\
&= \frac{U_{a}-S_{a}T-E_{a}}{T} = \frac{{F-E_{a}}}{T} \tag{3}
\end{align*} $$
In the first transition we use the additivity of the entropy. In the third we recognize the definition of the temperature of the reservoir $T_{r}=T$ since the whole system is in __thermal__ equilibrium and thus all subsystems are at equal energy. Lastly we denote $U_{a}\equiv U$ and $S_{a}(U_{a})=S$ and in the last equation we get the free energy of system A.
___
#### Canonical Partition Function

$$Z = e^{-\beta F} = \sum\limits_{a} e^{-\beta\mathcal{E}_{a}}$$
$$1 = \sum\limits_{a} \frac{e^{-\beta \mathcal{E}_{a}}}{Z} \equiv \sum\limits_{a}p_a$$
$$ \boxed{\begin{align} \\ \quad
U = \braket{E} = \sum\limits_{a}p_{a}\mathcal{E}_{a} = 
\displaystyle \frac{\sum\limits _{a} \mathcal{E}_ae^{-\beta \mathcal{E}_{a}}}{\sum\limits_{a} e^{-\beta \mathcal{E}_{a}}} = 
-\frac{\partial}{\partial\beta} \ln{\left(\sum\limits_{a} e^{-\beta \mathcal{E}_{a}}\right)} = -\frac{\partial(\ln{Z})}{\partial\beta} \quad \\\
\end{align}}
$$

# Continuous Energy

$$\begin{align*}Z = \sum\limits_{a} e^{- \beta \mathcal{E}_{a}
} \stackrel{\small(2)}{=} \sum\limits_{\mathcal{E}} \Gamma_{\small\mathcal{E}} \ e^{-\beta \mathcal{E}}
\longrightarrow &\int e^{-\beta \mathcal{E}} d \Gamma_{\small\mathcal{E}}\\
= &\int e^{-\beta \mathcal{E}} \left(\frac{\partial \Gamma_{\small\mathcal{E}}}{\partial \mathcal{E}}\right)d\mathcal{E}\\
\equiv &\int e^{-\beta \mathcal{E}} \  \rho_{\small \mathcal{E}} \  d\mathcal{E}
\end{align*} $$

