---
type: note
field:
  - physics
  - engineering
status: incomplete
subject:
  - electrodynamics
  - optics
---
For monochromatic waves of the following form, incident in the x-z $(k_{y}=0)$ plane.
$$
\begin{align}
\boldsymbol{D}&=\epsilon \boldsymbol{E_{0}}\exp(i\boldsymbol{k}\cdot \boldsymbol{r}-i\omega t) \\
\boldsymbol{B}&=\mu \boldsymbol{H_{0}}\exp(i\boldsymbol{k}\cdot \boldsymbol{r}-i\omega t)
\end{align}
$$
We insert those into Faraday & Ampere laws as follows
$$
\begin{matrix}
\frac{1}{c}\frac{ \partial \boldsymbol{D} }{ \partial t } =\nabla \times \boldsymbol{H} &\frac{1}{c}\frac{ \partial \boldsymbol{B} }{ \partial t }=-\nabla \times \boldsymbol{E}\\
\Downarrow &\Downarrow \\
{\tiny -i \underbrace{ \frac{\omega}{c} }_{ k_{0} } \epsilon\begin{pmatrix}
E_{x} \\ E_{y} \\ E_{z}
\end{pmatrix} = \begin{pmatrix}
\cancel{ \partial_{y}H_{z}  }- \partial_{z}H_{y} \\
\partial_{z}H_{x} - \partial_{x}H_{z} \\
\partial_{x}H_{y} - \cancel{ \partial_{y}H_{x} } 
\end{pmatrix}} & {\tiny -i \underbrace{ \frac{\omega}{c} }_{ k_{0} } \mu\begin{pmatrix}
H_{x} \\ H_{y} \\ H_{z}
\end{pmatrix} = \begin{pmatrix}
\partial_{z}E_{y}-\cancel{ \partial_{y}E_{z}  } \\
\partial_{x}E_{z}-\partial_{z}E_{x} \\
\cancel{ \partial_{y}E_{x} } -\partial_{x}E_{y}
\end{pmatrix}}
\end{matrix}
$$

We wish to find the variation of the tangential field components in the $z$ direction, so we isolate the derivatives with respect to $z$ as follows
$$
\begin{align}
\partial_{z}H_{y} &= ik_{0}\epsilon E_{x} \tag{1}\\
\partial_{z}H_{x} &= \partial_{x}{\color{#F8AA23}{H_{z}}} - ik_{0}\epsilon E_{y} \Rightarrow -ik_{0}\left( \epsilon- \frac{\nu_{x}^{2}}{\mu} \right) E_{y} \tag{2}\\ \\
\partial_{z}E_{y} &= -ik_{0}\mu H_{x} \tag{3}\\
\partial_{z}E_{x} &= \partial_{x}{\color{#5A9BEB}{E_{z}}} + ik_{0}\mu H_{y} \Rightarrow ik_{0}\left( \mu- \frac{\nu_{x}^{2}}{\epsilon} \right)H_{y} \tag{4}
\end{align}
$$
Where we eliminated the $z$ components of the fields by using the following
$$
\begin{align}
{\color{#5A9BEB}{E_{z}}} &=  \frac{i}{k_{0}\epsilon}\partial_{x}H_{y}  \\
{\color{#F8AA23}{H_{z}}} &= -\frac{i}{k_{0}\mu}\partial_{x}E_{y}
\end{align}
$$
We can set the following basis, based on TE and TM components and write equations $(1)-(4)$ in matrix notation.

$$
\frac{ \partial  }{ \partial z } \begin{pmatrix}
\Psi_{\scriptsize\text{TM}} \\ \Psi_{\scriptsize\text{TE}}
\end{pmatrix} \Rightarrow \frac{ \partial  }{ \partial z } \begin{pmatrix}
E_{x} \\ H_{y} \\ E_{y} \\ -H_{x}
\end{pmatrix}  = ik_{0}\begin{pmatrix}
0  & \mu - \nu_{x}^{2}/\epsilon & 0 & 0 \\
\epsilon & 0 & 0 & 0 \\
0 & 0 & 0 & \mu  \\
0 & 0 & \epsilon- \nu_{x}^{2}/\mu & 0
\end{pmatrix}\begin{pmatrix}
E_{x} \\ H_{y} \\ E_{y} \\ -H_{x}
\end{pmatrix}
$$
