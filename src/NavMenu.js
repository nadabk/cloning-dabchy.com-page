import React from "react";

class NavMenu extends React.Component {
  constructor(props) {
    super(props);
    this.menu = this.props.menu;
  }

  render() {
    return (
      <div className="nav-menu">
        {this.menu.map((el, i) => {
          return <span key={i}>{el}</span>;
        })}
      </div>
    );
  }
}

export default NavMenu;
