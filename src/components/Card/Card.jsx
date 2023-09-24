import "./Card.css";
const Card = ({ title, details, Icon }) => {
    return (
        <div className="card">
            <div className="card-content">
                <div><p>{<Icon size={30} />}</p></div>

                <div><h2>{title}</h2></div>
                <div>
                    {details.map((data, index) => (
                        <p key={index}>{data}</p>
                    ))}
                </div>

            </div>


        </div>
    )
}

export default Card
