CSS folder structure
==================== 

## Concept
The folders are organized in a way that separates CSS files based on their role, in order to:

* Use OOCSS principles.
* Improve project maintainabilty.
* Normalize workflow among a team.

4 roles are differentiated:
1. base
2. objects
3. site
4. modules

### 1. base
Files containing generic CSS rules, such as:
* Helper classes
* CSS Reset / Normalize
* CSS Librairies

Note: you usualy dont modify these files.

### 2. objects
Files creating and extending objects.
Objects are **repeating visual patterns** that can be abstracted to a specific HTML and CSS snippet. Once created objects can be reused throughout the project.
For more information about objects, see [OOCSS Wiki](https://github.com/stubbornella/oocss/wiki).

Note: you usualy only modify the ´extend´ part of these files.

### 3. site
Files containing very general rules that are specific to the project/site, such as:
* Global wrapper layout rules (body background, page width, ...)
* Headings style
* General spacing rules

Note: This is usually the place where you start setting up the basis of your project.

### 4. modules
Files creating modules specific to your project.

A module is an independent and self-contained element that can be combined with other elements of the same nature and that aims to fullfil a specific function.

´Module´s are usually combined with ´objects´ in order to achieve a specific layout. However, a module should not require an object.
Thus, a ´news´ module should indifferently be combinable with a ´block´ or a ´nav´ object.

Note: The ´module´ concept here isn't the same as the ´mod´ concept in OOCSS.

## Concatenation order
The files should be compiled in this order:

1. base/normalize.css
2. base/helper.css
3. base/helper-typography.css
4. objects/*.css
5. site/*.css
6. components/*.css