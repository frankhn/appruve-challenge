import React from 'react'
import './Card.css'
import Item from './Items/Item'

const Card = (props) => {
  
  return (
  <section class="card">
    <div class={`Name plan-${props.name}`}>{props.name}</div>
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
      <Item items={props.items}/>
    </div>
    <div class={`purchase purchase-${props.name}`}>
      Purchase
    </div>
  </section>
  )
}
export default Card