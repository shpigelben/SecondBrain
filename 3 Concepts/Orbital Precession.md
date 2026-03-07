---
type: concept
discipline:
  - physics
field:
  - relativity
  - orbital-mechanics
---

When bound (non-circular) orbital motion does not close on itself after one revolution (the passage between two successive inner turning points), the orbit is said to _precess_.

- A condition for closed orbit is that the amount of angle swept after one revolution $\Delta \phi$ be equal to $2\pi$, any less than that and precession of the inner turning point will take place.
- If precession does take place, the angle of precession between revolutions is $\delta\phi =\Delta \phi-2\pi$

![[../4 Misc/Attachments/orbital precession.png|400]]

$$
\frac{d\phi}{dr} = \frac{d\phi}{d\tau} \frac{d\tau}{dr} = \pm \frac{l}{r^{2}} \frac{1}{\sqrt{e^{2} - \left(1- \frac{2M}{r}\right)\left(1+ \frac{l^{2}}{r^{2}}\right)}}
$$

Integration between two successive turning points $r_{1}$ and $r_{2}$ (multiplying by a factor of 2 to account for the entire orbit), including units is given by

$$\Delta \phi = 2l{\Large \int\limits_{r_{1}}^{r_{2}}} \frac{dr}{r^{2}} \left[c^{2}(e^{2}-1) + \frac{2GM}{r}- \frac{l^{2}}{r^{2}}+ \frac{2GMl^{2}}{c^{2}r^{3}}\right]^{-1/2} $$
 
 
 