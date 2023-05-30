export function getKeys<T extends Object>(obj: T): Array<keyof T> {
	return Array.from(Object.keys(obj)) as any
}
