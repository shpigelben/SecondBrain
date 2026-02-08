# S - Matrix
___
#QM2 
___

The S (scattering) matrix relates an initial state to a final state in a system that undergoes a scattering process.

- The S-matrix represents a black box in the sense that it describes only waves that come in and out of the region that surrounds the barrier it describes.

The following are the waves functions, one coming from the left, the other going to the right

$$\psi_L = A_1e^{ikx} + B_1e^{-ikx}$$
$$\psi_R = A_2e^{ikx} + B_2e^{-ikx}$$

We bunch together the amplitudes of the waves going __into__ the barrier and the amplitudes of the waves going __out__ of the barrier in "vector" notation 

$$\psi_{in} \mapsto 
\begin{pmatrix}
A_1 \\ A_2
\end{pmatrix}
\quad\quad\quad\quad
\psi_{out} \mapsto 
\begin{pmatrix}
B_2 \\ B_1
\end{pmatrix}$$

The transition between the two states is through the S-matrix

$$ \hat{S} \ \mapsto
\begin{pmatrix}
S_{11} & S_{12} \\
S_{21} & S_{22} \\
\end{pmatrix}$$

Such that

$$\psi_{out} = \hat{S} \ \psi_{in}
\quad
\Longrightarrow
\quad
\begin{pmatrix}
B_2 \\ B_1
\end{pmatrix} =
\begin{pmatrix}
S_{11} & S_{12} \\
S_{21} & S_{22} \\
\end{pmatrix}
\begin{pmatrix}
A_1 \\ A_2
\end{pmatrix}$$

