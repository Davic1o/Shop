import React from 'react';

import Flechita from '../../public/assets/Icons/flechita.svg';
import '../styles/Order.scss';

const Order = () => {

	return (
		<div className="Order">
			<p>
				<span>03.25.21</span>
				<span>6 articles</span>
			</p>
			<p>$560.00</p>
			<img src={Flechita} alt="arrow"  />
		</div>
	);
}
export default Order;