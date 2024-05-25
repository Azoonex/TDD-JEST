
type ListNameProps = {
    listName: string[]
}

export default function Really({ listName }: ListNameProps) {
    return (
        <ul>
            {listName.map(i => (
                <li key={i}>{i}</li>
            ))}
        </ul>
    )
}
