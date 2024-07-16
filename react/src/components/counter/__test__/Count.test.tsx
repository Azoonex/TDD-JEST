import { screen, render } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Counter from "../Counter";
import userEvent from "@testing-library/user-event";

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

    test("render a count of 1 after clicking the increment button", async ()=>{
        userEvent.setup()
        render(<Counter />);
        const incrementButton = screen.getByRole("button",{
            name: "Increment"
        });
        await userEvent.click(incrementButton);
        const countElement = screen.getByRole('heading');
        expect(countElement).toHaveTextContent("1");
    })

})
