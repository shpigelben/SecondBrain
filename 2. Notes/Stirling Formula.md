#note #math #probability #derivative | #comeplete 

The factorial operation $N!$ can be approximated for large $N$ values.

$$
f(n)\equiv \ln{(n!)}$$
$$\begin{align*}
f(n+1) &= \ln(n+1)!\\
&=\ln{((n+1)(n!))}\\
&=\ln(n+1)+\ln(n!)\\
&=\ln(n+1)+f(n)
\end{align*}$$
Rearranging, and taking $n\to n-1$ we get
$$ \begin{align*}
& f(n)-f(n-1)=\ln(n)\\
& \frac{df}{dn} \approx \ln(n) \longrightarrow f(n)=n\ln(n) - n=n\ln\left(\frac{n}{e}\right)
\end{align*} $$
$$ \large\boxed{\begin{align*}
f(n)=\ln(n!)\approx n\ln\left(\frac{n}{e}\right)
\end{align*}} $$
