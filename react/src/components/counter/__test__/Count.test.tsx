import { screen, render } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Counter from "../Counter";

describe("Counter", () => {
    test("render courectly Counter",()=>{
        render(<Counter />);
        const countElement = screen.getByRole("heading");
        expect(countElement).toBeInTheDocument();
        const incrementButton = screen.getByRole("button",{
            name: "Increment"
        });
        expect(incrementButton).toBeInTheDocument();
    })

    test("renders a count of 0",()=>{
        render(<Counter />);

    })
})
