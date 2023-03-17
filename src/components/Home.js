import React, { useState, useEffect } from 'react'
import { auth, db } from "../firebaseConfig"
import { collection, getDocs, query, where } from 'firebase/firestore'
import Admin from './Admin'
import RegularUser from './RegularUser'

const Home = () => {

    function GetCurrentUser() {
      const [user, setUser] = useState("");
      // const usersCollectionRef = collection(db, "users");
      useEffect(() => {
          auth.onAuthStateChanged(userlogged => {
              if (userlogged) {
                  
                  const getUsers = async () => {
                      const q = query(collection(db, "users"), where("uid", "==", userlogged.uid));
                      
                      const data = await getDocs(q);
                      setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
                  };
                  getUsers();
              }
              else {
                  setUser(null);
              }
          })
      }, [])
      return user
  }
  const user = GetCurrentUser();
  // console.log(user)
  // console.log("isAdmin: ", user.isAdmin)


  return (
    <div className="home">
      {user && user[0].isAdmin && <Admin user={user[0]} />}
      {user && !user[0].isAdmin && <RegularUser user={user[0]} />}
    </div>
  )
}

export default Home