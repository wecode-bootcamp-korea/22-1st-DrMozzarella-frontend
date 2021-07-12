import React, { Component } from 'react';
import './DropDownNav.scss';

export default class DropDownNav extends Component {
  render() {
    const { titleList } = this.props;

    console.log(`this.props.dropdown`, this.props);
    return (
      <>
        <div className="titleListBox">
          <li className="titleListContainer">
            {titleList.map(list => (
              <div className="categoryName">{list.name.toUpperCase()}</div>
            ))}
          </li>
        </div>
      </>
    );
  }
}

//titleList={list.name}
//titleImage={list.image_url}
