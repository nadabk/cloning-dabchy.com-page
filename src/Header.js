import React from "react";
import NavMenu from "./NavMenu.js";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="header">
        <div className="header-nav-menu">
          <img
            className="header-logo"
            src="https://www.dabchy.com/assets/images/logo2@4x.png"
          />
          <NavMenu menu={["Fil d'actualité", "Catalogue", "Recherche"]} />
        </div>
        <div className="header-user-items">
          <div className="header-icons">
            <i class="far fa-heart" />
            <i class="far fa-bell" />
            <i class="fas fa-shopping-cart" />
          </div>
          <input type="button" value="+ Je vends" className="header-button" />

          <img
            className="user-pic"
            src="https://res.cloudinary.com/sagacity/image/upload/c_crop,h_1333,w_2000,x_0,y_0/c_limit,dpr_1.0,f_auto,fl_lossy,q_80,w_1100/teresa_mosqueda_city_council_position_8_jl9akj.jpg"
          />
        </div>
      </div>
    );
  }
}

export default Header;
