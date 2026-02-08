#quantum #statistical-mechanics 

Interaction between light and matter on the atomic scale can be described by three main processes.

- Excitation of electrons by **stimulated absorption** of a photon 
- Decay of an excited electron and the release of a photon by **spontaneous emission** 
- Induced decay of an excited electron by an incident photon which in turn result in the release of another identical photon, a process known as **stimulated emission**. 
  
For a radiative transition between two energy levels $\ket{1}$ and $\ket{2}$ the dynamic of level **population densities** $N_{1}$ and $N_{2}$ respectively can be modeled using Einstein's coefficients
$$\begin{align*}
&\text{spontaneous emission}& \frac{dN_{2}}{dt}&= -A_{21}N_{2}\\ \\
&\text{stimulated absorption}& \frac{dN_{2}}{dt}&= B_{12}N_{1}u(\nu)\\ \\
&\text{stimulated emission}& \frac{dN_{2}}{dt} &= -B_{21}N_{2}u(\nu)&
\end{align*}$$
A general process involves all types of transitions and is given by
$$\boxed{\frac{dN_{2}}{dt}=-A_{21}N_{2}+B_{12}N_{1}u(\nu)-B_{21}N_{2}u(\nu)}$$

> [!NOTE]- Plank Distribution as Spectral Distribution
> In the steady-state case $\dot{N_{2}}=0$ we can separate $u(\nu)$ to get
$$u(\nu) = \frac{A_{21}}{B_{21}}\left[ \frac{1}{\frac{B_{12}N_{1}}{B_{21}N_{2}}-1} \right] = \frac{A_{21}}{B_{21}}\left[ \frac{1}{\frac{B_{12}g_{1}}{B_{21}g_{2}}e^{\beta h\nu}-1} \right]\tag{1}$$
using the [[Maxwell Boltzmann Distribution|Boltzmann distribution]] for the population ratio in equilibrium. By taking the spectral distribution to be a [[Black Body Radiation|black-body spectrum]] we can gain expressions for the coefficients. $$u_{\scriptsize\mathbf{BB}}(\nu)=\frac{8\pi h\nu^{3}}{c^{3}}\left[ \frac{1}{e^{\beta h\nu}-1} \right]$$
By analogy to equation $(1)$ the following relations are available $$\begin{align*}
\frac{B_{12}g_{1}}{B_{21}g_{2}}&= 1 \quad &\to&  &&B_{12} = \frac{g_{2}}{g_{1}}B_{21} \\
\frac{A_{21}}{B_{21}}&= \frac{2h\nu^{3}}{c^{2}} &\to& &&B_{21} = \frac{c^{3}}{8 \pi h\nu^{3}}A_{21}
\end{align*}$$

$$\begin{align*}
A_{21}&=\frac{1}{\tau_{21}}= \frac{1}{\tau_{sp}}\\
B_{21} &= \frac{\lambda^{3}}{8\pi h \tau_{sp}}\\
B_{12} &= \frac{g_{2}}{g_{1}}\frac{\lambda^{3}}{8\pi h \tau_{sp}}\\
\end{align*}$$
Plugging the above expressions for the coefficients and replacing $u(\nu)$ with an expression for intensity using $I(\nu)=u(\nu)c \quad\to \quad u(\nu)=\frac{In}{c_{0}}$
$$\frac{dN_{2}}{dt}= -\frac{N_{2}}{\tau_{sp}} - \frac{\lambda^{3}}{8\pi h \tau_{sp}}\left( N_{2}-\frac{g_{2}}{g_{1}}N_{1} \right) \frac{n}{c_{0}}I(\nu)$$