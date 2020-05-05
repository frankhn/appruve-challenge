import React, { Component, Fragment } from 'react'
import './Item.css'

class Item extends Component {

    mapItems = () => {
        const {items} = this.props
        const res = items.map((item, i) => (
        <div class="item">{item}</div>
        ))
        return res
    }
    render() {
        return (
          <Fragment>
              {this.mapItems()}
          </Fragment>
        )
    }
}

export default Item