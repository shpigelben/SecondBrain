Ben Shpigel 204389449
![](../9.%20Misc/attachments/Pasted%20image%2020250423110636.png)
# 4.1 Forouhi-Bloomer (Si)

- Following the Forouhi-Bloomer Model, and using the parameters provided in the manual, we calculate and plot the refractive index as well as the extinction coefficient in the graph below.
  ![](../9.%20Misc/attachments/Pasted%20image%2020250422004808.png)
- The reference provided by the manual is irrelevant. Instead we use [these results](https://refractiveindex.info/?shelf=main&book=Si&page=Schinke) as our reference measurement for crystalized silicon.
- A simple RMSE and $\text{R}^{2}$ fit show that the model fits the measured data very well.
![700](../9.%20Misc/attachments/Pasted%20image%2020250422154321.png)

# 4.2 Cauchy (SiO2)
- Measured data for the fit it taken from [here](https://refractiveindex.info/?shelf=main&book=SiO2&page=Ghosh-o#google_vignette). 
- Values used for the Cauchy model are

| parameters | values                |
| ---------- | --------------------- |
| A          | $1.46$                |
| B          | $2.44\times{10}^{-3}$ |
| C          | $9.72\times 10^{-5}$  |

![700](../9.%20Misc/attachments/Pasted%20image%2020250422154024.png)


# 4.3 Sellmeier (Si3N4)
- Measured data from [here](https://refractiveindex.info/?shelf=main&book=Si3N4&page=Beliaev).
- Parameters used for the Sellmeier model $A_{1}=2.8939$ and $\lambda_{1}=139.67\times10^{-3} [\mu \text{m}]$.
- For some reason the $R^{2}$ value for the extinction coefficient doesn't return a value, probably due to division by a very small number.

![700](../9.%20Misc/attachments/Pasted%20image%2020250422173247.png)

# 4.4 Drude (Aluminum)

- Calculated and plotted the Drude model using the parameters provided by the manual.
- The measurements for the fit are taken from [here](https://refractiveindex.info/?shelf=main&book=Al&page=McPeak).

|       | $\epsilon_{\infty}$ [eV] | $\Gamma_{p}$ [eV] | $\omega_{p}$ | $\omega_{i}$ | $f_{i}$ | $\Gamma_{i}$ |
| ----- | ------------------------ | ----------------- | ------------ | ------------ | ------- | ------------ |
| **1** | 0.952                    | 0.117             | 13.34        | 1.579        | 8.119   | 0.407        |
| **2** | 0.952                    | 0.117             | 13.34        | 2.006        | 9.908   | 1.942        |

![700](../9.%20Misc/attachments/Pasted%20image%2020250422180646.png)

- Good agreement between theory and measurement.
- There is a gap in measurement (around 1.4 um) that negatively effect the fit.
- The extinction coefficient is systematically lower in the measurement. Extinction is notoriously hard to verify experimentally, so it makes sense that a constant over or under estimation is present.

# 4.5 Fresnel (Si-Air Interface)
- Since the manual does not explicitly state from which medium the light is incident and at which angle, the graph below is the reflectance spectra for normally incident light coming from air.

![700](../9.%20Misc/attachments/Pasted%20image%2020250423065150.png)

# 4.6 Thin Layer

- Since the manual does not explicitly state the direction of light propagation and the incident medium, the graph below shows the reflectance spectra of light coming from air, onto a a thin film of SiO2 on top of crystallized silicon. Here we used both variable refractive indices for Si and SiO2 based on the models already established (Forouhi-Bloomer and Cauchy).

![800](../9.%20Misc/attachments/Pasted%20image%2020250423094449.png)