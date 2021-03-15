import React from 'react';
class MenuSummary extends React.Component {
    render() {
        return (
            <div className="menuSummary"
              onClick={() => { this.props.menuClicked(this.props.menu); }}>
              <b>{this.props.menu.name}</b>-
              <em>{this.props.menu.price}</em>
              </div>
        )
    }
}

export default MenuSummary;