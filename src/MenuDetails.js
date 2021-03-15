import React from 'react';
class MenuDetails extends React.Component {
    render() {
        return (
            (this.props.menu) ? (
                <div>
                    <label>Name</label>: {this.props.menu.name}<br />
                    <label>Description</label>: {this.props.menu.description}<br />
                    <label>Price</label>: {this.props.menu.price}<br />
                    <label>Number Available</label>: {this.props.menu.numAvailable}<br />
                    <label>Category</label>: {this.props.menu.category}<br />
                    <label>Menu Number</label>: {this.props.menu.menuItemNumber}<br />
                </div>)
                : (
                    <div>No Menu Selected</div>
                )
            )
    }
}

export default MenuDetails;