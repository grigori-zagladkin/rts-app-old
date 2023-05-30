export const getLocalStore = (s: string) => {
	if (typeof localStorage !== 'undefined') {
		const ls = localStorage.getItem(s)
		return ls ? JSON.parse(ls) : null
	}
	return null
}
