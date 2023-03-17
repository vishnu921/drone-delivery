import { useState } from "react"
import { useAuthContext } from './useAuthContext'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const useLogin = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const { dispatch } = useAuthContext()
  const auth = getAuth();

  const login = async (email, password) => {
    try {
      setIsLoading(true)
      setError(null)

      const response = await signInWithEmailAndPassword(auth, email, password)
      console.log(response)
      
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

  return { login, isLoading, error }
}