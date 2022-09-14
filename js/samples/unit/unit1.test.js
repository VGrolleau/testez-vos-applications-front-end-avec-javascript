import { sayHello } from "./unit1.js";

describe("sayHello Unit Test Suites", () => {
    it('should return "Hello, world"', () => {
        expect(sayHello()).toBe("Hello, World");
    });

    it('should return "Hello, Virginie"', () => {
        expect(sayHello("Virginie")).toBe("Hello, Virginie");
    });
});