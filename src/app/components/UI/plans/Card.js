import React, { Component } from 'react'
import './Card.css'
import Item from './Items/Item'

class Card extends Component {
  
  render() {
    return (
      <section class="card" key={this.props.key}>
        <div class={`Name  plan-${this.props.name}`}>{this.props.name}</div>
        <div class="Price">
          <div class='currency'>
            $
       </div>
          <div class="buying-price">
            {this.props.price}<span class="Points">.99</span></div>
        </div>
        <div class="description">
          <p>{this.props.description}
          </p>
        </div>
        <div class="items">
          <Item items={this.props.items} />
        </div>
        <div class={`purchase purchase-${this.props.name}`} onClick={this.props.clicked}>
          Purchase
     </div>
      </section>
    )
  }
}

export default Card