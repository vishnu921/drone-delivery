import OrderForm from "./orderForm"

const RegularUser = ({ user }) => {

  const orders = [
    {
      id: 1,
      email: 'ba@gmail.com',
      pickup: 'bhubaneswar',
      dilevery: 'cuttack',
      status: 'requested',
      time: Date().toLocaleString()
    },
    {
      id: 2,
      email: 'teste@gmail.com',
      pickup: 'delhi',
      dilevery: 'gurgaon',
      status: 'dispached',
      time: Date().toLocaleString()
    }
  ]

  return (
    <div className='user'>
      <div className="orders">
        {orders && orders.map((order) => (
          <div key={order.id} >order</div>
        ))}
      </div>
      <OrderForm user={user}/>
    </div>
  )
}

export default RegularUser