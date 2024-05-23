import { screen, render } from "@testing-library/react";
import Application from '../Application'
import { describe, expect, test } from "vitest";


describe("Application testring", () => {
    test("Does it exist button ?", () => {
        render(<Application />)
        const inputElement = screen.getByRole("button");
        expect(inputElement).toBeInTheDocument()
    });

    test("Does it exit input", () => {
        render(<Application />);
        const selectElmenet = screen.getByRole("combobox");
        expect(selectElmenet).toBeInTheDocument()
    })
    test("Does it exit input", () => {
        render(<Application />);
        const checkboxElment = screen.getByRole("checkbox");
        expect(checkboxElment).toBeInTheDocument()
    })

    test("h1 Element", () => {
        render(<Application />);
        const h1Elment = screen.getByRole("heading", {
            level: 1
        });
        expect(h1Elment).toBeInTheDocument()
    })

    test("Renders correctly",()=>{
        render(<Application />)
        const nameElement2 = screen.getByLabelText("indexMain")
        expect(nameElement2).toBeInTheDocument()

        const nameLeement3 = screen.getByPlaceholderText("fullName")
        expect(nameLeement3).toBeInTheDocument()

        const nameLeement4 = screen.getByText("All fields are mandatory")
        expect(nameLeement4).toBeInTheDocument()

        const nameLeement5 = screen.getByDisplayValue("amirabas")
        expect(nameLeement5).toBeInTheDocument()

        const imageElement = screen.getByAltText("not found");
        expect(imageElement).toBeInTheDocument()

        const closeElement = screen.getByTitle("close");
        expect(closeElement).toBeInTheDocument()

    })

})