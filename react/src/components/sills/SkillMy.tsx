import { useState } from "react"
import { SkillsProps } from "./TypeSkill"

export default function SkillMy({ skill }: SkillsProps) {

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    return (
        <>
            <ul>
                {
                    skill.map((skill) => {
                        return <li key={skill}>{skill}</li>
                    })
                }
            </ul>
            {isLoggedIn ? (
                <button>Start learning</button>
            ) : (
                <button onClick={() => setIsLoggedIn(true)}>Login</button>
            )}
        </>
    )
}
