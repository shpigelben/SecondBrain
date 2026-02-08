#note #physics/condensed-matter #derivative 

An attempt at improving upon the [[Einstein Solid]] model, Debye also treated the atoms in a [[solid]] as [[Quantum Harmonic Oscillator|QHOs]], but not as independent ones, The interaction of the oscillators allow for traveling sound waves in the solid. Where Einstein's model assumes constant and equal frequency for all atoms, Debye's treatment integrates over all possible modes in a [[Brillouin Zone]]

Debye's treatment of the modes in the solid is equivalent to Planks [[Black Body Radiation|black body radiation]], where instead of photons of the EM field there are [[Phonons]] which are the vibrational modes of the ions in the solid. Differences between light photons and phonons:
1. speed of propagation
2. light is a [[Plane Wave|transverse wave]], whereas a phonon is both a transverse and a [[longitudinal wave]] (can be polarized in either of the 3 direction, light can only be polarized in an of the 2 direction in which it does not propagate)

__simplifying assumptions__:
- speed of sound is independent of polarization
- speed of sound is independent of direction

![[../9. Misc/attachments/Page1.jpg]] 
![[../9. Misc/attachments/Page2.jpg]]
Debye's treatment of the phonons as waves in a box results in mean energy, similar to the one Planck gets from his black body radiation, $U \propto T^{4}$ which in turn yields the desired $$C = \frac{\partial U}{\partial T} \propto T^{3}$$
The integration to infinity does not make sense because it gives an infinite number of modes, whereas in the solid there are $N$ atoms with three directional DOFs, therefore a deviation from Planck's derivation has to be made and a **cutoff frequency** has to be introduced in an ad-hoc fashion in order to recreate the law of Dulong & Petit that prevails the higher temperatures.
![[../9. Misc/attachments/Page3.jpg]]
