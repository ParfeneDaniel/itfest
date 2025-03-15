const FacultyCard = (props) => {
    return (
        <div>
            Nume: {props.name}<br />
            Email: {props.email}<br />
            Nume facultate: {props.university}<br />
            detalii: {props.details}<br />
        </div>
    )
}

export default FacultyCard;