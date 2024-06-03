import { render, screen } from "@testing-library/react"
import { describe, expect, test } from "vitest"
import Greet from "../components/Greet"

describe("GReets", () => {
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

const colors = ['read', 'yellow', 'blue']

const [red, yellow, blue] = colors

interface TypeNames {
    name : string,
    lastName : string,
    age: number | string
}

const names: TypeNames = { name: 'alireza', lastName: 'amirabas', age: 0 }

const { name, lastName, age } = names

