import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/francois-clothing.svg";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase.utils";
import { useSelector } from "react-redux";
import CartIcon from "../Cart/CartIcon";
import CartDropdown from "../Cart/CartDropdown";
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../selectors/cart.selectors";
import { selectCurrentUser } from "../../selectors/user.selector";

const Header = () => {
  const state = useSelector((state) => state);
  const structuredSelector = createStructuredSelector({
    user: selectCurrentUser,
    hidden: selectCartHidden,
  });
  const selectedState = structuredSelector(state);

  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        {selectedState.user ? (
          <div className="option" onClick={() => signOut(auth)}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {!selectedState.hidden && <CartDropdown />}
    </div>
  );
};

export default Header;
