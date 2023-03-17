import { useState } from "react"
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebaseConfig"

const OrderForm = ({ user }) => {
  const [pickup, setPickup] = useState('')
  const [delivery, setDelivery] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!user) {
      setError('You must be logged in')
      return
    }

    const order = {
      email: user.email,
      pickup: pickup,
      delivery: delivery,
      status: 'requested'
    }

    await addDoc(collection(db, "orders"), {
      ...order,
      createdAt: serverTimestamp()
    });

    setPickup('')
    setDelivery('')
  }

  return (
    <form className="request-form" onSubmit={handleSubmit}>
      <h3>Request a Delivery</h3>
      <label htmlFor="pickup">Pickup Point:</label>
      <input 
        type="text"
        onChange={(e) => setPickup(e.target.value)}
        value={pickup}
        name="pickup"
      />
      <label htmlFor="delivery">Delivery Point:</label>
      <input 
        type="text"
        onChange={(e) => setDelivery(e.target.value)}
        value={delivery}
        name="delivery"
      />
      <button>Add Request</button>
      {error && <div className="error">{error}</div> }
    </form>
  ) 
}

export default OrderForm