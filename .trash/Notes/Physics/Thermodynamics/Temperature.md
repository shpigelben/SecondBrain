#TD1 #thermodynamics

#### Thermodynamic Temperature

We define Thermodynamic Temperature through the composition of [[Carnot Engine]]s. Since the temperature difference of a Carnot engine defines it entirely, we use this fact  in saying that two Carnot engines working between temperatures 1-2 and 2-3 are equivalent to a single Carnot engine working between temperatures 1-3

![[Composition of Carnot Engines.pdf]]

The short derivation above gives 

$$ 1-\eta(\small T_{\small 1},T_{\small 3}) = \Big(1-\eta(\small T_{\small 1},T_{\small 2})\Big)\Big(1-\eta(\small T_{\small 2},T_{\small 3})\Big) \tag{5} $$

Using the dependencies derived above, one could also write

$$1-\eta(\small T_{\small 1},T_{\small 2}) =
\frac{Q_{2}}{Q_{1}} \tag{6}
$$

From $(5)$ we can see that the LHS that $1-\eta(\small T_{\small 1},T_{\small 2})$ is a function of only temperatures 1 and 2, while from $(6)$ we can see that the dependence is of the form $f(T_2)/f(T_1)$ since the temperature is phenomenologically known to be proportional to heat and so

$$1-\eta(\small T_{\small 1},T_{\small 2}) = \frac{f(T_2)}{f(T_{1)}} \stackrel{\text{convension}}{\equiv} \frac{T_2}{T_{1}} \propto \frac{T_{\small C}}{T_{\small H}} \tag{7} $$
and so the thermodynamic temperature is defined to be 
$$\large{\boxed{\begin{align*} \\ \quad
T_{C}= T_{H}\Big[1-\eta({\small T_{H},T_{C}} )\Big]
\quad \\\
\end{align*}}} $$
___
# Temperature equalization

Let two systems, 1 and 2, be in thermal contact such that heat spontaneously flows from system 1 to system 2.
- The change in entropy must be greater than zero since the process is spontaneous as stated by the [[Second Law of Thermodynamics]]
- The total change in entropy is the sum of the change in entropy of the two systems (additivity of entropy)

$$ 0 < dS = dS_{1}+dS_{2} = \frac{{\delta Q}}{T_{1}}-\frac{{\delta Q}}{T_{2}} $$
Rearranging we get 

$$ \left(\frac{1}{T_{1}} -\frac{1}{T_{2}}\right)\delta Q > 0$$
$$ {T_{2}} > T_{1} $$
And so, without loss of generality, heat flows spontaneously from hotter objects to colder ones as a direct consequence of the seconds law. 