---
type: concept
discipline:
  - math
field:
  - probability-statistics
---

**Statistical Probability** - $P(X) = \displaystyle\lim\limits_{n \to \infty} \frac{{n(X)}}{n}$
it is nothing compared to what I've had to endure thus far. It is by far the most offensive thing I have come across. Thanks for being an audience.




# N-Throws of a Dice
The probability of **getting the number 6** on a fair 6-sided dice **on a single throw** is 
$$
\mathbb{P}[6] = \frac{1}{6}
$$
 The probability of **not getting a 6** on a single throw is 

$$
\overline{\mathbb{P}}[6] = 1 - \mathbb{P}[6]  =\frac{5}{6}
$$

Now we throw the dice an $N$ number of times. The probability of **not getting a 6 in all N throws** is
$$
\begin{align}
\overline{\mathbb{P}}[6N] &= \bigcap\limits_{i=1}^{N}\overline{\mathbb{P}}[6] \\ &\quad\ \ {\large\downarrow} \quad{\small \text{independent events}} \\
&=\prod\limits_{i=1}^{N}\overline{\mathbb{P}}[6] = \left( \frac{5}{6} \right)^{N}
\end{align}
$$
The probability of getting the number 6 **at least once in N throws**  is

$$
\mathbb{P}[6N] = 1-\overline{\mathbb{P}}[6N] = 1 - \left( \frac{5}{6} \right)^{N}
$$

![center|600](../4%20Misc/Attachments/Pasted%20image%2020240603184417.png)