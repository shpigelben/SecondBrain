---
type: puzzle
discipline:
  - physics
field:
  - condensed-matter
  - electrodynamics
---

# Gunn Diode
## Negative Resistance
We begin this discussion by familiarizing ourselves with the phenomenon of negative resistance. Negative resistance occurs when the current flowing through a circuit is decreasing (instead of increasing) as the voltage across it is increasing.

![center|450](../4%20Misc/Attachments/Pasted%20image%2020240610232149.png)

The red segment in the I-V characteristic above, illustrates a region of negative differential resistance (NDR). Unlike positive resistors which consume power, negative resistors produce power, making them especially suitable for amplification.

There seem to be several mechanisms that produce NDR, but we will focus on one. We know that Current is proportional to the carrier mobility, and we also know that an increase in voltage is associated with an increase in the electric field. By analogy then, when NDR occurs, we expect to see a decrease in electron mobility as we increase the electric field, which subsequently causes current to drop.

## The Gunn Effect
Certain types of semiconductors have a band energy diagram with two stable energy states of the conduction band in close proximity, denoted $\Gamma$ (for the lower energy state) and $L$ (see the figure beneath). Their energetic separation is $\Delta E$.

![center|500](../4%20Misc/Attachments/Pasted%20image%2020240610232504.png)

In equilibrium, at room temperature (assuming $\Delta E > k_{\small B}T$), most of the electron population in the conduction band resides in the lower $\Gamma$ state, there, their effective mass is relatively low due to the high band curvature (recall that $m^{*}\propto(\partial_{k^{2}}E)^{-1}$). Because of their lower effective mass, their mobility is high (see equation (1)) and they can be readily excited to the nearby $L$ state given a strong enough external electric field that provides them with enough energy to "go over the hill".
$$
\mu = \frac{q\tau}{m^{*}} \tag{1}
$$
In the $L$ energy state, electrons have higher effective mass and lower mobility. The total mobility of the system, for a given electric field, can be taken as the simple following average
$$
\mu = \frac{n_{\scriptsize L}\mu_{\scriptsize L}+n_{\scriptsize \Gamma}\mu_{\scriptsize \Gamma}}{n_{\scriptsize L}+n_{\scriptsize \Gamma}} \tag{2}
$$
where $n$ is the electron population of a given energy state. The higher the electric field, the larger the ratio $\frac{n_{\scriptsize L}}{n_{\scriptsize \Gamma}}$ and in the limit of very high field $\mu\to\mu_{\scriptsize L}$ whereas in the other limit of zero electric field, the ratio goes to $\infty$ and $\mu\to\mu_{\scriptsize \Gamma}$. The

![center|350](../4%20Misc/Attachments/Pasted%20image%2020240212095504.png)

The current depends both on electron mobility, as well as on the electric field
$$
I \propto J = env_{d} = en\mu E \tag{3}
$$
The overall dependence on the electric field, directly and indirectly through the mobility dependence, results in a region of negative resistance above a voltage threshold (as seen in the first figure). This effect explains the drop in mobility and subsequent drop in current for a threshold of high enough electric field, and is known as the Gunn effect.

## The Gunn Diode
The Gunn diode receives such a band structure by the sandwiching of a thin slice of lightly n-doped semiconductor between two terminals of heavily n-doped semiconductors (usually of the same semiconductor to my understanding). The Gunn diode is used an electronic oscillator when connected to an electrical resonator such as an RLC circuit. 
![center|350](../4%20Misc/Attachments/Pasted%20image%2020240212105643.png)
When biased into its region of negative resistance, specifically to a value ($V_{b}$ in the diagram above) that cancels the positive internal resistance of the LC circuit, the entire system acts as a lossless oscillator, capable of amplifying resonant signals. The Gunn diodes are mostly used for amplifying signals in the microwave region where they produce some of the highest power amplification and output.
