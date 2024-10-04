import { createContext, useEffect, useState } from 'react'

export const TokenContext = createContext({})

export function TokenContextProvider({ children }) {
  const [token, setToken] = useState()

  useEffect(() => {
    getToken()
  }, [])

  function addToken(newToken) {
    try {
      localStorage.setItem('@unipe:token', newToken)
      setToken(newToken)
    } catch (error) {}
  }

  function removeToken() {
    localStorage.removeItem('@unipe:token')
    setToken('')
  }

  function getToken() {
    try {
      const response = localStorage.getItem('@unipe:token')

      setToken(response)

      return token
    } catch (error) {}
  }

  return (
    <TokenContext.Provider value={{ token, addToken, removeToken, getToken }}>
      {children}
    </TokenContext.Provider>
  )
}
