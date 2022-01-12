export const update = (items, itemId, objPropName, newobjProps) => {
    return items.map((u) => {
        if (u[objPropName] === itemId) {
            return { ...u, ...newobjProps }
        }
        return u
    })
}