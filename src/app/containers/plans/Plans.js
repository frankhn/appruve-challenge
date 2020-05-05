import React, { Component } from 'react'
import Card from '../../components/UI/plans/Card'
import './Plans.css'

class Plans extends Component {
    state = {
        plans: [{
                name: "silver",
                price: 60,
                description: "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document",
                items: ['Free setup', '5GB Disk Space', '5 Subdomains', 'Email Support']
            },
            {
                name: "blonze",
                price: 99,
                description: "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document",
                items: ['Free setup', '255GB Disk Space', '20 Subdomains', 'Unlimited Support']
            },
            {
                name: "gold",
                price: 150,
                description: "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document",
                items: ['Free setup', '500GB Disk Space', 'unlimited Subdomains', '24/7 Support']
            }
        ]
    }

    mapPlans = () => {
        const { plans } = this.state
        const cards = (plans.map((plan, i) => (
            <Card 
            name={plan.name}
            description={plan.description}
            price={plan.price} 
            items={plan.items}
            key={i}/>
        )))
        return cards
    }
    render() {
        const result = this.mapPlans()
        return (
            <div class="wrapper">
                {result}
            </div>
        )
    }
}

export default Plans