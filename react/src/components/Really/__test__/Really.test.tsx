import { screen, render } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Really from "../Really";


const listName = ["amir", "reza", "hasna"];

describe("Really for contect main ", () => {

    test("render of list?", () => {
        render(<Really listName={listName} />)
        const listNames = screen.getAllByRole("listitem")
        expect(listNames).toHaveLength(3)
    })
})