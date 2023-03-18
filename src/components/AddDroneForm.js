import { useState } from "react"
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebaseConfig"

const AddDroneForm = () => {
  const [location, setLocation] = useState('')
  const [status, setStatus] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault() 

    await addDoc(collection(db, "drones"), {
      location,
      status
    });

    setLocation('')
    setStatus('')
  }

  return (
    <form className="add-drone-form" onSubmit={handleSubmit}>
      <h3>Add Drone</h3>
      <label htmlFor="location">Location:</label>
      <input 
        type="text"
        onChange={(e) => setLocation(e.target.value)}
        value={location}
        name="location"
      />
      <label htmlFor="status">status:</label>
      <input 
        type="text"
        onChange={(e) => setStatus(e.target.value)}
        value={status}
        name="status"
      />
      <button>Add Drone</button>
      {error && <div className="error">{error}</div> }
    </form>
  )
}

export default AddDroneForm