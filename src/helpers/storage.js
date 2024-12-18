export const setItem = (key, data) => {
	try {
		localStorage.setItem(key, JSON.stringify(data))
	} catch (error) {
		console.log(error)
	}
}

export const getItem = key => {
	try {
		return JSON.parse(localStorage.getItem(key))
	} catch (error) {
		console.log(error)
	}
}

export const removeItem = key => {
	try {
		localStorage.removeItem(key)
	} catch (error) {
		console.log(error)
	}
}

export const clear = () => {
	try {
		localStorage.clear()
	} catch (error) {
		console.log(error)
	}
}
