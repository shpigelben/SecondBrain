---
type: concept
discipline:
  - physics
field:
  - thermodynamics-statistical-mechanics
---

- [[Electrolytes]] are substances that ionize when dissolved in certain solvents.
- An Ionized solution has the capacity to conduct electricity or create an electric potential gradient in the system.

___
# Electrochemical Potential
Lets assume a mixture of N particles in which there are $m$  charged and $N-m$ are neutral. The charges are given as $q_{j}=ez_{j}$ where $z_{j}$ is the valency (charge of the ion) and $e$ is the unit of charge of the proton. The internal energy density for a workless mixture is
$$ du=Tds + \sum\limits_{j=1}^{m}{\mu_{j}}^{e}dn_{j} + \sum\limits_{j=m+1}^{N}{\mu_{j}}dn_{j} $$
Where all quantities above are per unit volume (molar?)

In the presence of electric potential, the definition of [[Chemical Potential]] must be extended to include the energetic contribution required to insert a charged particle to the mixture. __The Electrochemical Potential__
$$ {\mu_{j}^{e}=}\mu_{j}+ z_j(\phi F) $$
$F$ are __Faraday__ units. An equilibrium occurs when the electrochemical potentials of each species are equal

___

For a general reaction of Electrolytic solute in a neutral solvent we write 
$$\ce{ A_{(\nu_{a})} C_{(\nu_{c})}   <=>[H2O] \nu_{a}A^{\small-} +\nu_{c}C^{\small +} }$$
Where $A$ is the anion and $C$ is the cation, and the $\nu$ are the corresponding [[Stoichiometry|stoichiometric]] coefficients. In such a case, the condition for equilibrium would be 
$$ \mu_{ac}=\nu_a{\mu_{a}}^{e} + \nu_c{\mu_{c}}^{e} $$
On the left is the electrochemical of the undissociated salt, and on the right the ones of the dissolved ions respectively. If the charges of the ions are $z_{j}e$, neutrality of the mixture requires $\nu_{a}z_{a} + \nu_{a}z_{a}=0$. The electrochemical potential of the salt in the solution is given by
$$\begin{align*}
\mu_{ac}{\small(P,T,x_{ac})} &= {\mu_{ac}}^{(0)}{\small(P,T)}+RT\ln{\alpha_{ac}}\\
&={\mu_{ac}}^{(0)}{\small(P,T)}+RT( \nu_{a} \ln{\alpha_{a}} + \nu_{c} \ln{\alpha_{c}})
\end{align*}  $$
${\mu_{ac}}^{(0)}$ is proportional to the energy required to insert one salt molecule to pure water.

$\alpha_{ac}$ is called the __activity__ and it satisfies $\alpha_{ac} = ({\alpha_{a}})^{\nu_{a}}({\alpha_{c}})^{\nu_{c}}$ as portrayed above. It has been found that in the limit of dilute solutions $\alpha_{j}=f_{j}n_{j}$ . again - n is volumetric concentration of a certain ion, and $f$ is called the __activity coefficient__ which is $1$ for ideal solutions in which $n\to 0$. and $\alpha_{j}=n_{j}$.

So in the limit of dilute solution the electrochemical potential of each type of ion is given by
$$ {\mu_{j}}^{e}= {\mu_{j}}^{(0)}+RT\ln{n_{j}} + z_{j}(\phi F) $$
___
# Batteries
A simple battery cell consists of two half-cells each of which contains an electrode immersed in a dilute (aqueous) solution. On of the ions in the salt is of the immersed electrode.

___
## One half-cell
In a $\text{AgNO}_{3}$ battery, with silver electrodes (Ag), equilibrium is achieved when the dissolved ions on the electrode $\text{Ag}^{+}$ and the ions in the solution ${\text{NO}_{3}}^{-}$ .

- either silver ions dissolve into the solution leaving the electrode negatively charged with excess electrons
- or silver ions attach to the electrode giving it a net positive charge

In either case a charged bilayer is set at the interface between the electrode and the solution inducing a potential difference between the two.

___
## Two identical one-half cells (Nernst Equation)

Now consider two half-cells each with silver electrodes (half-cells I&II). At equilibrium the electrochemical potential of the ions in the solution and the ions on the electrode must be equal

the electrochemical potential of the electrode ions in cell I
$${\mu^{I}}_{Ag^{+}}(s) = {\mu^{0,I}}_{Ag^{+}}(s) + z(\Phi_{I}F)$$
and for the solution and I
$${\mu^{I}}_{Ag^{+}}(l) = {\mu^{0,I}}_{Ag^{+}}(l) + RT\ln{n_{I}}+ z(\phi_{I}F)$$
Where $s$ and $l$ stand for solid and liquid.
The conditions for equilibrium in each half-cell are
$$\begin{align*}
&{\mu^{I}}_{Ag^{+}}(s)={\mu^{I}}_{Ag^{+}}(l)\\
&{\mu^{II}}_{Ag^{+}}(s)={\mu^{II}}_{Ag^{+}}(l)
\end{align*}$$
Which gives 
$$  \begin{align*}
&{\mu^{0,I}}_{Ag^{+}}(s) + z(\Phi_{I}F) = {\mu^{0,I}}_{Ag^{+}}(l) + RT\ln{n_{I}}+ z(\phi_{I}F)\tag{1}\\
&{\mu^{0,II}}_{Ag^{+}}(s) + z(\Phi_{II}F) = {\mu^{0,II}}_{Ag^{+}}(l) + RT\ln{n_{II}}+ z(\phi_{I}F)\tag{2}
\end{align*}$$
For similar electrodes and in the limit of dilute solutions
$$ \begin{align*}
&{\mu^{0,I}}_{Ag^{+}}(s) = {\mu^{0,II}}_{Ag^{+}}(s)\\
&{\mu^{0,I}}_{Ag^{+}}(l) = {\mu^{0,II}}_{Ag^{+}}(l)
\end{align*} $$
When electrical bridge is made between the two solutions 

$$\phi_{I}=\phi_{II} $$

Concentrations and temperatures may not be the same. We can now subtract (1) from (2) and get the __Nernst Equation__
$$\large\boxed{\Delta\Phi=\Phi_{I}-\Phi_{II} = \frac{RT}{zF}\ln{\left(\frac{n_{I}}{n_{II}}\right)} }$$
Which relates the potential difference in the electrodes to the difference in concentration of solution ions.!
___
Hydrogen-Metal cell

![[../4 Misc/Attachments/ElectrolyticBatteryimage.png]]

Equilibrium conditions for metal half-cell yield

$$ \Phi = \Phi^{0} + \frac{RT}{zF}\ln{n} $$
- $\Phi$ - potential of the metal electrode (for ion concentration $n$)
- $\Phi^{0}$ - standard electrode potential (can be used to compute the potential difference between two metal electrodes ${\Phi^{0}}_{Zn}-{\Phi^{0}}_{Cu}$)
  
___
# Cellular potential and the Nernst equation  
