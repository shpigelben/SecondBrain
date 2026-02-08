Ben Shpigel 204389449

## Synthetic Blur

The first step involves loading the original image (`pedro.jpeg`) which is converted to grayscale and is then blurred by convolving it with a discrete Gaussian kernel (PSF)

$$
\text{PSF}_{mn} = \exp\left[  \frac{(m-m_{cent})^{2}+(n-n_{cent})^{2}}{2\sigma^{2}} \right]
$$

After blurring, normally distributed (Gaussian) additive noise is introduced to the image following the 25 dB of SNR as specified by the manual.

![center|1000](../9.%20Misc/attachments/Pasted%20image%2020250522001234.png)


## Reconstruction by a Wiener Filter
The first attempt at reconstruction uses the Wiener filter with the known Optical Transfer Function (OTF). The OTF is the Fourier Transform of the true PSF (the Gaussian kernel used for blurring). We a reconstruct using $\gamma=0.01$.
![center|600](../9.%20Misc/attachments/Pasted%20image%2020250522002023.png)

Next, we chose an area of high contrast for the ESF, then constructed a smoothed ESF by averaging over the rows and then calculated its derivative to find the LSF

![center|600](../9.%20Misc/attachments/Pasted%20image%2020250522003021.png)

Next, as stated in the manial, we rotated the LSF around its peak and got the estimated PSF, below is its comparison against the known PSF

![center|600](../9.%20Misc/attachments/Pasted%20image%2020250522003244.png)

The true and estimated OTFs are calculated using a standard 2D FFT over the true and estimates PSFs respectively
![center|600](../9.%20Misc/attachments/Pasted%20image%2020250522003713.png)


![center|600](../9.%20Misc/attachments/Pasted%20image%2020250522003956.png)

Finally a comparison of the reconstruction using the true and estimated OTFs

![center|800](../9.%20Misc/attachments/Pasted%20image%2020250522004210.png)