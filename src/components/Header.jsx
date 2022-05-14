import React, { useState, useContext } from 'react';
import Menu from "../components/Menu"
import Menumobile from '../components/Menumobile';
import MyOrder from "../containers/MyOrder";
import menu from '../../public/assets/Icons/icon_menu.svg';
import logo from '../../public/assets/pictures/logo_yard_sale.svg';
import AppContext from '../context/AppContext';
import ShoppingCart from '../../public/assets/Icons/icon_shopping_cart.svg';
import "../styles/Header.scss";

const Header = () => {
	const [toggle, setToggle] = useState(false);
	const [toggleOrders, setToggleOrders] = useState(false);
	const { state } = useContext(AppContext);
  const [mtoggle, setmToggle] = useState(false);

	const handleToggle = () => {
		setToggle(!toggle);
	}
  const handlemToggle = () => {
		setmToggle(!mtoggle);
	}


	return (
    <nav>
      <img src={menu} alt='menu' className='menu'onClick={handlemToggle} />
      <div className="navbar-left">
        <img src={logo} alt="logo" className="logo"  />
        <ul>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Clothes</a>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Furnitures</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul>
          <li className="navbar-email" onClick={handleToggle}> platzi@example.com
          </li>
          <li className="navbar-shopping-cart" onClick={() => setToggleOrders(!toggleOrders)}>
            <img src={ShoppingCart} alt="shopping cart" />
            {state.cart.length >0 ? <div>{state.cart.length}</div>  :null}
          </li>
        </ul>
      </div>
      {toggle && <Menu />}
      {mtoggle && <Menumobile />}
      {toggleOrders && <MyOrder />}

    </nav>

  );
}

export default Header;