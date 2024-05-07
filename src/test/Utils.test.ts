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

    it.only("should retrun info for valid string", () => {
        const actual = togetUpercaseItems("Abas");

        expect(actual.tolowerCase).toBe("abas");
        expect(actual.extraInfo).toEqual({});

        expect(actual.character.length).toBe(4);
        expect(actual.character).toHaveLength(4);

        expect(actual.character).toEqual(["A", "b", "a", "s"]);
        expect(actual.character).toContain<string>("A");

        expect(actual.character).toEqual(
            expect.arrayContaining(["b", "A", "a", "s"])
        );

        expect(actual.extraInfo).not.toBe(undefined);
        expect(actual.extraInfo).toBeTruthy()
    });
});
