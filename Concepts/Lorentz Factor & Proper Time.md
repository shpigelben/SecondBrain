---
type: concept
discipline:
  - physics
field:
  - relativity
---

# Lorentz Factor
An infinitesimal interval in [[Minkowski Space|flat space time]]
$$ ds^2 = \eta_{\alpha\beta}dx^{\alpha}dx^{\beta} = -c^2dt^2 + d\mathbf{r}^2 $$
**Proper time** is defined as follows
$$\begin{align*}
c^{2}d\tau^{2} \equiv  -ds^2 &= c^{2}dt^2 - d\mathbf{r}^{2}\\
&= c^{2}dt^2\left[1-\left(\frac{1}{c}\frac{d\mathbf{r}}{dt}\right)^2\right] \\
&= c^{2}dt^{2}\left[ 1-\frac{\mathbf{v}^{2}}{c^{2}} \right]\\
&\equiv c^{2}dt^{2} \frac{1}{\gamma^{2}}
\end{align*}$$
Which yields
$$ \frac{d\tau}{dt} = \frac{1}{\gamma}$$
$\gamma$ is called the __Lorentz factor__. It is the factor by which time ticks differently in a frame moving with relative velocity $\mathbf{v}$ relative to the 
$$ \bbox[#FFECA9,6px, border:2px solid black]{\gamma = \frac{dt}{d\tau} = \frac{1}{\sqrt{1- \frac{\mathbf{v}^{2}}{c^{2}}}}} $$

for $|v| \in[0,1)$, 1 being the speed of light in natural units,  $\gamma \in[1,\infty)$
# Proper Time
Proper time, being a [[Lorentz Invariance]], is measured to be the same in any Minkowski-inertial reference frame
$$ dt = \gamma d\tau $$
In the moving frame, the observer measures his own speed to be $0$, and consequently the Lorentz factor calculated in his reference frame is $\gamma = 1$ and the observers measures the proper time exactly, hence the name. 

It is when observers with relative motion measure the time, that it "expands" by a factor of the $\gamma > 1$ measured in their frame. It is known as [[Time Dilation & Length Contraction|time dilation]]

# In Curved Spacetime
In the presence of massive or highly energetic objects, space time is curved and times flow can vary in both time and space. If a curved spacetime is described by a [[Metric Tensor|metric]] $g_{\mu \nu}$ (assuming one that is  diagonalized) then
$$d\tau^{2} =-ds^2 = -g_{\mu\nu}dx^{\mu}dx^{\nu}$$
$$\left(\frac{d\tau}{dt}\right)^{2}= -g_{tt} - g_{ii} \left(\frac{dx^{i}}{dt}\right)^{2}$$