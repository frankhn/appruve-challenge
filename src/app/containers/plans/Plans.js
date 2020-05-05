import React, { Fragment, Component } from 'react'
import Card from '../../components/UI/plans/Card'
import './Plans.css'

class Plans extends Component {
    render() {
        return (
            <div class="plans-wrapper">
                <Card name="Blonze" price="60" description=""/>
                <Card name="Silver" price="99" items=""/>
                <Card name="Gold" price="150" items=""/>
            </div>
        )
    }
}

export default Plans