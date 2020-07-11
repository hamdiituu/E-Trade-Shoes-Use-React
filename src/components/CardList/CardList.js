import React, { Component } from 'react'
import Card from '../Card/Card';
import "./styles.css";
class CardList extends Component {
    render() {
        return (
            <div className="product-list">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                
            </div>
        )
    }
}

export default CardList;