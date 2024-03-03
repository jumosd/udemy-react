
function CoreConcept({ title, description, image }) {
    return (
        <li>
            <img src={image} alt={title} />
            <h1>{title}</h1>
            <h3>{description}</h3>
        </li>
    )
}

export default CoreConcept