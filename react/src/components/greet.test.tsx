import { render, screen } from "@testing-library/react"
import { describe, expect, test } from "vitest"
import Greet from "./Greet"

describe("GReet", () => {
    test.only("is Abas in the screen ?", () => {
        render(<Greet />);
        const textElemtn = screen.getByText(/abas/i);
        expect(textElemtn).toBeInTheDocument();
    })

    describe.only("Greet hello", () => {
        test.skip("is hello in the componente greet? ", () => {
            render(<Greet />)
            const textElement = screen.getByText('hello')
            expect(textElement).toBeInTheDocument()
        })
    })
})