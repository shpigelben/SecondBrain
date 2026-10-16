---
type: concept
discipline:
  - math
field: []
---

Given a signal $f(t)$ one can perform the [Fourier Transform](Fourier%20Transform.md) on a time segment instead of over the entire time domain of the signal. The time segmentation is done using a window function $W(t)$ such that the short time Fourier transform is given as follows
$$
\begin{align}
\text{STFT}\Big[ f(t) \Big]_{(\tau,\omega)}= \int\limits_{\infty}^{\infty} f(t)W(t-\tau)e^{-i\omega t}dt = \mathcal{F}\Big[ f(t)* W(t) \Big]
\end{align}
$$
The result is a function that depends on $\tau$ and $\omega$, known as the **spectrogram**.
