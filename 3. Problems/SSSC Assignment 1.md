Ben Shpigel
204389449
# Four Point Probe
==write a short essay on the working principle of a four point probe, and explain how it eliminate contact resistivity.==

The most straightforward way of measuring resistance is via the so called 'two point probe' method which is employed in most typical ohm-meters. In the two point probe method, two ends (probes) of the device are attached to two ends of the material of interest. This essentially closes the circuit and allows current originating from a battery in the device to flow through the material. An ampere-meter measures the amount of passed current, and a volt-meter measured the voltage drop between the material. Then, the resistance can be easily calculated using ohms law.

Applying probes to the surface of a material is accompanied by the an undesired, added contact resistance. There are several contributors to contact resistance, most notably:

- imperfect contact between the probes and the material surface.
- contamination of the surface.
- a build of nonconducting oxide layer on the surface of the material.

When taking this resistance into consideration, the circuit of the two point probe can be qualitatively drawn as follows

![center|700](../9.%20Misc/attachments/Pasted%20image%2020240109170244.png)
Where $R_{m}$ is the resistance of the material and $R_{c}$ is the contact resistance at each of the probes. Using ohm's law, the resistance of the material is given by

$$
R_{m} = \frac{V}{I} - 2R_{c}
$$

For high-resistance materials in which $R_{m}\gg R_{c}$ this method is accurate enough as $R_{m}\approx V /I$. In low resistance materials however, in which the resistance is comparable to the contact resistance, the results can be very inaccurate and this method is no longer valid. 

In order to omit contact resistance two additional probes are introduced, and connect the material to a volt-meter in such a way that avoids the "current inducing probes" and the contact resistance altogether as illustrated below.

![center| 700](../9.%20Misc/attachments/Pasted%20image%2020240109172604.png)
 
Now the voltage drop is measured only over the material, and together with the current provided by the ampere-meter a more accurate measurement of the resistance can be taken.

$$R_{m} = \frac{V}{I}$$

Four point probes are very common in the semiconductor industry for measuring sheet resistance of thin layers. By employing the same scheme presented in the previous figure, and by having the dimensions of the probes and the distance between them, the sheet resistivity, and consequently the resistivity of the material can be calculated.
# Photoconductivity 
==How can we measure the lifetime of an excited electron in a semiconductor?==

When light is absorbed in a semiconductor, an electron is excited to the conduction band as a result. The electron then remains in the conduction band for an average time termed 'carrier lifetime'. During this time the electron can generate a current and a voltage. The carrier life time is directly effects the efficiency of the semiconductor. 

One way to measure the characterize the carrier lifetime is by implementing the TPC (Transient Photocurrent) technique. A semiconductor is placed between two electrodes with a potential difference. The semiconductor is then illuminated with with a pulsed light (should be shorted than the carrier lifetime), exciting electrons into the conduction band. These start traveling down the potential difference and generate a current that can be measured with a oscilloscope. As one might expect, the current immediately peaks as the pulse arrives at the semiconductor, and begins decaying as the pulse has passed and the electrons are beginning to decay back into the conduction band. The consequent decay of the photocurrent is proportional to the lifetime of the carrier.

[![center|500](https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/TPC_light_off.jpg/300px-TPC_light_off.jpg)](https://en.wikipedia.org/wiki/File:TPC_light_off.jpg)

Another method known as PCD (photoconductivity decay), measures the conductivity of the semiconductor (we've shown how it can be done accurately using a 4 point probe) under different illuminations. eExcited electrons in the conduction band means better conductivity due to the increase in available charge carriers. The difference in measured conductivity under different illuminations allow us to understand what the carrier density is and with other known parameters like the electron mobility, calculate the lifetime.

# SIMS (Secondary Ion Mass Spectrometry)
==What is the SIMS method for measuring the concentration or contamination of dopant, and why is it so accurate?==

SIMS is a technique for measuring the surface (generally up to 2nm depth)  of solid materials for contaminants. By bombarding the surface of the material with an ion beam, ions from the surface (called secondary ions to distinguish them from the beam's primary ions) are ejected. This process, called sputtering, takes place in a high vacuum a chamber that is connected to a mass spectrometer, there the ions are accelerated along the the body of the spectrometer and into a detector which measures their mass and charge. 

The mass to charge ratio is enough to determine the chemical identity of the ions. This method is highly sensitive and can detect the composition of the surface of a material with accuracy of up to parts per billions.

Furthermore, the SIMS have high spatial resolution, can distinguish between isotopes of the same element and even identify molecules that are emitted in the sputtering process.