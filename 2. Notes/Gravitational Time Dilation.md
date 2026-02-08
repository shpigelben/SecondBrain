---
status: note
field: physics
subject: relativity
type: concept
---
![right|300](../9.%20Misc/attachments/Alice%20and%20Bob%201.png)
Let us consider Adi and Ben, who are both on board of an accelerating spaceship. Adi is at the front, stirring the rocket, while Ben is at the back performing maintenance checks. At one point in time Adi sends two signals to Ben. At time $t=0$ Adi sends the first signal which is received by Ben at $t=t_{1}$. After $\Delta t_{A}$ time has passed since Adi has sent the first signal, she transmits a second one which is received by Ben at $t_{1}+\Delta t_{B}$


| $t=0$ | Adi sends 1st signal |
| ---- | ---- |
| $t=t_{1}$ | Ben receives 1st signal |
| $t=\Delta t_{A}$ | Adi sends 2nd signal |
| $t=t_{1}+\Delta t_{B}$ | Ben receives 2nd signal |

![Time dilation|550](../9.%20Misc/attachments/Time%20dilation.png)

The rocket accelerates up at $a$ and the height of Adi and Ben is given by
$$
\begin{align} \\
Z_A(t) &= h_A + \frac{at^2}{2} \\
Z_B(t) &= h_B+\frac{at^2}{2}
\end{align}
$$

The first signal traveled the distance spanned from Adi's height at $t=0$ to Ben's height at time $t=t_{1}$. It travelled at the speed of light therefore

$$
Z_A(0)-Z_B(t_1)=ct_{1}
$$
$$
h_A-h_B - \cancel{\frac{at_{1}^{2}}{2}} = ct_1
$$
Unless acceleration is immense, $t_{1}$ is very small, and its square is negligible. We're left with

$$
t_1 = \frac{h_{A}-h_{B}}{c} = \frac{\Delta h}{c}
$$

The second signal travels a total of

$$
Z_A(\Delta t_A)-Z_B(t_1 + \Delta t_B)=c(t_1 + \Delta t_B - \Delta t_A)
$$

$$
h_A + \frac{a}{2}{\Delta t_A}^2 - h_B - \frac{a}{2}(t_1+\Delta t_B)^2  = c(t_1 + \Delta t_B - \Delta t_A)
$$

We assume that the $\Delta t \approx O(t_{1})$ so that terms of order $O(t^2)$ are discarded

$$
\small
\Delta h + \cancel{\frac{a}{2}{\Delta t_A}^2} - \cancel{\frac{a}{2}{t_1}^2} - \cancel{\frac{a}{2}{\Delta t_B}^2} - a\frac{\Delta h}{c}\Delta t_B = \Delta h + c(\Delta t_B - \Delta t_A)
$$

Plugging the value we found for $t_1$ and rearranging we get the following relationship
 $$
\boxed{\Delta t_B = \Delta t_A\left(1-a\frac{\Delta h}{c^2}\right) < \Delta t_A}
 $$

it appears that time ticks faster for Ben. If one second elapsed in Adi's frame, less than a second passed in Ben's frame of reference. Time ticks slower in Ben's perspective.

# Gravitational Time Dilation
We have arrived at the conclusion that at an accelerating frame, two spatially separated points measure clock ticks differently.

$$
\Delta t_B = \Delta t_A\left( 1- a\frac{h_A - h_B}{c^2} \right)
$$

The [[Equivalence Principle]] postulates that constant gravitational field cannot be distinguished from constant acceleration locally.

$$
a(h_A-h_B) \ \ \longmapsto \ \ g(h_A-h_B) = \Phi_A- \Phi_B
$$

Therefore this effect of time dilation should also be experienced by two observers situated at two different heights in a constant gravitational field.

$$
\Delta t_B = \Delta t_A\left( 1- g\frac{h_A - h_B}{c^2} \right) =  \Delta t_A\left( 1- \frac{\Phi_A-\Phi_B}{c^2} \right)
$$

Once attributed to gravity, the effect is referred to as __gravitational time dilation__.
# Generalization to Varying Gravitational Fields

![image|500](../9.%20Misc/attachments/image.png)

Taking $\Phi$ to be the varying gravitational field of a spherical mass distribution  $\Phi_A = \Phi(R_A) = -\frac{GM}{R_A}$ one gets
  $$\boxed{
  \Delta t_B = \Delta t_A\left( 1- \frac{\Phi_A-\Phi_B}{c^2} \right) = \Delta t_A\left( 1- \frac{GM}{c^2}\left[\frac{1}{R_B}-\frac{1}{R_A}\right] \right)}$$ 

