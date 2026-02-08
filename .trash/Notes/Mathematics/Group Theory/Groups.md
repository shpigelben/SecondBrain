# $$\small\textbf{Groups} $$

#group #theory 

A group is a set of elements $S=\{\tau_{1},\tau_{2}, ...,\tau_{n} \}$ equipped  with a group operation $*$ and can be regarded as an ordered couple $(S,*)$ . The group operation $*$ is a binary operation that takes two group members and returns a third $$\tau_{1}*\tau_{2}\longmapsto \tau_{3}\in S$$ 

A set of elements with a binary operation $(S,*)$ is considered a group if it satisfies the following 3 __Axioms__

> $$\begin{align} & \textbf{\small 1. Associativity of Group Product}  \\ \\ &\quad (\tau_{1}*\tau_{2})*\tau_{3} =\tau_{1}*(\tau_{2}*\tau_{3})
 \end{align} $$

<br>

> $$\begin{align*}
&\quad\textbf{\small 2. Identity Element I} \\ \\
&\quad U(\tau,I) \longmapsto \tau * I = \tau
\end{align*}$$

<br>

>$$\begin{align*}
&\textbf{\small 3. Inverse} \\ \\
& \tau* \tau^{\small-1} = I
\end{align*}$$

In general, group elements are not commutative, meaning that $\tau*\tau'$ does not necessarily equal $\tau'*\tau$, in that case we say that their [[Commutator]] does not vanish $[\tau,\tau']\neq 0$

___
$$\textbf{Representation of a Group}$$
___

There are certain groups, like rotations in 3D, that are too abstract and lack a concrete mathematical language that can describe them. [[Representation Theory]] is a field that "attaches" a mathematical formalism to a group (like representing rotations with matrices, with matrix multiplication as the group product), and consequently provides a tangible way of talking about said group. A representation is valid when it satisfies the 3 axioms stated above.
___
$$\textbf{Realization of a Group}$$
___

[[Realization of a Group]]

```ad-example
collapse: closed

examples for a set of elements with a binary operation that form a group

| elements     | operation    | identity | inverse |
| ------------ | ------------ | -------- | ------- |
| integers $n$ | addition $+$ | $0$      | $-n$    |

```

https://en.wikipedia.org/wiki/Group_(mathematics)

___
$$\textbf{Classification of Groups}$$
___

![[Group Types.png]]

A group is __finite__ or __infinite__ simply if it has finite or infinite group elements. Whether finite or infinite a group can also be discrete or continuous. A group is discrete if it has no accumulation points. A continuous group can be represented on a continuous manifold.

A [[Lie Group]] is a finite - continuous group whose group elements span a continuous and also __differentiable__ manifold. The added condition of differentiability ensures that the manifold is locally flat at any point. 

___
$$\textbf{What Makes a Group Unique}$$
___
