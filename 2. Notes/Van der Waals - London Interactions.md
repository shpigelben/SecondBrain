#note #physics #quantum #derivative| #chemistry #condensed-matter 

Consider two atoms of an [[Crystals of Inert Gases|inert gas]] at a separation distance of $R >> r_{atom}$. Were the charge distribution of electrons around the atoms rigid, there would be no interaction between the atoms, since the electric force cancels outside the energy shell. In such a case the gas would display no [[Cohesion]].

But random movement of electrons in the outer shells induce momentary [[dipole moments]]. These dipole moments act on one another and form an interaction between the atoms.

___
> [!NOTE]- Derivation
> We model the two atoms as two harmonic oscillators $\small1 \ \& \ 2$, each with two charges $\pm e$ separated by $x_{1} \ \& \ x_2$. Let the [[Time Independent Perturbation Theory|unperturbed]] hamiltonian of the system is given by $\mathcal{H}_0$ $$\mathcal{H}_0 = \frac{1}{2m}{{p_1}^{2}}+ \frac{1}{2}C{x_1}^{2} + \frac{1}{2m}{{p_2}^{2}}+ \frac{1}{2}C{x_{2}^{2}}\tag{1}$$ Each oscillator is assumed to have frequency $\omega_0$ of the strongest optical absorption line of the atom. thus, $C=m{\omega_0}^2$. Let the [[coulomb]] interaction be given by $\mathcal{H}_1$ $$\mathcal{H}_{1} = e^{2}\left(\frac{1}{R} + \frac{1}{R+x_1-x_{2}} - \frac{1}{R+x_{1}} - \frac{1}{R+x_{2}}\right) \approx -\frac{2e^{2}x_{1}x_{2}}{R^{3}} \tag{2} $$ The total hamiltonian $\mathcal{H} = \mathcal{H}_{0}+\mathcal{H}_{1}$ is diagonalized in the basis of the symmetric and anti symmetric position states $x_{s} \ \& \ x_a$ and momentum state  $p_{s} \ \& \ p_a$ such that the diagonalized $\mathcal{H}$ in the new basis is given by $$\mathcal{H} = \left[\frac{{p_{s}}^2}{2m}+ \frac{1}{2}\left(C- \frac{2e^{2}}{R^{3}}\right) {x_s}^2 \right]+ \left[\frac{{p_{a}}^2}{2m}+ \frac{1}{2}\left(C+ \frac{2e^{2}}{R^{3}}\right) {x_a}^2 \right]\tag{3}$$ the two frequencies by inspection of $(3)$ are found to be $$\omega_{a,b} = \left(\frac{C\pm \frac{2e^{2}}{R^{3}}}{m}\right)^{1/2}=\omega_{0} \left[ 1 \pm \frac{1}{2} \left(\frac{2e^{2}}{CR^{3}}\right) - \frac{1}{8} \left(\frac{2e^{2}}{CR^{3}}\right)^{2} + \ \dotsm \right]$$ The energy of the [[Quantum Harmonic Oscillator]] is given by $\ E_{n}= \hbar\omega\left(n+ \frac{1}{2}\right) = \hbar(\omega_{a} + \omega_{s})\left(n+ \frac{1}{2}\right)$ $$ E_{0} = \hbar \omega_{0}\left[ 1 - \frac{1}{8} \left(\frac{2e^{2}}{CR^{3}}\right)^2 \right] $$
___

The ground energy of the coupled oscillators model is given by

$$\boxed{ E_{0} = \hbar \omega_{0}\left[ 1 - \frac{1}{8} \left(\frac{2e^{2}}{CR^{3}}\right)^{2} \right] = \hbar \omega_{0}\left( 1 - \frac{A}{R^{6}}\right) } $$

The ground state has an added term that is of order $O\left(\frac{1}{R^{6}}\right)$ and is therefore only relevant when the oscillators are very close. It vanishes when separation distance $R$ between the oscillators is larger than the typical scale of the individual oscillators. 

$$\ce{Na + 1.4ev -> Na+ + e-}$$


