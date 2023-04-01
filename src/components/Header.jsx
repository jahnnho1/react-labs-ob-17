import React from "react";
import "../styles/header.scss";
import iconMenu from "../assets/icons/icon_menu.svg";
import logoYard from "../assets/logos/logo_yard_sale.svg";
import iconShoppingCart from "../assets/icons/icon_shopping_cart.svg";
import Menu from "./Menu";
import CartView from "./CartView";
import MobileMenu from "./mobileMenu";

const Header = () => {
  const [menuActive, setMenuActive] = React.useState(false);
  const [cartViewActive, setCartViewActive] = React.useState(false);
  const [mobileMenuActive, setMobileMenuActive] = React.useState(false);

  const handleMenu = () => {
    setMenuActive(!menuActive);
    setCartViewActive(false);
  };

  const handleCartView = () => {
    setCartViewActive(!cartViewActive);
    setMenuActive(false);
  };

  const handleMobileMenu = () => {
    setMobileMenuActive(!mobileMenuActive);
    setMenuActive(false);
  };

  return (
    <nav>
      <img src={iconMenu} alt="menu" className="menu"  onClick={() => handleMobileMenu()} />
      <div className="navbar-left">
        <img src={logoYard} alt="logo" className="logo" />
        <ul>
          <li>
            <a href="/">all</a>
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
          <li className="navbar-email" onClick={() => handleMenu()}>
            platzi@example.com
          </li>
          <li className="navbar-shopping-cart" onClick={() => handleCartView()}>
            <img src={iconShoppingCart} alt="shopping cart" />
            <div>2</div>
          </li>
        </ul>
      </div>
      {menuActive ? <Menu /> : null}
      {cartViewActive ? <CartView /> : null}
      {mobileMenuActive ? <MobileMenu /> : null}
    </nav>
  );
};

export default Header;
