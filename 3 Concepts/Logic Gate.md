---
type: concept
discipline:
  - engineering
field: []
---

A logical gate is a [[Boolean Function]] performed on one or more _binary_ inputs

- implemented using _diodes_ and _transistors_ (examples of electronic gates) among others that are not necessarily electronic.

![[../4 Misc/Attachments/Classical Logic Gates.png]]

- A _Logic Circuit_ is the composition of logic gates


```ad-example
title: NOT
collapse: closed

```

```ad-example
title: AND
collapse: closed
|     | *1* | *0* |
| --- |:---:|:---:|
| *1* |  0  |  0  |
| *0* |  0  |  1  |
```

```ad-example
title: OR
collapse: closed
|     |  *1*  |  *0*  |
| --- |:---:|:---:|
| *1*   |  1  |  1  |
| *0*   |  1  |  0  |
```

```ad-example
title: XOR
collapse: closed
|     |  *1*  |  *0*  |
| --- |:---:|:---:|
| *1*   |  0  |  1  |
| *0*   |  1  |  0  |
```

```ad-example
title: NAND
collapse: closed
|     |  *1*  |  *0*  |
| --- |:---:|:---:|
| *1*   |  0  |  1  |
| *0*   |  1  |  1  |
```

```ad-example
title: NOR
collapse: closed
|     |  *1*  |  *0*  |
| --- |:---:|:---:|
| *1*   |  0  |  0  |
| *0*   |  0  |  1  |
```


> [!NOTE] Title
>	|     |  *1*  |  *0*  |
>	| :---: |:---:|:---:|
>	| *1*   |  1  |  0  |
>	| *0*   |  0  |  1  |


$$\left| \ \begin{array}{c|cc}X & 1 & 0 \\ \hline 1 & 1 & 0 \\ 0 & 0 & 1\end{array} \ \right|$$

