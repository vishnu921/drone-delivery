import React from 'react'
import { doc, updateDoc } from "firebase/firestore";
import { db } from '../firebaseConfig';

const OrderDetails = ({ order, user }) => {


  const handleAccept = async () => {
    const orderRef = doc(db, "orders", order.id)
    await updateDoc(orderRef, {
      status: "Accepted"
    });
  }
  const handleReject = async () => {
    const orderRef = doc(db, "orders", order.id)
    await updateDoc(orderRef, {
      status: "Rejected"
    });
  }

  return (
    <div className="order-details">
      <div>
        <p><strong>Pickup Point: </strong>{order.pickup}</p>
        <p><strong>Delivery Point: </strong>{order.delivery}</p>
        <p><strong>Status: </strong>{order.status}</p>
        <p><strong>Order Time: </strong>{order.createdAt}</p>
      </div>
      {user.isAdmin && order.status === "requested" && <div className='order-admin-action'>
        <button class='btn-accept' onClick={handleAccept}>Accept</button>
        <button class='btn-reject' onClick={handleReject}>Reject</button>
      </div>}
    </div>
  )
}

export default OrderDetails