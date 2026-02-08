# Gravitational Time Dilation
#GR1 #gravity #relativity #time 
___

We now consider Adi and Ben, who are both on board of an accelerating spaceship. Adi is at the front, stirring the rocket, while Ben is at the back performing maintenance checks. At one point in time Adi sends two signals to Ben.


![[Alice and Bob 1.png|300]]

$$
\begin{cases}
t = 0 \quad \ \ \ \ \  \text{Adi sends the first signal} \\ 
t = t_1 \quad \ \ \ \ \text{Ben receives the first signal} \\
t = \Delta t_A \quad \text{Adi sends the second signal} \\
t = \Delta t_B \quad \text{Ben receives the second signal}
\end{cases}
$$

![[Time dilation.png]]

The rocket accelerates up at $a$ and the height of Adi and Ben is given by

$$ Z_A(t) = h_A + \frac{at^2}{2} $$
$$ Z_B(t) = h_B+\frac{at^2}{2} $$

The first signal traveled a total distance of 

$$ Z_A(0)-Z_B(t_1)=ct_1 $$
$$ h_A-h_B - \cancel{\frac{at^2}{2}} = ct_1 \quad \Longrightarrow \quad \Delta h=ct_1 \quad \Longrightarrow \quad t_1 = \frac{\Delta h}{c}$$

We assume the length of the ship is small and the propagation time is small such that $O(t^2)$ terms are negligible.

The second signal travels a total of

$$ Z_A(\Delta t_A)-Z_B(t_1 + \Delta t_B)=c(t_1 + \Delta t_B - \Delta t_A) $$

$$
h_A + \frac{a}{2}{\Delta t_A}^2 - h_B - \frac{a}{2}(t_1+\Delta t_B)^2  = c(t_1 + \Delta t_B - \Delta t_A)
$$

we assume that the $\Delta t \approx O(t)$ and so we terms of order $O(t^2)$ again for their significance is negligible

$$
\Delta h + \cancel{\frac{a}{2}{\Delta t_A}^2}
- \cancel{\frac{a}{2}{t_1}^2} - \cancel{\frac{a}{2}{\Delta t_B}^2} - a\frac{\Delta h}{c}\Delta t_B = \Delta h + c(\Delta t_B - \Delta t_A)
$$

Plugging the value we found for $t_1$ and rearranging we get the following relationship

 $$\boxed{
 \Delta t_B = \Delta t_A\left(1-a\frac{\Delta h}{c^2}\right) < \Delta t_B}$$

it appears that time passes more slowly for Ben. If one second elapsed in Adi's frame, less than a second passed in Ben's frame of reference. Time ticks slower in Ben's perspective.

___
#### $$ \textbf{Application of the Equivalence Principle} $$
___

We have arrived at the conclusion that at an accelerating frame, two spatially separated points measure clock ticks differently.

$$ \Delta t_B = \Delta t_A\left( 1- a\frac{h_A - h_B}{c^2} \right) $$

The [[Equivalence Principle]] postulates that constant gravitational field cannot be distinguished from constant acceleration locally.

$$ a(h_A-h_B) \ \ \longmapsto \ \ g(h_A-h_B) = \Phi_A- \Phi_B $$

Therefore this effect of time dilation should also be experienced by two observers situated at two different heights in a constant gravitational field.

 > $$ \Delta t_B = \Delta t_A\left( 1- g\frac{h_A - h_B}{c^2} \right) =  \Delta t_A\left( 1- \frac{\Phi_A-\Phi_B}{c^2} \right)$$

^85cfba

Once attributed to gravity, the effect is referred to as __gravitational time dilation__.

___
#### $$ \textbf{Generalization to Varying Gravitational Fields} $$
___

![[image.png]]


Taking $\Phi$ to be the varying gravitational field of a spherical mass distribution  $\Phi_A = \Phi(R_A) = -\frac{GM}{R_A}$ one gets

  $$\boxed{
  \Delta t_B = \Delta t_A\left( 1- \frac{\Phi_A-\Phi_B}{c^2} \right) = \Delta t_A\left( 1- \frac{GM}{c^2}\left[\frac{1}{R_B}-\frac{1}{R_A}\right] \right)}$$ 

