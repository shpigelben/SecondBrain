#SS1  #solid #state 
#molecular #bond #attractive 

The [[Lennard Jones Potential | repulsive interactions]] between ions in an [[Crystals of Inert Gases|inert gas]] are similar to those between atoms in inert gases. In ionic crystals (crystals with ionic constituents) the ionic bond makes the significant contribution to the [[cohesive energy]] whereas, the [[Var der Waals - London Interactions|dipole-dipole]] interactions are negligible. 

We denote $U_{ij}$ the interaction between ions $i$ and $j$. The interactions involving ion $i$ are given by
$$U_{i}=\sum_{j\neq i} U_{ij} \longrightarrow U_{T} = 2N_{ions} U_{i} \ \ / \ \ N_{molecules}U_{i} $$
The potential $U$ is supposed to be written as a sum of a repulsive potential and a coulomb potential, thus
$$ U_{ij}=\lambda e^{\frac{-r_{ij}}{\rho}} \pm \frac{q^{2}}{r_{ij}} $$
where $\rho$ and $\lambda$ are empirical parameters.

We move to a description of nearest neighbors. We say that nearest neighbors are separated by $R$ and therefore $r_{ij} =p_{ij} R$. When we include the repulsive term __only__ for nearest neighbors and neglect it for further interactions we get the following
$$ U_{ij} = \begin{cases}
\lambda \large e^{-\frac{R}{\rho}} - \frac{q^{2}}{R} \quad \text{\small (nearest neighbors)} \\  \large
\pm \frac{q^{2}}{p_{ij}R} \quad\quad\quad \text{\small (further interactions)} \\
\end{cases}$$
Therefore the net interaction potential will be given by

$$ U_{\small tot} = NU_{i}= N\left(z\lambda e^{\small\frac{-R}{p}} - \frac{\alpha q^{2}}{R} \right) $$
where $z$ is the number of nearest neighbors of in ion, and 
$$\boxed{\alpha \equiv \sum\limits_{j} \frac{(\pm)}{p_{ij}} = \textbf{Madelung Constant}}$$

___
At equilibrium separation $dU_{\small tot}  / dR=0$ so that

$$ N \frac{dU_{i}}{dR} = - \frac{Nz\lambda}{\rho}e^{\frac{-R}{\rho}} + \frac{N\alpha q^{2}}{{R_0}^{2}} \stackrel{!}{=} 0 $$

$$ {R_{0}}^{2} e^{\small \frac{-R_{0}}{\rho}} = \frac{\rho\alpha q^2}{z\lambda}   $$




$$\ce{Na + 5.14 {eV} -> Na+ + e-}$$