#light #astrophysics 

The energy flux is the energy per unit time (power) that passes through an area, it can be written as
$$F = \frac{dE/dt}{dA}=\frac{L}{4\pi R^{2}}$$
- $R$ is the distance from the radiating object
- $L$ is the __Luminosity__ of the radiating object

# Energy Flux
Conservation of energy requires that the power that passes through two enclosing surfaces be the same. For simplicity the surfaces are taken to be spherical shells
$$W_{1}= \iint\limits_{S_{1}}\mathbf{F}_{1}\cdot d \mathbf{S}_{1} \stackrel{!}{=}  \iint\limits_{S_{2}}\mathbf{F}_{2}\cdot d \mathbf{S}_{2} = W_{2}$$
$F_{1}$ and $F_{2}$ are the energy fluxes at $r_{1}$ and $r_{2}$ respectively. Assuming the flux is isotropic, the integration is simple and we get
$$
F_{1} 4\pi {r_{1}}^{2} = F_{2} 4\pi {r_{2}}^{2} \Longrightarrow  F_{1} = 
\frac{4\pi {r_{2}}^{2}F_{2}}{4\pi {r_{1}}^{2}} = F_{2}\left(\frac{r_{2}}{r_{1}}\right)^{2}
$$
If $r_{2}$ is the radius of the radiating object and $r_{1}=r$ is the distance from the center of it, we have 
$$F(r) = \frac{L}{4\pi r^{2}} $$
Where $L$ is the __luminosity__ at radius $r_{2}$ which is given in units of __power__

# Intensity
Consider all rays passing through a differential surface $dA$ whose normal vector is within a solid angle $d \Omega$. at time $dt$ and in frequency range $d\nu$, the energy is given by
![[Pasted image 20220408014348.png|400]]
$$ dF_{\nu} =\frac{dE}{dt dA} = I_{\nu} d\nu d\Omega \longrightarrow \boxed{F_{\nu} = \int I_{\nu}\cos\theta d\Omega}$$
$I_\nu$ is the __specific intensity__ (or __spectral radiance__) i.e. the intensity in a differential range of frequencies. The total intensity of a radiating object will be gained by integrating over all frequencies. 
 
# Momentum Flux
Each photon carries a momentum $p=E/c$ therefore, based on energy flux we can get an expression for the momentum flux relative to the surface
$$dp_\nu = \frac{1}{c}dF_{\nu} \cos{\theta}\longrightarrow \boxed{p_{\nu} = \frac{1}{c}\int I_{\nu}\cos^{2}\theta d\Omega}$$

# Energy Density
Radiative energy per unit volume per solid angle
$$u_{\nu}(\Omega)= \frac{1}{c}I_{\nu} \ \longrightarrow \ u_{\nu} = \frac{1}{c}\int I_{\nu}d\Omega \equiv \frac{4\pi}{c}J_{\nu}$$
Where we defined $J_{\nu}$ as the __mean specific intensity__. For isotropic emission $I_{\nu}\equiv J_{\nu}$ holds.

> [!SUMMARY] 
>All quantities here are _specific_ - per unit frequency
>
| Quantity       | Equation                                                          | Dimensions                             |
| -------------- | ----------------------------------------------------------------- | -------------------------------------- |
| __Intensity__     | $$dE = \boldsymbol{I_{\nu}} d\Omega \ dA dt d\nu$$                | $$\frac{W}{m^{2}} \frac{1}{Hz \ Str}$$ |
| __Energy Density__ | $$\displaystyle dE = \boldsymbol{u_{\nu}} \ d\Omega dA cdt d\nu$$ | $$\frac{J}{m^{3}} \frac{1}{Hz \ Str}$$ |
| __Energy Flux__    | $$dF_\nu = \frac{dE/dt}{dA} = \boldsymbol{I_\nu}d\Omega d\nu$$    | $$\frac{W}{m^{2}}$$                    |
| __Momentum Flux__  | $$dp_{\nu}= \frac{1}{c}dF_{\nu}\cos\theta$$                       | $$\frac{J}{m^{3}}$$                    |
| __Luminosity__     | $$L =\int d\nu \left( \int F_{\nu} \ r^{2}d\Omega\right)$$        | $$W$$                                  | 







