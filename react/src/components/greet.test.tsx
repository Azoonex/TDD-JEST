import {render,screen} from "@testing-library/react"
import { expect, test } from "vitest"
import Greet from "./Greet"

test("is Abas in the screen?",()=>{
    render(<Greet />);
    const textElemtn = screen.getByText(/abas/i);
    expect(textElemtn).toBeInTheDocument();
})