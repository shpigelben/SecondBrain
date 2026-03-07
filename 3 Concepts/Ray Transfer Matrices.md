---
type: concept
discipline:
  - physics
field:
  - optics
---

In the regime of **ray optics** ($\lambda$<<system) and under the [paraxial approximation](Paraxial%20Approximation.md), a ray that travels in the $z$ direction can be specified by its height $x$  and its normalized tangential momentum

$$
\underbrace{ \nu_{x}=\nu_{y} }_{\begin{align*}
\text{azimuthal}\\ \text{symmetry}
\end{align*}} = \frac{k_{y}}{k_{0}} = n\sin\theta \approx n\theta
$$

where the angle is taken with respect to the optical (z) axis. The relation between the height above the optical axis $(x)$ and the **transverse paraxial momentum** $(n\theta)$ before and after and optical system can be related by a general matrix known as ABCD matrix as follows

$$
\begin{bmatrix}y_{2} \\ n_{2}\theta_{2}
\end{bmatrix} = \begin{bmatrix}A & B \\
C & D \end{bmatrix}\begin{bmatrix} y_{1} \\
n_{1}\theta_{1}\end{bmatrix} \tag{0}
$$

Different ABCD matrices represent different "obstacles" along the path of the beam, and a general optical system can be represented by the multiplication of the relevant matrices of its constituent components.


> [!NOTE] Optical Elements
> Propagation of distance $d$ through a medium $n$
> $$\begin{bmatrix}1 & d/n \\
0 & 1\end{bmatrix}$$
> Transfer through an interface of optical power $P$
> $$\begin{bmatrix}1 & 0 \\
-P & 1\end{bmatrix}$$

# Properties of Transfer Matrices


# Effective Focal Point
The effective focal point is measured relative to the principle planes and is considered the reciprocal of the effective optical power of the system
$$
F_{\text{eff}}=\frac{1}{P}
$$

# Back Focal Point
A ray traveling parallel to the optical axis $(\theta_{1}=0)$ passes through the system (ABCD) and crosses the optical axis $(y_{2}=0)$ at a distance $F'$ away from the **back vertex** of the system.
$$
\begin{align}
\begin{bmatrix}
\cancelto{0}{ y_{2} } \\ n\theta_{2}
\end{bmatrix} &= \left(\overbrace{ \begin{bmatrix}
1 & F'/n \\
0 & 1
\end{bmatrix} }^{ \text{focal point}}
\underbrace{ \begin{bmatrix}
A & B \\
C & D \end{bmatrix} }_{ \text{system} }
\right)\begin{bmatrix}
y_{1} \\
n\cancelto{0}{ \theta_{1} }
\end{bmatrix} \\ \\ \Longrightarrow \begin{bmatrix}
0 \\ n\theta_{2}
\end{bmatrix}&= y_{1}\begin{bmatrix}A+\frac{CF'}{n} \\C

\end{bmatrix}
\end{align}
$$
The **back focal point** of the system is therefore give by
$$
F' = -n \frac{A}{C} \tag{1}
$$
The **front focal plane** of the system is calculated by considering a ray that leaves the optical axis $(y_{1}=0)$ at an angle $\theta_{1}$, propagates $F$ distance, enters the system and leaves at height $y_{2}$ parallel to the optical axis $(\theta_{2}=0)$

$$
\begin{align}
\begin{bmatrix}
y_{2} \\ n\cancelto{0}{ \theta_{2} }
\end{bmatrix} &= \left(
\underbrace{ \begin{bmatrix}
A & B \\
C & D \end{bmatrix} }_{ \text{system} }\overbrace{ \begin{bmatrix}
1 & F/n \\
0 & 1
\end{bmatrix} }^{ \text{focal point}}
\right)\begin{bmatrix}
\cancelto{0}{ y_{1} } \\
n\theta_{1}
\end{bmatrix} \\ \\ \Longrightarrow \begin{bmatrix}
y_{2} \\ 0
\end{bmatrix}&= n\theta_{1}\begin{bmatrix}B+\frac{AF}{n} \\ D+\frac{CF}{n}

\end{bmatrix}
\end{align}
[^1]$$
$$
F = -n \frac{D}{C} \tag{1}
$$
![center|1000](../4%20Misc/Attachments/focalplanes.png)

# Imaging Criterion
For an image to form, all rays leaving a point $y_{1}$ on an object should converge at a certain single point $y_{2}$ independent of emission angle. For a general optical system described by an ABCD matrix, we can impose the imaging criterion as follows

$$
\begin{align}
\begin{bmatrix}
y_{2} \\ n\theta_{2}
\end{bmatrix} &= \left(\overbrace{ \begin{bmatrix}
1 & s'/n \\
0 & 1
\end{bmatrix} }^{ \text{image}}
\underbrace{ \begin{bmatrix}
A & B \\
C & D \end{bmatrix} }_{ \text{system} }
\overbrace{ \begin{bmatrix}
1 & s/n \\
0 & 1
\end{bmatrix} }^{ \text{object} }\right)\begin{bmatrix}
y_{1} \\
n\theta_{1}
\end{bmatrix} \\ \\ &=
\underbrace{ \begin{bmatrix}
A+s'C  & (A+s'C)s + B+s'D  \\
C & Cs+D
\end{bmatrix} }_{ \Large T }\begin{bmatrix}
y_{1} \\
n\theta_{1}
\end{bmatrix}\end{align}
$$
Where $n$ is the RI of the ambient medium, which is taken to be $n=1$ in the second step. For $y_{2}$ to be independent of $\theta_{1}$ (the imaging criterion) the matrix element $T_{12}$ has to vanish. From this we can extract the general formula for the image given the object position (both with relation to the entrance and exit vertices of the system)

$$
s' = - \frac{B+As}{D+Cs} \tag{2}
$$

> [!NOTE]- Thin Lens
> If we insert the ABCD matrix elements for a thin lens in air
> $$\begin{pmatrix}1 & 0 \\ - 1/f  & 1\end{pmatrix}$$
> we receive the familiar thin lens image equation
> $$\frac{1}{s}+\frac{1}{s'}=\frac{1}{f}$$

## Magnification
With $T_{12}=0$ it is easy to see that the magnification is simply 
$$
M=\frac{y_{2}}{y_{1}}=T_{11}=-A\left( \frac{B+As}{D+Cs} \right) \tag{3}
$$
Where we've used equation $(2)$ in the expression of $T_{11}$.

# Louisvilles Theorem
(Louisvilles?) For the same $n$ on both interfaces

$$\det(ABCD) = AD-BC = 1$$
# ABCD for Gaussian Beams
For an optical system described by an ABCD matrix, the **complex beam parameter** $q$ - which entirely describes a [[Gaussian Beam]] - after going through the system transforms as follows
$$q' = \frac{Aq+B}{Cq+D}$$

[^1]: 
