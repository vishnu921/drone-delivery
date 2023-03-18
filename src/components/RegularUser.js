import OrderForm from "./orderForm"
import OrderDetails from "./orderDetails"
import React, { useEffect, useState } from "react";
import {
  query,
  collection,
  orderBy,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../firebaseConfig"

const RegularUser = ({ user }) => {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    const q = query(
      collection(db, "orders"),
      orderBy("createdAt", "desc")
    );
    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      let orders = [];
      QuerySnapshot.forEach((doc) => {
        let currentOrder = {...doc.data()}
        if (currentOrder.email === user.email) {
          if (currentOrder.createdAt) currentOrder.createdAt = currentOrder.createdAt.toDate().toDateString()
          orders.push({ ...currentOrder, id: doc.id });
        }
      });
      setOrders(orders);
    });
    return () => unsubscribe;
  }, [user.email]);

  return (
    <div className='user'>
      <div className="orders">
      <h2>Orders</h2>
        {orders && orders.map((order) => (
          <OrderDetails key={order.id} order={order} user={user}/>
        ))}
        {orders.length === 0 && <h1>! No Delivery Orders Yet !</h1>}
      </div>
      <OrderForm user={user}/>
    </div>
  )
}

export default RegularUser