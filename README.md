#Platformer

##### Map format
Maps are arrays with each value (a string) representing a block on the map

The play area automatically sizes to fit the given map.

| Character     | Type               |
| ------------- |:-------------------|
| W             | Wall               |
| P             | Player start point |
| 1-9           | Ball at size N     |

##### Serving
Any webserver will serve the file, but using a file:///address will give you trouble.

I use `python -m SimpleHTTPServer` to serve it for now.

##### Current issues
- You can get stuck on each tile as you move left and right
- You can jump at any time, even mid jump
- Debug mode is required in order to see anything (since we have no graphics)



