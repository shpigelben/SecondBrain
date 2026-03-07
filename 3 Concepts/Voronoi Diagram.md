---
type: concept
discipline:
  - math
field:
  - geometry
---

Given a finite number of points in a region, a Voronoi diagram (or tessellation) is a partition of the region into **Voronoi cells** with the points at their interior.

A Voronoi cell around a seed is a region that contains all the points that are closer to it than to the other seeds.

# Generating a Voronai Diagram
Begin by expanding a circle around a seed. When the boundaries two circles of two different seeds meet, they stop expanding, gradually creating straight lines which are the vertices of the Voronoi cells.

• A Voronoi diagram divides the plane into separate regions where
• each region contains exactly one generating point (seed) and
• every point in a given region is closer to its seed than to any other.
• The regions around the edge of the cluster of points extend out to
infinity.

## Voronoi Cell
A Voronoi cell is the set of all points $(x)$ that are closer to the site $p$ than all other sites $q\neq p$. 
$$
\begin{align}
\mathcal{V}(p) &= \{x \in P {\large|} \ |xp|<|xq| \ \  \forall (q\neq p)\in P  \} \\ \\
&= \bigcap_{q\neq p} h(p,q)
\end{align}
$$
It can also be thought of as the intersection of all half planes created between the point $p$ and all other points $q$, and include the point $p$

## Voronoi Edge
The set of all points that are equidistant from two sites $p$ and $p'$
$$
\begin{align}
\mathcal{V\{p,p'\}} &= \{ x {\large |} |xp|=|xp'| \ and \  \} \\ \\
& = \text{rel-int}\big(\partial \mathcal{V}(p) \cap \partial \mathcal{V}(p')\big)
\end{align}
$$
rel-int → without endpoints

![center](../4%20Misc/Attachments/voronoiDiagramIllustration.png) 
# Using Parabolas


> [!NOTE]-  Parabola 
> Parabola in terms of distance from directrix to focus
> 
> ![center|400](../4%20Misc/Attachments/Pasted%20image%2020250607214015.png)

Considering the sites to be the foci of parabolas $f$ units above a sweeping line at an height $h$


A parabola can be thought of as the set of all points that are equidistant between the focus and the directrix. In other words, every point on the parabola is as far away from the focus as it is from the directrix. The point of intersection of two parabolas ==that have the same directrix== is the same distance from the focus of each parabola. By using the directrix as a beach line for all seeds on the plane, all intersection points can be found.

```python
import numpy as np
import matplotlib.pyplot as plt
import ipywidgets as widgets

N = 200

points = np.random.rand(N,2) # generates N sets of random coordinates

def parabola(x: list, point: list, h: float)-> list:

	x0 = point[0]
	y0 = point[1]
	
	if h <= y0:
		f = 0.5*(y0 - h)
		Y0= 0.5*(y0 + h)

		return Y0 + (1/(4*f))*(x-x0)**2
```

```python
fig, ax = plt.subplots(figsize = (8,8))
ax.scatter(points[:,0],points[:,1],color ='#EC704C', marker = 'o', s=7)
ax.set_xlim(0,1)
ax.set_ylim(0,1)

vertices = []
x = np.linspace(0,1,1000)
for h in np.linspace(-1,1,1000):
    h = -h
    parabolas = []
    for n in range(N):
        y = parabola(x, points[n], h)
        if type(y) == np.ndarray:
            parabolas.append(y)

    beachline = np.zeros(len(x))
    if len(parabolas) > 0:
        for i in range(len(x)):
            y_min = np.zeros(len(parabolas))
            for p in range(len(parabolas)):
                y_min[p] = parabolas[p][i]
            beachline[i] = np.min(y_min)

    # find the break points when second derivative becomes negative
    secondDerivative = np.zeros(len(x))
    f = beachline
    for i in range(len(x)-1):
        h = 1/1000
        secondDerivative[i] = (h**(-2))*(f[i+1] - 2*f[i] + f[i-1])

    idx = np.where(secondDerivative<0)[0]
    remove_idx = []
    for i in range(len(idx)-1):
        if (idx[i]+1) == idx[i+1]:
            remove_idx.append(i)
        if x[idx[i]] < 0.005:
            remove_idx.append(i)
    idx_reduced = np.delete(idx,remove_idx)

    ax.scatter(x[idx_reduced], beachline[idx_reduced], 
                color = 'k', 
                marker='o',
                s = 0.3, zorder = 3)

    breakpoints = np.zeros((len(idx_reduced),2))
    for i in range(len(idx_reduced)):
        breakpoints[i,0] = x[idx_reduced][i]
        breakpoints[i,1] = beachline[idx_reduced][i]

    for i in range(len(idx_reduced)-1):
        norm = np.linalg


        x_diff = np.abs(breakpoints[i,0] - breakpoints[i+1,0])
        y_diff = np.abs(breakpoints[i,1] - breakpoints[i+1,1])
        
        if (x_diff < 1e-3) and (y_diff < 1e-3):
            vertices.append([breakpoints[i,0], breakpoints[i,1]])
print(vertices, len(vertices))
```

