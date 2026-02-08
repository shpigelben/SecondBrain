#dynamical-systems #thermodynamics #many-body #phase-transitions #order-to-disorder #universality

Universality is the observation that some [[Dynamical System|dynamical systems]] that might be completely unrelated (in terms of [[dynamical variables|dynamical variables]]) exhibit behaviors that are surprisingly similar. __Critical phenomena__ are such behaviors that penetrate across the barrier of different systems, and they refer to a certain divergence of the system near a critical point. The manifestation of such critical phenomena distinguish one class of systems from the next, such classes are referred to as __universality classes__

## universality classes in phase transitions
There are three main factors that universality classes share
1. range of interactions
2. symmetry (of the hamiltonian near the critical point ?)
3. dimensionality (spatial dimensions ?)
If two systems, regardless of physics, share these three criterions they are said to belong to the same universality class and therefore display similar behavior next to their critical point

## critical exponents 
Critical exponents help us to formally relate a system to a certain universality class, in our case the [[Phase Transition|continuous phase transitions]] They are defined for a physical quantity of a system given by $f(x)$ and a critical point $x_{c}$ as follows
$$\tau \equiv \frac{T-T_{c}}{T_{c}}$$
$$\theta_{\pm}\equiv\lim_{\tau\to 0} \frac{\ln |f\small(\tau)|}{\ln|\tau|} \longrightarrow f(\tau)\propto |\tau|^{\theta} $$
$$\theta_{\pm} = \lim_{x\to x^{\pm}_{c}} \frac{\ln{f(x)}}{\ln{(x-x_{c})}} \longrightarrow f(x)\propto |x-x_{c}|^{\theta}$$
where the $\pm$ refers to whether we approach $x_{c}$ from the right or from the left. We consider cases where $\theta_{+}=\theta_{-}$. 
- It is easy to see that negative critical exponent leads to divergence of $f$ whereas a positive one leads to the vanishing of $f$ while for both cases. The closer $\theta$ is to zero, the sharper the vanishing or divergence of $f$. 
- Systems that belong to the same universality class, often have the same exponents to analogous quantities that are denoted by $\alpha$, $\beta$, $\gamma$, $\delta$. 
- The method by which we obtain the critical exponents involves approximating the $f(x)$ around $x_{c}$

| [[Liquid-Gas Phase Transition\|Liquid-Gas System]] | [[Magnetism\|Magnetic System]]                | Critical Exponents                                    |
| -------------------------------------------------- | --------------------------------------------- | ----------------------------------------------------- |
| $C_{v}$ heat capacity                              | $C_{h}$ heat capacity                         | $\propto(T-T_{c})^{-\alpha}$                          |
| $v_{g}-v_{\ell}$ specific volume                   | $m=m_{\uparrow} + m_\downarrow$ magnetization | $\propto(T-T_{c})^{\beta}$                            |
| $\kappa_{\small T}$ compressibility                | $\chi_{\small T}$ susceptibility              | $\propto(T-T_{c})^{-\gamma}$                          |
| $p-p_{c}$ pressure                                 | h magnetic field                              | $\propto (V-V_{c})^{\delta}$ or $\propto(m)^{\delta}$ |

___
## Success & Failure of the Mean-Field Theory
The theoretical derivation of the exponents, which relies on [[Mean Field Approximation]], seems to not agree with experimental results in certain dimensionalities. While it might be considered a failure of the mean-field approximation, the calculation of the exact value of the exponents is not their intended purpose. What MF theory succeeds in beautifully, is by showing that two systems (e.g. magnetic & liquid gas) have the same values for corresponding exponents, thereby relating them to the same universality class

## Peierls Argument & Critical Dimensionality
The discrepancy between the theoretical and experimental value of the critical exponents fails dramatically under certain dimensionality specific to certain systems which we call __upper critical dimension__. There is also the __lower critical dimension__ under which no phase transition can occur. These critical dimensions are universality-class dependent.


BBBBBBBBBBBBBBBB
BBBBBBBBBBBBBBBB
BBBBB|AAAAA|BBBBB
BBBBB|AAAAA|BBBBB
BBBBB|AAAAA|BBBBB
BBBBBBBBBBBBBBBB
BBBBBBBBBBBBBBBB

