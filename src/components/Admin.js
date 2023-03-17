import React, { useEffect, useState } from "react";
import {
  query,
  collection,
  orderBy,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../firebaseConfig"
import OrderDetails from "./orderDetails"

const Admin = ({ user }) => {

  const [orders, setOrders] = useState([])
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    const q = query(
      collection(db, "orders"),
      orderBy("createdAt")
    );
    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      let orders = [];
      QuerySnapshot.forEach((doc) => {
        let currentOrder = {...doc.data()}
        currentOrder.createdAt = currentOrder.createdAt.toDate().toDateString()
        orders.push({ ...currentOrder, id: doc.id });
      });
      setOrders(orders);
    });
    return () => unsubscribe;
  }, [user.email]);

  return (
    <div className="admin">
      <div className="orders">
      <h2>Orders</h2>
        {orders && orders.map((order) => (
          <OrderDetails key={order.id} order={order} user={user}/>
        ))}
        {!orders && <h1>! No Delivery Orders Yet !</h1>}
      </div>
    </div>
  )
}

export default Admin