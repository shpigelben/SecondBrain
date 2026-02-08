#statistical #quantum #mechanics 

Particle statistics are divided into 

| Classical       | Quantum           |                   |
| --------------- | ----------------- | ----------------- |
| ---------       | __Bosons__        | __Fermions__      |
| distinguishable | indistinguishable | indistinguishable |
| interacting     | noninteracting    | interacting       |

Below are the three main particle statistics for N particles with occupation numbers $n_s$ of states with corresponding degeneracy $g_s$.

$$
\begin{align*}
&\Gamma_{c} = \prod\limits_{s} \frac{N!}{(n_{s})!}(g_{s})^{n_{s}}
\\\\
&\Gamma_{f} = \prod\limits_{s}\begin{pmatrix}g_{s} \\ n_s\end{pmatrix}
\\\\
& \Gamma_{b}=\prod\limits_{s}
\begin{pmatrix}n_{s}+g_{s}-1 \\ n_s\end{pmatrix}
\end{align*}
$$

___
# Maxwell Boltzmann Statistics
$$\Gamma_{c} = \left(\frac{N!}{n_{1}!\dots n_{m}!}\right)(g_{1})^{n_{1}}\dots(g_{m})^{n_{m}}$$
For classical particles there is the Maxwell Boltzmann statistics. The multiplicity of a system considers the way of arranging N generally distinguishable particles $(N!)$, which are divided into states in which they are indistinguishable (therefore we divide by the permutations $n_{i}!$ of each state). Finally, for every degeneracy $g_{i}$ in state $i$ we multiply by $(g_{i})^{n_{i}}$ which are the number of choices each particle has of occupying the state given the degeneracy. 
___

# Fermi Dirac Statistics
$$\Gamma_{f} = \left(\frac{1}{1}\right)\begin{pmatrix}g_{1} \\ n_1\end{pmatrix}\dots\begin{pmatrix}g_{m} \\ n_m\end{pmatrix}$$
Fermions are quantum indistinguishable particles. We think about fermions in terms of the states they occupy. If state $m$ of degeneracy $g_{m}$ has occupation number of $n_{m}$, there are $g_{m}!$ ways of organizing the particles in the state, but since they are indistinguishable their permutation inside the state is not relevant so we divide by $n_{m}!$ and by the permutation of the "unfilled" residue $(g_{m}-n_{m})!$. In short, each state has multiplicity of $g_{m}$ choose $n_{m}$.  
___

# Bose Einstein Statistics
$$\Gamma_{b}= \left(\frac{1}{1}\right)
\begin{pmatrix}n_{1}+g_{1}-1 \\ n_1\end{pmatrix}\dots
\begin{pmatrix}n_{m}+g_{m}-1 \\ n_m\end{pmatrix}$$
For bosons which are indistinguishable and non interacting, we treat the degeneracy of each state as a partition (this is why the $g_m-1$), since bosons can bunch and fill the same "degeneracy spot". So for every state $m$ with degeneracy $g_{m}$ and occupation number $n_{m}$ there are $(n_{m} + g_{m}-1)!$ ways of arranging the particles and the partitions, without considerations of the inner permutations of the bosons and the partitions (which are also taken to be indistinguishable), so we divide by $n_{m}!$ and $(g_{m}-1)!$. in short, each state has multiplicity of $(n_{m}+g_{m}-1)$ choose $n_{m}$
