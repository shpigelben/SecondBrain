---
type: concept
discipline:
  - physics
field:
  - dynamical-systems
---

Phase Space is the space of all [[Dynamical Variables]] of a system, and consequently constitutes all possible configurations of the system. A solution of a given rule with certain initial conditions traces a trajectory in phase space. A __phase portrait__ can be drawn by plotting the different trajectories that arise from various initial conditions

![center|400](../4%20Misc/Attachments/image%20of%20phase%20portrait.png)

# Trajectories
__Trajectories in phase space cannot self-intersect__. If such a thing were possible, a solution of the system with initial condition at the point of intersection would have two possible futures which is not possible. Therefore trajectories, which at one point, return to a previous point of the past, will necessarily retrace their history again - periodic motion.

# Many Body & Statistical Mechanics
A system of $N$ particles can be thought of as having a $6N$ dimensional 
phase space ($\Gamma$ space), in which the entire state of a system is given by a single point which traces a trajectory as the state of the system evolves in time. 

It may also be thought of as a $6$ dimensional space ($\mu$ space) in which the state of the entire system is represented by $N$ points. Each point depicts the state of an individual particle.

In the latter representation, one can count the number of states bounded in regions of the phase space
$$\prod\limits_{i=1}^{N} \int \left(\frac{d\tau_{i}}{h}\right)^d$$ The index $i$ runs over all particles. A volume element in phase space is given by d$\tau = dpdx$, and $d$ is the number of spatial dimensions. 

Most commonly (in 3D) this integral is written as follows
$$\prod\limits_{i=1}^{N} \int \left(\frac{dp_{i}dx_{i}}{h}\right)^{3}$$
# Quantization of Phase Space
Quantization of phase space is necessary when considering systems of small scales in which quantum phenomena become dominant. This is mainly due to the [[Uncertainty Principle|uncertainty relation]] between two conjugate dynamical variables
$$\Delta x\Delta p \geq \frac{\hbar}{2}$$
which limits the highest possible resolution for a grid in phase space. Each unit in this grid in known as a __Plank cell__ 
