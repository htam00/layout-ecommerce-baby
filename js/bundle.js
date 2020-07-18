let headerComponent = document.getElementById("header")

/* This function open the menu lateral.
 *
 * function   open
 * @Component Menu
 */
const openMenu = () => {
	return headerComponent.className += " responsive"
}

/* This function Closed the menu lateral.
 *
 * function   closed
 * @Component Menu
 */
const closedMenu = () => {
	return headerComponent.className = "header"
}

// Toggle Menu [ open || close ]
let elementToOpenMenu = document.getElementById("open-menu"),
elementToClosedMenu = document.getElementById("closed-menu")

// Toggle Theme [ light || dark ]
let lightTheme = document.getElementById("light-theme"), 
darkTheme = document.getElementById("dark-theme")

// Events Components
elementToOpenMenu.addEventListener("click", openMenu)
elementToClosedMenu.addEventListener("click", closedMenu)
