import { toUpserCase, togetUpercaseItems } from "../app/Utils";

// AAA PRINCIPLES
// ARRANGE
// ACT
// ASSERT

//SETUP
// TEARDWON

describe("Utils test String", () => {
    it("Shoulde Test UperCaseITems", () => {
        const sut = toUpserCase;
        const expected = "ABC";

        const actule = sut("abc");

        expect(actule).toBe(expected);
    });

    describe("THIS IS BAST TEST FOR JAVASCRIPT TEST UPPERCASE CKARACTER", () => {
        test("test to lowerCase", () => {
            const actual = togetUpercaseItems("Abas");
            expect(actual.tolowerCase).toBe("abas");
        });
        test("test to uperCase", () => {
            const actual = togetUpercaseItems("Abas");
            expect(actual.touperCase).toBe("ABAS");
        });
        test("test for tolowercase", () => {
            const actual = togetUpercaseItems("Abas");
            expect(actual.tolowerCase).toBe("abas");
        });
        test("to be ckaracter cunvert lenght", () => {
            const actual = togetUpercaseItems("Abas");
            expect(actual.lenght).toBe(4);
        });
        test("to content is the bast", () => {
            const actual = togetUpercaseItems("Abas");
            expect(actual.character).toEqual(["A", "b", "a", "s"]);
            expect(actual.character).toContain<string>("A");
        });
    });

    describe.only("TEST UPERCASE EXAPLE", () => {
        it.each([
            { input: "abc", expected: "ABC" },
            { input: "Abas", expected: "ABAS" },
            { input: "def", expected: "DEF" },
        ])("$input test exaple to cunvert $expected", ({ input, expected }) => {
            const actual = toUpserCase(input);
            expect(actual).toBe(expected);
        });
    });
});
