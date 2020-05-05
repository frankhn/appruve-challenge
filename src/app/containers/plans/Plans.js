import React, { Fragment, Component } from 'react'
import Card from '../../components/UI/plans/Card'
import './Plans.css'

class Plans extends Component {
    render() {
        return (
            <div class="plans-wrapper">
                <Card name="Blonze" price="60" description="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content"/>
                <Card name="Silver" price="99" items="" description="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content"/>
                <Card name="Gold" price="150" items="" description="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content"/>
            </div>
        )
    }
}


export default Plans