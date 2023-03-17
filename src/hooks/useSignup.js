import { useState } from "react"
import { useAuthContext } from './useAuthContext'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth, db } from '../firebaseConfig'
import { collection, addDoc } from 'firebase/firestore'

export const useSignup = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const { dispatch } = useAuthContext()

  const signup = async (email, password) => {
    try {
      setIsLoading(true)
      setError(null)

      const response = await createUserWithEmailAndPassword(auth, email, password)
      console.log(response)
      const user = response.user;

      const result = await addDoc(collection(db, "users"), { email: email, password: password, isAdmin: false, uid: user.uid })
      console.log(result)

      const json = response.user
      console.log(json)

      // save the user to local storage
      localStorage.setItem('user', JSON.stringify(json))

      // update the auth context
      dispatch({type: 'LOGIN', payload: json})

      setIsLoading(false)
    } catch (error) {
      const msg = error.code
      console.log(msg)
      setError(msg)
      setIsLoading(false)
    }
  }

  return { signup, isLoading, error }
}