---
type: concept
discipline:
  - physics
field:
  - thermodynamics-statistical-mechanics
---

The first law of thermodynamic is simply the statement that energy is always conserved. It also defines the concept of heat to an extent.

> [!NOTE] Definition
> The internal energy of an isolated system (with constant number of particles) can be changed by  
 > - the transfer of heat 
>  - work done by the system, or being done on the system
 
$$ \Delta U = Q \pm W $$
and in the more practical differential form
$$dU = \delta Q \pm \delta W$$ 
it is $+W$ when the work is done **on** the system
and  $-W$ when the work is done **by** the system

There are several ways of describing $\delta W$ depending on the system (see [[Energy Transfer#Conjugate Variables]]). If there are $n$ ways to perform work on the system the internal energy is given by 
$$dU = \sum\limits_{i=1}^{n}\mathcal{J}_{i}dX_{i} + TdS$$
There are $n+1$ independent [[State Variables]] and so there are $n+1$ different ways of representing the system using them.
$$dS = \frac{dU}{T} - \frac{1}{T}\sum\limits_{i=1}^{n}\mathcal{J}_{i}dX_{i}$$
 
