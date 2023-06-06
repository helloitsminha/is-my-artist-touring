const Item = ({ name, key, imageSource, altText }) => {
    return (
        <li className="photo-container">
            <p>{name}</p>
            <img src={imageSource} alt={altText} />
        </li>
    )
}

export default Item;