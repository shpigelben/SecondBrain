#problem 
$$\text{Ben Shpigel 204389449}$$
# Question 1

> [!QUESTION] Question 1
> Check whether the following set of vectors form a basis for the three-dimensional space $\mathbb{R}^{3}$.
> (a) $\small\{ (0,0,1) , (1,1,0) , (-1,-1,0) \}$
> (b) $\small \{ (1,0,0) , (0,1,1) , (0,-1,1) \}$
> (c) $\small \{ (0,0,1) , (0,1,0)  \}$

For a set to qualify as for an N-dimensional vectors space it has to have exactly N vectors, all of which are linearly independent. 

**(a)** It is clear that $v_{2}$ and $v_{3}$ are linearly dependent as $v_{3}=-v_{2}$. ==This set is not a basis==.

**(b)** All vectors of a set are independent when the following holds
$$
c_{1}v_{1}+c_{2}v_{2}+c_{3}v_{3}=0 \quad \underbrace{ \Rightarrow }_{ \text{iff} } \quad c_{1}=c_{2}=c_{3}=0
$$
Applying this to the given set yields 
$$
\begin{align}
 c_{1}&=0 \\
 c_{2}-c_{3}&=0 \\
 c_{2}+c_{3}&=0
\end{align}
$$
where the last two equations hold iff $c_{2}=c_{3}=0$. The condition for independence is met, and the set is of dimension 3 which means that ==this is in fact a basis of $\mathbb{R}^{3}$==.

**(c)** The set is two-dimensional and therefore ==cannot be a basis for $\mathbb{R}^{3}$==.

# Question 2

> [!QUESTION] Question 2
> (a) Using Python, find the spectral decomposition of the matrix
> $$A = \begin{pmatrix}2 & 1 & 0 \\ 1 & 2 & 1 \\ 0 & 1 & 2\end{pmatrix} $$
> (b) Calculate analytically $A^{5}$.

**(a)** Using the following code we extract the eigenvalues and eigenvectors.

```python
import numpy as np
from numpy import linalg as LA

A = np.array([[2,1,0],[1,2,1],[0,1,2]])

eval, evec = LA.eig(A)
np.round(eval,3), np.round(evec,3)
```

- eigenvalues $$\small\{3.414, 2.00, 0.586\}$$
- eigenvectors $$\small\left\{\begin{pmatrix}-0.5 \\ 0.707 \\ 0.5\end{pmatrix}, \begin{pmatrix}-0.707 \\ 0 \\ -0.707\end{pmatrix}, \begin{pmatrix}-0.5 \\ -0.707 \\ 0.5\end{pmatrix}\right\}$$
**(b)** Let us use the diagonalized form of $A$ to more easily calculate its power 
$$
\begin{align}
A^{n} &= \left(PDP^{-1}\right)^{n}  \\
&= (PD\underbrace{ P^{-1} )\cdot (P }_{ I }DP^{-1}) \cdot \ \dots  \ \  \cdot \left(PDP^{-1}\right) \\
&=PD^{n}P^{-1}
\end{align}
$$
Where $D$ is the diagonalized form of $A$ and $P$ is the change of basis matrix whose columns are the eigenvectors of $A$. This turns a multiplication of $n$ matrices into a multiplication of only 3 matrices.

$$\small
\begin{align}
&\begin{pmatrix}
-0.5 & -0.707 & -0.5 \\
-0.707 & 0 & -0.707 \\
0.5 & -0.707 & 0.5
\end{pmatrix}\left[\begin{pmatrix}
3.414 & 0 & 0 \\
0 & 2.0 & 0 \\
0 & 0 & 0.586
\end{pmatrix}\right]^{n}\left[\begin{pmatrix}
-0.5 & -0.707 & -0.5 \\
-0.707 & 0 & -0.707 \\
0.5 & -0.707 & 0.5
\end{pmatrix}\right]^{-1} = \\ &\begin{pmatrix}
-0.5 & -0.707 & -0.5 \\
-0.707 & 0 & -0.707 \\
0.5 & -0.707 & 0.5
\end{pmatrix}\begin{pmatrix}
3.414^{n} & 0 & 0 \\
0 & 2.0^{n} & 0 \\
0 & 0 & 0.586^{n}
\end{pmatrix}\begin{pmatrix}
0.75  & -0.5 & 0.25  \\
-0.5 & 1 & -0.5 \\
0.25 & -0.5 & 0.75
\end{pmatrix}
\end{align}
$$

For $n=3$, performing the calculation by hand results in
$$\bbox[#FFECA9,6px, border:2px solid black]{A^{5} = \begin{pmatrix}132 & 164 & 100  \\164 & 232 & 164 \\100 & 164 & 132\end{pmatrix}}$$

# Question 3

> [!QUESTION] Question 3 
> (a) verify that the inverse discrete Fourier transform (IDFT) can be represented in the following matrix-vector multiplication form $\boldsymbol{f}=\frac{1}{N}\boldsymbol{W_{\scriptsize N}}\boldsymbol{F}$ where $$
\boldsymbol{W_{N}}=\begin{pmatrix}
W^{0} & W^{0}  & W^{0} & \dots  & W^{0}  \\
W^{0} & W^{1}  & W^{2} & \dots  & W^{N-1}   \\
W^{0} & W^{2}  & W^{4} & \dots  & ~   \\
\vdots  \\
W^{0} & W^{N-1}  & W^{2(N-1)} & \dots  & W^{(N-1)^{2}}  
\end{pmatrix}$$

**(a)** Lets consider the DFT $\mathbf{F}_{k}$ of  a sample $\mathbf{f}_{n}$ of $N=4$ points.

$$
\mathbf{f}_{n}=\sum\limits_{k=0}^{3}\mathbf{F}_{k}e^{in(2\pi/4)k}\equiv \sum\limits_{k=0}^{3}\mathbf{F}_{k}W_{kn}
$$
We can write the coefficient matrix explicitly as follows
$$
\begin{pmatrix}
\mathbf{f}[0] \\ \mathbf{f}[1] \\ \mathbf{f}[2] \\ \mathbf{f}[3]
\end{pmatrix} = \underbrace{ \begin{pmatrix}
W_{00} & W_{01} & W_{02} & W_{03} \\
W_{10} & W_{11} & W_{12} & W_{13} \\
W_{20} & W_{21} & W_{22} & W_{23} \\
W_{30} & W_{31} & W_{32} & W_{33} 
\end{pmatrix} }_{ \mathbf{W}_{4} } \begin{pmatrix}
\mathbf{F}[0] \\ \mathbf{F}[1] \\ \mathbf{F}[2] \\ \mathbf{F}[3]
\end{pmatrix}
$$
and observe that

$$
W_{nk} = e^{i (\pi/2)nk} = \begin{cases}
\ \ \ 1  &&(nk=4m)\\
\ \ \ i &&(nk=4m+1)\\
-1 &&(nk=4m+2)\\
  -i &&(nk=4m+3)
\end{cases}
$$
where $m\in\mathbb{N}$. We then proceed to write the coefficients with indices that reflect the of the product $nk$ and use the above to attach a numerical value to it

$$
\bbox[#FFECA9,6px, border:2px solid black]{\mathbf{W}_{4}=\begin{pmatrix}
W_{0} & W_{0} & W_{0} & W_{0} \\
W_{0} & W_{1} & W_{2} & W_{3} \\
W_{0} & W_{2} & W_{4} & W_{6} \\
W_{0} & W_{3} & W_{6} & W_{9} \\
\end{pmatrix} = \begin{pmatrix}
1 & 1 & 1 & 1 \\
1 & i & -1 & -i \\
1 & -1 & 1 & -1 \\ 
1 & -i & -1 & i
\end{pmatrix}}
$$

> [!QUESTION] Question 3 (continued)
> (b) Verify that the columns of $\mathbf{W}_{4}$ are orthogonal.
> (c) Do the columns of $\mathbf{W}_{4}$ form a basis of a vector space?
> (d) Express the Hermitian conjugate $\mathbf{W}_{4}^{\dagger}$.
> (e) demonstrate that the direct DFT can be written as $\mathbf{F} = \mathbf{W}_{4}^{\dagger}\mathbf{f}$.

***(b)*** The multiplication $W_{4}^{\dagger}W_{4}$ (where the dagger is the complex transpose) results in a matrix whose entries depict every possible inner product between columns of $W_{4}$. A quick calculation reveals that

$$\bbox[#FFECA9,6px, border:2px solid black]{W_{4}^{\dagger}W_{4}=4I}$$
On the diagonal is the norm squared of each vector, and the rest of the entries vanish which confirms that the columns are indeed orthogonal.


***(c)*** Since the four columns $c_{0}, \dots, c_{3}$ form an orthogonal set, they are, by definition, a linearly independent set of dimension 4 and therefore form a basis for $\mathbb{C}^{4}$.

***(d)*** The hermitian conjugate $W_{4}^{\dagger}$ is given by the following

$$\bbox[#FFECA9,6px, border:2px solid black]{W_{4}^{\dagger}=
\begin{pmatrix}
1 &1 &1 &1 \\
1 &i &-1 &-i \\
1 &-1 &1 &-1 \\
1 &-i &-1 &i
\end{pmatrix}}
$$

**(e)** The DFT is given by the following 
$$F_{n} = \frac{1}{4}\sum\limits_{n=0}^{N-1}f_{n}e^{-i(2\pi/4)kn}\equiv \frac{1}{4}\sum\limits_{n=0}^{N-1}f_{n}\tilde{W}_{kn}$$
It is easy to see that the new matrix is simply the complex conjugate of the matrix defined at *(a)* 
$$W_{kn}^{*} = [e^{-i(2\pi/4)kn}]^{*}=e^{i(2\pi/4)kn}=\tilde{W}_{kn}$$
and since both matrices are symmetric in the sense that they are both equal to their transpose we can show that

$$
\bbox[#FFECA9,6px, border:2px solid black]{\mathbf{F}}=\frac{1}{4}\tilde{W}_{4}\mathbf{f} = \frac{1}{4}W^{*}_{4}\mathbf{f} = \frac{1}{4}{W^{*}_{4}}^{T}\mathbf{f} = \bbox[#FFECA9,6px, border:2px solid black]{\frac{1}{4}W_{4}^{\dagger}\mathbf{f}}
$$
which is the desired result.

> [!QUESTION] Question 3 (continued)
> (f) By normalizing the DFT matrix by the factor $\frac{1}{\sqrt{ N }}$ it is possible to obtain symmetric DFT and IDFT $$W_{N} \Rightarrow \frac{1}{\sqrt{ N }}W_{N}$$ Following such a definition, the $\frac{1}{N}$ factor of the DFT vanishes. The columns of the DFT are now orthonormal. Show that $W_{4}$ defined this way is unitary.

**(f)** Using our insight from *(b)* it is trivially apparent that under the given transformation the following changes
$$
W_{4}^{\dagger}W_{4}=4I \rightarrow W_{4}^{\dagger}W_{4}=I
$$
which is the definitional criterion for a unitary matrix.

> [!QUESTION] Question 3 (continued)
> (g) Write a Python script that generates the matrix from (f). Choose N to be the last digit of your ID greater than one (9). Choose an arbitrary N dimensional signal and apply the matrix on it. Compate the result you got with the one obtained using FFT.

We generate a DFT matrix, and a random signal both of dimension 9, using Python in a script given below

```python
# generating a random signal
f = np.random.random(9)

# generates a DFT matrix of dimension N
def W(N):
	M = np.zeros((N,N),dtype=complex)
	for j in range(N):
		for k in range(N):
			M[j,k] = np.round(np.exp(j*k*(2j*np.pi/N)))
		return 1/np.sqrt(N)*M

# calculating the DFT
F = W(9).dot(f)
```

Which yields

$$\small\bbox[#FFECA9,6px, border:2px solid black]{
\mathbf{W}_{9}\mathbf{V}=\begin{pmatrix}4.67 \\ 0.39 + 0.06 i \\0.86 - 0.35 i\\-0.39 + 0.95 i\\-1.37 - 0.73 i\\-1.37 + 0.73 i\\-0.39 - 0.95 i\\0.86 + 0.35 i\\0.39 - 0.06 i \end{pmatrix}}
$$
Hopefully the following is the required picture of the DFT matrix
![center|400](../9.%20Misc/attachments/Pasted%20image%2020240625135943.png)

# Question 4

> [!QUESTION] Question 4
> (a) Let $f$, $g$ be vectors in a Hilbert space. Prove the triangle inequality.
> (b) Prove that the cosine of the angle between the vectors gets values only between -1 and 1.
> (c) What is the angle between two orthogonal vectors? 


**(a)** 
$$
\begin{align}
||f+g||^{2}&=\braket{  f+g,f+g  }  \\
&=\braket{ f,f  }+\braket{ f,g  }+\braket{ g,f  }+\braket{ g,g  } \\
&=||f||^{2} + 2Re[\braket{ f,g  }] + ||g||^{2} \\
&\leq ||f||^{2} + 2||f||\cdot||g|| + ||g||^{2} \tag{4}\\
&=(||f|| +  ||g||)^{2} \tag{5}
\end{align}

$$

Where in line (4) we used the fact that the real part of the inner product of two complex numbers is less
than or equal to the product of their norms. This is essentially **Bessel's inequality**

$$
|\braket{  f,g  }  |\leq \sqrt{ \braket{  f,f  }\braket{ g,g |  }   } = ||f||\cdot||g||
$$
Taking the square root of the final result (5) we arrive at the desired proof
$$
||f+g||\leq||f|| +  ||g||
$$

**(b)** From Bessel's inequality we know that

$$
|\mathbf{f}\cdot \mathbf{g}| = |\mathbf{f}| |\mathbf{g}|\cos\theta\leq |\mathbf{f}| |\mathbf{g}|
$$

That means that $\cos\theta\in(-1,1)$

**(c)** Since Bessel's inequality holds for orthogonal vectors, it is apparent from previous section that $\theta=90^{\circ}$ is the angle between two orthogonal vectors.

# Question 5

> [!QUESTION] Question 5
> Consider the vector $\mathbf{f}=1\mathbf{u}_{1}+2\mathbf{u}_{2}$ where $\mathbf{u}_{\scriptsize j}$ are cartesian unit vectors of $\mathbb{R}^{2}$.
> (a) Find the best approximation (in $l_{\scriptsize 2}$ sense) of $\mathbf{f}$ in $\mathbb{R}^{1}$ defined by the unit vector $\displaystyle\mathbf{v}_{1}=\frac{1}{\sqrt{ 2 }}\begin{bmatrix}1\\1\end{bmatrix}$
> (b) Plot the error vector $\mathbf{d}\equiv \mathbf{\hat{f}}-\mathbf{f}$
> (c) Verify that $||f||^{2}=||\hat{f}||^{2}+||d||^{2}$

**(a)** We wish to find the best approximation of $f$ in a subspace $\mathbb{R}^{1}$ using the given unit vector $\mathbf{v}_{1}$. The inner product in the $l_{2}$ sense yields
$$
\braket{ \mathbf{v}_{1},\mathbf{f} } = \frac{1}{\sqrt{ 2 }}\cdot 1 + \frac{1}{\sqrt{ 2 }}\cdot 2 = \frac{3}{\sqrt{ 2 }}
$$
and the approximation is given as follows
$$\begin{align}
\mathbf{\hat{f}}&=\sum\limits_{n}\braket{ \mathbf{v}_{n},\mathbf{f} }\mathbf{v}_{n}  \\
&= \braket{ \mathbf{v}_{1},\mathbf{f} }\mathbf{v}_{1}  =\frac{3}{2} \begin{bmatrix}
1\\1
\end{bmatrix}
\end{align}
$$
**(b)**  The difference between the approximation and the original vector is 
$$
\mathbf{d}=\mathbf{\hat{f}}-\mathbf{f} = \frac{3}{2} \begin{bmatrix}
1\\1
\end{bmatrix} - \begin{bmatrix}
1\\2
\end{bmatrix} = \begin{bmatrix}
\ \ \ 1/2 \\ -1/2
\end{bmatrix}
$$

![center|450](../9.%20Misc/attachments/Pasted%20image%2020240626174631.png)

**(c)**  It is easy to verify that the following holds

$$
||\mathbf{\hat{f}}||^{2} + ||\mathbf{d}||^{2} = \left( \frac{9}{2} \right) + \left( \frac{1}{2} \right) = 5 = ||\mathbf{f}||^{2}
$$

# Question 6

> [!QUESTION] Question 6
> Let P2 be the space of polynomials of order 2 or less defined for $0\leq x\leq 1$.
> (a) Show that $\{ x^{2}-x+2, -x^{2} +x , x-1\}$ form a basis for P2.
> (b) Is this basis orthogonal?

**(a)**  We can represent a general P2 polynomial $\alpha x^{2} +\beta x + \gamma$ as a vector using only the coefficients $(a,\beta,\gamma)$ so that the given set can simply be written as
$$
\Big\{ (1,-1,2), (-1,1,0), (0,1,-1) \Big\}
$$
finding whether the set is linearly dependent, similar to what we did in question one, can be done by finding whether there exists a set of coefficients $c_{\scriptsize 1}, c_{\scriptsize 2}, c_{\scriptsize 3}$ such that the linear combination vanishes.
$$
\begin{align}
c_{1}-c_{2}=0 \\
-c_{1}+c_{2}+c_{3}=0 \\
2c_{1} -c_{3}=0
\end{align}
$$

Solving the system can be done only when
$$c_{1}=c_{2}=c_{3}=0$$
The set is therefore linearly independent, and since it is of dimension 3, it can span the 3-dimensional P2 space of polynomials, forming a basis.

**(b)** Using the appropriate inner product
$$
\braket{ f,g }=\int\limits_{0}^{1} f(x)g(x) \, dx  
$$
we can find whether any couple of vectors in the set are orthogonal
$$
\begin{align}
\braket{ \psi_{1} | \psi_{2} } &= \int\limits_{0}^{1}  (2-x+x^{2})(x-x^{2})\, dx  \\
&=\int\limits_{0}^{1} (2x -3x^{2}+x^{3}-x^{4}) \, dx   \\
&=\left[ x^{2} - x^{3}+\frac{x^{4}}{4}-\frac{x^{5}}{5} \right]_{x= 0}^{x=1} = \frac{1}{20}\neq0
\end{align}

$$
For the basis to be orthogonal, all vectors must be orthogonal. Since $\psi_{1}$ and $\psi_{2}$ aren't orthogonal, it is enough to conclude that the entire basis isn't either.