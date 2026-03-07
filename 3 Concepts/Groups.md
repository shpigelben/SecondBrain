---
type: concept
discipline:
  - math
field:
  - group-theory
---

A group is a set of elements $S=\{\tau_{1},\tau_{2}, ...,\tau_{n} \}$ equipped  with a group operation $*$ and can be regarded as an ordered couple $(S,*)$ . The group operation $*$ is a binary operation that takes two group members and returns a third $$\tau_{1}*\tau_{2}\longmapsto \tau_{3}\in S$$ A set of elements with a binary operation $(S,*)$ is considered a group if it satisfies the following 3 __Axioms__

# Three Axioms
1. Associativity of group product
   
   $$
   (\tau_{1}*\tau_{2})*\tau_{3} = \tau_{1}*(\tau_{2}*\tau_{3})
   $$
2. Existence of identity element 
   
   $$
   \tau * I = \tau
   $$
3. Existence of inverse 
   
   $$
   \tau*\tau^{-1}=I
   $$

In general, group elements are non-commutative, meaning that

$$
\tau*\tau' \neq \tau'*\tau
$$
In that case we say that their [[Commutator]] does not vanish $[\tau,\tau']\neq 0$

# Representation of a Group
There are certain groups, like rotations in 3D, that are too abstract and lack a concrete mathematical language that can describe them. [[Representation Theory]] is a field that "attaches" a mathematical formalism to a group (like representing rotations with matrices, with matrix multiplication as the group product), and consequently provides a tangible way of talking about said group. A representation is valid when it satisfies the 3 axioms stated above.

# [[Realization of a Group]]
examples for a set of elements with a binary operation that form a group

| elements     | operation    | identity | inverse |
| ------------ | ------------ | -------- | ------- |
| integers $n$ | addition $+$ | $0$      | $-n$    |

https://en.wikipedia.org/wiki/Group_(mathematics)


# Group Classification
A group is __finite__ or __infinite__ simply if it has finite or infinite group elements. Whether finite or infinite a group can also be discrete or continuous. A group is discrete if it has no accumulation points. A continuous group can be represented on a continuous manifold.

![[../4 Misc/Attachments/Group Types.png]]

A [[Lie Group]] is a finite - continuous group whose group elements span a continuous and also __differentiable__ manifold. The added condition of differentiability ensures that the manifold is locally flat at any point. 
