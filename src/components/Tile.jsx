

const Tile = ({ image, name, age, gender, breed, price, addToBasket, id }) => {
	const onClick = () => {
		addToBasket({ id, name, price, image });
	};
	return (
		<div className="tile">
			<img src={image} alt="" />
			<h4>{name}</h4>
			<h5>{age} year old {gender} {breed}</h5>
			<p>Cost £{price}</p>
			<button onClick={onClick}>Add to Basket</button>
		</div>
	);
};

export default Tile;
