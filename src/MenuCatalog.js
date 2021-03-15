import React from 'react';
import MenuSummary from './MenuSummary.js';
import MenuDetails from './MenuDetails.js';

class MenuCatalog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menus: [],
            selectedMenu: null
        }
    }

    componentDidMount() {
        console.log("Calling menu service");
        fetch("/menu/menus")
          .then(res => res.json())
          .then(menus => {
              this.setState({ menus: menus });
              console.log("Menus loaded");
          })
          .catch((error) => {
              console.log("Failed ot get menus");
              alert(error);
          })
    }

    updateDetails = (menu) => {
        console.log("Menu selected: %s", JSON.stringify(menu));
        this.setState({ selectedMenu: menu});
    }

    render() {
        return (
            <div>
                <h1>Menu Catalog</h1>
                <hr></hr>
                <div className="menuList">
                    <b>Menu List</b>
                    <ol>{
                        this.state.menus.map(
                            (value,index) => {
                                return <li><MenuSummary menu={value} menuClicked={this.updateDetails} index = {index} /></li>
                            }
                        )
                    }</ol>
                </div>
                <div><MenuDetails menu={this.state.selectedMenu} /></div>
            </div>
        )
    }

}

export default MenuCatalog;