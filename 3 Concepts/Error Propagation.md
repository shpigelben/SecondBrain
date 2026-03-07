---
type: concept
discipline:
  - math
field:
  - probability-statistics
---

$$
\Delta F(P_{1},\dots,P_{N}) = \sqrt{ \sum\limits_{n=1}^{N}\left( \frac{ \partial F }{ \partial P_{n} }\Delta P_{n}  \right)^{2} }
$$

$$
\chi^{2} =\sum\limits_{i=1}^{N}\left[  \frac{F(x_{i})-F_{i}}{\Delta F} \right]
$$

intensity
$$
I = \frac{PA}{r^{2}}= \frac{\pi P}{4}\left( \frac{D}{r} \right)^{2}
$$
error in intensity

$$
\begin{align}
\Delta I &= \sqrt{ \left( \frac{ \partial I }{ \partial P }\Delta P \right)^{2} + \left( \frac{ \partial I }{ \partial D }\Delta D \right)^{2} + \left( \frac{ \partial I }{ \partial r }\Delta r \right)^{2}  }\\ \\ &= \sqrt{ \frac{\pi D}{2 r} \left[ \left( \frac{D}{2r} \Delta P\right)^{2} + \left( \frac{PD}{r^{2}}\Delta r \right)^{2} +(P\Delta D)^{2} \right] }
\end{align}
$$

error in normalized intensity.
For Lamberts cosine law

$$
I_{n}(\beta) = \frac{I(\beta)}{I_{0}} = \cos(\beta)
$$

$$
\begin{align}
\Delta I_{n}(\beta) &\to \Delta I_{n} + \left| \frac{ \partial I_{n} }{ \partial \beta }  \right| \\
&= \Delta I_{n} + \left| \sin\left( \frac{\pi\beta}{180^{\circ}} \right) \frac{\pi\Delta\beta}{180^{\circ}}  \right|
\end{align}
$$
$$
\begin{align}
\Delta I_{ph} &= \sqrt{ \left( \frac{ \partial I_{ph} }{ \partial V } \Delta V \right)^{2} + \left( \frac{ \partial I_{ph} }{ \partial R_{L} } \Delta R_{L} \right)^{2} } \\
	&= \sqrt{ \left( \frac{\Delta V}{R_{L}} \right)^{2}+\left( \frac{V}{R_{L}^{2}}\Delta R_{L} \right)^{2} }
\end{align}
$$

$$
\begin{align}
\Delta R &= \sqrt{ \left( \frac{ \partial R }{ \partial I_{ph} } \Delta I_{ph} \right)^{2}+\left( \frac{ \partial R }{ \partial P } \Delta P \right)^{2} } \\
			&= \sqrt{ \left( \frac{\Delta I_{ph}}{P} \right)^{2}+\left( \frac{I_{ph}}{P^{2}}\Delta P \right)^{2} }
\end{align}
$$

