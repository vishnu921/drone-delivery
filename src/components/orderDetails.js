import React from 'react'

const OrderDetails = ({ order, user }) => {
  return (
    <div className="order-details">
      <p><strong>Pickup Point: </strong>{order.pickup}</p>
      <p><strong>Delivery Point: </strong>{order.delivery}</p>
      <p><strong>Status: </strong>{order.status}</p>
      <p><strong>Order Time: </strong>{order.createdAt}</p>
    </div>
  )
}

export default OrderDetails