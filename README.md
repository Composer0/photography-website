# Creative Website

https://www.orionpalmer.com/projects/CreativeWebsite/index.html

The "Creative Website" script is designed to create an interactive and visually appealing website with various animations and transitions. This documentation outlines the components, functions, and interactions within the script.

### Script Components

1. **Variables and Constants**
   - `controller`, `slideScene`, `pageScene`, `detailScene`: Variables to manage ScrollMagic scenes.
   - `mouse`, `mouseTxt`: Elements representing the cursor and its text content.
   - `burger`, `navBar`, `home`: Elements related to the navigation bar and home link.

2. **Functions**
   - `animateSlides()`: Animates slide transitions and ScrollMagic scenes for each slide.
   - `cursor(e)`: Updates the position of the cursor based on the mouse movement.
   - `activeCursor(e)`: Applies active styles to the cursor based on the hovered element.
   - `navToggle(e)`: Toggles the navigation bar's appearance on the burger menu click.
   - `removeToggle()`: Removes the navigation bar's active state.

3. **Barba Page Transitions**
   - Initializes Barba.js to manage page transitions.
   - Defines view namespaces, which dictate animation and behavior for each view.
   - Manages transitions for leaving and entering views, including animations and scroll positioning.

4. **`detailAnimation()` Function**
   - Animates slide transitions and effects for detail pages.
   - Sets up ScrollMagic scenes for detail slide animations.

### Interaction and Event Listeners

- `home.addEventListener('click', removeToggle)`: Removes the navigation bar's active state when the home link is clicked.
- `burger.addEventListener('click', navToggle)`: Toggles the navigation bar's appearance on the burger menu click.
- `window.addEventListener('mousemove', cursor)`: Updates the cursor's position based on mouse movement.
- `window.addEventListener('mouseover', activeCursor)`: Applies active styles to the cursor based on the hovered element.

### Conclusion

The "Creative Website" script creates an engaging and interactive website with various animations, transitions, and effects. Developers can learn from this script to implement custom animations, page transitions, and interactive cursor effects to enhance the user experience of their websites. This script demonstrates the effective use of libraries like ScrollMagic and Barba.js to create seamless and visually captivating web experiences.
