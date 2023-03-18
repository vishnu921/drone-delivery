import React from 'react'

const DroneDetails = ({drone, user }) => {
  return (
    <div className='drone-details'>
      <p><strong>Current Location: </strong>{drone.location}</p>
      <p><strong>Status: </strong>{drone.status}</p>
    </div>
  )
}

export default DroneDetails