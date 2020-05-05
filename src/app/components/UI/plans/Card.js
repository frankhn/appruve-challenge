import React from 'react'
import './Card.css'
import Item from './Items/Item'

const Card = (props) => (
  <div class="card">
    <div class="Name">{props.name}</div>
    <div class="Price">
      <div class='currency'>
        $
      </div>
      <div class="buying-price">
        {props.price}<span class="Points">.99</span></div>
    </div>
    <div class="description">
      <p>{props.description}
      </p>
    </div>
    <div class="items">
      <Item />
      <Item />
      <Item />
      <Item />
    </div>
    <div class={`purchase purchase-${props.name}`}>
      Purchase
    </div>
  </div>
)
export default Card