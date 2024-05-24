import { SkillsProps } from "../TypeSkill"



export default function SkillMy({ skill }: SkillsProps) {

    return (
        <>
            <ul>
                {
                    skill.map((skill) => {
                        return <li key={skill}>{skill}</li>
                    })
                }
            </ul>
        </>
    )
}
