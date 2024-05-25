import { screen, render } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import SkillMy from "../SkillMy";

describe("Skills", () => {
    const skill = ["HTML", "CSS", "JAVASCRIPT"];

    test("renders corectyly", () => {
        render(<SkillMy skill={skill} />);
        const listElemnt = screen.getByRole("list");
        expect(listElemnt).toBeInTheDocument();
    });

    test("renders a list of skills", () => {
        render(<SkillMy skill={skill} />)
        const listitemElement = screen.getAllByRole('listitem')
        expect(listitemElement).toHaveLength(3)
    })

    test("renders Login button", () => {
        render(<SkillMy skill={skill} />);
        const loginButton = screen.getByRole("button");
        expect(loginButton).toBeInTheDocument()
    })

    test("render login for Dom", () => {
        const buttonLoing = screen.queryByRole("button",{
            name: "Login"
        })
        expect(buttonLoing).not.toBeInTheDocument()
    })
});
