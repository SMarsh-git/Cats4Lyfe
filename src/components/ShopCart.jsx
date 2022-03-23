import { RiShoppingCart2Line } from 'react-icons/ri';
import { BsCartX } from 'react-icons/bs';
import { useState } from 'react';
import {VscChromeClose} from 'react-icons/vsc';

export const ShopCart = ({ basketItems, removeItemFromBasket, image }) => {
	const [open, setOpen] = useState(false);

	const basketTotal = basketItems.reduce((accumulator, currentItem) => {
		accumulator += parseFloat(currentItem.price);
		return accumulator;
	}, 0);

	return (
		<>
			<div
				onClick={() => {
					setOpen(false);
				}}
				className={`overlay ${open ? 'overlay--open' : ''}`}></div>
			<div class={`modal ${open ? 'modal--open' : ''}`}>
				<button
					onClick={() => {
						setOpen(false);
					}}
					className="close-button">
					<VscChromeClose />
				</button>
				<h2>Shopping Basket</h2>

				{basketItems.map((item) => (
					<div className="container">
						<img src={item.image} alt="" />

						<h2>{item.name}</h2>
						<p>£{item.price}</p>
						<button className="remove">
							<BsCartX
								onClick={() => {
									removeItemFromBasket(item);
								}}
							/>
						</button>
					</div>
				))}

				<h4 className="total"> Total Cost: £{basketTotal.toFixed(2)}</h4>
			</div>

			<button
				onClick={() => {
					setOpen(true);
				}}
				className="shop-button">
				<ul>
					<li>
						<RiShoppingCart2Line />
					</li>
				</ul>
			</button>
		</>
	);
};

export default ShopCart;
