# Lynxis
Lynxis is a text editing interface intended to be used for note-taking, especially in mathematics courses. Rather than storing notes as a linear file, user input is stored as network of relationships between informational nodes. This opens up a wide range of possibilities.

Check out the project at [lynxis.org](http://lynxis.org/)!

## Inherent Benefits of the Structure
* Navigation of large documents is constrained not by the length of the document, but by the 'depth' (number of structure junctions between starting node and ending node)
* Potential for graphical display of structure - useless but interesting example at lynxis.org/display.html
* Potential for algorithm usage to emphasize important information
* Information the user is unfamiliar with and wishes to learn
* Nodes frequently visitied or recently edited by user
* Closer representation of the way information actually exists in the mind

## The Interface as it Stands
* Information is stored as a hybrid of tree (single-parent) and linear structure
* Two modes available:
* View Mode: navigate through structure of node relations
* Edit Mode: modify node structure and edit node text
* MathJax Parsing:
 * TeX put between dollar signs will be parsed using the MathJax API on both page reload or deselection of the node
 * Selection of a node will de-parse rendered MathJax in order for user to edit text
* Text editing built around Contenteditable API with certain keys remapped

## Screenshot Examples:
### Heading Form:
![image](https://cloud.githubusercontent.com/assets/18433116/17279672/4a8f72e0-572f-11e6-96bd-3398808d9816.png)

### Network Form:
![image](https://cloud.githubusercontent.com/assets/18433116/17275193/07bf4240-56b4-11e6-92fc-cba1c3621349.png)


## Version History:

#### v1 (combined nested bubbles with text display):
![image](https://cloud.githubusercontent.com/assets/18433116/15915487/7b1c0dc0-2d9e-11e6-9036-056657bf7ef9.png)
#### v0 (nested bubbles only):
![image](https://cloud.githubusercontent.com/assets/18433116/15207649/4a486f68-17dc-11e6-83a6-478460995392.png)
