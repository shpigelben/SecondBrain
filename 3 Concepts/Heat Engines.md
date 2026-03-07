---
type: concept
discipline:
  - physics
field:
  - thermodynamics-statistical-mechanics
---

A heat engine is a [[Thermodynamic System]] that utilizes the passage of heat from a _heat reservoir_ $(Q_{\small H})$ to a _heat sink_ $(Q_{\small C})$ for the extraction of work as is qualitatively portrayed in the diagram below

![[../4 Misc/Attachments/Thermodynamic Engine.png| 400]]

The process of a heat engine is cyclic, such that $\oint dU =0$ and therefore
$$\oint \delta Q -\delta W =0 \quad \Rightarrow \quad \Delta Q = Q_{in}-Q_{out} = \oint PdV$$
The heat difference is the amount that is converted into mechanical work. $$W=\Delta Q = Q_{in}-Q_{out}=Q_{H}-Q_{C}$$
___
## Clausius & the Second Law
Clausius's version of the second law gives
$$\oint\limits_{\gamma} \frac{\delta Q}{T} = \int\limits_{\gamma_{in}} \frac{\delta Q}{T}-\left|\int\limits_{\gamma_{out}} \frac{\delta Q}{T}\right|\leq 0 $$
Consequently we could write
$$\frac{Q_{in}}{T_{max}} \leq \left|\int\limits_{\gamma_{in}} \frac{\delta Q}{T}\right|\leq\left|\int\limits_{\gamma_{out}} \frac{\delta Q}{T}\right|\leq \frac{Q_{out}}{T_{min}}$$
Which boils down to
$$ \frac{T_{min}}{T_{max}}\leq \frac{Q_{out}}{Q_{in}} $$
With the equality holding for reversible processes (as in the Carnot cycle)

___
## Efficiency
The efficiency of a heat engine is defined as the ratio of extracted work to incoming heat 
$$ \boxed{\begin{align} \\ \quad
\eta \equiv \frac{W}{Q_{in}}= 1- \frac{Q_{out}}{Q_{in}} \leq 1- \frac{T_{min}}{T_{max}} \quad \\\
\end{align}}
$$
The most efficient engine between two given temperatures is one that utilizes reversible processes. The [[Carnot Engine]] is such an engine for which last equality holds.

> Kelvin's idea of the 2nd law - no ideal engine  $\longmapsto\eta \ {\small<} \ 1$

___
## Refrigerator

A refrigerator is a heat pump that runs backwards. Using work to extract heat from a cold sink to a heat reservoir, as depicted below

![[../4 Misc/Attachments/Refrigirator.png| 400]]

Performance of the refrigerator is given by
$$ \boxed{\begin{align} \\ \quad
\omega = \frac{Q_{\small C}}{W} = \frac{Q_{\small C}}{Q_{\small H}-Q_{\small C}} \leq 1
\quad \\\
\end{align}}
$$
In the same way that an engine cannot be ideal due to the second law of thermodynamics, an engine whose process is in the other direction cannot be ideal

> Clausius' idea of the 2nd law - no ideal refrigerator  $\longmapsto\omega \ {\small<} \ 1$
