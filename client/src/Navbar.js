import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getNumbers } from "./actions/getAction";
import "./App.css";

function Navbar(props) {
  useEffect(() => {
    getNumbers();
  }, []);

  return (
    <header>
      <div className="overlay"> </div>
      <nav>
        <h2>Shop</h2>
        <ul>
          <li>
            <a href="#"> Home</a>
          </li>
          <li className="cart">
            <a href="#">
              <i class="fas fa-shopping-cart"></i>
              Cart <span>{props.cartProps.cartNumbers}</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
const mapStateToProps = (state) => ({
  cartProps: state.cartState,
});

export default connect(mapStateToProps, { getNumbers })(Navbar);
