#note #physics/quantum #concept | #incomplete 

From the [[Postulates of Quantum Mechanics |second postulate of quantum mechanics]], and from the demand that normalized states remain normalized as they evolve in time it follows that the time evolution operator in quantum mechanics should be [[Unitary Matrix|unitary]]
$$ \ket{\psi_t} = \hat{U}(t)\ket{\psi_0} $$
Under the assumptions that the system is isolated and that there are no external fields present, the evolution operator must have a group property.
$$\hat{U}(t) = 
\hat{U}\left(\frac{t}{N} \right) \cdot \ ... \ \cdot \hat{U}\left(\frac{t}{N} \right)  = 
\left[\hat{U}\left(\frac{t}{N} \right) \right]^N
\tag{1}$$
Looking at an infinitesimal evolution in time we get
$$
\hat{U}(dt ) \approx 1 + dt\left(\frac{d\hat{U}}{dt}\Bigg|\right)_{t=0} \equiv 1- idt\hat{\mathcal{H}}\tag{2}
$$
in order for the first order approximation of the infinitesimal evolution to remain unitary, we define its derivative as $i$ times a hermitian operator $\mathcal{H}$ so that overall
$$\begin{align*}
UU^{\dagger}&=(1-idt \mathcal{H})(1 +idt \mathcal{H})\\
&=1 + (dt\mathcal{H})^{2}\\
&=1
\end{align*}$$
Where the second order term is negligible in the limit of $dt\to\infty$. By invoking group property $(1)$ using our new definition of $U$ in $(2)$ were $dt=t/N$ we get
$$\hat{U}(t) =\Big[\hat{U}(dt)\Big]^{\large \frac{t}{dt}}=\left[ 1 - i \frac{t}{N} \hat{\mathcal{H}} \right]^N
\xrightarrow[N \to \infty]{} e^{-it \hat{\mathcal{H}}}\tag{3}$$
and in the limit of large $N$ we recall the definition of the [[Exponent|exponent]] to receive the definition of continuous evolution in time
$$\boxed{\begin{align*} \\ \quad
\hat{U}(t) = {\Large e^{-it\hat{\mathcal{H}}}} \quad \\\
\end{align*}} $$
$\mathcal{H}$ is called the [[Hamiltonian Operator|Hamiltonian]] of the system. It is the generator of evolution in time.

___
# Energy Basis
The hamiltonian operator $\mathcal{H}$ is defined as the generator of evolution in time. We introduce its eigenstates $\ket{n}$ with corresponding eigenvalues which correspond to the possible energy values of the system
$$ \hat{\mathcal{H}}\ket{n} = \mathcal{E}_{n}\ket{n} $$
They are, by virtue of $(2)$ the states that diagonalize $\hat{U}$. Let us then find the eigenvalues of the evolution operator $\hat{U}$
$$\begin{align*}
\hat{U}(t)\ket{n} &= e^{-it\hat{\mathcal{H}}}\ket{n} \\
&= \sum_{j=0}^\infty\frac{(-it)^j}{j!}\hat{\mathcal{H}}^j\ket{n}\\
& = \sum_{j=0}^\infty\frac{(-it)^j}{j!}(\mathcal{E}_{n})^{j}\ket{n} = e^{-it\mathcal{E}_{n}}\ket{n}
\end{align*}$$
It is therefore convenient to write the time evolution of a general state in the energy basis
$$\ket{\psi(t)}= \hat{U}(t)\ket{\psi} = \hat{U}(t)\sum\limits_{n}c_{n}\ket{n}=\sum\limits_{n} c_{n}e^{-it \mathcal{E}_{n}}\ket{n} $$
___
# Time - Energy Uncertainty


# Pictures of Time Evolution

## Schrodinger Picture
In the Schrodinger picture of quantum mechanics the states of the system evolve while the operators remain constant

## Heisenberg Picture
In the Heisenberg picture of quantum mechanics it is the operators, the observables, that evolve and not the states of the system
$$\braket{\psi(t)|A|\psi(t)} = \braket{\psi(0)|U^{\dagger}AU|\psi(0)}\equiv \braket{\psi(0)|A_{H}(t)|\psi(0)}$$
## Interaction Picture
