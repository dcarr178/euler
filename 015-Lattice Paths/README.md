#Lattice paths
##Problem 15 
Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.

How many such routes are there through a 20×20 grid?

## Note to self
Our grid is defined as (x,y) points with (0,0) as the bottom right of our grid
and (-x, -y) as the top left of our grid. The number of paths from any point
where x = 0 means we are on the right edge of the grid and there is only one
path to (0,0). The number of paths from any point where y = 0 means we are on
the bottom edge of the grid and there is only one path to (0,0). For any other
point on the grid, the number of paths = the number of paths for one point to the
right + the number of paths for one point below.

numberOfPaths(0,-1) = 1 because it's on the right edge of the grid

numberOfPaths(-1,0) = 1 because it's on the bottom edge of the grid

numberOfPaths(-1,-1) = one point right + one point below
= numberOfPatha(0,-1) + numberOfPaths(-1, 0)
= 1 + 1
= 2
so numberOfPaths(-1,-1) = 2.

we can save a lot of processing time by only calculating numberOfPaths ONCE
for each point on the grid and storing it in an array so we can pull from the
array if it is ever needed again instead of having to recalculate it again
from scratch
