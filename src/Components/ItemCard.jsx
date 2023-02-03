import React from 'react'
import "./ItemCard.css"

function ItemCard({itemImg , itemPrice, itemTitle, itemDesc, itemPlace , itemDate}) {
  return (
    <div className='item-card-container'>
        <div className="item-card-img">
            <img src={itemImg} alt="" />
        </div>
        <div className="item-card-info">
          <div className="item-card-price">
              <h1>{itemPrice}</h1>
          </div>
          <div className="item-card-title">
            <h4>{itemTitle}</h4>
          </div>
          <div className="item-card-des">
            {itemDesc}
          </div>

          <div className="item-card-footer">
            <div className="item-card-place">
             {itemPlace}
            </div>
            <div className="item-card-date">
                {itemDate}
            </div>
          </div>
        </div>
    </div>
  )
}

export default ItemCard