import React, { useEffect, useState } from "react";
import {
  query,
  collection,
  orderBy,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../firebaseConfig"
import OrderDetails from "./orderDetails"
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import DroneDetails from "./DroneDetails";
import AddDroneForm from "./AddDroneForm";

const Admin = ({ user }) => {

  const [orders, setOrders] = useState([])
  const [drones, setDrones] = useState([])

  useEffect(() => {
    const q = query(
      collection(db, "orders"),
      orderBy("createdAt", "desc")
    );
    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      let orders = [];
      QuerySnapshot.forEach((doc) => {
        let currentOrder = {...doc.data()}
        if (currentOrder.createdAt) currentOrder.createdAt = currentOrder.createdAt.toDate().toDateString()
        orders.push({ ...currentOrder, id: doc.id });
      });
      setOrders(orders);
    });
    return () => unsubscribe;
  }, []);

  useEffect(() => {
    const q = query(
      collection(db, "drones")
    );
    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      let drones = [];
      QuerySnapshot.forEach((doc) => {
        let currentDrones = {...doc.data()}
        if (currentDrones.createdAt) currentDrones.createdAt = currentDrones.createdAt.toDate().toDateString()
        drones.push({ ...currentDrones, id: doc.id });
      });
      setDrones(drones);
    });
    return () => unsubscribe;
  }, []);

  console.log(drones)
  return (
    <div className="admin">
      <Tabs>
        <TabList>
          <Tab><h2>Orders</h2></Tab>
          <Tab><h2>Drones</h2></Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <div className="orders">
              {orders && orders.map((order) => (
                <OrderDetails key={order.id} order={order} user={user}/>
              ))}
              {orders.length === 0 && <h1>! No Delivery Orders Yet !</h1>}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="drones">
              {drones && drones.map((drone) => (
                <DroneDetails key={drone.id} drone={drone} user={user}/>
              ))}
              {drones.length === 0  && <h1>! No Drones Available !</h1>}
            </div>
          </TabPanel>
        </TabPanels>
      </Tabs>
      <AddDroneForm />
    </div>
  )
}

export default Admin