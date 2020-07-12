import React, { Component } from 'react'
import Card from '../Card/Card';
import "./styles.css";
class CardList extends Component {
    render() {
        return (
            <div className="product-list">
               {
                   this.props.products.map(item=>{
                     return ( item.visible && <Card  product={item} key={item.id} /> )
                   })

               }
                
            </div>
        )
    }
}

export default CardList;