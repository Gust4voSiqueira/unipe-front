import { createContext, useState } from 'react'

export const DriverContext = createContext({})

export function DriverContextProvider({ children }) {
  const [driver, setDriver] = useState()

  function addDriver(newDriver) {
    try {
      setDriver(newDriver)
    } catch (error) {}
  }

  function removeDriver() {
    setDriver(null)
  }
 
  return (
    <DriverContext.Provider value={{ driver, addDriver, removeDriver }}>
      {children}
    </DriverContext.Provider>
  )
}
