
const Card = ({id, name, email}) => {
    return (
        <div class="ct">
            <img src={`https://robohash.org/${id}?200x200`} />
            <div>
                <h2>{name} </h2>
                <p>{email} </p>
            </div>
        </div>
    )
    
}

export default Card;