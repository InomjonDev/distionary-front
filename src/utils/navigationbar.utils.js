export const getNavItemClass = (targetPath, currentPath) => {
	return `navigation-bar__item ${
		currentPath === targetPath ? 'navigation-bar__item-active' : ''
	}`
}
