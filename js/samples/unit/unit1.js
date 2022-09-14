/**
 * 
 * @param {string} name 
 */
export const sayHello = name => {
    if (!name) {
        return "Hello, World"
    }

    if (name === "Alice") {
        return "Bonjour Alice"
    }

    return `Hello, ${name}`
}
