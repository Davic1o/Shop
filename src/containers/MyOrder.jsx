import React, {useContext, useState} from 'react';
import AppContext from '../context/AppContext';
import OrderItem from '../components/OrderItem';
import flechita from "../../public/assets/Icons/flechita.svg"
import '../styles/MyOrder.scss';

const MyOrder = () => {
	const [toggleOrder, setToggleOrder] = useState(false);
const {state} =useContext(AppContext);

const sumTotal =()=>{
	
	const reducer = (accumalator, currentValue)=>accumalator+currentValue.price;
	const sum = state.cart.reduce(reducer, 0);

	return sum;
}

	return (
		<aside className="MyOrder">
			<div className="title-container">
				<img src={flechita} alt="arrow" onClick={() => setToggleOrder(toggleOrder)} />
				<p className="title">My order</p>
			</div>
			<div className="my-order-content">
				{state.cart.map(product => (
				<OrderItem product= {product} key={"orderItem-${product.id}"} />
				))}
				
				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>${sumTotal()}</p>
				</div>
				<button className="primary-button">
					Checkout
				</button>
			</div>
			{toggleOrder && <MyOrder />}
		</aside>
		
	);
}

export default MyOrder;