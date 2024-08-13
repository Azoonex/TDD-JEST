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

    test('redners a count of 10 after clicking the set button', async ()=>{
        render(<Counter />)
        const amoutInput = screen.getByRole('spinbutton')
        userEvent.type(amoutInput,'10')
        expect(amoutInput).toHaveValue(10)

        const setButton = screen.getByRole('button',{
            name: 'Set'
        });
        await userEvent.click(setButton)
        const counterElement = screen.getByRole("heading")
        expect(counterElement).toHaveTextContent['10']
    })

})
